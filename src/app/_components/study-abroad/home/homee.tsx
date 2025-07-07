'use client'

import { useState, useEffect } from "react";
import HeroCarousel from "./hero";
import Image from "next/image";
import { Button } from "~/components/ui/button"
import SuccessStories from "./successstories";
import ContactFormSection from "./contact-form";
import UniversityPartners from "./Universities";
import EducationServices from "./TrustedPartners";
import TrendingCourses from "./TrendingCourses";
import TrendingInsightsPage from "../blogs";
import StepsToDestination from "./DreamDestination";
import FAQ from "../faq";
import YourJourney from "../your-journey";
import { useScroll } from "~/hooks/use-scroll";


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

interface DestinationCard {
    id: number
    name: string
    image: string
}

const leftDestinations: DestinationCard[] = [
    { id: 1, name: "USA", image: "/usa.jpg" },
    { id: 2, name: "Canada", image: "/canada.jpg" },
    { id: 3, name: "UK", image: "/placeholder.svg?height=300&width=400" },
    { id: 4, name: "Australia", image: "/placeholder.svg?height=300&width=400" },
    { id: 5, name: "Germany", image: "/placeholder.svg?height=300&width=400" },
    { id: 6, name: "France", image: "/placeholder.svg?height=300&width=400" },
]

const rightDestinations: DestinationCard[] = [
    { id: 7, name: "New Zealand", image: "/newzealand.jpg" },
    { id: 8, name: "Switzerland", image: "/switzerland.jpg" },
    { id: 9, name: "Netherlands", image: "/placeholder.svg?height=300&width=400" },
    { id: 10, name: "Sweden", image: "/placeholder.svg?height=300&width=400" },
    { id: 11, name: "Japan", image: "/placeholder.svg?height=300&width=400" },
    { id: 12, name: "Singapore", image: "/placeholder.svg?height=300&width=400" },
]

const Card = ({ destination }: { destination: DestinationCard }) => (
    <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 mb-6">
        <div className="aspect-[4/3] relative">
            <Image
                src={destination.image || "/placeholder.svg"}
                alt={destination.name}
                fill
                className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-6 left-6">
                <h3 className="text-3xl font-bold text-white">{destination.name}</h3>
            </div>
        </div>
    </div>
)

