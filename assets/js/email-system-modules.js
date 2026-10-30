/* SP-EMAIL-002 reusable email blocks. No live customer or order data. */
(function(){
"use strict";
var definitions={
 welcome:"none",recovery:"cart",cart:"cart",order:"order",shipping:"shipping",delivered:"delivery",
 support:"guide",product:"product",browse:"product",review:"review",crosssell:"product",
 winback:"none",festival:"festival",restock:"product",vip:"appreciation"
};
var text={
 en:{
  cart:["Selected products",[["Product","[[line_item_title]]"],["Quantity","[[line_item_quantity]]"],["Unit price","[[line_item_price]]"]]],
  order:["Order summary",[["Order number","[[order_number]]"],["Purchased items","[[order_line_items]]"],["Order total","[[order_total]]"],["Shipping address","[[shipping_address]]"]]],
  shipping:["Tracking details",[["Order","[[order_number]]"],["Carrier","[[carrier_name]]"],["Tracking number","[[tracking_number]]"]]],
  delivery:["Delivery information",[["Order","[[order_number]]"],["Delivery status","[[delivery_status]]"]]],
  product:["Product information",[["Product title","[[product_title]]"],["Current price","[[product_price]]"],["Availability","[[product_availability]]"]]],
  guide:["Helpful puja guidance",[["Relevant guide","[[guide_title]]"],["Prepared for","[[purchased_kit_title]]"]]],
  review:["Your verified purchase",[["Order","[[order_number]]"],["Product","[[purchased_product_title]]"]]],
  festival:["Festival information",[["Festival","[[festival_name]]"],["Local area","[[festival_city]]"],["Verified festival date","[[festival_date]]"],["Delivery eligibility","[[delivery_eligibility]]"]]],
  appreciation:["Customer appreciation",[["Milestone","[[verified_loyalty_milestone]]"]]]
 },
 hi:{
  cart:["चुनी गई सामग्री",[["उत्पाद","[[line_item_title]]"],["मात्रा","[[line_item_quantity]]"],["मूल्य","[[line_item_price]]"]]],
  order:["ऑर्डर का विवरण",[["ऑर्डर संख्या","[[order_number]]"],["खरीदी गई सामग्री","[[order_line_items]]"],["कुल मूल्य","[[order_total]]"],["डिलीवरी पता","[[shipping_address]]"]]],
  shipping:["ट्रैकिंग जानकारी",[["ऑर्डर","[[order_number]]"],["कूरियर","[[carrier_name]]"],["ट्रैकिंग नंबर","[[tracking_number]]"]]],
  delivery:["डिलीवरी जानकारी",[["ऑर्डर","[[order_number]]"],["स्थिति","[[delivery_status]]"]]],
  product:["उत्पाद की जानकारी",[["उत्पाद","[[product_title]]"],["मौजूदा मूल्य","[[product_price]]"],["उपलब्धता","[[product_availability]]"]]],
  guide:["पूजा मार्गदर्शन",[["संबंधित गाइड","[[guide_title]]"],["खरीदी गई किट","[[purchased_kit_title]]"]]],
  review:["आपकी सत्यापित खरीद",[["ऑर्डर","[[order_number]]"],["उत्पाद","[[purchased_product_title]]"]]],
  festival:["त्योहार का विवरण",[["त्योहार","[[festival_name]]"],["स्थान","[[festival_city]]"],["सत्यापित तिथि","[[festival_date]]"],["डिलीवरी","[[delivery_eligibility]]"]]],
  appreciation:["ग्राहक आभार",[["योग्यता","[[verified_loyalty_milestone]]"]]]
 }
};
function esc(s){return String(s).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];});}
function render(id,lang,preview){
 var type=definitions[id],item=text[lang]&&text[lang][type];if(!item)return "";
 var message=preview?(lang==="hi"?"सिर्फ डिज़ाइन नमूना · वास्तविक ग्राहक डेटा नहीं":"Preview only · no real customer or order data"):"";
 var note=preview?'<p style="font:12px/1.5 Arial,sans-serif;margin:0 0 12px;color:#75655E">'+message+'</p>':"";
 var image=(type==="cart"||type==="product")?'<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom:14px;border-collapse:collapse;border:1px solid #E9DDCF"><tr>'+
 '<td width="104" style="background:#FFF8E7;text-align:center;padding:12px;color:#75655E;font:12px/1.5 Arial,sans-serif">'+(preview?(lang==="hi"?"उत्पाद चित्र":"Product image"):"[[product_image_block]]")+'</td>'+
 '<td style="padding:14px;color:#4E342E;font:14px/1.5 Arial,sans-serif">'+(preview?(lang==="hi"?"Shopify उत्पाद डेटा का स्थान":"Shopify catalog content placeholder"):"[[product_summary_block]]")+'</td></tr></table>':"";
 var rows=item[1].map(function(pair){
  return '<tr><td width="43%" valign="top" style="padding:8px 6px;border-top:1px solid #E9DDCF;color:#75655E;font:13px/1.5 Arial,sans-serif">'+esc(pair[0])+'</td><td valign="top" style="padding:8px 6px;border-top:1px solid #E9DDCF;color:#33241F;font:600 13px/1.5 Arial,sans-serif;word-break:break-word">'+(preview?'<em style="color:#75655E;font-weight:400">'+(lang==="hi"?"वास्तविक डेटा से भरेगा":"Dynamic Shopify field")+'</em>':esc(pair[1]))+'</td></tr>';
 }).join("");
 return '<table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="border:1px solid #E9DDCF;border-collapse:collapse;background:#FFFFFF;margin-bottom:24px"><tr><td style="padding:18px">'+
 '<h2 style="font:700 16px/1.4 Arial,sans-serif;color:#33241F;margin:0 0 12px">'+esc(item[0])+'</h2>'+note+image+
 '<table role="presentation" width="100%" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse">'+rows+'</table></td></tr></table>';
}
window.SabpujaEmailModules={render:render,definitions:definitions};
})();