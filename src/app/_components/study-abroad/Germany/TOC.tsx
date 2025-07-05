"use client";

import { useEffect, useState } from "react";

function TOC() {
  const [activeSection, setActiveSection] = useState<string>("document");

  const handleScroll = () => {
    const sections = ["document", "visa"];
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;

        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveSection(section);
          break;
        }
      }
    }
  };

  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100; 
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section className="hidden lg:block sticky top-20">
      <div className="space-y-2">
        <button
          onClick={() => scrollToSection("document")}
          className={`w-64 py-2 rounded-3xl font-medium transition ${
            activeSection === "document"
              ? "bg-blue-400 text-white"
              : "hover:bg-gray-200"
          }`}
        >
          Document
        </button>

        <button
          onClick={() => scrollToSection("visa")}
          className={`w-64 py-2 rounded-3xl font-medium transition ${
            activeSection === "visa"
              ? "bg-blue-400 text-white"
              : "hover:bg-gray-200"
          }`}
        >
          Visa
        </button>
      </div>
    </section>
  );
}

export default TOC;
