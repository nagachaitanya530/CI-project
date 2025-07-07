"use client";
import { useState } from "react";
import Navigation from "../_components/Navigation";
import HeroSection from "../_components/corporate-training-english/HeroSection";
import AboutPage from "../_components/corporate-training-english/AboutPage";
import CurriculumPage from "../_components/corporate-training-english/CurriculumPage";
import Instructor from "../_components/corporate-training-english/Instructo";
import EnrollmentOption from "../_components/corporate-training-english/Emrollment";
import Footer from "../_components/Footer";
import Link from "next/link";
function CorporateTraining() {

    const [activeTab, setActiveTab] = useState('About');

    const tabs = ["About", "Curriculum", "Instructors", "Enrolment Options"];
    const handleWhatsApp = () => {
        window.open('https://wa.me/917607676998?text=I%20want%20to%20enquire%20about%20PDCC%20Spoken%20English%20course', '_blank');
    };

    return (<>
        <div>
            <Navigation/>
           <HeroSection/>
            <section className="bg-gray-100 py-6 px-4 flex flex-col md:flex-row justify-evenly text-center shadow-2xl gap-4">
                <div>
                    <div className="text-xl font-bold">12 Week </div>
                    <p className="text-sm">5-7 Hours/week </p>
                </div>
                <div>
                    <div className="text-xl font-bold">1:1 Training/Group</div>
                    <p className="text-sm">Fully Customized</p>
                </div>
                <div>
                    <div className="text-xl font-bold">Certification</div>
                    <p className="text-sm">After Course</p>
                </div>
            </section>
          
            <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-6">            
                <div className="md:col-span-2 bg-white rounded-2xl  p-4 shadow-2xl">
                    <div className="flex justify-evenly border-b border-gray-300 pb-3">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`text-lg font-semibold ${activeTab === tab
                                    ? "text-blue-700"
                                    : "text-pink-600"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                    <div className="mt-5">
                        {activeTab === "About" && <AboutPage />}
                        {activeTab === "Curriculum" && <CurriculumPage />}
                        {activeTab === "Instructors" && <Instructor />}
                        {activeTab === "Enrolment Options" && <EnrollmentOption />}
                    </div>
                </div>
                <div>
                    <div className="bg-blue-400 w-80 h-120 text-white shadow-lg flex flex-col items-center text-center">
                        <img
                            src="../../cardimage.webp"
                            alt="Foundation Course"
                            className="w-full  object-cover mb-4"
                        />
                        <h2 className="text-3xl font-bold">Looking for <br />something basic?</h2>
                        <p className="text-sm mt-2 mb-4">
                            Join our Foundation English course for just Rs.4990 per month with expert certified trainers.
                        </p>
                        <Link href="/english-foundation-course">
                        <button className="border border-white px-6 py-2 rounded hover:bg-white hover:text-blue-400 transition"
                        >
                            CLICK HERE
                        </button>
                        </Link>
                    </div>
                    <div className="bg-blue-400 w-80 h-70 text-white p-6 shadow-lg rounded-lg flex flex-col items-center justify-center text-justify mt-5">
                        <div className="flex flex-col items-start space-y-4">
                            <h1 className="text-xl font-bold">Not sure what to do?</h1>
                            <p className="text-sm mt-2 mb-4 text-justify">
                                Talk to our student counsellor for<br /> more details on our courses and<br /> choose the one that suits you <br />best.
                            </p>
                            <button className="bg-white hover:bg-white text-black text-lg px-6 py-3" onClick={handleWhatsApp}>
                                Call Now
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <Footer/>
    </>
    )
}
export default CorporateTraining;