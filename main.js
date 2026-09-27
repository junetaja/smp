(() => {
  const c = window.RESTAURANT || {};
  const text = (id, value) => { if (value) document.getElementById(id).textContent = value; };
  text('address', c.address);
  text('hours', c.openingHours);
  if (Number.isFinite(c.sotoPrice) && c.sotoPrice > 0) text('menu-price', new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(c.sotoPrice));
  const show = (id, url) => { const a = document.getElementById(id); a.href = url; a.hidden = false; a.rel = 'noopener noreferrer'; a.target = '_blank'; };
  if (/^[1-9]\d{7,14}$/.test(c.whatsapp || '')) show('whatsapp', 'https://wa.me/' + c.whatsapp + '?text=' + encodeURIComponent('Halo Soto Mbah Poetri, saya ingin bertanya tentang menu.'));
  try { const url = new URL(c.mapsUrl); if (url.protocol === 'https:') show('maps', url.href); } catch (_) {}
})();
