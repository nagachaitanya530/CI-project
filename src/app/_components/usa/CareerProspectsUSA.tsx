"use client";

import React from "react";
import { BriefcaseBusiness, Building2, DollarSign, TrendingUp } from "lucide-react";

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

const CareerProspectsUSA = () => {
  return (
    <section className="bg-[#f5f8ff] py-16 px-4 lg:px-24">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          <span className="underline decoration-red-500 decoration-2 underline-offset-4">
            Career Prospects
          </span>{" "}
          in The USA
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto text-sm md:text-base">
          Studying in the USA opens doors to thriving career opportunities across various industries with international exposure and professional growth.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {careers.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 text-left hover:shadow-lg transition-all"
          >
            <div className="bg-blue-100 w-12 h-12 flex items-center justify-center rounded-full mb-4">
              <item.icon className="text-blue-700 w-6 h-6" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h4>
            <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CareerProspectsUSA;
