import StudyabroadSection from "~/app/_components/study-abroad/abroad/StudyabroadSection";
import NavigationSection from "~/app/_components/navigation1";
import FooterSection from "~/app/_components/footer1";
import FAQ from "~/app/_components/study-abroad/faq";
import YourJourney from "~/app/_components/study-abroad/your-journey";
import ContactFormSection from "../../_components/study-abroad/home/contact-form";

 const Abroadfaqs = [
  {
    question: "What are the top universities abroad for international students?",
    answer:
      "Some of the best universities for international students are Harvard and MIT in the USA, Oxford and Cambridge in the UK, ETH Zurich in Switzerland, and the University of Toronto in Canada.",
  },
  {
    question: "When should I start the process to study abroad?",
    answer:
      "Early planning is the key to successful study abroad. In order to find the program that is the right “fit” for your personal and academic objectives, you should begin planning your study abroad process as early as you can.",
  },
  {
    question: "What are the best countries to study abroad for Indian students?",
    answer:
      "The best countries to study abroad includes the UK, the USA, Canada, Ireland, Australia, Germany and France. These are also the best countries for international students to study and work.",
  },
  {
    question: "Should I apply to one university/country or more?",
    answer: "With Edwise, you can do that conveniently. We counsel for 16 countries and 900+ institutions. We suggest that you apply to more than one country and more than one university.",
  },
  {
    question: "Do we assist in Educational Loans?",
    answer:
      "You can easily achieve your dream of studying abroad even if you have limited funds. Educational loans can be an important part of your overall funding strategy. We at Edwise provide you the opportunity to avail an educational loan that covers all aspects of higher education including college fees, cost of books & accommodation.",
  },
];


const Studyabroad = () => {
   return (
  <main>
   <NavigationSection />
    <StudyabroadSection />
    <ContactFormSection />
    <FAQ faqs={Abroadfaqs} title="Frequently Asked Questions" />
    <YourJourney/>
    <FooterSection />
  </main>
   );
};
export default Studyabroad;