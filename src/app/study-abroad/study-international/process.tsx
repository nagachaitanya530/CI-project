import React, { useState } from 'react';
import { FileText, Users, Globe, Calendar, CheckCircle, AlertCircle, ArrowRight, BookOpen, CreditCard } from 'lucide-react';

export default function GlobalUniversitiesPage() {
  const [activeTab, setActiveTab] = useState('documents');

  const applicationDocuments = [
    { icon: FileText, title: "Completed Application Form", desc: "Online or paper-based submission" },
    { icon: BookOpen, title: "Academic Transcripts & Diplomas", desc: "From previous educational institutions" },
    { icon: Users, title: "Statement of Purpose", desc: "Personal statement outlining your goals" },
    { icon: FileText, title: "Letters of Recommendation", desc: "Academic and/or professional references" },
    { icon: Users, title: "Curriculum Vitae (CV)", desc: "Comprehensive resume of achievements" },
    { icon: Globe, title: "Language Proficiency Proof", desc: "If required by the institution" },
    { icon: CheckCircle, title: "Standardized Test Scores", desc: "If required (SAT, GRE, GMAT, etc.)" },
    { icon: FileText, title: "Passport-sized Photos", desc: "Recent photographs as specified" },
    { icon: CreditCard, title: "Financial Documentation", desc: "Proof of ability to cover expenses" },
    { icon: CreditCard, title: "Application Fee", desc: "If applicable to your chosen institution" }
  ];

  const visaDocuments = [
    { title: "Valid Passport", desc: "Must be valid for the duration of your studies" },
    { title: "Proof of Bona Fide Student", desc: "Acceptance letter from the university" },
    { title: "Proof of Financial Stability", desc: "Bank statements, sponsorship letters" },
    { title: "English Proficiency Test Scores", desc: "IELTS, TOEFL, or accepted alternatives" }
  ];

  const intakeSeasons = [
    { season: "Fall", months: "August - December", popular: true },
    { season: "Spring", months: "January - May", popular: false },
    { season: "Summer", months: "May - August", popular: false }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              More About Global Universities
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-400 mx-auto rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-full p-2 shadow-lg border">
            <div className="flex space-x-2">
              <button
                onClick={() => setActiveTab('documents')}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${
                  activeTab === 'documents'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <FileText size={20} />
                <span>Documents</span>
              </button>
              <button
                onClick={() => setActiveTab('visa')}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${
                  activeTab === 'visa'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Globe size={20} />
                <span>Visa</span>
              </button>
            </div>
          </div>
        </div>

        {/* Documents Tab */}
        {activeTab === 'documents' && (
          <div className="space-y-8">
            {/* Main Content */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Documents Required to Study in Global Universities
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Application to one of the global colleges involves several steps and varies according to the country, 
                university and level of study. The application procedure includes:
              </p>

              {/* Documents Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {applicationDocuments.map((doc, index) => {
                  const IconComponent = doc.icon;
                  return (
                    <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <div className="flex items-start space-x-4">
                        <div className="bg-blue-600 p-3 rounded-lg">
                          <IconComponent className="text-white" size={24} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-800 mb-2">{doc.title}</h3>
                          <p className="text-gray-600 text-sm">{doc.desc}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Intake Information */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Calendar className="mr-3 text-blue-600" size={28} />
                University Intake Seasons
              </h3>
              <p className="text-gray-600 mb-6">
                The major intake of international universities is Fall, Summer and Spring seasons
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {intakeSeasons.map((intake, index) => (
                  <div key={index} className={`p-6 rounded-xl border-2 transition-all duration-300 hover:shadow-lg ${
                    intake.popular 
                      ? 'bg-gradient-to-br from-orange-50 to-red-50 border-orange-200' 
                      : 'bg-gray-50 border-gray-200'
                  }`}>
                    <div className="text-center">
                      <h4 className="text-xl font-bold text-gray-800 mb-2">{intake.season}</h4>
                      <p className="text-gray-600 mb-3">{intake.months}</p>
                      {intake.popular && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-800">
                          Most Popular
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Visa Tab */}
        {activeTab === 'visa' && (
          <div className="space-y-8">
            {/* Visa Process Overview */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Study Visa Process
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Visa application being a long procedure will have to appear for specific tests and collect 
                the necessary documents. The exams include IELTS, TOEFL or any test that is accepted by 
                the country/university.
              </p>

              {/* Process Steps */}
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                  <div className="bg-blue-600 p-2 rounded-full text-white font-bold min-w-[2rem] h-8 flex items-center justify-center">1</div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Apply Well in Advance</h3>
                    <p className="text-gray-600">For applying for a visa, one has to apply to the specific country well in advance. In case applying for a scholarship, the application should be done well in advance.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100">
                  <div className="bg-green-600 p-2 rounded-full text-white font-bold min-w-[2rem] h-8 flex items-center justify-center">2</div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Gather Required Documents</h3>
                    <p className="text-gray-600">Once all the necessary documents is gathered. Documents such as application form, application fees, attending an interview at the local embassy or consulate.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-purple-50 to-violet-50 rounded-xl border border-purple-100">
                  <div className="bg-purple-600 p-2 rounded-full text-white font-bold min-w-[2rem] h-8 flex items-center justify-center">3</div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Biometric Information</h3>
                    <p className="text-gray-600">Some countries requires the students to provide biometric information such as fingerprints in order to undergo the visa application process.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Required Documents */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Documents Required for Visa Application
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                In every country, there is an immigration department that has specific rules that has to be 
                followed and a set of documents that needs to be in possession while applying for a visa.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {visaDocuments.map((doc, index) => (
                  <div key={index} className="flex items-start space-x-4 p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl border hover:shadow-md transition-all duration-300">
                    <div className="bg-blue-600 p-2 rounded-lg">
                      <CheckCircle className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">{doc.title}</h4>
                      <p className="text-gray-600 text-sm">{doc.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Important Notice */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200">
              <div className="flex items-start space-x-3">
                <AlertCircle className="text-amber-600 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-amber-800 mb-2">Important Notice</h3>
                  <p className="text-amber-700">
                    Visa requirements vary significantly by country and can change frequently. Always consult 
                    the official embassy or consulate website for the most current and specific requirements 
                    for your situation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Global Education Journey?</h3>
            <p className="text-blue-100 mb-6 text-lg">
              Get personalized guidance for your university applications and visa process
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300 flex items-center space-x-2 mx-auto">
              <span>Get Started Today</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}