'use client'
import { useState, useEffect } from "react";
import HeroCarousel from "./hero";
import Image from "next/image";
import { ArrowBigLeft, ArrowBigRight, Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import SuccessStories from "./successstories";
import { Button } from "~/components/ui/button";
import ContactFormSection from "./contact-form";

const recognitions = [
    {
        id: 1,
        name: "AIRC",
        logo: "/placeholder.svg?height=120&width=120",
        alt: "American International Recruitment Council",
    },
    {
        id: 2,
        name: "AAERI",
        logo: "/placeholder.svg?height=120&width=120",
        alt: "Education in Australia",
    },
    {
        id: 3,
        name: "USA Study Destination",
        logo: "/placeholder.svg?height=120&width=120",
        alt: "USA Study Destination",
    },
    {
        id: 4,
        name: "ICEF Accredited",
        logo: "/placeholder.svg?height=120&width=120",
        alt: "ICEF Accredited Agent",
    },
]
const RecognitionsSection = () => {
    return (
        <div className="w-full bg-gradient-to-r from-blue-200 via-blue-150 to-purple-100 py-8 px-4 mb-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-6">
                    <h2 className="text-4xl font-bold text-gray-900 mb-2">Recognitions</h2>
                    <div className="w-24 h-1 bg-orange-400 rounded-full mx-auto"></div>
                </div>

                {/* Recognition Cards */}
                <div className="flex justify-center items-center gap-16 ">
                    {/* AIRC Logo */}
                    <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 w-64 h-64 flex items-center justify-center">
                        <div className="relative w-32 h-32">
                            <div className="w-full h-full bg-blue-800 rounded-full flex items-center justify-center border-4 border-blue-900">
                                <div className="text-center">
                                    <div className="text-white font-bold text-lg mb-1">AIRC</div>
                                    <div className="text-white text-xs">CERTIFIED</div>
                                    <div className="text-white text-xs">2024</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* AAERI Logo */}
                    <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 w-64 h-64 flex items-center justify-center">
                        <div className="relative w-32 h-32 flex flex-col items-center justify-center">
                            <div className="relative mb-2">
                                <div className="w-16 h-12 bg-gradient-to-r from-green-600 to-orange-500 transform rotate-45 rounded-sm"></div>
                                <div className="absolute -top-2 -left-2 w-8 h-8 bg-orange-500 transform rotate-45 rounded-sm"></div>
                            </div>
                            <div className="text-center">
                                <div className="text-gray-800 font-bold text-lg">AAERI</div>
                                <div className="text-gray-600 text-xs">EDUCATION IN AUSTRALIA</div>
                            </div>
                        </div>
                    </div>

                    {/* USA Study Destination Logo */}
                    <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 w-64 h-64 flex items-center justify-center">
                        <div className="text-center">
                            <div className="flex items-center justify-center mb-2">
                                <div className="w-8 h-6 bg-blue-600 rounded-sm mr-2"></div>
                                <div className="text-2xl font-bold text-gray-800">USA</div>
                            </div>
                            <div className="text-gray-600 text-sm font-medium">Study Destination</div>
                        </div>
                    </div>

                    {/* ICEF Accredited Logo */}
                    <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 w-64 h-64 flex items-center justify-center">
                        <div className="relative w-32 h-32">
                            <div className="w-full h-full bg-blue-900 rounded-full flex flex-col items-center justify-center border-4 border-blue-800 relative">
                                <div className="text-white font-bold text-xs mb-1">ICEF ACCREDITED</div>
                                <div className="text-white text-xs mb-2">AGENT</div>
                                <div className="w-12 h-12 bg-white rounded border-2 border-gray-300 flex items-center justify-center">
                                    <div className="w-8 h-8 bg-gray-800 rounded grid grid-cols-3 gap-px p-1">
                                        {Array.from({ length: 9 }).map((_, i) => (
                                            <div key={i} className={`w-1 h-1 ${Math.random() > 0.5 ? "bg-white" : "bg-gray-800"}`}></div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function Homepage() {
    return (
        <>
            <HeroCarousel />
            <div className='max-w-6xl bg-blue-50 opacity-95 rounded-2xl mx-auto p-8 grid lg:grid-cols-8 md:grid-cols-4 sm:grid-cols-4 pl-38 mt-6 mb-8 justify-center items-center border-2 border-gray-400'>
                <div>
                    <h4 className='text-blue-900 font-normal text-4xl'>33 Years<br />
                        <span className='text-sm text-gray-950'>Of Excellence</span>
                    </h4>
                </div>
                {/* Divider Line */}
                <div className="w-px h-full bg-gray-400 opacity-30 mx-6"></div>
                <div>
                    <h4 className='text-blue-900 font-normal text-4xl'>
                        2 Lacs <br />
                        <span className='text-sm text-gray-950'>Success Stories</span>
                    </h4>
                </div>
                {/* Divider Line */}
                <div className="w-px h-full bg-gray-400 opacity-30 mx-6"></div>
                <div>
                    <h4 className='text-blue-900 font-normal text-4xl'>100 crore <br />
                        <span className='text-sm text-gray-950'>
                            In Scholarships
                        </span>
                    </h4>
                </div>
                {/* Divider Line */}
                <div className="w-px h-full bg-gray-400 opacity-30 mx-6"></div>
                <div>
                    <h4 className='text-blue-900 font-normal text-4xl '>
                        99% <br />
                        <span className='text-sm text-gray-950'>Visa Success Rate</span>
                    </h4>
                </div>
            </div>
            <SuccessStories />
            <ContactFormSection />
            <div className="w-full bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 rounded-3xl overflow-hidden mb-6">
                <div className="flex items-center justify-between px-16 py-12">
                    {/* Left Content */}
                    <div className="flex-1 max-w-2xl">
                        <h2 className="text-5xl font-bold text-white mb-4 leading-tight">
                            Get Ready To Begin
                            <br />
                            Your Journey
                        </h2>
                        <div className="w-32 h-1 bg-orange-400 rounded-full mb-8"></div>

                        <p className="text-blue-100 text-xl mb-12 leading-relaxed">
                            Explore more, stay informed, and start your journey
                            <br />
                            to academic excellence.
                        </p>

                        <div className="flex items-center gap-6">
                            {/* Contact Us Button */}
                            <Button
                                size="lg"
                                className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold text-lg"
                            >
                                Contact Us
                            </Button>

                            {/* Social Media Icons */}
                            <div className="flex items-center gap-3">
                                <div className="bg-gradient-to-br from-pink-500 to-orange-400 p-2 rounded-lg">
                                    <Instagram className="w-5 h-5 text-white" />
                                </div>
                                <div className="bg-red-600 p-2 rounded-lg">
                                    <Youtube className="w-5 h-5 text-white" />
                                </div>
                                <div className="bg-blue-600 p-2 rounded-lg">
                                    <Linkedin className="w-5 h-5 text-white" />
                                </div>
                                <div className="bg-blue-700 p-2 rounded-lg">
                                    <Facebook className="w-5 h-5 text-white" />
                                </div>
                                <div className="bg-black p-2 rounded-lg">
                                    <Twitter className="w-5 h-5 text-white" />
                                </div>
                                <div className="bg-orange-500 p-2 rounded-lg">
                                    <div className="w-5 h-5 bg-white rounded text-orange-500 flex items-center justify-center text-xs font-bold">
                                        B
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Image Section */}
                    <div className="flex-1 relative">
                        <div className="relative">
                            {/* Main Image */}
                            <Image
                                src="/student-journey.png"
                                alt="Student with globe and airplane"
                                width={600}
                                height={400}
                                className="w-full h-auto object-contain"
                            />

                            {/* Decorative Icons - positioned absolutely */}
                            <div className="absolute top-4 right-8">
                                {/* Graduation Cap */}
                                <div className="w-12 h-12 border-2 border-blue-300 rounded-lg flex items-center justify-center">
                                    <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                        />
                                    </svg>
                                </div>
                            </div>

                            <div className="absolute top-1/3 left-4">
                                {/* Location Pin */}
                                <div className="w-10 h-10 border-2 border-blue-300 rounded-full flex items-center justify-center">
                                    <svg className="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                </div>
                            </div>

                            <div className="absolute bottom-8 right-12">
                                {/* Certificate */}
                                <div className="w-12 h-12 border-2 border-blue-300 rounded-lg flex items-center justify-center">
                                    <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                        />
                                    </svg>
                                </div>
                            </div>

                            {/* Curved Lines */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 600 400">
                                <path
                                    d="M100 200 Q300 100 500 200 Q400 300 200 250"
                                    stroke="rgba(255,255,255,0.2)"
                                    strokeWidth="2"
                                    fill="none"
                                    strokeDasharray="5,5"
                                />
                                <path
                                    d="M150 150 Q350 250 450 150"
                                    stroke="rgba(255,255,255,0.15)"
                                    strokeWidth="2"
                                    fill="none"
                                    strokeDasharray="3,3"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <RecognitionsSection />
        </>
    )
}