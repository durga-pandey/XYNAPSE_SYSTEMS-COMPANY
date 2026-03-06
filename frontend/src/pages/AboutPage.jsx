import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/autoplay";

import AboutHero from "../components/AboutHero";
import TeamSpeciality from "../components/TeamSpeciality";
import FunFactsSection from "../components/FunFactSection";

const teamMembers = [
  {
    name: "Aarav Sharma",
    role: "Team Lead",
    img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
    color: "#ec4899",
  },
  {
    name: "Neha Verma",
    role: "Copy Editor",
    img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    color: "#6366f1",
  },
  {
    name: "Ritika Singh",
    role: "Chief Editor",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    color: "#6366f1",
  },
  {
    name: "Karan Mehta",
    role: "Team Lead",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    color: "#ec4899",
  },

  // repeat with variations (total 12)
  {
    name: "Ananya Rao",
    role: "UI Designer",
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    color: "#6366f1",
  },
  {
    name: "Rahul Khanna",
    role: "Backend Engineer",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    color: "#ec4899",
  },
  {
    name: "Pooja Nair",
    role: "Project Manager",
    img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c",
    color: "#ec4899",
  },
  {
    name: "Vikram Joshi",
    role: "DevOps Lead",
    img: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef",
    color: "#6366f1",
  },

  {
    name: "Sneha Patel",
    role: "QA Engineer",
    img: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7",
    color: "#6366f1",
  },
  {
    name: "Arjun Malhotra",
    role: "Product Owner",
    img: "https://images.unsplash.com/photo-1545996124-0501ebae84d0",
    color: "#ec4899",
  },
  {
    name: "Meera Iyer",
    role: "Content Strategist",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    color: "#ec4899",
  },
  {
    name: "Rohan Das",
    role: "Frontend Developer",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    color: "#6366f1",
  },
];

const funFacts = [
  "Our team loves coffee and creative brainstorming.",
  "We celebrate birthdays with fun mini-parties.",
  "Every Friday is casual fun day at office.",
  "Team has members from 5 different countries.",
  "We code, laugh, and innovate together daily.",
  "Late-night coding sessions often turn into idea marathons.",
  // "Music plays softly in the background during deep work.",
  // "Team brainstorming sessions spark our most creative solutions.",
];

const clientCircles = [
  {
    img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce",
    text: "Happy client from tech industry loving our work.",
  },
  {
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    text: "Client appreciating our innovative design solutions daily.",
  },
  {
    img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39",
    text: "Partnered with global startups for scalable projects.",
  },
  {
    img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce",
    text: "Long-term client enjoying smooth communication with team.",
  },
];

