import React from "react";
import { motion } from "framer-motion";

const CultureVibe = () => {
  const gallery = [
    { src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c", size: "col-span-2 row-span-2", label: "Collaborative Sprints" },
    { src: "https://images.unsplash.com/photo-1551434678-e076c223a692", size: "col-span-1 row-span-1", label: "Deep Work" },
    { src: "https://images.unsplash.com/photo-1556761175-b413da4baf72", size: "col-span-1 row-span-2", label: "Brainstorming" },
    { src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f", size: "col-span-1 row-span-1", label: "Team Bonding" },
    { src: "https://images.unsplash.com/photo-1600880212340-02d956ea3b85", size: "col-span-2 row-span-1", label: "Friday Mixers" },
  ];

  return (
    <section className="py-24 bg-[#030712] px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-purple-500 font-black uppercase tracking-[0.3em] text-xs"
            >
              The Xynapse Life
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-black text-white tracking-tighter mt-4"
            >
              Work hard. <span className="text-slate-600">Play harder.</span>
            </motion.h2>
          </div>
          <p className="text-slate-400 max-w-sm text-lg italic border-l-2 border-purple-500 pl-4">
            "A culture where your quirks are celebrated and your ideas are fuel."
          </p>
        </div>

        {/* Bento Grid Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-3 gap-4 h-[800px] md:h-[600px]">
          {gallery.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.02, zIndex: 20 }}
              className={`${item.size} relative group overflow-hidden rounded-3xl bg-slate-900 border border-white/5`}
            >
              {/* Image */}
              <img 
                src={item.src} 
                alt={item.label}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
              />
              
              {/* Glass Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white font-black text-xl tracking-tight uppercase">{item.label}</p>
                  <div className="w-10 h-1 bg-white mt-2 rounded-full" />
                </div>
              </div>

              {/* Decorative Corner Glow */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-white/10 blur-2xl group-hover:bg-purple-500/20 transition-colors" />
            </motion.div>
          ))}
        </div>

        {/* Sub-footer for the section */}
        <div className="mt-12 flex flex-wrap gap-12 justify-center py-8 border-y border-white/5">
           {["No Micromanagement", "Chaos-friendly", "Growth-obsessed", "Pizza Fridays"].map((trait, i) => (
             <div key={i} className="flex items-center gap-2 text-slate-500 font-bold uppercase tracking-widest text-[10px]">
               <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" /> {trait}
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default CultureVibe;