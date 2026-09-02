import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useContent } from '../hooks/useContent';

// Nama brand & teks navigasi sekarang datang dari CMS
const Navbar = () => {
  const { brand } = useContent();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#F9F7F3]/80 backdrop-blur-md py-4 border-b border-[#2C241B]/10'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className={`font-serif text-2xl tracking-wide font-medium ${isScrolled ? 'text-[#2C241B]' : 'text-white'}`}>
          {brand.name}
        </a>

        <div className={`hidden md:flex items-center space-x-10 text-sm tracking-widest uppercase ${isScrolled ? 'text-[#2C241B]' : 'text-white'}`}>
          <a href="#about" className="hover:opacity-60 transition-opacity">{brand.navAbout}</a>
          <a href="#menu" className="hover:opacity-60 transition-opacity">{brand.navMenu}</a>
          <a href="#gallery" className="hover:opacity-60 transition-opacity">{brand.navGallery}</a>
          <a href="#location" className="hover:opacity-60 transition-opacity">{brand.navLocation}</a>
        </div>

        <div className="hidden md:block">
          <a href="#reservasi"
             className={`px-6 py-2.5 text-sm tracking-wider uppercase border transition-all duration-300
             ${isScrolled
                ? 'border-[#2C241B] text-[#2C241B] hover:bg-[#2C241B] hover:text-[#F9F7F3]'
                : 'border-white text-white hover:bg-white hover:text-[#2C241B] backdrop-blur-sm bg-white/5'}`}>
            {brand.reservationButton}
          </a>
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={`w-6 h-6 ${isScrolled || isMobileMenuOpen ? 'text-[#2C241B]' : 'text-white'}`} />
          ) : (
            <Menu className={`w-6 h-6 ${isScrolled ? 'text-[#2C241B]' : 'text-white'}`} />
          )}
        </button>
      </div>

      <div className={`md:hidden absolute top-full left-0 w-full bg-[#F9F7F3] border-b border-[#2C241B]/10 overflow-hidden transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 py-8 flex flex-col space-y-6 text-center text-[#2C241B]">
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-serif tracking-wide">{brand.navAbout}</a>
          <a href="#menu" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-serif tracking-wide">{brand.navMenu}</a>
          <a href="#gallery" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-serif tracking-wide">{brand.navGallery}</a>
          <a href="#location" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-serif tracking-wide">{brand.navLocation}</a>
          <a href="#reservasi" onClick={() => setIsMobileMenuOpen(false)} className="mt-4 inline-block mx-auto px-8 py-3 bg-[#2C241B] text-[#F9F7F3] text-sm tracking-widest uppercase">
            {brand.reservationButton}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
