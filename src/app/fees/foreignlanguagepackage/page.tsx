"use client";

import React from "react";
import Navigation from "../../_components/Navigation";
import Footer from '../../_components/Footer';
import { Button } from "~/components/ui/button";
import { Card, CardHeader, CardContent } from "~/components/ui/card";

const ForeignPackages = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        {/* Section 1: Hero Section - Boxed with light grey background */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4" style={{ maxWidth: '1140px' }}>
            <div className="bg-gray-50 rounded-lg p-12 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex-1 pr-8">
                  <h1 className="text-4xl font-bold text-gray-800 mb-6">
                    Start with your foreign language training today
                  </h1>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Master French, German, and Spanish with our comprehensive language courses.
                    From beginner to advanced levels, we provide structured learning paths
                    designed to help you achieve fluency and confidence in your chosen language.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <button className="bg-slate-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-slate-700 transition-colors text-lg">
                    REQUEST A DEMO
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Kids Language Course - Split background (whitish-grey to lighter grey) */}
        <section className="relative">
          <div className="absolute inset-0">
            <div className="h-1/2  bg-gray-100 "></div>
            <div className="h-1/2 bg-gray-50"></div>
          </div>
          <div className="relative py-16">
            <div className="container mx-auto px-4" style={{ maxWidth: '1140px' }}>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">French-German-Spanish</h2>
                <h3 className="text-2xl font-semibold text-blue-600">For Kids</h3>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="p-10">
                    <div className="text-center mb-6">
                      <div className="text-3xl font-bold text-gray-800 mb-2">₹6,990</div>
                      <div className="text-lg font-semibold text-blue-600 mb-1">Lev. A1/A2</div>

                    </div>

                    <ul className="space-y-3 mb-6">
                      <li className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Live Classes
                      </li>
                      <li className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Study Material
                      </li>
                      <li className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Complete A1 or A2
                      </li>
                      <li className="flex items-center text-gray-700">

                      </li>
                      <li className="flex items-center text-gray-700">

                      </li>
                      <li className="flex items-center text-gray-700">

                      </li>
                    </ul>

                    <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                      Pay Now - Secured by Razorpay
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden ring-2 ring-orange-400">
                  <div className="bg-orange-400 text-white text-center py-2 font-semibold">
                    Recommended Plan
                  </div>
                  <div className="p-6">
                    <div className="text-center mb-6">
                      <div className="text-3xl font-bold text-gray-800 mb-2">₹12,990</div>
                      <div className="text-lg font-semibold text-blue-600 mb-1">/A1+A2</div>
                    </div>

                    <ul className="space-y-3 mb-6">
                      <li className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Live Classes
                      </li>
                      <li className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Study Material
                      </li>
                      <li className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        A1+A2 Level
                      </li>
                      <li className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Full Assessment
                      </li>

                    </ul>

                    <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                      Pay Now - Secured by Razorpay
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="p-10">
                    <div className="text-center mb-6">
                      <div className="text-3xl font-bold text-gray-800 mb-2">₹10,990</div>
                      <div className="text-lg font-semibold text-blue-600 mb-1">/B1/B2</div>
                    </div>

                    <ul className="space-y-3 mb-6">
                      <li className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Live Classes
                      </li>
                      <li className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Study Material
                      </li>
                      <li className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        B1 (Intermediate)
                      </li>
                      <li className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Full Assessment
                      </li>
                    </ul>

                    <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                      Pay Now - Secured by Razorpay
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Adults Language Course - Split background (blue to grey) */}
        <section className="relative">
          <div className="absolute inset-0">
            <div className="h-1/2 bg-blue-100"></div>
            <div className="h-1/2 bg-slate-100"></div>
          </div>
          <div className="relative py-16">
            <div className="container mx-auto px-4" style={{ maxWidth: '1140px' }}>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">French-German-Spanish</h2>
                <h3 className="text-2xl font-semibold text-blue-600">For Adults</h3>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="p-6">
                    <div className="text-center mb-6">
                      <div className="text-3xl font-bold text-gray-800 mb-2">₹11,990</div>
                      <div className="text-lg font-semibold text-blue-600 mb-1">Lev. A1/A2</div>
                    </div>

                    <ul className="space-y-3 mb-6">
                      <li className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Live Classes
                      </li>
                      <li className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Study Material
                      </li>
                      <li className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Complete A1 or A2
                      </li>
                      <li className="flex items-center text-gray-700">

                      </li>
                      <li className="flex items-center text-gray-700">

                      </li>
                      <li className="flex items-center text-gray-700">

                      </li>
                    </ul>

                    <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                      Pay Now - Secured by Razorpay
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden ring-2 ring-orange-400">
                  <div className="bg-orange-400 text-white text-center py-2 font-semibold">
                    Recommended Plan
                  </div>
                  <div className="p-6">
                    <div className="text-center mb-6">
                      <div className="text-3xl font-bold text-gray-800 mb-2">₹19,990</div>
                      <div className="text-lg font-semibold text-blue-600 mb-1">/A1+A2</div>
                    </div>

                    <ul className="space-y-3 mb-6">
                      <li className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Live Classes
                      </li>
                      <li className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Study Material
                      </li>
                      <li className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        A1+A2 Level
                      </li>
                      <li className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Full Assessment
                      </li>
                    </ul>

                    <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                      Pay Now - Secured by Razorpay
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="p-6">
                    <div className="text-center mb-6">
                      <div className="text-3xl font-bold text-gray-800 mb-2">₹14,990</div>
                      <div className="text-lg font-semibold text-blue-600 mb-1">/B1/B2</div>
                    </div>

                    <ul className="space-y-3 mb-6">
                      <li className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Live Classes
                      </li>
                      <li className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Study Material
                      </li>
                      <li className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        B1 (Intermediate)

                      </li>
                      <li className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Full Assessment

                      </li>
                    </ul>

                    <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                      Pay Now - Secured by Razorpay
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Contact Section - Simple purple background */}
        <section className="bg-gradient-to-br from-purple-600 to-purple-800 py-16">
          <div className="container mx-auto px-4" style={{ maxWidth: '1140px' }}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Student Advisor</h3>
                    <p className="text-purple-200">+91 98765 43210</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Training Manager</h3>
                    <p className="text-purple-200">+91 87654 32109</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Email</h3>
                    <p className="text-purple-200">info@languagehub.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Your Message"
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    SEND
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ForeignPackages;