import React from "react";
import CareerProspectsUSA from "~/app/_components/usa/CareerProspectsUSA";
import CostOfStudyingUSA from "~/app/_components/usa/CostOfStudyingUSA";
import FAQs from "~/app/_components/usa/FAQs";
import HeroBanner from "~/app/_components/usa/HeroBanner";
import MoreAboutUsa from "~/app/_components/usa/MoreAboutUsa";
import PopularCoursesUSA from "~/app/_components/usa/PopularCoursesUSA";
import RelatedArticlesUSA from "~/app/_components/usa/RelatedArticlesUSA";
import ScholarshipsUSA from "~/app/_components/usa/ScholarshipsUSA";
import SuccessStories from "~/app/_components/usa/SuccessStories";
import UniversityList from "~/app/_components/usa/UniversityList";
import WhyStudyUSA from "~/app/_components/usa/WhyStudyUSA";
import NavigationSection from "~/app/_components/navigation1";
import FooterSection from "~/app/_components/footer1";
import FinalCTASection from "~/app/_components/usa/FinalCTASection";
import FAQ from "~/app/_components/study-abroad/faq";


const faqData = [
  "What are the top universities in the USA for international students?",
  "Can I get financial assistance to study in the USA?",
  "Should I apply only to the top ten universities?",
  "Do universities in USA accept only TOEFL or can a student also take IELTS?",
  "I have completed 15 years of education in India. Can I get admission to an MBA program directly in the USA?",
  "What are the top reasons to study in the USA as an international student?",
  "What are the eligibility requirements to study in the USA from India?",
  "How much does it cost to study in the USA for Indian students?",
  "What are the popular courses to study in the USA?",
  "What are the visa requirements for studying in the USA?",
  "Are scholarships available for international students in the USA?",
  "Can I work while studying in the USA as an international student?",
  "How do I choose the right university to study in the USA?",
];
export default function StudyInUSA() {
  return (
    <>
    <NavigationSection />
    <HeroBanner />
    <WhyStudyUSA />
    <UniversityList />
    <PopularCoursesUSA />
    <CostOfStudyingUSA />
    <ScholarshipsUSA />
    <CareerProspectsUSA />
    <MoreAboutUsa />
    <RelatedArticlesUSA />
    <SuccessStories />
    <FAQs/>
    <FinalCTASection />
    <FooterSection />
    </>
  );
}
