import React from 'react';
import { Computer, Check } from 'lucide-react';
import Link from "next/link";
import '~/styles/globals.css';
import CounterSection from '~/components/ui/countersection';
import BusinessForm from '~/app/_components/ContactforBussiness'
import Cards from '~/app/_components/home/cards';
import Classes from '~/app/_components/home/classes';
import Testseries from '~/app/_components/home/testseries';
import CourseCards from '~/components/ui/progressbar';
import AITestingPortalComplete from './ai-testing-portal';
import TrustedCompanies from './trusted-companies';
import OnlineCourses from './online-courses';

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
const Liveclasses = () => {
    const Description = [
        "We provides classes on web conferencing portal which is developed only for online education.",
        "All the Online IELTS classes as well as Online Spoken English/Foreign Language classes are conducted Live Everyday."

    ];

    return (
        <div className="max-w-6xl rounded-lg mx-auto px-4 py-12 mt-12 mb-12 bg-white">
            <div className="flex flex-col md:flex-row gap-12 items-center">
                {/* Left side - Values list */}
                <div className="md:w-1/2">

                    <ul className="space-y-6">
                        <Computer className='w-12 h-12' />
                        <h2 className="flex items-start text-3xl font-semibold text-blue-950 mb-8">Live Online Classes With Specialised Portal to Facilitate Excellent Environment of Learning</h2>
                        {Description.map((value, index) => (
                            <li key={index} className="flex items-start">
                                <p className="text-sm text-gray-700 mb-6">{value}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right side - Image */}
                <div className="md:w-1/2 mt-8 md:mt-0">
                    <img
                        src='../../home/video-conference.jpg'
                        alt="Our Values Illustration"
                        className="rounded-lg shadow-xl/50 w-full h-max object-cover justify-items-end"
                    />
                    <p className='text-sm text-gray-500 mt-4'>Know more about the technology that we use for live classes.
                        <a href='/Technicaldetails' className='text-blue-600 hover:text-blue-900'>(Technical details)</a>
                    </p>
                </div>
            </div>
        </div>
    );
};
const OnlineIeltsClasses = () => {
    const Ieltsclasses = [
        "Live sessions with expert trainers.",
        "Best online IELTS classes need best online IELTS trainers and we have the best of the best. British Council and Cambridge certified trainers will train you in live interactive sessions.",
        "Online personalised IELTS portal for practice",
        "IELTS sectional tests for self study",
        "Stay in touch with your trainers through mobile apps on iOS and Android"

    ];

    return (
        <div className="max-w-6xl mx-auto px-4 mt-12 mb-12 py-10 bg-gradient-to-r from-violet-500 via-blue-500 to-blue-700 rounded-lg">
            <div className="flex flex-col md:flex-row gap-12 items-center">
                {/* Left side - Values list */}
                <div className="md:w-1/2">
                    <h2 className="text-2xl font-sans  text-gray-50  mb-8">How do Online IELTS Classes work?</h2>

                    <ul className="space-y-6">
                        {Ieltsclasses.map((value, index) => (
                            <li key={index} className="flex items-start">
                                <div className="flex-shrink-0 mt-1 mr-4 text-green-600">
                                    <Check className="h-8 w-8" />
                                </div>
                                <p className=" font-extralight text-gray-50 text-2xl">{value}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right side - Image */}
                <div className="md:w-1/2">
                    <img
                        src='../ourvalues.jpg'
                        alt="Our Values Illustration"
                        className="rounded-lg shadow-lg w-full h-max object-cover justify-items-end"
                    />
                </div>
            </div>
        </div>
    );
};

const LanguageLandingPage: React.FC = () => {
    return (
        <>
            <BottomSection />
            <TrustedCompanies />
            <CounterSection />
            <OnlineCourses />
            <BusinessForm />
            <section className="bg-[#1a1b4b] py-16 px-4 sm:py-20 lg:py-24 mt-10">
                <div className="max-w-6xl mx-auto text-center">
                    <div className="mb-6">
                        <h3 className="text-white text-sm sm:text-base font-medium tracking-[0.2em] uppercase">
                            INTERNATIONAL STUDENTBASE
                        </h3>
                    </div>
                    <div className="mb-8">
                        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            Empowering people across the globe
                        </h1>
                    </div>
                    <div className="mb-8 flex justify-center">
                        <svg width="120" height="20" viewBox="0 0 120 20" fill="none" className="text-teal-400">
                            <path
                                d="M2 10C8 4 16 16 24 10C32 4 40 16 48 10C56 4 64 16 72 10C80 4 88 16 96 10C104 4 112 16 118 10"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fill="none"
                            />
                        </svg>
                    </div>
                    <div className="max-w-4xl mx-auto">
                        <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed font-light">
                            National Institute of Language is not only training people in India but has a significant student community
                            all around the world. Join the ever growing community to get the best experience.
                        </p>
                    </div>
                </div>
            </section>
            <CourseCards />
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
                            Aalions Institute of Language (CI) has been training students for international English Exams like
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
            <AITestingPortalComplete />
            <Liveclasses />
            <OnlineIeltsClasses />
            <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Header Section */}
                    <div className="text-center mb-16">
                        <h1 className="text-3xl md:text-3xl lg:text-2xl font-semibold text-gray-900 mb-8 leading-tight">
                            National Institute of Language India's Best English
                            <br />
                            Communication Training Program
                        </h1>
                        <p className="text-sm md:text-sm text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            If you struggle while talking in English, we are there to help. We have the most comprehensive and modular
                            program for English Training. We enroll beginners as well as advanced speakers and take them to a whole new
                            level.
                        </p>
                    </div>

                    {/* Features Section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                        {/* Verbal Ability and Grammar */}
                        <div className="bg-white  overflow-hidden">
                            <div className="aspect-video relative">
                                <img
                                    src="/home/women_talking.jpg?height=300&width=400"
                                    alt="Teacher explaining grammar concepts at whiteboard"
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h2 className="text-small font-semibold text-gray-900 mb-4">Verbal Ability and Grammar</h2>
                                <p className="text-gray-600 opacity-75 text-sm font-normal leading-relaxed">
                                    People struggle in sentence construction because they have never been informed about the correct usage
                                    of English Grammar. Don't worry, we take care of that.
                                </p>
                            </div>
                        </div>

                        {/* Vocabulary Enhancement */}
                        <div className="bg-white overflow-hidden">
                            <div className="aspect-video relative">
                                <img
                                    src="/home/bussiness-man_talking.jpg?height=300&width=400"
                                    alt="Professional man working on laptop in modern office"

                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h2 className="text-small font-semibold text-gray-900 mb-4">Vocabulary Enhancement</h2>
                                <p className="text-gray-600 opacity-75 text-sm font-normal leading-relaxed">
                                    Vocabulary is as important as grammar if not more. Developing an extensive vocabulary is essential for
                                    fluent Speech and impressive orations.
                                </p>
                            </div>
                        </div>

                        {/* Personality Development */}
                        <div className="bg-white  overflow-hidden">
                            <div className="relative">
                                <img
                                    src="/home/young-women-working-in-laptop.jpg?height=300&width=400"
                                    alt="Professional businesswoman in formal attire"
                                    className="object-cover w-full h-66"
                                />
                            </div>

                            <div className="p-6">
                                <h2 className="text-small font-semibold text-gray-900 mb-4">Personality Development</h2>
                                <p className="text-gray-600 opacity-75 text-sm font-normal leading-relaxed">
                                    NIL integrates personality development modules in its English communication course which is focused on
                                    practical social skills for better interaction.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full">
                {/* Main Banner Section */}
                <div className="relative bg-gradient-to-r from-blue-600 via-blue-500 to-blue-500 overflow-hidden h-96 -mt-8">
                    <div className="max-w-6xl mx-auto px-4 py-12 lg:py-10s">
                        <div className="grid lg:grid-cols-2 gap-8 items-center">
                            {/* Left Content */}
                            <div className="text-white space-y-6">
                                <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                                    Unlimited access to educational materials for subscribers
                                </h1>

                                <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-md transition-colors duration-200" >
                                    <a href='#'>
                                        Try 30 days for free
                                    </a>
                                </button>
                            </div>

                            {/* Right Content - Circular Image */}
                            <div className="flex justify-center lg:justify-end">
                                <div className="relative">
                                    {/* Purple circular background */}
                                    <div className="w-80 h-80 lg:w-88 lg:h-66 rounded-full bg-blue-300 flex items-center justify-center overflow-hidden">
                                        {/* Student image */}
                                        <div className="w-72 h-52 lg:w-88 lg:h-88 rounded-full overflow-hidden">
                                            <img
                                                src="/placeholder.svg?height=400&width=400"
                                                alt="Student studying with coffee and book"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Community Section */}
                <div className="bg-blue-600 text-white">
                    <div className="max-w-7xl mx-auto px-4 py-6">
                        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                            <div className="flex items-center space-x-4">
                                <h2 className="text-xl lg:text-2xl font-bold">Huge Community</h2>
                                <div className="hidden md:block w-px h-6 bg-white opacity-50"></div>
                            </div>
                            <div className="flex-1 text-center md:text-left md:ml-8">
                                <a href="#" className="text-white hover:text-blue-200 underline transition-colors duration-200">
                                    See what's hot in NIL Community
                                </a>
                            </div>
                            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-6 py-2 rounded-md transition-all duration-200">
                                START EXPLORING
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LanguageLandingPage;