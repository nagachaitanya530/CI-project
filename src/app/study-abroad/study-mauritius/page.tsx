'use client';
import React from 'react';
import CostOfStudying from '../../_components/study-abroad/study-mauritius/CostOfStudying';
import Navigation from '../../_components/navigation1';
import GetStartedBanner from '~/app/_components/study-abroad/study-mauritius/GetStartedBanner';
import MauritiusBanner from '~/app/_components/study-abroad/study-mauritius/MauritiusBanner';
import WhyStudySection from '~/app/_components/study-abroad/study-mauritius/WhyStudySection';
import UniversityList from '~/app/_components/study-abroad/study-mauritius/UniversityList';
import PopularCourses from '~/app/_components/study-abroad/study-mauritius/PopularCourses';
import StudyTabs from '~/app/_components/study-abroad/study-mauritius/StudyTabs';   
import ScholarshipSection from '~/app/_components/study-abroad/study-mauritius/ScholarshipSection';
import SuccessStories from '~/app/_components/study-abroad/study-mauritius/SuccessStories';
import Footer from '../../_components/footer1';
import FaqAccordion from '~/app/_components/study-abroad/study-mauritius/FaqAccordion';
import CareerProspects from '~/app/_components/study-abroad/study-mauritius/CareerProspects';
import FadeInOnScroll from './FadeInOnScroll';
import FAQ  from '~/app/_components/study-abroad/faq';

const faqs = [
  {
    question: "What are the documents required to study in Mauritius?",
    answer:
      "Documents required to study in Mauritius include the application form, proof of language proficiency, educational documents, passport, health insurance, financial documents, a statement of purpose or personal statement, letters of recommendation, and visa documents.",
  },
  {
    question: "What are the popular courses to pursue in Mauritius?",
    answer:
      "Popular courses include Business, Hospitality, Information Technology, and Engineering.",
  },
  {
    question:
      "What is the cost of acquiring a student visa in Mauritius and what is the processing time for the same?",
    answer:
      "The cost is approximately ₹2L, and the processing time is around 4 weeks.",
  },
  {
    question:
      "What are the types of scholarships in Mauritius that are available for international students?",
    answer:
      "Scholarships include government-funded, university merit-based, and third-party funded schemes.",
  },
  {
    question: "What is the cost of studying in Mauritius?",
    answer:
      "It ranges between 1.5L to 6L MUR/year depending on the course, plus living expenses.",
  },
];

export default function Page() {
return (
    <>
      <Navigation />
      <MauritiusBanner />

      <FadeInOnScroll><WhyStudySection /></FadeInOnScroll>
      <FadeInOnScroll><UniversityList /></FadeInOnScroll>
      <FadeInOnScroll><PopularCourses /></FadeInOnScroll>
      <FadeInOnScroll><CostOfStudying /></FadeInOnScroll>

      <FadeInOnScroll>
        <ScholarshipSection
          countryName="Mauritius"
          description="Mauritius offers a wide range of scholarships for international students. These programs aim to promote global education and cultural exchange."
          image="/scholar-img.webp" 
          scholarshipTypes={[
            "Government of Mauritius Scholarship",
            "Merit-Based Scholarships",
            "Need-Based Scholarships",
            "University-Specific Grants"
          ]}
        />
      </FadeInOnScroll>

      <FadeInOnScroll><CareerProspects /></FadeInOnScroll>
      <FadeInOnScroll><StudyTabs /></FadeInOnScroll>
      <FadeInOnScroll><SuccessStories /></FadeInOnScroll>
      <FadeInOnScroll><FAQ  faqs={faqs}/></FadeInOnScroll>

      <GetStartedBanner />
      <Footer />
    </>
  );
}
