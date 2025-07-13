'use client'
import Link from "next/link";
import { useEffect, useState } from "react";
import FooterSection from "~/app/_components/footer1";
import NavigationSection from "~/app/_components/navigation1";
import FAQ from "~/app/_components/study-abroad/faq";
import CoachingFeatures from "~/app/_components/study-abroad/ietls-preparation/CoachingFeatures";
import Dates from "~/app/_components/study-abroad/ietls-preparation/DatesSection";
import FeeSection from "~/app/_components/study-abroad/ietls-preparation/FeeSection";
import FormatDetails from "~/app/_components/study-abroad/ietls-preparation/FormatDetails";
import HeroSection from "~/app/_components/study-abroad/ietls-preparation/HeroSection";
import OvervviewSection from "~/app/_components/study-abroad/ietls-preparation/OverviewSection";
import ScoringSection from "~/app/_components/study-abroad/ietls-preparation/ScoringSection";
import TestimonialsCarousel from "~/app/_components/study-abroad/ietls-preparation/TestimonialsCarousel";
import TrainingSection from "~/app/_components/study-abroad/ietls-preparation/TrainingSection";
import YourJourney from "~/app/_components/study-abroad/your-journey";

function IELTSPreparation() {


    const FrontendFAQ = [
        {
            question: "How much does it cost to study in Canada?",
            answer: "You would need approximately INR 22-26 lakhs for one year of study in Canada, covering tuition fees, accommodation, food, transportation, books, and personal expenses."
        },
        {
            question: "Can I study in Canada without IELTS?",
            answer: "No, you cannot study in Canada without taking an English language proficiency test. You can choose between IELTS or PTE for this purpose. As the top Canada education consultants in India, we provide coaching for both IELTS and PTE."
        },
        {
            question: "Is a medical test required for getting a student visa in Canada?",
            answer: "Yes, a medical examination is required as part of the visa application process for studying in Canada."
        },
        {
            question: "What is GIC?",
            answer: "A GIC, or Guaranteed Investment Certificate, is a mandatory investment required to study at the colleges in Canada for international students, serving as proof of funds for living expenses."
        },
        {
            question: "How much can I earn while working part time in Canada?",
            answer: "The hourly wage varies depending on the job and location, but is typically around C$12 to C$20 per hour."
        }
    ]


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
            <div className="mx-7 md:mx-10 lg:mx-25">
                <section className="text-cyan-700 my-10 text-lg">
                    <p>

                        <Link href={"/"}>Home</Link> &gt;&nbsp;
                        <Link href={"/"}>Test Preparation</Link> &gt;&nbsp;
                        <strong>IELTS </strong>
                    </p>
                </section>
            </div>
            <HeroSection />
            <section className="sticky top-16 z-10 bg-cyan-50 border border-cyan-200 rounded-3xl mx-4 my-6 md:mx-10 lg:mx-40 px-2 py-3 shadow-md overflow-hidden">
                <div className="flex justify-center overflow-x-auto whitespace-nowrap gap-2 sm:gap-3 px-2 scroll-smooth scrollbar-hide">
                    {sections.map(({ label, id }, idx) => (
                        <button
                            key={idx}
                            onClick={() =>
                                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
                            }
                            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-sm flex-shrink-0 transition duration-300 border ${activeSection === id
                                ? 'bg-cyan-700 text-white border-cyan-700'
                                : 'bg-white text-cyan-700 border-cyan-300 hover:bg-cyan-100'
                                }`}
                        >
                            {label}
                        </button>
                    ))}
                </div>
            </section>
            <div className="mx-7 md:mx-10 lg:mx-25">
                <OvervviewSection />
                <FormatDetails />
                <CoachingFeatures /> <br />
                <ScoringSection /> <br />
                <Dates />  <br />
                <TrainingSection /> <br />
                <FeeSection /> <br />
            </div>
            <section id="faq">
                <FAQ faqs={FrontendFAQ} />
            </section>
            <TestimonialsCarousel />
            <YourJourney />
            <FooterSection />
        </>
    );
}

export default IELTSPreparation;