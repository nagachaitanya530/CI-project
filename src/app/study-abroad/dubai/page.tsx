"use client";

import { useState } from "react";

import TOC from "~/app/_components/dubai/TOC";
import Hero from "~/app/_components/dubai/Hero";
import ConsultationForm from "~/app/_components/dubai/Consultation form";
import StatsCard from "~/app/_components/dubai/next";
import WhyStudyInDubai from "~/app/_components/dubai/left";
import Navigation from "~/app/_components/navigation1";
import ContactFormSection from '~/app/_components/study-abroad/home/contact-form';
import UniversitiesListSection from "~/app/_components/dubai/cadrs";
import PopularCoursesSection from "~/app/_components/dubai/cardsdubai";
import CostOfStudying from "~/app/_components/dubai/costofstudying";
import ScholarshipsSection from "~/app/_components/dubai/ScholarshipsSection";
import CareerProspectsSection from "~/app/_components/dubai/CareerProspectsSection";
import SuccessStories from "~/app/_components/dubai/SuccessStories";
import FAQ from "~/app/_components/study-abroad/faq";
import YourJourney from "~/app/_components/study-abroad/your-journey";
import FooterSection from "~/app/_components/footer1";

// FAQs
const IndiaFAQs = [
  {
    question: "Is it possible to do part-time jobs on a student visa in Dubai?",
    answer:
      "International students are allowed to work part-time for 20 hours per week in free zone areas. They are required to get permission from universities for the same.",
  },
  {
    question: "What are the different job opportunities in Dubai?",
    answer:
      "Dubai offers jobs in tech, healthcare, hospitality, business, and more due to fast-paced development.",
  },
  {
    question: "Is IELTS mandatory for studying in Dubai?",
    answer:
      "Yes. Most Dubai universities require IELTS or equivalent English proficiency test scores.",
  },
  {
    question: "What is the cost of studying in Dubai?",
    answer:
      "Foundation: AED 44,250 to 109,145; Bachelors: AED 37,000 to 109,145; Masters: AED 48,000 to 134,671.",
  },
  {
    question: "What are the best Master’s degree programs in Dubai for Indian students?",
    answer:
      "Popular choices include MBA, engineering, architecture, aviation, finance, and hospitality.",
  },
];

// Documents
const doc_items = [
  {
    heading: "Documents required to study in Dubai",
    description: (
      <ul className="list-disc p-5">
        <li>Valid Passport</li>
        <li>Passport-sized photographs</li>
        <li>Letter of acceptance from a Dubai university</li>
        <li>Academic transcripts and certificates</li>
        <li>IELTS/TOEFL scores</li>
        <li>Proof of funds</li>
        <li>Student visa application form</li>
        <li>Medical certificate</li>
      </ul>
    ),
  },
];

// Visa
const visa_items = [
  {
    heading: "Dubai Study Visa Process",
    description: (
      <ul className="list-disc p-5">
        <li>Secure admission from a recognized institution in Dubai</li>
        <li>Submit visa application with documents</li>
        <li>Complete medical tests</li>
        <li>Show accommodation and financial proof</li>
        <li>Wait for approval</li>
        <li>Fly to Dubai and register at university</li>
      </ul>
    ),
  },
];

// Component for Docs & Visa
function MoreAboutDubai({ onFreeConsultClick }: { onFreeConsultClick: () => void }) {
  return (
    <>
      <h1 className="text-3xl lg:text-5xl text-center my-10">
        More About <span className="font-semibold underline decoration-red-600 underline-offset-4">Dubai</span>
      </h1>

      <div className="flex flex-col md:flex-row lg:justify-evenly lg:mx-15">
        <div className="lg:m-10 flex flex-col ">
          <TOC />
        </div>

        <section>
          {/* Documents Section */}
          <div id="document" className="m-4 md:m-10 scroll-m-20">
            {doc_items.map((item, idx) => (
              <div key={idx} className="border-2 p-5 md:p-10 rounded-4xl">
                <h2 className="text-2xl font-semibold mb-3">{item.heading}</h2>
                {item.description}
                <button
                  onClick={() => {
                    console.log("Document Button Clicked");
                    onFreeConsultClick();
                  }}
                  className="mt-6 px-6 py-3 bg-[#183D8C] hover:bg-[#102b6a] text-white font-semibold rounded-xl shadow-md"
                >
                  Free Expert Consultation
                </button>
              </div>
            ))}
          </div>

          {/* Visa Section */}
          <div id="visa" className="m-4 md:m-10">
            {visa_items.map((item, idx) => (
              <div key={idx} className="border-2 p-5 md:p-10 rounded-4xl">
                <h2 className="text-2xl font-semibold mb-3">{item.heading}</h2>
                {item.description}
                <button
                  onClick={() => {
                    console.log("Visa Button Clicked");
                    onFreeConsultClick();
                  }}
                  className="mt-6 px-6 py-3 bg-[#183D8C] hover:bg-[#102b6a] text-white font-semibold rounded-xl shadow-md"
                >
                  Free Expert Consultation
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

// Main Page
export default function StudyAbroadDubaiPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navigation />
      <Hero onFreeConsultClick={() => setShowModal(true)} />
      <ConsultationForm show={showModal} onClose={() => setShowModal(false)} />
      <StatsCard />
      <WhyStudyInDubai />
      <ContactFormSection />
      <UniversitiesListSection />
      <PopularCoursesSection />
      <CostOfStudying />
      <ScholarshipsSection />
      <CareerProspectsSection />
      <MoreAboutDubai onFreeConsultClick={() => setShowModal(true)} />
      <SuccessStories />
      <FAQ faqs={IndiaFAQs} title="FAQs" />
      <YourJourney />
      <FooterSection />
    </>
  );
}
