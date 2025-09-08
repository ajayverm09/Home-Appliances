import React from "react";
import { FaShieldAlt, FaClock, FaTools, FaCalendarAlt, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";

const AboutSection = () => {
  const features = [
    {
      icon: <FaShieldAlt />,
      title: "Guaranteed Warranties",
      desc: "We provide warranties on all our repairs, giving you peace of mind with our services.",
    },
    {
      icon: <FaClock />,
      title: "24/7 Service Availability",
      desc: "We offer round-the-clock service to ensure your appliances are fixed when you need them the most.",
    },
    {
      icon: <FaTools />,
      title: "Quality Parts & Workmanship",
      desc: "We use only genuine parts and back our repairs with a warranty for your peace of mind.",
    },
    {
      icon: <FaCalendarAlt />,
      title: "Convenient Booking",
      desc: "Schedule your service online 24/7 with our easy-to-use booking system, or call us directly.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const cardVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

  return (
    <section className="bg-[#f2f0fc] py-16 px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">

        {/* Left Side: Text + Image */}
        <motion.div
          className="flex flex-col justify-center w-full lg:w-1/2 gap-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 sm:mb-6">
            We Bring Your Appliances Back to Life
          </h2>
          <p className="text-gray-700 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
            Don&apos;t let a malfunctioning appliance disrupt your life. AppliCare provides comprehensive repair solutions for all major brands and models. Transparent pricing, convenient online booking, and a satisfaction guarantee ensure peace of mind.
          </p>
          <motion.img
            src="https://applicare.oxaart.com/wp-content/uploads/appliance-repair-service-people-in-the-waiting-room.jpg"
            alt="People holding appliances"
            className="rounded-lg w-full max-w-full lg:max-w-xl mx-auto lg:mx-0"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>

        {/* Right Side: Features Grid */}
        <motion.div
          className="bg-[#f7ece6] p-4 sm:p-6 md:p-8 rounded-md shadow w-full lg:w-1/2 flex flex-col"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                className="flex items-start gap-3 p-4 rounded-md hover:shadow-lg transition cursor-pointer bg-white"
                variants={cardVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white p-3 rounded shadow text-blue-700 text-xl sm:text-2xl flex items-center justify-center w-12 h-12">
                  {feature.icon}
                </div>
                <div className="flex flex-col">
                  <h4 className="font-semibold text-base sm:text-lg">{feature.title}</h4>
                  <p className="text-xs sm:text-sm text-gray-700">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Button + Phone */}
          <motion.div
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-6 sm:mt-8 gap-4 sm:gap-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <motion.button
              className="bg-orange-500 text-white px-5 py-2 sm:px-6 sm:py-3 rounded font-semibold hover:bg-orange-600 w-full sm:w-auto transition"
              whileHover={{ scale: 1.05 }}
            >
              Book Service
            </motion.button>
            <div className="flex items-center gap-2 text-black font-semibold text-sm sm:text-base">
              <FaPhone className="text-orange-500 rotate-90" />
              (123) 456 7890
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;
