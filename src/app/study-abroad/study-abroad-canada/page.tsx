import CostOfStudy from "~/app/_components/study-abroad/study-abroad-canada/CostOfStudy";
import MoreAbout from "~/app/_components/study-abroad/study-abroad-canada/MoreAbout";
import PopularCoursesSection from "~/app/_components/study-abroad/study-abroad-canada/PopularCourse";
import Scholarships from "~/app/_components/study-abroad/study-abroad-canada/scholarship";
import UniversityList from "~/app/_components/study-abroad/study-abroad-canada/UniversityList";
import WhyStudy from "~/app/_components/study-abroad/study-abroad-canada/WhyStudy";
import HeroSection from "~/app/_components/study-abroad/study-abroad-canada/HeroSection";
import CareerProspect from "~/app/_components/study-abroad/study-abroad-canada/CareerProspect";
import RelatedArticles from "~/app/_components/study-abroad/study-abroad-canada/RelatedArticles";
import NavigationSection from "~/app/_components/navigation1";
import FooterSection from "~/app/_components/footer1";
import SuccessStory from "~/app/_components/study-abroad/study-abroad-canada/SuccessStory";
import YourJourney from "~/app/_components/study-abroad/your-journey";
import FAQ from "~/app/_components/study-abroad/faq";


function StudyInCanada(){
  const FrontendFAQ = [
    {
      question: "How much does it cost to study in Canada?",
      answer: "You would need approximately INR 22-26 lakhs for one year of study in Canada, covering tuition fees, accommodation, food, transportation, books, and personal expenses."
    },
    {
      question: "Can I study in Canada without IELTS?",
      answer: "No, you cannot study in Canada without taking an English language proficiency test. You can choose between IELTS or PTE for this purpose. As the top Canada education consultants in India, we provide coaching for both IELTS and PTE."
    },
    {
      question: "Is a medical test required for getting a student visa in Canada?",
      answer: "Yes, a medical examination is required as part of the visa application process for studying in Canada."
    },
    {
      question: "What is GIC?",
      answer: "A GIC, or Guaranteed Investment Certificate, is a mandatory investment required to study at the colleges in Canada for international students, serving as proof of funds for living expenses."
    },
    {
      question: "How much can I earn while working part time in Canada?",
      answer: "The hourly wage varies depending on the job and location, but is typically around C$12 to C$20 per hour."
    }
  ]


    return(
        <>
        <NavigationSection/>
        <HeroSection/>
        <WhyStudy/>
        <UniversityList/>
        <PopularCoursesSection/>
        <CostOfStudy/>
        <Scholarships/>
        <CareerProspect/>
        <MoreAbout/>
        <RelatedArticles/>
        <SuccessStory/>
        <FAQ faqs={FrontendFAQ}/>
        <YourJourney/>
        <FooterSection/>
        </>
    );
}

export default StudyInCanada;