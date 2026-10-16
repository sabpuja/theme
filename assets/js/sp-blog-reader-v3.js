/* SP-BLOG-READER-003: source-grounded interactive article prototypes.
   Reader-only enhancement. The 20 semantic fallback specimens remain in HTML. */
(function(){
"use strict";
const root=document.querySelector("[data-spblog-app]");
if(!root)return;
const reader=root.querySelector("#reader");
if(!reader)return;
const daily="/theme/theme-assets/sabpuja-daily-puja-kit-hero.webp";
const festival="/theme/theme-assets/sabpuja-navratri-puja-kit-lifestyle.webp";
const productMap={
 daily:{label:"Daily Puja Kit",description:"Optional support for gathering common puja essentials. Check the item's actual contents against the guide and your family's practice.",image:daily,url:"https://sabpuja.com/products/daily-puja-kit"},
 navratri:{label:"Navratri Puja Kit",description:"Optional preparation support when the reader is planning Navratri. The ritual guide remains separate from the product.",image:festival,url:"https://sabpuja.com/products/navratri-puja-kit"},
 diwali:{label:"Diwali Puja Kit",description:"Optional supply planning for Diwali. Confirm the product's contents and the customs relevant to your household.",image:null,url:"https://sabpuja.com/products/diwali-puja-kit"}
};
const records={
F01:{format:"How-to guide",topic:"Daily puja",time:"6 min",title:"How to prepare a simple daily puja thali",deck:"A short supply list, a calm sequence and a check-as-you-go guide for everyday preparation.",quick:"Begin with a clean thali, a suitable diya, water and the offerings used in your family practice. Follow your household custom where appropriate.",lead:"You do not need to begin with a long list. Gather the essentials used in your household tradition and give yourself time to focus.",widget:"checks",product:"daily",image:daily,items:[["Prepare a safe space","Choose a clean, stable and heat-resistant surface."],["Arrange the thali","Place the items you intend to use in an easy-to-access order."],["Prepare the diya","Check that the lamp is secure and keep flame safety in mind."],["Gather your offerings","Use items appropriate to the particular practice."],["Continue with your guide","Follow the specific, verified sequence for your occasion."]]},
F02:{format:"Listicle",topic:"Puja essentials",time:"5 min",title:"9 common puja items and what they are used for",deck:"A compact illustrated reference, without nine exhausting paragraphs.",quick:"Different rituals use different materials. An overview is helpful, but no single list applies to every puja.",lead:"Select a card to see the context behind an everyday puja essential.",widget:"reveal",items:[["Diya","A small lamp used in many devotional settings. Fuel and customs vary."],["Thali","A plate or tray used to arrange items during preparation."],["Flowers","Offerings in many traditions, with preferences depending on the practice."],["Water","Used in different preparation and worship contexts."],["Kumkum","A colored powder used in some devotional practices."],["Haldi","Turmeric may appear in some traditions and preparations."],["Incense","Used in some settings; consider ventilation and safety."],["Cloth","Certain practices call for a clean cloth or specific textile."],["Bell","Some households and temples use a bell during worship."]]},
F03:{format:"Quick facts",topic:"Diya and lighting",time:"4 min",title:"7 useful facts about diyas in everyday puja",deck:"One idea per card, with context available on demand.",quick:"Diyas are used in various devotional and ceremonial contexts, but the details differ between traditions.",lead:"Tap a fact to reveal its context. Production facts require reviewed references.",widget:"reveal",items:[["The diya is a lamp","A diya is generally a small oil or ghee lamp."],["Placement varies","The location of a lamp depends on the setting and tradition."],["Fuel is not universal","Ghee and different appropriate oils appear across customs."],["Wicks matter","Wick material and preparation should follow appropriate safety and practice."],["Lighting has meaning","Interpretations differ by community, occasion and source."],["Safety comes first","Keep a burning lamp stable and away from flammable materials."],["Sources provide nuance","A genuine published fact card should cite the evidence behind it."]]},
F04:{format:"Meaning and history",topic:"Ritual meaning",time:"8 min",title:"Why the diya matters in puja",deck:"A slower but inviting editorial story about symbolism and context.",quick:"Light is an important devotional image in many settings. Its meanings should be explained within the tradition being discussed.",lead:"Symbolism, the practice of lighting a lamp and recorded history are different questions. Explore them separately.",widget:"tabs",image:daily,items:[["Symbolism","Describe interpretations attributed to named traditions rather than claiming one universal explanation."],["Practice","Explain the devotional context in which a particular form of diya lighting is used, with sources."],["History","Distinguish dated evidence and documented practices from modern interpretations."]]},
F05:{format:"Comparison",topic:"Diya and lighting",time:"5 min",title:"Ghee vs oil diya: what is the difference?",deck:"An easy side-by-side look at practical considerations, not an unsupported ranking.",quick:"Ghee and suitable oils are both used in different practices. The applicable custom, available lamp and safety considerations matter.",lead:"Use the comparison dimensions to understand the question before choosing an option.",widget:"tabs",items:[["Materials","Ghee and plant-based oils have different physical properties; choose suitable vessels and wicks."],["Custom and context","Follow the relevant documented ritual or family practice, not a blanket superiority claim."],["Practical planning","Consider availability, suitable lamp design, ventilation and safe handling."]]},
F06:{format:"Festival hub",topic:"Festivals",time:"7 min",title:"Understand a festival, one chapter at a time",deck:"An organized reading pathway from overview to preparation and meaning.",quick:"Start with the occasion and region, then visit the preparation, guide and cultural background most relevant to you.",lead:"A festival hub should help different readers find different answers, not present a single wall of links.",widget:"tabs",product:"navratri",image:festival,items:[["Festival overview","Understand the occasion and its documented regional context."],["Preparing thoughtfully","Separate practical preparations from the reviewed ritual sequence."],["Regional practices","Explore named local customs without treating one as universal."],["Go deeper","Link to detailed guides and original sources for each chapter."]]},
F07:{format:"Temple and pilgrimage",topic:"Temples",time:"6 min",title:"Planning a meaningful temple visit",deck:"A respectful visit planner with verified-information checkpoints.",quick:"Confirm official visitor instructions, opening arrangements, accessibility information and any special requirements directly with the relevant source.",lead:"Temple histories and visitor policies can be specific and can change. A useful guide shows when and where its facts were checked.",widget:"checks",items:[["Identify the temple","Confirm the exact site and official trust or managing body."],["Check the current guidance","Review official opening, entry and visitor conditions."],["Plan access and transport","Check accessibility and travel arrangements."],["Understand local etiquette","Respect the site's specific customs and instructions."]]},
F08:{format:"Myth vs fact",topic:"Traditions",time:"4 min",title:"Common puja misconceptions, explained",deck:"Reveal careful explanations that respect different family and regional practices.",quick:"A claim about every ritual or every household needs especially careful scrutiny.",lead:"Tap each statement to see what needs qualifying. These examples teach an editorial method, not a universal religious ruling.",widget:"reveal",items:[["Every puja uses identical materials","Different observances, families and regional traditions may use different items."],["Every family follows exactly the same sequence","Variations exist; describe the applicable tradition instead of erasing differences."],["One product replaces a puja guide","A product can help with supplies, but should not replace source-reviewed instructions."]]},
F09:{format:"Glossary and FAQ",topic:"Puja basics",time:"Reference",title:"Essential puja terms, explained simply",deck:"Find a term quickly and follow it into the wider topic.",quick:"Start with the short definition, then learn the context in which the word is being used.",lead:"Search within the glossary without leaving the page.",widget:"glossary",items:[["Puja","A devotional act or practice of worship; particular forms vary."],["Diya","A lamp used in many devotional and ceremonial settings."],["Samagri","Materials or items used for preparation or ritual practice, depending on context."],["Thali","A plate or tray that may be used for arranging offerings."],["Vrat","A devotional observance or vow, whose practices differ by tradition."],["Tithi","A lunar-day measure used in Hindu calendar contexts."]]},
F10:{format:"Regional traditions",topic:"Cultural context",time:"6 min",title:"The many ways a tradition is practiced",deck:"Compare documented perspectives without collapsing them into one rule.",quick:"Regional and family practices can be different without one being automatically incorrect.",lead:"Use the tabs to see how each perspective should be presented when researched.",widget:"tabs",items:[["Region and community","Name the locality and community a claim concerns; avoid unspecified 'Indian tradition' assertions."],["Shared themes","Identify what genuinely overlaps between sources, with references."],["Meaningful differences","Explain variations in terms, materials or sequence without ranking communities."]]},
F11:{format:"Expert Q&A",topic:"Questions and answers",time:"6 min",title:"Ask a knowledgeable practitioner, thoughtfully",deck:"A transparent interview format with genuine identity and consent.",quick:"Only publish a real expert's confirmed words, qualifications, consent and review details.",lead:"These are interview prompts only. No expert quotation or credentials are invented.",widget:"reveal",items:[["How should a beginner approach an unfamiliar practice?","Pending a consenting expert response and editorial verification."],["How do regional practices differ?","Requires a named expert's attributable answer and relevant source context."],["Which follow-up materials are useful?","Link only the resources that the expert actually recommends and the editorial team checks."]]},
F12:{format:"Deep-dive research",topic:"Research",time:"10 min",title:"How to evaluate a claim about a tradition",deck:"Explore the question, evidence and limitations without losing your place.",quick:"A good research article separates the source, the claim, its scope and the writer's interpretation.",lead:"Open each evidence layer to inspect what should be verified before publication.",widget:"reveal",items:[["Research question","State the precise claim and tradition or historical period being investigated."],["Primary and secondary sources","Document provenance, reliability, and what each source actually establishes."],["Limits and uncertainty","Separate contested interpretations from well-supported observations."],["Editorial conclusion","Summarize only what the assembled evidence warrants."]]},
F13:{format:"Product buying guide",topic:"Puja essentials",time:"6 min",title:"How to choose a puja kit that fits your needs",deck:"A useful buying checklist that puts ritual and practical fit first.",quick:"Choose by relevant contents, authenticity, clarity and suitability. Buying a product is not a requirement for devotion.",lead:"Use the checklist before exploring an optional kit.",widget:"checks",product:"daily",image:daily,items:[["Choose the actual occasion","Start with the named ritual or purpose."],["Review the exact contents","Compare with the specific guide, not an assumed universal list."],["Check materials and quantity","Confirm what is included and what you already have."],["Check practical policies","Review current price, shipping, returns and availability on the actual product page."]]},
F14:{format:"Editorial review",topic:"Puja essentials",time:"7 min",title:"What to look for in a daily puja kit",deck:"An honest review structure showing criteria and disclosed limits.",quick:"A trustworthy review explains its evaluation method and avoids invented ratings or unverifiable customer experiences.",lead:"Explore what a genuine editorial evaluation should disclose.",widget:"tabs",product:"daily",image:daily,items:[["Method","Identify who inspected the product, what they tested and on which date."],["What to verify","List materials, labeling, usability, the contents supplied and any observed limitations."],["Reader fit","Explain who may find the product relevant, and what still needs independent confirmation."]]},
F15:{format:"Troubleshooter",topic:"Preparation help",time:"3 min",title:"Missing a puja item? What to consider",deck:"A tiny decision helper that finds the next sensible question.",quick:"Whether a replacement is appropriate depends on the ritual and household tradition.",lead:"Choose what you need help with. This is navigation guidance, not a claim about permissible substitutions.",widget:"decision",items:[["I am missing a material","First check the verified guide for that exact practice; consult a knowledgeable source for substitutions."],["I am not sure which puja guide applies","Start with the occasion and select the corresponding source-reviewed Puja Guide."],["I need to prepare in advance","Separate the practical checklist from the precise ritual instructions."]]},
F16:{format:"Checklist",topic:"Preparation",time:"4 min",title:"A calm puja preparation checklist",deck:"A compact, printable list with live completion feedback.",quick:"Prepare the space, confirm the relevant guide and check your supplies against it.",lead:"Mark what you have completed. This checklist is a demonstration and does not save changes to your account.",widget:"checks",product:"daily",items:[["Identify the purpose","Select the appropriate verified guide."],["Confirm information","Check timing and regional context where needed."],["Organize essentials","Compare materials with the relevant guide."],["Prepare the space","Make it safe and comfortable."],["Follow the verified sequence","Use the actual instructions, not this design demonstration."]]},
F17:{format:"Beginner learning path",topic:"Start learning",time:"5 min",title:"A gentle introduction to daily puja",deck:"Learn gradually through four short, useful chapters.",quick:"Start with words and context, then preparation, a verified guide and the next question.",lead:"Mark each chapter when you feel ready to continue.",widget:"checks",items:[["1. Learn the words","Understand common terms and variations."],["2. Explore the materials","Distinguish useful supplies from universal requirements."],["3. Follow a source-reviewed guide","Choose the practice relevant to your tradition."],["4. Keep learning","Explore connected explanations and traditions."]]},
F18:{format:"Seasonal timeline",topic:"Festivals",time:"6 min",title:"A calmer way to prepare for Navratri",deck:"An easy timeline for practical festival planning.",quick:"Organize practical tasks early and confirm the year- and locality-specific observance before following a verified guide.",lead:"This example timeline describes planning, not authoritative dates or ritual requirements.",widget:"checks",product:"navratri",image:festival,items:[["Before the festival","Learn the applicable observance and household context."],["While organizing supplies","Check verified materials and plan practical shopping."],["Closer to the day","Recheck reliable local calendar or temple guidance."],["On the occasion","Use the approved, tradition-specific guide."],["Afterwards","Read the connected cultural background and meanings."]]},
F19:{format:"Visual encyclopedia",topic:"Puja objects",time:"5 min",title:"A visual guide to everyday puja objects",deck:"An image-led reference with clear text, not mysterious clickable hotspots.",quick:"Pair every object with its real name, accessible description and source-grounded explanation.",lead:"Tap an object to read its role and the limits of a generalized description.",widget:"reveal",image:daily,items:[["Diya","A small lamp. Materials and setting may vary."],["Thali","A plate or tray used to arrange materials."],["Kalash","A pot or vessel that appears in some ceremonial contexts."],["Flowers","Common in many offerings, with specific customs depending on the practice."]]},
F20:{format:"Calendar and Panchang",topic:"Calendar",time:"5 min",title:"How to read festival dates responsibly",deck:"A practical explanation of why date, location and source all matter.",quick:"A date-sensitive claim must state its year, locality and calculation or trusted publication source.",lead:"Explore each factor. This preview deliberately does not calculate or invent auspicious timings.",widget:"tabs",items:[["Year","Check the calendar year. Dates and calculations must not be copied across years."],["Place and time zone","Calendar calculations can be locality-sensitive; identify the applicable place."],["Authority and update","Cite a suitable, dated provider and verify changes near the event."]]}
};
const connections={
 F01:["F16","F02","F13"],F02:["F01","F09","F19"],F03:["F04","F05","F08"],F04:["F03","F08","F12"],
 F05:["F03","F04","F13"],F06:["F18","F10","F20"],F07:["F10","F20","F12"],F08:["F04","F12","F11"],
 F09:["F02","F17","F19"],F10:["F06","F07","F12"],F11:["F12","F08","F10"],F12:["F11","F04","F08"],
 F13:["F14","F16","F01"],F14:["F13","F01","F16"],F15:["F16","F01","F09"],F16:["F01","F13","F17"],
 F17:["F09","F01","F02"],F18:["F06","F20","F16"],F19:["F02","F09","F03"],F20:["F18","F06","F07"]
};
const esc=value=>String(value).replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
let active="F01";
const picker=reader.querySelector("[data-format-picker]");
const sections=[...reader.querySelectorAll("[data-format-specimen]")];
const parent=reader.querySelector(".spb-section");
const layout=reader.querySelector(".spb-reader-layout");
const body=reader.querySelector("[data-reading-content]");
const toc=reader.querySelector(".spb-toc");
const legacyIntro=reader.querySelector(".spb-reader-intro");
const mast=document.createElement("header");
mast.className="spbr-masthead";
mast.setAttribute("data-reader-mast","");
mast.setAttribute("aria-live","off");
reader.insertBefore(mast,parent);
const rail=document.createElement("nav");
rail.className="spbr-format-rail";
rail.setAttribute("aria-label","Choose an article experience");
rail.innerHTML='<span class="spbr-rail-label">ARTICLE FORMATS</span>'+Object.keys(records).map(id=>'<a data-reader-format="'+id+'" href="#format-'+id+'">'+esc(records[id].format)+'</a>').join("");
parent.insertBefore(rail,parent.firstElementChild);
const recBox=document.createElement("section");
recBox.className="spbr-related";
recBox.setAttribute("aria-label","Connected content recommendations");
layout.after(recBox);
const announce=message=>{let node=reader.querySelector("[data-spblog-status]");if(node)node.textContent=message;};
function widget(rec){
 const rows=rec.items||[];
 if(rec.widget==="checks")return '<section class="spbr-widget spbr-task '+(active==="F18"?"spbr-task--timeline":active==="F17"?"spbr-task--path":"")+'" aria-label="Interactive preparation steps"><div class="spbr-widget-head"><h2>Follow along at your own pace</h2><span data-article-count>0 of '+rows.length+' done</span></div><div class="spbr-task-meter"><span data-article-meter></span></div><div class="spbr-checks">'+rows.map((row,i)=>'<label class="spbr-check"><input type="checkbox" data-article-check><span><strong>'+esc(row[0])+'</strong><small>'+esc(row[1])+'</small></span></label>').join("")+'</div><p class="spbr-hint">Your selections stay in this preview session only. Ritual instructions must come from the verified guide.</p></section>';
 if(rec.widget==="reveal")return '<section class="spbr-widget" aria-label="Explore individual cards"><h2>Explore the details</h2><p class="spbr-muted">Choose any card to reveal its explanation.</p><div class="spbr-reveal-grid">'+rows.map((row,i)=>'<div class="spbr-reveal-card"><span class="spbr-card-number">'+String(i+1).padStart(2,"0")+'</span><h3>'+esc(row[0])+'</h3><button type="button" aria-expanded="false" data-article-reveal>Show context <span aria-hidden="true">+</span></button><div class="spbr-reveal-answer" hidden><p>'+esc(row[1])+'</p></div></div>').join("")+'</div></section>';
 if(rec.widget==="glossary")return '<section class="spbr-widget"><h2>Find a definition</h2><label class="spbr-search-label" for="spbr-glossary-query">Search these terms</label><input id="spbr-glossary-query" class="spbr-input" type="search" data-article-search placeholder="Try diya, samagri, tithi…"><div class="spbr-glossary-list">'+rows.map(row=>'<div class="spbr-glossary-item" data-article-definition><strong>'+esc(row[0])+'</strong><p>'+esc(row[1])+'</p></div>').join("")+'</div><p data-article-search-empty hidden>No matching terms in this preview.</p></section>';
 if(rec.widget==="decision")return '<section class="spbr-widget"><h2>What do you need help with?</h2><div class="spbr-choices" role="group" aria-label="Choose a preparation question">'+rows.map((row,i)=>'<button type="button" data-article-choice="'+i+'" aria-pressed="false">'+esc(row[0])+'</button>').join("")+'</div><div class="spbr-decision-answer" role="status" data-article-decision>Choose a question to see the next recommended step.</div></section>';
 const comparison=active==="F05"?'<div class="spbr-side-comparison"><table><caption>Practical comparison at a glance</caption><thead><tr><th>Consideration</th><th>Ghee diya</th><th>Oil diya</th></tr></thead><tbody><tr><th scope="row">Fuel</th><td>Clarified butter</td><td>Suitable oil</td></tr><tr><th scope="row">Tradition</th><td>Used in some practices</td><td>Used in some practices</td></tr><tr><th scope="row">Choosing</th><td colspan="2">Check the applicable tradition, lamp, wick and safe handling requirements. This is not a claim about spiritual superiority.</td></tr></tbody></table></div>':"";
 return comparison+'<section class="spbr-widget spbr-tabs-area"><h2>Choose what to explore</h2><div class="spbr-tabs" role="tablist" aria-label="Explore '+esc(rec.format)+' chapters">'+rows.map((row,i)=>'<button role="tab" id="spbr-tab-'+active+'-'+i+'" type="button" data-article-tab="'+i+'" aria-selected="'+(i===0)+'" aria-controls="spbr-panel-'+active+'-'+i+'" tabindex="'+(i===0?'0':'-1')+'">'+esc(row[0])+'</button>').join("")+'</div>'+rows.map((row,i)=>'<div class="spbr-tab-panel" role="tabpanel" id="spbr-panel-'+active+'-'+i+'" aria-labelledby="spbr-tab-'+active+'-'+i+'" '+(i===0?'':'hidden')+'><h3>'+esc(row[0])+'</h3><p>'+esc(row[1])+'</p></div>').join("")+'</section>';
}
function makeProduct(id,rec){
 const p=productMap[rec.product];if(!p)return "";
 const image=p.image?'<img src="'+p.image+'" alt="Sabpuja '+esc(p.label)+' illustrative product photograph" loading="lazy" width="240" height="185">':'<span class="spbr-product-art" aria-hidden="true">🪔</span>';
 return '<section class="spbr-product" aria-labelledby="spbr-product-heading"><div class="spbr-product-image">'+image+'</div><div><span class="spbr-product-eyebrow">OPTIONAL PREPARATION SUPPORT</span><h2 id="spbr-product-heading">'+esc(p.label)+'</h2><p>'+esc(p.description)+'</p><a href="'+esc(p.url)+'" target="_blank" rel="noopener noreferrer">Explore the matching product <span aria-hidden="true">↗</span></a></div></section>';
}
function makeToc(id,rec){
 toc.innerHTML='<details class="spbr-toc-details" open><summary>On this page</summary><div class="spbr-toc-links" role="group" aria-label="Article section links"><a href="#spbr-short">Short answer</a><a href="#spbr-deep">Read the context</a><a href="#spbr-interact">Interactive guide</a>'+(rec.product?'<a href="#spbr-shop">Optional product</a>':'')+'<a href="#spbr-connect">Continue your learning</a></div><div class="spbr-reading-controls"><span>Reading comfort</span><button type="button" data-reader-shrink aria-label="Decrease reading text size">A−</button><button type="button" data-reader-grow aria-label="Increase reading text size">A+</button></div></details>';
 toc.querySelector("[data-reader-shrink]").addEventListener("click",()=>resize(-.08));
 toc.querySelector("[data-reader-grow]").addEventListener("click",()=>resize(.08));
}
let readerScale=1;
function resize(delta){
 readerScale=Math.min(1.36,Math.max(.92,Math.round((readerScale+delta)*100)/100));
 body.style.setProperty("--spbr-scale",String(readerScale));
 announce("Reading size "+Math.round(readerScale*100)+" percent");
}
const readerFaqs={
 F01:[["Does every puja need the same items?","No single inventory fits every practice. Check the guide relevant to your household or tradition."],["Can I prepare everything beforehand?","Practical supplies can often be arranged in advance. Follow the verified instructions for any time-specific steps."]],
 F05:[["Is there one best diya fuel for everyone?","The answer depends on the setting, suitable lamp and documented or family practice."],["What practical safety matters?","Use an appropriate container and wick; keep burning lamps stable and supervised."]],
 F09:[["Do words have exactly one meaning everywhere?","Meanings and usage can depend on context and tradition."],["Where can I learn more?","Continue to the connected guides and explanations linked below."]],
 F13:[["Must I buy a kit to perform puja?","No purchase is implied by this guide. A kit is optional convenience; follow the relevant practice."],["Are all kits identical?","Check each product page for its actual listed contents and policies."]],
 F18:[["Do festival dates stay the same every year?","Use an updated, locality-relevant source for the applicable year."],["Do families always prepare identically?","Preparations and customs can vary by community and household."]]
};
function makeFaq(id){
 const list=readerFaqs[id];if(!list)return "";
 return '<section class="spbr-faq"><h2>Common questions</h2><div class="spbr-faq-list">'+list.map(row=>'<details><summary>'+esc(row[0])+'</summary><p>'+esc(row[1])+'</p></details>').join("")+'</div></section>';
}
function makeRelated(id){
 const next=connections[id]||[];
 recBox.innerHTML='<div class="spbr-related-shell" id="spbr-connect"><div class="spbr-related-title"><div><span class="spbr-eyebrow">CONTINUE YOUR LEARNING</span><h2>Connected topics, not dead ends.</h2><p>These examples are connected by subject, question or useful next step.</p></div><a href="#library">Browse journal ↗</a></div><div class="spbr-related-grid">'+next.map(n=>{const r=records[n];return '<a class="spbr-related-card" href="#format-'+n+'"><span>'+esc(r.format)+'</span><h3>'+esc(r.title)+'</h3><span class="spbr-card-link">Explore next ↗</span></a>';}).join("")+'</div></div>';
}
function showReader(id){
 if(!records[id])id="F01";
 active=id;
 const rec=records[id],sec=sections.find(s=>s.dataset.formatSpecimen===id);
 if(!sec)return;
 mast.innerHTML='<div class="spbr-mast-content"><div class="spbr-breadcrumb"><a href="#library">Journal</a> / <a href="#hub">'+esc(rec.topic)+'</a> / '+esc(rec.format)+'</div><p class="spbr-eyebrow">'+esc(rec.format)+' / '+esc(rec.topic)+'</p><h2>'+esc(rec.title)+'</h2><p class="spbr-deck">'+esc(rec.deck)+'</p><div class="spbr-meta"><span class="spbr-demo-badge">Sabpuja Editorial · Design demo</span><span aria-hidden="true">✦</span><span>'+esc(rec.time)+' read</span><span class="spbr-mast-actions"><button type="button" data-reader-share>↗ Share</button><button type="button" data-reader-save aria-pressed="false">☆ Save</button><button type="button" data-reader-print>Print</button></span></div></div>';
 const lead='<div class="spbr-lead"><p>'+esc(rec.lead)+'</p></div>';
 const quick='<section id="spbr-short" class="spbr-short"><span class="spbr-eyebrow">THE SHORT ANSWER</span><p>'+esc(rec.quick)+'</p></section>';
 const figure=rec.image?'<figure class="spbr-cover"><img src="'+rec.image+'" alt="Sabpuja devotional editorial illustration related to '+esc(rec.topic)+'" loading="lazy" width="770" height="410"><figcaption>Illustrative Sabpuja imagery. Not a substitute for verified preparation instructions.</figcaption></figure>':'';
 const context='<section id="spbr-deep" class="spbr-context"><h2>What is useful to know?</h2><p>'+esc(rec.deck)+' '+esc(rec.quick)+'</p></section>';
 sec.innerHTML='<div class="spbr-article-body">'+lead+quick+figure+context+'<div id="spbr-interact">'+widget(rec)+'</div>'+makeFaq(id)+'+ (rec.product?'<div id="spbr-shop">'+makeProduct(id,rec)+'</div>':'')+'<section class="spbr-editorial"><strong>Editorial transparency</strong><p>Design demonstration, not a published or fully fact-checked ritual article. A production article requires a real author/editor, dated review, sources where applicable and clear regional or family variations. Product placement is optional and clearly distinguished from the guidance.</p></section></div>';
 sec.classList.add("spbr-ready");
 for(const other of sections)other.hidden=other!==sec;
 const current=reader.querySelector("[data-current-format]");if(current)current.textContent=id;
 if(picker)picker.value=id;
 for(const link of rail.querySelectorAll("[data-reader-format]"))link.setAttribute("aria-current",link.dataset.readerFormat===id?"page":"false");
 makeToc(id,rec);makeRelated(id);
 const share=mast.querySelector("[data-reader-share]");
 share.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(location.href);announce("Article preview link copied");}catch{announce("Copy the article preview URL from your address bar.");}});
 const save=mast.querySelector("[data-reader-save]");
 save.addEventListener("click",()=>{const next=save.getAttribute("aria-pressed")!=="true";save.setAttribute("aria-pressed",String(next));save.textContent=next?"★ Saved":"☆ Save";announce(next?"Saved in this preview only":"Removed from preview saves");});
 mast.querySelector("[data-reader-print]").addEventListener("click",()=>window.print());
 for(const input of sec.querySelectorAll("[data-article-check]"))input.addEventListener("change",()=>{
  const all=[...sec.querySelectorAll("[data-article-check]")];const done=all.filter(n=>n.checked).length;
  sec.querySelector("[data-article-count]").textContent=done+" of "+all.length+" done";
  sec.querySelector("[data-article-meter]").style.width=(done/all.length*100)+"%";
 });
 for(const btn of sec.querySelectorAll("[data-article-reveal]"))btn.addEventListener("click",()=>{
  const expanded=btn.getAttribute("aria-expanded")!=="true";btn.setAttribute("aria-expanded",String(expanded));
  btn.textContent=expanded?"Hide context −":"Show context +";
  btn.nextElementSibling.hidden=!expanded;
 });
 const gl=sec.querySelector("[data-article-search]");
 if(gl)gl.addEventListener("input",()=>{
  const term=gl.value.trim().toLocaleLowerCase();let shown=0;
  for(const item of sec.querySelectorAll("[data-article-definition]")){item.hidden=!!term&&!item.textContent.toLocaleLowerCase().includes(term);if(!item.hidden)shown++;}
  sec.querySelector("[data-article-search-empty]").hidden=shown!==0;
 });
 for(const choice of sec.querySelectorAll("[data-article-choice]"))choice.addEventListener("click",()=>{
  const idx=Number(choice.dataset.articleChoice);
  for(const b of sec.querySelectorAll("[data-article-choice]"))b.setAttribute("aria-pressed",String(b===choice));
  sec.querySelector("[data-article-decision]").textContent=rec.items[idx][1];
 });
 const tabs=[...sec.querySelectorAll("[data-article-tab]")];
 function changeTab(n,focus){
  tabs.forEach((b,i)=>{b.setAttribute("aria-selected",String(i===n));b.tabIndex=i===n?0:-1;b.parentNode.parentNode.querySelector("#spbr-panel-"+active+"-"+i).hidden=i!==n;});
  if(focus)tabs[n].focus();
 }
 tabs.forEach((button,i)=>{button.addEventListener("click",()=>changeTab(i,false));button.addEventListener("keydown",e=>{let n=null;if(e.key==="ArrowRight")n=(i+1)%tabs.length;else if(e.key==="ArrowLeft")n=(i-1+tabs.length)%tabs.length;else if(e.key==="Home")n=0;else if(e.key==="End")n=tabs.length-1;if(n!==null){e.preventDefault();changeTab(n,true);}});});
}
/* Native fragment scrolling can target a now-hidden format specimen before hydration.
   Reassert the reader start after browser fragment handling, including initial load. */
