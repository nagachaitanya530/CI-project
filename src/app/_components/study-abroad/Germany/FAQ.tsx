"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react"; // Assuming you're using lucide-react for icons

const faqs = [
  {
    question: "What is the cost of studying in Germany?",
    answer:
      "The total cost of studying in Germany including living expenses may be around EUR 20,000 per year. To view the complete breakdown, refer to the cost section above.",
  },
  {
    question: "How is life in Germany for Indian students?",
    answer:
      "Germany is renowned for its excellence in engineering, technology, and natural sciences, and the universities in Germany are recognized for the exceptional quality of education that they provide. This along with a high standard of living and a growing Indian community makes Germany an ideal study destination for Indian students.",
  },
  {
    question: "Is a medical test required for getting a student visa in Germany?",
    answer:
      "A medical test is not required to study abroad in Germany. Students can get approved for a German student visa without the results of a medical examination.",
  },
  {
    question: "What is the best way to pursue a Master’s in Germany for Indian students?",
    answer:
      "There are plenty of options for selecting universities in Germany for a Master’s degree. As one of India's leading education consultants we can guide you in selecting the best postgraduate course based on your specific needs and in accordance with the existing trends in the international job market.",
  },
  {
    question: "Is it compulsory to be proficient at German language in order to study in Germany?",
    answer:
      "No, it's not compulsory. Many universities in Germany offer programs in English, and proficiency in German is not required for admission.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">FAQs</h2>

      {faqs.map((faq, index) => (
        <div
          key={index}
          className="bg-white border border-gray-200 rounded-3xl mb-4 shadow-sm transition-all duration-300"
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="flex justify-between items-center w-full text-left p-5"
          >
            <span className="text-xl font-semibold text-gray-900">
              {faq.question}
            </span>
            <span className="text-blue-700">
              {openIndex === index ? <Minus /> : <Plus />}
            </span>
          </button>
          {openIndex === index && (
            <div className="px-5 pb-5 text-gray-700 text-lg leading-relaxed">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
