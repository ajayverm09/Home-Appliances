import React from "react";
import { motion } from "framer-motion";

const ContactHero = () => {
  return (
    <section
      className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] flex items-center justify-center text-center text-white px-4 sm:px-6 md:px-12"
      style={{
        backgroundImage:
          "url('https://applicare.oxaart.com/wp-content/uploads/successful-sales-consultant-in-electronics-supermarket-asian-man-working-appliances-store-smiling.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-2 sm:px-0">
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-yellow-500 drop-shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Contact Us
        </motion.h1>

        <motion.p
          className="mt-2 sm:mt-4 text-xs sm:text-sm md:text-base lg:text-lg text-gray-200 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Get in touch today and let us assist you with all your appliance concerns.
        </motion.p>
      </div>
    </section>
  );
};

export default ContactHero;
