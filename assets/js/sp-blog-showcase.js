/* SP-BLOG Component Lab enhancements; all editorial content already exists in HTML. */
(function(){
 "use strict";
 const app=document.querySelector('[data-spblog-app]');
 if(!app)return;
 const views=[...app.querySelectorAll('[data-spblog-view]')];
 const viewLinks=[...app.querySelectorAll('[data-spblog-nav]')];
 const formats=[...app.querySelectorAll('[data-format-specimen]')];
 const picker=app.querySelector('[data-format-picker]');
 const quickLinks=[...app.querySelectorAll('[data-format-link]')];
 const label=app.querySelector('[data-current-format]');
 const search=app.querySelector('[data-library-search]');
 const libraryCards=[...app.querySelectorAll('[data-library-card]')];
 const filters=[...app.querySelectorAll('[data-topic-filter]')];
 const glossary=app.querySelector('[data-glossary-search]');
 const status=app.querySelector('[data-spblog-status]');
 const readBody=app.querySelector('[data-reading-content]');
 const progressBar=app.querySelector('[data-reader-progress]');
 const widthSlider=app.querySelector('[data-fluid-width]');
 const widthOutput=app.querySelector('[data-fluid-output]');
 const widthStage=app.querySelector('[data-preview-stage]');
 const langToggle=app.querySelector('[data-language-toggle]');
 let currentFilter='all';
 const resolve=()=>{
  const v=decodeURIComponent(location.hash.slice(1));
  if(v==='library'||v==='hub'||v==='reader')return {view:v,format:null};
  if(/^spbr-(short|deep|interact|shop|connect)$/.test(v))return {view:'reader',format:null};
  if(/^format-F(0[1-9]|1[0-9]|20)$/.test(v))return {view:'reader',format:v.split('-').slice(1).join('-')};
  return {view:'library',format:null};
 };
 function showFormat(id){
  if(!formats.length)return;
  const selected=formats.some(el=>el.dataset.formatSpecimen===id)?id:'F01';
  for(const section of formats)section.hidden=section.dataset.formatSpecimen!==selected;
  if(picker)picker.value=selected;
  for(const link of quickLinks)link.setAttribute('aria-current',link.dataset.formatLink===selected?'true':'false');
  if(label)label.textContent=selected;
 }
 function syncView(){
  const r=resolve();
  for(const el of views)el.hidden=el.dataset.spblogView!==r.view;
  for(const link of viewLinks){const active=link.dataset.spblogNav===r.view;link.setAttribute('aria-current',active?'page':'false');}
  if(r.view==='reader')showFormat(r.format||(picker?picker.value:'F01'));
  document.title=(r.view==='library'?'Knowledge Library':r.view==='hub'?'Topic Hub':'Article Reader')+' | SP-BLOG Component Lab';
  requestAnimationFrame(updateProgress);
 }
 function filterLibrary(){
  const q=(search?search.value:'').trim().toLocaleLowerCase();
  let shown=0;
  for(const card of libraryCards){
   const matchGroup=currentFilter==='all'||card.dataset.topic===currentFilter;
   const matchText=!q||card.textContent.toLocaleLowerCase().includes(q);
   const ok=matchGroup&&matchText;card.hidden=!ok;if(ok)shown++;
  }
  const count=app.querySelector('[data-result-count]');
  if(count)count.textContent=shown===1?'1 example shown':shown+' examples shown';
  const empty=app.querySelector('[data-empty-results]');if(empty)empty.hidden=shown>0;
 }
 function updateChecks(){
  const all=[...app.querySelectorAll('[data-blog-check]')],done=all.filter(x=>x.checked).length;
  const out=app.querySelector('[data-check-count]');
  if(out)out.textContent=done+' of '+all.length+' checked';
  const fill=app.querySelector('[data-check-meter]');
  if(fill)fill.style.width=(all.length?done/all.length*100:0)+'%';
 }
 function updateProgress(){
  if(!progressBar)return;
  const r=resolve();
  if(r.view!=='reader'){progressBar.style.width='0%';return;}
  const total=Math.max(1,document.documentElement.scrollHeight-innerHeight);
  progressBar.style.width=Math.min(100,Math.max(0,100*scrollY/total))+'%';
 }
 function announce(message){
  if(status)status.textContent=message;
 }
 if(widthSlider&&widthStage){
  const updateWidth=()=>{widthStage.style.setProperty('--spb-preview-max',widthSlider.value+'px');if(widthOutput)widthOutput.textContent=widthSlider.value+'px';};
  widthSlider.addEventListener('input',updateWidth);
  app.querySelector('[data-fluid-reset]')?.addEventListener('click',()=>{widthStage.style.removeProperty('--spb-preview-max');widthSlider.value='1120';if(widthOutput)widthOutput.textContent='Auto';});
 }
 if(langToggle){
  langToggle.addEventListener('click',()=>{
   const hindi=langToggle.getAttribute('aria-pressed')!=='true';
   langToggle.setAttribute('aria-pressed',String(hindi));
   for(const el of app.querySelectorAll('[data-copy-en][data-copy-hi]')){el.textContent=hindi?el.dataset.copyHi:el.dataset.copyEn;el.lang=hindi?'hi':'en';}
   announce(hindi?'Representative Hindi headings enabled for layout review':'English headings restored');
  });
 }
 const layoutToggle=app.querySelector('[data-layout-toggle]');
 const storyBoard=app.querySelector('[data-library-grid]');
 layoutToggle?.addEventListener('click',()=>{
   const grid=storyBoard?.classList.toggle('is-grid')??false;
   layoutToggle.setAttribute('aria-pressed',String(grid));
   layoutToggle.textContent=grid?'Use Pinterest-style layout':'Switch to even grid';
 });
 if(search)search.addEventListener('input',filterLibrary);
 for(const b of filters)b.addEventListener('click',()=>{
  currentFilter=b.dataset.topicFilter;
  for(const x of filters)x.setAttribute('aria-pressed',String(x===b));
  filterLibrary();
 });
 if(glossary)glossary.addEventListener('input',()=>{
  const term=glossary.value.trim().toLocaleLowerCase();
  let n=0;
  for(const e of app.querySelectorAll('[data-glossary-item]')){
   const match=!term||e.textContent.toLocaleLowerCase().includes(term);
   e.hidden=!match;if(match)n++;
  }
  const el=app.querySelector('[data-glossary-count]');
  if(el)el.textContent=n+' definitions displayed';
 });
 for(const b of app.querySelectorAll('[data-blog-check]'))b.addEventListener('change',updateChecks);
 if(picker)picker.addEventListener('change',()=>{location.hash='format-'+picker.value;});
 app.querySelector('[data-text-size]')?.addEventListener('click',()=>{
   const state=app.dataset.textLarger==='true';
   app.dataset.textLarger=String(!state);
   readBody?.style.setProperty('--sp-blog-type-body',state?'var(--sp-text-body)':'1.18rem');
   announce(state?'Standard reading text':'Larger reading text');
 });
 app.querySelector('[data-print]')?.addEventListener('click',()=>window.print());
 app.querySelector('[data-copy-link]')?.addEventListener('click',async()=>{
   const url=location.href;
   try{await navigator.clipboard.writeText(url);announce('Preview link copied');}
   catch{announce('Copy this address from your browser: '+url);}
 });
 document.documentElement.classList.add('spb-enhanced');
 window.addEventListener('hashchange',syncView);
 window.addEventListener('scroll',updateProgress,{passive:true});
 window.addEventListener('resize',updateProgress,{passive:true});
 syncView();filterLibrary();updateChecks();
})();