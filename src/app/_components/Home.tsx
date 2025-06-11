import React from 'react';
import { Play, Check } from 'lucide-react';
import Link from "next/link";
import '~/styles/globals.css';
import CounterSection from '~/components/ui/countersection';
import BusinessForm from '~/app/_components/ContactforBussiness'

import Classes from './classes';
import Cards from '~/app/_components/cards'
const LanguageLandingPage: React.FC = () => {
    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-teal-200 via-blue-400 to-blue-600 relative overflow-hidden">
                {/* Grid Pattern Background */}
                <div className="absolute bottom-0 left-0 right-0 h-64 md:h-96 bg-white">
                    <div
                        className="w-full h-full bg-repeat bg-center opacity-20"
                        style={{
                            backgroundImage: "url('/home/grid.jpg')",
                            backgroundSize: "40px 40px",
                            filter: "grayscale(100%) brightness(110%)",
                        }}
                    ></div>
                    {/* Curved overlay */}
                    <div className="absolute -top-16 md:-top-32 left-0 right-0 h-32 md:h-64 bg-gradient-to-br from-teal-200 via-blue-400 to-blue-600 transform -rotate-y-90 origin-left"></div>
                </div>

                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:ml-56 lg:px-8 py-6">
                    {/* Main Content */}
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh] lg:min-h-screen">
                        {/* Left Content */}
                        <div className="text-white space-y-6 md:space-y-8 order-2 lg:order-1 mt-8 lg:mt-0">
                            <div>
                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6">
                                    Turning Your Dreams<br />
                                    Into Reality
                                </h1>
                                <p className="text-base md:text-lg opacity-90 max-w-md">
                                    National Institute of Language is the top online education platform
                                    to learn English, French, Spanish and German along with IELTS
                                    preparation.
                                </p>
                            </div>

                            <div className="flex items-center gap-4">
                                <button className="bg-black text-white px-6 py-2 md:px-8 md:py-3 rounded-full font-medium hover:bg-gray-800 transition-colors text-sm md:text-base">
                                    Book a demo
                                </button>
                                <button className="w-10 h-10 md:w-12 md:h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors">
                                    <Play className="w-4 h-4 md:w-5 md:h-5 text-white ml-0.5" fill="currentColor" />
                                </button>
                            </div>
                        </div>

                        {/* Right Content - Woman Image */}
                        <div className="flex justify-center lg:justify-end relative order-1 lg:order-2">
                            <div className="rounded-lg w-full max-w-[500px] lg:max-w-[900px] h-[350px] md:h-[450px] lg:h-[600px]">
                                <div className="relative rounded-lg w-full h-full">
                                    <img
                                        src="../../home/professional-women.png"
                                        alt="Professional woman in business attire"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Bottom Section */}
                        <div className="lg:col-span-2 order-3 grid lg:grid-cols-2 items-center justify-items-center mt-8 lg:-mt-12 gap-8 lg:gap-12 w-full">
  {/* Left - Second Woman Image - Responsive container */}
  <div className="bg-teal-600 rounded-2xl px-4 sm:px-6 md:px-8 lg:px-12 py-6 md:py-8 flex flex-col lg:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-16 w-full max-w-[95vw] sm:max-w-[90vw] md:max-w-[85vw] lg:max-w-[1100px] xl:max-w-[1300px] mx-auto lg:-ml-44">
    <img
      src="../../home/professional-women-3.png"
      alt="Professional woman in white shirt"
      className="w-[150px] h-[240px] sm:w-[180px] sm:h-[290px] md:w-[220px] md:h-[350px] lg:w-[280px] lg:h-[450px] object-cover -mt-8 sm:-mt-12 lg:-mt-0 lg:-ml-12 flex-shrink-0"
    />
    <div className="text-white w-full lg:w-[calc(100%-320px)] min-w-0">
      {/* Responsive heading container */}
      <div className="max-w-full">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold py-2 lg:py-4 leading-tight">
          Communication, Language, and Study
          <br className="hidden sm:block" />
          Abroad Programmes.
        </h2>
      </div>

      {/* Course items container - fully responsive */}
      <div className="mt-4 sm:mt-6 lg:mt-10 w-full">
        {/* IELTS TestPrep */}
        <div className="p-3 sm:p-4 border rounded-t-xl border-white border-opacity-10">
          <div className="flex items-start sm:items-center gap-3 mb-1 sm:mb-2">
            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-current rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-0">
              <Check className="w-3 h-3 sm:w-4 sm:h-4 text-teal-600" />
            </div>
            <h3 className="font-semibold text-sm sm:text-base lg:text-lg hover:text-teal-950 leading-tight">
              IELTS TestPrep™
            </h3>
          </div>
          <div className="flex items-start sm:items-center justify-between ml-8 sm:ml-9 gap-2">
            <p className="text-xs sm:text-sm opacity-90 leading-tight flex-1">Live Sessions, AI Powered Mock Tests</p>
            <Link href="" className="flex-shrink-0">
              <img
                src="../../home/right-arrow.png"
                alt="Right Arrow"
                className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 ml-1 sm:ml-2 lg:ml-4 -mt-3 sm:-mt-4 lg:-mt-6
                                filter brightness-0 invert-[90%] 
                                transition-all duration-400 ease-[cubic-bezier(0.25,0.1,0.25,1)]
                                hover:translate-x-1.5
                                hover:brightness-100 hover:invert-[80%]"
              />
            </Link>
          </div>
        </div>

        {/* AdvantEdge English Course */}
        <div className="p-3 sm:p-4 border border-white border-opacity-0">
          <div className="flex items-start sm:items-center gap-3 mb-1 sm:mb-2">
            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-current rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-0">
              <Check className="w-3 h-3 sm:w-4 sm:h-4 text-teal-600" />
            </div>
            <h3 className="font-semibold text-sm sm:text-base lg:text-lg hover:text-teal-950 leading-tight">
              AdvantEdge™ English Course
            </h3>
          </div>
          <div className="flex items-start sm:items-center justify-between ml-8 sm:ml-9 gap-2">
            <p className="text-xs sm:text-sm opacity-90 leading-tight flex-1">
              Comprehensive Personal Training and Group
            </p>
            <Link href="" className="flex-shrink-0">
              <img
                src="../../home/right-arrow.png"
                alt="Right Arrow"
                className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 ml-1 sm:ml-2 lg:ml-4 -mt-3 sm:-mt-4 lg:-mt-6
                                filter brightness-0 invert-[90%] 
                                transition-all duration-400 ease-[cubic-bezier(0.25,0.1,0.25,1)]
                                hover:translate-x-1.5
                                hover:brightness-100 hover:invert-[80%]"
              />
            </Link>
          </div>
        </div>

        {/* PolyGlot Foreign Languages */}
        <div className="bg-opacity-10 rounded-b-xl p-3 sm:p-4 border border-white border-opacity-10">
          <div className="flex items-start sm:items-center gap-3 mb-1 sm:mb-2">
            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-0">
              <Check className="w-3 h-3 sm:w-4 sm:h-4 text-teal-600" />
            </div>
            <h3 className="font-semibold text-sm sm:text-base lg:text-lg hover:text-teal-950 leading-tight">
              PolyGlot™ Foreign Languages
            </h3>
          </div>
          <div className="flex items-start sm:items-center justify-between ml-8 sm:ml-9 gap-2">
            <p className="text-xs sm:text-sm opacity-90 leading-tight flex-1">
              French, Spanish, German CEFR Standard Courses
            </p>
            <Link href="" className="flex-shrink-0">
              <img
                src="../../home/right-arrow.png"
                alt="Right Arrow"
                className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 ml-1 sm:ml-2 lg:ml-4 -mt-3 sm:-mt-4 lg:-mt-6
                                filter brightness-0 invert-[90%] 
                                transition-all duration-400 ease-[cubic-bezier(0.25,0.1,0.25,1)]
                                hover:translate-x-1.5
                                hover:brightness-100 hover:invert-[80%]"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
                    </div>
                </div>
            </div>
            <BusinessForm />
            <CounterSection />
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
            <Cards />
            <Classes />

        </>
    );
};

export default LanguageLandingPage;