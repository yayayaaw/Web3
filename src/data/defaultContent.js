// Default content — dipakai kalau localStorage masih kosong (pertama kali buka / user belum edit apa-apa)
// Struktur ini yang jadi acuan CMS. Kalau nambah field baru, tambahin juga di sini.

const defaultContent = {
  brand: {
    name: "LUMIÈRE",
    navAbout: "Tentang",
    navMenu: "Menu",
    navGallery: "Galeri",
    navLocation: "Lokasi",
    reservationButton: "Reservasi",
  },

  hero: {
    title: "Lumière.",
    tagline: "Tempat untuk menikmati kopi, makanan, dan momen yang berarti.",
    subtext: "Specialty coffee, comfort food, dan suasana yang dibuat untuk membuatmu betah berlama-lama.",
  },

  about: {
    eyebrow: "More Than Coffee",
    heading: "Sebuah simfoni antara rasa dan suasana.",
    paragraph1: "Kami percaya cafe bukan sekadar tempat singgah, melainkan destinasi. Bukan hanya tentang apa yang ada di dalam cangkir, tetapi tentang percakapan, inspirasi, dan waktu yang kita habiskan bersama.",
    paragraph2: "Setiap detail di Lumière dirancang untuk memberikan kenyamanan, mulai dari pemilihan biji kopi hingga desain interior yang menenangkan pikiran.",
  },

  menuItems: [
    {
      name: "Truffle Mushroom Toast",
      desc: "Roti artisan, jamur panggang, truffle oil, keju parmesan.",
      price: "65k",
      img: "https://images.unsplash.com/photo-1484723091791-c007058a0800?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "Signature V60",
      desc: "Biji kopi single origin pilihan, diseduh manual dengan presisi.",
      price: "45k",
      img: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "Burrata Salad",
      desc: "Tomat ceri segar, keju burrata, basil, balsamic glaze.",
      price: "75k",
      img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "Matcha Espresso Fusion",
      desc: "Uji matcha premium, espresso blend, susu oat.",
      price: "55k",
      img: "https://images.unsplash.com/photo-1536514072410-5019a3c69182?q=80&w=800&auto=format&fit=crop"
    }
  ],

  images: {
    hero: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2000&auto=format&fit=crop",
    intro: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=1000&auto=format&fit=crop",
    gallery1: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?q=80&w=1000&auto=format&fit=crop",
    gallery2: "https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=1000&auto=format&fit=crop",
    gallery3: "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?q=80&w=1000&auto=format&fit=crop",
    gallery4: "https://images.unsplash.com/photo-1507133750070-4ed4b58b2204?q=80&w=1000&auto=format&fit=crop",
    gallery5: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=1000&auto=format&fit=crop",
    experience: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1000&auto=format&fit=crop",
    location: "https://images.unsplash.com/photo-1524414139215-35c94f8a81bc?q=80&w=1200&auto=format&fit=crop",
    final: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2000&auto=format&fit=crop"
  },

  experienceFeatures: [
    { title: "Specialty Coffee", desc: "Biji kopi segar yang disangrai dengan profil khusus untuk menghasilkan rasa terbaik." },
    { title: "Fresh Food", desc: "Dibuat dari bahan-bahan lokal berkualitas tinggi setiap paginya." },
    { title: "Comfortable Space", desc: "Interior minimalis dengan pencahayaan hangat, cocok untuk bekerja atau bersantai." },
    { title: "Free High-Speed Wi-Fi", desc: "Koneksi stabil tanpa batas untuk mendukung produktivitas Anda." }
  ],

  testimonial: {
    quote: "Salah satu cafe dengan desain interior paling indah yang pernah saya kunjungi. Kopinya luar biasa, dan suasananya benar-benar membuat betah untuk menyelesaikan pekerjaan.",
    author: "Sarah A.",
  },

  contactInfo: {
    address: "Jl. Senopati No. 88, Kebayoran Baru\nJakarta Selatan, 12190",
    hours: "Senin - Kamis : 08.00 - 22.00\nJumat - Minggu : 07.00 - 23.00",
    phone: "+62 812 3456 7890 (WhatsApp)",
    email: "hello@lumierecafe.com",
    mapsUrl: "#",
  },

  footer: {
    tagline: "A premium space for coffee, food, and meaningful conversations.",
    instagramUrl: "#",
    whatsappUrl: "#",
    mapsUrl: "#",
  },
};

export default defaultContent;
