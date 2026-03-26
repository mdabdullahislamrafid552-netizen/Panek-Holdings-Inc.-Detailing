import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Phone, Menu, X, Instagram, MapPin } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#050505]/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-4 border-b border-white/5' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="https://i.imgur.com/jdPvcRs.png" alt="Panek Holdings Logo" className="h-20 md:h-28 w-auto object-contain" referrerPolicy="no-referrer" />
        </div>

        <nav className="hidden md:flex items-center gap-10">
          <a href="#services" className="text-xs font-semibold uppercase tracking-widest text-gray-400 hover:text-[#4b09ad] transition-colors">Services</a>
          <a href="#gallery" className="text-xs font-semibold uppercase tracking-widest text-gray-400 hover:text-[#4b09ad] transition-colors">Gallery</a>
          <a href="#testimonials" className="text-xs font-semibold uppercase tracking-widest text-gray-400 hover:text-[#4b09ad] transition-colors">Reviews</a>
          <a href="#contact" className="text-xs font-semibold uppercase tracking-widest text-gray-400 hover:text-[#4b09ad] transition-colors">Contact</a>
        </nav>

        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-4 mr-2">
            <a href="https://www.instagram.com/paneksprecision/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#4b09ad] transition-colors"><Instagram size={18} /></a>
            <a href="https://www.google.com/maps/place/Panek%E2%80%99s+Precision+Mobile+Detailing/@0,0,9z/data=!4m15!1m8!3m7!1s0x3bb54bfb359175f:0x5aefd43fa7a80675!2sPanek%E2%80%99s+Precision+Mobile+Detailing!8m2!3d33.5327396!4d-111.9173586!10e5!16s%2Fg%2F11w3lc0ztj!3m5!1s0x3bb54bfb359175f:0x5aefd43fa7a80675!8m2!3d33.5327396!4d-111.9173586!16s%2Fg%2F11w3lc0ztj?entry=ttu&g_ep=EgoyMDI2MDMyMy4xIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#4b09ad] transition-colors"><MapPin size={18} /></a>
          </div>
          <a
            href="tel:+1234567890"
            className="group relative overflow-hidden bg-[#4b09ad] text-white px-6 py-3 font-semibold text-xs uppercase tracking-widest flex items-center gap-2"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Phone size={14} className="group-hover:animate-pulse" />
              <span>Call Now</span>
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]"></div>
          </a>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-[#050505]/95 backdrop-blur-xl shadow-2xl border-t border-white/5 p-8 flex flex-col gap-6 md:hidden"
        >
          <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-sm font-semibold uppercase tracking-widest text-white">Services</a>
          <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="text-sm font-semibold uppercase tracking-widest text-white">Gallery</a>
          <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="text-sm font-semibold uppercase tracking-widest text-white">Reviews</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-sm font-semibold uppercase tracking-widest text-white">Contact</a>
          <div className="h-px bg-white/10 my-2" />
          <a href="tel:+1234567890" className="flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-[#4b09ad]">
            <Phone size={18} />
            Call Now
          </a>
        </motion.div>
      )}
    </header>
  );
}
