"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

<<<<<<< HEAD
type Props = {
  onConsultClick: () => void;
};

const HeroSection = ({ onConsultClick }: Props) => {
  return (
    <div className="w-full">
      <div className="relative min-h-screen w-full overflow-hidden flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-24 py-20 bg-gradient-to-br from-[#fdf2f8] via-[#ecfdf5] via-40% to-[#fefce8]">
=======
const HeroSection = () => {
  return (
    <div className="w-full">
      {/* ========== Hero Section ========== */}
      <div className="relative min-h-screen w-full overflow-hidden flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-24 py-20 bg-gradient-to-br from-[#fdf2f8] via-[#ecfdf5] via-40% to-[#fefce8]">
        {/* Extra color blobs for softness and elegance */}
>>>>>>> cost-of-studying-usa
        <div className="absolute w-[400px] h-[400px] bg-[#ffe4e6] rounded-full top-[-100px] left-[-120px] blur-[120px] opacity-50 z-0"></div>
        <div className="absolute w-[350px] h-[350px] bg-[#dbeafe] rounded-full bottom-[-150px] right-[-100px] blur-[100px] opacity-40 z-0"></div>
        <div className="absolute w-[300px] h-[300px] bg-[#fce7f3] rounded-full top-[50px] right-[150px] blur-[90px] opacity-40 z-0"></div>

<<<<<<< HEAD
=======
        {/* Left Text Section */}
>>>>>>> cost-of-studying-usa
        <motion.div
          className="md:w-1/2 text-center md:text-left z-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-[32px] md:text-[50px] font-extrabold text-gray-900 leading-tight mb-6 relative inline-block">
            Seamless{" "}
            <span className="relative inline-block">
              <span className="absolute -bottom-2 left-0 w-full h-2 bg-red-500 rounded-full -z-10" />
              Admission
            </span>{" "}
            Journey
          </h1>

<<<<<<< HEAD
          <button
            onClick={onConsultClick}
            className="mt-8 px-7 py-3 bg-gradient-to-r from-blue-700 to-purple-600 text-white font-semibold rounded-xl shadow-md hover:scale-105 transition-all duration-300"
          >
=======
          <button className="mt-8 px-7 py-3 bg-gradient-to-r from-blue-700 to-purple-600 text-white font-semibold rounded-xl shadow-md hover:scale-105 transition-all duration-300">
>>>>>>> cost-of-studying-usa
            Free Expert Consultation
          </button>
        </motion.div>

<<<<<<< HEAD
=======
        {/* Right Image with 3D Glow Line */}
>>>>>>> cost-of-studying-usa
        <motion.div
          className="md:w-1/2 flex flex-col items-center z-10"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image
<<<<<<< HEAD
            src="/man-uni.png"
            alt="Admission Guidance"
=======
            src="/hero.png"
            alt="Career Counselor"
>>>>>>> cost-of-studying-usa
            width={460}
            height={460}
            className="object-contain drop-shadow-xl"
          />
<<<<<<< HEAD
=======

          {/* Elegant Glow Line */}
>>>>>>> cost-of-studying-usa
          <div className="w-[70%] h-[6px] mt-4 bg-gradient-to-r from-[#c7f9cc] via-[#fff] to-[#ffccd5] rounded-full shadow-inner"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
