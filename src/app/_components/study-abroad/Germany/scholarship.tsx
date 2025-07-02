"use client";

import { useEffect, useRef, useState, type JSX } from "react";

interface ScholarshipItem {
  name: string;
  description: JSX.Element;
}

const items: ScholarshipItem[] = [
  {
    name: "Germany",
    description: (
      <div>
        <p>
          Scholarships in Germany for private institutions typically range from
          10% to 30% of the tuition fees. As one of India’s leading Germany
          consultancy for education in India, we can give you complete
          information about all the available scholarships in Germany.
        </p>
        <p className="mt-2">
          You can find more information about organizations that offer
          scholarships, such as DAAD, on the following websites:
        </p>
        <ul className="list-disc pl-6 mt-2 text-blue-700 underline">
          
          <li>
            <a
              href="https://www.campus-germany.de/"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.campus-germany.de/
            </a>
          </li>
         
        </ul>
      </div>
    ),
  },
];

export default function Scholarships() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.3 }
    );

    const currentSection = sectionRef.current;
    if (currentSection) observer.observe(currentSection);

    return () => {
      if (currentSection) observer.unobserve(currentSection);
    };
  }, []);

  const textAnimation = isVisible
    ? "opacity-100 translate-x-0"
    : "opacity-0 -translate-x-12";
  const imageAnimation = isVisible
    ? "opacity-100 translate-x-0"
    : "opacity-0 translate-x-12";

  return (
    <section
      ref={sectionRef}
      className="w-full max-w-7xl mx-auto my-20 px-4 sm:px-6 lg:px-10"
    >
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
       
        <div
          className={`transition-all duration-1000 ease-out ${textAnimation} max-w-2xl w-full`}
        >
          {items.map((item, index) => (
            <div key={index}>
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
                Scholarships in {item.name}
              </h2>
              <div className="text-gray-700 text-base sm:text-lg leading-relaxed">
                {item.description}
              </div>
            </div>
          ))}
        </div>

       
        <div
          className={`transition-all duration-1000 ease-out ${imageAnimation} w-full lg:w-[40%]`}
        >
          <img
            src="/Scholarships-In-Germany.jpg"
            alt="Scholarships"
            className="w-full h-auto object-cover rounded-xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
}