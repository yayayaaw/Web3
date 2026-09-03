import React from 'react';
import FadeIn from './FadeIn';
import { useContent } from '../hooks/useContent';

// Grid galeri fleksibel — jumlah foto ditentukan CMS (tambah/hapus bebas),
// jadi layoutnya gak dikunci ke angka tertentu kayak sebelumnya.
const Gallery = () => {
  const { gallery } = useContent();

  return (
    <section id="gallery" className="py-24 md:py-32 bg-[#F9F7F3] overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-4 md:px-8">
        <FadeIn className="text-center mb-16">
          <h2 className="text-xs tracking-[0.3em] text-[#2C241B]/60 uppercase mb-4">Visual Diary</h2>
          <h3 className="text-3xl md:text-4xl font-serif text-[#2C241B] italic font-light">"Keindahan dalam setiap sudut."</h3>
        </FadeIn>

        {gallery.length === 0 ? (
          <p className="text-center text-sm text-[#2C241B]/40 italic">Belum ada foto galeri.</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {gallery.map((url, i) => (
              <FadeIn key={i} delay={i * 80} className="group overflow-hidden rounded-sm relative aspect-square md:aspect-[4/3]">
                <img src={url} alt={`Galeri ${i + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
              </FadeIn>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
