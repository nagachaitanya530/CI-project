'use client'
import GreOverview from "../_components/GRE-Preparation/GREOverview"
import FooterSection from '~/app/_components/footer1';
import Navigation from '~/app/_components/navigation1';
import YourJourney from "../_components/study-abroad/your-journey";
import FAQS from "../_components/GRE-Preparation/FAQS";
import GrePattern from "../_components/GRE-Preparation/GREPattern";
import GreSyllabus from "../_components/GRE-Preparation/GRESyllabus";
import GreDating from "../_components/GRE-Preparation/GREDating";
import Herosection from "../_components/GRE-Preparation/Herosection";
import SuccessStory from "../_components/GRE-Preparation/SuccessStory";
import TestimonialsCarousel from "../_components/GRE-Preparation/SuccessStory";
import { useEffect, useRef, useState } from "react";





function GRE(){
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
    return(

        <>

        <Navigation/>
        <Herosection/>
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
        <GreOverview/>
         <GrePattern/>
        <GreSyllabus/>
        <GreDating/> 
        
        <FAQS/>
        <TestimonialsCarousel/>
        <YourJourney/>
        <FooterSection/>
        





</>

    )

}

export default GRE