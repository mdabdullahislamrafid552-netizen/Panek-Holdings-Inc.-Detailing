import { motion } from 'motion/react';
import { Shield, Star, Clock } from 'lucide-react';

const features = [
  {
    icon: <Shield className="w-6 h-6 text-[#4b09ad]" />,
    title: "Protect Your Investment",
    description: "Safe products that preserve your vehicle."
  },
  {
    icon: <Star className="w-6 h-6 text-[#4b09ad]" />,
    title: "Trusted Professionals",
    description: "Skilled, reliable, and friendly team."
  },
  {
    icon: <Clock className="w-6 h-6 text-[#4b09ad]" />,
    title: "Your Time Matters",
    description: "We bring premium detailing to your location."
  }
];

export default function Trust() {
  return (
    <section className="py-32 bg-[#050505] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-[#4b09ad]/50 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 max-w-7xl mx-auto">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-1/2"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-white/5 group rounded-sm">
              <img 
                src="https://b20ed0e6fddb90a1f10b.cdn6.editmysite.com/uploads/b/b20ed0e6fddb90a1f10b778e74ea5e42a2370ffeca74d7dc68e5929a54aa6aef/ED6D6A40-8207-4054-BAFC-65393D29D717_1774465399.JPG?width=2400&optimize=medium" 
                alt="Why Choose Us" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-[0.16,1,0.3,1]" 
                referrerPolicy="no-referrer" 
              />
              <div className="absolute inset-0 bg-[#0a0a0a]/20 group-hover:bg-transparent transition-colors duration-700"></div>
              <div className="absolute inset-0 border border-white/10 m-4 z-10 pointer-events-none"></div>
            </div>
          </motion.div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#4b09ad]"></div>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#4b09ad]">Why Choose Us?</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold tracking-tighter text-white mb-12">
              <span className="text-gradient">Premium</span> Quality & Convenience
            </h2>
            
            <div className="space-y-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="flex gap-6 group"
                >
                  <div className="w-14 h-14 shrink-0 bg-[#4b09ad]/10 rounded-full flex items-center justify-center border border-[#4b09ad]/20 group-hover:scale-110 transition-transform duration-500">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold tracking-tight mb-2 text-white group-hover:text-gradient-primary transition-all">{feature.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed font-light">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
