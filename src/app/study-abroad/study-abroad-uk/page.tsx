"use client";

import CareerProspectsUK from "~/app/_components/study-abroad/study-abroad-uk/CareerProspect";
import CostOfStudying from "~/app/_components/study-abroad/study-abroad-uk/CostOfStudying";
import HeroSection from "~/app/_components/study-abroad/study-abroad-uk/HeroSection";
import ListOfUniversity from "~/app/_components/study-abroad/study-abroad-uk/ListOfUniversity";
import PopularCoursesSection from "~/app/_components/study-abroad/study-abroad-uk/PopularCourse";
import RelatedArticles from "~/app/_components/study-abroad/study-abroad-uk/RelatedArticles";
import Scholarships from "~/app/_components/study-abroad/study-abroad-uk/Scholarship";
import WhyStudySection from "../../_components/study-abroad/study-abroad-uk/WhyStudy";
import ContactFormSection from '~/app/_components/study-abroad/home/contact-form';
import StudyTabs from "~/app/_components/study-abroad/study-abroad-uk/MoreAboutUK";
import NavigationSection from "~/app/_components/navigation1";
import FAQ from "~/app/_components/study-abroad/faq";
import YourJourney from "~/app/_components/study-abroad/your-journey";
import FooterSection from "~/app/_components/footer1";
import SuccessStory from "~/app/_components/study-abroad/study-abroad-uk/Stories";


function StudyInUk()
{
     const counters = [
    { value: "150+", label: "Universities" },
    { value: "£11k-£35k", label: "Annual tuition fees" },
    { value: "600k+", label: "International Students" },
    { value: "2 Years", label: "Graduate Immigration Visa" },
  ];
  const FrontendFAQ = [
    {
      question: "What is the cost of studying in the UK?",
      answer: "The cost of studying in the UK varies depending on the university and selection of the course. You can see the detailed cost break down in the cost section above."
    },
    {
      question: "Can I study abroad in the UK without IELTS?",
      answer: " Yes, some universities do offer a waiver and some universities also accept PTE and TOEFL "
    },
    {
      question: "What are the best universities in the UK for international students?",
      answer: " include Oxford, Cambridge, and Imperial College London, among many others."
    },
    {
      question: "How much bank balance is required for a UK student visa?",
      answer: " in Inner London is 12 Lakhs, while in Outer London, it is 9 Lakhs. Additionally, you must show a balance payment for the remaining tuition fees."
    },
    {
      question: "How can I get started on my study abroad journey in the UK?",
      answer: "You can get in touch with Edwise's expert counselors who after reviewing your profile, would be in a better position to guide you according to your specific needs. As the premier study in UK Consultants  we guarantee a smooth and seamless process if you choose to study in the UK."
    },
     {
      question: "What are the benefits of studying in the UK for international students? ",
      answer: " Study in UK for overseas students provides them with access to top-tier universities, varied cultural encounters, as well as outstanding employment prospects via robust international networks."
    },
     {
      question: "How can Indian students apply to UK universities? ",
      answer: " To study in UK from India, students can apply to universities in UK via the UCAS (Universities and Colleges Admissions Service) system, which handles undergraduate applications. They are required to compile academic transcripts, draft a personal statement, and fulfill English language prerequisites, and submit their application online prior to the deadlines."
    },
     {
      question: "What are the popular courses to study in the UK? ",
      answer: " Business and Management, Medicine, Social Sciences, Engineering, and Computer Science are the popular courses to study abroad in UK. Owing to renowned academic standings and employment opportunities, a number of overseas students are drawn to these fields."
    },
    {
      question: "WWhat are the requirements for a UK student visa from India?",
      answer: "  Applying for a UK student visa from India requires students to have a Confirmation of Acceptance for Studies (CAS) from an educational institution in the UK, provide evidence of adequate funds to pay for tuition fees and living expenses, and proof of English language competence. They are also required to submit biometric information and provide a valid passport."
    },
    {
      question: "Can international students work while studying in the UK? ",
      answer: " Yes, study in UK for Indian students permits them to work part-time for a maximum of 20 hours per week during the academic term and full-time during breaks, based on their visa conditions."
    },
    {
      question: "What is the duration of undergraduate and postgraduate courses in the UK? ",
      answer: " UK abroad study allows overseas students to pursue both undergraduate as well as postgraduate courses. Undergraduate courses in the UK take 3-4 years to complete, whereas postgraduate courses typically span 1-2 years."
    },
    {
      question: "Are there any post-study work opportunities in the UK?",
      answer: "Yes, a Post-Study Work visa known as the Graduate Route is offered by the UK, enabling overseas graduates to work or seek employment for a maximum of 2-3 years post the completion of their degree."
    }
  ]
return(
    
    <div>
        <NavigationSection/>
      <HeroSection/>
 <section className="bg-blue-200">
    <div className="comm-section py-12" data-aos="fade-in" data-duration="0" >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {counters.map((counter, index) => (
            <div key={index} className="counter-cont-wrap">
              <h3 className="text-4xl font-bold text-blue-600">
                {counter.value}
              </h3>
              <h4 className="text-lg font-medium text-gray-700 mt-2">
                {counter.label}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
        </section>
        <WhyStudySection/>
        <ContactFormSection />
        <ListOfUniversity/>
        <PopularCoursesSection/>
        <CostOfStudying/>
        <Scholarships/>
        <CareerProspectsUK/>
        <StudyTabs/>
        <RelatedArticles/>
        <SuccessStory/>
        <FAQ faqs={FrontendFAQ}/>
        <YourJourney/>
        <FooterSection/>
       
     
    </div>
    
)
}
export default StudyInUk;