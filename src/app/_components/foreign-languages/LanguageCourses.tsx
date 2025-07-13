import React from 'react';
import { Clock, Award, Star } from 'lucide-react';

const LanguageCourses = () => {
  const courses = [
    {
      id: 1,
      language: 'French Language',
      level: 'CEFR Level A1-B2',
      flag: 'https://flagcdn.com/w320/fr.png',
      duration: '90 Hours Online',
      certification: 'Certificate',
      rating: 4.9
    },
    {
      id: 2,
      language: 'German Language',
      level: 'CEFR Level A1-B2',
      flag: 'https://flagcdn.com/w320/de.png',
      duration: '90 Hours Online',
      certification: 'Certificate',
      rating: 4.8
    },
    {
      id: 3,
      language: 'Spanish Language',
      level: 'CEFR Level A1-B2',
      flag: 'https://flagcdn.com/w320/es.png',
      duration: '90 Hours Online',
      certification: 'Certificate',
      rating: 4.7
    },
    {
      id: 5,
      language: 'Korean Language',
      level: 'TOPIK I-II',
      flag: 'https://flagcdn.com/w320/kr.png',
      duration: '90 Hours Online',
      certification: 'Certificate',
      rating: 4.7
    },
    {
      id: 6,
      language: 'Mandarin (Chinese)',
      level: 'HSK 1-4',
      flag: 'https://flagcdn.com/w320/cn.png',
      duration: '90 Hours Online',
      certification: 'Certificate',
      rating: 4.6
    },
    {
      id: 7,
      language: 'Arabic Language',
      level: 'Beginner to Intermediate',
      flag: 'https://flagcdn.com/w320/sa.png',
      duration: '90 Hours Online',
      certification: 'Certificate',
      rating: 4.6
    }
  ];

  const kidsCourses = [
    {
      id: 8,
      language: 'French For Kids',
      flag: 'https://flagcdn.com/w320/fr.png',
      duration: '3 month',
      certification: 'Certificate',
      rating: 4.6
    },
    {
      id: 9,
      language: 'German For Kids',
      flag: 'https://flagcdn.com/w320/de.png',
      duration: '3 month',
      certification: 'Certificate',
      rating: 4.6
    }
  ];

  const StarRating = ({ rating }: { rating: number }) => {
    const filledStars = Math.floor(rating);
    return (
      <div className="flex items-center gap-1 text-sm text-gray-700">
        <span className="text-gray-500 text-sm">{rating}</span>
        {Array.from({ length: 5 }, (_, i) => (
          <Star
            key={i}
            size={12}
            className={`${i < filledStars ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Choose The Best Course For You
        </h1>

        {/* Main Courses */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-xl border shadow-sm overflow-hidden hover:shadow-lg transition-all transform hover:-translate-y-1 duration-300 p-2"
            >
              <div className="h-32 w-full overflow-hidden rounded-t-md">
                <img
                  src={course.flag}
                  alt={`${course.language} Flag`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-sky-700 mb-1">{course.language}</h3>
                <p className="text-sky-500 text-sm font-medium mb-3">{course.level}</p>

                <div className="flex items-center justify-between text-xs text-gray-600 mb-3">
                  <div className="flex items-center gap-1">
                    <Clock size={14} className="text-green-500" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Award size={14} className="text-green-500" />
                    {course.certification}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <StarRating rating={course.rating} />
                  <button className="bg-green-500 hover:bg-blue-500 text-white text-sm font-semibold py-2 px-3 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-md hover:cursor-pointer">
                    ENROL NOW
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Kids Courses */}
        <div className="grid md:grid-cols-2 gap-6">
          {kidsCourses.map((course) => (
            <div
              key={course.id}
              className="bg-sky-100 rounded-lg overflow-hidden hover:shadow-md transition-transform hover:-translate-y-1 duration-300"
            >
              <div className="flex items-center">
                <div className="w-40 h-28 overflow-hidden shrink-0">
                  <img
                    src={course.flag}
                    alt={`${course.language} Flag`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 flex-1">
                  <h3 className="text-lg font-semibold text-sky-700 mb-1">{course.language}</h3>
                  <div className="flex items-center justify-between text-xs text-gray-700 mb-2">
                    <div className="flex items-center gap-1">
                      <Clock size={14} className="text-green-500" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Award size={14} className="text-green-500" />
                      {course.certification}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <StarRating rating={course.rating} />
                    <button className="bg-green-500 hover:bg-blue-500 text-white text-sm font-semibold py-2 px-3 rounded-md transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-md hover:cursor-pointer">
                      ENROL NOW
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageCourses;
