import React from 'react';
import { ArrowRight } from 'lucide-react';
import FadeIn from './FadeIn';
import { useContent } from '../hooks/useContent';

const About = () => {
  const { about, images } = useContent();

  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 bg-[#F9F7F3]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <FadeIn className="order-2 lg:order-1 relative">
          <div className="aspect-[4/5] md:aspect-square lg:aspect-[4/5] overflow-hidden rounded-sm">
            <img
              src={images.intro}
              alt="Barista menyeduh kopi"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 ease-out"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-24 h-24 border border-[#2C241B]/20 rounded-full z-0 hidden md:block"></div>
        </FadeIn>

        <div className="order-1 lg:order-2 flex flex-col justify-center">
          <FadeIn>
            <h2 className="text-xs tracking-[0.3em] text-[#2C241B]/60 uppercase mb-4">{about.eyebrow}</h2>
          </FadeIn>
          <FadeIn delay={200}>
            <h3 className="text-4xl md:text-5xl font-serif text-[#2C241B] mb-8 leading-tight">
              {about.heading}
            </h3>
          </FadeIn>
          <FadeIn delay={400}>
            <p className="text-lg text-[#2C241B]/80 font-light leading-relaxed mb-6">
              {about.paragraph1}
            </p>
            <p className="text-lg text-[#2C241B]/80 font-light leading-relaxed mb-10">
              {about.paragraph2}
            </p>
            <a href="#about-more" className="group flex items-center text-sm tracking-widest uppercase font-medium text-[#2C241B] hover:opacity-70 transition-opacity">
              Kisah Kami
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default About;
