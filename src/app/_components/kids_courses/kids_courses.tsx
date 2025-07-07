"use client";

import React, { useState } from "react";
import Image from "next/image";
import { HiOutlineMailOpen } from "react-icons/hi";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaArrowRight, FaBook, FaBookmark, FaMicrophone,  FaUnderline,  } from "react-icons/fa";
import { TiMessages } from "react-icons/ti";
import CountUp from "react-countup";
import { useIsMobile } from "~/hooks/use-mobile";
import Link from "next/link";

const Mainsection = () => {
    return (
        <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
            <Image src="/kids/kids1.jpg"
             alt="Kids"
            fill
            className="absolute inset-0" 
            style={{ objectFit: "cover" }}/>
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute bottom-6 right-6 max-w-md text-white bg-sky-400 rounded-2xl  p-10 mb-0 mr-5 space-y-4">
                <h1 className="text-4xl md:text-3xl font-bold">Empowering your kids for the new world</h1>
                <p className="text-sm md:text-base">
                    Prepare your kids are the most sought-after skills in the modern world. With impeccable communication
                    skills and language proficiency, your kids will be able to win the world over.
                </p>
                <Link href="/book-demo" className="inline-block">
                    <button className="bg-blue-500 hover:bg-blue-600 text-black font-semibold px-4 py-2 rounded  hover:bg-blue-700 transition-colors duration-300 ">
                        GET STARTED NOW
                    </button>
                </Link>
            </div>
        </section>
    );
};

