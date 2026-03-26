import { motion } from 'motion/react';

const images = [
  {
    src: "https://b20ed0e6fddb90a1f10b.cdn6.editmysite.com/uploads/b/b20ed0e6fddb90a1f10b778e74ea5e42a2370ffeca74d7dc68e5929a54aa6aef/IMG_5064_1774472941.jpg?width=2400&optimize=medium",
    alt: "Our Work 1",
    label: "Detailing"
  },
  {
    src: "https://b20ed0e6fddb90a1f10b.cdn6.editmysite.com/uploads/b/b20ed0e6fddb90a1f10b778e74ea5e42a2370ffeca74d7dc68e5929a54aa6aef/IMG_5259_1774472903.jpg?width=2400&optimize=medium",
    alt: "Our Work 2",
    label: "Exterior"
  },
  {
    src: "https://b20ed0e6fddb90a1f10b.cdn6.editmysite.com/uploads/b/b20ed0e6fddb90a1f10b778e74ea5e42a2370ffeca74d7dc68e5929a54aa6aef/IMG_6207_1774472871.jpg?width=2400&optimize=medium",
    alt: "Our Work 3",
    label: "Interior"
  },
  {
    src: "https://b20ed0e6fddb90a1f10b.cdn6.editmysite.com/uploads/b/b20ed0e6fddb90a1f10b778e74ea5e42a2370ffeca74d7dc68e5929a54aa6aef/IMG_5715_1774472724.jpg?width=2400&optimize=medium",
    alt: "Our Work 4",
    label: "Paint Correction"
  },
  {
    src: "https://b20ed0e6fddb90a1f10b.cdn6.editmysite.com/uploads/b/b20ed0e6fddb90a1f10b778e74ea5e42a2370ffeca74d7dc68e5929a54aa6aef/IMG_5873_1774472763.jpg?width=2400&optimize=medium",
    alt: "Our Work 5",
    label: "Ceramic Coating"
  },
  {
    src: "https://b20ed0e6fddb90a1f10b.cdn6.editmysite.com/uploads/b/b20ed0e6fddb90a1f10b778e74ea5e42a2370ffeca74d7dc68e5929a54aa6aef/IMG_5619_1774472737.jpg?width=2400&optimize=medium",
    alt: "Our Work 6",
    label: "Deep Clean"
  },
  {
    src: "https://b20ed0e6fddb90a1f10b.cdn6.editmysite.com/uploads/b/b20ed0e6fddb90a1f10b778e74ea5e42a2370ffeca74d7dc68e5929a54aa6aef/IMG_5556_1774472747.jpg?width=2400&optimize=medium",
    alt: "Our Work 7",
    label: "Protection"
  },
  {
    src: "https://b20ed0e6fddb90a1f10b.cdn6.editmysite.com/uploads/b/b20ed0e6fddb90a1f10b778e74ea5e42a2370ffeca74d7dc68e5929a54aa6aef/IMG_5473_1774472753.jpg?width=2400&optimize=medium",
    alt: "Our Work 8",
    label: "Perfection"
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-32 bg-[#050505] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#4b09ad] rounded-full blur-[150px] opacity-10 pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#4b09ad]"></div>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#4b09ad]">Portfolio</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-display font-extrabold tracking-tighter text-white">
              <span className="text-gradient">Our</span> Work
            </h2>
          </div>
          <a href="#contact" className="group relative overflow-hidden text-xs uppercase tracking-widest font-semibold text-white hover:text-[#4b09ad] transition-colors border-b border-[#4b09ad]/50 hover:border-[#4b09ad] pb-2 flex items-center gap-2">
            Book Your Transformation
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {images.map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className={`relative group overflow-hidden bg-white/5 ${idx % 2 !== 0 ? 'md:mt-24' : ''} rounded-sm`}
            >
              <div className="aspect-[4/5] w-full">
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover transition-transform duration-1000 ease-[0.16,1,0.3,1] group-hover:scale-110"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]">
                <div className="w-8 h-px bg-[#4b09ad] mb-4 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100"></div>
                <span className="text-white font-display font-bold text-3xl tracking-tight">{img.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
