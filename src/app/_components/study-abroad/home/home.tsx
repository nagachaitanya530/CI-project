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
import Link from "next/link";

const StatsSection = () => {
    const stats = [
        {
            value: "33 Years",
            label: "Of Excellence",
        },
        {
            value: "2 Lacs",
            label: "Success Stories",
        },
        {
            value: "₹100 crore",
            label: "In Scholarships",
        },
        {
            value: "99%",
            label: "Visa Success Rate",
        },
    ]

    return (
        <div className="w-full px-4 sm:px-6 lg:px-8 py-6">
            <div className="max-w-6xl mx-auto">
                {/* Desktop and Tablet Layout */}
                <div className="hidden sm:flex bg-slate-200/90 backdrop-blur-sm rounded-3xl p-6 lg:p-8 border border-gray-300/50 shadow-sm">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex items-center flex-1">
                            <div className="text-center w-full">
                                <div className="text-2xl lg:text-4xl xl:text-5xl font-normal text-blue-900 leading-tight mb-1">
                                    {stat.value}
                                </div>
                                <div className="text-sm lg:text-base text-gray-800 font-medium">{stat.label}</div>
                            </div>
                            {index < stats.length - 1 && (
                                <div className="w-px h-16 lg:h-20 bg-gray-400/40 ml-6 lg:ml-8 flex-shrink-0" />
                            )}
                        </div>
                    ))}
                </div>

                {/* Mobile Layout */}
                <div className="sm:hidden bg-slate-200/90 backdrop-blur-sm rounded-3xl p-6 border border-gray-300/50 shadow-sm">
                    <div className="grid grid-cols-2 gap-6">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-2xl font-normal text-blue-900 leading-tight mb-1">{stat.value}</div>
                                <div className="text-sm text-gray-800 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
const recognitions = [
    {
        id: 1,
        name: "AIRC",
        logo: "/study-abroad-home/AIRC.png",
        alt: "American International Recruitment Council",
        description: "CERTIFIED"
    },
    {
        id: 2,
        name: "AAERI",
        logo: "/study-abroad-home/AAERI.png",
        alt: "Education in Australia",
        description: "EDUCATION IN AUSTRALIA"
    },
    {
        id: 3,
        name: "USA Study Destination",
        logo: "/study-abroad-home/USA-study-destination.png",
        alt: "USA Study Destination",
        description: "STUDY DESTINATION"
    },
    {
        id: 4,
        name: "ICEF Accredited",
        logo: "/study-abroad-home/ICEF.png",
        alt: "ICEF Accredited Agent",
        description: "ACCREDITED AGENT"
    }
];

