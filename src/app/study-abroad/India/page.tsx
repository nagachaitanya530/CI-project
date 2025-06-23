import React from 'react';
import Navigation from "~/app/_components/study-abroad/navigation";
import FAQ from "~/app/_components/study-abroad/faq";
import YourJourney from "~/app/_components/study-abroad/your-journey";

interface StatItem {
  number: string;
  label: string;
}

const StatsComponent: React.FC = () => {
  const stats: StatItem[] = [
    {
      number: "900+",
      label: "Universities"
    },
    {
      number: "₹80k-₹400k",
      label: "Annual tuition fees"
    },
    {
      number: "700K+",
      label: "International Students"
    },
    {
      number: "1 Year",
      label: "Post-Study Work Visa"
    }
  ];

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="bg-slate-100 rounded-2xl p-8 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-300">
          {stats.map((stat: StatItem, index: number) => (
            <div key={index} className="text-center pt-6 md:pt-0 first:pt-0 md:px-4 first:md:pl-0 last:md:pr-0">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-3 tracking-tight">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-slate-700 font-medium leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const IndiaFAQs = [
  {
    question: "Is it expensive to study in India?",
    answer: "The cost of studying in India is much lower than most of the countries in the world. This allows the student to pursue a world class education at a relatively cheaper price."
  },
  {
    question: "Is it easy to get a visa to study in India?",
    answer: "The Government of India has made it easier for International students to obtain a visa to study in India and the process is generally straightforward."
  },
  {
    question: "What is the accommodation like for students in India?",
    answer: "Most universities and colleges in India have on-campus accommodations referred to as hostels. Students may also live off-campus if required."
  },
  {
    question: "Can I work while studying in India?",
    answer: "Students are only allowed to work or earn as part of the education program. Working full time or part-time in other capacities is not allowed."
  },
  {
    question: "Should I learn Hindi to study in India?",
    answer: "Almost all courses of higher education are taught in English making India an attractive study destination for international students."
  },
  
];

export default function India() {
    return (
        <>
        <Navigation />
        <StatsComponent />
        <FAQ faqs={IndiaFAQs} title="FAQs" />
        <YourJourney />

        </>
    )

}