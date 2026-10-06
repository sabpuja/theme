(function(){
  function payload(){return window.SABPUJA_PUBLISHED_GUIDES||{guides:[]};}
  function norm(v){return String(v||'').trim().toUpperCase().replace(/\s+/g,'');}
  function findGuide(key){
    var k=norm(key);
    return payload().guides.find(function(g){
      return norm(g.guide_code)===k||norm(g.sku)===k||norm(g.slug)===k;
    })||null;
  }
  function guideUrl(code){
    var u=new URL(window.location.href);
    u.searchParams.set('guide',code);
    u.hash='';
    return u.pathname+u.search;
  }
  function escapeText(v){return String(v==null?'':v);}
  function shortName(text,index){
    var s=String(text||'').toLowerCase();
    if(s.indexOf('sankalp')>=0) return 'Sankalp';
    if(s.indexOf('ganesha')>=0) return 'Ganesha';
    if(s.indexOf('lakshmi')>=0) return 'Lakshmi';
    if(s.indexOf('maa durga')>=0||s.indexOf('durga')>=0) return 'Maa Durga';
    if(s.indexOf('light')>=0&&s.indexOf('diya')>=0) return 'Light the Diya';
    if(s.indexOf('dhoop')>=0||s.indexOf('incense')>=0||s.indexOf('fragrance')>=0) return 'Fragrance';
    if(s.indexOf('tilak')>=0||s.indexOf('akshat')>=0) return 'Tilak & Akshat';
    if(s.indexOf('flower')>=0) return 'Flowers';
    if(s.indexOf('naivedya')>=0||s.indexOf('bhog')>=0||s.indexOf('prasad')>=0) return 'Naivedya';
    if(s.indexOf('focus on')>=0||s.indexOf('graha')>=0) return 'Devotional Focus';
    if(s.indexOf('chant')>=0||s.indexOf('mantra')>=0||s.indexOf('prayer')>=0) return 'Prayer / Mantra';
    if(s.indexOf('aarti')>=0) return 'Aarti';
    if(s.indexOf('quiet')>=0||s.indexOf('silence')>=0) return 'Quiet Prayer';
    if(s.indexOf('close')>=0||s.indexOf('conclud')>=0||s.indexOf('gratitude')>=0||s.indexOf('pranam')>=0) return 'Completion';
    return 'Step '+(index+1);
  }
  function iconFor(text){
    var s=String(text||'').toLowerCase();
    if(s.indexOf('diya')>=0||s.indexOf('deep')>=0) return '🪔';
    if(s.indexOf('flower')>=0) return '🌺';
    if(s.indexOf('naivedya')>=0||s.indexOf('bhog')>=0||s.indexOf('prasad')>=0) return '🍎';
    if(s.indexOf('aarti')>=0) return '🔥';
    if(s.indexOf('tilak')>=0||s.indexOf('akshat')>=0) return '🌾';
    if(s.indexOf('dhoop')>=0||s.indexOf('incense')>=0) return '🕯️';
    if(s.indexOf('chant')>=0||s.indexOf('mantra')>=0||s.indexOf('prayer')>=0) return '🙏';
    if(s.indexOf('ganesha')>=0) return 'ॐ';
    if(s.indexOf('focus')>=0||s.indexOf('yantra')>=0) return '✦';
    if(s.indexOf('close')>=0||s.indexOf('gratitude')>=0||s.indexOf('conclud')>=0) return '🌼';
    return '🙏';
  }
  function stepModels(g){
    return (g.steps||[]).map(function(text,i){
      return {name:shortName(text,i),title:shortName(text,i),icon:iconFor(text),text:String(text||'')};
    });
  }
  function relevantMantra(g,step){
    var s=step.text.toLowerCase();
    if(g.mantra && (s.indexOf('chant')>=0||s.indexOf('mantra')>=0||s.indexOf('prayer')>=0)){
      return {text:g.mantra.devanagari||g.mantra.transliteration||'',note:[g.mantra.transliteration,g.mantra.note].filter(Boolean).join(' · ')};
    }
    if(g.mantra_note && (s.indexOf('prayer')>=0||s.indexOf('mantra')>=0||s.indexOf('aarti')>=0)){
      return {text:'',note:g.mantra_note};
    }
    return null;
  }
  function extraFor(g,step,i,steps){
    var parts=[];
    if(i===0&&g.timing_note) parts.push(g.timing_note);
    if(i===0&&g.astrology_note) parts.push(g.astrology_note);
    if(i===0&&g.quick_version) parts.push('Short version: '+g.quick_version);
    if(i===steps.length-1&&g.regional_note) parts.push(g.regional_note);
    if(i===steps.length-1&&g.optional_note) parts.push(g.optional_note);
    return parts.join(' ');
  }
  function specialContent(g){
    var blocks=[];
    if(Array.isArray(g.optional_ghatasthapana)&&g.optional_ghatasthapana.length){
      blocks.push({title:'Optional Ghatasthapana',items:g.optional_ghatasthapana});
    }
    if(g.optional_note) blocks.push({title:'Optional traditions',text:g.optional_note});
    if(g.regional_note) blocks.push({title:'Regional variation',text:g.regional_note});
    if(g.astrology_note) blocks.push({title:'Astrology note',text:g.astrology_note});
    if(g.devotional_focus) blocks.push({title:'Devotional focus',text:g.devotional_focus});
    return blocks;
  }
  function listHtml(items){return '<ul>'+items.map(function(x){return '<li>'+escapeText(x)+'</li>';}).join('')+'</ul>';}
  function sourceHtml(sources){
    return '<div class="pg-guide-source-list">'+(sources||[]).map(function(s){
      if(/^https?:\/\//i.test(s.url||'')) return '<a href="'+s.url+'" target="_blank" rel="noopener">'+escapeText(s.label)+'</a>';
      return '<span>'+escapeText(s.label)+'</span>';
    }).join('')+'</div>';
  }
  function fillSelect(select,current){
    if(!select) return;
    var groups={kits:[],astrology:[]};
    payload().guides.forEach(function(g){(g.kit_type==='astrological-remedy-kit'?groups.astrology:groups.kits).push(g);});
    select.innerHTML='';
    [['Puja kits',groups.kits],['Astrological Remedy Kits',groups.astrology]].forEach(function(pair){
      var og=document.createElement('optgroup'); og.label=pair[0];
      pair[1].forEach(function(g){var o=document.createElement('option');o.value=g.guide_code;o.textContent=g.title.replace(/ — .*/,'');o.selected=g.guide_code===current;og.appendChild(o);});
      select.appendChild(og);
    });
  }
  function init(root){
    if(root.dataset.pgReady==='true') return;
    var params=new URLSearchParams(window.location.search);
    var key=params.get('guide')||root.dataset.defaultGuide||'';
    if(root.dataset.requiresGuide==='true'&&!key){root.hidden=true;return;}
    var guide=findGuide(key)||payload().guides[0];
    if(!guide){root.hidden=true;return;}
    root.hidden=false; root.dataset.pgReady='true';

    var q=function(sel){return root.querySelector(sel);};
    var steps=stepModels(guide);
    var state={current:0,completed:[]};
    function storageKey(){return 'sabpuja-puja-guide:'+guide.guide_code;}
    function load(){
      try{var v=JSON.parse(localStorage.getItem(storageKey())||'null');if(v&&Array.isArray(v.completed))state=v;}catch(e){}
      state.current=Math.max(0,Math.min(steps.length-1,Number(state.current)||0));
      state.completed=(state.completed||[]).filter(function(n){return n>=0&&n<steps.length;});
    }
    function save(){try{localStorage.setItem(storageKey(),JSON.stringify(state));}catch(e){}}
    function complete(i){return state.completed.indexOf(i)!==-1;}
    function pct(){return steps.length?Math.round((state.completed.length/steps.length)*100):0;}
    function setGuide(g){
      guide=g;steps=stepModels(guide);state={current:0,completed:[]};load();
      var u=new URL(window.location.href);u.searchParams.set('guide',guide.guide_code);history.replaceState({},'',u.pathname+u.search+u.hash);
      renderAll();
    }

    var select=q('[data-pg-guide-select]');
    fillSelect(select,guide.guide_code);
    if(select) select.addEventListener('change',function(){var g=findGuide(select.value);if(g)setGuide(g);});

    var back=q('[data-pg-back]');
    if(back){
      back.addEventListener('click',function(e){e.preventDefault();var u=new URL(window.location.href);u.searchParams.delete('guide');window.location.assign(u.pathname+u.search);});
    }

    var nav=q('[data-pg-step-nav]'), mobile=q('[data-pg-mobile-progress]'), timeline=q('[data-pg-journey-timeline]'), timelineFill=q('[data-pg-timeline-fill]');
    function openStep(i){state.current=i;save();renderStep();q('[data-pg-guide-card]').scrollIntoView({behavior:'smooth',block:'start'});}
    function renderNav(){
      nav.innerHTML='';mobile.innerHTML='';
      steps.forEach(function(s,i){
        var b=document.createElement('button');b.type='button';b.className='pg-step-link';b.setAttribute('aria-current',i===state.current?'step':'false');b.dataset.complete=complete(i)?'true':'false';
        b.innerHTML='<span class="pg-step-number">'+(complete(i)?'✓':(i+1))+'</span><span class="pg-step-name">'+escapeText(s.name)+'</span>';b.addEventListener('click',function(){openStep(i);});nav.appendChild(b);
        var p=document.createElement('button');p.type='button';p.className='pg-mobile-pill'+(i===state.current?' is-current':'')+(complete(i)?' is-done':'');p.textContent=(complete(i)?'✓ ':(i+1)+'. ')+s.name;p.addEventListener('click',function(){openStep(i);});mobile.appendChild(p);
      });
    }
    function renderTimeline(){
      timeline.querySelectorAll('.pg-time-step').forEach(function(n){n.remove();});
      timeline.style.gridTemplateColumns='repeat('+steps.length+',minmax(112px,1fr))';
      timeline.style.minWidth=Math.max(610,steps.length*122)+'px';
      var ratio=steps.length>1?Math.max(0,Math.min(82,(state.completed.length/(steps.length-1))*82)):0;timelineFill.style.width=ratio+'%';
      steps.forEach(function(s,i){
        var done=complete(i),n=document.createElement('button');n.type='button';n.className='pg-time-step'+(done?' is-complete':'')+(i===state.current?' is-current':'');
        n.innerHTML='<span class="pg-time-icon">'+(done?'🌼':s.icon)+'</span><span class="pg-time-name">Step '+(i+1)+' · '+escapeText(s.name)+'</span><span class="pg-time-status">'+(done?'✦ Completed':(i===state.current?'In progress':'Upcoming'))+'</span>';
        n.addEventListener('click',function(){openStep(i);});timeline.appendChild(n);
      });
    }
    function renderProgress(){
      var p=pct();q('[data-pg-progress-ring]').style.setProperty('--pct',p);q('[data-pg-ring-label]').textContent=p+'%';q('[data-pg-progress-fill]').style.width=p+'%';
      q('[data-pg-progress-title]').textContent='Step '+(state.current+1)+' of '+steps.length;q('[data-pg-progress-subtitle]').textContent=complete(state.current)?'Step complete':'Continue your puja journey';q('[data-pg-blessing-count]').textContent=state.completed.length;
    }
    function renderStep(){
      var s=steps[state.current],done=complete(state.current),mantra=relevantMantra(guide,s),extra=extraFor(guide,s,state.current,steps);
      q('[data-pg-step-label]').textContent='Step '+(state.current+1)+' · '+s.name;q('[data-pg-step-title]').textContent=s.name;q('[data-pg-step-intro]').textContent=s.text;q('[data-pg-step-icon]').textContent=s.icon;
      q('[data-pg-instruction-title]').textContent=s.name;q('[data-pg-instruction-copy]').textContent=s.text;
      q('[data-pg-guide-note]').textContent='Follow this published step slowly. Use only the items that apply to this step and that are actually present in your Sabpuja kit or household puja setup.';
      q('[data-pg-tradition-note]').textContent='If your family or priest follows a different method, follow that tradition.';
      var mc=q('[data-pg-mantra-card]');mc.hidden=!mantra;if(mantra){q('[data-pg-mantra]').textContent=mantra.text;q('[data-pg-mantra-note]').textContent=mantra.note;}
      var ew=q('[data-pg-extra-wrap]');ew.hidden=!extra;if(extra)q('[data-pg-extra-guidance]').textContent=extra;
      var bc=q('[data-pg-blessing-card]');bc.classList.toggle('is-visible',done);q('[data-pg-blessing-copy]').textContent='You have completed this step. Continue when you are ready.';
      var cs=q('[data-pg-completion-status]');cs.classList.toggle('is-done',done);cs.querySelector('span:last-child').textContent=done?'Step complete':'Complete this step when you are ready';
      q('[data-pg-primary-btn]').textContent=done?(state.current===steps.length-1?'Finish puja':'Next step'):'Complete step';q('[data-pg-back-btn]').disabled=state.current===0;
      q('[data-pg-step-view]').style.display='';q('[data-pg-complete-view]').classList.remove('is-visible');renderNav();renderProgress();renderTimeline();
    }
    function flowerShower(finalMode){
      if(window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
      var layer=q('[data-pg-petal-layer]');layer.innerHTML='';var count=finalMode?36:18;
      for(var i=0;i<count;i++){var f=document.createElement('span');f.className='pg-flower pg-flower--'+(Math.random()<.7?'marigold':'petal');f.style.left=(8+Math.random()*84)+'vw';f.style.animationDelay=(Math.random()*.5)+'s';f.style.setProperty('--fall-time',(2+Math.random()*.7)+'s');f.style.setProperty('--drift',(-80+Math.random()*160)+'px');f.style.setProperty('--start-rotate',(-45+Math.random()*90)+'deg');f.style.setProperty('--start-scale',(.72+Math.random()*.3));layer.appendChild(f);}
      setTimeout(function(){layer.innerHTML='';},3500);
    }
    function toast(){var t=q('[data-pg-reward-toast]');q('[data-pg-toast-copy]').textContent='Step '+(state.current+1)+' complete. Continue when you are ready.';t.classList.add('is-visible');setTimeout(function(){t.classList.remove('is-visible');},2200);}
    function finish(){
      q('[data-pg-step-view]').style.display='none';q('[data-pg-complete-view]').classList.add('is-visible');q('[data-pg-complete-copy]').textContent='You have completed all '+steps.length+' published steps for '+guide.title.replace(/ — .*/,'')+'. Close with gratitude according to your family tradition.';
      q('[data-pg-progress-title]').textContent='Puja complete';q('[data-pg-progress-subtitle]').textContent='All '+steps.length+' steps completed';q('[data-pg-progress-ring]').style.setProperty('--pct',100);q('[data-pg-ring-label]').textContent='100%';q('[data-pg-progress-fill]').style.width='100%';flowerShower(true);
    }
    function primary(){
      if(!complete(state.current)){state.completed.push(state.current);state.completed.sort(function(a,b){return a-b;});save();renderStep();flowerShower(false);toast();return;}
      if(state.current<steps.length-1)openStep(state.current+1);else finish();
    }

    q('[data-pg-primary-btn]').addEventListener('click',primary);
    q('[data-pg-back-btn]').addEventListener('click',function(){if(state.current>0)openStep(state.current-1);});
    q('[data-pg-reset]').addEventListener('click',function(){state={current:0,completed:[]};save();renderStep();});
    q('[data-pg-restart]').addEventListener('click',function(){state={current:0,completed:[]};save();renderStep();});
    q('[data-pg-finish-again]').addEventListener('click',function(){state.current=0;save();renderStep();});

    function renderHeader(){
      q('[data-pg-title]').textContent=guide.title;q('[data-pg-summary]').textContent=guide.summary||'';q('[data-pg-code]').textContent='Guide code · '+guide.guide_code;q('[data-pg-version]').textContent='Published v'+guide.version;q('[data-pg-reviewed]').textContent='Reviewed · '+guide.last_reviewed;q('[data-pg-status-chip]').textContent='Published · '+guide.kit_type.replace(/-/g,' ');
      q('[data-pg-preparation]').innerHTML=(guide.preparation||[]).map(function(x){return '<li>'+escapeText(x)+'</li>';}).join('');
      q('[data-pg-important]').textContent=[guide.notice,guide.timing_note,guide.astrology_note].filter(Boolean).join(' ');
      var special=specialContent(guide),panel=q('[data-pg-special-panel]'),content=q('[data-pg-special-content]');panel.hidden=!special.length;
      content.innerHTML=special.map(function(b){return '<strong>'+escapeText(b.title)+'</strong>'+(b.items?listHtml(b.items):'<p>'+escapeText(b.text)+'</p>');}).join('');
      var care=[];if(Array.isArray(guide.yantra_rudraksha_care))care=care.concat(guide.yantra_rudraksha_care);if(Array.isArray(guide.safety))care=care.concat(guide.safety);
      q('[data-pg-care-content]').innerHTML=listHtml(care);
      q('[data-pg-about-content]').innerHTML='<p>'+escapeText(guide.notice||'')+'</p>'+sourceHtml(guide.sources);
      fillSelect(select,guide.guide_code);
    }
    function renderAll(){renderHeader();renderStep();}
    load();renderAll();
  }
  function boot(){document.querySelectorAll('[data-sp-puja-reader]').forEach(init);}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot,{once:true});else boot();
  document.addEventListener('shopify:section:load',function(e){if(e.target)e.target.querySelectorAll('[data-sp-puja-reader]').forEach(init);});
}());
