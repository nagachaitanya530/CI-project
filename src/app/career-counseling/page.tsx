import FooterSection from "~/app/_components/footer1";
import YourJourney from "~/app/_components/study-abroad/your-journey";
import FAQ from "~/app/_components/study-abroad/faq";
import DetailedTestReport from "../_components/career-counseling/TestReport";
import ProcessOfTesting from "../_components/career-counseling/ProcessOfTesting";
import TypesOfAptitude  from  "../_components/career-counseling/TypesOfAptitude";
import HeroSection from "../_components/career-counseling/Hero";
import ImportanceSection from "../_components/career-counseling/ImportanceOfAptitude";
import Navigation from "../_components/navigation1";

const  CareerCounselingFAQs = [
  {
    question: 'When should we take the Academic Pathway Program?',
    answer:
      'The ideal time to take the Academic Pathway Program is during high school or early college years to better align academic choices with career goals.',
  },
  {
    question: 'How long does it take to generate the test report?',
    answer:
      'The report is usually generated within 2-3 working days after completing the assessment.',
  },
  {
    question: 'How do the tests help in career planning?',
    answer:
      'The tests assess interests, aptitudes, and personality traits to provide career recommendations aligned with your strengths and preferences.',
  },
  {
    question: 'Are tests important for career counseling?',
    answer:
      'Yes, they provide objective insights that guide students and professionals in making informed career decisions.',
  },
  {
    question: 'What is the main objective of career counseling for students?',
    answer:
      'The main goal is to help students understand their abilities and interests, and to guide them towards suitable academic and career options.',
  },
  {
    question: 'Can the test be taken online?',
    answer:
      'Yes, the career assessment tests are available online and can be taken from the comfort of your home.',
  },
  {
    question: 'How long does it take to complete the test?',
    answer:
      'On average, the test takes about 45 to 60 minutes to complete.',
  },
];

export default function career_counseling() {
  return (
    <> 
      <Navigation />
        <HeroSection />
         <ImportanceSection />
        <TypesOfAptitude />
        <ProcessOfTesting />
        <DetailedTestReport/>
        <FAQ faqs={CareerCounselingFAQs} title="FAQs" />
      <YourJourney />
    <FooterSection />
    </>
  );
}