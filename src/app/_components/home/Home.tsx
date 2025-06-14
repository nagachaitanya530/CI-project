import React from 'react';
import { Play, Check } from 'lucide-react';
import Link from "next/link";
import '~/styles/globals.css';
import CounterSection from '~/components/ui/countersection';
import BusinessForm from '~/app/_components/ContactforBussiness'
import Cards from '~/app/_components/home/cards';
import Classes from '~/app/_components/home/classes';
import Testseries from '~/app/_components/home/testseries';

function BottomSection() {
    const courses = [
        {
            title: "IELTS TestPrep™",
            desc: "Live Sessions, AI Powered Mock Tests",
        },
        {
            title: "AdvantEdge™ English Course",
            desc: "Comprehensive Personal Training and Group",
        },
        {
            title: "PolyGlot™ Foreign Languages",
            desc: "French, Spanish, German CEFR Standard Courses",
        },
    ]

    return (
        <div className={`
  min-h-[100lvh]
  bg-gray-50
  -mt-[145px] 
  -mb-[30px]  
  

  px-4
  py-18
  

  md:px-6
  md:py-8
  

  lg:px-8
  lg:py-10
`}>

            {/* Bottom Section with Grid Background */}
            <div className="relative w-full max-w-7xl mx-auto mt-8 lg:mt-16 p-4">
                {/* Optional: Grid background behind the teal container */}
                <div
                    className="absolute inset-0 bg-repeat bg-center opacity-10 rounded-2xl"
                    style={{
                        backgroundImage: "url('/placeholder.svg?height=40&width=5')",
                        backgroundSize: "5px 40px",
                        filter: "grayscale(100%) brightness(110%)",
                    }}
                />

                <div className="relative bg-teal-600 rounded-2xl overflow-hidden shadow-xl">
                    <div className="flex flex-col lg:flex-row items-center lg:items-start">
                        {/* Image Section */}
                        <div className="w-full lg:w-auto flex justify-center lg:justify-start p-6 lg:p-8 lg:pr-0">
                            <div className="relative">
                                <img
                                    src="../../home/professional-women-3.png "
                                    alt="Professional woman in white shirt"
                                    className="w-[200px] h-[320px] sm:w-[240px] sm:h-[380px] lg:w-[280px] lg:h-[450px] object-cover rounded-lg"
                                />
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="flex-1 text-white p-6 lg:p-8 lg:pl-6">
                            {/* Heading */}
                            <div className="mb-8 lg:mb-10">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                                    Communication, Language, and Study
                                    <br className="hidden sm:block" />
                                    Abroad Programmes.
                                </h2>
                            </div>

                            {/* Courses List */}
                            <div className="bg-white/10 rounded-2xl overflow-hidden shadow-md backdrop-blur-md">
                                {courses.map((course, i) => (
                                    <div
                                        key={i}
                                        className={`flex items-center justify-between p-4 sm:p-5 lg:p-6 group hover:bg-white/5 transition-colors duration-200 ${i !== courses.length - 1 ? "border-b border-white/20" : ""
                                            }`}
                                    >
                                        {/* Left Section */}
                                        <div className="flex items-start sm:items-center gap-3 sm:gap-4 flex-1">
                                            <div className="w-6 h-6 bg-teal-400 rounded-full flex items-center justify-center mt-1 sm:mt-0 flex-shrink-0">
                                                <Check className="w-4 h-4 text-teal-900" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h3 className="font-semibold text-base sm:text-lg lg:text-xl text-white mb-1">
                                                    {course.title}
                                                </h3>
                                                <p className="text-sm sm:text-base text-white/80 leading-relaxed">{course.desc}</p>
                                            </div>
                                        </div>

                                        {/* Right Arrow */}
                                        <div className="ml-4 flex-shrink-0">
                                            <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white/10 group-hover:bg-white/20 transition-all duration-200 group-hover:translate-x-1">
                                                <svg
                                                    className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


const LanguageLandingPage: React.FC = () => {
    return (
        <>
            <section >
                <BottomSection />
            </section>

            <BusinessForm />
            <CounterSection />
            <Cards />
            <Classes />
            <Testseries />

            <section className='bg-white py-16 px-4 md:px-8 max-w-7xl mx-auto'>
                <div className='flex flex-col md:flex-row gap-12'>
                    <div className='w-full md:w-1/2 space-y-6'>
                        <h2 className='text-4xl font-thin text-gray-900'>
                            Get a Perfect Teacher
                        </h2>
                        <div className="h-24 overflow-hidden relative">
                            <div className="scroll-text space-y-6">
                                <div className="text-3xl font-semibold text-gray-900">For IELTS Academic</div>
                                <div className="text-3xl font-semibold text-gray-900">For Spoken English</div>
                                <div className="text-3xl font-semibold text-gray-900">For IELTS General</div>
                                <div className="text-3xl font-semibold text-gray-900">For Business English</div>
                                <div className="text-3xl font-semibold text-gray-900">For Foreign Languages</div>
                                <div className="text-3xl font-semibold text-gray-900">For IELTS Academic</div> {/* Duplicate for seamless loop */}
                            </div>
                        </div>

                        <p className="text-gray-600 leading-relaxed">
                            National Institute of Language (NIL) has been training students for international English Exams like
                            <Link href="/dummy" className="text-blue-600 hover:underline"> IELTS</Link>, TOEFL and PTE, while delivering exceptional results across the board since the beginning. If you are planning to appear in any such exam, NIL is the best institute for study abroad exams. Online IELTS Class with expert trainers and continuous assessment through regular mock tests. Our target is 8+ Bands for every student that we teach. Join NIL's Online IELTS Course today.
                        </p>
                        <Link
                            href="/dummy"
                            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg"
                        >
                            Book a session
                        </Link>
                    </div>
                    <div className="w-full md:w-1/2">
                        <img
                            src="../../home/british-guy.png"
                            alt="Online IELTS Course Online IELTS Preparation British Council Online IELTS Course National Institute of Language NIL Academy"
                            className="w-full h-auto rounded-xl shadow-xl object-cover"
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>


        </>
    );
};

export default LanguageLandingPage;