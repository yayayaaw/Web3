import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';
import FadeIn from './FadeIn';
import { useContent } from '../hooks/useContent';

const Location = () => {
  const { images, contactInfo } = useContent();

  return (
    <section id="location" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">

        <FadeIn className="flex flex-col justify-center order-2 lg:order-1">
          <h2 className="text-xs tracking-[0.3em] text-[#2C241B]/60 uppercase mb-4">Kunjungi Kami</h2>
          <h3 className="text-4xl font-serif text-[#2C241B] mb-10">Lumière HQ</h3>

          <div className="space-y-8 mb-12">
            <div className="flex items-start">
              <MapPin className="w-5 h-5 text-[#2C241B]/50 mt-1 mr-4" />
              <div>
                <h4 className="font-medium text-[#2C241B] mb-1">Alamat</h4>
                <p className="text-[#2C241B]/70 font-light text-sm leading-relaxed max-w-xs whitespace-pre-line">
                  {contactInfo.address}
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Clock className="w-5 h-5 text-[#2C241B]/50 mt-1 mr-4" />
              <div>
                <h4 className="font-medium text-[#2C241B] mb-1">Jam Operasional</h4>
                <p className="text-[#2C241B]/70 font-light text-sm leading-relaxed whitespace-pre-line">
                  {contactInfo.hours}
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Phone className="w-5 h-5 text-[#2C241B]/50 mt-1 mr-4" />
              <div>
                <h4 className="font-medium text-[#2C241B] mb-1">Kontak</h4>
                <p className="text-[#2C241B]/70 font-light text-sm leading-relaxed">
                  {contactInfo.phone}<br/>
                  {contactInfo.email}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href={contactInfo.mapsUrl} className="inline-flex justify-center items-center px-8 py-4 bg-[#2C241B] text-[#F9F7F3] text-sm tracking-widest uppercase hover:bg-[#2C241B]/90 transition-colors duration-300">
              Buka Google Maps
            </a>
            <a href="#" className="inline-flex justify-center items-center px-8 py-4 border border-[#2C241B] text-[#2C241B] text-sm tracking-widest uppercase hover:bg-[#F9F7F3] transition-colors duration-300">
              Hubungi Kami
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={200} className="order-1 lg:order-2 h-[400px] lg:h-auto rounded-sm overflow-hidden bg-[#F9F7F3]">
          <img src={images.location} alt="Lokasi Cafe" className="w-full h-full object-cover grayscale-[30%]" />
        </FadeIn>

      </div>
    </section>
  );
};

export default Location;
