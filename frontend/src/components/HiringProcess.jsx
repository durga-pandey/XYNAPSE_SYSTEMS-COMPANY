import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Application Review",
    desc: "Our talent scouts look for more than just skills; we look for the 'X' factor and a passion for building.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    step: "02",
    title: "Initial Sync",
    desc: "A 30-minute casual call to talk about your journey, our culture, and see if we vibe together.",
    color: "from-blue-500 to-purple-500",
  },
  {
    step: "03",
    title: "Technical Challenge",
    desc: "No boring whiteboard coding. We give you a real-world problem to solve that actually matters.",
    color: "from-purple-500 to-pink-500",
  },
  {
    step: "04",
    title: "Cultural Fit & Offer",
    desc: "Meet the founders, discuss the vision, and if everything clicks, welcome to the machine.",
    color: "from-pink-500 to-orange-500",
  },
];

const HiringProcess = () => {
  return (
    <section className="relative py-24 bg-[#030712] overflow-hidden px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-cyan-400 font-black uppercase tracking-[0.3em] text-xs"
          >
            Our Methodology
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter mt-4">
            The Road to <span className="text-slate-600">Xynapse.</span>
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          
          {/* Central Animated Line (Desktop Only) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block" />

          <div className="space-y-20 md:space-y-32">
            {steps.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-center gap-10 ${
                  idx % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Step Number with Gradient Glow */}
                <div className="flex-1 flex justify-center items-center">
                  <div className="relative group">
                    <div className={`absolute inset-0 bg-gradient-to-tr ${item.color} blur-2xl opacity-20 group-hover:opacity-40 transition-opacity`} />
                    <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-[#080c17] border border-white/10 flex items-center justify-center">
                      <span className={`text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-tr ${item.color}`}>
                        {item.step}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Vertical Connector (Mobile) */}
                <div className="md:hidden w-px h-12 bg-white/20" />

                {/* Content Area */}
                <div className={`flex-1 text-center ${idx % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-4 uppercase tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-lg leading-relaxed max-w-md mx-auto md:mx-0">
                    {item.desc}
                  </p>
                </div>

                {/* Center Circle Decorator */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center justify-center">
                  <div className={`w-4 h-4 rounded-full bg-gradient-to-tr ${item.color} shadow-[0_0_15px_rgba(255,255,255,0.2)]`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HiringProcess;