'use client';
import React from "react";
import Navigation1 from '../../_components/navigation1';
import IrelandBanner from '../../_components/study-abroad/study-ireland/IrelandBanner';
import WhyStudySection from "~/app/_components/study-abroad/study-mauritius/WhyStudySection";
import FadeInOnScroll from "../study-mauritius/FadeInOnScroll";
import UniversityList from "~/app/_components/study-abroad/study-mauritius/UniversityList";
import PopularCourses from "~/app/_components/study-abroad/study-ireland/PopularCourses";
import CostOfStudying from "~/app/_components/study-abroad/study-ireland/CostOfStudy";
import ScholarshipSection from '~/app/_components/study-abroad/study-mauritius/ScholarshipSection';
import CareerProspects from "~/app/_components/study-abroad/study-ireland/CareerProspects";
import StudyTabs from "~/app/_components/study-abroad/study-ireland/StudyTabs";
import { Award } from "lucide-react";
import ContactFormSection from '~/app/_components/study-abroad/home/contact-form';
import FAQ from '~/app/_components/study-abroad/faq';
import SuccessStories from "~/app/_components/Test-Preparations/All-Tests/SuccessStories";
import YourJourney from "~/app/_components/study-abroad/your-journey";
import Footer from '../../_components/footer1';
import RelatedArticles from '../../_components/study-abroad/study-ireland/RelatedArticles';
const irelandReasons = [
  {
    title: "Internationally recognised qualifications",
    description:
      "Universities in Ireland are recognized globally, thereby enhancing career prospects both domestically and internationally. Employers value Ireland's rigorous education system, making degree holders of Irish qualifications more competitive in the job market.",
    icon: Award,
  },
  {
    title: "Post-study work visa for up to 2 years",
    description:
      "In Ireland, post-study work visas are available for international students for a duration of up to two years upon completion of their studies. The post-study work visa allows you to explore various career opportunities.",
    icon: Award,
  },
  {
    title: "1 year master’s degree",
    description:
      "Irish universities offer 1-year Master’s degree programs that are widely available. This offers an accelerated path for individuals who wish to seek further education.",
    icon: Award,
  },
  {
    title: "Work part-time - 20 hours per week",
    description:
      "Ireland allows its students to gain work experience by working part time for 20 hours per week. This enhances your resume thereby increasing the scope of employment upon graduating.",
    icon: Award,
  },
  {
    title: "Diverse Range of Programs",
    description:
      "Studying in Ireland offers students a diverse range of academic programs, from Arts and Humanities to Science, Engineering, Business, and Technology. Pursuing a Master’s in Ireland gives the students ample choices to pursue their desired fields of study.",
    icon: Award,
  },
  {
    title: "Excellent wages : €8-9 per hour",
    description:
      "Good wages in Ireland attract students by offering opportunities for gaining work experience related to their field of study. For international students, these wages help offset study abroad costs, making Ireland a more appealing option.",
    icon: Award,
  },
];

const irelandUniversities = [
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

const faqs = [
  {
    question: "How much does it cost Indian students to study in Ireland?",
    answer: "The cost of studying varies depending on the course and university that is chosen by the student. To view the complete breakdown of the cost of studying in Ireland, check out the cost section above.",
  },
  {
    question: "Do I need the IELTS to study in Ireland?",
    answer: "Yes, if you are planning to study in Ireland, you typically need to demonstrate proficiency in the English language. Some institutions may accept other English proficiency tests such as TOEFL, PTE, Duolingo and Cambridge English exams.",
  },
  {
    question: "What are the requirements to study in Ireland?",
    answer: "To secure admission to universities in Ireland, students are required to furnish proof of high school diploma (for undergraduate studies) or bachelor's degree (for postgraduate studies), certificate for English language proficiency (typically IELTS), letters of recommendation, etc. Additionally, for visa the student may need to provide proof of finances, health insurance certificate etc.",
  },
  {
    question: "How is Ireland for Indian students?",
    answer: "Ireland is great country for studying abroad for Indian students. The country offers high-quality education with several globally recognized universities and colleges. The cost of living is relatively moderate compared to other European countries. Ireland also has a growing Indian community, making it a popular choice for Indian students.",
  },
  {
    question: "What are the top universities in Ireland for international students?",
    answer: "The top universities in Ireland include Trinity College Dublin, University College Dublin, University College Cork, etc. As India’s leading Ireland education consultants, we can guide you to select the perfect university and the best courses to study in Ireland.",
  },
];
const articles = [
  "Top 5 Universities and Colleges in Ireland",
  "Part-Time Work Options for International Students in Ireland",
  "Master's in Public Health in Ireland",
  "Master's in Engineering in Ireland",
  "Social Science Courses in Ireland",
  "Study Science Courses in Ireland",
  "Master's in Information Technology in Ireland",
  "1 Year MBA in Ireland",
  "Student-Friendly Cities In Ireland",
  "5 Reasons to Study in Ireland",
  "Higher Education In Ireland",
  "8 Facts About Study In Ireland",
  "Computer Science in Ireland",
  "Best Cities in Ireland for Studying",
  "Reasons to Study in Ireland Over Other Countries",
  "Bachelor's Programs in Ireland",
];
export default function Page() {
  return (
<>
    <Navigation1 />
    <IrelandBanner />
<FadeInOnScroll><WhyStudySection country="Ireland" reasons={irelandReasons} /></FadeInOnScroll>     <FadeInOnScroll><ContactFormSection /></FadeInOnScroll>
     <UniversityList />
    <FadeInOnScroll><PopularCourses /></FadeInOnScroll>
    <FadeInOnScroll><CostOfStudying /></FadeInOnScroll>
          <FadeInOnScroll>
    <ScholarshipSection
  countryName="Ireland"
  description="The cost of studying in Ireland for international students depends on several factors, including the institution, program of study, location, and available funding opportunities. Additionally, living expenses such as rent, utilities, and recreational activities play a significant role in the overall cost."
  image="/scholar1.avif"
  scholarshipTypes={[
    "Government of Ireland International Education Scholarship",
    "Irish Research Council Scholarships",
    "University-specific Scholarships (e.g. Trinity College Dublin, UCD)",
    "Merit-Based Scholarships",
    "Need-Based Grants"
  ]}
/>

    
          </FadeInOnScroll>
    <FadeInOnScroll><CareerProspects /></FadeInOnScroll>
    <FadeInOnScroll>   <StudyTabs/> </FadeInOnScroll>
        <FadeInOnScroll> <RelatedArticles headingCountry="Ireland" articles={articles} /></FadeInOnScroll>
          <FadeInOnScroll> <SuccessStories testimonials={stories} /></FadeInOnScroll>
    <FadeInOnScroll><FAQ faqs={faqs} /></FadeInOnScroll>
    <FadeInOnScroll><YourJourney /></FadeInOnScroll>


     <Footer />

</>
  )
}