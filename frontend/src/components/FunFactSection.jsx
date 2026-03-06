import React from "react";
import { motion } from "framer-motion";
import { Sparkles, CheckCircle2, Quote } from "lucide-react";

const FunFactsSection = ({ funFacts, clientCircles }) => {
  const spring = {
    type: "spring",
    damping: 10,
    stiffness: 100,
  };

  return (
    <section className="relative w-full py-24 bg-[#030712] overflow-hidden px-6">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[400px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* LEFT: FUN FACTS */}
        <div className="relative z-10 flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="text-pink-500" size={24} />
              <span className="text-pink-500 font-black uppercase tracking-widest text-xs">
                Behind the Scenes
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-none mb-8">
              Fun Facts <br />
              <span className="text-slate-500 italic font-light">
                About Us.
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-4">
            {funFacts.map((fact, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ x: 10 }}
                className="group flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.07] hover:border-pink-500/30 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-pink-500/10 flex items-center justify-center group-hover:bg-pink-500 transition-colors">
                  <CheckCircle2
                    size={16}
                    className="text-pink-500 group-hover:text-white"
                  />
                </div>
                <span className="text-slate-300 group-hover:text-white text-lg font-medium transition-colors">
                  {fact}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT: CLIENT CIRCLES */}
        <div className="relative h-[600px] flex items-center justify-center overflow-visible">
          {/* Orbit Rings */}
          <div className="absolute w-[300px] h-[300px] border border-white/5 rounded-full" />
          <div className="absolute w-[500px] h-[500px] border border-white/5 rounded-full animate-[spin_60s_linear_infinite]" />

          <div className="relative grid grid-cols-2 gap-8 z-20">
            {clientCircles.map((client, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                animate={{
                  y: [0, idx % 2 === 0 ? -15 : 15, 0],
                }}
                transition={{
                  opacity: { ...spring, delay: idx * 0.2 },
                  scale: { ...spring, delay: idx * 0.2 },
                  y: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: idx * 0.5,
                  },
                }}
                className="relative group w-44 h-44 sm:w-56 sm:h-56"
              >
                <div className="absolute inset-0 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-md group-hover:border-cyan-400/50 group-hover:bg-cyan-400/5 transition-all duration-500" />

                <div className="relative h-full w-full p-6 flex flex-col items-center justify-center text-center">
                  <Quote
                    className="text-white/10 absolute top-4 left-1/2 -translate-x-1/2"
                    size={40}
                  />
                  <p className="text-[10px] sm:text-xs text-slate-400 font-medium leading-tight group-hover:text-white transition-colors">
                    "{client.text}"
                  </p>

                  <div className="absolute -bottom-4 -right-2 w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-[#030712] overflow-hidden shadow-2xl group-hover:scale-110 transition-transform">
                    <img
                      src={client.img}
                      alt="Client"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Fixed Bottom Fade (No more black line at top) */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t z-10 pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default FunFactsSection;