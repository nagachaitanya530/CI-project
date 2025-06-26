import HeroSection from "~/app/_components/study-abroad/study_in_malaysia/HeroSection";
import WhyMalaysia from "~/app/_components/study-abroad/study_in_malaysia/WhyMalaysia";
import Universities from "~/app/_components/study-abroad/study_in_malaysia/Universities";
import Courses from "~/app/_components/study-abroad/study_in_malaysia/Courses";
import CostOfStudy from "~/app/_components/study-abroad/study_in_malaysia/CostOfStudy";
import Scholarship from "~/app/_components/study-abroad/study_in_malaysia/Scholarship";
import CareerProspect from "~/app/_components/study-abroad/study_in_malaysia/CareerProspect";
import MoreAboutMalaysia from "~/app/_components/study-abroad/study_in_malaysia/MoreAboutMalaysia";
import SuccessStories from "~/app/_components/study-abroad/study_in_malaysia/SuccessStories";
import NavigationSection from "~/app/_components/navigation1";
import FAQ from "~/app/_components/study-abroad/faq";
import YourJourney from "~/app/_components/study-abroad/your-journey";
import FooterSection from "~/app/_components/footer1";
const MalaysiaFAQs = [
  {
    question: "Is it expensive to study in Malaysia?",
    answer: "Studying in Malaysia is generally affordable compared to many Western countries. Tuition fees and living costs are relatively low, making it a popular destination for international students."
  },
  {
    question: "Is it easy to get a visa to study in Malaysia?",
    answer: "Yes, the Malaysian government has a streamlined process for student visa applications, especially through the Education Malaysia Global Services (EMGS) system."
  },
  {
    question: "What is the accommodation like for students in Malaysia?",
    answer: "Universities in Malaysia offer on-campus hostels and dormitories. Off-campus housing is also available and often affordable near university campuses."
  },
  {
    question: "Can I work while studying in Malaysia?",
    answer: "International students in Malaysia are allowed to work part-time for up to 20 hours per week during semester breaks or holidays, subject to certain restrictions."
  },
  {
    question: "Do I need to learn Malay to study in Malaysia?",
    answer: "No, most higher education programs in Malaysia are conducted in English, so learning Malay is not required for academic success."
  },
];

export default function study_in_malaysia() {
  return (
    <>
      <NavigationSection />
      <HeroSection />
      <WhyMalaysia />
      <Universities />
      <Courses />
       <CostOfStudy />
       <Scholarship />
        <CareerProspect />
         <MoreAboutMalaysia />
         <SuccessStories />
        <FAQ faqs={MalaysiaFAQs} title="FAQs" />
            <YourJourney />
           <FooterSection />
    </>
  );
}

