import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Scroll effect for navbar background  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Solutions", path: "/" },
    { name: "Projects", path: "/project" },
    { name: "Clients", path: "/client" },
    { name: "Career", path: "/career" },
    { name: "About", path: "/about" },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
          scrolled 
          ? "py-3 bg-black/60 backdrop-blur-xl border-b border-white/10" 
          : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* LOGO AREA */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <Link to="/" className="group flex items-center gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 p-[2px] shadow-lg group-hover:rotate-12 transition-transform duration-500">
                <div className="w-full h-full bg-[#030712] rounded-[10px] flex items-center justify-center overflow-hidden">
                  <img
                    src="/images/xynapse-system-logo-2.png"
                    alt="Xynapse Logo"
                    className="w-8 h-8 object-contain"
                  />
                </div>
              </div>
              <span className="text-white font-black text-xl tracking-tighter hidden sm:block">
                tECH SOLUTIONS<span className="text-cyan-400 text-3xl leading-[0]">.</span>
              </span>
            </Link>
          </motion.div>

          {/* DESKTOP NAV LINKS */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                className="relative group text-slate-300 text-sm font-bold uppercase tracking-widest hover:text-white transition-colors"
              >
                {item.name}
                {/* Animated Underline */}
                <span className={`absolute -bottom-1 left-0 h-[2px] bg-cyan-400 transition-all duration-300 ${
                  location.pathname === item.path ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </Link>
            ))}
          </div>

          {/* RIGHT SIDE ACTIONS */}
          <div className="flex items-center gap-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:block"
            >
              <Link
                to="/contact"
                className="relative inline-flex items-center justify-center px-7 py-3 overflow-hidden font-black text-white bg-white/5 rounded-full group border border-white/10 hover:border-cyan-500/50 transition-all shadow-2xl"
              >
                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-r from-cyan-500 to-blue-600 group-hover:opacity-100" />
                <span className="relative text-xs uppercase tracking-[0.2em]">Start a Project</span>
              </Link>
            </motion.div>

            {/* MOBILE MENU TOGGLE */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-white bg-white/5 rounded-lg border border-white/10"
            >
              {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[90] bg-[#030712]/fb backdrop-blur-2xl md:hidden pt-32 px-10"
          >
            <div className="flex flex-col gap-8">
              {menuItems.map((item, i) => (
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={item.name}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="text-4xl font-black text-white hover:text-cyan-400 transition-colors tracking-tighter"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="pt-10 border-t border-white/10"
              >
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full py-5 bg-white text-black text-center font-black rounded-2xl block text-xl"
                >
                  GET IN TOUCH
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;