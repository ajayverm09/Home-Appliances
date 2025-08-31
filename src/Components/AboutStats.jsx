import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutStats = () => {
  const stats = [
    { label: "Satisfied Customers", value: 380 },
    { label: "Expert Team Members", value: 22 },
    { label: "Service Areas Covered", value: 44 },
    { label: "Years of Experience", value: 12 },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section ref={ref} className="bg-[#F0EDF9] py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-xl shadow-md p-5 sm:p-6 cursor-pointer flex flex-col items-center justify-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2A2C83]">
              {inView && <CountUp start={0} end={stat.value} duration={2} />}+
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 mt-2">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutStats;
