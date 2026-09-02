import React from 'react';
import FadeIn from './FadeIn';
import { useContent } from '../hooks/useContent';

const FinalCTA = () => {
  const { images } = useContent();

  return (
    <section className="relative py-32 md:py-48 flex items-center justify-center overflow-hidden text-center">
      <div className="absolute inset-0 z-0">
        <img
          src={images.final}
          alt="Suasana Cafe"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#2C241B]/70"></div>
      </div>

      <div className="relative z-10 px-6 max-w-2xl mx-auto">
        <FadeIn>
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">
            Sampai jumpa di <span className="italic">Lumière.</span>
          </h2>
        </FadeIn>
        <FadeIn delay={200}>
          <p className="text-white/80 font-light text-lg mb-10">
            Meja Anda sudah menanti.
          </p>
        </FadeIn>
        <FadeIn delay={400}>
          <a href="#reservasi" className="inline-block px-10 py-4 bg-white text-[#2C241B] text-sm tracking-widest uppercase hover:bg-[#F9F7F3] transition-colors duration-300">
            Reservasi Meja
          </a>
        </FadeIn>
      </div>
    </section>
  );
};

export default FinalCTA;