const RecognitionsSection = () => {
    return (
        <div className="w-full bg-gradient-to-r from-blue-50 to-blue-100 py-8 px-4 sm:px-6 mb-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-8 sm:mb-10">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">Recognitions</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full mx-auto"></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 justify-items-center">
                    {recognitions.map((recognition) => (
                        <div
                            key={recognition.id}
                            className="bg-white rounded-2xl sm:rounded-3xl p-6 shadow-md hover:shadow-lg transition-all duration-300 w-full max-w-xs h-56 sm:h-64 flex items-center justify-center"
                        >
                            <div className="relative w-40 h-40 flex flex-col items-center justify-center">
                                <div className="relative w-30 h-30 sm:w-28 sm:h-28 mb-4">
                                    <Image
                                        src={recognition.logo}
                                        alt={recognition.alt}
                                        fill
                                        className="object-contain"
                                        sizes="(max-width: 640px) 120px, 120px"
                                        priority={recognition.id <= 2}
                                    />
                                </div>
                                <div className="text-center">
                                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1">
                                        {recognition.name}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-gray-600 font-medium">
                                        {recognition.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
interface DestinationCard {
    id: number
    name: string
    image: string
}

const leftDestinations: DestinationCard[] = [
    { id: 1, name: "USA", image: "/study-abroad-home/usa.jpeg" },
    { id: 2, name: "Canada", image: "/Canada_pic.jpg" },
    { id: 3, name: "UK", image: "/Tower_Bridge_Uk_Feb_2006.jpg?height=300&width=400" },
    { id: 4, name: "Australia", image: "/Sydney_Bridge.jpg?height=300&width=400" },
    { id: 5, name: "Germany", image: "/Germany-abroad.webp?height=300&width=400" },
]

const rightDestinations: DestinationCard[] = [
    { id: 6, name: "France", image: "/study-abroad-home/France.jpeg" },
    { id: 7, name: "New Zealand", image: "/New-zeland-view.jpg" },
    { id: 8, name: "Switzerland", image: "/Switzerland-study.jpg" },
    { id: 9, name: "Netherlands", image: "/Netherland-view.jpg?height=300&width=400" },
    { id: 10, name: "Singapore", image: "/Singapore_view.jpg?height=300&width=400" },
]

const Card = ({ destination }: { destination: DestinationCard }) => (
    <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] mb-4 md:mb-6">
        <div className="aspect-[4/3] relative">
            <Image
                src={destination.image}
                alt={`Study in ${destination.name}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
                <h3 className="text-2xl md:text-3xl font-bold text-white">{destination.name}</h3>
            </div>
        </div>
    </div>
)

const StudyDestinationSection = () => {
    const scrollY = useScroll()
    const leftTransform = -scrollY * 0.2
    const rightTransform = -scrollY * 0.2

    return (
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 mb-6 rounded-xl md:rounded-2xl relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 py-8 md:py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-center">
                    <div className="hidden lg:block overflow-hidden h-[500px] md:h-[600px] relative">
                        <div
                            className="flex flex-col gap-4 md:gap-6 transition-transform duration-100 ease-out will-change-transform"
                            style={{
                                transform: `translateY(${leftTransform}px)`,
                                minHeight: `${leftDestinations.length * 140}px`,
                            }}
                        >
                            {leftDestinations.map((destination) => (
                                <Card key={`left-${destination.id}`} destination={destination} />
                            ))}
                        </div>
                    </div>

                    <div className="text-center text-white space-y-6 md:space-y-8 px-4 order-first lg:order-none">
                        <div className="space-y-3 md:space-y-4">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                                Your <span className="text-white">Dream Study</span>
                            </h1>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                                <span className="underline decoration-white/30">Destination</span> Awaits
                            </h1>
                        </div>
                        <p className="text-base md:text-lg lg:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
                            Learn all about the country's top universities, scholarships, cost of living, post study work rights and
                            more from the finest foreign education consultants in the industry!
                        </p>
                        <Link href="study-abroad/abroad">
                            <Button
                                variant="outline"
                                size="lg"
                                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-700 px-6 md:px-8 py-2 md:py-3 text-base md:text-lg font-semibold rounded-full transition-all duration-300 mx-auto"
                            >
                                View more
                            </Button>
                        </Link>
                    </div>

                    <div className="hidden lg:block overflow-hidden h-[500px] md:h-[600px] relative">
                        <div
                            className="flex flex-col gap-4 md:gap-6 transition-transform duration-100 ease-out will-change-transform"
                            style={{
                                transform: `translateY(${rightTransform}px)`,
                                minHeight: `${rightDestinations.length * 140}px`,
                            }}
                        >
                            {rightDestinations.map((destination) => (
                                <Card key={`right-${destination.id}`} destination={destination} />
                            ))}
                        </div>
                    </div>

                    <div className="lg:hidden grid grid-cols-2 gap-4 mt-8">
                        {[...leftDestinations.slice(0, 2), ...rightDestinations.slice(0, 2)].map((destination) => (
                            <Card key={`mobile-${destination.id}`} destination={destination} />
                        ))}
                    </div>
                </div>
            </div>
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

            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-blue-500/5 to-transparent rounded-full"></div>
            </div>

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
            <StatsSection />
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