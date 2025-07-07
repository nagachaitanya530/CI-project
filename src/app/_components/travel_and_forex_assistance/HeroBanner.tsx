"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["Travel", "Forex"];

export default function HeroBanner() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gradient-to-r from-[#eaf4fd] to-[#f8fbff] py-24 md:py-28 text-center overflow-hidden">

      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 pointer-events-none"></div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-[#1f3f98] flex flex-wrap justify-center gap-2 break-words leading-tight">
          <AnimatePresence mode="wait">
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="inline-block"
            >
              {words[index]}
            </motion.span>
          </AnimatePresence>
          <span>Assistance</span>
        </h1>

        <p className="mt-5 sm:mt-6 text-gray-600 text-base sm:text-lg md:text-xl max-w-xl mx-auto px-2">
          Simplifying your travel and currency exchange for overseas studies.
        </p>

        <button className="mt-8 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-[#1f3f98] text-white text-sm sm:text-base font-semibold hover:bg-[#143079] transition shadow-md hover:shadow-lg">
          Free Expert Consultation
        </button>
      </div>
    </section>
  );
}
