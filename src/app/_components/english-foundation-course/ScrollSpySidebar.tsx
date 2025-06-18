"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "about", label: "About" },
  { id: "target-learners", label: "Target Learners" },
  { id: "curriculum", label: "Curriculum" },
  { id: "outcome", label: "Outcome" },
  { id: "skills", label: "Skills Covered" },
  { id: "benefits", label: "Benefits" },
  { id: "methodology", label: "Methodology" },
  { id: "reviews", label: "Testimonials" },
  { id: "enrollment", label: "Foundation Plan" },
  { id: "faqs", label: "FAQs" },
];

export default function ScrollSpySidebar() {
  const [activeId, setActiveId] = useState("about");
  const [showSidebar, setShowSidebar] = useState(false);
  const [hideForFooter, setHideForFooter] = useState(false);

  // Show sidebar only after hero is out of view
  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowSidebar(!entry?.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  // Hide sidebar when footer is in view
  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHideForFooter(entry?.isIntersecting ?? false);
      },
      { threshold: 0.1 }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      let currentId = activeId;

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 250 && rect.bottom >= 100) {
            currentId = section.id;
            break;
          }
        }
      }

      setActiveId(currentId);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeId]);

  if (!showSidebar || hideForFooter) return null;

  return (
    <aside className="fixed top-24 left-4 w-36 hidden lg:block z-30">
      <ul className="space-y-3 text-sm font-medium text-gray-700">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className={`block px-1 transition-colors duration-300 ${
                activeId === section.id
                  ? "text-blue-700 font-semibold"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              {section.label}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
