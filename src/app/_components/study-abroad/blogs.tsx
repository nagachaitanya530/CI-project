import React from 'react';
import { ArrowRight, Calendar, Users, BookOpen } from 'lucide-react';
import Link from 'next/link'
const TrendingInsightsPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Edwise's World Education Fair is Back in 2025!",
      image: "/study-aborad/blog/edwises-world-education-fair-is-back-in-2025-Thumbnail.webp",
      description: "Join thousands of students and education experts at the biggest education fair of the year. Discover opportunities from top universities worldwide.",
      category: "Events",
      readTime: "5 min read",
      date: "June 20, 2025",
      path:"/study-abroad-blogs/study-mba"
    },
    {
      id: 2,
      title: "MBA in Canada for Indian Students",
      image: "/study-aborad/blog/mba-in-canada-for-indian-students-Thumbnail.webp",
      description: "Complete guide to pursuing MBA in Canada - admission requirements, top universities, scholarships, and career prospects for Indian students.",
      category: "Study Abroad",
      readTime: "8 min read",
      date: "June 18, 2025",
      path:"/study-abroad-blogs/study-mba"
    },
    {
      id: 3,
      title: "Popular Courses to Study Abroad",
      image: "/study-aborad/blog/popular-courses-to-study-abroad.webp",
      description: "Explore the most in-demand courses for international students. From STEM to business, find the right program for your career goals.",
      category: "Career Guidance",
      readTime: "6 min read",
      date: "June 15, 2025",
       path:"/study-abroad-blogs/study-mba"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Trending Insights & 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 relative">
              {" "}Blogs
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-full transform translate-y-2"></div>
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest trends in education, study abroad opportunities, and career insights
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 max-w-7xl mx-auto">
          {blogPosts.map((post, index) => (
            <div 
              key={post.id} 
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-64">
              <img src={post.image}/>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {post.description}
                </p>

                {/* Read More Button */}
              
                <button className="group/btn inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-all duration-200 border-2 border-blue-600 hover:border-blue-700 px-6 py-3 rounded-full hover:bg-blue-50">
                <Link href={post.path || "#"}>Read More</Link>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingInsightsPage;