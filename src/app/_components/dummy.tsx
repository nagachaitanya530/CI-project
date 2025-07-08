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
  const underlineRef = useRef<HTMLDivElement>(null);
  const OFFSET = 120; // navbar offset

  // Scroll to section when clicking
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - OFFSET;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Track scroll position
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id);
            break;
          }
        }
      },
      {
        root: null,
        rootMargin: `-${OFFSET}px 0px -60% 0px`,
        threshold: 0.25,
      }
    );

    tabs.forEach((tab) => {
      const section = document.getElementById(tab.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Move sliding underline
  useEffect(() => {
    const underline = underlineRef.current;
    const container = containerRef.current;
    const activeBtn = container?.querySelector(`button[data-tab="${activeTab}"]`) as HTMLElement;

    if (underline && activeBtn && container) {
      const containerRect = container.getBoundingClientRect();
      const btnRect = activeBtn.getBoundingClientRect();
      const left = btnRect.left - containerRect.left + container.scrollLeft;

      underline.style.width = `${btnRect.width}px`;
      underline.style.transform = `translateX(${left}px)`;
    }
  }, [activeTab]);

  return (
    <div className="relative w-full flex justify-center sticky top-[65px] z-50 bg-white shadow">
      <div
        ref={containerRef}
        className="relative flex overflow-x-auto no-scrollbar space-x-2 px-4 py-3 bg-white border border-gray-200 rounded-full"
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            data-tab={tab.id}
            onClick={() => handleScrollTo(tab.id)}
            className={`relative px-5 py-2 rounded-full whitespace-nowrap text-sm md:text-base font-medium transition-all duration-300 ease-in-out ${
              activeTab === tab.id
                ? "bg-blue-800 text-white shadow-md"
                : "bg-blue-100 text-gray-800 hover:bg-blue-200"
            }`}
          >
            {tab.label}
          </button>
        ))}

        {/* Sliding Underline */}
        {/* <div
          ref={underlineRef}
          className="absolute bottom-0 h-[2px] bg-blue-800 transition-all duration-300 ease-in-out"
          style={{ width: 0, transform: "translateX(0px)" }}
        /> */}
      </div>
    </div>
  );
}
