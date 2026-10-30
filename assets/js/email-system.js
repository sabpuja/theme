/* SP-EMAIL-001 | Static Component Lab preview; no customer data, analytics, or email transport. */
(function () {
"use strict";
var APPROVED_LOGO = "https://sabpuja.github.io/theme/assets/images/email/sabpuja-logo-horizontal-color.svg";
var subjects = {
 welcome:{
  label:"Subscriber welcome",kind:"Marketing / subscription",timing:"Immediately after a valid newsletter subscription.",
  en:{subject:"Welcome to Sabpuja",preheader:"Puja made simple, with essentials and guidance in one place.",eyebrow:"Welcome to Sabpuja",title:"Your puja journey starts here",body:"Thank you for joining Sabpuja. Explore thoughtfully prepared puja kits, everyday essentials and helpful guides at your own pace.",detail:"A simpler way to prepare for your next puja.",cta:"Explore Sabpuja"},
  hi:{subject:"Sabpuja में आपका स्वागत है",preheader:"पूजा की सामग्री और मार्गदर्शन अब एक ही जगह।",eyebrow:"आपका स्वागत है",title:"आपकी पूजा की तैयारी, अब आसान",body:"Sabpuja से जुड़ने के लिए धन्यवाद। पूजा किट, आवश्यक सामग्री और उपयोगी मार्गदर्शिकाएँ अपनी सुविधा से देखें।",detail:"आपकी पूजा की तैयारी में एक सरल साथी।",cta:"Sabpuja देखें"},
  link:"https://sabpuja.com/",marketing:true
 },
 recovery:{
  label:"Abandoned checkout",kind:"Checkout recovery / eligibility check",timing:"Proposed 1 hour, 24 hours and 48 hours; stop immediately if an order is placed. Check consent and Shopify eligibility.",
  en:{subject:"Your Sabpuja checkout is waiting",preheader:"Return to your selected puja essentials when you're ready.",eyebrow:"Continue where you left off",title:"Your puja essentials are still here",body:"You started checking out but did not finish. If you'd still like these items, you can pick up where you left off.",detail:"Selected items: [[checkout_items]]",cta:"Continue checkout"},
  hi:{subject:"आपका Sabpuja चेकआउट अभी बाकी है",preheader:"अपनी चुनी हुई पूजा सामग्री के साथ आगे बढ़ें।",eyebrow:"जहाँ रुके थे, वहीं से आगे",title:"आपकी चुनी हुई सामग्री अभी भी यहाँ है",body:"आपने चेकआउट शुरू किया था, लेकिन ऑर्डर पूरा नहीं हुआ। चाहें तो वहीं से आगे बढ़ सकते हैं।",detail:"चुनी हुई सामग्री: [[checkout_items]]",cta:"चेकआउट पूरा करें"},
  link:"[[recovery_url]]",marketing:true
 },
 order:{
  label:"Order confirmation",kind:"Transactional / order created",timing:"Immediately on confirmed paid or otherwise accepted order according to Shopify order notification rules.",
  en:{subject:"Your Sabpuja order is confirmed",preheader:"Your order details and next steps are ready.",eyebrow:"Order received",title:"Thank you for your order",body:"We've received your order. You can review your order details and status using the link below.",detail:"Order reference: [[order_number]]",cta:"View order status"},
  hi:{subject:"आपका Sabpuja ऑर्डर कन्फ़र्म हो गया है",preheader:"अपने ऑर्डर का विवरण और स्थिति देखें।",eyebrow:"ऑर्डर प्राप्त हुआ",title:"आपके ऑर्डर के लिए धन्यवाद",body:"हमें आपका ऑर्डर मिल गया है। नीचे दिए गए लिंक पर उसका विवरण और स्थिति देखें।",detail:"ऑर्डर संख्या: [[order_number]]",cta:"ऑर्डर की स्थिति देखें"},
  link:"[[order_status_url]]",marketing:false
 },
 shipping:{
  label:"Shipping and tracking",kind:"Transactional / actual fulfilment",timing:"Only after dispatch is confirmed and a usable carrier tracking URL exists.",
  en:{subject:"Your Sabpuja order is on its way",preheader:"Follow the latest tracking information for your shipment.",eyebrow:"Dispatched",title:"Your order is on its way",body:"Your shipment has been dispatched. Use the tracking link below to check its progress with the carrier.",detail:"Order reference: [[order_number]]",cta:"Track shipment"},
  hi:{subject:"आपका Sabpuja ऑर्डर भेज दिया गया है",preheader:"अपने पार्सल की ट्रैकिंग जानकारी देखें।",eyebrow:"पार्सल भेजा गया",title:"आपका ऑर्डर रास्ते में है",body:"आपका पार्सल भेज दिया गया है। नीचे दिए गए लिंक से उसकी स्थिति देख सकते हैं।",detail:"ऑर्डर संख्या: [[order_number]]",cta:"पार्सल ट्रैक करें"},
  link:"[[tracking_url]]",marketing:false
 },
 delivered:{
  label:"Delivery confirmation",kind:"Transactional / delivered event",timing:"Only after trusted carrier or fulfilment delivery confirmation.",
  en:{subject:"Your Sabpuja order has been delivered",preheader:"Your parcel has arrived. We're here if you need help.",eyebrow:"Delivered",title:"Your order has arrived",body:"Your shipment is marked as delivered. We hope the items are useful for your puja preparations. Need assistance? Contact our support team.",detail:"Order reference: [[order_number]]",cta:"View order"},
  hi:{subject:"आपका Sabpuja ऑर्डर डिलीवर हो गया है",preheader:"पार्सल पहुँच गया है। सहायता चाहिए तो हमसे संपर्क करें।",eyebrow:"डिलीवर हो गया",title:"आपका ऑर्डर पहुँच गया है",body:"आपके पार्सल की डिलीवरी दर्ज हो गई है। पूजा की तैयारी में कोई सहायता चाहिए तो हमारी टीम से संपर्क करें।",detail:"ऑर्डर संख्या: [[order_number]]",cta:"ऑर्डर देखें"},
  link:"[[order_status_url]]",marketing:false
 },
 support:{
  label:"Post-purchase puja support",kind:"Service / verified guide availability",timing:"Suggested 2 days after confirmed delivery, only when a relevant published guide is verified.",
  en:{subject:"Need help using your Sabpuja kit?",preheader:"Step-by-step puja guidance and support when you need it.",eyebrow:"Here to help",title:"Your puja guide is ready",body:"Preparing for a puja? Follow the relevant step-by-step guide for your kit. If you have a question about your order, we're here to help.",detail:"Open the guide that matches your purchased kit.",cta:"Open your puja guide"},
  hi:{subject:"अपनी Sabpuja किट के लिए मार्गदर्शन चाहिए?",preheader:"पूजा की विधि और सहायता एक ही जगह।",eyebrow:"हम आपके साथ हैं",title:"आपकी पूजा मार्गदर्शिका",body:"पूजा की तैयारी कर रहे हैं? अपनी किट की सही चरणबद्ध मार्गदर्शिका देखें। ऑर्डर से जुड़ा कोई प्रश्न हो तो हमसे संपर्क करें।",detail:"केवल खरीदी गई किट की संबंधित मार्गदर्शिका खोलें।",cta:"पूजा गाइड देखें"},
  link:"[[guide_url]]",marketing:false
 },
 product:{
  label:"Product announcement",kind:"Marketing / subscribed audience",timing:"When the product is actually published and audience consent is verified; suppress duplicates.",
  en:{subject:"Explore what's new at Sabpuja",preheader:"See a newly available puja essential or kit.",eyebrow:"From Sabpuja",title:"Discover something for your puja",body:"We've added something you might find useful for your puja preparations. Explore the product details and choose what suits your needs.",detail:"Featured product: [[product_title]]",cta:"View product"},
  hi:{subject:"Sabpuja पर नया क्या है?",preheader:"नई पूजा सामग्री या किट के बारे में जानें।",eyebrow:"Sabpuja से",title:"पूजा की तैयारी के लिए कुछ नया",body:"पूजा की तैयारी के लिए एक नया उत्पाद उपलब्ध है। उसका विवरण देखें और अपनी आवश्यकता के अनुसार चुनें।",detail:"विशेष उत्पाद: [[product_title]]",cta:"उत्पाद देखें"},
  link:"[[product_url]]",marketing:true
 },
 cart:{"label":"Abandoned cart","kind":"Marketing / cart recovery","timing":"4 hours after eligible identified cart; stop after purchase or checkout recovery starts.","link":"[[cart_url]]","marketing":true,"en":{"subject":"Your selected puja essentials","preheader":"Return to your cart when you're ready.","eyebrow":"A gentle reminder","title":"Your selected items","body":"Review your selected puja essentials before deciding.","detail":"Current cart items and availability from Shopify.","cta":"Review cart"},"hi":{"subject":"आपकी चुनी हुई पूजा सामग्री","preheader":"अपनी सामग्री फिर से देखें।","eyebrow":"एक याद दिलाना","title":"आपकी चुनी सामग्री","body":"अपनी चुनी हुई पूजा सामग्री फिर से देख सकते हैं।","detail":"कार्ट की सामग्री और उपलब्धता Shopify से आएगी।","cta":"कार्ट देखें"}},
 browse:{"label":"Product browse follow-up","kind":"Marketing / identified visitor","timing":"6–24 hours after consented, identified browsing; suppress after cart/checkout/order.","link":"[[product_url]]","marketing":true,"en":{"subject":"Explore the puja essential you viewed","preheader":"Product details when you need them.","eyebrow":"Your interest","title":"Take another look","body":"See the details of a puja essential you viewed recently.","detail":"Only an active verified product may be shown.","cta":"View product"},"hi":{"subject":"देखी गई पूजा सामग्री फिर देखें","preheader":"उत्पाद का विवरण उपलब्ध है।","eyebrow":"आपकी रुचि","title":"एक बार फिर देखें","body":"हाल में देखी गई पूजा सामग्री का विवरण फिर देखें।","detail":"केवल सत्यापित उपलब्ध उत्पाद दिखाएँ।","cta":"उत्पाद देखें"}},
 review:{"label":"Product review request","kind":"Marketing / verified order","timing":"7–10 days after verified delivery; valid review link, consent and suppression required.","link":"[[verified_review_url]]","marketing":true,"en":{"subject":"How was your Sabpuja order?","preheader":"Share your genuine feedback.","eyebrow":"Your experience matters","title":"Share your experience","body":"If you have used your items, an honest review can help other customers.","detail":"Only your verified purchased product links here.","cta":"Write a review"},"hi":{"subject":"आपका Sabpuja ऑर्डर कैसा रहा?","preheader":"अपना वास्तविक अनुभव साझा करें।","eyebrow":"आपका अनुभव","title":"अपनी प्रतिक्रिया दें","body":"उपयोग के बाद आप ईमानदार समीक्षा साझा कर सकते हैं।","detail":"केवल खरीदे गए उत्पाद की समीक्षा लिंक जोड़ें।","cta":"समीक्षा लिखें"}},
 crosssell:{"label":"Related product suggestion","kind":"Marketing / post-purchase","timing":"14–21 days after delivery; recommendation must be relevant, available, consented.","link":"[[product_url]]","marketing":true,"en":{"subject":"For your next puja preparation","preheader":"Explore related puja essentials.","eyebrow":"For next time","title":"A useful addition","body":"Here is another essential you may find helpful for your next puja.","detail":"Only relevant verified items should be recommended.","cta":"Explore product"},"hi":{"subject":"अगली पूजा की तैयारी","preheader":"संबंधित पूजा सामग्री देखें।","eyebrow":"अगली तैयारी","title":"एक उपयोगी सामग्री","body":"आपकी अगली पूजा के लिए संबंधित सामग्री उपयोगी हो सकती है।","detail":"केवल उपलब्ध संबंधित उत्पाद सुझाएँ।","cta":"उत्पाद देखें"}},
 winback:{"label":"Customer win-back","kind":"Marketing / inactive subscriber","timing":"60–90 days without orders; consent, suppression and frequency limits required.","link":"https://sabpuja.com/","marketing":true,"en":{"subject":"For your next puja","preheader":"Helpful guides and essentials at Sabpuja.","eyebrow":"Stay connected","title":"Preparing for another puja?","body":"Whenever the occasion comes, explore Sabpuja essentials and practical guidance.","detail":"No invented discounts or urgency.","cta":"Explore Sabpuja"},"hi":{"subject":"अगली पूजा के लिए","preheader":"पूजा सामग्री और मार्गदर्शिका देखें।","eyebrow":"संपर्क में रहें","title":"अगली पूजा की योजना है?","body":"अगली पूजा में Sabpuja की सामग्री और गाइड देखें।","detail":"बिना सत्यापन के छूट का दावा न करें।","cta":"Sabpuja देखें"}},
 festival:{"label":"Festival preparation reminder","kind":"Marketing / verified calendar","timing":"Only for verified festival date, city and delivery availability; proposed 14/7/3-day cadence.","link":"[[festival_collection_url]]","marketing":true,"en":{"subject":"Plan your festival puja","preheader":"Review materials and helpful guidance.","eyebrow":"Festival preparation","title":"Plan your puja with care","body":"Explore puja essentials and a verified guide for your festival.","detail":"Verify local date and delivery eligibility first.","cta":"Explore essentials"},"hi":{"subject":"त्योहार की पूजा की तैयारी","preheader":"सामग्री और मार्गदर्शन देखें।","eyebrow":"त्योहार की तैयारी","title":"पूजा की तैयारी करें","body":"त्योहार के लिए सामग्री और सही पूजा मार्गदर्शिका देखें।","detail":"स्थानीय तिथि और डिलीवरी की पुष्टि करें।","cta":"सामग्री देखें"}},
 restock:{"label":"Verified restock notice","kind":"Marketing / inventory event","timing":"Only on fresh verified stock to eligible opted-in recipient; recheck availability.","link":"[[product_url]]","marketing":true,"en":{"subject":"The item is available again","preheader":"Check current availability before ordering.","eyebrow":"Availability update","title":"Back in stock","body":"An item you were interested in is available to review.","detail":"Confirm inventory at the moment of sending.","cta":"View availability"},"hi":{"subject":"सामग्री फिर उपलब्ध है","preheader":"ऑर्डर से पहले स्टॉक देखें।","eyebrow":"उपलब्धता अपडेट","title":"फिर उपलब्ध है","body":"आपकी रुचि का उत्पाद फिर उपलब्ध हुआ है।","detail":"भेजते समय स्टॉक की जाँच करें।","cta":"उत्पाद देखें"}},
 vip:{"label":"Repeat-customer appreciation","kind":"Marketing / verified milestone","timing":"After verified repeat order and appropriate consent; no unconfigured loyalty promises.","link":"https://sabpuja.com/","marketing":true,"en":{"subject":"Thank you for choosing Sabpuja again","preheader":"We appreciate your continued trust.","eyebrow":"Thank you","title":"We value your trust","body":"Thank you for returning to Sabpuja for your puja preparations.","detail":"No invented loyalty perks or discounts.","cta":"Visit Sabpuja"},"hi":{"subject":"Sabpuja को फिर चुनने के लिए धन्यवाद","preheader":"आपके विश्वास के लिए आभार।","eyebrow":"धन्यवाद","title":"आपका विश्वास महत्वपूर्ण है","body":"पूजा की तैयारी के लिए Sabpuja को दोबारा चुनने पर धन्यवाद।","detail":"बिना व्यवस्था के लाभ का वादा न करें।","cta":"Sabpuja देखें"}}
};
var selected = "welcome",lang = "en";
var frame = document.getElementById("sp-email-frame");
function escapeHtml(s) { return String(s).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];}); }
function htmlEmail(record,language,preview){
 var d=record[language],foreground="#2E211D",muted="#75655E",cream="#FFF8E7",ivory="#FFFBEF",saffron="#C84700",brown="#33241F";
 var action=preview?"#preview":record.link;
 var logo=preview?APPROVED_LOGO:"[[logo_url]]";
 var footer=record.marketing?'<p style="margin:12px 0 0;font:13px/1.6 Arial,sans-serif;color:'+muted+'"><a href="'+(preview?"#preview":"[[unsubscribe_url]]")+'" style="color:'+brown+';text-decoration:underline">'+(language==="hi"?"ईमेल सदस्यता बंद करें":"Unsubscribe from marketing emails")+'</a></p>':"";
 var note=language==="hi"?"प्रश्न हैं? support@sabpuja.com पर संपर्क करें।":"Questions? Email support@sabpuja.com.";
 var detail=escapeHtml(d.detail);
 if (preview) detail=detail.replace(/\[\[[^\]]+\]\]/g,"<em style='color:#75655E'>[dynamic Shopify data]</em>");
 var title=escapeHtml(d.title),body=escapeHtml(d.body),subject=escapeHtml(d.subject),preheader=escapeHtml(d.preheader);
 return '<!doctype html><!-- SP-EMAIL-002 LAB STARTER: REPLACE ALL [[PLACEHOLDERS]], VERIFY ELIGIBILITY & TEST BEFORE SENDING --><html lang="'+language+'"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>'+subject+'</title></head>'+
 '<body style="margin:0;padding:0;background:'+ivory+';font-family:Arial,Helvetica,sans-serif;color:'+foreground+'">'+
 '<div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent">'+preheader+'</div>'+
 '<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background:'+ivory+';border-collapse:collapse"><tr><td align="center" style="padding:24px 12px 40px">'+
 '<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="width:100%;max-width:600px;border-collapse:separate;border-spacing:0;background:#FFFFFF;border:1px solid #E9DDCF;border-radius:12px;overflow:hidden">'+
 '<tr><td style="padding:24px 30px;border-top:5px solid '+saffron+';border-bottom:1px solid #E9DDCF;text-align:left"><img src="'+escapeHtml(logo)+'" width="146" alt="Sabpuja" style="display:block;width:146px;height:auto;max-width:100%;border:0"></td></tr>'+
 '<tr><td style="padding:36px 30px 30px;text-align:left" dir="auto">'+
 '<p style="margin:0 0 10px;color:'+saffron+';font:700 12px/1.4 Arial,sans-serif;letter-spacing:1.1px;text-transform:uppercase">'+escapeHtml(d.eyebrow)+'</p>'+
 '<h1 style="margin:0 0 16px;color:'+brown+';font:700 27px/1.25 Poppins,Arial,Helvetica,sans-serif">'+title+'</h1>'+
 '<p style="margin:0 0 24px;color:'+foreground+';font:16px/1.7 Inter,Arial,sans-serif">'+body+'</p>'+
 '<table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;margin:0 0 24px;background:'+cream+';border-left:3px solid #F4B400"><tr><td style="padding:16px 18px;color:'+brown+';font:15px/1.6 Arial,sans-serif">'+detail+'</td></tr></table>'+
 (window.SabpujaEmailModules ? window.SabpujaEmailModules.render(selected,language,preview) : '')+
 '<table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr><td bgcolor="'+saffron+'" style="border-radius:10px;background:'+saffron+';text-align:center"><a href="'+escapeHtml(action)+'" style="display:inline-block;padding:14px 23px;font:700 15px/1.3 Arial,sans-serif;color:#FFFFFF;text-decoration:none">'+escapeHtml(d.cta)+'</a></td></tr></table>'+
 '</td></tr><tr><td style="padding:24px 30px;background:'+cream+';border-top:1px solid #E9DDCF">'+
 '<p style="margin:0;color:'+muted+';font:13px/1.6 Arial,sans-serif">'+escapeHtml(note)+'</p>'+
 '<p style="margin:8px 0 0;color:'+muted+';font:12px/1.6 Arial,sans-serif">Sabpuja · <a href="https://sabpuja.com/" style="color:'+brown+'">sabpuja.com</a></p>'+footer+
 '</td></tr></table></td></tr></table></body></html>';
}
function update(){
 var rec=subjects[selected],d=rec[lang];
 document.documentElement.lang=lang;
 document.getElementById("sp-email-kind").textContent=rec.kind;
 document.getElementById("sp-email-title").textContent=rec.label;
 document.getElementById("sp-email-subject").textContent=d.subject;
 document.getElementById("sp-email-preheader").textContent=d.preheader;
 document.getElementById("sp-email-timing").textContent=rec.timing;
 frame.setAttribute("title",rec.label+" preview in "+(lang==="hi"?"Hindi":"English"));
 frame.srcdoc=htmlEmail(rec,lang,true);
 document.querySelectorAll("[data-email]").forEach(function(b){b.setAttribute("aria-pressed",String(b.dataset.email===selected));});
 document.getElementById("sp-email-feedback").textContent="";
}
document.querySelectorAll("[data-email]").forEach(function(b){b.addEventListener("click",function(){selected=b.dataset.email;update();});});
document.getElementById("sp-email-language").addEventListener("change",function(e){lang=e.target.value;update();});
document.querySelectorAll("[data-width]").forEach(function(b){b.addEventListener("click",function(){
 document.getElementById("sp-email-device").dataset.width=b.dataset.width;
 document.querySelectorAll("[data-width]").forEach(function(s){s.classList.toggle("is-active",s===b);s.setAttribute("aria-pressed",String(s===b));});
});});
function copy(s){
 var status=document.getElementById("sp-email-feedback");
 if(!navigator.clipboard||!navigator.clipboard.writeText){status.textContent="Clipboard is unavailable in this browser.";return;}
 navigator.clipboard.writeText(s).then(function(){status.textContent="Copied (prototype; requires Shopify mapping).";}).catch(function(){status.textContent="Copy failed. Check clipboard permissions.";});
}
document.getElementById("sp-email-copy-subject").addEventListener("click",function(){copy(subjects[selected][lang].subject);});
document.getElementById("sp-email-copy-html").addEventListener("click",function(){copy(htmlEmail(subjects[selected],lang,false));});
update();
})();