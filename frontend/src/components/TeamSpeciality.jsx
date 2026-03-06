import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, Layers, Target } from "lucide-react";

const specialties = [
  {
    name: "Aarav Sharma",
    role: "Leadership · Architecture · Strategy",
    img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
    icon: <ShieldCheck className="text-cyan-400" size={20} />,
    color: "from-cyan-500/20",
  },
  {
    name: "Neha Verma",
    role: "Content · UX Writing · Brand Voice",
    img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    icon: <Target className="text-pink-500" size={20} />,
    color: "from-pink-500/20",
  },
  {
    name: "Ritika Singh",
    role: "Quality · Editing · Strategy",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    icon: <Layers className="text-purple-500" size={20} />,
    color: "from-purple-500/20",
  },
  {
    name: "Karan Mehta",
    role: "Dev · Performance · Scalability",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    icon: <Zap className="text-yellow-500" size={20} />,
    color: "from-yellow-500/20",
  },
];

const TeamSpeciality = () => {
  return (
    <section className="relative w-full py-24 bg-[#030712] overflow-hidden px-4">
      {/* Background Decorative Text */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 text-[15rem] font-black text-white/[0.02] uppercase pointer-events-none select-none">
        Expertise
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-cyan-400 font-black uppercase tracking-[0.3em] text-xs"
          >
            Core Competencies
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black text-white tracking-tighter mt-4"
          >
            Our Team <span className="text-slate-500">Speciality.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="max-w-2xl mx-auto text-slate-400 text-lg mt-6"
          >
            We don't just build; we engineer excellence. Our collective DNA is wired for high-performance digital ecosystems.
          </motion.p>
        </div>

        {/* Staggered Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {specialties.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className={`relative group ${idx % 2 !== 0 ? "lg:mt-12" : ""}`} // Staggered effect
            >
              {/* Card Body */}
              <div className="relative w-full h-[400px] bg-white/[0.03] border border-white/10 rounded-t-[6rem] rounded-b-2xl overflow-hidden backdrop-blur-3xl transition-all group-hover:border-white/20 group-hover:bg-white/[0.05]">
                
                {/* Image Section */}
                <div className="pt-12 flex justify-center">
                  <div className="relative">
                    <div className={`absolute inset-0 bg-gradient-to-b ${item.color} to-transparent blur-2xl rounded-full`} />
                    <div className="w-36 h-36 rounded-full border-2 border-white/20 p-1 relative z-10 overflow-hidden group-hover:border-cyan-400/50 transition-colors">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                    {/* Floating Icon Badge */}
                    <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-[#030712] border border-white/10 rounded-full flex items-center justify-center shadow-xl z-20">
                      {item.icon}
                    </div>
                  </div>
                </div>

                {/* Info Section */}
                <div className="mt-10 px-6 text-center">
                  <h3 className="text-white text-2xl font-bold tracking-tight group-hover:text-cyan-400 transition-colors">
                    {item.name}
                  </h3>
                  <div className="h-px w-12 bg-white/10 mx-auto my-4 group-hover:w-20 group-hover:bg-cyan-500 transition-all" />
                  <p className="text-slate-400 text-sm leading-relaxed font-medium uppercase tracking-wider">
                    {item.role}
                  </p>
                </div>

                {/* Bottom Decorative Gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSpeciality;