// Ulasan yang ditulis pengunjung dari tombol "Tulis Ulasan" di web utama.
// Disimpan terpisah dari konten CMS (localStorage key beda), supaya admin
// bisa lihat & hapus di CMS tanpa nyampur sama data testimoni pilihan admin.

const KEY = 'lumiere_user_reviews';

export function getUserReviews() {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    console.error('Gagal baca ulasan:', err);
    return [];
  }
}

export function addUserReview({ name, rating, message }) {
  const reviews = getUserReviews();
  const newReview = {
    id: `${Date.now()}`,
    name,
    rating,
    message,
    createdAt: new Date().toISOString(),
  };
  reviews.unshift(newReview);
  localStorage.setItem(KEY, JSON.stringify(reviews));
  return newReview;
}

export function deleteUserReview(id) {
  const reviews = getUserReviews().filter((r) => r.id !== id);
  localStorage.setItem(KEY, JSON.stringify(reviews));
}
