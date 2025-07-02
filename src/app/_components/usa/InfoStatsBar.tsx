"use client";

import { motion, type Variants } from "framer-motion";

const stats = [
  { number: "4000+", label: "Universities" },
  { number: "$20k–$60k", label: "Annual Tuition Fees" },
  { number: "900k+", label: "International Students" },
  { number: "1–3 Years", label: "Post-Study Work" },
];

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.42, 0, 0.58, 1],
    },
  },
};

const InfoStatsBar = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      className="mt-10 md:mt-16 bg-[#e9eef6] rounded-3xl px-6 py-6 md:px-10 md:py-8 flex flex-col md:flex-row justify-between items-center text-center shadow-sm"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          variants={item}
          className={`flex-1 px-4 py-4 ${
            index < stats.length - 1
              ? "border-b md:border-b-0 md:border-r border-gray-300"
              : ""
          }`}
        >
          <h3 className="text-2xl font-bold text-[#1f3f98]">{stat.number}</h3>
          <p className="text-gray-800 font-medium mt-1">{stat.label}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default InfoStatsBar;
