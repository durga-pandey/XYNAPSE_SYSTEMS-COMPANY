import React from "react";
import { motion } from "framer-motion";
import { Coffee, Globe, Heart, Rocket, Zap, Monitor } from "lucide-react";

const perks = [
  {
    title: "Remote First",
    desc: "Work from the mountains, your couch, or our tech hub. You choose your zone.",
    icon: <Globe className="text-cyan-400" size={32} />,
    glow: "group-hover:shadow-[0_0_30px_-5px_rgba(34,211,238,0.3)]",
  },
  {
    title: "Health & Wellness",
    desc: "Premium health insurance and mental health support for you and your family.",
    icon: <Heart className="text-pink-500" size={32} />,
    glow: "group-hover:shadow-[0_0_30px_-5px_rgba(236,72,153,0.3)]",
  },
  {
    title: "Learning Stipend",
    desc: "Annual budget for courses, conferences, and books. Stay ahead of the curve.",
    icon: <Zap className="text-yellow-400" size={32} />,
    glow: "group-hover:shadow-[0_0_30px_-5px_rgba(250,204,21,0.3)]",
  },
  {
    title: "Setup Allowance",
    desc: "We pay for your 4K monitor, ergonomic chair, and the latest MacBook Pro.",
    icon: <Monitor className="text-blue-500" size={32} />,
    glow: "group-hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)]",
  },
  {
    title: "Equity & Stocks",
    desc: "Own a piece of the machine. We grow together, we win together.",
    icon: <Rocket className="text-purple-500" size={32} />,
    glow: "group-hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.3)]",
  },
  {
    title: "Unlimited Coffee",
    desc: "And snacks, and team dinners, and annual retreats to exotic locations.",
    icon: <Coffee className="text-orange-500" size={32} />,
    glow: "group-hover:shadow-[0_0_30px_-5px_rgba(249,115,22,0.3)]",
  },
];

const PerkSection = () => {
  return (
    <section className="relative py-24 bg-[#030712] overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] -mr-64 -mt-64" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-white tracking-tighter"
          >
            Not Just a Job. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              A Better Way of Life.
            </span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {perks.map((perk, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className={`group relative p-8 rounded-3xl bg-white/[0.02] border border-white/5 transition-all duration-500 ${perk.glow}`}
            >
              {/* Icon Container */}
              <div className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/[0.05] transition-all">
                {perk.icon}
              </div>

              <h3 className="text-white text-2xl font-bold mb-4">{perk.title}</h3>
              <p className="text-slate-400 leading-relaxed group-hover:text-slate-200 transition-colors">
                {perk.desc}
              </p>

              {/* Decorative Corner Accent */}
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-white/10 group-hover:bg-cyan-500 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PerkSection;