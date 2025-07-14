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
          
        </div>
      </div>
    </div>
  );
}