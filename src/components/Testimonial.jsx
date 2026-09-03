import React, { useState } from 'react';
import { X } from 'lucide-react';
import FadeIn from './FadeIn';
import { useContent } from '../hooks/useContent';
import { addUserReview } from '../lib/reviewsStore';

const Testimonial = () => {
  const { testimonials } = useContent();
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [rating, setRating] = useState(5);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    addUserReview({ name: name.trim(), rating, message: message.trim() });
    setSubmitted(true);
    setName('');
    setMessage('');
    setRating(5);
    setTimeout(() => {
      setShowForm(false);
      setSubmitted(false);
    }, 1800);
  };

  return (
    <section className="py-24 md:py-32 bg-[#F9F7F3] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-0">
        <FadeIn className="text-center mb-12 px-6">
          <h2 className="text-xs tracking-[0.3em] text-[#2C241B]/60 uppercase mb-4">Apa Kata Mereka</h2>
        </FadeIn>

        {/* Carousel geser manual (swipe), TANPA tombol navigasi */}
        <FadeIn>
          <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide px-6">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="snap-center shrink-0 w-[85vw] sm:w-[420px] bg-white rounded-sm p-8 border border-[#2C241B]/10"
              >
                <div className="flex justify-center space-x-1 mb-4 text-[#2C241B]">
                  {[...Array(5)].map((_, i) => <span key={i} className="text-base">★</span>)}
                </div>
                <p className="font-serif text-lg md:text-xl leading-relaxed text-[#2C241B] italic mb-4 text-center">
                  "{t.quote}"
                </p>
                <p className="text-xs tracking-widest uppercase font-medium text-[#2C241B]/60 text-center">— {t.author}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={200} className="text-center mt-10 px-6">
          <button
            onClick={() => setShowForm(true)}
            className="px-6 py-3 rounded-full border border-[#2C241B] text-sm tracking-widest uppercase text-[#2C241B] hover:bg-[#2C241B] hover:text-white transition-colors"
          >
            Tulis Ulasan
          </button>
        </FadeIn>
      </div>

      {showForm && (
        <div
          className="fixed inset-0 z-[60] bg-[#2C241B]/60 flex items-center justify-center px-6"
          onClick={() => setShowForm(false)}
        >
          <div className="bg-white rounded-sm p-6 w-full max-w-md relative" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setShowForm(false)} className="absolute top-4 right-4 text-[#2C241B]/40 hover:text-[#2C241B]">
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <p className="text-center py-8 font-serif text-lg">Terima kasih atas ulasannya! 🙏</p>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 className="font-serif text-xl mb-4">Tulis Ulasan</h3>
                <label className="block mb-3">
                  <span className="block text-sm mb-1">Nama</span>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full border border-[#2C241B]/20 rounded px-3 py-2 text-sm"
                  />
                </label>
                <label className="block mb-3">
                  <span className="block text-sm mb-1">Rating</span>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <button
                        type="button"
                        key={n}
                        onClick={() => setRating(n)}
                        className={`text-2xl leading-none ${n <= rating ? 'text-[#2C241B]' : 'text-[#2C241B]/20'}`}
                      >
                        ★
                      </button>
                    ))}
                  </div>
                </label>
                <label className="block mb-4">
                  <span className="block text-sm mb-1">Ulasan</span>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={4}
                    className="w-full border border-[#2C241B]/20 rounded px-3 py-2 text-sm"
                  />
                </label>
                <button type="submit" className="w-full py-3 bg-[#2C241B] text-white text-sm tracking-widest uppercase rounded">
                  Kirim Ulasan
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonial;
