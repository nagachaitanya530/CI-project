import React, { useState, useEffect } from 'react';

const ProcedureAboutIndia = () => {
  const [activeSection, setActiveSection] = useState('intakes');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['intakes', 'requirements'];
      const navbarHeight = 120; // Navbar height
      const scrollPosition = window.scrollY + navbarHeight + 100; // Add more buffer

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 120; // Increased navbar height offset
      const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementTop - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">
          Procedure About <span className="relative inline-block">India
            <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 120 10" preserveAspectRatio="none">
              <path d="M0,6 Q30,2 60,6 Q90,10 120,6" stroke="#ef4444" strokeWidth="3" fill="none" strokeLinecap="round"/>
            </svg>
          </span>
        </h1>
      </div>

      <div className="flex gap-8">
        {/* Sticky Sidebar */}
        <div className="w-72 flex-shrink-0">
          <div className="sticky top-8">
            <nav className="space-y-3">
              <button
                onClick={() => scrollToSection('intakes')}
                className={`w-full text-left px-6 py-4 rounded-xl transition-all duration-300 ease-in-out flex items-center gap-4 font-medium text-base transform hover:scale-105 ${
                  activeSection === 'intakes'
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 translate-x-1'
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100 hover:shadow-md'
                }`}
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                Intakes
              </button>
              
              <button
                onClick={() => scrollToSection('requirements')}
                className={`w-full text-left px-6 py-4 rounded-xl transition-all duration-300 ease-in-out flex items-center gap-4 font-medium text-base transform hover:scale-105 ${
                  activeSection === 'requirements'
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 translate-x-1'
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100 hover:shadow-md'
                }`}
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                Requirements
              </button>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 space-y-12">
          {/* Intakes Section */}
          <section id="intakes" className="bg-white rounded-3xl shadow-lg border border-gray-100 p-10 transform transition-all duration-300 hover:shadow-xl" style={{ scrollMarginTop: '120px' }}>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 leading-tight">Intakes</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-10 font-normal">
              The main intake offered by all colleges in India is September. Few colleges offer Jan / Feb intake
            </p>
            <button className="inline-flex items-center px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 font-semibold rounded-xl hover:bg-blue-800 hover:text-white hover:border-blue-800 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-blue-200">
              Free Expert Consultation
            </button>
          </section>

          {/* Requirements Section */}
          <section id="requirements" className="bg-white rounded-3xl shadow-lg border border-gray-100 p-10 transform transition-all duration-300 hover:shadow-xl" style={{ scrollMarginTop: '120px' }}>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 leading-tight">
              Requirements to study at best colleges in India
            </h2>
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4 group">
                <div className="w-3 h-3 bg-blue-400 rounded-full mt-2.5 flex-shrink-0 transition-all duration-300 group-hover:bg-blue-600"></div>
                <p className="text-gray-600 text-lg leading-relaxed font-normal">
                  10+2 with <span className="font-semibold text-gray-800">Minimum 50% marks</span> in their 12th Board Examination for Undergraduate Studies.
                </p>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="w-3 h-3 bg-blue-400 rounded-full mt-2.5 flex-shrink-0 transition-all duration-300 group-hover:bg-blue-600"></div>
                <p className="text-gray-600 text-lg leading-relaxed font-normal">
                  Graduates with minimum of 50% marks in their Graduation Examination.
                </p>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="w-3 h-3 bg-blue-400 rounded-full mt-2.5 flex-shrink-0 transition-all duration-300 group-hover:bg-blue-600"></div>
                <p className="text-gray-600 text-lg leading-relaxed font-normal">
                  Graduates who have appeared for GMAT, CAT, C-MAT, ZAT or equivalent exams
                </p>
              </div>
            </div>
            <button className="inline-flex items-center px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 font-semibold rounded-xl hover:bg-blue-800 hover:text-white hover:border-blue-800 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-blue-200">
              Free Expert Consultation
            </button>
          </section>


        </div>
      </div>
    </div>
  );
};

export default ProcedureAboutIndia;