"use client";

import { useRef, useState, useEffect } from "react";

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "pattern", label: "Pattern" },
  { id: "syllabus", label: "Syllabus" },
  { id: "scores", label: "Scores" },
  { id: "dates", label: "Dates" },
  { id: "training", label: "Training" },
  { id: "misc", label: "Miscellaneous" },
  { id: "faq", label: "FAQ" },
];

export default function ScrollableTabs() {
  const [activeTab, setActiveTab] = useState("overview");
  const containerRef = useRef<HTMLDivElement>(null);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });

  const OFFSET = 80; // height of sticky navbar

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -OFFSET;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveTab(id);
    }
  };

  useEffect(() => {
    const updateUnderline = () => {
      const activeBtn = document.querySelector(`[data-tab="${activeTab}"]`) as HTMLElement;
      if (activeBtn && containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const btnRect = activeBtn.getBoundingClientRect();
        setUnderlineStyle({
          left: btnRect.left - containerRect.left + containerRef.current.scrollLeft,
          width: btnRect.width,
        });
      }
    };

    updateUnderline();
    window.addEventListener("resize", updateUnderline);
    return () => window.removeEventListener("resize", updateUnderline);
  }, [activeTab]);

  return (
    <div className="relative w-full flex justify-center mt-4 sticky top-[65px] z-50 bg-white border-b border-gray-200">
      <div
        ref={containerRef}
        className="relative flex overflow-x-auto no-scrollbar space-x-1 sm:space-x-2 px-2 sm:px-4 py-2 bg-white"
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            data-tab={tab.id}
            onClick={() => handleScrollTo(tab.id)}
            className={`relative flex-shrink-0 px-3 sm:px-4 md:px-5 py-2 rounded-full whitespace-nowrap text-sm sm:text-base md:text-lg font-medium transition-all duration-200
              ${
                activeTab === tab.id
                  ? "bg-blue-700 text-white shadow"
                  : "bg-blue-100 text-blue-900 hover:bg-blue-200"
              }
            `}
          >
            {tab.label}
          </button>
        ))}

        {/* Blue sliding underline */}
        <div
          className="absolute bottom-0 h-0.5 bg-blue-700 transition-all duration-300 ease-in-out"
          style={{
            left: `${underlineStyle.left}px`,
            width: `${underlineStyle.width}px`,
          }}
        />
      </div>
    </div>
  );
}
