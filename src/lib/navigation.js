// Landing page ini satu halaman doang — semua "navigasi" cuma scroll ke section,
// BUKAN pindah route. Jangan pakai <a href="#id"> karena bentrok sama HashRouter
// (yang juga pakai tanda # buat routing /admin). Pakai scrollToSection() ini.

export function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// Bikin link wa.me dari nomor telepon di CMS (format bebas: spasi, tanda kurung, dll)
export function buildWhatsAppLink(phone) {
  const digits = (phone || '').replace(/\D/g, ''); // buang semua yang bukan angka
  if (!digits) return '#';
  return `https://wa.me/${digits}`;
}
