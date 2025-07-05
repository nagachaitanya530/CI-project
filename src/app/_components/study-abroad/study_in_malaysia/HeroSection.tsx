'use client';

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

interface HeroStats {
  universities: number;
  tuitionRange: string;
  internationalStudents: string;
  workVisaYears: string;
}

const stats: HeroStats = {
  universities: 590,
  tuitionRange: "MYR 25k–73k",
  internationalStudents: "120K+",
  workVisaYears: "0.5–5 years",
};

type HeroSectionProps = {
  onConsultClick: () => void;
};

export default function HeroSection({ onConsultClick }: HeroSectionProps) {
  return (
    <section className="relative w-full bg-gradient-to-br from-[#e6f0ff] to-[#ffffff]">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-16 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
            <span className="text-[#1646b1] underline decoration-red-500 decoration-4 underline-offset-[6px]">
              Malaysia:
            </span>{" "}
            Your gateway to a brighter future
          </h1>

          <motion.button
            onClick={onConsultClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 bg-[#1646b1] text-white px-8 py-3 rounded-xl font-medium shadow-md hover:bg-blue-900 transition-all duration-300 inline-block cursor-pointer"
          >
            Free Expert Consultation
          </motion.button>
        </motion.div>

        <motion.div
          className="flex-1 flex justify-center items-end -mb-10 lg:-mb-14"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/malaysia-hero.jpg"
            alt="Students Holding Malaysian Flag"
            width={420}
            height={420}
            className="w-full max-w-[580px] h-auto object-contain drop-shadow-xl"
            priority
          />
        </motion.div>
      </div>

      <div className="bg-white w-full py-16 px-4 md:px-18 rounded-t-[50px] shadow-inner border-t border-gray-200">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Universities", value: `${stats.universities}+` },
            { label: "Annual tuition fees", value: stats.tuitionRange },
            { label: "International Students", value: stats.internationalStudents },
            { label: "Post-Study Work Visa", value: stats.workVisaYears },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ scale: 1.05 }}
              className="bg-[#f5f7fc] rounded-3xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 text-center"
            >
              <p className="text-4xl font-bold text-blue-900">{item.value}</p>
              <p className="text-gray-600 mt-2 text-sm md:text-base">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
