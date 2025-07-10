"use client";

import React from "react";
import Navigation from "../../_components/Navigation";
import { Button } from "~/components/ui/button";
import { Card, CardHeader, CardContent } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Shield } from "lucide-react";
import Footer from '../../_components/Footer';

const IeltsGeneral = () => {
  const whitePackages = [
    {
      title: "Group Classes - 1 Month",
      price: "₹1,990",
      duration: "1 month",
      features: [
        "2 Hours Classes",
        "Mon-Fri, Flexible Timings",
        "Cambridge Certified Trainers",
        "Group Discussions",
        "4 Personality Development Modules"
      ],
      image: "/fees/spokenenglishpackage/gp1.webp"
    },
    {
      title: "Group Classes - 3 Months",
      price: "₹4,990",
      duration: "3 months",
      features: [
        "2 Hours Daily Classes",
        "Flexible Weekend Sessions",
        "Mock Tests & Feedback",
        "Speaking Practice Groups",
        "4 Personality Development Modules"
      ],
      image: "/fees/spokenenglishpackage/gp3.webp"
    },
    {
      title: "Group Classes - 3 Months",
      price: "₹4,990",
      duration: "3 months",
      features: [
        "Comprehensive Module Coverage",
        "Weekly Assessment Tests",
        "Writing Task Corrections",
        "Personality Development Modules",
        "Career Guidance Sessions"
      ],
      image: "/fees/spokenenglishpackage/gp6.webp"
    },
    {
      title: "Individual Classes - 1 Month",
      price: "₹2,990",
      duration: "1 month",
      features: [
        "Personal Attention",
        "Customized Study Plan",
        "Flexible Scheduling",
        "Individual Progress Tracking",
        "4 Personality Development Modules"
      ],
      image: "/fees/spokenenglishpackage/gdsg1.webp"
    },
    {
      title: "Individual Classes - 2 Months",
      price: "₹5,500",
      duration: "2 months",
      features: [
        "One-on-One Sessions",
        "Detailed Performance Analysis",
        "Custom Practice Materials",
        "Speaking Confidence Building",
        "4 Personality Development Modules"
      ],
      image: "/fees/spokenenglishpackage/gdsg3.webp"
    },
    {
      title: "Weekend Batch - 1 Month",
      price: "₹2,490",
      duration: "1 month",
      features: [
        "Saturday & Sunday Classes",
        "3 Hours Intensive Sessions",
        "Working Professional Focused",
        "Flexible Timing Options",
        "4 Personality Development Modules"
      ],
      image: "/fees/spokenenglishpackage/aeg6.webp"
    },
    {
      title: "Intensive Course - 2 Weeks",
      price: "₹1,490",
      duration: "2 weeks",
      features: [
        "Daily 4-Hour Sessions",
        "Rapid Skill Development",
        "Quick Test Strategies",
        "Emergency Preparation",
        "4 Personality Development Modules"
      ],
      image: "/fees/spokenenglishpackage/aeg6.webp"
    },
    {
      title: "Premium Package - 3 Months",
      price: "₹6,990",
      duration: "3 months",
      features: [
        "All Premium Features",
        "Personal Mentor Assigned",
        "Unlimited Practice Tests",
        "Guaranteed Score Improvement",
        "4 Personality Development Modules"
      ],
      image: "/fees/spokenenglishpackage/aeg6.webp"
    }
  ];

  const blackPackages = [
    {
      title: "Advanced Speaking - 1 Month",
      price: "₹2,490",
      duration: "1 month",
      features: [
        "Intensive Speaking Practice",
        "Native Speaker Sessions",
        "Pronunciation Correction",
        "Confidence Building",
        "4 Personality Development Modules"
      ],
      image: "/fees/spokenenglishpackage/pt30.webp"
    },
    {
      title: "Writing Mastery - 2 Months",
      price: "₹3,990",
      duration: "2 months",
      features: [
        "Task 1 & Task 2 Focus",
        "Grammar Enhancement",
        "Vocabulary Building",
        "Essay Structure Training",
        "4 Personality Development Modules"
      ],
      image: "/fees/spokenenglishpackage/pt40.webp"
    },
    {
      title: "Listening Excellence - 1 Month",
      price: "₹1,990",
      duration: "1 month",
      features: [
        "Audio Practice Sessions",
        "Note-taking Techniques",
        "Accent Familiarization",
        "Speed Listening Training",
        "4 Personality Development Modules"
      ],
      image: "/fees/spokenenglishpackage/pt30.webp"
    },
    {
      title: "Reading Comprehension - 1.5 Months",
      price: "₹2,790",
      duration: "1.5 months",
      features: [
        "Speed Reading Techniques",
        "Skimming & Scanning",
        "Vocabulary in Context",
        "Time Management",
        "4 Personality Development Modules"
      ],
      image: "/fees/spokenenglishpackage/bept1.webp"
    },
    {
      title: "Mock Test Series - 1 Month",
      price: "₹1,590",
      duration: "1 month",
      features: [
        "Weekly Full Tests",
        "Detailed Score Analysis",
        "Performance Tracking",
        "Improvement Strategies",
        "4 Personality Development Modules"
      ],
      image: "/fees/spokenenglishpackage/bept1.webp"
    },
    {
      title: "Express Preparation - 1 Week",
      price: "₹990",
      duration: "1 week",
      features: [
        "6 Hours Daily Sessions",
        "Last-minute Strategies",
        "Quick Review",
        "Exam Day Tips",
        "4 Personality Development Modules"
      ],
      image: "/fees/spokenenglishpackage/pt3.webp"
    },
    {
      title: "Band 7+ Guarantee - 4 Months",
      price: "₹8,990",
      duration: "4 months",
      features: [
        "Score Guarantee Program",
        "Extended Support",
        "Unlimited Retakes",
        "Personal Coach",
        "4 Personality Development Modules"
      ],
      image: "/fees/spokenenglishpackage/pt3.webp"
    },
    {
      title: "Online Live Classes - 2 Months",
      price: "₹2,990",
      duration: "2 months",
      features: [
        "Interactive Online Sessions",
        "Recorded Classes Access",
        "Digital Materials",
        "24/7 Support",
        "4 Personality Development Modules"
      ],
      image: "/fees/spokenenglishpackage/pt31.webp"
    },
    {
      title: "Corporate Batch - 3 Months",
      price: "₹5,490",
      duration: "3 months",
      features: [
        "Workplace English Focus",
        "Business Communication",
        "Professional Settings",
        "Team Learning",
        "4 Personality Development Modules"
      ],
      image: "/fees/spokenenglishpackage/pt630.webp"
    },
    {
      title: "Specialized Writing - 6 Weeks",
      price: "₹2,290",
      duration: "6 weeks",
      features: [
        "Academic Writing Focus",
        "Research Skills",
        "Citation Methods",
        "Advanced Grammar",
        "4 Personality Development Modules"
      ],
      image: "/fees/spokenenglishpackage/pt630.webp"
    },
    {
      title: "Master Class Series - 2.5 Months",
      price: "₹4,490",
      duration: "2.5 months",
      features: [
        "Expert Guest Sessions",
        "Advanced Techniques",
        "Case Study Analysis",
        "Peer Learning",
        "4 Personality Development Modules"
      ],
      image: "/fees/spokenenglishpackage/pt61.webp"
    }
  ];

  const additionalWhitePackages = [
    {
      title: "Foundation Course - 6 Weeks",
      price: "₹3,490",
      duration: "6 weeks",
      features: [
        "Basic English Skills",
        "Grammar Fundamentals",
        "Vocabulary Building",
        "Beginner Friendly",
        "4 Personality Development Modules"
      ],
      image: "/fees/spokenenglishpackage/pt32.webp"
    },
    {
      title: "Revision Package - 3 Weeks",
      price: "₹1,290",
      duration: "3 weeks",
      features: [
        "Quick Revision Sessions",
        "Key Points Summary",
        "Practice Questions",
        "Last Week Preparation",
        "4 Personality Development Modules"
      ],
      image: "/fees/spokenenglishpackage/pt3g2.webp"
    }
  ];

  const allPackages = [...whitePackages, ...blackPackages, ...additionalWhitePackages];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Packages Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          {allPackages.map((pkg, index) => {
            const isBlackCard = index >= 8 && index < 19;
            const cardBgColor = isBlackCard ? "bg-black" : "bg-white";
            const textColor = isBlackCard ? "text-white" : "text-gray-900";
            const secondaryTextColor = isBlackCard ? "text-gray-300" : "text-gray-700";
            const tertiaryTextColor = isBlackCard ? "text-gray-400" : "text-gray-600";

            return (
              <Card key={index} className={`shadow-md hover:shadow-lg transition-shadow duration-300 ${cardBgColor}`}>
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-2 gap-0 items-center">
                    {/* Left Content */}
                    <div className="p-8 space-y-4">
                      <h3 className={`text-2xl font-bold ${textColor} mb-4`}>
                        {pkg.title}
                      </h3>

                      <ul className="space-y-2 mb-6">
                        {pkg.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className={`${secondaryTextColor} text-base`}>
                            • {feature}
                          </li>
                        ))}
                      </ul>

                      <div className={`text-3xl font-bold ${textColor} mb-6`}>
                        {pkg.price}
                        <span className={`text-lg font-normal ${tertiaryTextColor}`}>/ {pkg.duration}</span>
                      </div>

                      <div className="space-y-3">
                        <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 text-base font-medium">
                          Make Payment
                        </Button>
                        <div className={`flex items-center space-x-1 text-sm ${tertiaryTextColor}`}>
                          <Shield className="h-4 w-4" />
                          <span>Secured by Razorpay</span>
                        </div>
                      </div>
                    </div>

                    {/* Right Image */}
                    <div className="lg:p-8 p-4">
                      <div className="bg-gray-100 rounded-2xl overflow-hidden h-64 lg:h-80">
                        <img
                          src={pkg.image}
                          alt="IELTS student studying"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
      <section className="bg-black text-white py-10 px-6 md:px-16 rounded-1xl mt-10 mb-0.5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          {/* Left Text */}
          <div className="md:w-2/3">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Need help? <span className="text-white">Talk to us now.</span>
            </h2>
            <p className="text-gray-300 text-sm md:text-base">
              We are always ready to help you out with your queries. We want to make sure that student satisfaction is
              hundred percent all the time, every time.
            </p>
          </div>

          {/* Button */}
          <div>
            <button className="bg-white text-black px-6 py-3 rounded shadow-lg hover:shadow-xl transition duration-300">
              CALL US NOW
            </button>
          </div>
        </div>
      </section>

      < Footer />
    </div>


  );

};

export default IeltsGeneral;