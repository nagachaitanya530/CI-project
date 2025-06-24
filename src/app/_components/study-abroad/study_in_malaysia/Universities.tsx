"use client";

import React from "react";
import { motion } from "framer-motion";

const universities = [
  {
    name: "Heriot-Watt (Malaysia)",
    popularFor: "Engineering",
    rank: "235",
  },
  {
    name: "Swinburne University of Technology (Malaysia)",
    popularFor: "Business",
    rank: "285",
  },
  {
    name: "SEGi college",
    popularFor: "Business, Accounting and Allied Health Sciences",
    rank: "301–350",
  },
  {
    name: "Asia Pacific Institute of Technology and Innovation",
    popularFor: "Digital Technology",
    rank: "621–630",
  },
  {
    name: "University of Malaya",
    popularFor: "Computer Science",
    rank: "65",
  },
  {
    name: "Multimedia University (MMU)",
    popularFor: "Multimedia and Engineering",
    rank: "801–850",
  },
];

export default function UniversitiesMalaysia() {
  return (
    <section className="py-20 px-6 lg:px-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          <span className="underline decoration-red-500 underline-offset-[6px]">
            List Of Universities
          </span>{" "}
          In Malaysia
        </h2>
        <p className="text-gray-700 text-lg mt-4 max-w-2xl mx-auto">
          Malaysia is a top choice for international students seeking a prestigious education.
          Here are some top universities where we have successfully placed students.
        </p>
      </div>

      <div className="flex gap-6 overflow-x-auto pb-8 px-2 scrollbar-hide">
        {universities.map((uni, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{ scale: 1.05, rotate: 0.5 }}
            className="min-w-[300px] w-[320px] h-[480px] rounded-3xl bg-white shadow-xl p-6 flex flex-col justify-evenly hover:shadow-2xl border border-transparent hover:border-blue-200 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="text-3xl">🎓</div>
              <h3 className="text-lg font-bold text-gray-900 leading-snug">
                {uni.name}
              </h3>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-3">
                <div className="text-xl mt-1">💡</div>
                <div>
                  <p className="text-sm text-gray-500">Popular For</p>
                  <p className="text-base font-semibold text-gray-800 leading-tight">
                    {uni.popularFor}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-xl mt-1">📍</div>
                <div>
                  <p className="text-sm text-gray-500">QS World Ranking</p>
                  <p className="text-base font-semibold text-gray-800 leading-tight">
                    {uni.rank}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 text-sm text-gray-600 italic leading-relaxed">
              🌏 Experience vibrant campus life, modern facilities, and diverse opportunities in the heart of Malaysia.
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
