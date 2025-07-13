import { useEffect, useState } from 'react';

function ScrollableTabs() {
  const sections = [
    { label: 'Overview', id: 'overview' },
    { label: 'Pattern', id: 'pattern' },
    { label: 'Syllabus', id: 'syllabus' },
    { label: 'Scores', id: 'scores' },
    { label: 'Dates', id: 'dates' },
    { label: 'Training', id: 'training' },
    { label: 'Miscellaneous', id: 'fee' },
    { label: 'FAQ', id: 'faq' },
  ];
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleScrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    });

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <>
      <section className="sticky top-18  z-10 bg-blue-200 border border-blue-200 rounded-3xl mx-4 my-6 md:mx-12 lg:mx-40 px-2 py-3 shadow-md overflow-hidden">
        <div className="flex justify-center overflow-x-auto whitespace-nowrap gap-2 sm:gap-3 px-2 scroll-smooth scrollbar-hide">
          {sections.map(({ label, id }, idx) => (
            <button
              key={idx}
              onClick={() => handleScrollToSection(id)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-sm flex-shrink-0 transition duration-300 border ${activeSection === id
                  ? 'bg-blue-900 text-white border-blue-900'
                  : 'bg-white text-cyan-700 border-blue-300 hover:cursor-pointer hover:text-white hover:bg-blue-900'
                }`}
            >
              {label}
            </button>
          ))}
        </div>
      </section>
    </>
  );
}

export default ScrollableTabs;