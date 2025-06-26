'use client';
import { useState } from "react";
import React from "react";

const SectionNav = () => {
  const [active, setActive] = useState("section1");

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
  return (
    <div className="flex flex-wrap gap-4 overflow-x-auto py-4 px-4 bg-white shadow rounded-md">
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          onClick={() => setActive(section.id)}
          className={`section-name text-sm font-medium px-14.5 py-4 rounded-full transition ${
            active === section.id
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          {section.label}
        </a>
      ))}
    </div>
  );
};
export default SectionNav;