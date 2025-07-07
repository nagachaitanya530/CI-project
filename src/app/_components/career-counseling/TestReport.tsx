"use client";

import React from "react";
import { MessageSquareText } from "lucide-react";
import { motion } from "framer-motion";

const points = [
  "Includes an explanation of the report and how to use it.",
  "Illustrates the scores of the aptitude, interest, and personality tests.",
  "Provides an overview of the narrative report and summary of the results.",
  "Suggests study/work options.",
  "Report consultation can be done in person, via a virtual meeting or by phone.",
  "The results are not a benchmark but an indicator which gives you a platform to work on.",
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

const DetailedTestReport = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 px-4 md:px-28 py-20 font-sans">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold text-black mb-16"
      >
        Detailed Test{" "}
        <span className="underline decoration-red-500 decoration-4 underline-offset-4">
          Report
        </span>
      </motion.h1>

      <div className="space-y-10">
        {points.map((point, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex items-start space-x-6 bg-white rounded-xl shadow-md p-6 hover:shadow-2xl transition duration-300 hover:bg-blue-100 group"
          >
            <div className="text-blue-600 mt-1 transition-transform duration-300 group-hover:scale-110">
              <MessageSquareText size={36} strokeWidth={1.5} />
            </div>
            <p className="text-lg md:text-xl text-gray-800 font-medium leading-relaxed">
              {point}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DetailedTestReport;
