// Resize + compress gambar yang diupload user biar muat di localStorage.
// Balikin string base64 (data URL) yang siap dipakai langsung di <img src="">.

export function compressImage(file, maxWidth = 1200, quality = 0.75) {
  return new Promise((resolve, reject) => {
    if (!file.type.startsWith('image/')) {
      reject(new Error('File yang diupload bukan gambar.'));
      return;
    }

    const reader = new FileReader();
    reader.onerror = () => reject(new Error('Gagal baca file.'));
    reader.onload = (e) => {
      const img = new Image();
      img.onerror = () => reject(new Error('Gagal load gambar.'));
      img.onload = () => {
        let { width, height } = img;
        if (width > maxWidth) {
          height = Math.round((height * maxWidth) / width);
          width = maxWidth;
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);

        const dataUrl = canvas.toDataURL('image/jpeg', quality);
        resolve(dataUrl);
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  });
}

// Estimasi ukuran total konten yang tersimpan (kasar, buat kasih warning ke user)
export function estimateStorageSizeKB(content) {
  try {
    const json = JSON.stringify(content);
    return Math.round((json.length * 2) / 1024); // rough UTF-16 byte estimate
  } catch {
    return 0;
  }
}
