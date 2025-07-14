"use client"
import Image from "next/image";
import StudyAbroadModal from '../study-mauritius/StudyAbroadModal';
import { useState } from 'react';
interface StatItem {
    number: string;
    label: string;
}

function HeroSection() {
    const [showModal, setShowModal] = useState(false);
    const stats: StatItem[] = [
        {
            number: "200+",
            label: "Universities"
        },
        {
            number: "C$15k-C$28k",
            label: "Annual tuition fees"
        },
        {
            number: "1M+",
            label: "International Students"
        },
        {
            number: "1-3 Year",
            label: "Post-Study Work Visa"
        }
    ];


    return (
        <>
            <section className=" bg-gradient-to-br from-white via-red-50 to-green-300">
                <div className="flex flex-col-reverse lg:flex-row lg:justify-evenly lg:items-center">
                    <div className="lg:w-1/2 p-5 lg:p-10 ">
                        <h1 className="text-2xl md:text-3xl lg:text-5xl/17 pt-10 lg:px-10  ">
                            <span className="font-semibold underline text-blue-500 decoration-red-500"> Canada: </span>
                            Study at renowned institutions in a safe, multicultural environment
                        </h1>
                        <div className="space-y-2 my-5 md:my-0 lg:space-x-3 lg:pl-10">
                            <button className="md:mt-10 border py-2 px-5 lg:p-3 rounded-2xl text-sm md:text-lg text-white border-blue-900 bg-blue-900 hover:text-white"
                                onClick={() => setShowModal(true)}
                            >Free Expert Consultation</button>
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer">
                                <button className="md:mt-10 border py-2 px-3 lg:p-3 rounded-2xl text-sm md:text-lg text-white border-blue-900 bg-blue-900 hover:text-white">View & Download Brochure</button>
                            </a>
                        </div>
                    </div>
                    <div>
                        <Image src="/girl-flag.png" alt="girl with flag in hand" className="text-red-300 relative top-10.5" width={500} height={300} />

                    </div>
                </div>
                <div className="max-w-6xl mx-auto pb-6">
                    <div className="bg-gray-100 rounded-2xl p-8 shadow-sm">
                        <div className="grid grid-cols-1 md:grid-cols-4 ">
                            {stats.map((stat: StatItem, index: number) => (
                                <div key={index} className="text-center pt-6 md:pt-0 first:pt-0 md:px-4 first:md:pl-0 last:md:pr-0">
                                    <div className="text-3xl md:text-4xl font-bold text-cyan-600 mb-3 tracking-tight">
                                        {stat.number}
                                    </div>
                                    <div className="text-sm md:text-base text-black font-medium leading-tight">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {showModal && <StudyAbroadModal onClose={() => setShowModal(false)} />}
            </section>
        </>);
}
export default HeroSection;