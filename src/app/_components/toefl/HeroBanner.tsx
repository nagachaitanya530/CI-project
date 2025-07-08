"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { BookOpenText, Clock, Laptop } from "lucide-react";

const HeroBanner = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#eef3ff] to-[#fff] py-20 px-6 md:px-20 overflow-hidden">
      {/* Accent Animated Background Blob */}
      <div className="absolute top-[-60px] right-[-60px] w-[250px] h-[250px] rounded-full bg-blue-200 opacity-30 blur-3xl animate-pulse z-0" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
        {/* Left Text Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="md:w-1/2"
        >
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-[#1f3f98] leading-tight mb-4"
          >
            TOEFL Preparation
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            className="text-lg text-gray-700 mb-6"
          >
            Master the TOEFL with ETS-trained faculty, small batch coaching,
            and top-quality materials for your study abroad goals.
          </motion.p>

          {/* Animated CTA Button */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
            <button className="relative inline-block px-6 py-3 font-semibold text-white bg-[#1f3f98] rounded-md overflow-hidden group hover:shadow-lg transition">
              <span className="absolute inset-0 bg-[#18337e] transition-transform duration-300 transform translate-x-0 translate-y-0 group-hover:translate-x-full group-hover:translate-y-full"></span>
              <span className="relative z-10">Free Expert Consultation</span>
            </button>
          </motion.div>

          {/* Info Cards */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8"
          >
            {[
              {
                icon: <BookOpenText className="text-blue-700 w-5 h-5 mt-1" />,
                title: "Test Format",
                desc: "Listening, Reading, Writing, Speaking",
              },
              {
                icon: <Clock className="text-blue-700 w-5 h-5 mt-1" />,
                title: "Duration",
                desc: "Approx. 2 Hours",
              },
              {
                icon: <Laptop className="text-blue-700 w-5 h-5 mt-1" />,
                title: "Mode",
                desc: "Computer Delivered",
              },
            ].map((item, idx) => (
              <motion.div
                whileHover={{ scale: 1.03 }}
                key={idx}
                className="flex items-start gap-3 p-4 bg-white border border-[#d1d9ec] rounded-xl shadow-sm transition"
              >
                {item.icon}
                <div>
                  <p className="text-sm font-semibold text-gray-700">{item.title}</p>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Floating Image */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="md:w-1/2 flex justify-center"
        >
          <Image
            src="/toefl/hero-banner.png"
            alt="TOEFL Coaching"
            width={500}
            height={500}
            className="object-contain rounded-xl drop-shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroBanner;
