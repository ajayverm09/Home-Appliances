import React from "react";
import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <section
      className="relative w-full min-h-[350px] sm:min-h-[400px] md:min-h-[450px] lg:min-h-[500px] flex items-center justify-center text-center bg-center bg-cover"
      style={{
        backgroundImage:
          "url('https://applicare.oxaart.com/wp-content/uploads/handyman-repairing-a-washing-machine.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 md:px-8">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-yellow-400 mb-3 sm:mb-4 drop-shadow-lg leading-tight"
        >
          About Us
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-white max-w-xl sm:max-w-2xl mx-auto px-2 sm:px-0 leading-relaxed"
        >
          Uncover the passion and expertise that power our journey in home appliance care. 
          We are committed to providing trusted, professional, and efficient services for all your household appliances.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutHero;
