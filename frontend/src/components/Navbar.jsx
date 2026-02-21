import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Solutions & Services", path: "/" },
    { name: "Projects", path: "/project" },
    { name: "Clients", path: "/client" },
    { name: "Career", path: "/career" },
    { name: "About Us", path: "/about" },
  ];

  const mobileMenuVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, ease: "easeOut" },
    },
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <>
      <nav className="w-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg py-4 px-6 md:px-12 relative overflow-x-hidden">
        <div className="flex items-center justify-between">
          <motion.div
            className="flex items-center"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          >
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden bg-white/10 flex items-center justify-center shadow-md">
              <img
                src="/images/xynapse-system-logo-2.png"
                alt="logo"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Link
                  to={item.path}
                  className="text-white/80 text-sm font-medium hover:text-white transition-colors duration-300 whitespace-nowrap"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="hidden md:flex"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          >
            <Link
              to="/contact"
              className="px-6 py-2 rounded-xl text-white font-semibold bg-gradient-to-r from-pink-500 to-purple-500 border border-white/20 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </Link>
          </motion.div>

          <div className="md:hidden flex items-center ml-2">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <HiX className="w-6 h-6 text-white" />
              ) : (
                <HiMenu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="absolute top-[85px] left-0 w-full bg-white/10 backdrop-blur-xl border-t border-white/20 flex flex-col items-start py-4 px-4 md:hidden z-50"
          variants={mobileMenuVariants}
          initial="hidden"
          animate="visible"
        >
          {menuItems.map((item) => (
            <motion.div
              key={item.name}
              variants={mobileItemVariants}
              className="w-full"
            >
              <Link
                to={item.path}
                className="text-white/90 text-base font-medium py-2 hover:text-white transition-colors duration-300 w-full block"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}

          <motion.div variants={mobileItemVariants} className="w-full mt-2">
            <Link
              to="/contact"
              className="px-5 py-2 rounded-xl text-white font-semibold bg-gradient-to-r from-pink-500 to-purple-500 border border-white/20 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 w-full block text-center"
              onClick={() => setIsOpen(false)}
            >
              Get In Touch
            </Link>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
