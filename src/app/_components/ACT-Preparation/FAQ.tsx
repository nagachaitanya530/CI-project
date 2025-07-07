"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react"; // Make sure lucide-react is installed

const faqs = [
  {
    question: "Does ACT offer both Computer and Pen & Paper Test?",
    answer:
      "ACT offers both the test while registering for test.",
  },
  {
    question: "How many days will be taking to get results for ACT test?",
    answer:
      "From 2 days –8 weeks after the test date.",
  },
  {
    question: "What are the materials made available for the ACT coaching provided by Edwise?",
    answer:
      "The Official ACT Prep Guide 2023-2024 Edition will be provided as courseware.",
  },
  {
    question: "Test Prep for ACT?",
    answer:
      "The Official ACT Prep Guide 2023-2024 Edition September, October, December, February, April, June, and July.",
  },
  {
    question: "How many times in a calendar year ACT Exams are condutced.",
    answer:
      "ACT exams are conducted 7 times in a year",
  },
  {
    question: "What is a good score on the ACT?",
    answer:
      "The maximum score for each of the four tests is 36",
  },
  {
    question: "What is the ACT exam fees in India?",
    answer:
      "The ACT exam fees will be different for the one with the writing aspect and for the one without the writing aspect. The full ACT (with writing) will cost you $206.50 to take the test. The ACT exam fee will be $181.50 without the writing part.",
  },
  {
    question: "Will the two ACT test formats cost the same?",
    answer:
      "Yes. Whether you choose to test online or using the paper version, your cost will be the same.",
  },
  {
    question: "What devices will be supported at test centers?",
    answer:
      "Chrome books and Windows desktops and laptops will be supported first. We are investigating support for other platforms, such as Apple devices, in the future.",
  },
  {
    question: "Will you still offer a paper ACT test?",
    answer:
      "Yes. ACT wants to ensure you have options when it comes to your preferred test format.",
  },
   {
    question: "Can I switch from online to paper once I have registered, or vice versa?",
    answer:
      "Yes. You will have until the late registration deadline to make changes to your test format, for a fee. You will not be able to change your desired test format at the test center on test day.",
  },
  {
    question: "Will I be able to test at home on my own device or from another location?",
    answer:
      "No. The online ACT is not available as a “remote” exam and must be taken on a test center-managed device at your chosen test center. If an accommodation is needed for an alternate location (i.e. hospital, etc.), please review our accommodations policies.",
  },
   {
    question: "Will the two ACT test formats cost the same?",
    answer:
      "Yes. Whether you choose to test online or using the paper version, your cost will be the same..",
  },
  {
    question: "Will I need to print my admission ticket or ID?",
    answer:
      "The admission ticket policy is not changing. We recommend bringing your ticket, because it will contain critical information that will help you log in to the test platform on test day. While you won’t be turned away for not bringing your ticket, you will still need to bring an acceptable form of identification.",
  },
  
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="p-6 max-w-4xl mx-auto mt-16 py-16">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Frequently Asked Questions (FAQ)
      </h2>

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
