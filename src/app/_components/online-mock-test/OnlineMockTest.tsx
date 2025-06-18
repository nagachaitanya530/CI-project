'use client';

import React, { useState } from 'react';
import { BarChart3, TrendingUp, Brain, Mic, Target, Shield, Server, Award, Play, CheckCircle, Star, Users, Globe, Clock, Zap, BookOpen, Headphones, PenTool, MessageSquare } from 'lucide-react';

// Hero Section Component
const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 left-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 leading-tight">
                Genuine Testing
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  Experience
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-lg">
                Master IELTS with our revolutionary AI-powered mock tests. Get real-time feedback, 
                detailed analytics, and experience the actual test environment from anywhere.
              </p>
            </div>
            
            <div className="flex flex-col space-y-4 pt-2">
              <div className="flex items-center space-x-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <span className="text-gray-700">AI-powered evaluation technology</span>
              </div>
              <div className="flex items-center space-x-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <span className="text-gray-700">Real-time feedback and analytics</span>
              </div>
              <div className="flex items-center space-x-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <span className="text-gray-700">Simulated test environment for all modules</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group relative bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/30">
                <span className="relative z-10 flex items-center">
                  Start Free Mock Test
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full border-2 border-white"></div>
                </div>
                <span className="text-sm text-gray-600">10,000+ students trust us</span>
              </div>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                  </svg>
                ))}
                <span className="text-sm text-gray-600 ml-1">4.9/5 rating</span>
              </div>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-all duration-500">
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-400 to-blue-500 text-white p-3 rounded-full shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20V10"></path>
                  <path d="M18 20V4"></path>
                  <path d="M6 20v-4"></path>
                </svg>
              </div>
              <img 
                src="/online-mock-test/GuyLookingAtGraph.webp" 
                alt="Student taking IELTS mock test on computer with analytics dashboard"
                className="w-full h-96 object-cover rounded-2xl"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                <div className="text-sm font-semibold text-gray-900">Live Analytics</div>
                <div className="text-xs text-gray-600">Real-time performance tracking</div>
              </div>
            </div>
            
            {/* Floating cards */}
            <div className="absolute -top-8 -left-8 bg-white p-4 rounded-xl shadow-lg animate-float">
              <div className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                <div>
                  <div className="text-sm font-bold">50,000+</div>
                  <div className="text-xs text-gray-500">Tests Taken</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-8 -right-8 bg-white p-4 rounded-xl shadow-lg animate-float animation-delay-1000">
              <div className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <div>
                  <div className="text-sm font-bold">98.5%</div>
                  <div className="text-xs text-gray-500">Accuracy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='%23000000'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
        
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
};

// CI Testing System Component
const CITestingSystemPage = () => {
  const handleMockTestClick = () => {
    // Handle mock test navigation or action
    console.log('Mock test button clicked');
    // You can add navigation logic here, e.g., window.location.href = '/mock-test'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-4 sm:p-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 order-2 lg:order-1">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                <span className="text-blue-500">CI</span>{' '}
                <span>Testing System</span>
              </h1>
              
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Advanced Coaching Institute management with built-in exam system powered by artificial intelligence.
              </p>
              
              <p className="text-sm sm:text-base text-gray-600">
                This system mimics the actual user interface of JEE, NEET, PTE, GET Computer deliver tests.
              </p>
            </div>
            

          </div>
          
          {/* Right Image */}
          <div className="relative order-1 lg:order-2">
            {/* Background decorative elements */}
            <div className="absolute -top-4 -right-4 w-48 h-48 sm:w-72 sm:h-72 bg-blue-200 rounded-full opacity-20 blur-3xl -z-10"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 sm:w-64 sm:h-64 bg-purple-200 rounded-full opacity-20 blur-3xl -z-10"></div>
            
            {/* Main image container */}
            <div className="relative bg-white rounded-xl shadow-2xl p-2 sm:p-4 transform hover:scale-105 transition-transform duration-300">
              <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-gray-100">
                <img 
                  src="/online-mock-test/CI-dashboard.png" 
                  alt="CI Testing System Dashboard"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating elements to mimic the design */}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full shadow-lg"></div>
              <div className="absolute top-4 -right-1 w-6 h-6 bg-blue-400 rounded-full shadow-md"></div>
              <div className="absolute -top-1 right-8 w-4 h-4 bg-blue-300 rounded-full shadow-sm"></div>
              
              {/* Chart/Graph floating element */}
              <div className="absolute top-8 -left-4 bg-white rounded-lg shadow-lg p-3 hidden sm:block">
                <div className="flex items-end space-x-1">
                  <div className="w-2 h-6 bg-blue-400 rounded-sm"></div>
                  <div className="w-2 h-8 bg-blue-500 rounded-sm"></div>
                  <div className="w-2 h-4 bg-blue-300 rounded-sm"></div>
                  <div className="w-2 h-10 bg-blue-600 rounded-sm"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom CTA Section */}
        <div className="text-center mt-16 space-y-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
            Experience it yourself
          </h2>
          
          <button 
            onClick={handleMockTestClick}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            type="button">
            TAKE A FREE MOCK TEST
          </button>
          <p className="text-xs sm:text-sm text-gray-500 italic">
            *You need to create a new account on the next page to take a mock test.
          </p>
        </div>
      </div>
    </div>
  );
};

