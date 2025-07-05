"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is the difference between IELTS / PTE / TOEFL / DUOLINGO?",
    answer:
      "Each test has a different format and scoring system. TOEFL and IELTS are widely accepted for study abroad. PTE and Duolingo are newer alternatives with faster results and more flexibility, but acceptance varies by university.",
  },
  {
    question: "How many hours of coaching is given for IELTS / PTE / TOEFL / DUOLINGO?",
    answer:
      "Edwise provides 30 hours of comprehensive coaching for each of these exams, delivered by trained and certified faculty.",
  },
  {
    question: "What modules do I have to study as part of my TOEFL exam preparation?",
    answer:
      "You will be trained in all four modules – Reading, Listening, Writing, and Speaking – with mock tests and skill-building strategies.",
  },
  {
    question: "Does Edwise assist with registration and payments for the exams?",
    answer:
      "Yes, Edwise helps you with exam registration, payment process, and documentation required for booking your TOEFL exam.",
  },
  {
    question: "How to prepare for TOEFL?",
    answer:
      "Join structured training programs, practice full-length mock tests, focus on core skills, and use courseware like Princeton for in-depth preparation.",
  },
  {
    question: "What is the cost of score reporting for TOEFL?",
    answer:
      "The fee for additional score reporting is ₹1,950 per university or institution.",
  },
  {
    question: "Is basic English grammar included in the TOEFL exam coaching?",
    answer:
      "Yes, essential grammar is covered as part of the course to support strong foundational skills in all four modules.",
  },
];

const TOEFLFAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="scroll-mt-32 py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1f3f98] mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl shadow-sm"
            >
              <button
                onClick={() => toggleIndex(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-medium text-gray-800 focus:outline-none"
              >
                {faq.question}
                <ChevronDown
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-700 text-base">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TOEFLFAQs;
