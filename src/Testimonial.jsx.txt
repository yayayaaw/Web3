import React from 'react';
import FadeIn from './FadeIn';
import { useContent } from '../hooks/useContent';

const Testimonial = () => {
  const { testimonial } = useContent();

  return (
    <section className="py-24 md:py-32 bg-[#F9F7F3]">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <FadeIn>
          <h2 className="text-xs tracking-[0.3em] text-[#2C241B]/60 uppercase mb-16">Apa Kata Mereka</h2>
        </FadeIn>

        <div className="space-y-20">
          <FadeIn delay={100}>
            <div className="flex justify-center space-x-1 mb-6 text-[#2C241B]">
              {[...Array(5)].map((_, i) => <span key={i} className="text-lg">★</span>)}
            </div>
            <p className="font-serif text-2xl md:text-3xl leading-relaxed text-[#2C241B] italic mb-6">
              "{testimonial.quote}"
            </p>
            <p className="text-sm tracking-widest uppercase font-medium text-[#2C241B]/60">— {testimonial.author}</p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
