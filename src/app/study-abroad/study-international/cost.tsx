import React, { useState, useEffect } from 'react';
import { GraduationCap, MapPin, Calculator, TrendingUp, BookOpen, Home, Utensils, Plane, Award } from 'lucide-react';

export default function CostOfStudyingPage() {
  const [selectedDegree, setSelectedDegree] = useState('Bachelor\'s');
  const [currency, setCurrency] = useState('INR');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const tuitionData = {
    "Bachelor's": { min: 100000, max: 2000000 },
    "Master's": { min: 3000000, max: 3200000 },
    "Doctorate": { min: 3900000, max: 5300000 }
  };

  const additionalCosts = [
    { icon: Home, label: 'Accommodation', cost: '₹50,000 - ₹2,00,000/year' },
    { icon: Utensils, label: 'Food & Dining', cost: '₹30,000 - ₹80,000/year' },
    { icon: BookOpen, label: 'Books & Supplies', cost: '₹15,000 - ₹40,000/year' },
    { icon: Plane, label: 'Travel & Transport', cost: '₹20,000 - ₹1,00,000/year' }
  ];

  const scholarshipOptions = [
    { name: 'Merit-based Scholarships', coverage: 'Up to 100% tuition', eligibility: 'Academic Excellence' },
    { name: 'Need-based Aid', coverage: '25% - 75% expenses', eligibility: 'Financial Need' },
    { name: 'Research Assistantships', coverage: 'Tuition + Stipend', eligibility: 'Graduate Students' },
    { name: 'Government Schemes', coverage: 'Varies', eligibility: 'Category-based' }
  ];

  const formatCurrency = (amount: number | bigint) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
     
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-5xl font-bold  text-blue-600 bg-clip-text mb-6">
              Cost of Studying
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-pink-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              The cost of studying for international students depends on several factors, including the 
              institution, program of study, location, and available funding opportunities. Additionally, 
              living expenses such as rent, utilities, and recreational activities play a significant role 
              in the overall cost.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Tuition Calculator */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/30 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8">
              <div className="flex items-center space-x-3 mb-4">
                <Calculator className="h-8 w-8 text-white" />
                <h3 className="text-2xl font-bold text-white">Tuition Fee Calculator</h3>
              </div>
              <p className="text-blue-100">Average per annum costs across different degree levels</p>
            </div>
            
            <div className="p-8">
              {/* Degree Selection */}
              <div className="flex flex-wrap gap-4 mb-8">
                {Object.keys(tuitionData).map((degree) => (
                  <button
                    key={degree}
                    onClick={() => setSelectedDegree(degree)}
                    className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      selectedDegree === degree
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg transform scale-105'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-102'
                    }`}
                  >
                    {degree}
                  </button>
                ))}
              </div>

              {/* Fee Display */}
              <div className="grid md:grid-cols-3 gap-6">
                {Object.entries(tuitionData).map(([degree, costs]) => (
                  <div
                    key={degree}
                    className={`p-6 rounded-2xl border-2 transition-all duration-300 ${
                      selectedDegree === degree
                        ? 'border-blue-500 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-lg transform scale-105'
                        : 'border-gray-200 bg-white hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-semibold text-gray-900">{degree}</h4>
                      <Award className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-2">
                      {formatCurrency(costs.min)} - {formatCurrency(costs.max)}
                    </div>
                    <p className="text-sm text-gray-600">Per academic year</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>    
    </div>
  );
}