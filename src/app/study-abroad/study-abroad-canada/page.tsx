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
      question: "How many hours of IELTS training is provided by Edwise?",
      answer: " The IELTS course duration will be 30 hours. "
    },
    {
      question: "Will the courseware be given by Edwise or we need to buy?",
      answer: "Study material will be given when the candidate enrolls at the IELTS coaching center."
    },
    {
      question: "How many mock tests does Edwise provide?",
      answer: "  20 full length mock tests are included in coaching at Edwise."
    },
    {
      question: " What is the difference between Academic and General Exams for IELTS & PTE?",
      answer: "Academic – Candidates who want to go abroad for study purpose to a particular country. General – Candidates who want to go for immigration to a particular country."
    },
    {
      question: "What modules do IELTS/PTE/TOEFL include?",
      answer: "All the tests are English proficiency tests. They have four sections namely Reading, Writing, Listening and Speaking."
    },
    {
      question: "What is the difference between IELTS/PTE/TOEFL?",
      answer: "IELTS is paper based exam and PTE & TOEFL are online exams, TOEFL offers paper based test as well. All of them are English proficiency tests.."
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