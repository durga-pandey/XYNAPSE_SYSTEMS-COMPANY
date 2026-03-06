import React from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, Zap } from "lucide-react";

const CareerCTA = () => {
  return (
    <section className="relative py-32 bg-[#030712] overflow-hidden px-6">
      
      {/* Background Decorative Mesh (Subtle) */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative p-12 md:p-20 rounded-[3rem] bg-white/[0.02] border border-white/10 backdrop-blur-3xl overflow-hidden"
        >
          {/* Floating Icon Decor */}
          <div className="absolute top-10 right-10 animate-bounce">
            <Zap className="text-yellow-400 opacity-20" size={48} />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none">
              DON'T SEE A <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                PERFECT FIT?
              </span>
            </h2>
            
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              We are always looking for outliers, rebels, and visionaries. 
              Send us your portfolio and tell us why you belong here.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              {/* Main Glowing Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-10 py-5 bg-white text-black font-black text-lg rounded-2xl flex items-center gap-3 transition-all hover:bg-cyan-400 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
              >
                Drop Your Resume
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </motion.button>

              {/* Email Link */}
              <a 
                href="mailto:careers@xynapse.ai" 
                className="flex items-center gap-3 text-white font-bold hover:text-purple-400 transition-colors py-4"
              >
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <Mail size={18} />
                </div>
                careers@xynapse.ai
              </a>
            </div>
          </motion.div>

          {/* Bottom Decorative Pattern */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
        </motion.div>

        {/* Footer Note */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-12 text-slate-500 text-sm font-bold uppercase tracking-[0.4em]"
        >
          Xynapse is an equal opportunity machine.
        </motion.p>
      </div>
    </section>
  );
};

export default CareerCTA;