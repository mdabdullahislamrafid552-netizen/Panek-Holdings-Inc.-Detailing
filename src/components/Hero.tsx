import { motion } from 'motion/react';
import { ChevronRight, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      {/* Full Background Image with Slow Zoom */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://wynndetailing.com.au/wp-content/uploads/2024/07/Car-Detailing-A-Comprehensive-Guide-to-Pristine-Perfection.jpg"
          alt="Luxury Car Detailing"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/80 via-[#050505]/40 to-transparent"></div>
        <div className="absolute inset-0 bg-[#4b09ad]/10 mix-blend-overlay"></div>
      </motion.div>

      {/* Glowing Orb */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#4b09ad] rounded-full blur-[150px] opacity-20 pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-12 h-px bg-[#4b09ad]"></div>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-white">Premium Mobile Detailing</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl md:text-8xl lg:text-[7.5rem] font-display font-extrabold leading-[0.9] md:leading-[0.85] tracking-tighter text-white mb-6 md:mb-8"
          >
            <span className="text-gradient">PRECISION</span><br />
            <span className="text-transparent" style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.8)' }}>DETAILS.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg md:text-xl text-gray-400 mb-10 md:mb-12 max-w-lg font-light leading-relaxed"
          >
            Exceptional mobile detailing services across Phoenix, Tempe, Gilbert, Mesa & Scottsdale. The luxury studio experience, delivered to your driveway.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <a
              href="#contact"
              className="group relative overflow-hidden w-full sm:w-auto bg-[#4b09ad] text-white px-10 py-5 font-semibold text-xs uppercase tracking-widest flex items-center justify-center gap-3"
            >
              <span className="relative z-10 flex items-center gap-3">Get a Quote <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" /></span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]"></div>
            </a>
            <a
              href="#services"
              className="group relative overflow-hidden w-full sm:w-auto text-white px-10 py-5 font-semibold text-xs uppercase tracking-widest flex items-center justify-center border border-white/20 hover:border-white/50 backdrop-blur-sm transition-colors"
            >
              <span className="relative z-10">View Services</span>
              <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]"></div>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16 flex items-center justify-center sm:justify-start gap-3 text-xs font-medium text-gray-400 uppercase tracking-widest"
          >
            <MapPin size={14} className="text-[#4b09ad]" />
            <span>Serving the Greater Phoenix Metro Area</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
