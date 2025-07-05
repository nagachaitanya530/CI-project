"use client";

import React, { useState } from "react";

const faqs = [
  {
    question: "Is there a new  formate of Exam?",
    answer:
      "Yes. The former version of GMAT Classic Edition (GCE) has been discontinued from 1st of February 2024. In its place, the latest version of GMAT Focus Edition (GFE) has been introduced"  },
  {
    question: "How many hours are provided by Edwise for its GMAT exam preperation coaching?",
    answer:
      "With our 100 hours of intensive GMAT prep at Edwise International, we will give you the complete training required to ace the GMAT exam.",
  },
  {
    question: "How long is my GMAT score good for?",
    answer:
      "The score is good for 5 years.",
  },
  {
    question: "What are GMAT percentile Rankings?",

    answer:
"Percentile Rankings indicate that out of a number of given test-takers, how many test takers we performed better than. For instance, 60 percentile indicates that you performed better than 60 percent of the other test-takers. Conversely, it also means that 40 % of the test takers performed better than you."
  },
  {
        question: "Though GMAT classicEDition (GCE) has stopped now, are the scores from GCE still valid?",
        answer:"Although the GMAT Classic Edition (GCE) has stopped now, its scores are valid until 5 years from the date of appointment of the exam."
  },
  {
    question:"Are the GMAT exam dates the same across the countrya?",
    answer:"No, different cities have different GMAT exam dates at their GMAT exam Center."

  }
];

const faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-white py-14 px-4 md:px-20   scroll-mt-30">
      <h2 className="text-center  text-3xl md:text-4xl font-bold mb-12 relative group">
       FAQs
      </h2>

      <div className="space-y-4  ">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300  shadow-sm rounded-3xl"
          >
        



            <button
  onClick={() => toggleFAQ(index)}
  className={`w-full flex justify-between items-center px-6 py-6 text-left text-2xl font-medium transition-colors duration-300 ${
    activeIndex === index ? "text-blue-600" : "text-black"
  }`}
>
  {faq.question}
  <span
  className={`text-2xl transform transition-transform duration-500 border-2 rounded-full  px-2.5 text-center ${
    activeIndex === index ? "rotate-45 text-blue-600" : "rotate-0"
  }`}
>
  +
</span>

</button>

            <div
              className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                activeIndex === index  ? "max-h-96 py-4" : "max-h-0"
              }`}
            >
              <p className="text-gray-700 text-xl leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default faq;
