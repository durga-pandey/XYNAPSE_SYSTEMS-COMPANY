import { motion } from "framer-motion";
import { ShieldCheck, Headphones, Globe, Lock, Cpu } from "lucide-react";

const SecuredData = () => {
  return (
    <div className="bg-[#030712] overflow-hidden">
      
      {/* SECTION 1: 100% SECURED DATA */}
      <section className="relative w-full py-24 lg:py-32 border-b border-white/5">
        <div className="absolute top-[20%] right-[-5%] w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[140px] pointer-events-none" />
        
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Text Content */}
          <div className="text-left space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-black uppercase tracking-widest"
            >
              <Lock size={14} /> Enterprise Protection
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter"
            >
              100% <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Secured Data</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-xl"
            >
              Protecting your intellectual property is our core mission. We deploy military-grade **AES-256 encryption**, multi-factor authentication, and isolated cloud nodes to ensure your data remains impenetrable. No leaks, no backdoors—just pure security.
            </motion.p>

            <div className="grid grid-cols-2 gap-6 pb-4">
               <div className="flex items-center gap-3 text-slate-300 font-bold">
                  <ShieldCheck className="text-cyan-400" /> SOC2 Compliant
               </div>
               <div className="flex items-center gap-3 text-slate-300 font-bold">
                  <Cpu className="text-purple-400" /> Edge Shielding
               </div>
            </div>

            <button className="group relative px-8 py-4 rounded-full bg-white text-black font-black overflow-hidden transition-all hover:pr-12">
              <span className="relative z-10">Audit Our Security</span>
              <span className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all">→</span>
            </button>
          </div>

          {/* Right: Animated Video Circle */}
          <div className="flex justify-center items-center">
            <div className="relative circle-wrap group">
              {/* Outer Pulse Rings */}
              <div className="absolute inset-[-20px] rounded-full border border-cyan-500/10 animate-pulse" />
              <div className="absolute inset-[-40px] rounded-full border border-white/5" />
              
              <div className="ring shadow-[0_0_80px_-20px_rgba(34,211,238,0.3)]">
                <div className="arm arm-blue">
                  <span className="dot blue"></span>
                </div>
                <div className="arm arm-pink">
                  <span className="dot pink"></span>
                </div>
                <div className="inner-circle border-4 border-white/10">
                  <video
                    autoPlay loop muted playsInline
                    className="w-full h-full rounded-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                    src="https://res.cloudinary.com/dcll0n88n/video/upload/v1771703893/video-2_qpg7f2.mp4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: 24/7 CUSTOMER SUPPORT */}
      <section className="relative w-full py-24 lg:py-32 bg-white/[0.02]">
        <div className="absolute bottom-[20%] left-[-5%] w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Animated Video Circle (Order swapped for Desktop) */}
          <div className="flex justify-center items-center order-2 lg:order-1">
            <div className="relative circle-wrap group">
              <div className="absolute inset-[-20px] rounded-full border border-purple-500/10 animate-pulse" />
              
              <div className="ring shadow-[0_0_80px_-20px_rgba(168,85,247,0.3)]">
                <div className="arm arm-blue">
                  <span className="dot blue"></span>
                </div>
                <div className="arm arm-pink">
                  <span className="dot pink"></span>
                </div>
                <div className="inner-circle border-4 border-white/10">
                  <video
                    autoPlay loop muted playsInline
                    className="w-full h-full rounded-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                    src="https://res.cloudinary.com/dcll0n88n/video/upload/v1771704157/video-1_rroyft.mp4"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="text-left space-y-8 order-1 lg:order-2">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-black uppercase tracking-widest"
            >
              <Globe size={14} /> Global Availability
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter"
            >
              24/7 <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Live Support</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-xl"
            >
              Technology never sleeps, and neither do we. Our global response team is stationed across **3 time zones** to provide instant troubleshooting. Whether it's a critical system patch or a simple query, our engineers are just one click away.
            </motion.p>

            <div className="space-y-4">
               <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <Headphones className="text-cyan-400" size={24} />
                  <div>
                    <p className="text-white font-bold">15 Minute Response Time</p>
                    <p className="text-slate-500 text-sm">Average resolution speed for critical tickets.</p>
                  </div>
               </div>
            </div>

            <button className="group relative px-8 py-4 rounded-full border border-white/20 text-white font-black overflow-hidden hover:bg-white hover:text-black transition-all">
              Connect with Experts
            </button>
          </div>
        </div>
      </section>

      {/* RE-USABLE STYLES */}
      <style jsx>{`
        .circle-wrap {
          width: 280px;
          height: 280px;
        }
        @media (min-width: 768px) { .circle-wrap { width: 380px; height: 380px; } }
        @media (min-width: 1024px) { .circle-wrap { width: 460px; height: 460px; } }

        .ring {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          padding: 10px;
          background: rgba(255,255,255,0.03);
        }

        .arm {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          mask: radial-gradient(transparent 64%, black 65%);
          -webkit-mask: radial-gradient(transparent 64%, black 65%);
        }

        .arm-blue {
          background: conic-gradient(#22d3ee 0deg 120deg, transparent 120deg 360deg);
          animation: spinBlue 6s linear infinite;
        }

        .arm-pink {
          background: conic-gradient(#a855f7 0deg 120deg, transparent 120deg 360deg);
          animation: spinPink 6s linear infinite;
        }

        .dot {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          transform: translate(-50%, -50%) translateX(min(140px, 45vw));
        }
        @media (min-width: 768px) { .dot { transform: translate(-50%, -50%) translateX(190px); } }
        @media (min-width: 1024px) { .dot { transform: translate(-50%, -50%) translateX(230px); } }

        .blue { background: #22d3ee; box-shadow: 0 0 25px #22d3ee; }
        .pink { background: #a855f7; box-shadow: 0 0 25px #a855f7; }

        @keyframes spinBlue { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes spinPink { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }

        .inner-circle {
          position: absolute;
          inset: 20px;
          border-radius: 50%;
          z-index: 5;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default SecuredData;