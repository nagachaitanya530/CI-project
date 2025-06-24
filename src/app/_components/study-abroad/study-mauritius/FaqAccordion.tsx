"use client";
import { useState } from "react";
import { Minus, Plus } from "lucide-react"; // Use Heroicons/other if needed

const faqs = [
  {
    question: "What are the documents required to study in Mauritius?",
    answer:
      "Documents required to study in Mauritius include the application form, proof of language proficiency, educational documents, passport, health insurance, financial documents, a statement of purpose or personal statement, letters of recommendation, and visa documents.",
  },
  {
    question: "What are the popular courses to pursue in Mauritius?",
    answer:
      "Popular courses include Business, Hospitality, Information Technology, and Engineering.",
  },
  {
    question:
      "What is the cost of acquiring a student visa in Mauritius and what is the processing time for the same?",
    answer:
      "The cost is approximately ₹2L, and the processing time is around 4 weeks.",
  },
  {
    question:
      "What are the types of scholarships in Mauritius that are available for international students?",
    answer:
      "Scholarships include government-funded, university merit-based, and third-party funded schemes.",
  },
  {
    question: "What is the cost of studying in Mauritius?",
    answer:
      "It ranges between 1.5L to 6L MUR/year depending on the course, plus living expenses.",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(-1); // Closed by default

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">FAQs</h2>
      <div className="space-y-4">
        {faqs.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`rounded-2xl border ${
                isOpen ? "border-blue-700 bg-blue-50" : "border-gray-200"
              } p-5 transition-colors duration-300`}
            >
              <button
                onClick={() => toggleIndex(index)}
                className="w-full flex justify-between items-center text-left"
              >
                <span
                  className={`font-medium ${
                    isOpen ? "text-blue-700" : "text-gray-900"
                  }`}
                >
                  {item.question}
                </span>
                {isOpen ? (
                  <Minus className="text-blue-700 w-5 h-5" />
                ) : (
                  <Plus className="text-blue-700 w-5 h-5" />
                )}
              </button>
              {isOpen && (
                <p className="mt-3 text-gray-700 text-sm sm:text-base">
                  {item.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
