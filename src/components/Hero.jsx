import React from 'react';
import FadeIn from './FadeIn';
import { useContent } from '../hooks/useContent';

const Hero = () => {
  const { hero, images } = useContent();

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={images.hero}
          alt="Interior Lumiere Cafe"
          className="w-full h-full object-cover object-center scale-105 animate-[pulse_20s_ease-in-out_infinite_alternate]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2C241B]/60 via-[#2C241B]/30 to-[#2C241B]/70"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
        <FadeIn>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight">
            {hero.title}
          </h1>
        </FadeIn>

        <FadeIn delay={200}>
          <p className="text-lg md:text-xl text-white/90 font-light mb-4 tracking-wide max-w-2xl mx-auto">
            {hero.tagline}
          </p>
        </FadeIn>

        <FadeIn delay={400}>
          <p className="text-sm md:text-base text-white/70 font-light mb-10 max-w-xl mx-auto">
            {hero.subtext}
          </p>
        </FadeIn>

        <FadeIn delay={600} className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <a href="#menu" className="w-full sm:w-auto px-8 py-4 bg-white text-[#2C241B] text-sm tracking-widest uppercase hover:bg-[#F9F7F3] transition-colors duration-300">
            Lihat Menu
          </a>
          <a href="#location" className="w-full sm:w-auto px-8 py-4 border border-white/50 text-white text-sm tracking-widest uppercase backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-colors duration-300">
            Kunjungi Kami
          </a>
        </FadeIn>
      </div>
    </section>
  );
};

export default Hero;
