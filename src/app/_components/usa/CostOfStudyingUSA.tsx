"use client";

import React from "react";

const tuition = [
  { label: "Associate Degree", value: "USD 15,000 – 20,000" },
  { label: "Bachelor's", value: "USD 15,000 – 40,000" },
  { label: "Master's", value: "USD 15,000 – 50,000" },
];

const living = [
  { label: "Living Expenses (Average per annum)", value: "Approx. USD 16,000" },
];

const accommodation = [
  { label: "On-Campus", value: "USD 800 – 900" },
  { label: "Off-Campus Rental", value: "USD 500 – 1,500" },
  { label: "Homestay", value: "USD 1,000 – 1,200" },
];

const SectionBox = ({
  title,
  data,
}: {
  title: string;
  data: { label: string; value: string }[];
}) => (
  <div className="mb-8">
    <h3 className="bg-[#e4ebf5] inline-block px-6 py-2 rounded-xl text-lg font-semibold text-gray-700 mb-4 border border-[#c7d4e2]">
      {title}
    </h3>
    <div className="space-y-4">
      {data.map((item, idx) => (
        <div
          key={idx}
          className="flex justify-between items-center bg-white px-6 py-4 rounded-2xl shadow-sm border border-gray-200"
        >
          <span className="font-semibold text-gray-800">{item.label}</span>
          <span className="text-gray-700">{item.value}</span>
        </div>
      ))}
    </div>
  </div>
);

const CostOfStudyingUSA = () => {
  return (
    <section className="bg-[#eaf0f9] py-16 px-4 lg:px-24 rounded-t-[3rem]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Left Text Content */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-snug">
            <span className="underline decoration-red-500 decoration-2 underline-offset-5">
              Cost Of Studying
            </span>{" "}
            In The USA
          </h2>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            The cost of studying in USA for international students depends on
            several factors, including the institution, program of study,
            location, and available funding opportunities. Additionally, living
            expenses such as rent, utilities, and recreational activities play a
            significant role in the overall cost.
          </p>
        </div>

        {/* Right Cost Boxes */}
        <div>
          <SectionBox title="Tuition Fees (Average per annum)" data={tuition} />
          <SectionBox title="Living Expenses (Average per annum)" data={living} />
          <SectionBox title="Accommodation (Average per month)" data={accommodation} />
        </div>
      </div>
    </section>
  );
};

export default CostOfStudyingUSA;
