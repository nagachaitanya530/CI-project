"use client"
import { useState } from 'react';

const CarrerPage = () => {
  const courses = [
    {
      id: 1,
      title: 'Investment Banking',
      image: '/study-abroad-courses/Finance-img.webp',
      gradient: 'from-blue-50 to-blue-100',
      category: 'business'
    },
    {
      id: 2,
      title: 'Healthcare',
      image: '/popular-courses/healthcare-img.webp',
      gradient: 'from-blue-50 to-blue-100',
      category: 'engineering'
    },
    {
      id: 3,
      title: 'Education',
      image: '/study-abroad-courses/educ-img.webp',
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
      title: 'Engineering',
      image: '/study-abroad-courses/engrng-img.webp',
      gradient: 'from-blue-50 to-blue-100',
      category: 'medicine'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12 px-4 mt-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Discover <span className="text-blue-600">Career </span> Prospect Globally 
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-orange-400 to-red-400 mx-auto rounded-full"></div>
          <p className='mt-4'>The job market around the world is diverse, offering opportunities across various sectors. Here are some key sectors and industries that presently offer employment opportunities:</p>
         
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={`${course.id}`}
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
                
              
             

              {/* Course Title */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {course.title}
                </h3>
              </div>

              {/* Floating Badge */}
            
            </div>
          ))}
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

export default CarrerPage;