// Smart Reports Component
const SmartReports = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="bg-white rounded-3xl shadow-2xl p-6 transform rotate-1 hover:rotate-0 transition-all duration-500">
              <img 
                src="/online-mock-test/performance-analytics.png" 
                alt="Detailed IELTS performance reports showing band scores and analytics"
                className="w-full h-96 object-cover rounded-2xl"
              />
              <div className="absolute -top-4 -left-4 bg-gradient-to-r from-emerald-400 to-cyan-500 p-4 rounded-2xl shadow-lg">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
              <div className="text-sm font-bold text-gray-900">Band Score: 7.5</div>
              <div className="text-xs text-gray-600">Above target achieved!</div>
            </div>
          </div>
          
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-6">
              <div className="inline-flex items-center bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium">
                <BarChart3 className="w-4 h-4 mr-2" />
                Advanced Analytics
              </div>
              <h2 className="text-5xl lg:text-6xl font-black text-gray-900">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600">
                  Smart Reports
                </span>
              </h2>
              <div className="space-y-4">
                <p className="text-xl text-gray-700 leading-relaxed">
                  Our AI system understands your strengths and weaknesses, delivering 
                  comprehensive performance reports in an easy-to-understand visual format.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  These detailed analytics help both students and trainers identify specific 
                  areas for improvement, making your preparation more targeted and effective.
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm">
                <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                <span className="font-medium">Band score predictions with 98.5% accuracy</span>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="font-medium">Detailed breakdown by skill areas</span>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="font-medium">Personalized improvement recommendations</span>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span className="font-medium">Progress tracking across multiple attempts</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Unique Features Component
