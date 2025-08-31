import React from "react";
import { motion } from "framer-motion";
import { FaPhone } from "react-icons/fa";

const services = [
  {
    title: "Refrigerator Repair",
    description:
      "We diagnose and fix cooling issues, leaks, unusual noises, and more to keep your food fresh and safe.",
    iconUrl: "https://applicare.oxaart.com/wp-content/uploads/Refrigerator.png",
  },
  {
    title: "Washing Machine Repair",
    description:
      "From leaks and drainage issues to spin cycle malfunctions, we will get your laundry back on track.",
    iconUrl: "https://applicare.oxaart.com/wp-content/uploads/Laundry.png",
  },
  {
    title: "Coffee Machine Repair",
    description:
      "We diagnose and fix brewing problems, leaks, and grinding issues for your perfect cup of coffee.",
    iconUrl:
      "https://applicare.oxaart.com/wp-content/uploads/Coffee-Machine.png",
  },
  {
    title: "Television Repair",
    description:
      "Our technicians fix display, sound, and connectivity issues to make your TV picture-perfect.",
    iconUrl: "https://applicare.oxaart.com/wp-content/uploads/TV.png",
  },
  {
    title: "Air Purifier Repair",
    description:
      "We restore clean air circulation to your home by fixing filter problems, sensor malfunctions, and more.",
    iconUrl: "https://applicare.oxaart.com/wp-content/uploads/Air-purifier.png",
  },
  {
    title: "Microwave Repair",
    description:
      "To restore microwave heating, we repair the power, turntable, and other components.",
    iconUrl: "https://applicare.oxaart.com/wp-content/uploads/Microwave.png",
  },
  {
    title: "Sewing Machine Repair",
    description:
      "We fix threading, motor, and other sewing machine issues to get it stitching smoothly again.",
    iconUrl: "https://applicare.oxaart.com/wp-content/uploads/Sewing.png",
  },
  {
    title: "Dishwasher Repair",
    description:
      "We tackle leaks, cleaning issues, and strange noises so your dishes come out sparkling every time.",
    iconUrl: "https://applicare.oxaart.com/wp-content/uploads/Dishwasher.png",
  },
];

const Services = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <div className="bg-[#FCF8F6] w-full overflow-hidden">
      <section className="py-16 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block bg-[#FFC107] px-4 py-1 text-sm font-semibold text-black rounded mb-4">
            Our Services
          </span>
          <h2 className="font-extrabold text-2xl md:text-3xl leading-snug mb-4">
            Comprehensive Home Appliances <br /> Repair Services
          </h2>
          <p className="text-sm md:text-base text-gray-600">
            We offer a comprehensive range of repair services for all major home
            appliances. Whether your refrigerator is leaking, your oven isn’t
            heating, or your washing machine is making strange noises, we have
            the solution.
          </p>
        </div>

        {/* Services Zig-Zag */}
        <div className="space-y-12 md:space-y-16">
          {Array.from({ length: Math.ceil(services.length / 2) }, (_, rowIndex) => {
            const rowServices = services.slice(rowIndex * 2, rowIndex * 2 + 2);
            const reverse = rowIndex % 2 === 1;

            return (
              <div
                key={rowIndex}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
              >
                {rowServices.map((service, i) => (
                  <motion.div
                    key={i}
                    custom={i + rowIndex * 2}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className={`flex flex-col md:flex-row items-center gap-6 ${
                      reverse ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Icon */}
                    <img
                      src={service.iconUrl}
                      alt={service.title}
                      className="w-full max-w-xs md:w-52 h-auto object-contain flex-shrink-0"
                    />
                    {/* Text */}
                    <div className="text-center md:text-left flex-1">
                      <h4 className="font-bold text-xl mb-2">{service.title}</h4>
                      <p className="text-gray-600 text-base mb-3">{service.description}</p>
                      <a
                        href="#"
                        className="text-blue-700 font-semibold text-sm hover:underline"
                      >
                        Learn More »
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 md:mt-20 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-24 text-center items-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-[#FF5722] hover:bg-[#E64A19] text-white font-semibold py-3 px-8 rounded-lg transition w-full sm:w-auto"
          >
            Book Service
          </motion.button>
          <div className="flex items-center gap-2 font-semibold text-lg">
            <FaPhone className="text-orange-500 rotate-90" />
            (123) 456 7890
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
