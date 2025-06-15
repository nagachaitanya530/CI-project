"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Phone, Users, TrendingUp, Clock } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface ProgressBarProps {
  label: string;
  value: number;
  maxValue?: number;
  color?: string;
  delay?: number;
}

const AnimatedProgressBar = ({ label, value, maxValue = 100, color = "bg-blue-500", delay = 0 }: ProgressBarProps) => {
  const [animatedValue, setAnimatedValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const barRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry && entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        const duration = 2000; // 2 seconds
        const steps = 60;
        const increment = value / steps;
        let current = 0;

        const interval = setInterval(() => {
          current += increment;
          if (current >= value) {
            setAnimatedValue(value);
            clearInterval(interval);
          } else {
            setAnimatedValue(Math.floor(current));
          }
        }, duration / steps);

        return () => clearInterval(interval);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isVisible, value, delay]);

  const percentage = (animatedValue / maxValue) * 100;

  return (
    <div ref={barRef} className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700">{label}</span>
        <span className="text-sm font-bold text-gray-900">{animatedValue}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div
          className={`h-full ${color} rounded-full transition-all duration-75 ease-out`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

const StatCard = ({ icon: Icon, title, value, unit, color = "text-blue-600", delay = 0 }: { icon: LucideIcon, title: string, value: number, unit: string, color?: string, delay?: number }) => {
  const [animatedValue, setAnimatedValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry && entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        const duration = 1500;
        const steps = 50;
        const increment = value / steps;
        let current = 0;

        const interval = setInterval(() => {
          current += increment;
          if (current >= value) {
            setAnimatedValue(value);
            clearInterval(interval);
          } else {
            setAnimatedValue(Math.floor(current));
          }
        }, duration / steps);

        return () => clearInterval(interval);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isVisible, value, delay]);

  return (
    <div ref={cardRef} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
      <div className="flex items-center space-x-3">
        <div className={`p-2 rounded-lg bg-opacity-10 ${color.replace('text-', 'bg-')}`}>
          <Icon className={`w-5 h-5 ${color}`} />
        </div>
        <div>
          <p className="text-sm text-gray-600">{title}</p>
          <p className="text-xl font-bold text-gray-900">
            {animatedValue}{unit}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function NILAnalyticsComponent() {
  return (
    <div className="w-full bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Main Content Section - Mobile First */}
          <div className="order-2 lg:order-1 space-y-4 sm:space-y-6">
            <div className="relative">
              <img 
                src="/api/placeholder/400/250" 
                alt="Students in classroom" 
                className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" />
            </div>
            
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
              <div className="mb-4">
                <p className="text-xs sm:text-sm text-gray-600 italic leading-relaxed">
                  "IELTS examination opens the door for many different opportunities. NIL online IELTS classes have always proved to be the best in the industry since its inception."
                </p>
                <p className="text-xs sm:text-sm font-semibold text-gray-800 mt-2">Director training-NIL</p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                <img 
                  src="/api/placeholder/150/150" 
                  alt="Online learning" 
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover mx-auto sm:mx-0"
                />
                <div className="text-center sm:text-left">
                  <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-2 inline-block">
                    Live Online Classes
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600">Expert Trainers From</p>
                  <div className="flex items-center justify-center sm:justify-start space-x-1">
                    <span className="text-red-500 font-bold text-sm">BRITISH</span>
                    <span className="text-blue-500 font-bold text-sm">COUNCIL</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 sm:mt-6 bg-gray-800 text-white p-3 sm:p-4 rounded-lg">
                <div className="flex items-center justify-center sm:justify-start space-x-3">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0" />
                  <div className="text-center sm:text-left">
                    <p className="font-semibold text-sm sm:text-base">Let's Talk Now</p>
                    <p className="text-xs sm:text-sm">(+91) 9569 285 185</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Analytics Section - Mobile First */}
          <div className="order-1 lg:order-2 space-y-4 sm:space-y-6">
            <div className="text-center">
              <div className="text-xs sm:text-sm text-blue-600 font-medium mb-2">NIL Online IELTS Courses</div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
                National Institute of Language offers unmatched benefits.
              </h1>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                Our online IELTS Online courses come with numerous features and services that are not available anywhere. Our online IELTS classes feel like regular physical classroom with cost and time benefits.
              </p>
            </div>

            {/* Real-time Stats Cards - Mobile Grid */}
            <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-4 sm:mb-6">
              <StatCard
                icon={Users}
                title="Active Students"
                value={1250}
                unit=""
                color="text-blue-600"
                delay={0}
              />
              <StatCard
                icon={TrendingUp}
                title="Success Rate"
                value={96}
                unit="%"
                color="text-green-600"
                delay={200}
              />
              <StatCard
                icon={Clock}
                title="Avg. Improvement"
                value={2.5}
                unit=" bands"
                color="text-purple-600"
                delay={400}
              />
              <StatCard
                icon={Users}
                title="Expert Trainers"
                value={45}
                unit=""
                color="text-orange-600"
                delay={600}
              />
            </div>

            {/* Analytics Section */}
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 sm:mb-6 text-center sm:text-left">Real-time Analytics</h3>
              
              <div className="space-y-3 sm:space-y-4">
                <div className="bg-green-50 p-3 sm:p-4 rounded-lg">
                  <h4 className="text-xs sm:text-sm font-medium text-green-800 mb-2 sm:mb-3">Comprehensive preparation</h4>
                  <AnimatedProgressBar
                    label="All four sections"
                    value={99}
                    color="bg-green-500"
                    delay={800}
                  />
                </div>

                <div className="bg-blue-50 p-3 sm:p-4 rounded-lg">
                  <h4 className="text-xs sm:text-sm font-medium text-blue-800 mb-2 sm:mb-3">Success rate</h4>
                  <AnimatedProgressBar
                    label="7.5 bands and above"
                    value={86}
                    color="bg-blue-500"
                    delay={1000}
                  />
                </div>

                <div className="bg-purple-50 p-3 sm:p-4 rounded-lg">
                  <h4 className="text-xs sm:text-sm font-medium text-purple-800 mb-2 sm:mb-3">Time saving</h4>
                  <AnimatedProgressBar
                    label="60% less time"
                    value={60}
                    color="bg-purple-500"
                    delay={1200}
                  />
                </div>
              </div>

              <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                <div className="flex flex-col sm:flex-row items-center sm:justify-between space-y-2 sm:space-y-0">
                  <div className="text-center sm:text-left">
                    <p className="text-xs sm:text-sm font-medium text-gray-700">Live Session Status</p>
                    <p className="text-xs text-gray-500">Updated in real-time</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs sm:text-sm text-green-600 font-medium">Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}