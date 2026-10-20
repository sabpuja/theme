/* SP-CHAT-001 scripted interaction playground. Never calls network or stores user data. */
(() => {
  'use strict';
  const $ = s => document.querySelector(s);
  const demo = $('#assistant-demo');
  if (!demo) return;
  const device = $('#chat-device');
  const launcher = $('#assistant-launcher');
  const windowEl = $('#assistant-window');
  const transcript = $('#assistant-transcript');
  const suggestions = $('#assistant-suggestions');
  const composer = $('#assistant-composer');
  const input = $('#assistant-input');
  const send = $('#assistant-send');
  const note = $('#chat-preview-note');
  const title = $('#chat-preview-title');
  const size = $('#chat-preview-size');
  const body = $('#chat-context-content');
  const previewContext = {
    home: { name:'Homepage', eyebrow:'Devotion, made simple', title:'Everything for your daily moments of devotion.', description:'Thoughtfully organized puja essentials and clear guidance for every step.', action:'Explore puja kits', cards:['Daily Puja Kit','Navratri Puja Kit','Diwali Puja Kit'] },
    product: { name:'Product page', eyebrow:'Explore the collection', title:'Daily Puja Kit', description:'Find answers about product details and ritual use before choosing a kit. Specific contents and availability come from Shopify.', action:'View product details', cards:['About this kit','How to use it','Puja guidance'] },
    guide: { name:'Puja guide', eyebrow:'Easy to follow, step by step', title:'Your daily puja, one step at a time.', description:'A clear place to prepare, follow your puja steps, and refer to family or regional tradition.', action:'Continue reading guide', cards:['Prepare your space','Make an offering','Complete with gratitude'] },
    support: { name:'Support', eyebrow:'We are here to guide you', title:'How can we help?', description:'Browse common questions, product information, shipping and returns information, or reach our team.', action:'Browse help topics', cards:['Delivery questions','Returns information','Contact support'] },
    account: { name:'Account', eyebrow:'Your Sabpuja space', title:'Welcome back.', description:'Find your orders, puja guides and support options in one convenient place.', action:'Explore account', cards:['Your orders','Puja guides','Get help'] }
  };
  const textByLanguage = {
    en: {
      first:'Namaste! 🙏 I am Shraddha, Sabpuja\'s AI assistant. I can help you explore puja guides, find products and get support.',
      opener:'How can I help you today?',
      intro:'Your puja and shopping companion',
      typing:'Thinking',
      prompt:'Ask me anything about puja...',
      suggestions:[['guide','How to do daily puja?'],['product','Find a puja kit'],['support','Delivery and support']],
      guideQuestion:'How do I perform daily puja?',
      guideAnswer:'For a simple home puja, start by preparing a clean space. You may offer a diya, a flower, and your chosen prayer, then close with gratitude. Customs differ by family and tradition. Please follow your family or priest\'s guidance.',
      guideSource:'Daily Puja Vidhi',
      productQuestion:'Can you help me choose a puja kit?',
      productAnswer:'Of course. You can start by exploring a daily worship kit or a festival-specific kit. The contents, price and availability should always be checked on the current product page.',
      productDescription:'Explore an existing Sabpuja kit. See the product page for confirmed details.',
      productAction:'View product',
      supportQuestion:'How can I check delivery or returns?',
      supportAnswer:'For confirmed delivery and returns information, please refer to our latest published store policies. I can also help you reach our support team.',
      supportSource:'Contact Sabpuja support',
      handoffQuestion:'Where is my order?',
      handoffAnswer:'For privacy, I cannot access your personal order details from this preview. Please use your authenticated account or contact Sabpuja support for help.',
      handoffPrimary:'Open your account', handoffSecondary:'Contact support',
      unknownQuestion:'Can you tell me something that is not in your sources?',
      fallback:'I cannot confirm that from the approved Sabpuja sources. I would rather guide you to our support team than guess.',
      errorTitle:'We could not connect right now', errorMessage:'Your message has not been sent. Please check your connection or try again.',retry:'Try again',
      helpful:'Was this helpful?', thanked:'Thank you for your feedback.',
      preview:'Example answers are for design review only.'
    },
    hi: {
      first:'नमस्ते! 🙏 मैं श्रद्धा, सबपूजा की एआई सहायक हूँ। पूजा विधि, पूजा किट और सहायता से जुड़े सवाल पूछें।',
      opener:'आज मैं आपकी कैसे मदद कर सकता हूँ?', intro:'पूजा और खरीदारी में आपका साथी',typing:'जवाब तैयार हो रहा है',prompt:'पूजा के बारे में पूछें...',
      suggestions:[['guide','दैनिक पूजा कैसे करें?'],['product','पूजा किट देखें'],['support','सहायता चाहिए']],
      guideQuestion:'दैनिक पूजा कैसे करें?',guideAnswer:'सरल दैनिक पूजा के लिए सबसे पहले पूजा स्थान साफ करें। अपनी परंपरा के अनुसार दीपक, फूल और प्रार्थना अर्पित कर सकते हैं। अंत में आभार प्रकट करें। परिवार और क्षेत्र के अनुसार विधि अलग हो सकती है।',guideSource:'दैनिक पूजा विधि',
      productQuestion:'मेरे लिए कौन सी पूजा किट सही होगी?',productAnswer:'आप दैनिक पूजा की किट या त्योहार के अनुसार तैयार किट देख सकते हैं। सही सामग्री, कीमत और उपलब्धता की जानकारी के लिए संबंधित प्रोडक्ट पेज देखें।',productDescription:'सही जानकारी के लिए प्रोडक्ट पेज पर विवरण देखें।',productAction:'प्रोडक्ट देखें',
      supportQuestion:'डिलीवरी या रिटर्न में मदद चाहिए।',supportAnswer:'डिलीवरी और रिटर्न की सही जानकारी हमारी वर्तमान स्टोर पॉलिसी में मिलेगी। जरूरत होने पर सपोर्ट टीम से संपर्क करें।',supportSource:'सपोर्ट से संपर्क करें',
      handoffQuestion:'मेरा ऑर्डर कहाँ है?',handoffAnswer:'आपकी निजी जानकारी की सुरक्षा के लिए यह डेमो ऑर्डर नहीं देख सकता। कृपया अपने अकाउंट में जाएँ या हमारी सपोर्ट टीम से बात करें।',handoffPrimary:'मेरा अकाउंट',handoffSecondary:'सपोर्ट से संपर्क',
      unknownQuestion:'ऐसी जानकारी बताइए जिसका स्रोत नहीं है।',fallback:'मुझे स्वीकृत सबपूजा स्रोतों में इसकी पुष्टि नहीं मिली। अनुमान लगाने के बजाय कृपया सपोर्ट टीम से पूछें।',
      errorTitle:'अभी कनेक्ट नहीं हो पाया',errorMessage:'आपका संदेश नहीं भेजा गया। इंटरनेट जाँचें और फिर कोशिश करें।',retry:'फिर कोशिश करें',helpful:'क्या यह उपयोगी था?',thanked:'फीडबैक देने के लिए धन्यवाद।',preview:'यह केवल डिज़ाइन देखने के लिए बनाया गया डेमो है।'
    },
    hinglish: {
      first:'Namaste! 🙏 Main Shraddha, Sabpuja ki AI assistant hoon. Aap puja vidhi, puja kit ya support ke baare mein pooch sakte hain.',
      opener:'Aaj main aapki kaise help kar sakta hoon?',intro:'Puja aur shopping mein aapka saathi',typing:'Jawab taiyar ho raha hai',prompt:'Puja ke baare mein poochhein...',
      suggestions:[['guide','Daily puja kaise karein?'],['product','Puja kit dikhao'],['support','Support chahiye']],
      guideQuestion:'Daily puja kaise karein?',guideAnswer:'Sabse pehle puja ki jagah saaf karein. Apni parampara ke hisaab se diya, phool aur prarthana arpit kar sakte hain. Ant mein dhanyavaad ke saath puja poori karein. Har ghar ki vidhi alag ho sakti hai.',guideSource:'Daily Puja Vidhi',
      productQuestion:'Mere liye kaunsi puja kit sahi hogi?',productAnswer:'Aap daily worship kit ya festival-specific puja kit explore kar sakte hain. Exact samagri, price aur availability hamesha product page par check karein.',productDescription:'Confirmed product details ke liye product page dekhein.',productAction:'Product dekhein',
      supportQuestion:'Delivery aur return mein help chahiye.',supportAnswer:'Delivery aur return ki verified details current store policies se check karni chahiye. Aap Sabpuja support se bhi contact kar sakte hain.',supportSource:'Contact support',
      handoffQuestion:'Mera order kahan hai?',handoffAnswer:'Privacy ke liye main is preview se aapka order access nahi kar sakta. Please apne account mein sign in karein ya support team se baat karein.',handoffPrimary:'Mera account',handoffSecondary:'Contact support',
      unknownQuestion:'Koi aisi baat batao jiska source nahin hai.',fallback:'Is baat ki approved Sabpuja knowledge mein confirmation nahi mili. Guess karne ke bajaye support team ki madad lena better hoga.',
      errorTitle:'Connection mein problem hai',errorMessage:'Message send nahi hua. Connection check karke dobara try karein.',retry:'Try again',helpful:'Kya yeh helpful tha?',thanked:'Feedback ke liye shukriya.',preview:'Yeh sirf design review ke liye scripted demo hai.'
    }
  };
  let viewport='desktop', context='home', scenario='welcome', language='en';
  const safeLink = (text,url)=>`<a class="assistant-source" href="#" data-preview-link><span class="assistant-source__icon" aria-hidden="true">☷</span><span class="assistant-source__body">${text}<small>Sabpuja reference page</small></span><span aria-hidden="true">↗</span></a>`;
  const renderMock = () => {
    const p=previewContext[context];
    body.dataset.page=context;
    /* Fixed, local preview fixtures only. No customer text is interpolated here. */
    body.innerHTML=`<div class="site-mock__kicker">${p.eyebrow}</div><h2>${p.title}</h2><p>${p.description}</p><div class="site-mock__cta">${p.action} <span aria-hidden="true">↗</span></div><div class="site-mock__cards" aria-hidden="true">${p.cards.map((name,i)=>`<div class="site-mock__tile"><span class="site-mock__tile-art">${['✿','❀','✺'][i]}</span><strong>${name}</strong><small>Learn more</small></div>`).join('')}</div>`;
    title.textContent=`${p.name}, ${viewport}`;
    size.textContent=`${viewport[0].toUpperCase()+viewport.slice(1)} ${viewport==='desktop'?'1120':viewport==='tablet'?'700':'390'}px`;
  };
  function msg(role,html,isText=false){
    const item=document.createElement('div');item.className='assistant-msg assistant-msg--'+role;
    if(role==='bot'){const avatar=document.createElement('span');avatar.className='assistant-msg__mini-avatar';const im=document.createElement('img');im.src='/theme/assets/images/sabpuja-chat-emblem.svg';im.alt='';avatar.append(im);item.append(avatar)}
    const bubble=document.createElement('div');bubble.className='assistant-msg__bubble';if(isText)bubble.textContent=html;else bubble.innerHTML=html;item.append(bubble);transcript.append(item);
    transcript.scrollTop=transcript.scrollHeight;return item;
  }
  function feedback(){
    const lang=textByLanguage[language];const row=document.createElement('div');row.className='assistant-feedback';
    const label=document.createElement('span');label.textContent=lang.helpful;row.append(label);
    ['👍','👎'].forEach((sym,index)=>{const btn=document.createElement('button');btn.type='button';btn.textContent=sym;btn.setAttribute('aria-label',index?'Not helpful':'Helpful');btn.setAttribute('aria-pressed','false');btn.addEventListener('click',()=>{row.querySelectorAll('button').forEach(el=>el.setAttribute('aria-pressed',String(el===btn)));label.textContent=lang.thanked});row.append(btn)});
    transcript.append(row);
  }
  function openChat(shouldFocus=false){demo.dataset.open='true';launcher.setAttribute('aria-expanded','true');if(shouldFocus)windowEl.focus()}
  function closeChat(){demo.dataset.open='false';launcher.setAttribute('aria-expanded','false');launcher.focus()}
  function setScenario(value){
    scenario=value;document.querySelectorAll('[data-chat-scenario]').forEach(b=>{const on=b.dataset.chatScenario===value;b.classList.toggle('is-active',on);b.setAttribute('aria-pressed',String(on))});
    renderConversation();openChat();
  }
  function renderConversation(){
    const t=textByLanguage[language]; transcript.replaceChildren();suggestions.replaceChildren();suggestions.hidden=true;
    document.querySelector('.assistant-window__intro').innerHTML='<span aria-hidden="true">✦</span> '+t.intro;
    input.placeholder=t.prompt; transcript.lang=language==='hi'?'hi':language==='hinglish'?'hi-Latn':'en'; input.lang=transcript.lang; note.textContent=t.preview;
    msg('bot',t.first,true);
    if(scenario==='welcome'){
      msg('bot',`<strong>${t.opener}</strong>`);
      t.suggestions.forEach(([key,label])=>{const b=document.createElement('button');b.type='button';b.dataset.quick=key;b.textContent=label;suggestions.append(b)});suggestions.hidden=false;
    }else if(scenario==='loading'){
      msg('user',t.guideQuestion,true);
      msg('bot',`<span class="assistant-typing" role="status" aria-label="${t.typing}"><i></i><i></i><i></i></span>`);
    }else if(scenario==='error'){
      msg('user',t.guideQuestion,true);
      const box=document.createElement('div');box.className='assistant-error';box.innerHTML=`<strong>${t.errorTitle}</strong><p>${t.errorMessage}</p>`;
      const retry=document.createElement('button');retry.type='button';retry.textContent=t.retry;retry.addEventListener('click',()=>setScenario('guide'));box.append(retry);transcript.append(box);
    }else{
      const q= t[scenario+'Question'] || t.unknownQuestion;
      msg('user',q,true);
      if(scenario==='guide'){
        msg('bot',`<p>${t.guideAnswer}</p>${safeLink(t.guideSource,'https://sabpuja.com/pages/daily-puja-vidhi')}`);
      }else if(scenario==='product'){
        msg('bot',`<p>${t.productAnswer}</p><div class="assistant-product"><span class="assistant-product__art" aria-hidden="true">✿</span><span class="assistant-product__body"><strong>Diwali Puja Kit</strong><small>${t.productDescription}</small><a href="#" data-preview-link>${t.productAction} ↗</a></span></div>`);
      }else if(scenario==='support'){
        msg('bot',`<p>${t.supportAnswer}</p>${safeLink(t.supportSource,'https://sabpuja.com/pages/contact-us')}`);
      }else if(scenario==='handoff'){
        msg('bot',`<p>${t.handoffAnswer}</p><div class="assistant-handoff"><a href="#" data-preview-link data-preview-link>${t.handoffPrimary} ↗</a><a href="#" data-preview-link>${t.handoffSecondary} ↗</a></div>`);
      }else if(scenario==='fallback'){
        msg('bot',`<p>${t.fallback}</p>${safeLink(t.supportSource,'https://sabpuja.com/pages/contact-us')}`);
      }
      feedback();
    }
    transcript.scrollTop=0;
  }
  function setSelected(attribute,value){document.querySelectorAll(`[${attribute}]`).forEach(b=>{const active=b.getAttribute(attribute)===value;b.classList.toggle('is-active',active);b.setAttribute('aria-pressed',String(active))})}
  document.querySelectorAll('[data-chat-viewport]').forEach(b=>b.addEventListener('click',()=>{viewport=b.dataset.chatViewport;device.dataset.viewport=viewport;setSelected('data-chat-viewport',viewport);renderMock()}));
  document.querySelectorAll('[data-chat-context]').forEach(b=>b.addEventListener('click',()=>{context=b.dataset.chatContext;setSelected('data-chat-context',context);renderMock();setScenario(({home:'welcome',product:'product',guide:'guide',support:'support',account:'handoff'})[context])}));
  document.querySelectorAll('[data-chat-scenario]').forEach(b=>b.addEventListener('click',()=>setScenario(b.dataset.chatScenario)));
  document.querySelectorAll('[data-chat-language]').forEach(b=>b.addEventListener('click',()=>{language=b.dataset.chatLanguage;setSelected('data-chat-language',language);renderConversation()}));
  suggestions.addEventListener('click',e=>{const b=e.target.closest('[data-quick]');if(b)setScenario(b.dataset.quick)});
  launcher.addEventListener('click',()=>{if(demo.dataset.open==='true')closeChat();else openChat(true)});
  $('#assistant-close').addEventListener('click',closeChat);
  $('#chat-collapse').addEventListener('click',closeChat);
  $('#assistant-clear').addEventListener('click',()=>setScenario('welcome'));
  $('#chat-reset').addEventListener('click',()=>{viewport='desktop';context='home';scenario='welcome';language='en';device.dataset.viewport=viewport;setSelected('data-chat-viewport',viewport);setSelected('data-chat-context',context);setSelected('data-chat-language',language);setSelected('data-chat-scenario',scenario);renderMock();renderConversation();openChat()});
  composer.addEventListener('submit',e=>{
    e.preventDefault();const q=input.value.trim();if(!q)return;
    input.value=''; const key=/delivery|return|shipping|support|help|refund|डिलीवरी|रिटर्न/i.test(q)?'support':/guide|vidhi|how|kaise|पूजा कैसे|विधि|steps/i.test(q)?'guide':/kit|product|buy|kharid|samagri|किट|सामग्री|purchase/i.test(q)?'product':'fallback';
    setScenario(key);
    const userMsg=transcript.querySelector('.assistant-msg--user .assistant-msg__bubble');if(userMsg)userMsg.textContent=q;
  });
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&demo.dataset.open==='true'&&document.activeElement.closest('#assistant-window'))closeChat()});
  document.addEventListener('click',e=>{const a=e.target.closest('[data-preview-link]');if(a){e.preventDefault();note.textContent='Preview only. Real destinations are added after approved integration.'}});
  // This is a visual demonstration; do not add fetch(), token storage, analytics or customer identifiers.
  renderMock();renderConversation();
})();
