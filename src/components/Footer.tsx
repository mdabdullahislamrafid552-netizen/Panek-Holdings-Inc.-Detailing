import { Instagram, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#050505] text-white pt-20 pb-24 md:pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-[#4b09ad]/30 to-transparent"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-[#4b09ad] rounded-full blur-[150px] opacity-10 pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <img src="https://i.imgur.com/jdPvcRs.png" alt="Panek Holdings Logo" className="h-32 md:h-48 w-auto mb-6 object-contain" referrerPolicy="no-referrer" />
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#4b09ad] mb-6">Premium Mobile Detailing</p>
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/paneksprecision/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#4b09ad] transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="https://www.google.com/maps/place/Panek%E2%80%99s+Precision+Mobile+Detailing/@0,0,9z/data=!4m15!1m8!3m7!1s0x3bb54bfb359175f:0x5aefd43fa7a80675!2sPanek%E2%80%99s+Precision+Mobile+Detailing!8m2!3d33.5327396!4d-111.9173586!10e5!16s%2Fg%2F11w3lc0ztj!3m5!1s0x3bb54bfb359175f:0x5aefd43fa7a80675!8m2!3d33.5327396!4d-111.9173586!16s%2Fg%2F11w3lc0ztj?entry=ttu&g_ep=EgoyMDI2MDMyMy4xIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#4b09ad] transition-all duration-300">
                <MapPin size={18} />
              </a>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-xs font-semibold uppercase tracking-widest text-gray-400">
            <a href="#services" className="hover:text-white transition-colors relative group">
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#4b09ad] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#gallery" className="hover:text-white transition-colors relative group">
              Gallery
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#4b09ad] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#testimonials" className="hover:text-white transition-colors relative group">
              Reviews
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#4b09ad] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="hover:text-white transition-colors relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#4b09ad] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-semibold tracking-widest uppercase text-gray-500 border-t border-white/5 pt-8">
          <p>&copy; {new Date().getFullYear()} Panek Holdings Inc. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
