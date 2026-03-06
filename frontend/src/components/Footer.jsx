import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaArrowRight,
} from "react-icons/fa";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative w-full bg-[#030712] pt-24 pb-12 overflow-hidden border-t border-white/5">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-600 p-[1px]">
                <div className="w-full h-full bg-[#030712] rounded-[7px] flex items-center justify-center font-black text-white">
                  X
                </div>
              </div>
              <h2 className="text-2xl font-black text-white tracking-tighter">
                XYNAPSE<span className="text-cyan-400">.</span>
              </h2>
            </div>
            <p className="text-slate-400 leading-relaxed font-medium">
              We engineer high-performance digital ecosystems for the next
              generation of global enterprises. Scale faster, build smarter.
            </p>
            <div className="flex gap-4">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
                (Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-cyan-400 hover:text-black hover:border-cyan-400 transition-all duration-300"
                  >
                    <Icon size={18} />
                  </a>
                ),
              )}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="text-white font-black uppercase tracking-widest text-sm">
              Explore
            </h3>
            <ul className="flex flex-col gap-4">
              {[
                "Solutions",
                "Case Studies",
                "Our Clients",
                "Career",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-2 group"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 opacity-0 group-hover:opacity-100 transition-all" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="text-white font-black uppercase tracking-widest text-sm">
              Get In Touch
            </h3>
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-4 group">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-cyan-500/50 transition-colors">
                  <Mail size={18} className="text-cyan-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-black">
                    Email Us
                  </p>
                  <p className="text-slate-300 font-medium">
                    hello@xynapse.com
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-purple-500/50 transition-colors">
                  <Phone size={18} className="text-purple-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-black">
                    Call Us
                  </p>
                  <p className="text-slate-300 font-medium">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-blue-500/50 transition-colors">
                  <MapPin size={18} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-black">
                    Location
                  </p>
                  <p className="text-slate-300 font-medium text-sm leading-snug">
                    Tech Park, Bengaluru, IN
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="text-white font-black uppercase tracking-widest text-sm">
              Weekly Insights
            </h3>
            <p className="text-slate-400 text-sm">
              Join 500+ tech leaders receiving our engineering updates.
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-5 pr-12 text-white text-sm focus:outline-none focus:border-cyan-500/50 transition-all"
              />
              <button className="absolute right-2 top-2 bottom-2 px-3 bg-cyan-400 rounded-lg text-black hover:bg-white transition-colors">
                <FaArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs font-medium uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} Xynapse System{" "}
            <span className="mx-2 text-white/10">|</span>
            Built for the future.
          </p>
          <div className="flex gap-8">
            <a
              href="#"
              className="text-slate-500 hover:text-white text-xs uppercase tracking-widest transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-slate-500 hover:text-white text-xs uppercase tracking-widest transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
