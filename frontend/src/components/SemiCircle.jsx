import { useEffect, useRef } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { motion } from "framer-motion";
import { Zap, Shield, BarChart, Settings } from "lucide-react";

const SemiCircle = () => {
  const semiCanvasRef = useRef(null);

  useEffect(() => {
    const canvas = semiCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      const parent = canvas.parentElement;
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    let progress = 0;
    let mode = "cyan";

    const animate = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      const cx = w / 2;
      const r = Math.min(w, h) * 0.4;
      const thickness = 60; // Thinner for a more modern look
      const cy = h / 2 + 50;

      // Background Arc (Track)
      ctx.beginPath();
      ctx.arc(cx, cy, r, Math.PI, 0);
      ctx.lineWidth = thickness;
      ctx.lineCap = "round";
      ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
      ctx.stroke();

      // Active Gradient Arc
      const activeGradient = ctx.createLinearGradient(cx - r, cy, cx + r, cy);
      if (mode === "cyan") {
        activeGradient.addColorStop(0, "#22d3ee");
        activeGradient.addColorStop(1, "#3b82f6");
      } else {
        activeGradient.addColorStop(0, "#a855f7");
        activeGradient.addColorStop(1, "#ec4899");
      }

      ctx.beginPath();
      ctx.arc(cx, cy, r, Math.PI, Math.PI + Math.PI * progress);
      ctx.lineWidth = thickness;
      ctx.lineCap = "round";
      ctx.strokeStyle = activeGradient;
      // Add Neon Glow to the arc
      ctx.shadowBlur = 20;
      ctx.shadowColor = mode === "cyan" ? "rgba(34, 211, 238, 0.5)" : "rgba(168, 85, 247, 0.5)";
      ctx.stroke();
      ctx.shadowBlur = 0; // Reset shadow for other elements

      progress += 0.005;
      if (progress >= 1) {
        progress = 0;
        mode = mode === "cyan" ? "purple" : "cyan";
      }

      requestAnimationFrame(animate);
    };

    animate();
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <section className="relative w-full bg-[#030712] py-24 overflow-hidden border-t border-white/5">
      
      {/* Background Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[10%] w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT: Live Monitoring Visualizer */}
        <div className="relative order-2 lg:order-1 flex flex-col items-center">
          <div className="relative w-full h-[300px] md:h-[450px] flex items-center justify-center bg-white/5 rounded-[3rem] border border-white/10 backdrop-blur-3xl overflow-hidden shadow-2xl">
             {/* Dynamic Canvas */}
             <canvas ref={semiCanvasRef} className="w-full h-full" />
             
             {/* Center HUD */}
             <div className="absolute bottom-12 text-center">
                <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.4em]">System Efficiency</p>
                <h4 className="text-4xl font-black text-white mt-1">98.4<span className="text-cyan-400 text-xl">%</span></h4>
             </div>
          </div>

          {/* Mini Stats Grid - Bhara bhara dikhne ke liye */}
          <div className="grid grid-cols-2 gap-4 w-full mt-6">
             <div className="p-6 rounded-3xl bg-white/5 border border-white/10 flex items-center gap-4">
                <Zap className="text-yellow-400" size={24}/>
                <div>
                   <p className="text-white font-bold text-lg">2.4ms</p>
                   <p className="text-slate-500 text-[10px] uppercase font-bold">Latency</p>
                </div>
             </div>
             <div className="p-6 rounded-3xl bg-white/5 border border-white/10 flex items-center gap-4">
                <Shield className="text-green-400" size={24}/>
                <div>
                   <p className="text-white font-bold text-lg">Secure</p>
                   <p className="text-slate-500 text-[10px] uppercase font-bold">Encrypted</p>
                </div>
             </div>
          </div>
        </div>

        {/* RIGHT: Content & Details */}
        <div className="flex flex-col gap-10 order-1 lg:order-2">
          <div className="space-y-6">
            <p className="text-purple-500 font-black uppercase tracking-[0.4em] text-xs">Performance Layer</p>
            <h3 className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tighter">
              Powering Modern <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 text-nowrap">
                Software Products
              </span>
            </h3>
            <p className="text-lg text-slate-400 font-medium leading-relaxed max-w-xl">
              From high-frequency trade engines to global-scale HRMS platforms, we engineer the core infrastructure that drives the digital economy.
            </p>
          </div>

          {/* Feature List with Glassmorphism */}
          <div className="space-y-4">
            {[
              { text: "Scalable high-performance architectures.", icon: <BarChart size={18}/> },
              { text: "Smart automation reducing manual overhead.", icon: <Settings size={18}/> },
              { text: "Cloud-ready secure enterprise frameworks.", icon: <Shield size={18}/> },
              { text: "Predictive analytics for growth insights.", icon: <Zap size={18}/> }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all group cursor-default"
              >
                <div className="p-2 rounded-lg bg-white/5 text-cyan-400 group-hover:bg-cyan-400 group-hover:text-black transition-all">
                  {item.icon}
                </div>
                <p className="text-slate-300 font-bold">{item.text}</p>
                <HiArrowNarrowRight className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400" />
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SemiCircle;