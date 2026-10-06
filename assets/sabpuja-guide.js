(function(){
  function payload(){return window.SABPUJA_PUBLISHED_GUIDES||{guides:[]};}
  function norm(v){return String(v||'').trim().toUpperCase().replace(/\s+/g,'');}
  function findGuide(v){
    var k=norm(v);
    return payload().guides.find(function(g){return norm(g.guide_code)===k||norm(g.sku)===k||norm(g.slug)===k;})||null;
  }
  function openGuide(g){
    var u=new URL(window.location.href);u.searchParams.set('guide',g.guide_code);u.hash='';window.location.assign(u.pathname+u.search);
  }
  function populate(select){
    if(!select)return;
    var kit=payload().guides.filter(function(g){return g.kit_type!=='astrological-remedy-kit';});
    var astro=payload().guides.filter(function(g){return g.kit_type==='astrological-remedy-kit';});
    select.innerHTML='<option value="">Select a Puja Guide</option>';
    [['Puja kits',kit],['Astrological Remedy Kits',astro]].forEach(function(pair){
      var og=document.createElement('optgroup');og.label=pair[0];pair[1].forEach(function(g){var o=document.createElement('option');o.value=g.guide_code;o.textContent=g.title.replace(/ — .*/,'');og.appendChild(o);});select.appendChild(og);
    });
  }
  function init(root){
    if(root.dataset.spGuideReady==='true')return;root.dataset.spGuideReady='true';
    var reader=document.querySelector('[data-sp-puja-reader]');
    var guideParam=new URLSearchParams(window.location.search).get('guide');
    if(guideParam&&findGuide(guideParam)){root.hidden=true;if(reader)reader.hidden=false;return;}
    root.hidden=false;if(reader&&reader.dataset.requiresGuide==='true')reader.hidden=true;
    var select=root.querySelector('[data-sp-guide-select]'),selectButton=root.querySelector('[data-sp-guide-select-button]'),selectForm=root.querySelector('[data-sp-guide-select-form]');
    populate(select);
    function sync(){if(selectButton)selectButton.disabled=!select.value;}
    if(select){select.addEventListener('change',sync);sync();}
    if(selectForm&&select)selectForm.addEventListener('submit',function(e){e.preventDefault();var g=findGuide(select.value);if(g)openGuide(g);});
    var codeForm=root.querySelector('[data-sp-guide-code-form]'),input=root.querySelector('#sp-guide-code'),status=root.querySelector('[data-sp-guide-status]');
    function setStatus(msg,state){if(!status)return;status.textContent=msg||'';status.classList.remove('is-error','is-success','is-loading');if(state)status.classList.add('is-'+state);}
    if(codeForm&&input)codeForm.addEventListener('submit',function(e){e.preventDefault();var g=findGuide(input.value);if(!input.value.trim()){setStatus('Enter the Guide Code or SKU printed on your product.','error');input.focus();return;}if(g){setStatus('Guide found. Opening it now…','success');setTimeout(function(){openGuide(g);},180);}else setStatus('We could not match that code to a published Sabpuja kit guide. Check the code or choose a guide above.','error');});
  }
  function boot(){document.querySelectorAll('[data-sp-guide-root]').forEach(init);}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot,{once:true});else boot();
  document.addEventListener('shopify:section:load',function(e){if(e.target)e.target.querySelectorAll('[data-sp-guide-root]').forEach(init);});
}());
