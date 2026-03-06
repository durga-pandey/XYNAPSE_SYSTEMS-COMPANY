import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";

const projectData = [
{
    title: "Enterprise Hub",
    desc: "High-velocity data engine for analytics and real-time monitoring.",
    image: "https://images.unsplash.com/photo-1551288049-bbda4865cda1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["React", "AWS"],
    color: "from-cyan-500/20"
  },
  {
    title: "SaaS Matrix",
    desc: "Multi-tenant architecture with seamless horizontal scaling.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    tags: ["Next.js", "Docker"],
    color: "from-purple-500/20"
  },
  {
    title: "FinTech App",
    desc: "Secure payment gateways with AI-driven fraud detection.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
    tags: ["Python", "GraphQL"],
    color: "from-blue-500/20"
  },
  {
    title: "AI Automate",
    desc: "Intelligent RPA tool reducing manual overhead by 70%.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    tags: ["TensorFlow", "FastAPI"],
    color: "from-pink-500/20"
  },
  {
    title: "Cloud Shield",
    desc: "Advanced cybersecurity suite for cloud-native applications.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    tags: ["Go", "Kubernetes"],
    color: "from-emerald-500/20"
  },
  {
    title: "Nexus Core",
    desc: "Centralized IoT management system for smart infrastructure.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    tags: ["Node.js", "MQTT"],
    color: "from-orange-500/20"
  }
];

const Projects = () => {
  return (
    <section className="relative w-full bg-[#030712] py-24 overflow-hidden border-t border-white/5">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-cyan-400 font-black uppercase tracking-[0.5em] text-xs mb-4"
          >
            Engineering Excellence
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black text-white tracking-tighter"
          >
            Our Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">Deployments</span>
          </motion.h2>
        </div>

        {/* Projects Grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((proj, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative rounded-[2rem] bg-[#080c17] border border-white/10 overflow-hidden transition-all duration-500 hover:border-cyan-500/30 shadow-2xl h-full flex flex-col">
                
                {/* Project Image */}
                <div className="relative h-[220px] overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-t ${proj.color} to-transparent z-10 opacity-40 group-hover:opacity-10 transition-opacity`} />
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 z-20">
                    <div className="p-2 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white opacity-0 group-hover:opacity-100 transition-all">
                      <ExternalLink size={16} />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow space-y-4">
                  <div className="flex gap-2">
                    {proj.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[9px] font-black text-cyan-400 uppercase tracking-widest bg-cyan-400/10 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-black text-white group-hover:text-cyan-400 transition-colors">
                    {proj.title}
                  </h3>
                  
                  <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">
                    {proj.desc}
                  </p>

                  <div className="pt-4 mt-auto border-t border-white/5 flex items-center justify-between">
                    <button className="flex items-center gap-2 text-[10px] font-black text-white uppercase tracking-tighter hover:gap-3 transition-all">
                      Case Study <ArrowRight size={14} className="text-cyan-400" />
                    </button>
                    <span className="text-slate-800 font-black italic">0{idx + 1}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <button className="px-8 py-4 rounded-xl border border-white/10 text-white font-bold text-sm hover:bg-white hover:text-black transition-all">
            Browse Full Portfolio
          </button>
        </div>

      </div>
    </section>
  );
};

export default Projects;