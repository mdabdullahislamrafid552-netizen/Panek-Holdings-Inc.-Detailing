import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: "Taz Heairet",
    location: "a month ago",
    text: "Panek’s Precision Mobile Detailing did an excellent job on my truck here in Mesa. They went above and beyond, paid attention to the details, and the truck looks fantastic. Super personable, easy to get ahold of, and trustworthy from start …",
    rating: 5
  },
  {
    name: "Ethan Prunty",
    location: "a year ago",
    text: "I get my cars detailed monthly by Augustine with affordable auto and let me just say these guys are top notch. They pay attention to detail in every way. Extremely friendly and good looking. Best detailing for a very reasonable price!",
    rating: 5
  },
  {
    name: "Riley Henderson",
    location: "4 months ago",
    text: "Real review** Augustine has done my toyota Tacoma, my wifes nissan and i have referred him to other people as well who have been super pleased. …",
    rating: 5
  },
  {
    name: "Rana Ali",
    location: "6 months ago",
    text: "10/10 would recommend. My car looks better than the day I bought it! Every detail was taken care of, job wasn’t rushed and nothing was overlooked! You won’t regret it, honest work and a great guy to do business with 🙏 …",
    rating: 5
  },
  {
    name: "Jonathan Esqueda",
    location: "10 months ago",
    text: "Did such a killer job in such a short notice. Great price for a very high quality job. Give him a try no doubt you won’t be satisfied",
    rating: 5
  },
  {
    name: "Alan Facio",
    location: "6 months ago",
    text: "They did an amazing job! Made my car look brand new!! Definitely getting my other car detailed with them also!!",
    rating: 5
  },
  {
    name: "Matt M",
    location: "a year ago",
    text: "Augustine with Affordable Auto Mobile Detailing helped me out with some serious scratches on my truck. He color matched and corrected several spots. He has also detailed our vehicles and every time he’s done they look and smell brand new. …",
    rating: 5
  },
  {
    name: "Alyssa Solomon",
    location: "10 months ago",
    text: "I was looking forward to this and I am not disappointed. My truck looked brand new, Augustine did an amazing job and worked very hard doing it. I have a dog and anyone that has tried to clean up pet hair knows how hard it is but he didn’t …",
    rating: 5
  },
  {
    name: "Gerald Crawford",
    location: "10 months ago",
    text: "I’m a repeat customer. Augustine drove out to my house this morning and did a full interior detail on my 2011 Ford Crown Victoria Police Interceptor. He is always on time, superb communicator, friendly, courteous and very …",
    rating: 5
  },
  {
    name: "Leah Lindahl",
    location: "11 months ago",
    text: "Had my older Sonata detailed yesterday. Augustine was punctual and courteous. His attention to detail is fantastic, he truly worked his tail off. I love the way my car looks and will definitely have him come back out!",
    rating: 5
  },
  {
    name: "Logan Pifer",
    location: "7 months ago",
    text: "These guys were great! Came on time and did exactly what they said they would do. Knowledgable and professional. Will 100% be using them again for future hand washes and details! Thanks, Fellas",
    rating: 5
  },
  {
    name: "Sue Watt",
    location: "a year ago",
    text: "The Affordable Auto team is top-notch. They detailed my car and it truly looks brand new. I can’t thank them enough.",
    rating: 5
  },
  {
    name: "philip pettroza",
    location: "6 months ago",
    text: "Beat detailed dive had took there time and got the job done took stains out that have been there for years",
    rating: 5
  },
  {
    name: "Kerry Hays",
    location: "a year ago",
    text: "Great attention to detail! We love that they come to our house and are prompt. Highly recommend!",
    rating: 5
  },
  {
    name: "Ryan Ibarra",
    location: "10 months ago",
    text: "Love these guys",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 bg-[#050505] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-[#4b09ad]/30 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="flex justify-center items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#4b09ad]"></div>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#4b09ad]">Testimonials</span>
            <div className="w-8 h-px bg-[#4b09ad]"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-display font-extrabold tracking-tighter text-white mb-6">
            <span className="text-gradient">Client</span> Experiences
          </h2>
          <p className="text-gray-400 font-light text-lg">Consistently rated 5-stars by our exclusive clientele.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="glass-panel p-8 flex flex-col h-full group hover:-translate-y-1 transition-all duration-500 hover:border-[#4b09ad]/30 hover:shadow-[0_0_30px_rgba(75,9,173,0.1)]"
            >
              <div className="flex gap-1 text-[#4b09ad] mb-6">
                {[...Array(review.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-gray-300 font-light leading-relaxed mb-8 flex-grow text-sm group-hover:text-white transition-colors">"{review.text}"</p>
              <div className="flex items-center gap-4 pt-4 relative">
                <div className="absolute top-0 left-0 w-12 h-px bg-gradient-to-r from-[#4b09ad] to-transparent"></div>
                <div className="w-10 h-10 bg-[#4b09ad]/10 rounded-full flex items-center justify-center text-[#4b09ad] font-bold font-display border border-[#4b09ad]/20 text-sm">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-xs text-white tracking-wide">{review.name}</p>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">{review.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
