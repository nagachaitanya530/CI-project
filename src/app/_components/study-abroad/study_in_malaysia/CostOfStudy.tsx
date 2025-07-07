"use client";

import React from "react";
import { motion } from "framer-motion";

export default function CostOfStudyingMalaysia() {
  return (
    <section className="py-28 px-6 lg:px-24 bg-blue-50 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        <div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
             <span className="underline decoration-red-500 underline-offset-[6px]">Cost Of Studying</span>
          </h2>
          <h3 className="text-4xl font-medium text-gray-800 mt-3 mb-6">
            In Malaysia
          </h3>
          <p className="text-gray-700 text-xl max-w-2xl leading-relaxed">
            The <strong>cost of studying in Malaysia</strong> for international students depends on several factors, including the <strong>institution, program of study, location,</strong> and <strong>available funding opportunities</strong>. Additionally, <strong>living expenses</strong> such as <strong>rent, utilities, and recreational activities</strong> play a significant role in the overall cost.
          </p>
        </div>

        <div className="space-y-8">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white p-8 rounded-3xl shadow-md transition duration-300"
          >
            <p className="text-blue-900 text-xl font-bold mb-4">
              Tuition Fees (Average per annum)
            </p>
            <div className="flex justify-between font-semibold text-gray-800 text-lg">
              <span>Bachelor’s</span>
              <span>MYR 25,000 – 73,000</span>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white p-8 rounded-3xl shadow-md transition duration-300"
          >
            <div className="flex justify-between font-semibold text-gray-800 text-lg">
              <span>Master’s</span>
              <span>MYR 27,000 – 47,000</span>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white p-8 rounded-3xl shadow-md transition duration-300"
          >
            <p className="text-blue-900 text-xl font-bold mb-4">
              Living Expenses (Average per annum)
            </p>
            <div className="text-right font-semibold text-gray-800 text-lg">
              Approx. MYR 18,000
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white p-8 rounded-3xl shadow-md transition duration-300"
          >
            <p className="text-blue-900 text-xl font-bold mb-4">
              Accommodation (Average per month)
            </p>
            <div className="space-y-4 font-semibold text-gray-800 text-lg">
              <div className="flex justify-between">
                <span>On-Campus</span>
                <span>MYR 200 – 600</span>
              </div>
              <div className="flex justify-between">
                <span>Off-Campus</span>
                <span>MYR 500 – 1,500</span>
              </div>
              <div className="flex justify-between">
                <span>Homestay</span>
                <span>MYR 800 – 1,200</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
