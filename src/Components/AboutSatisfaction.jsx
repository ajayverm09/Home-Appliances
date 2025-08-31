import React from "react";
import { FaCrosshairs, FaUsers, FaCertificate } from "react-icons/fa";
import { motion } from "framer-motion";

const SatisfactionSection = () => {
  return (
    <section className="bg-[#F6F4FF] py-10 sm:py-12 md:py-16 px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 md:gap-12 items-start md:items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col items-start text-left w-full md:w-1/2"
        >
          <img
            src="https://applicare.oxaart.com/wp-content/uploads/vintglabelart-08-e1717224165610.png"
            alt="Satisfaction Badge"
            className="w-20 sm:w-24 md:w-28 mb-4 sm:mb-6"
          />
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3 sm:mb-4 leading-snug">
            Customer Satisfaction Guaranteed
          </h2>
          <p className="text-gray-700 text-sm sm:text-base md:text-base leading-relaxed">
            Our goal is to provide the highest level of service and ensure your
            complete satisfaction. We pride ourselves on professionalism,
            attention to detail, and commitment to customer care. From the
            moment you contact us to the completion of your repair, we’re
            dedicated to making the process smooth and stress-free.
          </p>
        </motion.div>

        {/* Right Features */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.25 } },
          }}
          className="flex flex-col space-y-6 sm:space-y-8 w-full md:w-1/2"
        >
          {/* Feature 1 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4"
          >
            <div className="bg-white p-3 rounded-lg shadow-md flex-shrink-0">
              <FaCrosshairs className="text-2xl text-indigo-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-1">
                Extensive Brand Coverage
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                We provide services for a diverse assortment of brands, from high-end luxury to everyday household names.
              </p>
            </div>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4"
          >
            <div className="bg-white p-3 rounded-lg shadow-md flex-shrink-0">
              <FaUsers className="text-2xl text-indigo-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-1">
                Brand-Specific Training
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Our team participates in ongoing training to maintain up-to-date knowledge of the latest brand technologies.
              </p>
            </div>
          </motion.div>

          {/* Feature 3 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4"
          >
            <div className="bg-white p-3 rounded-lg shadow-md flex-shrink-0">
              <FaCertificate className="text-2xl text-indigo-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-1">
                Warranty Compliance
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                All repairs comply with manufacturer warranties, ensuring your coverage remains intact.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SatisfactionSection;
