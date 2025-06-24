import React, { useState } from 'react';
import { GraduationCap, Users, Award, Globe } from 'lucide-react';

export default function BookFreeConsultation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    course: '',
    month: '',
    year: '',
    consent: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' && (e.target as HTMLInputElement).checked;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const benefits = [
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "Global Recognition",
      description: "Educational qualifications from the best universities in the world are recognized internationally."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "International Network",
      description: "Student gets to build a diverse network of friends, colleagues and mentors from all over the world."
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-blue-600" />,
      title: "Quality Education",
      description: "Gain access to the highest quality of education possible by studying at some of the highest ranked universities in the world."
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      title: "Citizenship",
      description: "Opportunities to gain citizenship or permanent residency in countries with strong educational systems and career prospects."
    }
  ];

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const years = ['2024', '2025', '2026', '2027', '2028'];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Section - Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Why Study In Global Universities?
              </h1>
              <div className="w-24 h-1 bg-orange-500 mb-8"></div>
            </div>

            <div className="space-y-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4 p-6 bg-white rounded-lg shadow-sm border border-gray-100">
                  <div className="flex-shrink-0">
                    {benefit.icon}
                  </div>

                
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-blue-700 mb-2">
                Book your Free Consultation
              </h2>
              <p className="text-blue-600 font-medium">
                with Trustworthy Counsellors
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <input
                  type="text"
                  name="course"
                  placeholder="Preferred Course"
                  value={formData.course}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <select
                    name="month"
                    value={formData.month}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none transition-colors text-gray-500"
                  >
                    <option value="">Select Month</option>
                    {months.map(month => (
                      <option key={month} value={month} className="text-gray-900">
                        {month}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <select
                    name="year"
                    value={formData.year}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none transition-colors text-gray-500"
                  >
                    <option value="">Select Year</option>
                    {years.map(year => (
                      <option key={year} value={year} className="text-gray-900">
                        {year}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  name="consent"
                  id="consent"
                  checked={formData.consent}
                  onChange={handleInputChange}
                  className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="consent" className="text-sm text-gray-600 leading-relaxed">
                  I consent to receiving Calls, WhatsApp, Email and Google RCS from Edwise to assist with this enquiry.
                </label>
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Book Free Consultation
              </button>
            </div>

            {/* Chat Support Button */}
            <div className="fixed bottom-6 right-6">
              <button className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-colors duration-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 2.98.97 4.29L1 23l6.71-1.97C9.02 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.38 0-2.7-.3-3.87-.84L7 20l.84-1.13C7.3 17.7 7 16.38 7 15c0-2.76 2.24-5 5-5s5 2.24 5 5-2.24 5-5 5z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}