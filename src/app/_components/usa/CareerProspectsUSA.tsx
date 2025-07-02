"use client";

import React from "react";
import {
  BriefcaseBusiness,
  Building2,
  DollarSign,
  TrendingUp,
} from "lucide-react";

const careers = [
  {
    icon: BriefcaseBusiness,
    title: "High Employability",
    desc: "US degrees are globally recognized, offering wide-ranging job opportunities in top companies worldwide.",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    desc: "Access dynamic roles, faster promotions, and leadership opportunities in competitive global markets.",
  },
  {
    icon: DollarSign,
    title: "Attractive Salaries",
    desc: "Graduates from US universities often command higher salaries and better job benefits.",
  },
  {
    icon: Building2,
    title: "Work Visa Options",
    desc: "Programs like OPT and H-1B allow students to work post-graduation and gain valuable experience.",
  },
];

export default function CareerProspectsUSA() {
  return (
    <section className="bg-[#f5f8ff] py-16 px-4 md:px-8 lg:px-24">
      <div className="max-w-7xl mx-auto text-center mb-12 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          <span className="underline decoration-red-500 decoration-2 underline-offset-4">
            Career Prospects
          </span>{" "}
          in The USA
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
          Studying in the USA opens doors to thriving career opportunities across
          various industries with international exposure and professional growth.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
        {careers.map(({ icon: Icon, title, desc }, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all p-6 flex flex-col items-start"
          >
            <div className="bg-blue-100 w-12 h-12 flex items-center justify-center rounded-full mb-4">
              <Icon className="text-blue-700 w-6 h-6" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              {title}
            </h3>
            <p className="text-sm text-gray-600">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
