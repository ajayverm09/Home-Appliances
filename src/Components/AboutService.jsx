import React from "react";
import { motion } from "framer-motion";

const ServiceSection = () => {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center md:text-left md:max-w-xl w-full"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B0D1F] mb-4 leading-snug">
            A Local, Reliable, and Experienced Appliance Repair Team
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
            Family-owned and operated, we're committed to providing our community with honest, reliable, and affordable appliance repairs. Thousands of happy homeowners have relied on us for their appliance repair needs. Transparent pricing, upfront communication, and workmanship you can count on. We diagnose, fix, and maintain all major home appliance brands.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 sm:gap-6">
            <button className="bg-[#FF5722] hover:bg-[#E64A19] transition text-white font-semibold py-2 px-6 rounded-lg shadow-md w-full sm:w-auto">
              Book Service
            </button>
            <p className="text-base md:text-lg font-semibold text-gray-900 flex items-center justify-center sm:justify-start gap-2">
              <span role="img" aria-label="phone">📞</span> (123) 456 7890
            </p>
          </div>
        </motion.div>

        {/* Right Section - Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center md:justify-end w-full md:w-1/2 mt-6 md:mt-0"
        >
          <img
            src="https://applicare.oxaart.com/wp-content/uploads/group-of-engineers-in-factory-working-together-1536x1024.jpg"
            alt="Appliance Repair Team"
            className="shadow-lg rounded-lg w-full sm:w-4/5 md:w-full object-cover"
          />
        </motion.div>
      </div>

      {/* Service Features Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.25 } },
        }}
        className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {/* Service Block 1 */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-[#FFFAF1] p-6 sm:p-8 rounded-lg shadow-md text-center flex flex-col items-center justify-between hover:shadow-xl hover:-translate-y-1 transition"
        >
          <h4 className="font-semibold text-base sm:text-lg text-[#0B0D1F] mb-4 sm:mb-6">
            From refrigerators to ovens, we repair all your home appliances.
          </h4>
          <img
            src="https://applicare.oxaart.com/wp-content/uploads/repair_2.png"
            alt="Refrigerator"
            className="w-24 sm:w-32 h-24 sm:h-32 object-contain"
          />
        </motion.div>

        {/* Service Block 2 */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-[#EDE9FE] p-6 sm:p-8 rounded-lg shadow-md text-center flex flex-col items-center justify-between hover:shadow-xl hover:-translate-y-1 transition"
        >
          <h4 className="font-semibold text-base sm:text-lg text-[#0B0D1F] mb-4 sm:mb-6">
            Affordable and professional home appliance repair at your doorstep.
          </h4>
          <img
            src="https://applicare.oxaart.com/wp-content/uploads/repair_3.png"
            alt="Professional Repair"
            className="w-24 sm:w-32 h-24 sm:h-32 object-contain"
          />
        </motion.div>

        {/* Service Block 3 */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-[#FFEBEB] p-6 sm:p-8 rounded-lg shadow-md text-center flex flex-col items-center justify-between hover:shadow-xl hover:-translate-y-1 transition"
        >
          <h4 className="font-semibold text-base sm:text-lg text-[#0B0D1F] mb-4 sm:mb-6">
            Breathe new life into your appliances with our expert touch.
          </h4>
          <img
            src="https://applicare.oxaart.com/wp-content/uploads/gas_1.png"
            alt="Expert Repair"
            className="w-24 sm:w-32 h-24 sm:h-32 object-contain"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ServiceSection;
