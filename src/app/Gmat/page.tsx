'use client'
import Link from "next/link";
import { useEffect, useState } from "react";
import FooterSection from "~/app/_components/footer1";
import NavigationSection from "~/app/_components/navigation1";
import Herosection from "../_components/Gmat/Herosection";
import Overview from "../_components/Gmat/Overview";
import GmatTable from "../_components/Gmat/Pattern";
import Syllabus from "../_components/Gmat/Syllabus";
import Score from "../_components/Gmat/Score";
import Date from "../_components/Gmat/Date-Trining-Details";
import Faqs from "../_components/Gmat/Faqs";
import Sucess from "../_components/Gmat/Sucess";


function IELTSPreparation() {
    const sections = [
        { label: 'Overview', id: 'overview' },
        { label: 'Pattern', id: 'pattern' },
        { label: 'Syllabus', id: 'syllabus' },
        { label: 'Scores', id: 'score' },
        { label: 'Dates', id: 'dates' },
        { label: 'Training', id: 'training' },
        { label: 'Miscellaneous', id: 'fee' },
        { label: 'FAQ', id: 'faq' },
    ];
    const [activeSection, setActiveSection] = useState<string | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries.find(entry => entry.isIntersecting);
                if (visible) {
                    setActiveSection(visible.target.id);
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.5,
            }
        );

        sections.forEach(({ id }) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => {
            sections.forEach(({ id }) => {
                const element = document.getElementById(id);
                if (element) observer.unobserve(element);
            });
        };
    }, []);


    return (
        <>
            <NavigationSection />

            <Herosection />

            {/* NavBar  */}

            <section className="sticky top-16    border border-gray-400 bg-gray-300  rounded-3xl mx-4 my-6 md:mx-25 lg:mx-40 px-2 py-3 shadow-md overflow-hidden">
                <div className="flex justify-center overflow-x-auto whitespace-nowrap gap-2 sm:gap-3 px-2 scroll-smooth scrollbar-hide">
                    {sections.map(({ label, id }, idx) => (
                        <button
                            key={idx}
                            onClick={() =>
                                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
                            }
                            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-sm flex-shrink-0 transition duration-300 border ${activeSection === id
                                ? 'bg-gray-700 text-white border-gray-700'
                                : 'bg-white text-black-700 border-blue-50  hover:bg-blue-100'
                                }`}
                        >
                            {label}
                        </button>
                    ))}
                </div>
            </section>
            <Overview />

            <GmatTable />
            <Syllabus />
            <Score />
            <Date />
            <Faqs />
            <Sucess />
            <FooterSection />
        </>
    );
}

export default IELTSPreparation;