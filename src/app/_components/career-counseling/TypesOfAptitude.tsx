"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const data = [
  {
    number: "01",
    title: "Aptitude",
    desc: `Aptitude: valuable tool that provide insights into an individuals' abilities, strengths, personal growth and potential in various areas. It plays a crucial role in guiding career decisions, facilitating effective recruitment, enhancing personal development, and fostering success and satisfaction in education, work, and personal growth.`,
  },
  {
    number: "02",
    title: "Interest",
    desc: `An interest test, often referred to as an "interest inventory" or "interest assessment", is a tool used to identify an individual's preferences, likes, and dislikes related to various activities, subjects, and career fields. These tests are designed to assess an individual's interests, passions, and inclinations to guide them in making informed decisions about educational paths, career choices, and personal development opportunities.`,
  },
  {
    number: "03",
    title: "Personality",
    desc: `A personality test is a tool designed to assess and evaluate various aspects of an individual's personality. These tests aim to uncover patterns of behavior, preferences, and traits that characterize a person.`,
  },
  {
    number: "04",
    title: "Multiple Intelligence",
    desc: `Multiple Intelligence (MI) tests are psychological assessments designed to identify and measure an individual's strengths and preferences across various types of intelligence proposed by Howard Gardner's theory of multiple intelligence. Gardner initially identified seven types of intelligence, and later, he added two more to bring the total to nine distinct intelligence.`,
  },
];

const AssessmentScrollCards = () => {
  return (
    <div className="relative bg-white">
      {/* Section Heading */}
      <div className="px-6 md:px-24 pt-12 pb-6">
        <h2 className="text-4xl md:text-5xl font-bold">
          Types of{" "}
          <span className="underline decoration-red-500 decoration-4 underline-offset-4">
            Aptitude Tests
          </span>
        </h2>
      </div>

      <div className="px-6 md:px-24 pt-6 pb-40">
        <div className="flex flex-col md:flex-row gap-10 items-start">
          <div className="md:sticky md:top-36 md:w-1/2 w-full flex justify-center">
            <div className="relative rounded-[40px] overflow-hidden shadow-xl max-w-[520px]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#fef3f2] to-[#f5faff] z-0 rounded-[40px]" />
              <Image
                src="/aptitude.png"
                alt="student"
                width={520}
                height={520}
                className="relative z-10 object-cover"
              />
              <div className="absolute left-2 top-6 z-20">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#4f46e5"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="animate-pulse"
                >
                  <path d="M12 2l1.5 7H22l-6 5 2 7-6-4.5L6 21l2-7-6-5h8.5z"></path>
                </svg>
              </div>
              <div className="absolute right-2 bottom-6 z-20 rotate-45">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#1d4ed8"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="animate-ping"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-10 md:w-1/2">
            {data.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="rounded-3xl border border-gray-300 p-6 md:p-8 shadow-sm bg-white hover:shadow-2xl hover:scale-[1.02] transition-all duration-500"
              >
                <h2 className="text-3xl font-extrabold text-red-500 mb-2">
                  {item.number}
                </h2>
                <h3 className="text-2xl font-bold text-black mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssessmentScrollCards;