const UniqueFeatures = () => {
  const features = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Ease of Access",
      description: "Simply login with your credentials and start practicing immediately. Compatible across desktop, tablet, and mobile devices.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Item-wise Tests",
      description: "Practice specific question types for each module with granular learning approaches and targeted skill development.",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Fundamental Analysis",
      description: "Deep analytical reports providing insights into your performance patterns in both practice and full mock tests.",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Technical Analysis",
      description: "Parameter-wise technical analysis of your language skills, grammar usage, and communication effectiveness.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Mic className="w-8 h-8" />,
      title: "A.I Speaking",
      description: "Revolutionary computerized speaking tests for IELTS and PTE with instant evaluation and pronunciation feedback.",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Performance Tracking",
      description: "Monitor your improvement journey with detailed progress tracking and performance comparisons over time.",
      color: "from-violet-500 to-purple-500"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-6 py-3 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4 mr-2" />
            Why Choose Our Platform
          </div>
          <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            Unique Features of
          </h2>
          <h3 className="text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-8">
            NIL Mock Test System
          </h3>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our cutting-edge features and comprehensive analytical reports are designed for 
            international-level test preparation. We've combined the best technologies to create 
            the world's most advanced IELTS preparation platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} text-white mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {feature.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 rounded-3xl p-12 lg:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-pattern opacity-10"></div>
          <div className="relative z-10">
            <h3 className="text-4xl lg:text-5xl font-black mb-8">Register Yourself Today</h3>
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Ready to crack IELTS, TOEFL, PTE, OET, or CELPIP? Our comprehensive courses and 
              advanced mock tests provide everything you need for exam success. Join thousands 
              of successful candidates who chose our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl">
                EXPLORE PACKAGES →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Performance Snapshots Component
const PerformanceSnapshots = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Curved header background */}
      <div className="relative bg-gradient-to-br from-slate-700 via-slate-600 to-slate-500 pb-32">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        
        {/* Wavy bottom border */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" fill="white"></path>
          </svg>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 pt-16 pb-8">
          <div className="text-center">
            <h2 className="text-5xl lg:text-6xl font-black mb-6 text-white drop-shadow-lg">
              Check out some snaps
            </h2>
            <p className="text-xl text-gray-100 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
              Fully featured and detailed performance reports, analysis,
              remedial tests and a lot more helpful tools to achieve the best
              possible results.
            </p>
          </div>
        </div>
      </div>
      
      {/* Content section with white background */}
      <div className="container mx-auto px-6 -mt-16 relative z-20 pb-24">
       
        {/* Main content area with enhanced styling */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Performance report image */}
          <div className="group relative">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-all duration-500 border border-gray-100">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img
                src="/online-mock-test/percentage-score.png"
                alt="Detailed IELTS performance analysis showing reading skills breakdown with percentage scores"
                className="w-full h-auto object-cover relative z-10"
              />
              <div className="absolute top-6 right-6 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Performance Report
              </div>
            </div>
          </div>
          
          {/* Right side - Mobile interface and detailed report */}
          <div className="space-y-8">
            {/* Mobile interface at top */}
            <div className="group relative max-w-xs mx-auto lg:mx-0">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition-all duration-500 border border-gray-100">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-cyan-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img
                  src="/online-mock-test/depth-analysis.webp"
                  alt="Mobile IELTS app interface showing personalized report dashboard"
                  className="w-full h-auto object-cover relative z-10"
                />
                <div className="absolute top-4 left-4 bg-emerald-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  Mobile App
                </div>
              </div>
            </div>
            
            {/* Detailed report below */}
            <div className="group relative">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition-all duration-500 border border-gray-100">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-red-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img
                  src="/online-mock-test/personalised-report.webp"
                  alt="Comprehensive IELTS performance report with test results and recommendations"
                  className="w-full h-auto object-cover relative z-10"
                />
                <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Detailed Analysis
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Testimonial Component
const TestimonialSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="bg-white rounded-3xl shadow-2xl p-6 transform -rotate-1 hover:rotate-0 transition-all duration-500">
              <div className="w-full h-96 rounded-2xl overflow-hidden relative">
                {/* Main image with overlay */}
                <img 
                  src="online-mock-test/testimonial.webp" 
                  alt="Successful students celebrating" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/30 to-yellow-500/30 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17 3a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7a4 4 0 014-4h10zm-7 8a1 1 0 00-1 1v1a1 1 0 002 0v-1a1 1 0 00-1-1zm0 4a1 1 0 100 2 1 1 0 000-2zm3-8a3 3 0 00-6 0v4a3 3 0 006 0V7zm-3-1a1 1 0 011 1v4a1 1 0 11-2 0V7a1 1 0 011-1z" />
                      </svg>
                    </div>
                    <div className="text-2xl font-bold text-white drop-shadow-md">Success Stories</div>
                    <div className="text-gray-100 font-medium">Student Achievements</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-400 to-yellow-500 p-4 rounded-full shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17 3a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7a4 4 0 014-4h10zm-7 8a1 1 0 00-1 1v1a1 1 0 002 0v-1a1 1 0 00-1-1zm0 4a1 1 0 100 2 1 1 0 000-2zm3-8a3 3 0 00-6 0v4a3 3 0 006 0V7zm-3-1a1 1 0 011 1v4a1 1 0 11-2 0V7a1 1 0 011-1z" />
                </svg>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
              <div className="flex items-center space-x-3">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                  alt="Sarah Johnson" 
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
                />
                <div>
                  <div className="font-bold text-gray-900">Sarah Johnson</div>
                  <div className="text-sm text-gray-600">Achieved IELTS 8.0</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-6">
              <div className="inline-flex items-center bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 14v8H4a8 8 0 018-8zm0-1a8 8 0 110-16 8 8 0 010 16zm9 3a1 1 0 010 2h-5a1 1 0 010-2h5z" />
                </svg>
                Student Testimonials
              </div>
              <h2 className="text-5xl lg:text-6xl font-black text-gray-900">
                Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Thousands</span>
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                Hear from our successful students who achieved their dream scores with our AI-powered platform.
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-lg p-6 relative">
                <div className="absolute top-6 right-6">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                    alt="Raj Patel" 
                    className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md"
                  />
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">Raj Patel</h4>
                    <p className="text-gray-600 mb-4">Scored IELTS 7.5</p>
                    <p className="text-gray-700 italic">
                      "The AI speaking evaluation was incredibly accurate. It caught pronunciation mistakes 
                      I didn't even know I was making. The detailed writing feedback helped me improve from 
                      6.5 to 7.0 in just 3 weeks!"
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-start space-x-4">
                  <img 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80" 
                    alt="Emma Chen" 
                    className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md"
                  />
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">Emma Chen</h4>
                    <p className="text-gray-600 mb-4">Achieved PTE 85</p>
                    <p className="text-gray-700 italic">
                      "The performance analytics dashboard showed exactly where I needed improvement. 
                      The mock tests felt like the real exam, which made me completely comfortable on test day. 
                      Worth every penny!"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// FAQ Section
const FAQSection = () => {
  const faqs = [
    {
      question: "How accurate is the AI evaluation?",
      answer: "Our AI evaluation system has been trained on thousands of real IELTS test samples and achieves 98.5% accuracy compared to human examiners. It's constantly updated with new test patterns."
    },
    {
      question: "How long does it take to get results?",
      answer: "You'll receive instant results for Listening and Reading sections. For Writing and Speaking, detailed evaluations are available within 5 minutes after submission."
    },
    {
      question: "Can I take the tests multiple times?",
      answer: "Yes! We offer unlimited mock tests with our premium packages. Each test has unique questions from our extensive question bank."
    },
    {
      question: "Do I need special equipment for speaking tests?",
      answer: "Just a standard computer with microphone and internet connection. Our system works with any modern browser without additional installations."
    },
    {
      question: "How is this different from other IELTS prep platforms?",
      answer: "Our platform offers the most realistic test simulation, comprehensive analytics, and personalized improvement plans powered by cutting-edge AI that adapts to your learning style."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

const toggleFAQ = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
};

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-indigo-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Headphones className="w-4 h-4 mr-2" />
              We're Here to Help
            </div>
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Questions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Find answers to common questions about our platform, features, and how to get started with your IELTS preparation journey.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <button
                  className="w-full flex justify-between items-center p-6 text-left"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-xl font-bold text-gray-900">{faq.question}</h3>
                  <div className="ml-4 flex-shrink-0">
                    {openIndex === index ? (
                      <span className="text-indigo-600 text-2xl">−</span>
                    ) : (
                      <span className="text-indigo-600 text-2xl">+</span>
                    )}
                  </div>
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Features Section Component
const FeaturesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* 99.99% Uptime Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">99.99% Uptime</h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                Our platform is hosted on trusted cloud servers from 
                Amazon & Microsoft Azure.
              </p>
              <button 
                onClick={() => window.open('https://aws.amazon.com/what-is-cloud-computing/', '_blank')}
                className="text-blue-400 text-sm font-semibold hover:text-blue-600 transition-colors cursor-pointer"
              >
                LEARN MORE
              </button>
            </div>
            <div className="h-48">
              <img 
                src="/online-mock-test/amazon-graph.webp" 
                alt="Cloud infrastructure showing Amazon and Microsoft logos with uptime statistics"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Licensed Techs Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Licensed Techs</h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                We have built the platform with fully licensed software and 
                technologies.
              </p>
              <button 
                onClick={() => window.open('https://www.oracle.com/java/technologies/javase/8u-relnotes.html', '_blank')}
                className="text-blue-400 text-sm font-semibold hover:text-blue-600 transition-colors cursor-pointer"
              >
                LEARN MORE
              </button>
            </div>
            <div className="h-48">
              <img 
                src="/online-mock-test/calculation.webp" 
                alt="Business analytics dashboard with charts, graphs and calculator showing licensed technology"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Security Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Security</h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                Which take your privacy seriously and take all measures to 
                keep it safe.
              </p>
              <button 
                onClick={() => window.open('https://clario.co/blog/what-is-online-privacy/', '_blank')}
                className="text-blue-400 text-sm font-semibold hover:text-blue-600 transition-colors cursor-pointer"
              >
                LEARN MORE
              </button>
            </div>
            <div className="h-48">
              <img 
                src="/online-mock-test/security.webp"
                alt="Hand holding a security lock icon against modern building backdrop representing data security"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// Main App Component
const OnlineMockTest = () => {
  return (
    <div className="font-sans">
      <HeroSection />
      <CITestingSystemPage />
      <SmartReports />
      <UniqueFeatures />
      <PerformanceSnapshots />
      <TestimonialSection />
      <FAQSection />
      <FeaturesSection />
    </div>
  );
};

export default OnlineMockTest;