const SecondSection = () => {
    return (
        <div className="relative bg-white">
            <div className="bg-gray-700 w-full pt-12 pb-48 px-6 md:px-16">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center">
                    <div className="hidden md:block"></div>

                    <div className="text-white text-right">
                        <h2 className="text-xl md:text-5xl font-semibold leading-tight">
                            English communication <br /> programmes for growing <br />
                            minds
                        </h2>
                    </div>
                </div>
            </div>

            <div className="relative bg-white -mt-36 px-6 md:px-16 pb-12">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
                    <div className="relative z-10 -mt-32">
                        <img
                            src="/kids/kid3.jpg"
                            alt="Kid with star"
                            className="w-full max-w-xl mx-auto rounded-xl shadow-xl"
                        />
                    </div>

                    <div className="text-gray-800 text-sm md:text-base pt-12 md:pt-0 mt-5">
                        <p>
                            CI offers various programmes for the development of communication skills in kids along with
                            personality development training. We focus on the overall development while imparting the
                            essential skill set.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const LeadershipFlow = () => {
    return (
        <section className="w-full bg-white py-12 px-4">
            <div className="w-full flex flex-col lg:flex-row items-center justify-evenly ">
                <div className="text-gray-600 text-sm italic text-center lg:text-left w-[250px] h-[100px] lg:w-auto">
                    <h3>
                        Potential leaders
                        <br />
                        of the world
                    </h3>
                </div>
                <div>
                    <FaArrowRight className="text-4xl  text-gray-400" />
                </div>

                <div className="bg-lime-400 text-white font-semibold px-8 py-6 text-center text-4xl rounded-xl shadow-md w-[450px] h-[150px]  lg:w-auto">
                    20+ <br /> Skills
                </div>
                <div>
                    <FaArrowRight className="text-4xl  text-gray-400" />
                </div>
                <div className="text-gray-700 text-center leading-snug font-medium  w-[250px] h-[100px] lg:w-auto">
                    CI Coaches+
                    <br />
                    Kids+
                    <br />
                    Parents
                    <br />
                    Collaboration
                </div>
                <div>
                    <FaArrowRight className="text-4xl  text-gray-400" />
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-2   w-[250px] h-[100px] lg:w-auto">
                    <div className="text-9xl font-light text-gray-600 hidden lg:block">{"{"}</div>
                    <div className="text-black font-bold text-7xl lg:text-2xl  text-center">
                        Actual
                        <br />
                        Leaders
                    </div>
                </div>
            </div>
        </section>
    );
};

const Developmentprogram = () => {
    const kidsPrograms = [
        {
            title: "English Communication ",
            description:
                "English communication is an important skill in the modern world and we want to make sure that your kid is ready to take on the challenges.",
            image: "/kids/child1.jpg",
        },

        {
            title: "Foreign Communication ",
            description:
                "Knowing a foreign language opens the door for new opportunities and new experiences. Give your kids the taste of a new language and add to their skills.",
            image: "/kids/child2.jpg",
        },
        {
            title: "Parents Empowerment   ",
            description:
                " Sometimes parents need to upgrade their skills in order to help their kids do the school homework. We help them guide their kids to the brightest future.	",
            image: "/kids/parent.jpg",
        },
    ];

    return (
        <section className="relative">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-white z-0" />
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gray-200 z-0" />

            <div className="relative z-10 py-12 text-center">
                <h2 className="text-3xl font-bold mb-10">Our Kids Development Programs</h2>

                <div className="flex flex-col md:flex-row gap-10 justify-center items-center px-4 md:px-16">
                    {kidsPrograms.map((program, index) => (
                        <div key={index} className="bg-transparent rounded-xl overflow-visible max-w-sm">
                            <div className="relative ">
                                <img
                                    src={program.image}
                                    alt={program.title}
                                    className="w-full h-60 object-cover rounded-2xl"
                                />

                                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-11/12 bg-white rounded-xl shadow-lg p-4">
                                    <h3 className="text-xl font-semibold">{program.title}</h3>
                                </div>
                            </div>

                            <div className="mt-10 px-4">
                                <p className="text-gray-600 text-sm">{program.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <a href="/book-demo" className="inline-block ">
                    <button className="bg-blue-500 text-black font-semibold  px-4 py-2 mb-0 mt-5 rounded  hover:bg-blue-700 transition-colors duration-300">
                        BOOK FREE DEMO
                    </button>
                </a>
            </div>
        </section>
    );
};

const Facts = () => {
    const facts = [
        {
            value: 20,
            suffix: "+",
            label: "Years of Experienced",
            description: "We have the experience and system that proved to be among the best in the world.",
        },
        {
            value: 15,
            suffix: "K+",
            label: "Students Empowered",
            description: "We have impacted the lives of thousands of students across the globe with our approach.",
        },
        {
            value: 6,
            suffix: "K+",
            label: "Parents Empowered",
            description: "We have influenced the parents with a foundation that helps them make right decisions.",
        },
        {
            value: 9,
            suffix: "K+",
            label: "Teachers Empowered",
            description: "We not only train students but also train professionals to achieve greater heights.",
        },
    ];

    return (
        <section className="py-16 px-4 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold text-center mb-12 text-gray-800">Fun facts about CI Kids Programme</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {facts.map((fact, index) => (
                        <div key={index} className="text-center">
                            <div className="w-48 h-48 mx-auto rounded-lg flex flex-col items-center justify-center mb-4 border-2 border-blue-400">
                                <div className="text-7xl text-gray-500 font-medium  mb-2">
                                    <CountUp end={fact.value} duration={5} suffix={fact.suffix} enableScrollSpy />
                                </div>
                                <div className="text-xl text-blue-400 font-medium px-4 text-center leading-tight">
                                    {fact.label}
                                </div>
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">{fact.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
const Contactwats = () => {
    const handleWhatsApp = () => {
        window.open(
            "https://wa.me/919000000000?text=I%20want%20to%20enquire%20about%20PDCC%20Spoken%20English%20course",
            "_blank"
        );
    };

    return (
        <div className="text-center mt-5 mb-5 p-9">
            <h2 className="text-2xl font-semibold text-center mb-4  text-gray-800 max-w-4xl mx-auto">
                If you have any questions, we encourage you to get in touch with us to discuss your queries in detail.
            </h2>
            <button
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 shadow-lg"
                onClick={handleWhatsApp}
            >
                WhatsApp Us
            </button>
        </div>
    );
};

const LearningSection = () => {
    const titles = ["	Story Telling", " Body Language", "Presentation", "Social Skills"];
    const [currentIndex, setCurrentIndex] = useState(0);
    return (
        <section className="max-w-7xl mx-auto px-4 py-8 mb-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16">
                <div  className="relative w-full h-64 md:h-80">
                    <Image
                        src="/kids/teacher1.jpg"
                        alt="teacher helping student"
                        fill
                       className="object-cover rounded-2xl shadow-lg"
                    />
                </div>

                <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800 leading-relaxed">
                        Give the power to enhance learning skills
                    </h1>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div className="space-y-8">
                    <div className="bg-blue-400 w-96   rounded-2xl p-6 md:p-8 text-white shadow-xl">
                        <p className="text-sm md:text-base leading-relaxed mb-6">
                            From English Language to French, Spanish and German, from Interpersonal Skills to Public
                            Speaking, from Creative writing to poetry, we help the students achieve and perfect the skills
                            they need and are interested in.
                        </p>
                         <a href="/" className="inline-block ">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
                            GET STARTED NOW
                        </button>
                        </a>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800">
                            How we work our learning programs
                        </h2>

                        <div className="grid grid-cols-3 gap-4 text-center">
                            <div className="bg-white rounded-lg p-4 text-sm md:text-base font-semibold text-gray-700 flex flex-col items-center">
                                <FaBook className="text-stone-900 text-xl mb-2" />
                                Grammar
                            </div>

                            <div className="bg-white rounded-lg p-4 text-sm md:text-base font-semibold text-gray-700 flex flex-col items-center">
                                <FaUnderline className="text-stone-900 text-xl mb-2" />
                                Vocabulary
                            </div>

                            <div className="bg-white rounded-lg p-4 text-sm md:text-base font-semibold text-gray-700 flex flex-col items-center">
                                <FaUnderline className="text-stone-900 text-xl mb-2" />
                                Fluency
                            </div>

                            <div className="bg-white rounded-lg p-4 text-sm md:text-base font-semibold text-gray-700 flex flex-col items-center">
                                <FaMicrophone className="text-stone-900 text-xl mb-2" />
                                Pronunciation
                            </div>

                            <div className="bg-white rounded-lg p-4 text-sm md:text-base font-semibold text-gray-700 flex flex-col items-center">
                                <FaBookmark className="text-stone-900 text-xl mb-2" />
                                Creative Writing
                            </div>

                            <div className="bg-white rounded-lg p-4 text-sm md:text-base font-semibold text-gray-700 flex flex-col items-center">
                                <TiMessages className="text-stone-900 text-xl mb-2" />
                                Conversation
                            </div>
                        </div>
                        <div
                            onMouseEnter={() => setCurrentIndex((prev) => (prev + 1) % titles.length)}
                            className="w-80 h-20 bg-blue-500 text-white flex items-center justify-center rounded-xl shadow-lg text-xl font-semibold transition-all duration-500 cursor-pointer hover:bg-blue-600"
                        >
                            ›› {titles[currentIndex]}
                        </div>
                    </div>
                </div>

                <div className="space-y-8">
                    <div>
                        <img
                            src="/kids/teacher3.jpg"
                            alt="students learning"
                            className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg"
                        />
                    </div>

                    <div>
                        <img
                            src="/kids/teacher4.jpg"
                            alt="interactive learning"
                            className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const Trainingone = () => {
    const train = [
        {
            title: "Express training",
            description:
                "We focus on every child with highly customised personal training. No distractions, only learning with fun.",
        },
        {
            title: "Public Speaking",
            description: "Every week we expose the students to group activities to enhance their public speaking skills",
        },
        {
            title: "Certified Professionals",
            description:
                "We know how important correct training is, that’s why we train our teachers intensively and certify them on international standards.",
        },
    ];

    return (
        <section>
            <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto items-start">
                <div className="flex-1 lg:min-w-96">
                    <img src="/kids/child4.jpg" alt="Training" className="w-full h-auto rounded-lg shadow-lg" />
                </div>
                <div className="flex-1 lg:pl-8 mt-6">
                    <h1 className="text-2xl md:text-3xl font-semibold ">1:1 Training </h1>
                    {train.map((item, index) => (
                        <div key={index} className="mb-8 mt-6">
                            <h1 className="text-xl md:text-3xl font-medium  ">{item.title}</h1>

                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Parentfeedback = () => {
    const feedback = [
        {
            id: 1,
            message:
                "I came to know about CI programme through a quick search on Google and talked to a representative. It took me only 10 minutes to enroll my daughter. It was a great experience throughout",
            name: "Abijith",
            job: "Software Expert",
        },
        {
            id: 2,
            message:
                "The CI programme has been incredibly beneficial for my child. The curriculum is well-structured and the teachers are very supportive. Highly recommend this program to other parents.",
            name: "Priya",
            job: "Marketing Manager",
        },
        {
            id: 3,
            message:
                "My son has shown remarkable improvement since joining CI. The personalized attention and quality education provided here is exceptional. Very satisfied with the results.",
            name: "Rajesh",
            job: "Business Analyst",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? feedback.length - 1 : prevIndex - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === feedback.length - 1 ? 0 : prevIndex + 1));
    };

    const goToSlide = (index: React.SetStateAction<number>) => {
        setCurrentIndex(index);
    };

    return (
        <section className="py-12 bg-gray-50">
            <div className="max-w-4xl mx-auto p-4">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Feedback on our programs</h2>
                </div>

                <div className="relative overflow-hidden rounded-lg bg-white">
                    <div
                        className="flex transition-transform duration-300 ease-in-out"
                        style={{
                            transform: `translateX(-${currentIndex * 100}%)`,
                        }}
                    >
                        {feedback.map((slide, index) => (
                            <div
                                key={slide.id}
                                className="w-full flex-shrink-0 p-8 flex items-center justify-center min-h-[300px]"
                            >
                                <div className="text-center max-w-2xl">
                                    <blockquote className="text-lg text-gray-700 leading-relaxed mb-6 italic">
                                        "{slide.message}"
                                    </blockquote>
                                    <div className="border-t pt-6">
                                        <h3 className="text-xl font-semibold text-gray-800 mb-1">{slide.name}</h3>
                                        <p className="text-blue-600 font-medium">{slide.job}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={goToPrevious}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-gray-700 p-3 rounded-full transition-all duration-200 hover:bg-gray-50"
                        aria-label="Previous feedback"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <button
                        onClick={goToNext}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-gray-700 p-3 rounded-full transition-all duration-200 hover:bg-gray-50"
                        aria-label="Next feedback"
                    >
                        <ChevronRight size={24} />
                    </button>

                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {feedback.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                                    index === currentIndex ? "bg-blue-500" : "bg-gray-300 hover:bg-gray-400"
                                }`}
                                aria-label={`Go to feedback ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                <div className="mt-6 text-center">
                    <p className="text-gray-600">
                        Feedback {currentIndex + 1} of {feedback.length}
                    </p>
                </div>
            </div>
        </section>
    );
};

type Plan = {
    title: string;
    price: string;
    duration: string;
};
const Pakages = () => {
    const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
    const plans = [
        {
            title: "1:1 Training",
            price: "₹5490",
            duration: "Per month",
        },
        {
            title: "1:1 Training",
            price: "₹14490",
            duration: "For full 3 month course",
        },
        {
            title: "1:1 Pro",
            price: "₹27990",
            duration: "6 month extended",
        },
    ];

    const features = ["1 Hour Sessions", "Monday-Friday", "Weekly Assessments", "Sunday Public Speaking"];

    return (
        <div className="bg-white py-12 px-4 sm:px-6 lg:px-8 mb-8 mt-5">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
                English Communication Packages
            </h1>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {plans.map((plan, index) => (
                    <div key={index} className=" rounded-lg p-6 text-center bg-gray-100">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">{plan.title}</h3>
                        <p className="text-3xl font-bold text-blue-900">{plan.price}</p>
                        <p className="text-sm text-gray-500 mb-4">{plan.duration}</p>
                        <ul className="text-sm text-gray-700 space-y-2">
                            {features.map((feature, i) => (
                                <li key={i}>{feature}</li>
                            ))}
                        </ul>

                        <a
                            onClick={() => setSelectedPlan(plan)}
                            className="text-blue-600 text-sm underline cursor-pointer hover:text-blue-800 transition"
                        >
                            View More
                        </a>
                    </div>
                ))}
            </div>
            {selectedPlan && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white w-[90%] max-w-md p-6 rounded-lg shadow-lg relative">
                        <button
                            onClick={() => setSelectedPlan(null)}
                            className="absolute top-3 right-3 text-gray-500 text-2xl hover:text-red-500"
                        >
                            &times;
                        </button>

                        <h2 className="text-xl font-bold text-gray-800 mb-2">{selectedPlan.title}</h2>
                        <p className="text-lg font-semibold text-blue-900 mb-1">{selectedPlan.price}</p>
                        <p className="text-sm text-gray-500 mb-4">{selectedPlan.duration}</p>
                        <ul className="text-sm text-gray-700 space-y-2 mb-4">
                            {features.map((feature, i) => (
                                <li key={i}>✅ {feature}</li>
                            ))}
                        </ul>

                        <button
                            onClick={() => setSelectedPlan(null)}
                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

const Subscribersection = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };
    return (
        <>
            <section className="bg-gray-800 text-white py-10 px-4 mb-20">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="flex-1">
                        <div className="flex items-center mb-6">
                            <HiOutlineMailOpen className="w-12 text-blue-500 h-12 mr-4" />
                            <h2 className="text-2xl font-semibold leading-tight">
                                Subscribe to <br />
                                Our Newsletter
                            </h2>
                        </div>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
                            <input
                                type="text"
                                placeholder="Name"
                                className="bg-gray-700 text-white px-4 py-2 rounded-full outline-none placeholder-gray-400"
                                required
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="bg-gray-700 text-white px-4 py-2 rounded-full outline-none placeholder-gray-400"
                                required
                            />
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-md text-white font-bold self-start"
                            >
                                SUBSCRIBE →
                            </button>
                            {submitted && (
                                <p className="text-green-400 text-sm flex items-center gap-2">
                                    ✔ Your submission was successful.
                                </p>
                            )}
                        </form>
                    </div>

                    <div className="flex-1">
                        <img src="/kids/kids2.jpg" alt="girl" className="rounded-xl w-full h-auto object-cover" />
                    </div>
                </div>
            </section>
        </>
    );
};

const NewsSection = () => {
    const newsItems = [
        {
            image: "/kids/article370.webp",
            title: "Article 370: The End of Kashmir’s Special Status ",
            date: "Abhinav July 18, 2024 ",
            description: "The abrogation of Article 370 in August 2019 marked a",
        },
        {
            image: "kids/samsungai.webp",
            title: "Highlights from the Expert Panel on the Future of Mobile AI Responsible, cooperative AI innovation",
            date: "Abhinav July 13, 2024  ",
            description: "Samsung Electronics unveiled a record number of new products at",
        },
        {
            image: "kids/sc.webp",
            title: "Supreme Court rejects request to create expert panel to oversee investigation into Hathras stampede ",
            date: "Abhinav July 12, 2024 ",
            description: "Petitioner-attorney Vishal Tiwari was questioned by a bench led by",
        },
    ];
    return (
        <section className="py-10 bg-gray-100 mb-20">
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold">News and Events</h1>
            </div>
            <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {newsItems.map((item, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
                        <div className="h-48 w-full">
                            <img src={item.image} alt={item.title} className="object-cover w-full h-full" />
                        </div>
                        <div className="p-4 flex flex-col gap-2">
                            <h2 className="text-xl font-semibold text-gray-800">{item.title}</h2>
                            <p className="text-sm text-gray-500">{item.date}</p>
                            <p className="text-gray-700">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

const Kids_courses = () => {
    
    return (
        <div className="font-sans">
           
          
            <Mainsection />
            
            <SecondSection />
            <LeadershipFlow />

            <Developmentprogram />
            <Facts />
            <Contactwats />
            <LearningSection />
            <Trainingone />
            <Parentfeedback />
            <Pakages />

            <Subscribersection />
            <NewsSection />
          
           
            
        </div>
    );
};

export default Kids_courses;
