import React from "react";
import { motion } from "framer-motion";

const MapSection = () => {
  return (
    <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden px-2 sm:px-0">
      <motion.iframe
        title="map-location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11520.655294520932!2d-80.1983084!3d25.7725925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b69b222a7f53%3A0xc3f8e5b60e6593b4!2s324%20King%20Street%2C%20Miami%2C%20FL%2033130%2C%20USA!5e0!3m2!1sen!2sin!4v1628109000000!5m2!1sen!2sin"
        className="w-full h-full rounded-lg shadow-lg filter grayscale md:hover:filter-none transition-all duration-500 ease-in-out"
        allowFullScreen=""
        loading="lazy"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      ></motion.iframe>
    </div>
  );
};

export default MapSection;
