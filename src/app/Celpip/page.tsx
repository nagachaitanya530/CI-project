'use client';
import FAQ from "../_components/study-abroad/faq";
import NavigationSection from "../_components/navigation1";
import SuccessStories from "../_components/celpip/SuccessStories";
import YourJourney from "../_components/study-abroad/your-journey";
import FooterSection from "../_components/footer1";
import ConsultationForm from "../_components/celpip/ConsultationForm";
import { useState, useEffect } from "react";
import Miscellaneous from "../_components/celpip/Miscellaneous";
import Training from "../_components/celpip/Training";
import Date from "../_components/celpip/Date";
import Scoring from "../_components/celpip/Scoring";
import Syllabus from "../_components/celpip/Syllabus";
import Pattern from "../_components/celpip/Pattern";
import Overview from "../_components/celpip/Overview";
import HERO from "../_components/celpip/Hero";
import ScrollableTabs from "../_components/celpip/ScollableTabs";

function Celpip() {

    const FrontendFAQ = [
        {
            question: "What is the Difference between CAEL and CELPIP?",
            answer: "Canadian English Language Proficiency Index Program – General (CELPIP-General) for immigration and the Canadian Academic English Language Test – Computer Edition (CAEL CE) for study . Both are online exams and English proficiency tests.",
        },
        {
            question: "What modules will be taught as part of the CELPIP exam preparation?",
            answer: "Edwise’s CELPIP classes will instruct the students on all four sections namely Reading, Listening, Speaking, Writing.",
        },
        {
            question: "How many mock tests does Edwise provide?",
            answer: "3 full length mock tests are included in coaching at Edwise.",
        },
        {
            question: "How many hours of coaching is given for CAEL?",
            answer: "Edwise's CELPIP online classes includes 30 hours of training.",
        },
        {
            question: "Can I take the CELPIP test in India?",
            answer: "Yes, CELPIP test is available across Chandigardh, Gurgaon, New Delhi, Mumbai, Hyderabad, Banglore and Chennai.",
        },
        {
            question: "What is the CELPIP exam fees in India?",
            answer: "The CELPIP fees will be C$280 plus taxes.",
        },
        {
            question: "How can we get the venue details for the CAEL Examination?",
            answer: "CELPIP is online exam conducted by PARAGON. So the venue details are available online while registering students can opt out the preferred testing centre. CELPIP is available across Chandigardh, Gurgaon, New Delhi, Mumbai, Hyderabad, Banglore and Chennai.",
        },
        {
            question: "Does Edwise assist for registration and payments for the exams?",
            answer: "For CELPIP we are authorised Partner for PARAGON. One can do registration at Edwise by paying cash/ or via debit/credit card.",
        },
        {
            question: "How many times can I take CELPIP English Test?",
            answer: "You may register for no more than one Test Session within four (4) calendar days",
        },
        {
            question: "In how many days we can receive the results and scores for CELPIP?",
            answer: "Test takers can access their CELPIP Test scores online through their CELPIP Account in 4-5 calendar days after their test date.",
        },
        {
            question: "What is the cost of score reporting for CELPIP ?",
            answer: "Can download a PDF copy of your CELPIP Official Score Report from your CELPIP account to submit your scores to an organization (i.e. Immigration, Refugees, and Citizenship Canada), via post , or can order a hardcopy Official Score Reports for a fee of $20.00 CAD each.",
        },
        {
            question: "What is the exam registration fee for CELPIP?",
            answer: "For CELPIP, it is Rs 10845",
        },
        {
            question: "What is the exam registration fee for CELPIP?",
            answer: "Basic English Grammar will not be included during the training.",
        }
    ]
    const [isOpen, setIsOpen] = useState(false);

    return (

        <>
            <NavigationSection />
            {isOpen && <ConsultationForm show={isOpen} onClose={() => setIsOpen(false)} />}
            <HERO />
            <ScrollableTabs />
            <Overview />
            <Pattern />
            <Syllabus />
            <Scoring />
            <Date />
            <Training />
            <Miscellaneous />
            {/* FAQ */}
            <section id="faq">
                <FAQ faqs={FrontendFAQ} />
            </section>
            <SuccessStories />
            <YourJourney />
            <FooterSection />

        </>

    )
};
export default Celpip;