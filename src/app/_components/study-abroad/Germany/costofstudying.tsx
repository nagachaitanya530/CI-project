"use client";

import React from "react";

export default function CostOfStudying() {
  return (
    <section className="bg-[#e8eff8] py-10 px-4 sm:px-6 md:px-10 lg:px-16 rounded-3xl w-full max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black leading-tight">
            <span className="relative inline-block">
              <span className="relative z-10 underline decoration-red-500 underline-offset-4">
                Cost of studying
              </span>{" "}
              in Germany
            </span>
          </h2>
          <p className="mt-6 text-[#222] text-base sm:text-lg leading-relaxed">
            The cost of studying in Germany for international students depends
            on several factors, including the institution, program of study,
            location, and available funding opportunities. Additionally, living
            expenses such as rent, utilities, and recreational activities play
            a significant role in the overall cost.
          </p>
        </div>

        
        <div className="space-y-6">
       
          <div className="bg-[#e8eff8] border border-blue-100 rounded-2xl px-4 sm:px-6 py-3 text-base sm:text-lg font-semibold text-gray-800 w-fit">
            Tuition Fees (Average per annum)
          </div>

          {[
            { label: "Bachelor's", value: "EUR 8,000 – 10,000" },
            { label: "Master's", value: "EUR 10,000 – 12,000" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex justify-between items-center bg-white p-4 sm:p-6 rounded-2xl shadow border border-blue-100 text-base sm:text-lg font-semibold"
            >
              <span>{item.label}</span>
              <span className="text-black">{item.value}</span>
            </div>
          ))}

         
          <div className="bg-[#e8eff8] border border-blue-100 rounded-2xl px-4 sm:px-6 py-3 text-base sm:text-lg font-semibold text-gray-800 w-fit">
            Living Expenses (Average per annum)
          </div>

          <div className="flex justify-between items-center bg-white p-4 sm:p-6 rounded-2xl shadow border border-[#C6D3E3] text-base sm:text-lg font-semibold">
            <span>Approx. EUR 10,000</span>
          </div>

         
          <div className="bg-[#e8eff8] border border-[#C6D3E3] rounded-2xl px-4 sm:px-6 py-3 text-base sm:text-lg font-semibold text-[#4D5566] w-fit">
            Accommodation (Average per month)
          </div>

          {[
            { label: "On–Campus", value: "EUR 180 - 330" },
            { label: "Student Dormitories", value: "EUR 180 - 330" },
            { label: "Private Housing", value: "EUR 400 - 600" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex justify-between items-center bg-white p-4 sm:p-6 rounded-2xl shadow border border-[#C6D3E3] text-base sm:text-lg font-semibold"
            >
              <span>{item.label}</span>
              <span className="text-black">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
