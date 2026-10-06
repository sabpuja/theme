(function(){
  function normalizeCode(value){
    return String(value || '').trim().toUpperCase().replace(/\s+/g,'');
  }

  function productJsonUrl(productUrl){
    var clean=String(productUrl || '').split('?')[0].split('#')[0];
    return clean.replace(/\.js$/,'') + '.js';
  }

  function guideUrlForProduct(product, productData){
    var url=String(product.url || '').split('?')[0].split('#')[0];
    var handle=String((productData && productData.handle) || '').toLowerCase();
    var type=String((productData && productData.type) || '').toLowerCase();

    if(handle === 'daily-puja-kit' || handle === 'navratri-puja-kit' || type.indexOf('astrological remedy kit') !== -1){
      return url + '#puja-guide';
    }
    return url;
  }

  async function findExactSku(root, rawCode){
    var code=normalizeCode(rawCode);
    if(!code) return null;

    var base=root.getAttribute('data-predictive-search-url') || '/search/suggest';
    var endpoint=base.replace(/\.json$/,'') + '.json'
      + '?q=' + encodeURIComponent(rawCode.trim())
      + '&resources[type]=product&resources[limit]=10';

    var response=await fetch(endpoint,{headers:{'Accept':'application/json'}});
    if(!response.ok) throw new Error('search_failed');

    var payload=await response.json();
    var products=payload && payload.resources && payload.resources.results
      ? payload.resources.results.products || []
      : [];

    for(var i=0;i<products.length;i++){
      try{
        var productResponse=await fetch(productJsonUrl(products[i].url),{headers:{'Accept':'application/json'}});
        if(!productResponse.ok) continue;
        var productData=await productResponse.json();
        var variants=Array.isArray(productData.variants) ? productData.variants : [];
        var exact=variants.some(function(variant){return normalizeCode(variant.sku) === code;});
        if(exact){
          return {
            title:productData.title || products[i].title || 'your product',
            url:guideUrlForProduct(products[i],productData)
          };
        }
      }catch(error){
        // Continue checking the remaining predictive-search candidates.
      }
    }
    return null;
  }

  function initGuide(root){
    if(root.dataset.spGuideReady === 'true') return;
    root.dataset.spGuideReady='true';

    var codeForm=root.querySelector('[data-sp-guide-code-form]');
    var input=root.querySelector('#sp-guide-code');
    var status=root.querySelector('[data-sp-guide-status]');
    var codeButton=codeForm ? codeForm.querySelector('button[type="submit"]') : null;
    var selectForm=root.querySelector('[data-sp-guide-select-form]');
    var select=root.querySelector('[data-sp-guide-select]');
    var selectButton=root.querySelector('[data-sp-guide-select-button]');

    function setStatus(message,state){
      if(!status) return;
      status.textContent=message || '';
      status.classList.remove('is-error','is-success','is-loading');
      if(state) status.classList.add('is-' + state);
    }

    if(codeForm && input){
      codeForm.addEventListener('submit',async function(event){
        event.preventDefault();
        var code=input.value.trim();
        if(!code){
          setStatus('Enter the Guide Code or SKU printed on your product.','error');
          input.focus();
          return;
        }

        setStatus('Looking for the matching Sabpuja product…','loading');
        if(codeButton) codeButton.disabled=true;

        try{
          var match=await findExactSku(root,code);
          if(match){
            setStatus('Guide found for ' + match.title + '. Opening it now…','success');
            window.setTimeout(function(){window.location.assign(match.url);},250);
          }else{
            setStatus('We could not match that code. Check the code and try again, or choose a guide below.','error');
          }
        }catch(error){
          setStatus('Guide lookup is temporarily unavailable. Please choose a guide below or try again.','error');
        }finally{
          if(codeButton) codeButton.disabled=false;
        }
      });
    }

    if(select && selectButton){
      function syncButton(){selectButton.disabled=!select.value;}
      select.addEventListener('change',syncButton);
      syncButton();
    }

    if(selectForm && select){
      selectForm.addEventListener('submit',function(event){
        event.preventDefault();
        if(!select.value){
          select.focus();
          return;
        }
        window.location.assign(select.value);
      });
    }
  }

  function boot(){
    document.querySelectorAll('[data-sp-guide-root]').forEach(initGuide);
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded',boot,{once:true});
  }else{
    boot();
  }

  document.addEventListener('shopify:section:load',function(event){
    if(event.target && event.target.matches && event.target.matches('[data-sp-guide-root]')){
      initGuide(event.target);
    }else if(event.target){
      var nested=event.target.querySelector && event.target.querySelector('[data-sp-guide-root]');
      if(nested) initGuide(nested);
    }
  });
}());
