"use client";

import {
    Globe,
    BookOpenText,
    BadgeDollarSign,
    Users2,
    GraduationCap,
} from "lucide-react";
import React from "react";



const reasons = [
    {
        icon: Globe,
        title: "Global Edge",
        desc: "Earn degrees that are recognized worldwide and boost your global career opportunities.",
    },
    {
        icon: BookOpenText,
        title: "Choice & Flexibility",
        desc: "Select from a wide range of programs with customizable curriculum options.",
    },
    {
        icon: BadgeDollarSign,
        title: "Financial Assistance",
        desc: "Access scholarships, grants, and work-study opportunities while studying.",
    },
    {
        icon: Users2,
        title: "Cultural Diversity",
        desc: "Experience a vibrant student community with global cultural exposure.",
    },
    {
        icon: GraduationCap,
        title: "Top-Ranked Universities",
        desc: "Study at globally renowned institutions with cutting-edge research facilities.",
    },
];

const WhyStudyUsa = () => {
    return (
        <section className="bg-white py-16 px-4 lg:px-24">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 underline decoration-red-500 decoration-2 underline-offset-5">
                        Why Study in the USA?
                    </h2>

                    <div className="space-y-5">
                        {reasons.map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-white p-5 rounded-xl shadow-md flex items-start gap-4"
                            >
                                <div className="bg-blue-100 p-3 rounded-full">
                                    <item.icon className="w-5 h-5 text-blue-700" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-900">
                                        {item.title}
                                    </h4>
                                    <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>



                {/* Right: Your Finalized Form */}
                <div className="w-full">

                    {/* <StudyAbroadForm /> */}

                    <StudyAbroadForm />

                </div>

            </div>
        </section>
    );
};

export default WhyStudyUsa;