function scrollReaderTop(){
 if(!/^#format-F(0[1-9]|1[0-9]|20)$/.test(location.hash))return;
 const top=reader.getBoundingClientRect().top+window.scrollY;
 window.scrollTo({top:Math.max(0,top-8),behavior:"instant"});
}
function scheduleScroll(){
 requestAnimationFrame(scrollReaderTop);
 setTimeout(scrollReaderTop,80);
 setTimeout(scrollReaderTop,320);
}
window.addEventListener("load",()=>{
 if(/^#format-F(0[1-9]|1[0-9]|20)$/.test(location.hash)){
  setTimeout(scrollReaderTop,160);
  setTimeout(scrollReaderTop,550);
 }
});
function sync(){
 const hash=decodeURIComponent(location.hash.replace(/^#/,""));
 const match=/^format-(F(0[1-9]|1[0-9]|20))$/.exec(hash);
 const id=match?match[1]:(picker?picker.value:active);
 if(hash==="reader"||match){
  showReader(id);
  if(match)scheduleScroll();
 }
}
window.addEventListener("hashchange",sync);
if(picker)picker.addEventListener("change",()=>{setTimeout(sync,0);});
if(legacyIntro)legacyIntro.hidden=true;
reader.classList.add("spbr-enhanced");
sync();
})();