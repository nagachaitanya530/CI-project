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
    <section className="relative bg-gradient-to-r from-[#eaf4fd] to-[#f8fbff] py-28 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-[#1f3f98] flex items-center justify-center gap-2">
          <AnimatePresence mode="wait">
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              {words[index]}
            </motion.span>
          </AnimatePresence>
          <span>Assistance</span>
        </h1>
        <p className="mt-6 text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
          Simplifying your travel and currency exchange for overseas studies.
        </p>
        <button className="mt-8 px-8 py-4 rounded-full bg-[#1f3f98] text-white text-sm md:text-base font-semibold hover:bg-[#143079] transition shadow-md hover:shadow-lg">
          Free Expert Consultation
        </button>
      </div>

      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 pointer-events-none"></div>
    </section>
  );
}
