// Pencatat kunjungan SANGAT SEDERHANA — cuma nyatet berapa kali halaman utama
// dibuka DI BROWSER INI (localStorage, per-device). Bukan analytics pengunjung
// beneran (butuh Google Analytics / Firebase buat itu). Ini cuma placeholder.

const KEY = 'lumiere_analytics';

function todayKey() {
  return new Date().toISOString().slice(0, 10); // YYYY-MM-DD
}

export function trackVisit() {
  try {
    const raw = localStorage.getItem(KEY);
    const data = raw ? JSON.parse(raw) : {};
    const key = todayKey();
    data[key] = (data[key] || 0) + 1;
    localStorage.setItem(KEY, JSON.stringify(data));
  } catch (err) {
    console.error('Gagal catat kunjungan:', err);
  }
}

export function getAnalytics() {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function getSummary() {
  const data = getAnalytics();
  const dates = Object.keys(data).sort();
  const total = dates.reduce((sum, d) => sum + data[d], 0);

  const now = new Date();
  const sevenDaysAgo = new Date(now);
  sevenDaysAgo.setDate(now.getDate() - 6);
  const monthPrefix = now.toISOString().slice(0, 7); // YYYY-MM

  let last7 = 0;
  let thisMonth = 0;
  dates.forEach((d) => {
    if (new Date(d) >= sevenDaysAgo) last7 += data[d];
    if (d.startsWith(monthPrefix)) thisMonth += data[d];
  });

  return { total, last7, thisMonth, byDate: data, dates: dates.slice().reverse() };
}
