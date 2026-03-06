import { useEffect, useRef } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { motion } from "framer-motion";

const BubbleSection = () => {
  const bubbleCanvasRef = useRef(null);

  useEffect(() => {
    const canvas = bubbleCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const SAFE_PADDING = 40;
    const TOTAL = 15; // Slightly increased for better density
    let bubbles = [];

    const initBubbles = () => {
      bubbles = Array.from({ length: TOTAL }).map(() => {
        const baseR = 8 + Math.random() * 12;
        return {
          baseR,
          r: baseR,
          targetR: baseR,
          x: SAFE_PADDING + Math.random() * (canvas.width - SAFE_PADDING * 2),
          y: SAFE_PADDING + Math.random() * (canvas.height - SAFE_PADDING * 2),
          vx: -0.4 + Math.random() * 0.8,
          vy: -0.4 + Math.random() * 0.8,
          color: Math.random() > 0.5 ? "rgba(34, 211, 238, 0.3)" : "rgba(168, 85, 247, 0.3)" // Cyan or Purple
        };
      });
    };

    const resize = () => {
      const parent = canvas.parentElement;
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
      initBubbles();
    };

    resize();
    window.addEventListener("resize", resize);

    const pickPulseGroup = () => {
      const ids = [...Array(TOTAL).keys()].sort(() => Math.random() - 0.5).slice(0, 4);
      bubbles.forEach((b, i) => {
        b.targetR = ids.includes(i) ? b.baseR * 2.5 : b.baseR;
      });
    };

    const interval = setInterval(pickPulseGroup, 3000);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      bubbles.forEach((b) => {
        b.x += b.vx;
        b.y += b.vy;

        // Collision logic
        if (b.x - b.r < 0 || b.x + b.r > canvas.width) b.vx *= -1;
        if (b.y - b.r < 0 || b.y + b.r > canvas.height) b.vy *= -1;

        b.r += (b.targetR - b.r) * 0.05;

        // Draw Glow
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
        gradient.addColorStop(0, b.color);
        gradient.addColorStop(1, "transparent");
        
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Center Core
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r * 0.3, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();
    return () => {
      window.removeEventListener("resize", resize);
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="relative w-full bg-[#030712] py-24 overflow-hidden">
      
      {/* 1. MATCHED BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[20%] left-[-5%] w-[400px] h-[400px] bg-cyan-600/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[120px]" />
      </div>

      {/* 2. MATCHED WRAPPER & ALIGNMENT */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div className="flex flex-col gap-8 order-2 lg:order-1">
          <div className="space-y-4">
            <p className="text-cyan-400 font-black uppercase tracking-[0.4em] text-xs">
              Why Choose Us
            </p>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter">
              Future-Ready <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Software Solutions</span>
            </h2>
          </div>

          <div className="space-y-5">
            {[
              "Cutting-edge real-time monitoring tools.",
              "Intelligent workflow automation.",
              "Scalable and secure cloud architecture.",
              "Intuitive dashboards & analytics.",
              "Dedicated 24/7 technical support."
            ].map((text, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
              >
                <div className="mt-1 p-1 rounded-md bg-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-all">
                  <HiArrowNarrowRight size={20} />
                </div>
                <p className="text-slate-300 text-lg font-medium leading-tight">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Content: Neon Bubble Canvas */}
        <div className="relative order-1 lg:order-2 h-[400px] md:h-[500px] lg:h-[600px] w-full rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-3xl overflow-hidden shadow-2xl group">
          {/* Internal Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 opacity-50" />
          
          <canvas ref={bubbleCanvasRef} className="relative z-10 w-full h-full" />
          
          {/* Floating Label */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-20 pointer-events-none">
             <div className="px-8 py-4 bg-black/60 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl">
                <span className="text-white font-black text-2xl md:text-3xl tracking-tighter">XYNAPSE <span className="text-cyan-400">ENGINE</span></span>
                <p className="text-[10px] text-slate-500 uppercase tracking-[0.3em] font-bold mt-1">Optimization Active</p>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BubbleSection;