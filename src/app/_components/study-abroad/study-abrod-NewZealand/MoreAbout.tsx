"use client";
import { useEffect, useRef, useState } from "react";
import StudyAbroadModal from '../study-mauritius/StudyAbroadModal';
export default function MoreAbout() {
    const [activeTab, setActiveTab] = useState("documents");
    const [showModal, setShowModal] = useState(false);
    const documentsRef = useRef<HTMLDivElement | null>(null);
    const visaRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSections = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

                if (visibleSections.length > 0) {
                    const topMost = visibleSections[0]?.target?.id;
                    if (topMost) {
                        setActiveTab(topMost);
                    }
                }
            },
            {
                root: null,
                threshold: 0.5,
                rootMargin: "0px 0px -40% 0px",
            }
        );

        if (documentsRef.current) observer.observe(documentsRef.current);
        if (visaRef.current) observer.observe(visaRef.current);

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
        ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <div className="max-w-7xl mx-auto px-4 md:px-20 py-10">
            <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center">
                <span>More about </span>
                <span className="font-bold underline decoration-red-500">
                    New Zealand
                </span>
            </h2>
            <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-[300px] shrink-0 h-fit md:sticky md:top-20 self-start z-10 bg-white">
                    <div className="flex md:flex-col gap-4">
                        <button
                          onClick={() => scrollToSection(documentsRef)}
                            className={`py-2 px-4 rounded-full text-left border ${activeTab === "documents"
                                    ? "bg-blue-900 text-white"
                                    : "bg-white text-gray-700"
                                }`}
                        
                        >
                            📄 Documents
                        </button>
                        <button
                            onClick={() => scrollToSection(visaRef)}
                            className={`py-2 px-4 rounded-full text-left border ${activeTab === "visa"
                                    ? "bg-blue-900 text-white"
                                    : "bg-white text-gray-700"
                                }`}
                        >
                            🛂 Visa
                        </button>
                    </div>
                </div>
                <div className="flex-1 space-y-12 pr-2">
                    <div
                        id="documents"
                        ref={documentsRef}
                        className="p-6 border rounded-3xl shadow-sm scroll-mt-24"
                    >
                        <h3 className="text-xl font-semibold mb-4">
                            Documents required to study in the New Zealand
                        </h3>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                            <p className="text-black text-xl">The most common list of documents required when applying to study in New Zealand includes:</p>
                            <li>Completed Application Form</li>
                            <li>Passport</li>
                            <li>Academic Transcripts</li>
                            <li>English Language Proficiency</li>
                            <li>Letter(s) of Recommendation</li>
                            <li>Statement of Purpose (SOP) or Personal Statemen</li>
                            <li>CV/Resume</li>
                            <li>Portfolio (if applicable)</li>
                            <li>Financial Documentation</li>
                            <li>Health and Medical Insurance</li>
                        </ul>
                        <button className="mt-6 border border-blue-900 text-blue-900 px-4 py-2 rounded-md hover:bg-blue-50"
                        onClick={() => setShowModal(true)}>
                            Free Expert Consultation
                        </button>
                    </div>

                    <div
                        id="visa"
                        ref={visaRef}
                        className="p-6 border rounded-3xl shadow-sm scroll-mt-24"
                    >
                        <h3 className="text-xl font-semibold mb-4">
                            New Zealand Study Visa Process
                        </h3>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                            <p className="text-black "> To study in Canada you need to apply for visa ideally 3 months prior to the intake. Below are the documents required -</p>
                            <li>A candidate must have an unconditional Offer Letter</li>
                            <li>Financial proof for the next 12 months covering tuition fees and living expenses</li>
                            <li>All relevant academic documents along with resume</li>
                            <li>Medical insurance is mandatory</li>
                            <li>Police clearance certificate</li>
                        </ul>
                        <button className="mt-6 border border-blue-900 text-blue-900 px-4 py-2 rounded-md hover:bg-blue-50"
                        onClick={() => setShowModal(true)}>
                            Free Expert Consultation
                        </button>
                    </div>
                </div>
            </div>
            {showModal && <StudyAbroadModal onClose={() => setShowModal(false)} />}
        </div>
    );
}