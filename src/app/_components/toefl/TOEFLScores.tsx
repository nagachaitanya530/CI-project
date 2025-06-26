"use client";

import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const scoreData = [
  {
    title: "Reading",
    scoreRange: "0 - 30",
    description: "Assesses ability to understand academic texts and passages.",
  },
  {
    title: "Listening",
    scoreRange: "0 - 30",
    description: "Measures ability to understand spoken English in lectures and conversations.",
  },
  {
    title: "Speaking",
    scoreRange: "0 - 30",
    description: "Evaluates spoken English skills through structured tasks.",
  },
  {
    title: "Writing",
    scoreRange: "0 - 30",
    description: "Tests ability to present ideas in written English clearly and logically.",
  },
  {
    title: "Total Score",
    scoreRange: "0 - 120",
    description: "Sum of all four sections. Used for admissions and evaluation.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const TOEFLScores = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  React.useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  return (
    <section id="scores" className="scroll-mt-32 py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1f3f98]">
            TOEFL Scoring System
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Understand how each section of the TOEFL is scored and how it contributes to your total score.
          </p>
        </div>

        <div ref={ref} className="space-y-8">
          {scoreData.map((item, index) => (
            <motion.div
              key={item.title}
              custom={index}
              initial="hidden"
              animate={controls}
              variants={cardVariants}
              className="bg-blue-50/30 border border-blue-100 rounded-2xl shadow-md p-6 md:p-8"
            >
              <h3 className="text-xl font-semibold text-[#1f3f98] mb-2">{item.title}</h3>
              <p className="text-gray-700 font-medium mb-1">
                <strong>Score Range:</strong> {item.scoreRange}
              </p>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TOEFLScores;
