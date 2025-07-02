"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  onConsultClick: () => void;
};

const HeroSection = ({ onConsultClick }: Props) => {
  return (
    <div className="w-full">
      {/* ========== Hero Section ========== */}
      <div className="relative min-h-screen w-full overflow-hidden flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-24 py-20 bg-gradient-to-br from-[#fdf2f8] via-[#ecfdf5] via-40% to-[#fefce8]">
        {/* Soft glow blobs */}
        <div className="absolute w-[400px] h-[400px] bg-[#ffe4e6] rounded-full top-[-100px] left-[-120px] blur-[120px] opacity-50 z-0"></div>
        <div className="absolute w-[350px] h-[350px] bg-[#dbeafe] rounded-full bottom-[-150px] right-[-100px] blur-[100px] opacity-40 z-0"></div>
        <div className="absolute w-[300px] h-[300px] bg-[#fce7f3] rounded-full top-[50px] right-[150px] blur-[90px] opacity-40 z-0"></div>

        {/* Left Text */}
        <motion.div
          className="md:w-1/2 text-center md:text-left z-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-[32px] md:text-[50px] font-extrabold text-gray-900 leading-tight mb-6 relative inline-block">
            <span className="relative">
              <span className="absolute -bottom-2 left-0 w-full h-2 bg-red-500 rounded-full -z-10" />
              Career Counseling
            </span>
            <br />
            <span className="font-medium text-gray-800">and Aptitude Test</span>
          </h1>

          {/* ✅ Triggers modal */}
          <button
            onClick={onConsultClick}
            className="mt-8 px-7 py-3 bg-gradient-to-r from-blue-700 to-purple-600 text-white font-semibold rounded-xl shadow-md hover:scale-105 transition-all duration-300"
          >
            Free Expert Consultation
          </button>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="md:w-1/2 flex flex-col items-center z-10"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image
            src="/hero.png"
            alt="Career Counselor"
            width={460}
            height={460}
            className="object-contain drop-shadow-xl"
          />

          <div className="w-[70%] h-[6px] mt-4 bg-gradient-to-r from-[#c7f9cc] via-[#fff] to-[#ffccd5] rounded-full shadow-inner"></div>
        </motion.div>
      </div>

      {/* ========== Info Section ========== */}
      <div className="px-6 md:px-24 py-16 bg-gradient-to-b from-white via-[#fef9f9] to-[#f3faf7]">
        <div className="space-y-12">
          <div className="bg-white/70 backdrop-blur-md border border-gray-200 rounded-3xl p-6 md:p-10 shadow-md hover:shadow-lg transition duration-300">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Career Counseling
            </h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Career counseling, also known as career guidance or career coaching, is a process that assists individuals in making informed decisions about their career development and future employment opportunities.
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-md border border-gray-200 rounded-3xl p-6 md:p-10 shadow-md hover:shadow-lg transition duration-300">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Academic Pathway Planning
            </h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Academic Pathway Planning is a structured process that helps students map out their educational journey to achieve career goals. Our expert counselors for study abroad will then assist you in setting objectives, selecting courses and create a roadmap for success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
