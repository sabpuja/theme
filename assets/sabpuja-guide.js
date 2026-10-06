(function(){
  function payload(){return window.SABPUJA_PUBLISHED_GUIDES||{guides:[]};}
  function norm(v){return String(v||'').trim().toUpperCase().replace(/\s+/g,'');}
  function findGuide(key){
    var k=norm(key);
    return payload().guides.find(function(g){
      return norm(g.guide_code)===k||norm(g.sku)===k||norm(g.slug)===k;
    })||null;
  }
  function shortTitle(g){return String(g.title||'').replace(/ — .*/,'');}
  function guideUrl(guide){
    var current=new URL(window.location.href);
    var target=new URL('/products/'+guide.slug,window.location.origin);
    current.searchParams.forEach(function(value,key){
      if(key!=='guide'&&key!=='view')target.searchParams.set(key,value);
    });
    target.searchParams.set('view','puja-guide');
    return target.pathname+target.search;
  }
  function fillSelect(select){
    if(!select)return;
    var current=new URL(window.location.href).searchParams.get('guide')||'';
    var kits=[],astrology=[];
    payload().guides.forEach(function(g){
      (g.kit_type==='astrological-remedy-kit'?astrology:kits).push(g);
    });
    select.innerHTML='<option value="">Select your Puja Kit</option>';
    [['Puja Kits',kits],['Astrological Remedy Kits',astrology]].forEach(function(pair){
      var group=document.createElement('optgroup');
      group.label=pair[0];
      pair[1].forEach(function(g){
        var option=document.createElement('option');
        option.value=g.guide_code;
        option.textContent=shortTitle(g);
        option.selected=norm(current)===norm(g.guide_code)||norm(current)===norm(g.slug);
        group.appendChild(option);
      });
      select.appendChild(group);
    });
  }
  function initGuide(root){
    if(root.dataset.spGuideReady==='true')return;
    root.dataset.spGuideReady='true';

    var codeForm=root.querySelector('[data-sp-guide-code-form]');
    var input=root.querySelector('#sp-guide-code');
    var status=root.querySelector('[data-sp-guide-status]');
    var selectForm=root.querySelector('[data-sp-guide-select-form]');
    var select=root.querySelector('[data-sp-guide-select]');
    var selectButton=root.querySelector('[data-sp-guide-select-button]');

    function setStatus(message,state){
      if(!status)return;
      status.textContent=message||'';
      status.classList.remove('is-error','is-success','is-loading');
      if(state)status.classList.add('is-'+state);
    }

    fillSelect(select);

    if(select&&selectButton){
      function syncButton(){selectButton.disabled=!select.value;}
      select.addEventListener('change',syncButton);
      syncButton();
    }

    if(selectForm&&select){
      selectForm.addEventListener('submit',function(event){
        event.preventDefault();
        var guide=findGuide(select.value);
        if(!guide){select.focus();return;}
        window.location.assign(guideUrl(guide));
      });
    }

    if(codeForm&&input){
      codeForm.addEventListener('submit',function(event){
        event.preventDefault();
        var guide=findGuide(input.value);
        if(!input.value.trim()){
          setStatus('Enter the Guide Code or SKU printed on your product.','error');
          input.focus();
          return;
        }
        if(!guide){
          setStatus('We could not match that code to a published Sabpuja kit guide. Check the code or choose your kit above.','error');
          return;
        }
        setStatus('Guide found for '+shortTitle(guide)+'. Opening it now…','success');
        window.location.assign(guideUrl(guide));
      });
    }
  }
  function boot(){document.querySelectorAll('[data-sp-guide-root]').forEach(initGuide);}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot,{once:true});else boot();
  document.addEventListener('shopify:section:load',function(e){
    if(!e.target)return;
    if(e.target.matches&&e.target.matches('[data-sp-guide-root]'))initGuide(e.target);
    else{var nested=e.target.querySelector&&e.target.querySelector('[data-sp-guide-root]');if(nested)initGuide(nested);}
  });
}());
