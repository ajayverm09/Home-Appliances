import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const Footer = () => {
  return (
    <div>
      {/* Logo Section */}
      <div className="flex justify-center mt-10 pb-5 bg-[#0B0D1F] relative">
        <motion.img
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          src="https://applicare.oxaart.com/wp-content/uploads/Applicare-Logo.png"
          alt="Logo"
          className="w-32 sm:w-36 h-24 sm:h-32 -mt-16 p-4 sm:p-5 absolute bg-white rounded-lg shadow-lg"
        />
      </div>

      <footer className="bg-[#0B0D1F] text-white overflow-hidden">
        {/* Top Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Contact Info */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <p className="flex items-center mb-2">
              <span className="mr-2">📍</span> 324 King Street, FL, USA
            </p>
            <p className="flex items-center mb-2">
              <span className="mr-2">📞</span> (123) 456 7890
            </p>
            <p className="flex items-center mb-4">
              <span className="mr-2">✉️</span> info@example.com
            </p>
            <button className="bg-[#FF5722] hover:bg-orange-600 text-white py-2 px-5 rounded font-semibold shadow-md transition-transform transform hover:scale-105 w-full sm:w-auto">
              Book Service
            </button>
          </motion.div>

          {/* Business Hours */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-4">Business Hours</h3>
            <p className="flex items-center mb-2">
              <span className="text-yellow-400 mr-2">🕒</span> Mon - Fri: 8:00am - 7:30pm
            </p>
            <p className="flex items-center mb-2">
              <span className="text-yellow-400 mr-2">🕒</span> Saturday: 8:00am - 1:30pm
            </p>
            <p className="flex items-center mb-4">
              <span className="text-yellow-400 mr-2">🕒</span> Sunday: Closed
            </p>

            {/* Social Links */}
            <div className="flex space-x-3 sm:space-x-4 mt-4 text-lg sm:text-xl">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800 hover:bg-blue-500 transition transform hover:scale-110"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800 hover:bg-sky-400 transition transform hover:scale-110"
              >
                <FaTwitter />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800 hover:bg-blue-700 transition transform hover:scale-110"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800 hover:bg-pink-500 transition transform hover:scale-110"
              >
                <FaInstagram />
              </a>
            </div>
          </motion.div>

          {/* Information */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-4">Information</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="hover:underline block">› About Us</a>
              </li>
              <li>
                <a href="/contact" className="hover:underline block">› Contact Us</a>
              </li>
              <li>
                <a href="/blogs" className="hover:underline block">› Blogs</a>
              </li>
              <li>
                <a href="/book-service" className="hover:underline block">› Book Service</a>
              </li>
            </ul>
          </motion.div>

          {/* Instagram */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-4">Instagram</h3>
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="w-full pb-full rounded-lg shadow-md relative"
                  style={{
                    backgroundImage: `url(/assets/insta-${i}.jpg)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-[#1C1F30] py-4 px-6 text-sm text-gray-400 flex flex-col sm:flex-row justify-center sm:justify-between items-center border-t border-gray-700 gap-2 sm:gap-0"
        >
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <a href="#" className="hover:underline">Terms of Use</a>
            <span className="hidden sm:inline">|</span>
            <a href="#" className="hover:underline">Privacy Policy</a>
          </div>
          <p>© 2025 Applicare. All rights reserved.</p>
        </motion.div>
      </footer>
    </div>
  );
};

export default Footer;
