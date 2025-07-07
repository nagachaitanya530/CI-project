"use client";

import React from "react";
import { motion } from "framer-motion";

const ProcessOfTesting = () => {
  return (
    <div className="bg-[#163887] text-white py-20 px-8 md:px-28 rounded-[40px] mx-4 md:mx-12 mb-24">
<<<<<<< HEAD
=======
      {/* Heading with animation */}
>>>>>>> cost-of-studying-usa
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Process Of{" "}
        <span className="text-white underline decoration-red-500 decoration-4 underline-offset-4">
          Testing
        </span>
      </motion.h2>

<<<<<<< HEAD
=======
      {/* Animated Grid */}
>>>>>>> cost-of-studying-usa
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-black">
        {[
          {
            title: "Online Testing",
            desc: "Take the test from the comfort of your home eliminating the need to travel anywhere for the assessment.",
          },
          {
            title: "Test Duration",
            desc: "The aptitude test is designed to be completed in approximately 2.5 hours at a leisurely pace.",
          },
          {
            title: "Expert Review",
            desc: "The test report is carefully checked and then shared with the student by a clinical psychologist.",
          },
        ].map((box, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition duration-300"
          >
            <h3 className="text-2xl font-bold mb-4">{box.title}</h3>
            <p className="text-lg leading-relaxed">{box.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProcessOfTesting;
