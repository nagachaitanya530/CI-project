"use client";
import * as React from "react";
import Navigation from "../../_components/navigation1";
import DynamicBanner from "~/app/_components/Test-Preparations/All-Tests/DynamicBanner";
import StickyScrollSection from "~/app/_components/Test-Preparations/All-Tests/StickyScrollSection";
import TestCoursesGrid from "~/app/_components/Test-Preparations/All-Tests/TestCoursesGrid";
import Faq from "~/app/_components/study-abroad/faq";
import Footer from "~/app/_components/footer1";
import GetStartedBanner from "~/app/_components/study-abroad/study-mauritius/GetStartedBanner";
import type { Testimonial } from "~/app/_components/Test-Preparations/All-Tests/SuccessStories";
import SuccessStories from "~/app/_components/Test-Preparations/All-Tests/SuccessStories";
import FadeInOnScroll from '~/app/study-abroad/study-mauritius/FadeInOnScroll';  
import YourJourney from "~/app/_components/study-abroad/your-journey";
export default function Page() {


const testPrepTabs = [
  {
    id: "guidance",
    number: "01",
    title: "Expert Guidance",
    description:
      "Receive personalized guidance and exceptional training by our renowned faculty to ensure you achieve the best scores possible for all study abroad tests.",
  },
  {
    id: "materials",
    number: "02",
    title: "Exclusive Study Materials",
    description:
      "Access meticulously curated study materials, designed to cover every aspect of the test for admission in international universities.",
  },
  {
    id: "tracking",
    number: "03",
    title: "Performance Tracking",
    description:
      "Track and analyse your progress with numerous mock tests, extra tutorials and make up classes to attain a good score.",
  },
  {
    id: "strategies",
    number: "04",
    title: "Personalized Strategies",
    description:
      "Our study abroad coaching for these tests uses a unique mentoring model with a personal trainer ensuring individualized attention through a flexible approach using innovative and new age teaching methodology.",
  },
];


const testCourses = [
  {
    image: "/alltestcard1.avif",
    title: "(TOEFL) Test of English as a Foreign Language",
    description:
      "TOEFL is a standardized English proficiency test that assesses English Language skills in the areas of listening, reading, writing and speaking.",
    link: "#",
  },
  {
    image: "/alltestcard2.webp",
    title: "(IELTS) International English Language Testing System",
    description:
      "IELTS is a reputable and trustworthy English test to study abroad that assists candidates in proving their English language competency and advancing their academic and career objectives.",
    link: "#",
  },
  {
    image: "/alltestcard3.png",
    title: "(PTE) Pearson Test for English",
    description:
      "PTE Academic: Computer-based test for non-native English speakers to prove academic proficiency for admission in to international universities.",
    link: "#",
  },
  {
    image: "/alltestcard4.png",
    title: "Duolingo",
    description:
      "Duolingo English Test is a computer based English proficiency test which is administered using computer adaptive technology.",
    link: "#",
  },


];


const faqs = [
  {
    question: "What are the most common exams required for studying abroad?",
    answer: "The most common exams are GRE, TOEFL, IELTS, SAT, GMAT, and ACT, and we provide test prep courses for all of them.",
  },
  {
    question: "How do I prepare for international entrance exams like GRE, TOEFL, or IELTS?",
    answer: "Aptitude test preparation can be done using official study materials, taking practice tests, attending test preparation courses, and focusing on weaker areas.",
  },
  {
    question: "What are the eligibility requirements for exams to study abroad?",
    answer: "Eligibility varies by exam. Generally, you must have completed or be in the final year of your current academic qualification (10+2 for undergrad, a bachelor's degree for postgrad). There is no strict age limit for most exams.",
  },
  {
    question: "How do I register for exams like IELTS or GRE for international study?",
    answer: "You can register online via the official websites: for IELTS via British Council/IDP, and for GRE via ETS. Choose your preferred test date and location, pay the fee, and receive confirmation.",
  },
  {
    question: "What is the best time to take exams for studying abroad?",
    answer: "It is best to take exams 6–12 months before your intended intake. For example, for a Fall intake (August–September), appear for exams between August and December of the previous year.",
  },
  {
    question: "Are there any scholarships available based on the results of the exams for Indian students to study abroad?",
    answer: "Yes, many universities and governments offer merit-based scholarships that consider scores from exams like GRE, GMAT, or IELTS. Always check specific scholarship criteria on the university’s official site.",
  },
  {
    question: "How do exam scores impact the admission process for universities abroad?",
    answer: "Exam scores play a significant role in determining your academic readiness and language proficiency. High scores can improve your chances of admission and scholarships, especially in competitive programs.",
  },
  {
    question: "Can I take exams for studying abroad remotely or online?",
    answer: "Yes, exams like the TOEFL iBT Home Edition, Duolingo English Test, and GRE at Home allow students to take tests online from home under monitored conditions.",
  },
  {
    question: "How do I manage time effectively while preparing for exams to study abroad?",
    answer: "Create a study schedule, focus on high-weight topics, practice with timed tests, use flashcards for vocabulary, and take regular breaks to avoid burnout.",
  },
  {
    question: "What are the differences between exams required for undergraduate vs. graduate studies abroad?",
    answer: "Undergraduate exams usually include SAT, ACT, IELTS, or TOEFL. Graduate exams include GRE, GMAT, IELTS, or TOEFL. The focus and difficulty differ—graduate exams assess advanced analytical and reasoning skills.",
  },
];


const stories: Testimonial[] = [
  {
    text: "TOEFL sessions were fun with the faculty engaging all the students with simultaneous exercises. The assessments were all digital and with time constraints.",
    name: "THANESHVAR",
    exam: "TOEFL",
    profile: "/alltesttestimonial5.avif",
  },
  {
    text: "I have taken IELTS test &  Glad to say that the teachers here are very supportive, attentive and helpful.All thanks to my teacher that I scored a total of 7 bands.",
    name: "Jaspreet Kaur Chauhan",
    exam: "IELTS",
    profile: "/alltesttestimonial6.avif",
  },
    {
    text: "I am very much satisfied with the  methods you teach and well planned classes. Each and every part of the sessions were always interesting, worksheets given for practices too.",
    name: "Varuneswar K V",
    exam: "PTE",
    profile: "/alltesttestimonial7.avif", 
  },
    {
    text: "Thank you for the exceptional IELTS coaching at Edwise International. I felt well-prepared and was ultimately admitted to my desired university.",
    name: "Pragatheesh",
    exam: "IELTS",
    profile: "/alltesttestimonial8.avif",
  },
];
  return (
    <>
      <Navigation />
      <DynamicBanner
        titleTop="Edwise Your"
        titleBold="One Stop Solution"
        titleBottom="For All Standardized"
        highlightWord="Tests"
        buttonText="Free Expert Consultation"
        imageUrl="/alltesthero1.jpeg"
        imageAlt="Test Preparation"
      />

      <FadeInOnScroll>
          <StickyScrollSection
      heading="Unlock the unparalleled benefits of"
      subheading="Our test preparation coaching is comprehensive and provides complete coaching for study abroad tests like TOEFL, PTE, IELTS, GMAT, GRE, ACT, SAT etc."
      imageUrl="/allyestaside.jpg"
      imageAlt="Test Preparation Student"
      tabs={testPrepTabs}
    />
    </FadeInOnScroll>
     <FadeInOnScroll>
        <TestCoursesGrid
      heading="Explore Test Preparation Courses with Edwise"
      subheading="Edwise offers comprehensive, economical and rigorous test prep training for all the standardized tests based on adaptive learning with strong focus on concepts and special test taking strategies."
      courses={testCourses}
    /></FadeInOnScroll>
    <FadeInOnScroll><Faq title="Frequently Asked Questions" faqs={faqs} /></FadeInOnScroll>
     <FadeInOnScroll> <SuccessStories testimonials={stories} /></FadeInOnScroll>
    <YourJourney/>
        <Footer />
    </>
  );
}
