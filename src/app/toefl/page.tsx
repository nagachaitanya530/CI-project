import FooterSection from "../_components/footer1";
import NavigationSection from "../_components/navigation1";
<<<<<<< HEAD
import FAQ from "../_components/study-abroad/faq";
=======
>>>>>>> cost-of-studying-usa
import YourJourney from "../_components/study-abroad/your-journey";
import HeroBanner from "../_components/toefl/HeroBanner";
import StickySectionNav from "../_components/toefl/StickySectionNav";
import TOEFLDates from "../_components/toefl/TOEFLDates";
<<<<<<< HEAD
=======
import TOEFLFAQs from "../_components/toefl/TOEFLFAQs";
>>>>>>> cost-of-studying-usa
import TOEFLMisc from "../_components/toefl/TOEFLMisc";
import TOEFLOutline from "../_components/toefl/TOEFLOutline";
import TOEFLPattern from "../_components/toefl/TOEFLPattern";
import TOEFLScores from "../_components/toefl/TOEFLScores";
import TOEFLSyllabus from "../_components/toefl/TOEFLSyllabus";
import TOEFLTraining from "../_components/toefl/TOEFLTraining";
import SuccessStories from "../_components/usa/SuccessStories";

<<<<<<< HEAD
const faqs = [
  {
    question: "What is the difference between IELTS / PTE / TOEFL / DUOLINGO?",
    answer:
      "Each test has a different format and scoring system. TOEFL and IELTS are widely accepted for study abroad. PTE and Duolingo are newer alternatives with faster results and more flexibility, but acceptance varies by university.",
  },
  {
    question: "How many hours of coaching is given for IELTS / PTE / TOEFL / DUOLINGO?",
    answer:
      "Edwise provides 30 hours of comprehensive coaching for each of these exams, delivered by trained and certified faculty.",
  },
  {
    question: "What modules do I have to study as part of my TOEFL exam preparation?",
    answer:
      "You will be trained in all four modules – Reading, Listening, Writing, and Speaking – with mock tests and skill-building strategies.",
  },
  {
    question: "Does Edwise assist with registration and payments for the exams?",
    answer:
      "Yes, Edwise helps you with exam registration, payment process, and documentation required for booking your TOEFL exam.",
  },
  {
    question: "How to prepare for TOEFL?",
    answer:
      "Join structured training programs, practice full-length mock tests, focus on core skills, and use courseware like Princeton for in-depth preparation.",
  },
  {
    question: "What is the cost of score reporting for TOEFL?",
    answer:
      "The fee for additional score reporting is ₹1,950 per university or institution.",
  },
  {
    question: "Is basic English grammar included in the TOEFL exam coaching?",
    answer:
      "Yes, essential grammar is covered as part of the course to support strong foundational skills in all four modules.",
  },
];
=======
>>>>>>> cost-of-studying-usa
export default function TOEFLPage() {
  return (
    <>
      <NavigationSection />
      <HeroBanner />
      <StickySectionNav />
      <TOEFLOutline />
      <TOEFLPattern />
      <TOEFLSyllabus />
      <TOEFLScores />
      <TOEFLDates />
      <TOEFLTraining />
      <TOEFLMisc />
<<<<<<< HEAD
      <FAQ faqs={faqs} title="Frequently Asked Questions" />
=======
      <TOEFLFAQs />
>>>>>>> cost-of-studying-usa
      <SuccessStories />
      <YourJourney />
      <FooterSection />
    </>
  );
}
