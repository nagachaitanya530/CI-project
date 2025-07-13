"use client";

import Link from "next/link";
import { useState } from "react";
import StudyAbroadModal from "../study-mauritius/StudyAbroadModal";

function HeroSection2()
{
    const [showModal, setShowModal] = useState(false);
    return(
      <>
                  {/* Hero Section  */}
            <section className="bg-blue-50 py-10 px-6 lg:px-24 flex flex-col lg:flex-row justify-between items-center">
                {/* Left Side Content */}
                <div className="max-w-2xl">
                    <h1 className="text-4xl font-semibold text-blue-900 mb-2">SAT – 2025</h1>
                    
                    <div className="grid grid-cols-2 space-x-15">
                        <div className="mb-4">
                            <p className="font-semibold text-lg">Test Format :</p>
                            <p className="text-blue-900 text-base">
                                Reading and Writing, Math
                            </p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold text-lg">Duration :</p>
                            <p className="text-blue-900 text-base">
                                2 Hours 14 minutes
                            </p>
                        </div>

                        <div className="mb-6">
                            <p className="font-semibold text-lg">Mode :</p>
                            <p className="text-blue-900 text-base">
                                Computer Adaptive Test
                            </p>
                        </div>
                    </div>
                    <button className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition" onClick={() => setShowModal(true)}>
                        Free Expert Consultation
                    </button>
                </div>

                {/* Right Side Image */}
                <div className="mt-10 lg:mt-0 lg:ml-12 text-right">
                    <div className="rounded-2xl overflow-hidden shadow-lg max-w-md">
                        <img
                            src="/SatExam/creative-guy.jpg"
                            alt="IELTS Preparation"
                            width={500}
                            height={300}
                            className="w-full h-auto"
                        />
                    </div>
                    <p className="text-sm italic text-gray-700 mt-2">
                        Last updated – 19 October '24
                    </p>
                </div>
                 {showModal && <StudyAbroadModal onClose={() => setShowModal(false)} />}
            </section>
            </>
    );
}
export default HeroSection2;