import React, { useState, useEffect } from 'react';
import { Award, Globe, DollarSign, Calendar, Users, BookOpen, ChevronRight, Search, Filter, Star, MapPin, Clock, CheckCircle } from 'lucide-react';

export default function ScholarshipsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  type Scholarship = {
    id: number;
    name: string;
    category: string;
    country: string;
    amount: string;
    deadline: string;
    eligibility: string;
    description: string;
    benefits: string[];
    duration: string;
    fields: string[];
    rating: number;
  };
  
  const [activeScholarship, setActiveScholarship] = useState<Scholarship | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  
  const categories = ['All', 'Government', 'Private', 'Foundation', 'Trust'];



  const stats = [
    { icon: Award, label: 'Active Scholarships', value: '500+', color: 'from-blue-500 to-cyan-500' },
    { icon: Globe, label: 'Countries', value: '50+', color: 'from-green-500 to-emerald-500' },
    { icon: DollarSign, label: 'Total Funding', value: '$2B+', color: 'from-purple-500 to-pink-500' },
    { icon: Users, label: 'Students Helped', value: '10K+', color: 'from-orange-500 to-red-500' }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
    
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <h2 className="text-5xl font-bold bg-clip-text text-blue-700 mb-6">
                Scholarships In Global Universities
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-pink-500 mb-8 rounded-full"></div>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Students who wish to fund their foreign education can apply to the following scholarships. 
                Unlock opportunities for world-class education with comprehensive funding support.
              </p>
             
            </div>
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-2xl opacity-20"></div>
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
                  <img 
                    src="/popular-courses/scholar-img.webp" 
                    alt="Graduate celebrating" 
                    className="w-full h-80 object-cover rounded-2xl mb-6"
                  />
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Success Stories</h3>
                      <p className="text-gray-600">10,000+ students funded</p>
                    </div>
                    <div className="flex space-x-1">
                      {[1,2,3,4,5].map(star => (
                        <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}