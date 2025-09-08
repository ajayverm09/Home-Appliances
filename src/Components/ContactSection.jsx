import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const ContactSection = () => {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="flex flex-col lg:flex-row bg-gray-100 p-6 md:p-12 lg:p-16 gap-8 lg:gap-10 justify-center">
      {/* Left side content */}
      <motion.div
        className="w-full lg:w-1/3 flex flex-col space-y-6"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg text-center shadow-md cursor-pointer"
        >
          Book Service
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white p-6 rounded-lg shadow-md flex items-start md:items-center space-x-4"
        >
          <FaMapMarkerAlt className="text-gray-400 text-2xl mt-1 md:mt-0" />
          <div>
            <h3 className="font-semibold text-lg">HQ Address</h3>
            <p className="text-gray-600 text-sm sm:text-base">
              324 King Street, FL USA
            </p>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white p-6 rounded-lg shadow-md flex items-start md:items-center space-x-4"
        >
          <FaEnvelope className="text-gray-400 text-2xl mt-1 md:mt-0" />
          <div>
            <h3 className="font-semibold text-lg">Email Address</h3>
            <p className="text-gray-600 text-sm sm:text-base">
              info@example.com
            </p>
          </div>
        </motion.div>

        <motion.div
          className="bg-white p-6 rounded-lg shadow-md flex justify-center space-x-4 sm:space-x-6"
          whileHover={{ scale: 1.02 }}
        >
          <FaFacebookF className="text-gray-500 hover:text-orange-500 text-xl cursor-pointer" />
          <FaTwitter className="text-gray-500 hover:text-orange-500 text-xl cursor-pointer" />
          <FaLinkedinIn className="text-gray-500 hover:text-orange-500 text-xl cursor-pointer" />
          <FaInstagram className="text-gray-500 hover:text-orange-500 text-xl cursor-pointer" />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-yellow-400 p-6 rounded-lg shadow-md flex items-center space-x-4"
        >
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img
              src="https://applicare.oxaart.com/wp-content/uploads/7-Team-Member.jpg"
              alt="Expert"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <p className="text-lg font-bold">(123) 456 7890</p>
            <p className="text-sm">Consult with an expert</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Right side form */}
      <motion.div
        className="w-full lg:w-2/3 bg-white p-6 md:p-10 rounded-lg shadow-md relative"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center lg:text-left">
          Leave a Message
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <input
              type="text"
              placeholder="First Name"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
          <textarea
            placeholder="Message"
            rows="5"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
            required
          ></textarea>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-colors"
          >
            Submit
          </motion.button>
        </form>

        {/* Success Message */}
        {success && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full bg-green-500 text-white px-6 py-3 rounded shadow-md font-semibold text-center"
          >
            ✅ Message sent successfully!
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default ContactSection;
