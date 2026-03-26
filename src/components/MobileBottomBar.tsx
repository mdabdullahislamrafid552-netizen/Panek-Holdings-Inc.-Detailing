import { Phone, Calendar } from 'lucide-react';

export default function MobileBottomBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#050505]/90 backdrop-blur-2xl border-t border-white/10 p-4 z-50 flex gap-3 pb-safe shadow-[0_-20px_40px_rgba(0,0,0,0.8)]">
      <a 
        href="tel:+1234567890" 
        className="flex-1 bg-white/5 border border-white/10 rounded-sm text-white py-4 flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] transition-colors active:bg-white/10"
      >
        <Phone size={16} />
        Call
      </a>
      <a 
        href="#contact" 
        className="flex-1 bg-[#4b09ad] rounded-sm text-white py-4 flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] transition-colors relative overflow-hidden group shadow-[0_0_20px_rgba(75,9,173,0.4)]"
      >
        <span className="relative z-10 flex items-center gap-2">
          <Calendar size={16} />
          Book
        </span>
        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]"></div>
      </a>
    </div>
  );
}
