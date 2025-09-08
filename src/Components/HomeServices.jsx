import React from "react";
import { motion } from "framer-motion";

const HomeServices = () => {
  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url('https://applicare.oxaart.com/wp-content/uploads/home-appliances-household-kitchen-technics-isolated-on-white-background.jpg')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-10 py-12 sm:py-16">

        {/* Left Section */}
        <motion.div
          className="text-white w-full md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-snug">
            <span className="text-yellow-400">One Call Fixes All:</span>
            <br className="md:hidden" /> We are Your Complete Home Appliance Repair Solution
          </h1>
          <ul className="space-y-2 text-base sm:text-lg">
            <li>✅ Satisfaction guaranteed with every repair.</li>
            <li>✅ Affordable and transparent pricing.</li>
            <li>✅ Certified and experienced technicians.</li>
          </ul>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center mt-8 bg-yellow-400 p-4 rounded-lg shadow-md cursor-pointer max-w-sm"
          >
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Expert"
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full mr-3 sm:mr-4 object-cover"
            />
            <div>
              <p className="text-lg sm:text-xl font-bold text-blue-800">(123) 456 7891</p>
              <p className="text-xs sm:text-sm text-gray-700">Consult with an expert</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Section - Form */}
        <motion.div
          className="bg-blue-900 text-white p-6 sm:p-8 rounded-lg w-full md:w-1/2 shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-2">Request Your Services</h2>
          <p className="text-xs sm:text-sm mb-4 sm:mb-6">
            Schedule your home appliance repair online – 24/7 availability
          </p>

          <form className="space-y-3 sm:space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 sm:p-3 rounded bg-gray-100 text-black"
            />
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
              <input
                type="text"
                placeholder="Phone"
                className="w-full sm:w-1/2 p-2 sm:p-3 rounded bg-gray-100 text-black"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full sm:w-1/2 p-2 sm:p-3 rounded bg-gray-100 text-black"
              />
            </div>
            <input
              type="text"
              placeholder="Required Services"
              className="w-full p-2 sm:p-3 rounded bg-gray-100 text-black"
            />
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
              <input
                type="text"
                placeholder="Address"
                className="w-full sm:w-2/3 p-2 sm:p-3 rounded bg-gray-100 text-black"
              />
              <input
                type="text"
                placeholder="ZIP Code"
                className="w-full sm:w-1/3 p-2 sm:p-3 rounded bg-gray-100 text-black"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
              <input
                type="date"
                className="w-full sm:w-1/2 p-2 sm:p-3 rounded bg-gray-100 text-black"
              />
              <input
                type="time"
                className="w-full sm:w-1/2 p-2 sm:p-3 rounded bg-gray-100 text-black"
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              className="w-full bg-orange-500 text-white font-bold py-2 sm:py-3 rounded hover:bg-orange-600 transition"
            >
              Schedule Your Booking
            </motion.button>
          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default HomeServices;