const StudyDestinationSection = () => {
    const scrollY = useScroll()

    // These values control scroll speed
    const leftTransform = -scrollY * 0.3 // moves down
    const rightTransform = -scrollY * 0.3 // moves up

    return (
        <div>
            <section className="bg-blue-400 mb-6 rounded-2xl relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">

                        {/* Left Cards */}
                        <div className="overflow-hidden h-[600px] relative">
                            <div
                                className="flex flex-col gap-6 transition-transform duration-75 ease-out will-change-transform"
                                style={{
                                    transform: `translateY(${leftTransform}px)`,
                                    minHeight: `${leftDestinations.length * 260}px`,
                                }}
                            >
                                {leftDestinations.map((destination) => (
                                    <Card key={`left-${destination.id}`} destination={destination} />
                                ))}
                            </div>
                        </div>

                        {/* Middle Content */}
                        <div className="text-center text-white space-y-8 px-4">
                            <div className="space-y-4">
                                <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                                    Your <span className="text-white">Dream Study</span>
                                </h1>
                                <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                                    <span className="underline decoration-white/30">Destination</span> Awaits
                                </h1>
                            </div>
                            <p className="text-lg lg:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
                                Learn all about the country's top universities, scholarships, cost of living, post study work rights and
                                more from the finest foreign education consultants in the industry!
                            </p>
                            <Button
                                variant="outline"
                                size="lg"
                                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300"
                            >
                                View more
                            </Button>
                        </div>

                        {/* Right Cards */}
                        <div className="overflow-hidden h-[600px] relative">
                            <div
                                className="flex flex-col gap-6 transition-transform duration-75 ease-out will-change-transform"
                                style={{
                                    transform: `translateY(${rightTransform}px)`,
                                    minHeight: `${rightDestinations.length * 260}px`,
                                }}
                            >
                                {rightDestinations.map((destination) => (
                                    <Card key={`right-${destination.id}`} destination={destination} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

const StudyAbroadSection = () => {
    const [scrollY, setScrollY] = useState(0);

    const allCountries = [
        { name: "UK", img: "/Tower_Bridge_Uk_Feb_2006.jpg" },
        { name: "USA", img: "/Statue_Usa1.jpg" },
        { name: "Canada", img: "/Canada_pic.jpg" },
        { name: "Australia", img: "/Sydney_Bridge.jpg" },
        { name: "New Zealand", img: "/New-zeland-view.jpg" },
        { name: "Singapore", img: "/Singapore_view.jpg" },
        { name: "Ireland", img: "/Nw_Ireland-study.svg" },
        { name: "France", img: "/France-abroad.avif" }
    ];

    const leftCountries = allCountries.slice(0, 4);
    const rightCountries = allCountries.slice(4, 8);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const leftTransform = scrollY * 0.3;
    const rightTransform = -scrollY * 0.3;
    interface Country {
        name: string;
        img: string;
    }

    interface CountryCardProps {
        country: Country;
        index: number;
        direction: 'left' | 'right';
    }

    const CountryCard: React.FC<CountryCardProps> = ({ country, index, direction }) => (
        <div
            className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 mb-6"
            style={{
                transform: `translateY(${direction === 'left' ? leftTransform : rightTransform}px)`,
                transitionDelay: `${index * 0.1}s`
            }}
        >
            <div className="relative w-full h-48">
                <img
                    src={country.img}
                    alt={country.name}
                    className="object-cover w-full h-full"
                />
                <div className="absolute bottom-0 w-full bg-gradient-to-br from-blue-400 to-purple-500 text-white py-2 text-center font-semibold">
                    {country.name}
                </div>
            </div>
        </div>
    );

    return (
        <section className="bg-navy-900 min-h-screen py-16 px-4 relative overflow-hidden" style={{ backgroundColor: '#1e3a8a' }}>
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-12 gap-8 items-center min-h-screen">

                    {/* Left Side Countries */}
                    <div className="col-span-3 space-y-4">
                        {leftCountries.map((country, index) => (
                            <CountryCard
                                key={`left-${country.name}`}
                                country={country}
                                index={index}
                                direction="left"
                            />
                        ))}
                    </div>

                    {/* Center Content */}
                    <div className="col-span-6 text-center text-white z-10 relative">
                        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 mx-4 shadow-2xl">
                            <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight text-gray-800">
                                Your <span className="text-blue-600">Dream Study</span>
                                <br />
                                <span className="text-navy-900">Destination</span> Awaits
                            </h2>

                            <p className="text-gray-700 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                                Learn all about the country's top universities, scholarships, cost of living, post study work rights and more from the finest foreign education consultants in the industry!
                            </p>

                            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-lg font-bold rounded-full hover:from-blue-500 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-xl border-2 border-blue-600 hover:border-blue-500">
                                Book a Free Consultation
                            </button>

                            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-400/20 rounded-full blur-xl"></div>
                            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-400/20 rounded-full blur-xl"></div>
                        </div>
                    </div>

                    {/* Right Side Countries */}
                    <div className="col-span-3 space-y-4">
                        {rightCountries.map((country, index) => (
                            <CountryCard
                                key={`right-${country.name}`}
                                country={country}
                                index={index}
                                direction="right"
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Decorative Background */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-blue-500/5 to-transparent rounded-full"></div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 text-center">
                <div className="animate-bounce">
                    <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
                    </div>
                </div>
                <p className="text-xs mt-2">Scroll to see animation</p>
            </div>
        </section>
    );
};

const HomeFAQ = [
    {
        question: "What does Edwise do as a study abroad consultant?",
        answer: "Edwise is one of the premier overseas study consultants representing more than 950+ universities worldwide. We offer expert counseling for university selection, coaching for international tests, visa, scholarship, accommodation, travel and forex assistance, and many more."
    },
    {
        question: "Are the services of Edwise available for free?",
        answer: "As one of the leading study abroad consultants in India with more than 33 years of experience we are proud to have provided FREE foreign education counseling for our students since 1991."
    },
    {
        question: "How do I get started on my study abroad journey with Edwise?",
        answer: "If you wish to study abroad, you can contact us and our experienced counselors will expertly guide you through every step of the process to turn your dreams into reality."
    },
    {
        question: "Does Edwise provide coaching for IELTS?",
        answer: "Edwise provides coaching for multiple examinations like IELTS, TOEFL, PTE, GMAT, GRE, Duolingo and many more."
    },
    {
        question: "How much does it cost to study abroad for Indian students?",
        answer: "The cost of studying abroad varies from country to country. To get full information about the expenses at your desired country, contact us and our expert study abroad counselors will be able to give you all the information you need."
    },
    {
        question: "Which consultant is best for abroad study?",
        answer: "There are a number of overseas education consultants. Edwise International, one of the best education consultants in India provides personalized counseling with a proven track record of student success. We also provide students with invaluable assistance pertaining to overseas education, right from selecting the university to visa processing, in turn offering a seamless and comprehensive guidance for students embarking on their study abroad journey."
    },
    {
        question: "How do I choose the best overseas education consultant?",
        answer: "There are many study abroad consultants available, but students should choose one that is trustworthy, provides personalized support, has strong collaborations with a wide range of universities, and offers transparent information about services and fees. It's also important to ensure that the foreign education consultancy provides one-on-one guidance and has in-depth knowledge of both your preferred country and academic field."
    },
    {
        question: "How much do educational consultants charge?",
        answer: "Education abroad consultants in India typically charge between ₹7,500 and ₹22,500 per hour, with flat fees ranging from ₹75,000-₹3,75,000 based on the services. Edwise offers free counseling."
    },
    {
        question: "Are education consultants worth it?",
        answer: "For those requiring professional counsel on selecting schools, applications, or career directions, particularly for sophisticated or international learning systems, overseas education consultants can be worth it. Nevertheless, their value is determined by your particular requirements, budget, and the level of personalized assistance you require."
    }
]

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
            <UniversityPartners />
            <StudyDestinationSection />
            <StepsToDestination />
            <EducationServices />
            <TrendingCourses />
            <TrendingInsightsPage />
            <RecognitionsSection />
            <FAQ faqs={HomeFAQ} />
            <YourJourney />
        </>
    )
}