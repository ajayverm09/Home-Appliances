import React from "react";
import { motion } from "framer-motion";

const CommentForm = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <motion.div
      className="bg-[#f7f5ff] p-4 sm:p-6 md:p-8 mt-5 max-w-xl sm:max-w-2xl mx-auto rounded-lg shadow"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Heading */}
      <motion.h2
        className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        custom={0}
        viewport={{ once: true }}
      >
        Leave a Reply
      </motion.h2>

      <motion.p
        className="text-gray-600 mb-4 sm:mb-6 text-xs sm:text-sm"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        custom={1}
        viewport={{ once: true }}
      >
        Your email address will not be published. Required fields are marked{" "}
        <span className="text-red-500">*</span>
      </motion.p>

      {/* Form */}
      <form className="space-y-4 sm:space-y-5">
        {[
          { label: "Comment", type: "textarea", required: true, rows: 5 },
          { label: "Name", type: "text", required: true },
          { label: "Email", type: "email", required: true },
          { label: "Website", type: "url", required: false },
        ].map((field, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={i + 2}
            viewport={{ once: true }}
          >
            <label className="block text-gray-700 font-medium mb-1 sm:mb-2 text-sm sm:text-base">
              {field.label} {field.required && <span className="text-red-500">*</span>}
            </label>
            {field.type === "textarea" ? (
              <textarea
                rows={field.rows}
                className="w-full p-3 sm:p-4 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#f7f5ff] resize-none text-sm sm:text-base"
              ></textarea>
            ) : (
              <input
                type={field.type}
                className="w-full p-3 sm:p-4 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#f7f5ff] text-sm sm:text-base"
              />
            )}
          </motion.div>
        ))}

        {/* Submit Button */}
        <motion.button
          type="submit"
          className="bg-orange-600 text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-md hover:bg-orange-700 transition w-full sm:w-auto"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={6}
          viewport={{ once: true }}
        >
          Post Comment
        </motion.button>
      </form>
    </motion.div>
  );
};

export default CommentForm;
