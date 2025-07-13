"use client";

import React, { useEffect, useState } from "react";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "pattern", label: "Pattern" },
  { id: "syllabus", label: "Syllabus" },
  { id: "scores", label: "Scores" },
  { id: "dates", label: "Dates" },
  { id: "training", label: "Training" },
  { id: "misc", label: "Miscellaneous" },
  { id: "faq", label: "FAQ" },
];

const StickySectionNav = () => {
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY + 140;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el && el.offsetTop <= scrollY) {
          setActive(section.id);
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="sticky top-15 z-10 bg-white border-b border-gray-200 shadow-md ">
      <div className="max-w-7xl mx-auto px-4 md:px-10 py-3 flex gap-4 overflow-x-auto scrollbar-hide">
        {sections.map((sec) => (
          <a
            key={sec.id}
            href={`#${sec.id}`}
            className={`text-sm md:text-base font-medium whitespace-nowrap px-4 py-2 rounded-full transition ${active === sec.id
              ? "bg-[#1f3f98] text-white"
              : "text-gray-600 hover:text-[#1f3f98] hover:bg-blue-100"
              }`}
          >
            {sec.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default StickySectionNav;
