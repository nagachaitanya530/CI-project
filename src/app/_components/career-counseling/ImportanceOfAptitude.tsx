"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const importanceCards = [
  {
    number: "01",
    title: "Identifying Career Direction",
    desc: "Helps students and professionals determine the most suitable career paths based on their natural abilities.",
    image: "/card3.jpg",
  },
  {
    number: "02",
    title: "Enhancing Core Skills",
    desc: "Pinpoints areas for skill development, empowering individuals to grow where it matters most.",
    image: "/card2.jpg",
  },
  {
    number: "03",
    title: "Understanding Personality Traits",
    desc: "Connects aptitude with personality to build a more complete personal and career profile.",
    image: "/bg.jpg",
  },
  {
    number: "04",
    title: "Academic Decision-Making",
    desc: "Assists in selecting suitable educational streams and subjects for future success.",
    image: "/step3.jpg",
  },
  {
    number: "05",
    title: "Recruitment & Job Readiness",
    desc: "Used in hiring to match candidates with roles aligned to their strengths and abilities.",
    image: "/bm.jpg",
  },
  {
    number: "06",
    title: "Interest & Aptitude Alignment",
    desc: "Combines interest profiling with aptitude to suggest meaningful study or work paths.",
    image: "/img1.jpeg",
  },
  {
    number: "07",
    title: "Global Education Fit",
    desc: "Supports abroad study planning by matching aptitude with international course demands.",
    image: "/tourisam.jpg",
  },
  {
    number: "08",
    title: "Clarity on Future Goals",
    desc: "Creates a roadmap by aligning personal strengths with short and long-term ambitions.",
    image: "/step6.jpg",
  },
];

const ImportanceSlider = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % importanceCards.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? importanceCards.length - 1 : prev - 1));
  };

  const card = importanceCards[index];

  return (
    <div className="w-full px-6 md:px-24 pt-32 pb-12 bg-white text-black">
      <motion.div
        className="mb-16 max-w-4xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="relative inline-block">
            <span className="text-black relative z-10">Importance</span>
            <span className="absolute left-0 bottom-0 w-full h-2 bg-red-500 rounded-full z-0" />
          </span>{" "}
          of Aptitude Tests
        </h2>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed mt-2">
          Aptitude tests play a significant role in various areas, including
          counseling for studying abroad, career development, recruitment, and
          personal growth. They are designed to assess an individual's inherent
          or acquired abilities, strengths, and potential in specific areas. The
          importance of aptitude tests can be highlighted through the following
          points.
        </p>
      </motion.div>

      {card && (
        <div className="w-full max-w-5xl mx-auto relative mb-14">
          <div className="relative h-[320px] md:h-[420px] overflow-hidden rounded-3xl shadow-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={card.image}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-3xl"
                />
                <div className="absolute inset-0 bg-black/40 rounded-3xl flex flex-col justify-end p-6 text-white">
                  <h3 className="text-4xl font-bold">{card.number}</h3>
                  <h4 className="text-2xl font-semibold">{card.title}</h4>
                  <p className="text-sm mt-1">{card.desc}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white active:bg-blue-800 transition-colors"
            >
              <ArrowLeft />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white active:bg-blue-800 transition-colors"
            >
              <ArrowRight />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImportanceSlider;
