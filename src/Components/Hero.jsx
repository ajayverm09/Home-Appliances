import React, { useState } from "react";
import Herobg from "../../assets/Herobg.mp4";
import { FaPhone } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-[-1]"
      >
        <source src={Herobg} type="video/mp4" />
      </video>

      {/* Overlay Content */}
      <section className="flex flex-col lg:flex-row items-start lg:items-center justify-between h-full px-4 sm:px-12 lg:px-24 py-16 gap-8 bg-gradient-to-t from-[#595BA6]/90 to-black/70">
        {/* Left Side */}
        <motion.div
          className="w-full lg:w-1/2 text-white z-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="bg-white px-3 py-1 text-black inline-block mb-4 rounded text-sm font-medium"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Your satisfaction is our top priority.
          </motion.div>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl text-[#FFC752] font-extrabold mb-4 leading-snug"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Broken Home Appliance?
            <br />
            <span className="text-white">We've got the fix.</span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Our certified technicians provide top-notch service with transparent pricing and satisfaction guarantee.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-orange-500 text-white px-5 py-3 font-semibold rounded hover:bg-orange-600 transition w-full sm:w-auto"
            >
              Book Service
            </motion.button>
            <div className="flex items-center gap-2 text-white font-semibold text-sm sm:text-base">
              <FaPhone className="text-orange-500 rotate-90" />
              (123) 456 7890
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side Form */}
        <motion.div
          className="w-full lg:w-1/2 bg-[#090A1D] p-4 sm:p-6 md:p-8 rounded-lg shadow-lg z-10 relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.form
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-black w-full"
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <h2 className="text-white text-xl sm:text-2xl font-bold col-span-2 mb-2">
              Request Your Services
            </h2>
            <p className="text-white text-sm sm:text-base col-span-2 mb-4">
              Schedule your home appliance repair online – 24/7 availability
            </p>

            {/* Inputs */}
            {[
              "Your Name",
              "Phone",
              "Email",
              "Address",
              "ZIP",
              "Date",
              "Time",
            ].map((placeholder, idx) => (
              <motion.input
                key={idx}
                type={
                  placeholder === "Email"
                    ? "email"
                    : placeholder === "Phone"
                    ? "tel"
                    : placeholder === "Date"
                    ? "date"
                    : placeholder === "Time"
                    ? "time"
                    : "text"
                }
                placeholder={placeholder}
                className="p-2 sm:p-3 bg-white rounded focus:outline-none focus:ring-2 focus:ring-orange-500 w-full"
                whileFocus={{ scale: 1.02, borderColor: "#FF5722" }}
              />
            ))}

            <motion.button
              className="col-span-2 mt-3 sm:mt-4 bg-orange-500 text-white py-3 rounded hover:bg-orange-600 transition w-full"
              whileHover={{ scale: 1.05 }}
              type="submit"
            >
              Schedule Your Booking
            </motion.button>
          </motion.form>

          {/* ✅ Success Toast */}
          <AnimatePresence>
            {formSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute top-4 left-1/2 -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded shadow-lg font-semibold text-sm sm:text-base"
              >
                ✅ Message sent successfully!
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  );
};

export default Hero;
