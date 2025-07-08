'use client'
import GreOverview from "../_components/GRE-Preparation/GREOverview"
import FooterSection from '~/app/_components/footer1';
import Navigation from '~/app/_components/navigation1';
import YourJourney from "../_components/study-abroad/your-journey";
import GrePattern from "../_components/GRE-Preparation/GREPattern";
import GreSyllabus from "../_components/GRE-Preparation/GRESyllabus";
import GreDating from "../_components/GRE-Preparation/GREDating";
import Herosection from "../_components/GRE-Preparation/Herosection";
import SuccessStory from "../_components/GRE-Preparation/SuccessStory";
import TestimonialsCarousel from "../_components/GRE-Preparation/SuccessStory";
import { useEffect, useRef, useState } from "react";
import FAQ from "../_components/study-abroad/faq";

const IndiaFAQs = [
    {
        question: "Which MBA programs accept GRE scores?",
        answer: "Many Business schools worldwide accept GRE scores for their MBA, specialized master's and other doctoral business programs, including many top-ranked programs.",
    },
    {
        question: "How do I register for the GRE?",
        answer: "Edwise will assist for GRE Exam registration."
    },
    {
        question: "How to prepare for GRE exam?",
        answer: "At the GRE test prep classes conducted by Edwise you get expert-led coaching, comprehensive study materials, mock tests and more."
    },
    {
        question: "What if I need to change the date or location of my test and whats is the test refund policy for GRE??",
        answer: "You must change or cancel your test registration no later than four days before the test date or your test fee will be forfeited. If you want to cancel your GRE Exam registration before the 4-day advance deadline, you will receive a refund of half the original test fee you paid.If you change test date prior to 4 days then the rescheduling fees is ₹ 5000."
    },
    {
        question: "What are the part time work opportunities for students and how much can they earn?",
        answer: "Students are allowed to work part-time for 20 hours per week. The wages range from NZ$18-NZ$22 per hour. Students can choose to work in restaurants, farms, malls and as marketing executives.",
    },
    {
        question: "What is the Score reporting process and score reporting cost for GRE?",
        answer: "Free score reporting to 4 universities named on the day of the examination, after that ₹ 2900 per university."

    },
    {
        question: "Can the score be cancelled after the exam of GRE if not sure?",
        answer: "Candidates can cancel the scores before they are officially released."

    },
    {
        question: "How many hours of coaching is given for the GRE prep course?",
        answer: "The GRE classes provided by Edwise consists of 100 hours of comprehensive training."

    }

];
function GRE() {
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
            <Navigation />
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
            {/* <ScrollableTabs/> */}
            <GreOverview />
            <GrePattern />
            <GreSyllabus />
            <GreDating />
            <FAQ faqs={IndiaFAQs} title="FAQs" />
            <TestimonialsCarousel />
            <YourJourney />
            <FooterSection />
        </>

    )

}

export default GRE