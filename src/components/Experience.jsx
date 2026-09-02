import React from 'react';
import FadeIn from './FadeIn';
import { useContent } from '../hooks/useContent';

const Experience = () => {
  const { images, experienceFeatures } = useContent();

  return (
    <section className="py-24 md:py-32 bg-[#2C241B] text-[#F9F7F3]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        <div className="flex flex-col justify-center">
          <FadeIn>
            <h2 className="text-xs tracking-[0.3em] text-[#F9F7F3]/50 uppercase mb-4">Your Everyday Escape</h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-12 leading-tight">
              Datang untuk kopi. <br/>
              <span className="italic font-light text-[#F9F7F3]/80">Tinggal untuk suasananya.</span>
            </h3>
          </FadeIn>

          <div className="space-y-8">
            {experienceFeatures.map((item, idx) => (
              <FadeIn key={idx} delay={idx * 150} className="border-b border-[#F9F7F3]/10 pb-6">
                <h4 className="font-serif text-xl mb-2">{item.title}</h4>
                <p className="text-sm font-light text-[#F9F7F3]/60">{item.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn className="relative h-[60vh] lg:h-[80vh] w-full rounded-sm overflow-hidden hidden md:block">
          <img src={images.experience} alt="Coffee cup" className="w-full h-full object-cover opacity-80" />
          <div className="absolute inset-0 bg-[#2C241B]/20"></div>
        </FadeIn>

      </div>
    </section>
  );
};

export default Experience;
