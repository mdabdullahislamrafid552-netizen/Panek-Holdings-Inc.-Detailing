import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const serviceCategories = [
  {
    title: "Detail Packages",
    image: "https://items-images-production.s3.us-west-2.amazonaws.com/files/3f3e360599f506e25f878bdd609cedd4aa869ef4/original.jpeg?width=2400&optimize=medium",
    services: [
      {
        name: "Classic Interior + Exterior Detail",
        price: "$129.99+",
        description: "Full interior wipe, vacuum, glass cleaning + exterior hand wash, wheels, tire shine."
      },
      {
        name: "Premium Interior + Exterior Detail",
        price: "$159.99+",
        description: "Steam + shampoo, full interior reset + clay bar + ceramic UV sealant.",
        popular: true
      }
    ]
  },
  {
    title: "Exterior Services",
    image: "https://items-images-production.s3.us-west-2.amazonaws.com/files/8fddf446208479fd7731fc3de47e3cd18723d753/original.jpeg?width=2400&optimize=medium",
    services: [
      {
        name: "Ceramic Coating",
        price: "$249.99+",
        description: "Long-term protection against UV, dirt, scratches. Multiple packages available."
      },
      {
        name: "Paint Correction / Polishing",
        price: "$99.99+",
        description: "Remove swirls & restore deep gloss to your paint."
      },
      {
        name: "Exterior Detail",
        price: "$54.99+",
        description: "Foam wash, bug removal, wheel deep clean."
      }
    ]
  },
  {
    title: "Interior Services",
    image: "https://items-images-production.s3.us-west-2.amazonaws.com/files/8472d0cb3dab29105bf3619b7efdb84728387c31/original.jpeg?width=2400&optimize=medium",
    services: [
      {
        name: "Premium Interior Reset",
        price: "$109.99+",
        description: "Deep steam cleaning + full restoration of all surfaces."
      },
      {
        name: "Classic Interior Detail",
        price: "$79.99+",
        description: "Basic clean + refresh for well-maintained vehicles."
      }
    ]
  },
  {
    title: "Popular Add-Ons",
    image: "https://items-images-production.s3.us-west-2.amazonaws.com/files/b235957445cfdb369c0ca98a605b16b55fe6ec9a/original.png?width=2400&optimize=medium",
    services: [
      {
        name: "Steam Cleaning/Stain Removal",
        price: "$39.99",
        duration: "45 mins",
        description: "Steam/Shampoo carpets and or upholstery"
      },
      {
        name: "Pet Hair Removal",
        price: "$9.99+",
        duration: "15 mins+",
        description: "Specialized tools used to extract embedded pet hair from carpets and seats."
      },
      {
        name: "Ceramic Paint Sealant",
        price: "$29.99",
        duration: "30 mins",
        description: "1 year protection, applied to all exterior surfaces and rims."
      },
      {
        name: "Premium Wax",
        price: "$14.99",
        duration: "15 mins",
        description: "6 month wax, applied to all exterior surfaces and rims."
      },
      {
        name: "Headlight Restoration/Protection",
        price: "$64.99",
        duration: "1 hr 15 mins",
        description: "Restore clarity to yellowed headlights and apply UV protection."
      },
      {
        name: "Engine Bay Detail",
        price: "$34.99",
        duration: "30 mins",
        description: "Safe degreasing and cleaning of engine compartment components."
      },
      {
        name: "Clay Bar + Iron Decontamination",
        price: "$13.99+",
        duration: "15 mins+",
        description: "Remove embedded bonded contaminants for a smooth paint finish."
      },
      {
        name: "Complete Odor Elimination",
        price: "$24.99+",
        duration: "25 mins+",
        description: "Say goodbye to bad smells. We locate the source, deep clean, and neutralize odors resulting in a fresh, like-new interior."
      }
    ]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-[#0a0a0a] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#4b09ad] rounded-full blur-[150px] opacity-10 pointer-events-none z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#4b09ad]"></div>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#4b09ad]">Our Expertise</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-display font-extrabold tracking-tighter text-white">
              <span className="text-gradient">Premium</span> Services
            </h2>
          </div>
          <p className="text-gray-400 max-w-md font-light leading-relaxed">
            Meticulous attention to detail, using only the highest quality products to protect and enhance your vehicle.
          </p>
        </div>

        <div className="space-y-32">
          {serviceCategories.map((category, catIdx) => (
            <div key={catIdx} className={`flex flex-col ${catIdx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center`}>
              
              {/* Image Side */}
              <motion.div 
                initial={{ opacity: 0, x: catIdx % 2 !== 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-full lg:w-1/2"
              >
                <div className="relative aspect-[4/3] lg:aspect-square overflow-hidden bg-white/5 group">
                  <img 
                    src={category.image} 
                    alt={category.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-[0.16,1,0.3,1]" 
                    referrerPolicy="no-referrer" 
                  />
                  <div className="absolute inset-0 bg-[#0a0a0a]/20 group-hover:bg-transparent transition-colors duration-700"></div>
                  <div className="absolute inset-0 border border-white/10 m-4 z-10 pointer-events-none"></div>
                </div>
              </motion.div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2">
                <h3 className="text-4xl font-display font-extrabold mb-12 text-white tracking-tighter">{category.title}</h3>
                <div className="space-y-10">
                  {category.services.map((service, srvIdx) => (
                    <motion.div
                      key={srvIdx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: srvIdx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                      className="group relative border-t border-white/10 pt-8 hover:border-[#4b09ad]/50 transition-colors duration-500"
                    >
                      {service.popular && (
                        <div className="absolute top-0 right-0 -translate-y-1/2 bg-[#4b09ad] text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest shadow-[0_0_15px_rgba(75,9,173,0.5)]">
                          Most Popular
                        </div>
                      )}
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h4 className="text-2xl font-display font-semibold text-white pr-8 group-hover:text-gradient-primary transition-all duration-300">{service.name}</h4>
                          {'duration' in service && (
                            <span className="text-xs font-semibold tracking-widest uppercase text-gray-500 mt-1 block">{service.duration as string}</span>
                          )}
                        </div>
                        <span className="text-xl font-display font-bold text-[#4b09ad] whitespace-nowrap group-hover:scale-105 transition-transform duration-300 origin-right">{service.price}</span>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed mb-8 font-light group-hover:text-gray-300 transition-colors duration-300">{service.description}</p>
                      <a href="#contact" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white hover:text-[#4b09ad] transition-colors">
                        Book this service <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </a>
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
