"use client"
import { useState } from 'react';

const TrendingCoursesPage = () => {
  const [activeTab, setActiveTab] = useState('UK');

  const tabs = [
    { id: 'UK', label: 'Courses in the UK' },
    { id: 'USA', label: 'Courses in the USA' },
    { id: 'Canada', label: 'Courses in Canada' },
    { id: 'Australia', label: 'Courses in Australia' }
  ];

  const courses = [
    {
      id: 1,
      title: 'Business Management',
      image: '/study-abroad-courses/mba-img.webp',
      gradient: 'from-blue-50 to-blue-100',
      category: 'business'
    },
    {
      id: 2,
      title: 'Engineering',
      image: '/study-abroad-courses/engrng-img.webp',
      gradient: 'from-blue-50 to-blue-100',
      category: 'engineering'
    },
    {
      id: 3,
      title: 'Computer Science',
      image: '/study-abroad-courses/it-img.webp',
      gradient: 'from-blue-50 to-blue-100',
      category: 'technology'
    },
    {
      id: 4,
      title: 'Law',
      image: '/study-abroad-courses/law-img.webp',
      gradient: 'from-blue-50 to-blue-100',
      category: 'law'
    },
    {
      id: 5,
      title: 'Data Analytics',
      image: '/study-abroad-courses/Finance-img.webp',
      gradient: 'from-blue-50 to-blue-100',
      category: 'analytics'
    },
    {
      id: 6,
      title: 'Environmental Science',
      image: '/study-abroad-courses/envr-scie-img.webp',
      gradient: 'from-blue-50 to-blue-100',
      category: 'medicine'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Discover <span className="text-blue-600">Trending Courses</span> Worldwide
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-orange-400 to-red-400 mx-auto rounded-full"></div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-xl'
                  : 'bg-white text-gray-600 hover:bg-blue-50 shadow-md'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={`${activeTab}-${course.id}`}
              className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-blue-50 to-blue-100 cursor-pointer`}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Course Image */}
              <div className="relative h-64 overflow-hidden">
                    <div className="w-full h-full  flex items-center justify-center">
                   <img src={course.image}></img>
                  </div>
                  </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
             

              {/* Course Title */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {course.title}
                </h3>
                <p className="text-gray-600 mt-2">
                  Explore comprehensive {course.title.toLowerCase()} programs in {activeTab}
                </p>
                
                {/* Action Button */}
                <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300 transform group-hover:scale-105">
                  Learn More
                </button>
              </div>

              {/* Floating Badge */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                {activeTab}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-full text-xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-xl">
            View All Courses in {activeTab}
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default TrendingCoursesPage;