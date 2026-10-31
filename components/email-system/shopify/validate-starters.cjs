/* SP-EMAIL-003 source contract smoke test. Node >=18; no network or Shopify writes. */
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const dir = __dirname;
const file = key => fs.readFileSync(path.join(dir, key), 'utf8');
const sources = [
 ['en', file('marketing-welcome-en.html')],
 ['hi', file('marketing-welcome-hi.html')]
];
const fail = [];
function test(description, body) {
 try { body(); process.stdout.write('PASS ' + description + '\n'); }
 catch(e){ fail.push(description); process.stderr.write('FAIL ' + description + ': ' + e.message + '\n'); }
}
for(const [lang,html] of sources){
 test(lang + ' complete HTML document',()=>{
   assert.match(html,/^<!doctype html>/i);assert.match(html,/<html lang="(en|hi)">/);
   assert.match(html,/<\/html>\s*$/);
 });
 test(lang + ' required Shopify Messaging variables',()=>{
   for(const s of ['{{ shop.url | escape }}','{{ shop.domain | escape }}','{{ unsubscribe_url }}','{{ open_tracking }}','{{ customer.first_name | escape }}'])
     assert.ok(html.includes(s),'Missing '+s);
 });
 test(lang + ' consent and email-client safe CTA',()=>{
   assert.match(html,/unsubscribe_url/);
   assert.match(html,/<table role="presentation"/);
   assert.match(html,/#C84700/);
   assert.ok(!html.includes('[[recovery_url]]'),'Cannot include private checkout links in welcome email');
 });
 test(lang + ' approved logo URL and image-off accessibility',()=>{
   assert.match(html,/sabpuja-logo-horizontal-color\.svg/);
   assert.match(html,/<img [^>]*alt="Sabpuja"/);
 });
 test(lang + ' no invented orders or marketing discount promises',()=>{
   assert.ok(!/\[\[order_number\]\]|★★★★★|₹\s*(?:1999|1,999)/.test(html));
   assert.ok(!/only \d+ left|limited stock|[0-9]+% off/i.test(html));
 });
 test(lang + ' subject/body and language content',()=>{
   if(lang==='hi') assert.match(html,/आपकी पूजा की तैयारी/);
   else assert.match(html,/Your puja journey starts here/);
 });
}
test('both language files distinct',()=>assert.notEqual(sources[0][1],sources[1][1]));
test('mapping covers exactly fifteen valid journeys',()=>{
 const manifest=JSON.parse(file('integration-manifest.json'));
 assert.equal(manifest.journeys.length,15);
 assert.equal(new Set(manifest.journeys.map(x=>x.id)).size,15);
 assert.equal(manifest.campaigns_enabled,false);
 assert.equal(manifest.notifications_modified,false);
 assert.equal(manifest.journeys.find(x=>x.id==='recovery').status,'blocked_existing_flow_audit');
});
if(fail.length){process.stderr.write(fail.length+' checks failed\n');process.exitCode=1;}
else process.stdout.write('SP-EMAIL-003 SOURCE CONTRACT: 14/14 PASS. PRODUCTION RELEASE GATES STILL PENDING.\n');
