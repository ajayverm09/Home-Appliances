import React from "react";
import { motion } from "framer-motion";
import { FaUserShield, FaUsers, FaBalanceScale, FaClock } from "react-icons/fa";

const features = [
  {
    icon: <FaUserShield className="text-3xl text-[#2A2C83] mx-auto mb-3" />,
    title: "Certified Technicians",
    description:
      "Our certified technicians can diagnose and repair all major brands of household appliances.",
    bg: "#EDE9FE",
  },
  {
    icon: <FaUsers className="text-3xl text-[#2A2C83] mx-auto mb-3" />,
    title: "Local & Trusted",
    description:
      "We're your neighbors, dedicated to serving our community with top-notch appliance care.",
    bg: "#FFF7ED",
  },
  {
    icon: <FaBalanceScale className="text-3xl text-[#2A2C83] mx-auto mb-3" />,
    title: "Transparent Pricing",
    description:
      "No hidden fees or surprises. We provide upfront estimates before starting any work.",
    bg: "#EDE9FE",
  },
  {
    icon: <FaClock className="text-3xl text-[#2A2C83] mx-auto mb-3" />,
    title: "Prompt Service",
    description:
      "We understand your time is valuable, so we offer same-day or next-day appointments.",
    bg: "#FEE2E2",
  },
];

const ReliableTeam = () => {
  const featureVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Hero Section */}
      <section
        className="relative bg-fixed bg-center bg-cover h-[400px] sm:h-[450px] md:h-[500px] flex items-center justify-center text-center px-4 sm:px-6"
        style={{
          backgroundImage:
            "url('https://applicare.oxaart.com/wp-content/uploads/appliance-repair-service-people-in-the-waiting-room.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/70 z-0"></div>
        <motion.div
          className="relative z-10 max-w-3xl sm:max-w-4xl px-2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="mx-auto w-32 sm:w-40 mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <img
              src="https://applicare.oxaart.com/wp-content/uploads/vintglabelart-08-e1717224165610-1536x1536.png"
              alt="Satisfaction Guaranteed"
              className="w-full drop-shadow-lg mx-auto"
            />
          </motion.div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
            Reliable and Experienced Appliance Repair Team
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-200">
            We are a family-owned and operated business dedicated to providing
            our community with honest, dependable, and affordable appliance
            repair services. Transparent pricing, open communication, reliable
            workmanship.
          </p>
        </motion.div>
      </section>

      {/* Features Section */}
      <div className="relative -mt-16 z-10 max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        {/* Animated Background Blobs */}
        <motion.div
          className="absolute inset-0 z-0"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
        >
          <div className="absolute w-48 h-48 sm:w-64 sm:h-64 bg-yellow-300 rounded-full opacity-20 top-10 left-10 blur-3xl"></div>
          <div className="absolute w-56 h-56 sm:w-72 sm:h-72 bg-blue-300 rounded-full opacity-20 bottom-10 right-10 blur-3xl"></div>
        </motion.div>

        {/* Feature Cards */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={featureVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -5, scale: 1.03 }}
              className="text-center p-6 rounded-lg cursor-pointer z-10"
              style={{ backgroundColor: feature.bg }}
            >
              {feature.icon}
              <h4 className="font-bold text-black text-lg mb-1">{feature.title}</h4>
              <p className="text-sm sm:text-base text-gray-700">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReliableTeam;
