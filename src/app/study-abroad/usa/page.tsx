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
import ContactFormSection from '~/app/_components/study-abroad/home/contact-form';
import NavigationSection from "~/app/_components/navigation1";
import FooterSection from "~/app/_components/footer1";
import FinalCTASection from "~/app/_components/usa/FinalCTASection";



export default function StudyInUSA() {
  return (
    <>
    <NavigationSection />
    <HeroBanner />
    <WhyStudyUSA />
    <ContactFormSection />
    <UniversityList />
    <PopularCoursesUSA />
    <CostOfStudyingUSA />
    <ScholarshipsUSA />
    <CareerProspectsUSA />
    <MoreAboutUsa />
    <RelatedArticlesUSA />
    <SuccessStories />
    <FAQs />
    <FinalCTASection />
    <FooterSection />
    </>
  );
}
