import React, { useState } from 'react';
import { Plus, Trash2, Save, RotateCcw, Check, Upload, Loader2 } from 'lucide-react';
import { getContent, saveContent, resetContent } from '../lib/contentStore';
import defaultContent from '../data/defaultContent';
import { compressImage, estimateStorageSizeKB } from '../lib/imageUpload';

// ============================================================
// Halaman CMS. Semua field di sini map 1:1 ke struktur di
// src/data/defaultContent.js. Simpan → localStorage → web utama
// otomatis kebaca lewat hook useContent().
// ============================================================

const SECTIONS = ['Hero', 'About', 'Menu', 'Galeri', 'Fitur', 'Testimoni', 'Kontak', 'Footer'];

function Field({ label, value, onChange, textarea = false }) {
  return (
    <label className="block mb-4">
      <span className="block text-sm font-medium text-[#2C241B] mb-1.5">{label}</span>
      {textarea ? (
        <textarea
          className="w-full border border-[#2C241B]/20 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#2C241B] font-light"
          rows={3}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      ) : (
        <input
          className="w-full border border-[#2C241B]/20 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#2C241B] font-light"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
    </label>
  );
}

// Field khusus foto: ada preview + tombol upload file (auto-compress ke base64)
function ImageField({ label, value, onChange }) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setError('');
    setUploading(true);
    try {
      const dataUrl = await compressImage(file);
      onChange(dataUrl);
    } catch (err) {
      setError(err.message || 'Gagal upload foto.');
    } finally {
      setUploading(false);
      e.target.value = ''; // reset input biar bisa upload file yang sama lagi kalau perlu
    }
  };

  return (
    <div className="mb-5">
      <span className="block text-sm font-medium text-[#2C241B] mb-1.5">{label}</span>

      <div className="flex items-start gap-4">
        <div className="w-24 h-24 shrink-0 rounded border border-[#2C241B]/20 overflow-hidden bg-[#F9F7F3] flex items-center justify-center">
          {value ? (
            <img src={value} alt={label} className="w-full h-full object-cover" />
          ) : (
            <span className="text-[10px] text-[#2C241B]/30 text-center px-1">Belum ada foto</span>
          )}
        </div>

        <div className="flex-1">
          <label className="inline-flex items-center gap-2 px-4 py-2 text-sm border border-[#2C241B]/30 rounded cursor-pointer hover:bg-[#2C241B]/5 transition-colors">
            {uploading ? (
              <><Loader2 className="w-4 h-4 animate-spin" /> Mengupload...</>
            ) : (
              <><Upload className="w-4 h-4" /> Pilih Foto</>
            )}
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
              disabled={uploading}
            />
          </label>
          {error && <p className="text-xs text-red-600 mt-1.5">{error}</p>}
          {value && (
            <button
              onClick={() => onChange('')}
              className="block text-xs text-[#2C241B]/40 hover:text-red-600 mt-1.5"
            >
              Hapus foto
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default function CMSAdmin() {
  const [content, setContent] = useState(getContent);
  const [activeSection, setActiveSection] = useState('Hero');
  const [savedFlash, setSavedFlash] = useState(false);
  const [saveError, setSaveError] = useState('');

  const update = (path, value) => {
    setContent((prev) => {
      const next = structuredClone(prev);
      const keys = path.split('.');
      let obj = next;
      for (let i = 0; i < keys.length - 1; i++) obj = obj[keys[i]];
      obj[keys[keys.length - 1]] = value;
      return next;
    });
  };

  const updateArrayItem = (arrayKey, index, field, value) => {
    setContent((prev) => {
      const next = structuredClone(prev);
      next[arrayKey][index][field] = value;
      return next;
    });
  };

  const addArrayItem = (arrayKey, template) => {
    setContent((prev) => {
      const next = structuredClone(prev);
      next[arrayKey].push(template);
      return next;
    });
  };

  const removeArrayItem = (arrayKey, index) => {
    setContent((prev) => {
      const next = structuredClone(prev);
      next[arrayKey].splice(index, 1);
      return next;
    });
  };

  const handleSave = () => {
    setSaveError('');
    const sizeKB = estimateStorageSizeKB(content);
    if (sizeKB > 4500) {
      setSaveError(`Data terlalu besar (~${sizeKB}KB). Kompres/kurangi foto dulu, localStorage cuma muat sekitar 5MB.`);
      return;
    }
    const ok = saveContent(content);
    if (!ok) {
      setSaveError('Gagal simpan — kemungkinan localStorage penuh. Coba kurangi jumlah/ukuran foto.');
      return;
    }
    setSavedFlash(true);
    setTimeout(() => setSavedFlash(false), 2000);
  };

  const handleReset = () => {
    if (window.confirm('Reset semua konten ke default? Perubahan yang belum disimpan akan hilang.')) {
      resetContent();
      setContent(structuredClone(defaultContent));
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F7F3] font-sans text-[#2C241B]">
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:wght@500;600&display=swap');
        .font-serif { font-family: 'Playfair Display', serif; }
        .font-sans { font-family: 'Inter', sans-serif; }
      `}} />

      <div className="sticky top-0 z-10 bg-white border-b border-[#2C241B]/10 px-6 py-4 flex justify-between items-center">
        <h1 className="font-serif text-xl">Lumière — CMS</h1>
        <div className="flex items-center gap-3">
          <button
            onClick={handleReset}
            className="flex items-center gap-1.5 px-4 py-2 text-sm border border-[#2C241B]/30 rounded hover:bg-[#2C241B]/5 transition-colors"
          >
            <RotateCcw className="w-4 h-4" /> Reset
          </button>
          <button
            onClick={handleSave}
            className="flex items-center gap-1.5 px-5 py-2 text-sm bg-[#2C241B] text-white rounded hover:bg-[#2C241B]/90 transition-colors"
          >
            {savedFlash ? <><Check className="w-4 h-4" /> Tersimpan</> : <><Save className="w-4 h-4" /> Simpan</>}
          </button>
        </div>
      </div>

      {saveError && (
        <div className="max-w-5xl mx-auto px-6 pt-4">
          <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded px-4 py-3">
            {saveError}
          </div>
        </div>
      )}

      <div className="max-w-5xl mx-auto px-6 py-8 flex gap-8">
        <div className="w-40 shrink-0 hidden md:block">
          <div className="sticky top-24 space-y-1">
            {SECTIONS.map((s) => (
              <button
                key={s}
                onClick={() => setActiveSection(s)}
                className={`block w-full text-left px-3 py-2 text-sm rounded transition-colors ${
                  activeSection === s ? 'bg-[#2C241B] text-white' : 'hover:bg-[#2C241B]/5'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="md:hidden flex gap-2 overflow-x-auto pb-2 mb-4 -mx-6 px-6">
          {SECTIONS.map((s) => (
            <button
              key={s}
              onClick={() => setActiveSection(s)}
              className={`shrink-0 px-3 py-1.5 text-sm rounded-full border ${
                activeSection === s ? 'bg-[#2C241B] text-white border-[#2C241B]' : 'border-[#2C241B]/20'
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        <div className="flex-1 bg-white rounded-lg border border-[#2C241B]/10 p-6">

          {activeSection === 'Hero' && (
            <div>
              <h2 className="font-serif text-2xl mb-6">Hero</h2>
              <Field label="Judul" value={content.hero.title} onChange={(v) => update('hero.title', v)} />
              <Field label="Tagline" value={content.hero.tagline} onChange={(v) => update('hero.tagline', v)} />
              <Field label="Subtext" value={content.hero.subtext} onChange={(v) => update('hero.subtext', v)} textarea />
              <ImageField label="Foto Latar Hero" value={content.images.hero} onChange={(v) => update('images.hero', v)} />
            </div>
          )}

          {activeSection === 'About' && (
            <div>
              <h2 className="font-serif text-2xl mb-6">Tentang Kami</h2>
              <Field label="Label kecil" value={content.about.eyebrow} onChange={(v) => update('about.eyebrow', v)} />
              <Field label="Judul" value={content.about.heading} onChange={(v) => update('about.heading', v)} />
              <Field label="Paragraf 1" value={content.about.paragraph1} onChange={(v) => update('about.paragraph1', v)} textarea />
              <Field label="Paragraf 2" value={content.about.paragraph2} onChange={(v) => update('about.paragraph2', v)} textarea />
              <ImageField label="Foto" value={content.images.intro} onChange={(v) => update('images.intro', v)} />
            </div>
          )}

          {activeSection === 'Menu' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-serif text-2xl">Menu Favorit</h2>
                <button
                  onClick={() => addArrayItem('menuItems', { name: 'Menu Baru', desc: '', price: '0k', img: '' })}
                  className="flex items-center gap-1 text-sm px-3 py-1.5 border border-[#2C241B]/30 rounded hover:bg-[#2C241B]/5"
                >
                  <Plus className="w-4 h-4" /> Tambah
                </button>
              </div>
              {content.menuItems.map((item, i) => (
                <div key={i} className="border border-[#2C241B]/10 rounded p-4 mb-4">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs uppercase tracking-widest text-[#2C241B]/40">Item {i + 1}</span>
                    <button onClick={() => removeArrayItem('menuItems', i)} className="text-[#2C241B]/40 hover:text-red-600">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <Field label="Nama" value={item.name} onChange={(v) => updateArrayItem('menuItems', i, 'name', v)} />
                  <Field label="Deskripsi" value={item.desc} onChange={(v) => updateArrayItem('menuItems', i, 'desc', v)} textarea />
                  <Field label="Harga" value={item.price} onChange={(v) => updateArrayItem('menuItems', i, 'price', v)} />
                  <ImageField label="Foto" value={item.img} onChange={(v) => updateArrayItem('menuItems', i, 'img', v)} />
                </div>
              ))}
            </div>
          )}

          {activeSection === 'Galeri' && (
            <div>
              <h2 className="font-serif text-2xl mb-6">Galeri</h2>
              {['gallery1', 'gallery2', 'gallery3', 'gallery4', 'gallery5'].map((key, i) => (
                <ImageField key={key} label={`Foto Galeri ${i + 1}`} value={content.images[key]} onChange={(v) => update(`images.${key}`, v)} />
              ))}
              <ImageField label="Foto Experience (section gelap)" value={content.images.experience} onChange={(v) => update('images.experience', v)} />
              <ImageField label="Foto Final CTA" value={content.images.final} onChange={(v) => update('images.final', v)} />
            </div>
          )}

          {activeSection === 'Fitur' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-serif text-2xl">Fitur / Keunggulan</h2>
                <button
                  onClick={() => addArrayItem('experienceFeatures', { title: 'Fitur Baru', desc: '' })}
                  className="flex items-center gap-1 text-sm px-3 py-1.5 border border-[#2C241B]/30 rounded hover:bg-[#2C241B]/5"
                >
                  <Plus className="w-4 h-4" /> Tambah
                </button>
              </div>
              {content.experienceFeatures.map((item, i) => (
                <div key={i} className="border border-[#2C241B]/10 rounded p-4 mb-4">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs uppercase tracking-widest text-[#2C241B]/40">Fitur {i + 1}</span>
                    <button onClick={() => removeArrayItem('experienceFeatures', i)} className="text-[#2C241B]/40 hover:text-red-600">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <Field label="Judul" value={item.title} onChange={(v) => updateArrayItem('experienceFeatures', i, 'title', v)} />
                  <Field label="Deskripsi" value={item.desc} onChange={(v) => updateArrayItem('experienceFeatures', i, 'desc', v)} textarea />
                </div>
              ))}
            </div>
          )}

          {activeSection === 'Testimoni' && (
            <div>
              <h2 className="font-serif text-2xl mb-6">Testimoni</h2>
              <Field label="Kutipan" value={content.testimonial.quote} onChange={(v) => update('testimonial.quote', v)} textarea />
              <Field label="Nama" value={content.testimonial.author} onChange={(v) => update('testimonial.author', v)} />
            </div>
          )}

          {activeSection === 'Kontak' && (
            <div>
              <h2 className="font-serif text-2xl mb-6">Lokasi & Kontak</h2>
              <Field label="Alamat" value={content.contactInfo.address} onChange={(v) => update('contactInfo.address', v)} textarea />
              <Field label="Jam Operasional" value={content.contactInfo.hours} onChange={(v) => update('contactInfo.hours', v)} textarea />
              <Field label="Telepon / WhatsApp" value={content.contactInfo.phone} onChange={(v) => update('contactInfo.phone', v)} />
              <Field label="Email" value={content.contactInfo.email} onChange={(v) => update('contactInfo.email', v)} />
              <Field label="URL Google Maps" value={content.contactInfo.mapsUrl} onChange={(v) => update('contactInfo.mapsUrl', v)} />
              <ImageField label="Foto Lokasi" value={content.images.location} onChange={(v) => update('images.location', v)} />
            </div>
          )}

          {activeSection === 'Footer' && (
            <div>
              <h2 className="font-serif text-2xl mb-6">Footer</h2>
              <Field label="Tagline" value={content.footer.tagline} onChange={(v) => update('footer.tagline', v)} textarea />
              <Field label="URL Instagram" value={content.footer.instagramUrl} onChange={(v) => update('footer.instagramUrl', v)} />
              <Field label="URL WhatsApp" value={content.footer.whatsappUrl} onChange={(v) => update('footer.whatsappUrl', v)} />
              <Field label="URL Google Maps" value={content.footer.mapsUrl} onChange={(v) => update('footer.mapsUrl', v)} />
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
