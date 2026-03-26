import { Clock, MapPin } from 'lucide-react';

export default function Hours() {
  return (
    <section className="py-24 bg-[#050505] text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#4b09ad] rounded-full blur-[150px] opacity-10 pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          <div className="glass-panel p-10 flex flex-col items-start group hover:border-[#4b09ad]/30 transition-colors duration-500">
            <div className="w-14 h-14 bg-[#4b09ad]/10 flex items-center justify-center mb-8 border border-[#4b09ad]/20 rounded-sm group-hover:bg-[#4b09ad]/20 transition-colors duration-500">
              <Clock size={24} className="text-[#4b09ad]" />
            </div>
            <h3 className="text-2xl font-display font-bold mb-6 tracking-tight text-white">Operating Hours</h3>
            <ul className="space-y-4 text-gray-400 w-full font-light">
              <li className="flex justify-between border-b border-white/5 pb-4 group-hover:border-white/10 transition-colors duration-500">
                <span>Mon – Sat</span>
                <span className="text-white font-medium tracking-wide">6:00 AM – 6:00 PM</span>
              </li>
              <li className="flex justify-between pt-2">
                <span>Sun</span>
                <span className="text-white font-medium tracking-wide">7:30 AM – 5:00 PM</span>
              </li>
            </ul>
          </div>
          
          <div className="glass-panel p-10 flex flex-col items-start group hover:border-[#4b09ad]/30 transition-colors duration-500">
            <div className="w-14 h-14 bg-[#4b09ad]/10 flex items-center justify-center mb-8 border border-[#4b09ad]/20 rounded-sm group-hover:bg-[#4b09ad]/20 transition-colors duration-500">
              <MapPin size={24} className="text-[#4b09ad]" />
            </div>
            <h3 className="text-2xl font-display font-bold mb-6 tracking-tight text-white">Service Area</h3>
            <p className="text-gray-400 leading-relaxed font-light mb-6">
              We provide premium mobile detailing services directly to your home or office in:
            </p>
            <p className="text-white font-medium text-lg leading-relaxed">
              Phoenix, Tempe, Gilbert, Mesa, Scottsdale & surrounding areas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
