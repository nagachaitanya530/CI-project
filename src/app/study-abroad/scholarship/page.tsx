import FooterSection from "~/app/_components/footer1";
import NavigationSection from "~/app/_components/navigation1";
import FAQ from "~/app/_components/study-abroad/faq";
import ScholarHeroSection from "~/app/_components/study-abroad/scholarship/HeroSection";
import ScholarshipApplyForm from "~/app/_components/study-abroad/scholarship/scholarshipApply";
import ScrollCardAnimation2 from "~/app/_components/study-abroad/scholarship/scholarshipToStudy";
import ScholarshipSteps from "~/app/_components/study-abroad/scholarship/scholarshipToStudy";
import ScholarshipScrollCards from "~/app/_components/study-abroad/scholarship/TypesOfScholarship";
import ScholarshipTypes from "~/app/_components/study-abroad/scholarship/TypesOfScholarship";
import YourJourney from "~/app/_components/study-abroad/your-journey";

function scholarship()
{
    const FrontendFAQ = [
    {
      question: "What are the best scholarships available for studying abroad?",
      answer: "The best scholarships to study abroad include:Merit-Based This kind of scholarship for study abroad is usually granted to students based on their academic or athletic achievements.Student Specific Scholarships are granted to applicants that belong to a particular gender, race, religion, ethnicity or medical history.Need based Scholarships are being offered by universities abroad. Eligibility is based on the assets and income of the prospective students and their family.Program / Career Based Scholarships: These scholarships are awarded to students based on their academic profile and personal achievements."
    },
    {
      question: "How can I apply for scholarships to study abroad as an international student?",
      answer: "  To apply for an abroad scholarship for Indian student’s research scholarships, check if they're part of your university application or need a separate submission, and apply early.        "
    },
    {
      question: " How do I find scholarships for international students to study abroad?",
      answer: "To find scholarships for studying abroad by Indian government explore programs like the National Overseas Scholarship Scheme and Commonwealth Scholarship. Consult study abroad counselors for updated lists."
    },
    {
      question: "What are the eligibility criteria for study abroad scholarships?",
      answer: "Common criteria for scholarships for Indian students to study abroad include academic performance, financial need, and sometimes extracurricular achievements."
    },
    {
      question: " Can I get a full scholarship to study abroad",
      answer: "Yes, full foreign scholarships for Indian students are available, covering tuition, living expenses, and other costs, depending on the scholarship type."
    },
     {
      question: "What are the top countries offering scholarships to study abroad? ",
      answer: "The USA, UK, Australia, Canada, Germany, and New Zealand offer multiple fully funded scholarships for Indian students to study abroad."
    },
     {
      question: "What documents are required for a scholarship application to study abroad ",
      answer: "For a scholarship for abroad studies after 12th, required documents typically include academic transcripts, test scores (e.g., SAT, TOEFL, IELTS), a Statement of Purpose (SOP), recommendation letters, a passport copy, and proof of financial need. Each scholarship may have specific additional requirements, so it's important to check the guidelines carefully."
    },
     {
      question: " Are there scholarships specifically for Indian students to study abroad?",
      answer: "Yes, there are several scholarships like the Commonwealth Scholarship, Chevening, and Fulbright-Nehru Fellowship support Indian students especially for masters abroad."
    },
    {
      question: " Can I apply for multiple scholarships to study abroad?",
      answer: "Yes, there are multiple overseas scholarship for Indian students. However, check each scholarship's eligibility criteria."
    },
     {
      question: "How can I apply for government-funded scholarships to study abroad?",
      answer: "Visit official ministry websites like Ministry of External Affairs to explore government programs such as the National Overseas Scholarship Scheme."
    }
    ]
    return(
        <div>
            <NavigationSection/>
            <ScholarHeroSection/>
            <ScrollCardAnimation2/>
            <ScholarshipScrollCards/>
            <ScholarshipApplyForm/>
            <FAQ faqs={FrontendFAQ}/>
            <YourJourney/>
            <FooterSection/>
        </div>
    )
}
export default scholarship;