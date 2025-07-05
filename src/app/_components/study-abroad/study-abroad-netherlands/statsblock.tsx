"use client";
import React from "react";

const StatsBlock: React.FC = () => {
  const stats = [
    { title: "30+", description: "Institutions" },
    { title: "€8k-€20k", description: "Annual tuition fees" },
    { title: "100K+", description: "International Students" },
    { title: "1 Years", description: "Post–Study Work Visa" },
  ];

  return (
    <section className="py-12 px-4 md:px-8">
      <div className="max-w-screen-xl mx-auto bg-[#E9EEF6] rounded-[50px] shadow-sm p-6 md:p-10 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
        {stats.map((item, index) => (
          <div key={index} className="flex-1 text-center px-4 relative">
            <h3 className="text-2xl md:text-3xl font-semibold text-[#1E40AF]">
              {item.title}
            </h3>
            <p className="text-base md:text-lg mt-1 font-medium text-gray-900">
              {item.description}
            </p>

            {/* Vertical divider */}
            {index < stats.length - 1 && (
              <span className="hidden md:block absolute top-1/2 right-0 transform -translate-y-1/2 h-12 border-r border-gray-300" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsBlock;
