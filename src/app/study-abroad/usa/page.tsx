import React from "react";
import CareerProspectsUSA from "~/app/_components/usa/CareerProspectsUSA";
import CostOfStudyingUSA from "~/app/_components/usa/CostOfStudyingUSA";
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
import FAQ from "~/app/_components/study-abroad/faq";
import YourJourney from "~/app/_components/study-abroad/your-journey";


export const faqData = [
  {
    question: "What are the top universities in the USA for international students?",
    answer: "Some of the top universities include Harvard University, MIT, Stanford University, and the University of California system, all of which welcome thousands of international students every year.",
  },
  {
    question: "Can I get financial assistance to study in the USA?",
    answer: "Yes, many universities offer scholarships, assistantships, and other forms of financial aid for international students. You can also apply for external scholarships and education loans.",
  },
  {
    question: "Should I apply only to the top ten universities?",
    answer: "Not necessarily. The USA has hundreds of excellent universities. It’s best to choose a university that matches your academic goals, budget, and preferred location.",
  },
  {
    question: "Do universities in the USA accept only TOEFL or can I take IELTS too?",
    answer: "Most universities accept both TOEFL and IELTS scores for English proficiency. Check your chosen university’s specific requirements to confirm.",
  },
  {
    question: "I have completed 15 years of education in India. Can I get admission to an MBA program in the USA?",
    answer: "Many US MBA programs prefer 16 years of education, but some accept 15 years with strong academic performance and relevant work experience.",
  },
  {
    question: "What are the top reasons to study in the USA as an international student?",
    answer: "The USA offers world-class education, cutting-edge research opportunities, diverse programs, cultural exposure, and a wide range of career pathways.",
  },
  {
    question: "What are the eligibility requirements to study in the USA from India?",
    answer: "Requirements include academic transcripts, English proficiency test scores, entrance exams like SAT/GMAT/GRE (if required), a valid passport, and financial proof.",
  },
  {
    question: "How much does it cost to study in the USA for Indian students?",
    answer: "Costs vary by university and program, but tuition can range from $20,000–$50,000 per year. Living expenses, health insurance, and other costs should also be considered.",
  },
  {
    question: "What are the popular courses to study in the USA?",
    answer: "Popular courses include Business & Management, STEM fields (Science, Technology, Engineering, and Mathematics), Computer Science, Medicine, and Social Sciences.",
  },
  {
    question: "What are the visa requirements for studying in the USA?",
    answer: "You’ll typically need an F-1 student visa, an I-20 form issued by your university, proof of financial support, and valid academic documents.",
  },
  {
    question: "Are scholarships available for international students in the USA?",
    answer: "Yes. Many universities offer merit-based or need-based scholarships. External organizations also offer scholarships for Indian students studying in the USA.",
  },
  {
    question: "Can I work while studying in the USA as an international student?",
    answer: "Yes. You can work up to 20 hours per week on campus during term time and full-time during vacations. Optional Practical Training (OPT) and Curricular Practical Training (CPT) also allow work experience.",
  },
  {
    question: "How do I choose the right university to study in the USA?",
    answer: "Consider factors like ranking, program strength, faculty, location, cost, scholarships, career opportunities, and alumni network. Talk to advisors or experts for personalized guidance.",
  },
];
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
    <FAQ faqs={faqData} title="Frequently Asked Questions about Studying in the USA" />
    <YourJourney />
    <FooterSection />
    </>
  );
}
