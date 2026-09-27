(() => {
  const c = window.RESTAURANT || {};
  const text = (id, value) => { if (value) document.getElementById(id).textContent = value; };
  text('address', c.address);
  text('hours', c.openingHours);
  const show = (id, url) => { const a = document.getElementById(id); a.href = url; a.hidden = false; a.rel = 'noopener noreferrer'; a.target = '_blank'; };
  if (/^[1-9]\d{7,14}$/.test(c.whatsapp || '')) show('whatsapp', 'https://wa.me/' + c.whatsapp + '?text=' + encodeURIComponent('Halo Soto Mbah Poetri, saya ingin bertanya tentang menu.'));
  try { const url = new URL(c.mapsUrl); if (url.protocol === 'https:') show('maps', url.href); } catch (_) {}
})();
(() => {
 const c=window.RESTAURANT||{};
 if(c.openingHours) document.getElementById('footer-hours').textContent=c.openingHours;
 if(/^[1-9]\d{7,14}$/.test(c.whatsapp||'')) {
 document.getElementById('phone').textContent='+'+c.whatsapp;
 document.querySelectorAll('[data-wa]').forEach(a=>a.href='https://wa.me/'+c.whatsapp);
 }
 try {const u=new URL(c.mapsUrl);if(u.protocol==='https:')document.querySelectorAll('[data-map]').forEach(a=>{a.href=u.href;a.hidden=false;});}catch(e){}
 const d=document.getElementById('menu-dialog');
 document.querySelectorAll('[data-menu]').forEach(b=>b.addEventListener('click',()=>{document.getElementById('dialog-title').textContent=b.dataset.menu;d.showModal();}));
 d.querySelector('.close').addEventListener('click',()=>d.close());
 document.getElementById('dialog-contact').addEventListener('click',()=>d.close());
})();