"use client";

import React, { useState } from "react";

const faqs = [
  {
    question: "Why aren’t GMAT and GRE scores required by all Australian universities?",
    answer:
      "The reason why universities in Australia do not always ask for GMAT, GRE, etc., is because these exams are for American universities, so students have to give these tests to be judged by American standar. Australia and India recognise each other's degrees; however, specific universities may ask the same for assessing the student."  },
  {
    question: "Which is the best university in Australia?",
    answer:
      "One cannot classify any specific institution as the best there are plenty of worldclass universities in Australia for international students and all are regulated under the Vice Chancellors Committee, which follows the code of ethics. If you wish to study abroad in Australia, it is advisable to follow market trends like MBAs, BBAs, MIT, etc., but it would be unfair to judge universities as one can only compare the course structure and faculty.",
  },
  {
    question: "How long does the visa application process take?",
    answer:
      "On average, the time taken by the Australian High Commission for the visa procedure is between 4 and 12 weeks, depending on the candidate’s background. Students can start applying for the visa at least 3 months in advance of their course commencement. Our visa experts will make sure that your entire visa process is hassle-free.",
  },
  {
    question: "How do I know if I am eligible for Permanent Residency (PR)?",

    answer:
"As a student, one needs to cover up to 60 points to be eligible for permanent residency (PR). The points can be gained through a combination of age, program chosen, English language proficiency, duration of the program, working part-time and studying in a regional area."
  },
  {
        question: "What are the visa possibilities for my spouse or dependent?",
        answer:"A spouse or dependent of a student visa holder in Australia can get a dependent visa and a valid work permit for the same duration as the primary applicant for the visa. The visa is applicable only to students pursuing a master's or higher degree."
  }
];

const faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-14 px-4 md:px-20">
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
