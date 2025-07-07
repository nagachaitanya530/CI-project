'use client';

import HeroSectiondubaipage from "~/app/_components/dubai/Hero";
import StatsCard from "~/app/_components/dubai/next";
import WhyStudyInDubai from "~/app/_components/dubai/left";
import Navigation from "~/app/_components/navigation1";
import ContactFormSection from '~/app/_components/study-abroad/home/contact-form';
import UniversitiesListSection from"~/app/_components/dubai/cadrs";
import PopularCoursesSection from "~/app/_components/dubai/cardsdubai";
import CostOfStudying from "~/app/_components/dubai/costofstudying";
import ScholarshipsSection from "~/app/_components/dubai/ScholarshipsSection";
import CareerProspectsSection from "~/app/_components/dubai/CareerProspectsSection";
import MoreAboutDubai from "~/app/_components/dubai/Document";
import SuccessStories from "~/app/_components/dubai/SuccessStories";
import FAQ from "~/app/_components/study-abroad/faq";
import YourJourney from "~/app/_components/study-abroad/your-journey";
import FooterSection from "~/app/_components/footer1";



const IndiaFAQs = [
  {
    question: "Is it possible to do part-time jobs on a student visa in Dubai?",
    answer: "International students are allowed to work part-time for 20 hours per week in free zone areas. They are required to get permission from universities for the same."
  },
  {
    question: "What are the different job opportunities in Dubai?",
    answer: "Over the past few decades, Dubai has become a land of opportunities. The country is going through a phase of immense growth, expansion, and development; it needs people from different backgrounds and countries with the right experience and education, and that too in large numbers."
  },
  {
    question: "Is IELTS mandatory for studying in Dubai?",
    answer: "Yes, to study in UAE for Indian students, IELTS is mandatory. Universities generally prefer IELTS for assessing English language proficiency."
  },
  {
    question: "What is the cost of studying in Dubai?",
    answer: "To study in UAE for Indian students the costs are: Foundation: AED 44,250 to AED 109,145 (INR 10L to 24.7L); Bachelors: AED 37,000 to AED 109,145 (INR 16.2L to 22.6L); Masters: AED 48,000 to AED 134,671 (INR 10.8L to 30.4L)."
  },
  {
    question: "What are the best Master’s degree programs in Dubai for Indian students?",
    answer: "Universities in Dubai provide excellent options for Master’s programs, such as: MBA, engineering, accounting and finance, tourism and hospitality, architecture, aviation, and design studies."
  },
  
];

export default function studyabroad() {
    return (
        <>
      <Navigation/>
      <HeroSectiondubaipage/>
      <StatsCard/>
      <WhyStudyInDubai/>
      <ContactFormSection />
      <UniversitiesListSection/>
      <PopularCoursesSection/>
      <CostOfStudying/>
      <ScholarshipsSection/>
      <CareerProspectsSection/>
      <MoreAboutDubai/>
      <SuccessStories/>

      <FAQ faqs={IndiaFAQs} title="FAQs" />
      <YourJourney />
      <FooterSection/>
      <FooterSection/>
      </>

       <FAQ faqs={IndiaFAQs} title="FAQs" />
       
       <YourJourney />
       
      
      

<FooterSection/>


        </>


    )

}