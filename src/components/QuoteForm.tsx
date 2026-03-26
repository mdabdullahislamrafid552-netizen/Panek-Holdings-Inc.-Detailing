import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function QuoteForm() {
  return (
    <section id="contact" className="py-32 bg-[#050505] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-[#4b09ad] rounded-full blur-[150px] opacity-10 pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-5 gap-16 lg:gap-24">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#4b09ad]"></div>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#4b09ad]">Contact Us</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-display font-extrabold tracking-tighter text-white mb-6">
              <span className="text-gradient">Get a Custom</span> Quote
            </h2>
            <p className="text-gray-400 font-light leading-relaxed mb-12 text-lg">
              Fill out the form and our team will get back to you shortly to schedule your premium detailing experience.
            </p>
            <div className="glass-panel p-8 border-l-4 border-l-[#4b09ad]">
              <p className="text-xs font-bold uppercase tracking-widest text-[#4b09ad] mb-3">Notice</p>
              <p className="text-sm text-gray-300 font-light leading-relaxed">Due to high demand, we currently have limited slots available this week. Book now to secure your spot.</p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <form className="glass-panel p-10 md:p-12 space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full premium-input"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full premium-input"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full premium-input"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Service Type</label>
                  <select className="w-full premium-input appearance-none bg-transparent text-white">
                    <option value="" className="bg-[#111] text-white">Select a service...</option>
                    <option value="classic" className="bg-[#111] text-white">Classic Detail Package</option>
                    <option value="premium" className="bg-[#111] text-white">Premium Detail Package</option>
                    <option value="ceramic" className="bg-[#111] text-white">Ceramic Coating</option>
                    <option value="interior" className="bg-[#111] text-white">Interior Only</option>
                    <option value="exterior" className="bg-[#111] text-white">Exterior Only</option>
                    <option value="other" className="bg-[#111] text-white">Other / Not Sure</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Message / Vehicle Info (Year, Make, Model)</label>
                <textarea 
                  rows={3}
                  className="w-full premium-input resize-none"
                  placeholder="Tell us about your vehicle and what you're looking for..."
                ></textarea>
              </div>

              <div className="pt-6">
                <button 
                  type="submit"
                  className="group relative overflow-hidden bg-[#4b09ad] text-white px-10 py-5 font-semibold text-xs uppercase tracking-widest w-full flex items-center justify-center gap-3"
                >
                  <span className="relative z-10 flex items-center gap-3">Request Quote <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" /></span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]"></div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
