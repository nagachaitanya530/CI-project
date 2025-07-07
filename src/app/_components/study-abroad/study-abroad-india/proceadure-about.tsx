"use client";

import React, { useState, useEffect } from 'react';

const ProcedureAboutIndia = () => {
  const [activeSection, setActiveSection] = useState('intakes');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['intakes', 'requirements'];
      const navbarHeight = 120;
      const scrollPosition = window.scrollY + navbarHeight + 100;

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
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = window.innerWidth < 768 ? 80 : 120;
      const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementTop - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setIsMobileMenuOpen(false);
    }
  };

  const navigationItems = [
    {
      id: 'intakes',
      label: 'Intakes',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 'requirements',
      label: 'Requirements',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 leading-tight px-4">
            Procedure About{' '}
            <span className="relative inline-block">
              India
              <svg className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-2 sm:h-3" viewBox="0 0 120 10" preserveAspectRatio="none">
                <path d="M0,6 Q30,2 60,6 Q90,10 120,6" stroke="#ef4444" strokeWidth="3" fill="none" strokeLinecap="round"/>
              </svg>
            </span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mt-4 max-w-2xl mx-auto px-4">
            Everything you need to know about studying in India
          </p>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="lg:hidden mb-6">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-full bg-white border-2 border-gray-200 rounded-xl px-4 py-3 flex items-center justify-between text-gray-700 font-medium hover:border-blue-300 transition-all duration-300 shadow-sm"
          >
            <span className="flex items-center gap-3">
              {navigationItems.find(item => item.id === activeSection)?.icon}
              {navigationItems.find(item => item.id === activeSection)?.label}
            </span>
            <svg 
              className={`w-5 h-5 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {/* Mobile Dropdown Menu */}
          <div className={`mt-2 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="py-2">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-4 py-3 flex items-center gap-3 transition-all duration-200 ${
                    activeSection === item.id
                      ? 'bg-blue-50 text-blue-600 border-r-4 border-blue-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <div className="w-6 h-6 flex items-center justify-center">
                    {item.icon}
                  </div>
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex gap-6 lg:gap-8">
          {/* Desktop Sidebar */}
          <div className="hidden lg:block w-72 xl:w-80 flex-shrink-0">
            <div className="sticky top-8">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Quick Navigation</h3>
                <nav className="space-y-3">
                  {navigationItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full text-left px-6 py-4 rounded-xl transition-all duration-300 ease-in-out flex items-center gap-4 font-medium text-base transform hover:scale-105 ${
                        activeSection === item.id
                          ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-200 translate-x-1'
                          : 'bg-gray-50 text-gray-700 hover:bg-gray-100 hover:shadow-md'
                      }`}
                    >
                      <div className="w-6 h-6 flex items-center justify-center">
                        {item.icon}
                      </div>
                      {item.label}
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 space-y-8 sm:space-y-12">
            {/* Intakes Section */}
            <section 
              id="intakes" 
              className="bg-white rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100 p-6 sm:p-8 lg:p-10 transform transition-all duration-300 hover:shadow-xl" 
              style={{ scrollMarginTop: '120px' }}
            >
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">Intakes</h2>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 sm:p-6 mb-6 sm:mb-8">
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-medium">
                  📅 The main intake offered by all colleges in India is{' '}
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-lg font-semibold">September</span>
                </p>
                <p className="text-gray-600 text-sm sm:text-base mt-3 leading-relaxed">
                  Few colleges also offer Jan/Feb intake for specific programs
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <button className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-blue-200 text-sm sm:text-base">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Free Expert Consultation
                </button>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Response within 24 hours
                </div>
              </div>
            </section>

            {/* Requirements Section */}
            <section 
              id="requirements" 
              className="bg-white rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100 p-6 sm:p-8 lg:p-10 transform transition-all duration-300 hover:shadow-xl" 
              style={{ scrollMarginTop: '120px' }}
            >
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
                  Requirements
                </h2>
              </div>
              
              <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8">
                Requirements to study at best colleges in India:
              </p>
              
              <div className="grid gap-4 sm:gap-6 mb-8 sm:mb-10">
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-4 sm:p-6 border border-green-100 hover:shadow-md transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-green-600 font-bold text-sm sm:text-base">UG</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-base sm:text-lg mb-2">Undergraduate Studies</h3>
                      <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                        10+2 with <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded font-semibold">Minimum 50% marks</span> in their 12th Board Examination
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 sm:p-6 border border-blue-100 hover:shadow-md transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-600 font-bold text-sm sm:text-base">PG</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-base sm:text-lg mb-2">Postgraduate Studies</h3>
                      <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                        Graduates with <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded font-semibold">minimum 50% marks</span> in their Graduation Examination
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 sm:p-6 border border-purple-100 hover:shadow-md transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-base sm:text-lg mb-2">Entrance Exams</h3>
                      <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                        Graduates who have appeared for{' '}
                        <span className="inline-flex flex-wrap gap-1 mt-1">
                          {['GMAT', 'CAT', 'C-MAT', 'ZAT'].map((exam) => (
                            <span key={exam} className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-medium">
                              {exam}
                            </span>
                          ))}
                        </span>
                        {' '}or equivalent exams
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <button className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-purple-200 text-sm sm:text-base">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Get Personalized Guidance
                </button>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  100% Free Service
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcedureAboutIndia;