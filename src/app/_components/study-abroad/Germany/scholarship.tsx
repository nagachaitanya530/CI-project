'use client';

import { useEffect, useRef, useState, type JSX } from 'react';

interface ScholarshipItem {
  name: string;
  description: JSX.Element;
}

const items: ScholarshipItem[] = [
  {
    name: 'Germany',
    description: (
      <div>
        <p>
          Scholarships in Germany for private institutions typically range from 10% to 30% of the tuition fees. As one of India’s leading Germany consultancy for education in India we can give you complete information about all the available scholarships in Germany. You can find more information about organizations that offer scholarships, such as DAAD, on the following websites:
          </p>
          <br></br>
          <a href='https://www.edwiseinternational.com/study-abroad/study-in-germany.html#'>www.daad.de/deutschland/
            www.campus-germany.de/
            http://newdelhi.daad.de</a>
        
      </div>
    ),
  },
];

function Scholarships() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
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
    ? 'opacity-100 translate-x-0'
    : 'opacity-0 -translate-x-20';

  const imageAnimation = isVisible
    ? 'opacity-100 translate-x-0'
    : 'opacity-0 translate-x-20';

  return (
    <section ref={sectionRef} className="my-20 px-4 lg:px-20">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 p-5">
        {/* Left Text Content */}
        <div
          className={`transition-all duration-1000 ease-out ${textAnimation} max-w-2xl`}
        >
          {items.map((item, index) => (
            <div key={index}>
              <h1 className="text-2xl md:text-3xl lg:text-5xl mb-6 text-gray-800 font-bold">
                Scholarships in {item.name}
              </h1>
              <div className="text-lg text-gray-700">{item.description}</div>
            </div>
          ))}
        </div>

        {/* Right Image Content */}
        <div
          className={`transition-all duration-1000 ease-out ${imageAnimation} w-full lg:w-2/5`}
        >
          <img
            src="/scholar-img.webp"
            alt="Scholarships"
            className="h-100 w-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default Scholarships;
