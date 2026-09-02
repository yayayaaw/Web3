import React from 'react';
import FadeIn from './FadeIn';
import { useContent } from '../hooks/useContent';

const MenuHighlight = () => {
  const { menuItems } = useContent();

  return (
    <section id="menu" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <FadeIn>
            <h2 className="text-xs tracking-[0.3em] text-[#2C241B]/60 uppercase mb-4">Kurasi Rasa</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-[#2C241B]">Favorit Kami</h3>
          </FadeIn>
          <FadeIn delay={200}>
            <a href="#full-menu" className="hidden md:inline-block px-8 py-3 border border-[#2C241B] text-[#2C241B] text-sm tracking-widest uppercase hover:bg-[#2C241B] hover:text-[#F9F7F3] transition-colors duration-300">
              Lihat Semua Menu
            </a>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {menuItems.map((item, index) => (
            <FadeIn key={index} delay={index * 150} className="group cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden mb-6 rounded-sm relative">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-[#2C241B]/0 group-hover:bg-[#2C241B]/10 transition-colors duration-500"></div>
              </div>
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-serif text-xl text-[#2C241B]">{item.name}</h4>
                <span className="text-sm font-medium text-[#2C241B] border-b border-[#2C241B]/30 pb-0.5">{item.price}</span>
              </div>
              <p className="text-sm text-[#2C241B]/60 font-light leading-relaxed">
                {item.desc}
              </p>
            </FadeIn>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <a href="#full-menu" className="inline-block w-full px-8 py-4 border border-[#2C241B] text-[#2C241B] text-sm tracking-widest uppercase hover:bg-[#2C241B] hover:text-[#F9F7F3] transition-colors duration-300">
            Lihat Semua Menu
          </a>
        </div>
      </div>
    </section>
  );
};

export default MenuHighlight;
