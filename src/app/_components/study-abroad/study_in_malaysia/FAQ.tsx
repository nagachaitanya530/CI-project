'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type FAQ = {
  question: string;
  answer: string;
};

const faqData: FAQ[] = [
  {
    question: 'What are the documents required to study in Malaysia?',
    answer:
      'You need a valid passport, academic transcripts, proof of English proficiency (IELTS/TOEFL), offer letter from a Malaysian university, and visa documents.',
  },
  {
    question: 'What is the cost of studying a Master’s degree in Malaysia?',
    answer:
      'Master’s programs in Malaysia typically cost between MYR 10,000 and 30,000 per year depending on the university and program.',
  },
  {
    question: 'What scholarships are available for international students to study in Malaysia?',
    answer:
      'Available scholarships include the Malaysian International Scholarship (MIS), university-specific scholarships, and research assistantships.',
  },
  {
    question: 'What is the quality of education in Malaysia?',
    answer:
      'Malaysia offers internationally recognized degrees, often in collaboration with UK, Australian, and other global institutions.',
  },
  {
    question: 'What are the popular courses offered by Malaysian universities?',
    answer:
      'Popular courses include Business Administration, Engineering, Medicine, IT, and Hospitality Management.',
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-white to-blue-100 px-6 py-20">
      <h2 className="text-5xl font-bold text-center mb-16 text-gray-800">
        FAQs
      </h2>
      <div className="w-[95%] max-w-7xl mx-auto space-y-8">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="rounded-2xl border border-blue-300 bg-white p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-semibold text-gray-900 max-w-[90%]">
                {faq.question}
              </h3>
              <button
                onClick={() => toggle(index)}
                className="w-11 h-11 rounded-full border border-blue-500 text-blue-600 text-2xl font-bold flex items-center justify-center hover:bg-blue-50 transition duration-300"
                aria-label="Toggle Answer"
              >
                {openIndex === index ? '−' : '+'}
              </button>
            </div>
            <AnimatePresence>
              {openIndex === index && (
                <motion.p
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="mt-6 text-lg text-gray-700 leading-relaxed"
                >
                  {faq.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
