"use client";

import { useEffect, useRef, useState, type JSX } from "react";
import { BookOpen, ChevronLeft, ChevronRight, Play } from "lucide-react";
import React from "react";
<<<<<<< HEAD
import ContactFormSection from '~/app/_components/study-abroad/home/contact-form';
=======
>>>>>>> changes_ci
import Image from "next/image";
import { FileText, FileSearch } from "lucide-react";
import BookConsultationForm from "../BookConsultationForm";
import Link from "next/link";
import FAQ from "~/app/_components/study-abroad/faq";
import YourJourney from "~/app/_components/study-abroad/your-journey";

const Herosection = () => {
    return (
        <>
            <section className="bg-gradient-to-r from-white to-[#fef5f5] px-4 md:px-20 py-10">
                <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
                    <div className="text-center md:text-left flex-1">
                        <h1 className="text-3xl md:text-5xl font-medium leading-tight">
                            <span className="font-bold text-black underline decoration-red-500">Italy:</span> A country of
                            knowledge,
                            <br /> innovation and culture
                        </h1>
                        <Link href="/study-abroad">
                            <button className="mt-6 bg-[#143B85] text-white hover:bg-white hover:text-[#143B85] border border-[#143B85] px-6 py-3 rounded-md font-semibold transition-colors duration-300">
                                Free Expert Consultation
                            </button>
                        </Link>
                    </div>

                    <div className="flex-1 relative w-full max-w-sm mx-auto">
                        <Image
                            src="/study-abrd-italy.webp"
                            alt="Student"
                            width={400}
                            height={400}
                            className="w-full h-auto"
                        />
                    </div>
                </div>

                <div className="bg-gradient-to-r from-white to-pink-50 max-h-96">
                    <div className="mt-0 bg-gray-200 rounded-4xl p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-center gap-6 max-w-6xl mx-auto">
                        <div>
                            <h2 className="text-4xl text-[#143B85] font-semibold">60+</h2>
                            <p className="text-gray-800 font-bold">Universities</p>
                        </div>

                        <div className="md:border-l md:border-gray-400 md:pl-6">
                            <h2 className="text-4xl text-[#143B85] font-semibold">€18k–€32k</h2>
                            <p className="text-gray-800 font-bold">Annual tuition fees</p>
                        </div>

                        <div className="md:border-l md:border-gray-400 md:pl-6">
                            <h2 className="text-4xl text-[#143B85] font-semibold">32k+</h2>
                            <p className="text-gray-800 font-bold">International Students</p>
                        </div>

                        <div className="md:border-l md:border-gray-400 md:pl-6">
                            <h2 className="text-4xl text-[#143B85] font-semibold">1 Year</h2>
                            <p className="text-gray-800 font-bold">Post-Study Work Visa</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

const Secondsection = () => {
    const whyitaly = [
        {
            title: "Excellent degree programs",
            description:
                "The degrees from universities in Italy are highly recognised. Business, Engineering, Fashion, and Designing are some of the most popular courses offered here.",
        },
        {
            title: "Affordable country",
            description:
                "Italy is considered an afforable country as the cost of studying there is among the lowest in Europe. Additionally, scholarships and grants are available to students based on merit.",
        },
        {
            title: "Better career opportunities",
            description:
                "Internships and job placements are available to all students across various sectors like fashion, design, travel, and many others. With many foreign businesses based in Italy, the exposure gained is highly valuable.",
        },
        {
            title: "Language and linguistic diversity",
            description:
                "Studying in Italy offers the opportunity to learn Italian, which enhances communication skills, cognitive development, and cross-cultural understanding. Proficiency in another language also boosts travel experiences and job prospects.",
        },
        {
            title: "Central Location in Europe",
            description:
                "Italy's central location in Europe makes it easy to travel and explore other European countries during breaks or weekends.",
        },
        {
            title: "Cultural Immersion",
            description:
                "Italian universities provide international students with the chance to immerse themselves in the Italian language, cuisine, and lifestyle, enriching the overall educational experience.",
        },
    ];
    return (
        <section>
            <div className="py-12 px-6 md:px-20 bg-white">
                <div className="grid md:grid-cols-3 gap-10">
                    <div className="md:col-span-2">
                        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-12">
                            <span className="font-medium">Why</span>{" "}
                            <span className="font-semibold underline decoration-red-500">Study In Italy?</span>
                        </h2>

                        <div className="space-y-12">
                            {whyitaly.map((item, idx) => (
                                <div key={idx}>
                                    <div className="flex gap-5 items-start">
                                        <div className="bg-blue-100 p-3 rounded-full">
                                            <BookOpen className="text-blue-600" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
                                            <p className="text-gray-600 text-justify leading-relaxed mt-2">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>

                                    <hr className="my-6 border-gray-300" />
                                </div>
                            ))}
                        </div>
                    </div>

                    
                </div>
            </div>
        </section>
    );
};

const universities = [
    {
        name: "Istituto Marangoni",
        image: "/istituto-marangoni.webp",
        popularFor: "Fashion Design",
        ranking: "51-100",
    },
    {
        name: "Nuova Accademia di Belle Arti",
        image: "/nuova-accademia-di-belle-arti.webp",
        popularFor: "Graphic Design",
        ranking: "51-100",
    },
    {
        name: " Domus Academy Milan",
        image: "/domus-academy-milan.webp",
        popularFor: "Interior & Living Design",
        ranking: "151-200",
    },
    {
        name: "Sapienza-University of Rome ",
        image: "/sapienza-university-of-rome.webp",
        popularFor: "Classics and Ancient History",
        ranking: "151-200",
    },
    {
        name: "University of Bologna",
        image: "/university-of-bologna.webp",
        popularFor: " Law",
        ranking: "100-151",
    },
];

const UniversityList = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const container = scrollRef.current;
        if (!container || universities.length < 4) return;

        const cardWidth = 280 + 24;
        const totalCards = universities.length;

        let currentIndex = 0;

        const interval = setInterval(() => {
            currentIndex++;
            if (currentIndex > totalCards) {
                currentIndex = 1;
                container.scrollTo({ left: 0, behavior: "smooth" });
            } else {
                container.scrollTo({ left: cardWidth * currentIndex, behavior: "smooth" });
            }

            setIndex(currentIndex);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const duplicatedList = universities.length >= 4 ? [...universities, ...universities.slice(0, 4)] : universities;

    return (
        <div className="bg-[#e8eff8] py-10 px-4">
            <h2 className="text-3xl font-bold text-center">
                <span className="underline decoration-red-500 underline-offset-4">List of Universities</span> In Mauritius
            </h2>
            <p className="text-center text-gray-600 mt-2">
                Mauritius is a top choice for international students seeking a prestigious education.
                <br />
                Here are some top universities where we have successfully placed students.
            </p>

            <div className="relative mt-10">
                <div ref={scrollRef} className="flex overflow-x-hidden gap-6 scroll-smooth">
                    {duplicatedList.map((uni, i) => (
                        <div
                            key={i}
                            className="w-[290px] flex-shrink-0 bg-white rounded-3xl p-6 shadow-md border border-gray-200"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <Image
                                    src={uni.image}
                                    alt={""}
                                    width={64}
                                    height={64}
                                    className="object-contain border-2 border-blue-600 rounded"
                                />
                                <h3 className="font-semibold text-[15px] text-gray-900 leading-snug break-words">
                                    {uni.name}
                                </h3>
                            </div>

                            <hr className="mb-3 border-gray-300" />

                            <div className="flex items-start gap-2 mb-2">
                                <span className="text-blue-600 text-xl">🎓</span>
                                <div className="text-sm text-gray-800">
                                    <p className="font-medium">Popular For</p>
                                    <p className="font-semibold">{uni.popularFor}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-2">
                                <span className="text-blue-600 text-xl">🎖️</span>
                                <div className="text-sm text-gray-800">
                                    <p className="font-medium">QS World Ranking</p>
                                    <p className="font-semibold">{uni.ranking}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {universities.length >= 4 && (
                    <div className="w-full mt-4 px-5 relative">
                        <div className="h-[1px] bg-gray-300 relative overflow-hidden">
                            <div
                                className="absolute top-0 h-[1px] w-[40%] bg-blue-600 transition-all duration-700"
                                style={{
                                    transform: `translateX(${index * 20}%)`,
                                }}
                            ></div>
                        </div>
                    </div>
                )}
            </div>

            <div className="flex justify-center items-center p-8">
                <Link href="/partnered-universities">
                    <button className="bg-white hover:bg-[#143B85] text-blue-800 hover:text-white font-semibold py-3 px-8 rounded-lg border-2 border-[#143B85] shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300">
                        View our Partnered Universities
                    </button>
                </Link>
            </div>
        </div>
    );
};

const PopularCoursesSection = () => {
    const courses = [
        {
            name: "Business Management",
            image: "/bm.jpg",
            url: "/study-abroad/italy",
        },
        {
            name: "Hospitality & Tourism",
            image: "/tourisam.jpg",
            url: "/study-abroad/italy",
        },
        {
            name: "Humanities",
            image: "/humanity.webp",
            url: "/study-abroad/italy",
        },
        {
            name: "Fashion & Design Courses",
            image: "/fashion.jpg",
            url: "/study-abroad/italy",
        },
        {
            name: "Engineering",
            image: "/eng.jpg",
            url: "/study-abroad/italy",
        },
        {
            name: "Culinary Arts",
            image: "/cullinary.jpg",
            url: "/study-abroad/italy",
        },
    ];
    return (
        <div className="py-12 px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900">
                <span className="relative inline-block">
                    <span className="relative z-10 text-black">Popular Courses</span>
                    <span className="absolute left-0 right-0 bottom-0 h-1 bg-red-500 z-0 rounded-full"></span>
                </span>{" "}
                In Italy
            </h2>

            <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
                Italy is emerging as a popular study abroad destination.
                <br />
                Here are some of the most popular courses in Italy:
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {courses.map((course, index) => (
                    <Link key={index} href={course.url} className="block">
                        <div className="rounded-3xl overflow-hidden border border-blue-100 shadow bg-white hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
                            <img src={course.image} alt={course.name} className="w-full h-48 object-cover" />
                            <div className="py-4 text-lg font-semibold text-gray-900">{course.name}</div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

const Costofstudying = () => {
    return (
        <div className="bg-gray-200 rounded-4xl py-12 px-6">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
                <div className="text-gray-800">
                    <h1 className="text-4xl font-bold mb-2  ">
                        {" "}
                        <span className="underline decoration-red-500"></span> <br />
                        <span className="text-3xl font-semibold  ">In Italy</span>
                    </h1>
                    <p className="mt-4 text-lg text-gray-700 text-justify leading-relaxed max-w-3xl">
                        The cost of studying in Italy do offer high-quality education at a lower cost as compared to other
                        European countries. The cost of study in Italy for Indian students varies from program to program.
                    </p>
                </div>
                <div className="space-y-6 p-8 ">
                    <div className="rounded-lg px-4 py-3 w-[350px]   shadow-lg">
                        <p className="text-sm font-semibold mb-2">Tuition Fees (Average per annum)</p>
                    </div>

                    <div className="space-y-3">
                        <div className="flex justify-between item-center bg-white rounded-lg px-4 py-3 shadow-sm">
                            <span className="font-medium">Bachelor’s</span>
                            <span className="font-medium">EUR 900 – 4,000</span>
                        </div>

                        <div className="flex justify-between item-center bg-white rounded-lg px-4 py-3 shadow-sm">
                            <span className="font-medium">Master’s</span>
                            <span className="font-medium">EUR 2,000 – 3,500</span>
                        </div>
                    </div>
                    <div className="rounded-lg px-4 py-3 w-[350px]   shadow-lg">
                        <p>Living Expenses (Average per annum)</p>
                    </div>
                    <div className="flex justify-between item-center bg-white rounded-lg px-4 py-3 shadow-sm">
                        <span></span>
                        <span className="font-medium">Approx. EUR 14,400</span>
                    </div>

                    <div className="rounded-lg px-4 py-3  w-[350px]   shadow-lg">
                        <p>Accommodation (Average per month)</p>
                    </div>
                    <div className="space-y-3">
                        <div className="flex justify-between item-center bg-white rounded-lg px-4 py-3 shadow-sm">
                            <span>On-Campus</span>
                            <span className="font-medium">EUR 400 - 900</span>
                        </div>
                        <div className="flex justify-between item-center bg-white rounded-lg px-4 py-3 shadow-sm">
                            <span>Off-Campus</span>
                            <span className="font-medium">EUR 600 - 1,500</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

interface ScholarshipItem {
    name: string;
    description: JSX.Element;
}

const items: ScholarshipItem[] = [
    {
        name: " Italy",
        description: (
            <div>
                <p>
                    The country offers numerous scholarships for Indian students. Italy is an attractive destination for
                    students seeking financial assistance for their higher education. These Italian scholarships for Indian
                    students are provided by both Italian universities and external organizations. Scholarships are often
                    limited and are awarded based on merit, after assessment of their grades from their previous studies.
                    Colleges offering programs in the field of Art and Design, have individual scholarships that they
                    provide the students with, based on their portfolio and profile.
                </p>
            </div>
        ),
    },
];

function Scholarships() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            { threshold: 0.3 }
        );

        const currentSection = sectionRef.current;
        if (currentSection) {
            observer.observe(currentSection);
        }

        return () => {
            if (currentSection) {
                observer.unobserve(currentSection);
            }
        };
    }, []);

    return (
        <>
            <section ref={sectionRef} className="my-20 px-4 md:px-20">
                <div className="flex flex-col md:flex-row items-center justify-between p-5 ">
                   
                    <div
                        className={`transition-all duration-1000 ease-out ${
                            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
                        }`}
                    >
                        {items.map((item, index) => (
                            <div key={index}>
                                <h1 className="text-5xl mb-6 text-gray-800">
                                    <b> Scholarships</b> In {item.name}
                                </h1>
                                <div className="text-lg text-gray-700 max-w-3xl">{item.description}</div>
                            </div>
                        ))}
                    </div>

                    
                    <div
                        className={`transition-all duration-1000 ease-out ${
                            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
                        } mt-10 md:mt-0 md:w-2/5`}
                    >
                        <img
                            src="/scinitaly.jpg"
                            alt="Scholarships"
                            className="h-80 w-full max-w-lg object-cover rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </section>
        </>
    );
}

const CareerProspects = () => {
    const Career = [
        {
            name: "Creative Industries",
            image: "/creative.jpg",
        },
        {
            name: "Fashion & Design",
            image: "/fashion (2).jpg",
        },
        {
            name: "Food & Wine",
            image: "/food&wine.jpg",
        },
        {
            name: "Marketing & Sales...",
            image: "/marketing.jpg",
        },
        {
            name: "IT professionals",
            image: "/itpro.jpg",
        },
        {
            name: "Engineering &...",
            image: "/manifacture.jpg",
        },
    ];

    return (
        <div className="py-12 px-4 text-center">
           
            <h2 className="text-4xl  text-gray-900">
                <span className="relative inline-block">
                    <span className="relative z-10 text-black"> <span className="underline decoration-red-500 font-semibold">Career Prospects</span> In Italy</span>
                </span>
            </h2>

            
            <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
                The employment landscape in Italy is diverse, offering opportunities across various sectors. Here are some
                key sectors and industries that presently offer employment opportunities:{" "}
            </p>

            
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {Career.map((career, index) => (
                    <div key={index} className="rounded-3xl overflow-hidden border border-blue-100 shadow bg-white">
                        <img src={career.image} alt={career.name} className="w-full h-48 object-cover" />
                        <div className="py-4 text-lg font-semibold text-gray-900">{career.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Moredetailsection = () => {
    const [activeTab, setActiveTab] = useState("documents");
    const documentsRef = useRef<HTMLDivElement>(null);
    const visaRef = useRef<HTMLDivElement>(null);

    const scrollToSection = (section: "documents" | "visa") => {
        const targetRef = section === "documents" ? documentsRef : visaRef;
        if (targetRef.current) {
            targetRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest",
            });
        }
        setActiveTab(section);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (!documentsRef.current || !visaRef.current) return;

            const documentsRect = documentsRef.current.getBoundingClientRect();
            const visaRect = visaRef.current.getBoundingClientRect();

            const viewportMiddle = window.innerHeight / 2;

            const documentsDistance = Math.abs(documentsRect.top - viewportMiddle);
            const visaDistance = Math.abs(visaRect.top - viewportMiddle);

            if (documentsDistance < visaDistance && documentsRect.top < viewportMiddle) {
                setActiveTab("documents");
            } else if (visaRect.top < viewportMiddle) {
                setActiveTab("visa");
            }
        };

        window.addEventListener("scroll", handleScroll);

        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section>
            <div className="bg-white py-12 px-6 max-w-7xl">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-3xl text-center mb-8">
                        More about <span className="underline decoration-red-500 font-bold">Italy</span>
                    </h1>
                    <div className="flex flex-col md:flex-row gap-10 relative">
                        <div className="md:w-1/4">
                            <div className="sticky top-20 space-y-4">
                                <button
                                    onClick={() => scrollToSection("documents")}
                                    className={`flex items-center gap-2 w-full justify-center md:justify-start px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                                        activeTab === "documents"
                                            ? "bg-[#143B85] text-white"
                                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                    }`}
                                >
                                    <FileText size={16} />
                                    Documents
                                </button>
                                <button
                                    onClick={() => scrollToSection("visa")}
                                    className={`flex items-center gap-2 w-full justify-center md:justify-start px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                                        activeTab === "visa"
                                            ? "bg-[#143B85] text-white"
                                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                    }`}
                                >
                                    <FileSearch size={16} />
                                    Visa
                                </button>
                            </div>
                        </div>

                        <div className="md:w-3/4 space-y-10">
                            <div ref={documentsRef} className="bg-gray-50 p-6 rounded-2xl shadow-lg scroll-mt-24">
                                <h3 className="text-xl font-bold mb-2">Documents required to study in Italy</h3>
                                <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                                    Although getting admission in Italy is easy, it is necessary to make sure that all
                                    documents are ready for admission purposes. Here are the documents required to study in
                                    Italy:
                                </p>
                                <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                                    <li>Application Form</li>
                                    <li>Academic Documents</li>
                                    <li>Transcript</li>
                                    <li>Language Proficiency Test Scores</li>
                                    <li>Other entrance exams (GRE/GMAT) scores</li>
                                    <li>Recommendation Letters (LORs)</li>
                                </ul>
                                <Link href="/study-abroad">
                                    <button className="mt-6 bg-white text-[#143B85] hover:bg-[#143B85] hover:text-white border border-[#143B85] px-6 py-3 rounded-md font-semibold transition-colors duration-300">
                                        Free Expert Consultation
                                    </button>
                                </Link>
                            </div>

                            <div ref={visaRef} className="bg-gray-50 p-6 rounded-2xl shadow-lg scroll-mt-24">
                                <h3 className="text-xl font-bold mb-2">Italy study visa process</h3>
                                <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                                    The student needs to apply for Pre Enrollment on the UNIVERSITALY portal after being
                                    accepted into the chosen course. Once pre-enrolled, they apply for a D-Visa (if more
                                    than 90 days) or C-Visa (if less). The following documents are needed:
                                </p>
                                <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                                    <li>Valid Passport</li>
                                    <li>Proof of admission to the course</li>
                                    <li>Proof of previous education (After the Attestation and Apostille)</li>
                                    <li>Proof of funds</li>
                                    <li>Cover letter</li>
                                    <li>Medical Insurance</li>
                                    <li>Air Ticket (depends)</li>
                                    <li>Proof of Accommodation</li>
                                </ul>
                                <Link href="/study-abroad">
                                    <button className="mt-6 bg-white text-[#143B85] hover:bg-[#143B85] hover:text-white border border-[#143B85] px-6 py-3 rounded-md font-semibold transition-colors duration-300">
                                        Free Expert Consultation
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};



interface Review {
    id: number;
    quote: string;
    author: {
        name: string;
        institution: string;
        avatar: string;
    };
    media: {
        type: "image" | "video";
        src: string;
        alt: string;
    };
}

const reviews: Review[] = [
    {
        id: 1,
        quote: "Edwise does not stop at admissions. Their ongoing support post-study helped me transition smoothly into my career.The best decision for my academic journey!",
        author: {
            name: "Miral Shah",
            institution: "Bournemouth University ,UK",
            avatar: "/ms1.webp",
        },
        media: {
            type: "video",
            src: "",
            alt: "Student in london",
        },
    },
    {
        id: 2,
        quote: "It is one of the best consulting firms available and they are genuinely committed to assisting the students.The counsekors are very approachable",
        author: {
            name: "Abhinay Pandit",
            institution: "New york Film Academy, USA",
            avatar: "/ab.webp",
        },
        media: {
            type: "video",
            src: "/ab1.webp",
            alt: "Student in library",
        },
    },
    {
        id: 3,
        quote: "Wonderful consultant.I had a very flourishing process with them . They were knwledgeble nd knew what they were doing",
        author: {
            name: "Archana Sidhwani",
            institution: "Sheridan College,Canada",
            avatar: "/as.webp",
        },
        media: {
            type: "video",
            src: "/as.webp",
            alt: "Student in laboratory",
        },
    },
    {
        id: 4,
        quote: "My experience with CI has been great.My counswlor helped me tremendously and was always there to clear any doubts.",
        author: {
            name: "Srikamalesh Rajendraboopathy",
            institution: "Macquaire University , AUS",
            avatar: "/sr1.webp",
        },
        media: {
            type: "video",
            src: "/sr.webp",
            alt: "Student in laboratory",
        },
    },
];

const SucscessStories = () => {
     const [currentIndex, setCurrentIndex] = useState(0)

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1))
    }

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1))
    }
    const MediaComponent = ({
        media,
        className,
    }: {
        media: { type: "image" | "video"; src: string; alt: string };
        className?: string;
    }) => {
        const videoRef = useRef<HTMLVideoElement>(null); 
        const [isPlaying, setIsPlaying] = useState(false); 

       
        const handlePlay = () => {
            if (videoRef.current) {
                videoRef.current.play();
                setIsPlaying(true);
            }
        };

        return (
            <div className={`relative ${className}`}>
                {media.type === "video" ? (
                    <div className="relative left-40 rounded-2xl">
                        
                        <video
                            ref={videoRef}
                            src={media.src}
                            playsInline
                            muted
                            className="w-full h-full object-cover rounded-2xl"
                        />

                        {/* ⬇️ Play button overlay (only shown if not playing) */}
                        {!isPlaying && (
                            <div
                                className="absolute inset-0 flex items-center justify-center  cursor-pointer"
                                onClick={handlePlay}
                            >
                                <div className="bg-white/90 rounded-full p-4 shadow-lg">
                                    <Play className="w-8 h-8 text-gray-700" fill="currentColor" />
                                </div>
                            </div>
                        )}
                    </div>
                ) : (
                    // ⬇️ Image rendering for type: image
                    <img
                        src={media.src || "/api/placeholder/400/250"}
                        alt={media.alt}
                        className="w-full h-full object-cover"
                    />
                )}
            </div>
        );
    };
    return (
        <div className="min-h- bg-gradient-to-br from-blue-200 via-blue-100 to-purple-100 py-8 px-4 mb-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex justify-between items-start mb-16">
                    <div>
                        <h1 className="text-5xl font-bold text-gray-900 mb-4">Success Stories</h1>
                        <div className="w-32 h-1 bg-orange-400 rounded-full"></div>
                    </div>

                    {/* Navigation Arrows */}
                    <div className="flex gap-4">
                        <button
                            onClick={goToPrevious}
                            className="rounded-full w-14 h-14 bg-white hover:bg-gray-50 shadow-xl border border-gray-200 flex items-center justify-center transition-all duration-300 hover:scale-105"
                            aria-label="Previous story"
                        >
                            <ChevronLeft className="w-7 h-7 text-gray-700" />
                        </button>
                        <button
                            onClick={goToNext}
                            className="rounded-full w-14 h-14 bg-blue-600 hover:bg-blue-700 shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-105"
                            aria-label="Next story"
                        >
                            <ChevronRight className="w-7 h-7 text-white" />
                        </button>
                    </div>
                </div>

                {/* Cards Container - Horizontal Scroll */}
                <div className="relative overflow-hidden">
                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{
                            transform: `translateX(-${currentIndex * 100}%)`,
                        }}
                    >
                        {reviews.map((review, index) => (
                            <div key={review.id} className="flex-shrink-0 w-full flex justify-center">
                                <div className=" rounded-3xl shadow- overflow-visible w-[1100px] mx-4">
                                    <div className="flex justify-end">
                                        {/* Left Media Section */}
                                        <div className="w-2/5 p-6 mt-6">
                                            <MediaComponent media={review.media} className="w-full h-64" />
                                        </div>

                                        {/* Right Content Section */}
                                        <div className="w-3/5 h-80 p-8 bg-white rounded-2xl flex justify-end">
                                            <div className=" flex flex-col items-end w-3/4 justify-between">
                                                <blockquote className="text-gray-800 text-base leading-relaxed mb-8 font-normal">
                                                    "{review.quote}"
                                                </blockquote>


                                                <div className="flex items-center gap-4">
                                                    <img
                                                        src={review.author.avatar}
                                                        alt={review.author.name}
                                                        className="w-16 h-16 rounded-full object-cover"
                                                    />
                                                    <div>
                                                        <h3 className="font-bold text-gray-900 text-lg mb-1">
                                                            {review.author.name}
                                                        </h3>
                                                        <p className="text-gray-600 text-sm">
                                                            {review.author.institution}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-3 mt-16">
                    {reviews.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                ? "bg-blue-600 scale-125"
                                : "bg-gray-300 hover:bg-gray-400"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

const FaqItaly = [
    {
        question: "Is Italy an expensive country to study in?",
        answer: "No, Italy is not expensive. Italy is considered an attractive study abroad destination since its tuition fees are among the lowest in Europe.",
    },
    {
        question: "What are the popular courses to study in Italy?",
        answer: "Italian universities are known for their high-quality education. Some of the most popular courses are: fashion and design courses; business and management; social science and humanities; hospitality and tourism; BBA; culinary arts; fashion and luxury goods management; and economics.",
    },
    {
        question: "Are there scholarships available to study in Italy?",
        answer: "Yes, Italian institutions offer scholarships that cover tuition fees and other expenses. Some of the scholarships are: Italian Government Scholarship for Foreign Students; Bocconi Merit and International Awards; Padua International Excellence Scholarship Programme; The University of Bologna Study Grants; Politecnico di Milano Merit-Based Scholarships; Lombardy Region Scholarships; Italian Cultural Institutes Scholarships; Field-Based Scholarships; Region-Based Scholarships; Private Scholarships; University Scholarships; The Italian Government Scholarship for Foreign Students and the ENI Scholarship",
    },
    {
        question: "Is learning Italian compulsory to study in Italy?",
        answer: "No, it is not compulsory to study Italian. Many courses are offered in English as well. Our counselors will be happy to assist you selecting a course that is taught entirely in English.",
    },
    {
        question: "What is the cost of pursuing a Master’s degree in Italy for Indian students?",
        answer: "The cost of studying at a public university is €900 to €4000 per year. Whereas studying at a private university costs €6,000 to €20,000 per year.",
    },
];

const Italy = () => {
    return (
        <div>
            <Herosection />
            <Secondsection />
            <UniversityList />
            <ContactFormSection />
            <PopularCoursesSection />
            <Costofstudying />
            <Scholarships />
            <CareerProspects />
            <Moredetailsection />
            <SucscessStories />
            <FAQ faqs={FaqItaly} title="FAQs" />
            <YourJourney />
        </div>
    );
};

export default Italy;
