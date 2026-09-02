import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MenuHighlight from './components/MenuHighlight';
import Gallery from './components/Gallery';
import Experience from './components/Experience';
import Testimonial from './components/Testimonial';
import Location from './components/Location';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import CMSAdmin from './pages/CMSAdmin';

// Halaman web utama (yang dilihat customer)
function MainSite() {
  return (
    <div className="font-sans bg-[#F9F7F3] text-[#2C241B] selection:bg-[#2C241B] selection:text-[#F9F7F3]">
      <Navbar />
      <Hero />
      <About />
      <MenuHighlight />
      <Gallery />
      <Experience />
      <Testimonial />
      <Location />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <>
      {/* Font global, dipakai di web utama maupun CMS */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&display=swap');
        .font-serif { font-family: 'Playfair Display', serif; }
        .font-sans { font-family: 'Inter', sans-serif; }
      `}} />

      <HashRouter>
        <Routes>
          <Route path="/" element={<MainSite />} />
          <Route path="/admin" element={<CMSAdmin />} />
        </Routes>
      </HashRouter>
    </>
  );
}
