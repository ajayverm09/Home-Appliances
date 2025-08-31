import React from "react";
import { FaShieldAlt, FaClock, FaCalendarCheck, FaTools } from "react-icons/fa";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaShieldAlt className="text-2xl text-[#2A2C83]" />,
      title: "Guaranteed Warranties",
      desc: "We provide warranties on all our repairs, giving you peace of mind with our services.",
      delay: 0.3,
    },
    {
      icon: <FaClock className="text-2xl text-[#2A2C83]" />,
      title: "24/7 Service Availability",
      desc: "We offer round-the-clock service to ensure your appliances are fixed when you need them the most.",
      delay: 0.4,
    },
    {
      icon: <FaCalendarCheck className="text-2xl text-[#2A2C83]" />,
      title: "Convenient Booking",
      desc: "Schedule your service online 24/7 with our easy-to-use booking system, or call us directly.",
      delay: 0.5,
    },
    {
      icon: <FaTools className="text-2xl text-[#2A2C83]" />,
      title: "Quality Parts & Workmanship",
      desc: "We use only genuine parts and back our repairs with a warranty for your peace of mind.",
      delay: 0.6,
    },
  ];

  return (
    <section className="relative z-0 bg-[#F0EDF9] pt-20 sm:pt-28 pb-16 sm:pb-24 px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12 items-center">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          animate={{ y: [0, -15, 0] }}
          className="w-full md:w-1/2 flex-shrink-0"
        >
          <img
            src="https://applicare.oxaart.com/wp-content/uploads/joyful-young-man-fixing-fridge-in-kitchen.jpg"
            alt="Technician Repairing Appliance"
            className="w-full h-auto md:h-[600px] object-cover rounded-md shadow-lg"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex flex-col gap-6"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block bg-yellow-400 text-black font-semibold px-3 py-1 rounded"
          >
            Why choose us?
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B0D1F]"
          >
            We Bring Your Appliances Back to Life
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-700 text-sm sm:text-base"
          >
            Don’t let a malfunctioning appliance disrupt your life. AppliCare provides comprehensive repair solutions for all major brands. Transparent pricing, convenient online booking, and a satisfaction guarantee ensures your appliances are in good hands.
          </motion.p>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: feature.delay }}
                whileHover={{ scale: 1.03 }}
                className="flex items-start gap-3 p-4 rounded-lg shadow hover:shadow-lg bg-white cursor-pointer"
              >
                {feature.icon}
                <div>
                  <h4 className="font-semibold text-md">{feature.title}</h4>
                  <p className="text-sm sm:text-base text-gray-600">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
