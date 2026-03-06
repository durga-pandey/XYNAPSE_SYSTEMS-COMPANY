import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "TechCorp Industries",
    role: "CTO, Global Logistics",
    text: "Xynapse didn't just write code; they re-engineered our entire supply chain logic. The Custom Dashboard they built reduced our operational latency by 45% within the first quarter. Truly a game-changer for enterprise-scale operations.",
    rating: 5,
  },
  {
    name: "InnovateX Solutions",
    role: "Director of Product",
    text: "Finding a partner that understands both Cloud Infrastructure and User Experience is rare. They modernized our legacy platform into a high-performance SaaS engine that now handles 2M+ active users without a glitch.",
    rating: 5,
  },
  {
    name: "Alpha Dynamics",
    role: "Head of Engineering",
    text: "Exceptional technical depth. Their AI-driven workflow automation saved us thousands of manual man-hours. The team is professional, responsive, and consistently delivers code that is clean, scalable, and secure.",
    rating: 5,
  }
];

const Client = () => {
  return (
    <section className="relative w-full py-24 lg:py-32 bg-[#030712] overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-pink-500/5 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left Side: Heavy Typography & Image */}
        <div className="flex flex-col space-y-10">
          <div className="space-y-6">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-pink-500 font-black uppercase tracking-[0.4em] text-xs"
            >
              Trusted by Leaders
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none"
            >
              Building the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400">Future of Tech</span>
            </motion.h2>
            <p className="text-slate-400 text-lg max-w-lg leading-relaxed font-medium">
              We've partnered with ambitious startups and Fortune 500 companies to ship digital products that move the needle.
            </p>
          </div>

          {/* Main Visual with Animated Border */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="relative w-full max-w-lg aspect-[4/3] rounded-[2.5rem] overflow-hidden group shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-transparent z-10 opacity-60" />
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200"
              alt="Collaboration"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Overlay Tag */}
            <div className="absolute bottom-8 left-8 z-20 bg-black/60 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
              <p className="text-white font-black text-2xl tracking-tighter">99.9% Client Satisfaction</p>
              <p className="text-slate-400 text-sm uppercase tracking-widest mt-1">Global Audit 2025</p>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Testimonials Cards */}
        <div className="flex flex-col gap-6">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ 
                type: "spring", 
                duration: 0.8, 
                delay: index * 0.2,
                bounce: 0.4 
              }}
              whileHover={{ x: -10 }}
              className="relative p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 backdrop-blur-sm group"
            >
              {/* Quote Icon */}
              <div className="absolute top-8 right-8 text-pink-500/20 group-hover:text-pink-500/40 transition-colors">
                <Quote size={40} fill="currentColor" />
              </div>

              <div className="space-y-4 relative z-10">
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-pink-500 text-pink-500" />
                  ))}
                </div>

                <p className="text-slate-300 text-lg leading-relaxed italic font-medium">
                  "{item.text}"
                </p>

                <div className="pt-4 flex items-center gap-4 border-t border-white/5">
                  <div className="h-10 w-1 bg-pink-500 rounded-full" />
                  <div>
                    <h4 className="text-white font-black tracking-tight text-xl">{item.name}</h4>
                    <p className="text-pink-500/80 text-xs font-bold uppercase tracking-widest">{item.role}</p>
                  </div>
                </div>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-r from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Client;