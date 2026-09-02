import React from 'react';
import { useContent } from '../hooks/useContent';

const Footer = () => {
  const { footer, brand } = useContent();

  return (
    <footer className="bg-[#1A1510] text-[#F9F7F3]/70 py-16 px-6 md:px-12 text-sm font-light">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-10">

        <div className="text-center md:text-left">
          <h2 className="font-serif text-2xl text-white mb-2 tracking-wide">{brand.name}</h2>
          <p className="max-w-xs text-xs tracking-wide">
            {footer.tagline}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 text-xs tracking-widest uppercase">
          <a href={footer.instagramUrl} className="hover:text-white transition-colors">Instagram</a>
          <a href={footer.whatsappUrl} className="hover:text-white transition-colors">WhatsApp</a>
          <a href={footer.mapsUrl} className="hover:text-white transition-colors">Google Maps</a>
          <a href="#" className="hover:text-white transition-colors">Careers</a>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#F9F7F3]/40">
        <p>&copy; {new Date().getFullYear()} Lumière Cafe. All rights reserved.</p>
        <p>Designed for premium hospitality.</p>
      </div>
    </footer>
  );
};

export default Footer;
