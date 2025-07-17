'use client';
import CostOfStudying from '../../_components/study-abroad/study-mauritius/CostOfStudying';
import Navigation from '../../_components/navigation1';
// import GetStartedBanner from '~/app/_components/study-abroad/study-mauritius/GetStartedBanner';
import MauritiusBanner from '~/app/_components/study-abroad/study-mauritius/MauritiusBanner';
import WhyStudySection from '~/app/_components/study-abroad/study-mauritius/WhyStudySection';
import ContactFormSection from '~/app/_components/study-abroad/home/contact-form';
import UniversityList from '~/app/_components/study-abroad/study-mauritius/UniversityList';
import PopularCourses from '~/app/_components/study-abroad/study-mauritius/PopularCourses';
import StudyTabs from '~/app/_components/study-abroad/study-mauritius/StudyTabs';
import ScholarshipSection from '~/app/_components/study-abroad/study-mauritius/ScholarshipSection';
// import SuccessStories from '~/app/_components/study-abroad/study-mauritius/SuccessStories';
import Footer from '../../_components/footer1';
import FaqAccordion from '~/app/_components/study-abroad/study-mauritius/FaqAccordion';
import CareerProspects from '~/app/_components/study-abroad/study-mauritius/CareerProspects';
import FadeInOnScroll from './FadeInOnScroll';
import FAQ from '~/app/_components/study-abroad/faq';
import YourJourney from "~/app/_components/study-abroad/your-journey";
import SuccessStories from "~/app/_components/Test-Preparations/All-Tests/SuccessStories";
import { Award } from "lucide-react";
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

const mauritiusUniversities = [
  {
    name: "University of Bristol",
    image: "/unniversityvisitcar1.jpeg",
    popularFor: "Mining & Medical Sciences",
    ranking: "19",
  },
  {
    name: "The University Of Edinburgh",
    image: "/unniversityvisitcar2.jpeg",
    popularFor: "Arts and Humanities",
    ranking: "42",
  },
  {
    name: "Johns Hopkins University",
    image: "/unniversityvisitcar3.jpeg",
    popularFor: "Engineering",
    ranking: "43",
  },
  {
    name: "The University of Melbourne",
    image: "/unniversityvisitcar4.jpeg",
    popularFor: "Business & Law",
    ranking: "195",
  },
];
const stories = [
  {
    text: "Edwise does not stop at admissions. Their ongoing support post-study helped me transition smoothly into my career. The best decision for my academic journey!",
    name: "Miral Shah",
    exam: "Bournemouth University, UK",
    profile: "/successstory5.avif",
  },
  {
    text: "It is one of the best consultancies. They are genuinely committed to assisting the students. Counselors are very approachable.",
    name: "Abhinay Pandit",
    exam: "New York Film Academy, US",
    profile: "/successstory6.avif",
  },
  {
    text: "It is one of the best consultancies. They are genuinely committed to assisting the students. Counselors are very approachable.",
    name: "Abhinay Pandit",
    exam: "New York Film Academy, US",
    profile: "/successstory7.avif",
  },
  {
    text: "It is one of the best consultancies. They are genuinely committed to assisting the students. Counselors are very approachable.",
    name: "Abhinay Pandit",
    exam: "New York Film Academy, US",
    profile: "/successstory8.avif",
  },
];

const mauritiusReasons = [
  {
    title: "Affordable Education",
    description:
      "Compared to other western nations, the universities in Mauritius offer lower tuition fees. Additionally, scholarships and financial aid programs significantly reduce the financial burden.",
    icon: Award,
  },
  {
    title: "Better Job Opportunities",
    description:
      "International students are permitted to work while studying in Mauritius and are eligible to work post-study if they meet the set criteria. This allows all the students to gain work experience.",
    icon: Award,
  },
  {
    title: "Easy Visa Process",
    description:
      "The application process and the visa process for studying in Mauritius are quite seamless for all international students.",
    icon: Award,
  },
  {
    title: "Internationally Recognised Qualification",
    description:
      "The programs offered by the universities in Mauritius are accredited and globally recognised. This means that the degree holds weightage worldwide.",
    icon: Award,
  },
  {
    title: "Culturally Diverse",
    description:
      "Mauritius is a melting pot of all cultures that provides students with a diverse environment and friendly people.",
    icon: Award,
  },
  {
    title: "Beautiful Surroundings",
    description:
      "With its tropical climate, beautiful beaches, and lush green vegetation, Mauritius is a beautiful nation to study in.",
    icon: Award,
  },
];

export default function Page() {
  return (
    <>
      <Navigation />
      <MauritiusBanner />
      <FadeInOnScroll><WhyStudySection country="Mauritius" reasons={mauritiusReasons} />;</FadeInOnScroll>
      <FadeInOnScroll><ContactFormSection /></FadeInOnScroll>
      <FadeInOnScroll><UniversityList universities={mauritiusUniversities} country="Mauritius" /></FadeInOnScroll>
      <FadeInOnScroll><PopularCourses /></FadeInOnScroll>
      <FadeInOnScroll><CostOfStudying /></FadeInOnScroll>
      <FadeInOnScroll>
<ScholarshipSection
  countryName="Mauritius"
  description="For Indian students studying in Mauritius, there are a lot of scholarship opportunities."
  image="/scholar1.avif"
  scholarshipContent={[
    "Government of Mauritius Scholarship",
    "Merit-Based Scholarships",
    "Need-Based Scholarships",
    "University-Specific Grants"
  ]}
/>

      </FadeInOnScroll>
      <FadeInOnScroll><CareerProspects /></FadeInOnScroll>
      <FadeInOnScroll><StudyTabs /></FadeInOnScroll>
      {/* <FadeInOnScroll><SuccessStories /></FadeInOnScroll>  //  */}

      <FadeInOnScroll> <SuccessStories testimonials={stories} /></FadeInOnScroll>
      <FadeInOnScroll><FAQ faqs={faqs} /></FadeInOnScroll>
      <YourJourney />
      <Footer />
    </>
  );
}
