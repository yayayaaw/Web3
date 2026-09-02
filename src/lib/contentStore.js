import defaultContent from '../data/defaultContent';

// ============================================================
// Lapisan penyimpanan konten. SEKARANG pakai localStorage.
// NANTI kalau pindah ke Firebase, cukup ganti isi 3 fungsi ini
// (getContent/saveContent/subscribeContent) — komponen lain di
// seluruh web TIDAK perlu diubah sama sekali.
// ============================================================

const STORAGE_KEY = 'lumiere_cms_content';

// Merge shallow per top-level section, biar kalau ada field baru
// di defaultContent tapi belum ada di localStorage lama, tetap aman.
function mergeWithDefaults(saved) {
  const merged = { ...defaultContent };
  if (saved && typeof saved === 'object') {
    Object.keys(defaultContent).forEach((key) => {
      if (saved[key] !== undefined) {
        merged[key] = saved[key];
      }
    });
  }
  return merged;
}

export function getContent() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...defaultContent };
    return mergeWithDefaults(JSON.parse(raw));
  } catch (err) {
    console.error('Gagal baca konten dari localStorage:', err);
    return { ...defaultContent };
  }
}

export function saveContent(content) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
    // Kabarin tab/komponen lain di halaman yang sama bahwa data berubah
    window.dispatchEvent(new CustomEvent('lumiere-content-updated', { detail: content }));
    return true;
  } catch (err) {
    console.error('Gagal simpan konten ke localStorage:', err);
    return false;
  }
}

export function resetContent() {
  localStorage.removeItem(STORAGE_KEY);
  window.dispatchEvent(new CustomEvent('lumiere-content-updated', { detail: defaultContent }));
}

// Dipanggil oleh hook useContent supaya web utama auto-update
// kalau CMS nyimpen data baru (tab lain, atau komponen yang sama).
export function subscribeContent(callback) {
  const handleCustomEvent = (e) => callback(e.detail);
  const handleStorageEvent = (e) => {
    if (e.key === STORAGE_KEY) callback(getContent());
  };

  window.addEventListener('lumiere-content-updated', handleCustomEvent);
  window.addEventListener('storage', handleStorageEvent); // sinkron antar tab/browser

  return () => {
    window.removeEventListener('lumiere-content-updated', handleCustomEvent);
    window.removeEventListener('storage', handleStorageEvent);
  };
}
