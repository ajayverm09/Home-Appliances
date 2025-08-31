import React from "react";
import { FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";

const EmergencySection = () => {
  return (
    <section
      className="relative bg-fixed bg-center bg-cover min-h-[500px] flex items-center"
      style={{
        backgroundImage:
          "url('https://applicare.oxaart.com/wp-content/uploads/master-repairs-the-broken-washing-machine.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 flex justify-center w-full">
        {/* Animated Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-[#3C3996] p-6 sm:p-10 rounded-2xl shadow-xl w-full max-w-md text-white"
        >
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl sm:text-2xl lg:text-3xl font-extrabold leading-snug mb-4 text-center sm:text-left"
          >
            Your Appliance Emergency is <br /> Our Priority
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-sm sm:text-base lg:text-lg text-gray-200 mb-6 text-center sm:text-left"
          >
            We offer a comprehensive range of repair services for all major home
            appliances. Whether your refrigerator is leaking, your oven isn&apos;t
            heating, or your washing machine is making strange noises, we have
            the solution.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full"
          >
            <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition w-full sm:w-auto">
              Book Service
            </button>
            <div className="flex items-center gap-2 text-white font-semibold justify-center sm:justify-start">
              <FaPhone className="text-orange-500 rotate-90" />
              <span className="text-sm sm:text-base">(123) 456 7890</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EmergencySection;
