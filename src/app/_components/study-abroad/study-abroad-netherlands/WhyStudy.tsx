import React from "react";
import BookConsultationForm from "~/app/_components/study-abroad/BookConsultationForm"; // adjust path as per your file structure

const StudyInPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 -ml-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Left Side - Why Study In India */}
           <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-900 mb-10">
              Why <span className="underline underline-offset-4 decoration-2 decoration-red-500">Study In Netherlands</span>?
            </h1>

            <div className="space-y-8 divide-y divide-gray-200">
              {/* High-Quality Education */}
              <div className="flex items-start gap-4 pt-8 first:pt-0">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 border border-blue-100">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">High-Quality Education</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Dutch universities are renowned for their excellent academic standards and innovative teaching methods.
                  </p>
                </div>
              </div>

              {/* International Environment */}
              <div className="flex items-start gap-4 pt-8">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 border border-blue-100">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">International Environment</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                  The Netherlands is a multicultural country with a welcoming attitude towards international students, creating a diverse and enriching learning environment.
                  </p>
                </div>
              </div>

              {/* English-Taught Programs */}
              <div className="flex items-start gap-4 pt-8">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 border border-blue-100">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">English-Taught Programs</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Universities in Netherlands provide an extensive selection of approximately 2,000 programs taught in English.
                  </p>
                </div>
              </div>

              {/* Innovation And Research */}
              <div className="flex items-start gap-4 pt-8">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 border border-blue-100">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Innovation And Research</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    The Netherlands is at the forefront of innovation and research in various fields, providing students with opportunities for cutting-edge research and practical experience. They invented Wi-fi.
                  </p>
                </div>
              </div>

               {/* Career Opportunities */}
              <div className="flex items-start gap-4 pt-8">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 border border-blue-100">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Career Opportunities</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    The Netherlands is home to many multinational companies and startups, offering ample job opportunities and internships for graduates
                  </p>
                </div>
              </div>

               {/* Affordable Education*/}
              <div className="flex items-start gap-4 pt-8">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 border border-blue-100">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Innovation And Research</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Compared to other popular study destinations, the cost of tuition and living expenses in the Netherlands is relatively affordable, especially when considering the high quality of education.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Book Consultation Form */}
          <div className="w-full lg:w-[400px]">
            {/* <BookConsultationForm /> */}
          </div>

        </div>
      </div>
    </div>
  );
};

export default StudyInPage;

