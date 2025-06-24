"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
  "What are the top universities in the USA for international students?",
  "Can I get financial assistance to study in the USA?",
  "Should I apply only to the top ten universities?",
  "Do universities in USA accept only TOEFL or can a student also take IELTS?",
  "I have completed 15 years of education in India. Can I get admission to an MBA program directly in the USA?",
  "What are the top reasons to study in the USA as an international student?",
  "What are the eligibility requirements to study in the USA from India?",
  "How much does it cost to study in the USA for Indian students?",
  "What are the popular courses to study in the USA?",
  "What are the visa requirements for studying in the USA?",
  "Are scholarships available for international students in the USA?",
  "Can I work while studying in the USA as an international student?",
  "How do I choose the right university to study in the USA?",
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="bg-white py-20 px-4 lg:px-24">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">
          <span className="underline decoration-red-500 decoration-2 underline-offset-5">
            Frequently Asked Questions
          </span>
        </h2>
        <p className="text-sm md:text-base text-gray-600 mt-3">
          Everything you need to know before studying in the USA.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqData.map((question, idx) => (
          <div
            key={idx}
            className="border border-gray-200 rounded-xl bg-gray-50 overflow-hidden shadow-sm"
          >
            <button
              onClick={() => toggleFAQ(idx)}
              className="flex justify-between items-center w-full px-5 py-4 text-left text-gray-800 font-medium hover:bg-gray-100"
            >
              {question}
              <ChevronDown
                className={`transition-transform duration-200 w-5 h-5 ${
                  openIndex === idx ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {openIndex === idx && (
              <div className="px-5 pb-4 text-sm text-gray-600">
                <p>

                  This will depend on your profile and the university's criteria. Contact our
                  counselors for personalized guidance.
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
