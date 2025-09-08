import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaPhone,
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaBars,
} from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blogs" },
    { name: "Contact", href: "/contact" },
    { name: "Book Service", href: "/form", special: true },
  ];

  const mobileVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: { delay: i * 0.1 + 0.2 },
    }),
  };

  return (
    <motion.nav
      className={`fixed w-full top-0 z-50 bg-white transition-all duration-300 ${
        scrolled ? "shadow-lg py-2" : "shadow-md py-4"
      }`}
      animate={{ height: scrolled ? 60 : 80 }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 md:px-8">
        {/* Logo */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex items-center"
        >
          <motion.img
            src="https://applicare.oxaart.com/wp-content/uploads/Applicare-Logo.png"
            alt="Logo"
            className={`w-12 h-12 transition-all duration-300 ${
              scrolled ? "scale-90" : "scale-100"
            }`}
          />
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 text-lg text-gray-800 font-medium">
          {links.map((link, idx) =>
            link.special ? (
              <a
                key={idx}
                href={link.href}
                className="h-10 w-32 text-center pt-2 rounded-2xl bg-orange-400 hover:bg-orange-500 transition font-semibold"
              >
                {link.name}
              </a>
            ) : (
              <a
                key={idx}
                href={link.href}
                className="hover:text-orange-500 transition-colors"
              >
                {link.name}
              </a>
            )
          )}
        </div>

        {/* Social + Phone (Desktop only) */}
        <div className="hidden sm:flex items-center gap-4">
          <div className="flex gap-3 text-gray-700 text-lg">
            <a href="#" className="hover:text-orange-500 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-orange-500 transition">
              <FaXTwitter />
            </a>
            <a href="#" className="hover:text-orange-500 transition">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:text-orange-500 transition">
              <FaInstagram />
            </a>
          </div>
          <div className="text-orange-500 font-bold items-center gap-2 flex">
            <FaPhone className="text-lg" />
            <span>(123) 456 7890</span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={menuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="md:hidden bg-white shadow-md overflow-hidden"
      >
        <div className="flex flex-col px-4 sm:px-6 py-4 gap-4">
          {links.map((link, i) => (
            <motion.a
              key={i}
              custom={i}
              variants={mobileVariants}
              initial="hidden"
              animate={menuOpen ? "visible" : "hidden"}
              href={link.href}
              className={`${
                link.special
                  ? "text-center py-2 bg-orange-400 hover:bg-orange-500 rounded font-semibold transition"
                  : "hover:text-orange-500 transition-colors text-gray-800 text-lg"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
