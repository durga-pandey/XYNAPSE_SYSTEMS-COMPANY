import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full text-white py-16 shadow-xl bg-gradient-to-r from-[#2a063d] via-[#4b0f63] to-[#0b1d3a]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* LEFT: Company Info */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">XYNAPSE SYSTEM</h2>
          <p className="text-white/70">
            Enterprise software solutions delivering secure, innovative, and scalable products worldwide.
          </p>
          <div className="flex flex-col text-white/70 gap-1 text-sm">
            <p><span className="font-semibold">Email:</span> info@xynapse.com</p>
            <p><span className="font-semibold">Phone:</span> +91 12345 67890</p>
            <p><span className="font-semibold">Address:</span> 123 Tech Street, Bangalore, India</p>
          </div>
        </div>

        {/* CENTER: Quick Links */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
          <ul className="flex flex-col gap-2 text-white/70">
            <li><a href="#services" className="hover:text-pink-500 transition-colors">Services</a></li>
            <li><a href="#projects" className="hover:text-pink-500 transition-colors">Projects</a></li>
            <li><a href="#about" className="hover:text-pink-500 transition-colors">About Us</a></li>
            <li><a href="#contact" className="hover:text-pink-500 transition-colors">Contact</a></li>
            <li><a href="#careers" className="hover:text-pink-500 transition-colors">Careers</a></li>
          </ul>
        </div>

        {/* RIGHT: Socials */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-[#1877F2] hover:scale-110 transition-transform"
              aria-label="Facebook"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="#"
              className="text-[#1DA1F2] hover:scale-110 transition-transform"
              aria-label="Twitter"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="#"
              className="text-[#C13584] hover:scale-110 transition-transform"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="#"
              className="text-[#0077B5] hover:scale-110 transition-transform"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={24} />
            </a>
          </div>
          <p className="text-white/60 text-sm mt-4">
            © {new Date().getFullYear()} XYNAPSE SYSTEM. All rights reserved.
          </p>
        </div>
      </div>

      {/* BOTTOM LINE */}
      <div className="border-t border-white/20 mt-10 pt-6 text-white/60 text-center text-sm">
        Designed & Developed with ❤️ by XYNAPSE SYSTEM
      </div>
    </footer>
  );
};

export default Footer;
