
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react"; // Optional: you can use any icon set

const faqs = [
  {
    question: "Which MBA programs accept GRE scores?",
    answer: "Many Business schools worldwide accept GRE scores for their MBA, specialized master's and other doctoral business programs, including many top-ranked programs.",
  },
  {
    question: "How do I register for the GRE?",
    answer: "Edwise will assist for GRE Exam registration."
},
  {
    question: "How to prepare for GRE exam?",
    answer: "At the GRE test prep classes conducted by Edwise you get expert-led coaching, comprehensive study materials, mock tests and more."
},
  {
    question: "What if I need to change the date or location of my test and whats is the test refund policy for GRE??",
    answer: "You must change or cancel your test registration no later than four days before the test date or your test fee will be forfeited. If you want to cancel your GRE Exam registration before the 4-day advance deadline, you will receive a refund of half the original test fee you paid.If you change test date prior to 4 days then the rescheduling fees is ₹ 5000."},
  {
    question: "What are the part time work opportunities for students and how much can they earn?",
    answer: "Students are allowed to work part-time for 20 hours per week. The wages range from NZ$18-NZ$22 per hour. Students can choose to work in restaurants, farms, malls and as marketing executives.",
  },
  {
    question:"What is the Score reporting process and score reporting cost for GRE?",
    answer:"Free score reporting to 4 universities named on the day of the examination, after that ₹ 2900 per university."

  },
  {
    question:"Can the score be cancelled after the exam of GRE if not sure?",
    answer:"Candidates can cancel the scores before they are officially released."

  },
  {
    question:"How many hours of coaching is given for the GRE prep course?",
    answer:"The GRE classes provided by Edwise consists of 100 hours of comprehensive training."

  }
];

const FAQAccordion = () => 
{

      const [activeIndex, setActiveIndex] = useState<number | null>(null);
    
      const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
      };
    
      return (
        <section  id="faq" className="bg-white py-14 px-4 md:px-20 scroll-mt-30">
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
        activeIndex === index ? "text-blue-900" : "text-black"
      }`}
    >
      {faq.question}
      <span
      className={`text-2xl transform transition-transform duration-500 border-2 rounded-full  px-2.5 text-center ${
        activeIndex === index ? "rotate-45 text-blue-900" : "rotate-0"
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
    }
    
    
export default FAQAccordion;
