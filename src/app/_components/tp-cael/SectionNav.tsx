'use client';
import { useState, useRef } from "react";
import React from "react";

const SectionNav = () => {
  const [activeTab, setActiveTab] = useState("section1");
  const containerRef = useRef<HTMLDivElement>(null);

  const sections = [
    { id: "section1", label: "Overview" },
    { id: "section2", label: "Pattern" },
    { id: "section3", label: "Syllabus" },
    { id: "section4", label: "Scores" },
    { id: "section5", label: "Dates" },
    { id: "section6", label: "Training" },
    { id: "section7", label: "Miscellaneous" },
    { id: "section8", label: "FAQ" },
  ];
  const OFFSET = 80;
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -OFFSET;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveTab(id);
    }
  };

  return (
    <div className=" w-full flex justify-center items-center mt-6 sticky top-[65px] bg-white py-2 shadow-sm z-10">
      <div
        ref={containerRef}
        className="relative flex overflow-x-auto no-scrollbar space-x-2 px-4 py-2 bg-white rounded-full border border-gray-200"
      >
        {sections.map((tab) => (
          <button
            key={tab.id}
            data-tab={tab.id}
            onClick={() => handleScrollTo(tab.id)}
            className={`relative px-6 py-2 rounded-full whitespace-nowrap text-lg font-semibold transition-all duration-200 
              ${activeTab === tab.id
                ? " bg-blue-900 text-white shadow"
                : " bg-blue-50 text-gray-700  hover:bg-blue-100"
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SectionNav;