import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function Parallax() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section ref={ref} className="h-[60vh] md:h-[70vh] relative overflow-hidden flex items-center justify-center">
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://www.frogchem.com/cdn/shop/articles/Car_Detailing.jpg?v=1709723759&width=1000" 
          alt="Luxury car detail" 
          className="w-full h-[130%] object-cover grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] z-10"></div>
        <div className="absolute inset-0 bg-[#4b09ad]/40 mix-blend-multiply z-10"></div>
      </motion.div>
      
      <div className="relative z-20 text-center px-6 max-w-5xl w-full">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tighter text-white leading-[1.1] md:leading-[0.9]"
        >
          DETAILING THAT GOES <br className="hidden sm:block" /><span className="text-transparent" style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.8)' }}>BEYOND CLEAN</span>
        </motion.h2>
      </div>
    </section>
  );
}
