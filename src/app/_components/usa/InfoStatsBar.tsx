"use client";

import { motion } from "framer-motion";

const InfoStatsBar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mt-10 md:mt-16 bg-[#e9eef6] rounded-3xl px-6 py-6 md:px-10 md:py-8 flex flex-col md:flex-row justify-between items-center text-center shadow-sm"
    >
      <div className="flex-1 px-4 border-b md:border-b-0 md:border-r border-gray-300 py-4">
        <h3 className="text-2xl font-bold text-[#1f3f98]">4000+</h3>
        <p className="text-gray-800 font-medium mt-1">Universities</p>
      </div>
      <div className="flex-1 px-4 border-b md:border-b-0 md:border-r border-gray-300 py-4">
        <h3 className="text-2xl font-bold text-[#1f3f98]">$20k–$60k</h3>
        <p className="text-gray-800 font-medium mt-1">Annual tuition fees</p>
      </div>
      <div className="flex-1 px-4 border-b md:border-b-0 md:border-r border-gray-300 py-4">
        <h3 className="text-2xl font-bold text-[#1f3f98]">900k+</h3>
        <p className="text-gray-800 font-medium mt-1">International Students</p>
      </div>
      <div className="flex-1 px-4 py-4">
        <h3 className="text-2xl font-bold text-[#1f3f98]">1–3 Years</h3>
        <p className="text-gray-800 font-medium mt-1">Post-Study Work</p>
      </div>
    </motion.div>
  );
};

export default InfoStatsBar;
