import React from 'react';
import FadeIn from './FadeIn';
import { useContent } from '../hooks/useContent';

const Gallery = () => {
  const { images } = useContent();

  return (
    <section id="gallery" className="py-24 md:py-32 bg-[#F9F7F3] overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-4 md:px-8">
        <FadeIn className="text-center mb-16">
          <h2 className="text-xs tracking-[0.3em] text-[#2C241B]/60 uppercase mb-4">Visual Diary</h2>
          <h3 className="text-3xl md:text-4xl font-serif text-[#2C241B] italic font-light">"Keindahan dalam setiap sudut."</h3>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-12 grid-rows-auto gap-4 md:gap-6">
          <FadeIn delay={100} className="md:col-span-7 md:row-span-2 group overflow-hidden rounded-sm relative aspect-[4/3] md:aspect-auto">
            <img src={images.gallery1} alt="Kopi" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
          </FadeIn>

          <FadeIn delay={200} className="md:col-span-5 md:row-span-1 group overflow-hidden rounded-sm relative aspect-square md:aspect-auto md:h-80">
            <img src={images.gallery2} alt="Interior detail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
          </FadeIn>

          <FadeIn delay={300} className="md:col-span-5 md:row-span-1 group overflow-hidden rounded-sm relative aspect-[4/3] md:aspect-auto md:h-80">
            <img src={images.gallery3} alt="Exterior" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
          </FadeIn>

          <FadeIn delay={150} className="md:col-span-4 md:row-span-1 group overflow-hidden rounded-sm relative aspect-square md:aspect-auto md:h-96">
            <img src={images.gallery4} alt="Pastry" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
          </FadeIn>

          <FadeIn delay={250} className="md:col-span-8 md:row-span-1 group overflow-hidden rounded-sm relative aspect-[16/9] md:aspect-auto md:h-96">
            <img src={images.gallery5} alt="Barista" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
