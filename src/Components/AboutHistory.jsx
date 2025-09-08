import React from "react";
import { FaPaperPlane, FaUsers, FaLayerGroup, FaAward } from "react-icons/fa";
import { motion } from "framer-motion";

const HistorySection = () => {
  const milestones = [
    {
      year: "2015",
      icon: <FaPaperPlane className="text-3xl text-indigo-500" />,
      title: "The Beginning",
      desc: "We began with a mission to provide dependable home appliance repairs, establishing trust with our customers through quality service.",
    },
    {
      year: "2017",
      icon: <FaUsers className="text-3xl text-indigo-500" />,
      title: "Growing Our Team",
      desc: "As demand grew, we expanded our team with skilled technicians, allowing us to provide a more comprehensive range of services.",
    },
    {
      year: "2020",
      icon: <FaLayerGroup className="text-3xl text-indigo-500" />,
      title: "Expanding Services",
      desc: "We created preventive maintenance packages and transparent pricing to demonstrate our dedication to client satisfaction.",
    },
    {
      year: "2023",
      icon: <FaAward className="text-3xl text-indigo-500" />,
      title: "Awards for Excellence",
      desc: 'We received the "Best Local Service" award for our dedication to providing high-quality service and ensuring customer satisfaction.',
    },
  ];

  return (
    <section className="relative bg-[#F6F4FF]">
      {/* Hero Background */}
      <div
        className="relative bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://applicare.oxaart.com/wp-content/uploads/successful-sales-consultant-in-electronics-supermarket-asian-man-working-appliances-store-smiling.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative z-10 text-center py-16 sm:py-20 px-4 sm:px-6 max-w-3xl mx-auto text-white"
        >
          {/* Floating Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="absolute -top-16 sm:-top-20 left-1/2 transform -translate-x-1/2"
          >
            <img
              src="https://applicare.oxaart.com/wp-content/uploads/vintglabelart-08-e1717224165610-1536x1536.png"
              alt="Satisfaction Guaranteed"
              className="w-20 sm:w-28 md:w-36 mx-auto drop-shadow-lg"
            />
          </motion.div>

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-yellow-500 text-black font-semibold px-4 py-1 rounded mb-3 sm:mb-4 text-sm sm:text-base"
          >
            Our History
          </motion.button>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold mb-3 sm:mb-4"
          >
            A Path of Excellence and Growth
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-sm sm:text-base md:text-lg text-gray-200 px-2 sm:px-0"
          >
            From humble beginnings to becoming a trusted name in home appliance
            repair, our journey is marked by dedication, innovation, and a
            steadfast commitment to our customers. Explore the milestones that
            have shaped who we are today.
          </motion.p>
        </motion.div>
      </div>

      {/* Timeline Cards */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
        className="relative z-20 -mt-12 sm:-mt-16 max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {milestones.map((item, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative bg-white p-6 sm:p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition"
          >
            {/* Year Ribbon */}
            <div className="absolute top-0 left-0">
              <div className="bg-indigo-600 text-white text-xs sm:text-sm font-bold px-2 py-1 rounded-tr-lg">
                {item.year}
              </div>
            </div>

            {/* Icon + Text */}
            <div className="flex flex-col items-center mt-6">
              <div className="bg-indigo-100 p-3 sm:p-4 rounded-full mb-3 sm:mb-4">
                {item.icon}
              </div>
              <h3 className="font-bold text-sm sm:text-base mb-1 sm:mb-2">{item.title}</h3>
              <p className="text-gray-600 text-xs sm:text-sm">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default HistorySection;
