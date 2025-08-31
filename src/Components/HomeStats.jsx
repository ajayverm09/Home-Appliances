import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import { motion, AnimatePresence } from "framer-motion";

const StatsSection = () => {
  const stats = [
    { label: "Satisfied Customers", value: 380 },
    { label: "Expert Team Members", value: 22 },
    { label: "Service Areas Covered", value: 44 },
    { label: "Years of Experience", value: 12 },
  ];

  const testimonials = [
    {
      name: "Freya Dean",
      username: "@freyadean",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      review:
        "Excellent service! The team arrived right on time and quickly diagnosed the problem with my washing machine. They had all the necessary parts on hand and completed the repair efficiently.",
    },
    {
      name: "James Carter",
      username: "@jamescarter",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      review:
        "Very professional and friendly staff. They fixed my refrigerator in no time and explained everything clearly. Pricing was honest too. Highly recommend them!",
    },
    {
      name: "Sophia Lee",
      username: "@sophialee",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      review:
        "Quick response and excellent customer support. The technician was knowledgeable and respectful. I’ll definitely call them again for any appliance issues.",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="w-full bg-[#F0EDF9] py-12 sm:py-16 px-4 sm:px-6 md:px-12">
      {/* Stats Numbers */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center mb-12">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2A2C83]">
              <CountUp start={0} end={stat.value} duration={2} />+
            </h2>
            <p className="text-sm sm:text-base text-gray-700 mt-2">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Testimonials Section */}
      <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12 max-w-6xl mx-auto">
        {/* Left Image */}
        <motion.div
          className="relative w-full md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.02 }}
        >
          <img
            src="https://applicare.oxaart.com/wp-content/uploads/happy-young-handyman-carpenter-in-workshop-smiling.jpg"
            alt="Customer"
            className="w-full h-full object-cover rounded-md"
          />
          <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-md shadow-md text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-bold text-[#2A2C83]">
              <CountUp start={0} end={380} duration={2} />+
            </h2>
            <p className="text-xs sm:text-sm text-gray-700">Satisfied Customers</p>
          </div>
        </motion.div>

        {/* Right Testimonial */}
        <div className="w-full md:w-1/2 flex flex-col">
          <div className="inline-block bg-yellow-400 text-black font-semibold px-3 py-1 mb-2 rounded">
            Clients Review
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0B0D1F] mb-4 sm:mb-6">
            Our Clients' Satisfaction is Important to Us
          </h2>

          {/* Testimonial Slider */}
          <div className="relative bg-white rounded-lg shadow-md overflow-hidden">
            <AnimatePresence initial={false}>
              {testimonials.map(
                (t, i) =>
                  i === current && (
                    <motion.div
                      key={t.username}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.7 }}
                      className="relative p-4 sm:p-6"
                    >
                      <div className="bg-[#2A2C83] text-white p-3 sm:p-4 flex items-center gap-3 sm:gap-4 rounded-t-md">
                        <img
                          src={t.image}
                          alt={t.name}
                          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                        />
                        <div>
                          <h4 className="font-bold text-sm sm:text-md">{t.name}</h4>
                          <p className="text-xs sm:text-sm text-gray-300">{t.username}</p>
                        </div>
                      </div>
                      <p className="p-3 sm:p-6 text-sm sm:text-base text-gray-800">{t.review}</p>
                    </motion.div>
                  )
              )}
            </AnimatePresence>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-4 space-x-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  current === i ? "bg-[#2A2C83]" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
