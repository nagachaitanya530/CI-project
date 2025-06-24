import React from "react";

const StudyInIndiaPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex gap-12 items-start">
          {/* Left Side - Why Study In India */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-900 mb-10">
              Why <span className="underline underline-offset-4 decoration-2 decoration-red-500">Study In India</span>?
            </h1>

            <div className="space-y-8 divide-y divide-gray-200">
              {/* Quality Education */}
              <div className="flex items-start gap-4 pt-8 first:pt-0">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 border border-blue-100">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Quality Education</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Top universities in India such as the IITs, IISc, IIMs, NITs, AIIMS, ISI, BITS and ISB are 
                    well known worldwide to provide quality education.
                  </p>
                </div>
              </div>

              {/* Low Cost */}
              <div className="flex items-start gap-4 pt-8">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 border border-blue-100">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Low Cost</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    The cost of education and accommodation in India is quite low when compared 
                    to other popular study destinations.
                  </p>
                </div>
              </div>

              {/* English Instruction */}
              <div className="flex items-start gap-4 pt-8">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 border border-blue-100">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">English Instruction</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    English is the predominant language of instruction which makes it easy for 
                    international students to study here.
                  </p>
                </div>
              </div>

              {/* Cultural Heritage */}
              <div className="flex items-start gap-4 pt-8">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 border border-blue-100">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Cultural Heritage</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    India is rightly called a melting pot of cultures which allows the student to get an 
                    exposure to the unique cultures, traditions and festivals of India.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Consultation Form */}
          <div className="w-80 bg-white shadow-xl rounded-xl p-6 border border-gray-100 sticky top-8">
            <h3 className="text-gray-800 text-base font-semibold mb-6 leading-tight">
              Book your Free Consultation<br />
              <span className="text-blue-600">with Trustworthy Counsellors</span>
            </h3>

            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                />
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  className="w-full px-4 py-3 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Preferred Course"
                  className="w-full px-4 py-3 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                />
              </div>

              <div>
                <select className="w-full px-4 py-3 text-sm text-gray-500 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white">
                  <option>Select Month</option>
                  <option>January</option>
                  <option>February</option>
                  <option>March</option>
                  <option>April</option>
                  <option>May</option>
                  <option>June</option>
                  <option>July</option>
                  <option>August</option>
                  <option>September</option>
                  <option>October</option>
                  <option>November</option>
                  <option>December</option>
                </select>
              </div>

              <div>
                <select className="w-full px-4 py-3 text-sm text-gray-500 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white">
                  <option>Select Year</option>
                  <option>2025</option>
                  <option>2026</option>
                  <option>2027</option>
                  <option>2028</option>
                </select>
              </div>

              <div className="flex items-start gap-3 pt-2">
                <input 
                  type="checkbox" 
                  id="consent" 
                  className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                />
                <label htmlFor="consent" className="text-xs text-gray-600 leading-relaxed">
                  I consent to receiving Calls, WhatsApp, Email and Google RCS from Edwise to assist with this enquiry.
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 mt-6 shadow-lg hover:shadow-xl"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyInIndiaPage;