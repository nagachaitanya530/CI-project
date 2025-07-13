"use client";

import { useRef, useState, useEffect, useCallback } from "react";

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "pattern", label: "Pattern" },
  { id: "syllabus", label: "Syllabus" },
  { id: "scores", label: "Scores" },
  { id: "dates", label: "Dates" },
  { id: "training", label: "Training" },
  { id: "misc", label: "Miscellaneous" },
  { id: "faq", label: "FAQ" },
] as const;

export default function ScrollableTabs() {
  const [activeTab, setActiveTab] = useState<string>(tabs[0].id);
  const containerRef = useRef<HTMLDivElement>(null);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const OFFSET = 80; // height of sticky navbar

  const handleScrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -OFFSET;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveTab(id);
    }
  }, [OFFSET]);

  const updateUnderline = useCallback(() => {
    const activeBtn = document.querySelector(`[data-tab="${activeTab}"]`) as HTMLElement;
    if (activeBtn && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const btnRect = activeBtn.getBoundingClientRect();
      setUnderlineStyle({
        left: btnRect.left - containerRect.left + containerRef.current.scrollLeft,
        width: btnRect.width,
      });
    }
  }, [activeTab]);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      scrollTimeoutRef.current = setTimeout(() => {
        const scrollPosition = window.scrollY + OFFSET + 20; // Add small buffer

        for (const tab of tabs) {
          const section = document.getElementById(tab.id);
          if (section) {
            const { offsetTop, offsetHeight } = section;
            if (
              scrollPosition >= offsetTop &&
              scrollPosition < offsetTop + offsetHeight
            ) {
              setActiveTab(tab.id);
              break;
            }
          }
        }
      }, 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [OFFSET]);

  useEffect(() => {
    updateUnderline();
    const resizeObserver = new ResizeObserver(updateUnderline);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }
    return () => resizeObserver.disconnect();
  }, [activeTab, updateUnderline]);

  return (
    <div className="w-full flex justify-center items-center mt-6 sticky top-[65px] bg-white py-2 shadow-sm z-10">
      <div
        ref={containerRef}
        className="relative overflow-x-auto no-scrollbar px-4"
      >
        <div
          className="flex flex-nowrap md:flex-wrap lg:flex-nowrap gap-2 mx-auto max-w-screen-xl"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              data-tab={tab.id}
              onClick={() => handleScrollTo(tab.id)}
              className={`relative px-4 md:px-6 py-2 rounded-full whitespace-nowrap text-sm sm:text-base md:text-lg font-semibold transition-all duration-200 
            ${activeTab === tab.id
                  ? "bg-[#1E3A8A] text-white shadow"
                  : "bg-[#d4deeb] text-gray-700 hover:bg-[#c4d4ea]"
                }`}
            >
              {tab.label}
            </button>
          ))}

          {/* Blue sliding underline bar */}
          <div
            className="absolute bottom-0 h-[2px]  bg-blue-900 transition-all duration-300 ease-in-out"
            style={{ left: underlineStyle.left, width: underlineStyle.width }}
          />
        </div>
      </div>
    </div>

  );
}