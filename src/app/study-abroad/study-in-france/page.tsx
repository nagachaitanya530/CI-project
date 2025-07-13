"use client";

import React from "react";
import HeroSection from "~/app/_components/study-abroad/study-abroad-france/HeroSection";
import WhyStudy from "~/app/_components/study-abroad/study-abroad-france/WhyStudy";
import UniversityList from "~/app/_components/study-abroad/study-abroad-france/UniversityList";
import PopularCourses from "~/app/_components/study-abroad/study-abroad-france/PopularCourses";
import CostOfStudy from "~/app/_components/study-abroad/study-abroad-france/CostOfStudy";
import Scholarship from "~/app/_components/study-abroad/study-abroad-france/Scholarship";
import CarrerProspect from "~/app/_components/study-abroad/study-abroad-france/CarrerProspect";
import MoreAbout from "~/app/_components/study-abroad/study-abroad-france/MoreAbout";
import SuccessStory from "~/app/_components/study-abroad/study-abroad-france/SuccessStory";
import RelatedArticle from "~/app/_components/study-abroad/study-abroad-france/RelatedArticle";
import NavigationSection from "~/app/_components/navigation1";
import FooterSection from "~/app/_components/footer1";
import YourJourney from "~/app/_components/study-abroad/your-journey";
import FAQ from "~/app/_components/study-abroad/faq";


function Study_in_france() {
    const faqs = [
        {
            question: "Is the French language compulsory in France?",
            answer: "No, French universities are now using English as the language of instruction, especially in areas like management, engineering, political science, etc., to attract more international students. It is advisable to learn some French in order to compete with French students.",
        },
        {
            question: "Can I work in France as a student?",
            answer: "International students may work part-time if their schedule permits, as long as they are registered at an institution approved by the French social security system. Even first-year students coming to France for the first time have the right to work part-time, 20 hours per week.",
        },
        {
            question: "What are the English language proficiency tests required to study in France?",
            answer: "TOEFL, IELTS, or Cambridge English exams are some of the entrance tests that are widely accepted.",
        },
        {
            question: "What are the accommodation options?",
            answer: "The different accommodation options include university residences, private student residences, etc.",
        },
        {
            question: "Are there scholarships available?",
            answer: "Yes. Scholarship programmes have been set up to enable French institutions of higher education to attract the finest international students.",
        }
    ]

    return (
        <>
            <NavigationSection />
            <HeroSection />
            <WhyStudy />
            <UniversityList />
            <PopularCourses />
            <CostOfStudy />
            <Scholarship />
            <CarrerProspect />
            <MoreAbout />
            <RelatedArticle />
            <SuccessStory />
            <FAQ faqs={faqs} />
            <YourJourney />
            <FooterSection />
        </>
    );
}

export default Study_in_france;