const AboutPage = () => {
  const bubbleCanvasRef = useRef(null);

  useEffect(() => {
    const canvas = bubbleCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const SAFE_PADDING = 40;
    const TOTAL = 14;
    let bubbles = [];

    const COLORS = [
      "rgba(236,72,153,0.28)", // pink
      "rgba(99,102,241,0.28)", // blue
    ];

    const initBubbles = () => {
      bubbles = Array.from({ length: TOTAL }).map(() => {
        const baseR = 10 + Math.random() * 16;
        return {
          baseR,
          r: baseR,
          targetR: baseR,
          x: SAFE_PADDING + Math.random() * (canvas.width - SAFE_PADDING * 2),
          y: SAFE_PADDING + Math.random() * (canvas.height - SAFE_PADDING * 2),
          vx: -0.5 + Math.random(),
          vy: -0.5 + Math.random(),
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
        };
      });
    };

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initBubbles();
    };

    resize();
    window.addEventListener("resize", resize);

    const pulse = () => {
      bubbles.forEach((b) => {
        b.targetR = Math.random() > 0.7 ? b.baseR * 2.1 : b.baseR;
      });
    };

    const pulseInterval = setInterval(pulse, 3000);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      bubbles.forEach((b) => {
        b.x += b.vx;
        b.y += b.vy;

        if (b.x - b.r < SAFE_PADDING || b.x + b.r > canvas.width - SAFE_PADDING)
          b.vx *= -1;
        if (
          b.y - b.r < SAFE_PADDING ||
          b.y + b.r > canvas.height - SAFE_PADDING
        )
          b.vy *= -1;

        b.r += (b.targetR - b.r) * 0.05;

        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fillStyle = b.color;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      clearInterval(pulseInterval);
    };
  }, []);

  return (
    <>
      <AboutHero/>

     <section className="relative w-full py-24 bg-[#030712] overflow-hidden">
      {/* Background Tech Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* LEFT: CONTENT AREA */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-cyan-400 font-black uppercase tracking-[0.4em] text-xs">Our Backbone</span>
            <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter mt-4 leading-none">
              The Minds Behind <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                The Machine.
              </span>
            </h2>
          </motion.div>

          <div className="space-y-6 max-w-xl text-left">
            <p className="text-slate-400 text-lg leading-relaxed">
              Our team isn't just a group of employees; it's a high-sync collective of <span className="text-white">problem solvers and digital craftsmen</span>. We blend diverse expertise to architect solutions that don't just work—they lead.
            </p>
            <p className="text-slate-500 text-base leading-relaxed">
              From deep-learning specialists to cloud-native architects, every member is handpicked to maintain technical excellence.
            </p>
          </div>

          {/* Stats for Trust */}
          <div className="flex gap-10 pt-4">
            <div>
              <p className="text-4xl font-black text-white">40+</p>
              <p className="text-xs uppercase tracking-widest text-cyan-500 font-bold mt-1">Engineers</p>
            </div>
            <div>
              <p className="text-4xl font-black text-white">12+</p>
              <p className="text-xs uppercase tracking-widest text-purple-500 font-bold mt-1">Countries</p>
            </div>
          </div>
        </div>

        {/* RIGHT: ANIMATED SWIPER CARD */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative group"
        >
          {/* Decorative Outer Frame */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/20 via-purple-500/10 to-transparent rounded-[2.5rem] blur-xl group-hover:opacity-100 transition duration-1000 opacity-50" />
          
          <div className="relative bg-[#080c17] border border-white/10 rounded-[2.5rem] p-6 md:p-10 shadow-2xl overflow-hidden">
            
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              loop={true}
              spaceBetween={30}
              className="team-swiper pb-12"
            >
              {[0, 1].map((slideIdx) => (
                <SwiperSlide key={slideIdx}>
                  <div className="grid grid-cols-2 gap-4">
                    {teamMembers.slice(slideIdx * 4, slideIdx * 4 + 4).map((member, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ y: -5 }}
                        className="relative p-4 md:p-6 rounded-2xl bg-white/[0.03] border border-white/5 flex flex-col items-center text-center group/card transition-all"
                      >
                        {/* Member Image with Glow */}
                        <div className="relative mb-4">
                          <div 
                            className="absolute inset-0 rounded-full blur-md opacity-40 transition-opacity group-hover/card:opacity-100" 
                            style={{ backgroundColor: member.color }}
                          />
                          <img
                            src={member.img}
                            alt={member.name}
                            className="relative w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-white/10"
                          />
                        </div>
                        
                        <h3 className="text-white font-bold text-xs md:text-base mb-1 truncate w-full">
                          {member.name}
                        </h3>
                        <p className="text-[10px] md:text-xs uppercase tracking-tighter font-bold" style={{ color: member.color }}>
                          {member.role}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>

      </div>

      {/* Inline Style for Pagination (Safest for all React setups) */}
      <style>{`
        .team-swiper .swiper-pagination-bullet { background: #475569 !important; opacity: 1 !important; }
        .team-swiper .swiper-pagination-bullet-active { background: #22d3ee !important; width: 20px !important; border-radius: 4px !important; }
        .team-swiper { padding-bottom: 50px !important; }
      `}</style>
    </section>

     <TeamSpeciality/>

     <FunFactsSection funFacts={funFacts} clientCircles={clientCircles}/>
    </>
  );
};

export default AboutPage;
