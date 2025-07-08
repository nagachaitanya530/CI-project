"use client";

import React, { useState } from "react";

const faqs = [
  {
    question: "Who is this course best suited for?",
    answer:
      "This course is perfect for beginners and intermediate learners who want to improve their English communication skills for personal, academic, or professional purposes.",
  },
  {
    question: "Are the classes live or pre-recorded?",
    answer:
      "All classes are conducted live by experienced instructors to provide interactive learning and real-time feedback.",
  },
  {
    question: "Will I receive a certificate after completion?",
    answer:
      "Yes, a certificate will be awarded after successfully completing the course, which can be added to your resume or LinkedIn profile.",
  },
  {
    question: "Can I access the course on mobile?",
    answer:
      "Absolutely! The course platform is fully responsive and can be accessed via desktop, tablet, or smartphone.",
  },
];

const FAQsSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-14 px-4 md:px-20">
      <h2 className="text-center text-[#284c87] text-3xl md:text-4xl font-bold mb-12 relative group">
        Frequently Asked Questions
        <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-[2px] w-0 bg-[#284c87] group-hover:w-1/2 transition-all duration-500 rounded"></span>
      </h2>

      <div className="space-y-4 max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg shadow-sm"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left text-[#284c87] font-medium text-lg hover:bg-gray-100 transition"
            >
              {faq.question}
              <span className="text-2xl transition-transform duration-300">
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>
            <div
              className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                activeIndex === index ? "max-h-96 py-4" : "max-h-0"
              }`}
            >
              <p className="text-gray-700 text-sm leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default FAQsSection;
