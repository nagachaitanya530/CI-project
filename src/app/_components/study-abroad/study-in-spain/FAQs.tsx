"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

const faqs = [
  {
    question: "Can I study and work with my student visa?",
    answer:
      "Current legislation allows students to work while in possession of a student visa and resident permit (NIE estudiante) as long as they do not work full-time and the work does not interfere with their studies. You are allowed to work 30 hours per week when you decide to study abroad in Spain.",
  },
  {
    question:
      "Do I need to have some Spanish language skills to attend a programme?",
    answer:
      "Knowing Spanish especially for studying Master’s in Spain for Indian students is not an issue since courses are available in 100% English.",
  },
  {
    question:
      "What are the documents required to study in Spain for Indian students?",
    answer:
      "You will generally need: valid passport, offer letter, academic transcripts, financial proof, health insurance, and a student visa application form. Requirements may vary by university.",
  },
  {
    question: "Is Spain a very expensive country to study?",
    answer:
      "Spain is relatively affordable compared to other European countries. Living costs and tuition fees are manageable for international students.",
  },
  {
    question: "What is the cost of studying a Master degree in Spain?",
    answer:
      "The tuition fees for studying a Master degree in Spain is approximately between EUR 4,000 to 15,000 per year.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-12">FAQs</h2>
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border-2 rounded-xl transition-all duration-300 ${
                openIndex === index
                  ? "border-blue-600 bg-blue-50"
                  : "border-gray-200 bg-white"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between px-6 py-4 text-left"
              >
                <span
                  className={`font-semibold text-lg ${
                    openIndex === index ? "text-blue-800" : "text-gray-900"
                  }`}
                >
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="text-blue-800" />
                ) : (
                  <Plus className="text-blue-800" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-700 text-sm">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
