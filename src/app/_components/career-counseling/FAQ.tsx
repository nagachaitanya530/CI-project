'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type FAQ = {
  question: string;
  answer: string;
};

const faqData: FAQ[] = [
  {
    question: 'When should we take the Academic Pathway Program?',
    answer:
      'The ideal time to take the Academic Pathway Program is during high school or early college years to better align academic choices with career goals.',
  },
  {
    question: 'How long does it take to generate the test report?',
    answer:
      'The report is usually generated within 2-3 working days after completing the assessment.',
  },
  {
    question: 'How do the tests help in career planning?',
    answer:
      'The tests assess interests, aptitudes, and personality traits to provide career recommendations aligned with your strengths and preferences.',
  },
  {
    question: 'Are tests important for career counseling?',
    answer:
      'Yes, they provide objective insights that guide students and professionals in making informed career decisions.',
  },
  {
    question: 'What is the main objective of career counseling for students?',
    answer:
      'The main goal is to help students understand their abilities and interests, and to guide them towards suitable academic and career options.',
  },
  {
    question: 'Can the test be taken online?',
    answer:
      'Yes, the career assessment tests are available online and can be taken from the comfort of your home.',
  },
  {
    question: 'How long does it take to complete the test?',
    answer:
      'On average, the test takes about 45 to 60 minutes to complete.',
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
