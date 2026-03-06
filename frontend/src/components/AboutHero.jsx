import { motion } from "framer-motion";
import { ArrowRight, Globe, Zap, Shield } from "lucide-react";

const AboutHero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-[#030712] overflow-hidden py-20 px-4 sm:px-6 lg:px-12">
      
      {/* Background Subtle Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* LEFT: VISUAL COMPOSITION */}
        <div className="relative order-2 lg:order-1 flex justify-center lg:justify-start">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Image with Border Glow */}
            <div className="relative z-10 w-[280px] h-[380px] sm:w-[350px] sm:h-[450px] lg:w-[420px] lg:h-[550px] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
              <motion.img
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 10, repeat: Infinity }}
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80"
                alt="Our Vision"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* The Animated Orbiting Circle (Pure Framer Motion) */}
            <motion.div 
              animate={{ 
                rotate: 360,
                y: [0, -20, 0]
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute -right-12 -bottom-12 sm:-right-16 sm:-bottom-16 z-20 w-48 h-48 sm:w-64 sm:h-64"
            >
              {/* Outer Glow Ring */}
              <div className="absolute inset-0 rounded-full border border-dashed border-cyan-500/30 animate-pulse" />
              
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Floating Dots */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full shadow-[0_0_15px_#22d3ee]" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-pink-500 rounded-full shadow-[0_0_15px_#ec4899]" />
                
                {/* Inner Image Circle */}
                <motion.div 
                  animate={{ rotate: -360 }} // Counter rotate to keep image straight
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-32 h-32 sm:w-44 sm:h-44 rounded-full border-4 border-[#030712] overflow-hidden shadow-2xl"
                >
                  <img
                    src="https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&q=80"
                    alt="Team Culture"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* RIGHT: CONTENT SECTION */}
        <div className="order-1 lg:order-2 space-y-8">
          <div className="space-y-4">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-cyan-400 font-black uppercase tracking-[0.4em] text-xs inline-block"
            >
              Who We Are
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-[0.9]"
            >
              Engineering <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-400 to-slate-600">
                Digital Legacies.
              </span>
            </motion.h1>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-6 max-w-xl"
          >
            <p className="text-slate-400 text-lg sm:text-xl leading-relaxed font-medium">
              We are a software-driven powerhouse focused on building <span className="text-white">scalable, secure, and user-centric</span> digital products that empower businesses to disrupt markets.
            </p>
            
            <p className="text-slate-500 text-base sm:text-lg leading-relaxed">
              By merging cutting-edge technology with rigorous engineering standards, we don't just deliver software—we build long-term value for global enterprises.
            </p>
          </motion.div>

          {/* Feature Pills */}
          <div className="flex flex-wrap gap-4 pt-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white text-xs font-bold uppercase tracking-widest">
              <Zap size={14} className="text-cyan-400" /> High Velocity
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white text-xs font-bold uppercase tracking-widest">
              <Shield size={14} className="text-pink-500" /> Enterprise Grade
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="pt-6"
          >
            <button className="group flex items-center gap-4 bg-white text-black px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-cyan-400 transition-all shadow-[0_20px_40px_-15px_rgba(255,255,255,0.1)]">
              Discover Our Story 
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default AboutHero;