import { motion } from "framer-motion";
import { 
  FaCode, FaCloud, FaRobot, 
  FaMobileAlt, FaPencilRuler, FaShieldAlt 
} from "react-icons/fa";

const services = [
  {
    title: "Custom Software",
    description: "Tailored solutions that align with your business goals. From workflow automation to enterprise systems, we drive measurable results.",
    icon: <FaCode />,
    color: "group-hover:text-cyan-400"
  },
  {
    title: "Cloud Integration",
    description: "Seamless migration to leading cloud platforms. We optimize scalability and performance for zero-disruption computing.",
    icon: <FaCloud />,
    color: "group-hover:text-blue-400"
  },
  {
    title: "AI & Machine Learning",
    description: "Intelligent predictive models and decision automation. Extract actionable insights to stay ahead of the competition.",
    icon: <FaRobot />,
    color: "group-hover:text-purple-400"
  },
  {
    title: "Mobile App Dev",
    description: "High-performance iOS and Android apps. Designed for speed, engagement, and seamless user experiences.",
    icon: <FaMobileAlt />,
    color: "group-hover:text-pink-400"
  },
  {
    title: "UI/UX Design",
    description: "Human-centered design that elevates your digital presence. Intuitive interfaces that enhance user satisfaction.",
    icon: <FaPencilRuler />,
    color: "group-hover:text-orange-400"
  },
  {
    title: "Cybersecurity",
    description: "Robust protocols and threat monitoring. Safeguard your digital assets against breaches and cyber attacks.",
    icon: <FaShieldAlt />,
    color: "group-hover:text-red-400"
  },
];

const Service = () => {
  return (
    <section className="relative w-full bg-[#030712] py-24 overflow-hidden border-t border-white/5">
      
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 lg:px-12">
        
        {/* Header Section */}
        <div className="text-center mb-20 space-y-4">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-cyan-400 font-black uppercase tracking-[0.5em] text-xs"
          >
            Our Expertise
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white tracking-tighter"
          >
            Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-400 to-slate-600">Capabilities</span>
          </motion.h2>
          <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Engineered to transform. We deliver high-impact software solutions designed for the modern enterprise.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative h-full"
            >
              {/* Card Outer Border Glow */}
              <div className="absolute -inset-[1px] rounded-[2.5rem] bg-gradient-to-br from-white/10 to-transparent group-hover:from-cyan-500/50 group-hover:to-purple-500/50 transition-all duration-500 opacity-50 group-hover:opacity-100" />
              
              {/* Card Main Body */}
              <div className="relative h-full bg-[#080c17] rounded-[2.5rem] p-10 flex flex-col items-start transition-all duration-500 overflow-hidden">
                
                {/* Background Pattern on Hover */}
                <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-white/5 rounded-full blur-3xl group-hover:bg-cyan-500/10 transition-colors" />

                {/* Icon Circle */}
                <div className="relative mb-8 p-5 rounded-2xl bg-white/5 border border-white/10 text-white text-3xl transition-all duration-500 group-hover:scale-110 group-hover:bg-white group-hover:text-black">
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-black text-white mb-4 tracking-tight group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-slate-400 text-base leading-relaxed font-medium">
                  {service.description}
                </p>

                {/* Bottom Detail */}
                <div className="mt-8 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-600 group-hover:text-white transition-colors">
                  <span>Learn More</span>
                  <div className="w-8 h-[2px] bg-slate-800 group-hover:bg-cyan-500 transition-all group-hover:w-12" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;