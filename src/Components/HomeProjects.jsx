import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    image: "https://applicare.oxaart.com/wp-content/uploads/repairman-checking-professional-coffee-maker-in-cafe-768x512.jpg",
    alt: "Coffee Machine Repair",
    title: "Coffee Machine Repair",
  },
  {
    image: "https://applicare.oxaart.com/wp-content/uploads/repairman-using-tools-to-fix-oven-768x512.jpg",
    alt: "Oven Repair",
    title: "Microwave Overhaul",
  },
  {
    image: "https://applicare.oxaart.com/wp-content/uploads/joyful-young-man-fixing-fridge-in-kitchen-768x512.jpg",
    alt: "Fridge Repair",
    title: "Fridge Service",
  },
  {
    image: "https://applicare.oxaart.com/wp-content/uploads/working-man-plumber-repairs-a-washing-machine-768x511.jpg",
    alt: "Washing Machine Repair",
    title: "Washer Repair",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const FeaturedProjects = () => {
  return (
    <section className="w-full bg-[#FCF8F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16">
        {/* Title & Subtitle */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block bg-[#FFC107] text-black font-semibold px-4 py-1 rounded mb-3 sm:mb-4">
            Featured Projects
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 sm:mb-6">
            Our Featured Showcase of Successful Projects
          </h2>
          <p className="text-gray-700 text-sm sm:text-base">
            Discover how Applicare has helped countless households with their appliance repair needs. Browse our recent projects to see the quality and expertise that define our services.
          </p>
        </motion.div>

        {/* Project Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-md cursor-pointer group"
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
            >
              <motion.img
                src={project.image}
                alt={project.alt}
                className="w-full h-64 sm:h-56 md:h-64 lg:h-72 object-cover transition-transform duration-300"
                initial={{ scale: 1 }}
                whileInView={{ scale: 1.05 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-yellow-400 via-yellow-400/90 to-transparent p-3 opacity-0 group-hover:opacity-100 transition duration-300">
                <p className="text-black font-semibold text-sm sm:text-base">{project.title}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-0"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.a
            href="/"
            className="bg-[#FF5722] hover:bg-[#E64A19] text-white font-semibold py-3 px-8 rounded w-full sm:w-auto text-center"
            whileHover={{ scale: 1.05 }}
          >
            Book Service
          </motion.a>
          <motion.a
            href="/"
            className="font-semibold text-blue-900 hover:underline text-base"
            whileHover={{ scale: 1.05 }}
          >
            View All Projects &raquo;
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
