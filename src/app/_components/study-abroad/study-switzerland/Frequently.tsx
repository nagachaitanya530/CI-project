'use client';

import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';

const faqs = [
  {
    question: 'How much does it cost to study in Switzerland?',
answer:
      'The total cost including living expenses to study in Switzerland may be around CHF 19,000 per year. To view the complete cost breakdown, refer to the cost section above.',
  },
  {
    question: 'Can Indian students study in Switzerland?',
answer:
  "Yes, Indian students can study abroad in Switzerland. The country offers plenty of options to study in Switzerland for Indian students. You can contact us and we will guide you through the entire process.",
  },
  {
    question: 'How to get admission to the universities in Switzerland?',
answer:
      'With the help of our expert counselors the student will be able to shortlist and apply to their desired university. After getting the offer letter from the university and meeting the student visa requirements, the student will be ready to start their study abroad journey in Switzerland.',
  },
  {
    question: 'Can I study in Switzerland without IELTS?',
answer:
      'The prerequisites for applying to and being admitted to Swiss universities depend on the course and university you select.',
  },
  {
    question: "How much can I earn in Switzerland while working part-time?",
    answer:
      "In Switzerland, an international student can typically make between CHF 2,200 and CHF 2,800 per month.",
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
                  ? 'border-blue-600 bg-blue-50'
                  : 'border-gray-200 bg-white'
              }`}
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between px-6 py-4 text-left"
              >
                <span
                  className={`font-semibold text-lg ${
                    openIndex === index ? 'text-blue-800' : 'text-gray-900'
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


