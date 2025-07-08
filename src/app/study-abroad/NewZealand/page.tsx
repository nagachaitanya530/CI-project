'use client'

import FooterSection from '~/app/_components/footer1';
import Navigation from '~/app/_components/navigation1';

import FAQ from '~/app/_components/study-abroad/faq';
import CareerProspect from '~/app/_components/study-abroad/study-abrod-NewZealand/CareerProspect';
import CostOfStudy from '~/app/_components/study-abroad/study-abrod-NewZealand/CostOfStudy';
import HeroSection from '~/app/_components/study-abroad/study-abrod-NewZealand/HeroSection';
import MoreAbout from '~/app/_components/study-abroad/study-abrod-NewZealand/MoreAbout';
import PopularCoursesSection from '~/app/_components/study-abroad/study-abrod-NewZealand/PopularCorses';
import RelatedArticle from '~/app/_components/study-abroad/study-abrod-NewZealand/RelatedArticle';
import Scholarships from '~/app/_components/study-abroad/study-abrod-NewZealand/Scholarship';
import Testimonials from '~/app/_components/study-abroad/study-abrod-NewZealand/Testimonials';
import UniversityList from '~/app/_components/study-abroad/study-abrod-NewZealand/UniversityList';
import WhyStudy from '~/app/_components/study-abroad/study-abrod-NewZealand/WhyStudy';
import ContactFormSection from '~/app/_components/study-abroad/home/contact-form';
import YourJourney from "~/app/_components/study-abroad/your-journey";

const IndiaFAQs = [
  {
    question: "Which is the best university in New Zealand for international students?",
    answer:
      "Top universities in New Zealand include the University of Auckland, University of Otago, University of Waikato, etc. However it is not possible to call any of them the best as they differ in the courses and facilities offered by the specific universities.",
  },
  {
    question: "What is the cost of studying in New Zealand for Indian students?",
    answer:
      "The total cost for a student in New Zealand would amount to approximately NZD 20,000 per year. To view the complete breakdown of the tuition fees, living expenses and accommodation costs, refer to the cost section above.",
  },
  {
    question: "What are the accommodation arrangements that are available for students?",
    answer:
      "There are institutions that arrange residential accommodation for students who are not staying with relatives or friends. However, you may also arrange accommodation for yourself. You should indicate whether or not you want assistance in finding accommodation when you apply to the institution.",
  },
  {
    question: "When can international students get a job search visa?",
    answer:
      "Students can apply for a job search visa after 3 months of completing the program. If the student receives a job offer in a related industry, the student visa can be converted to a work permit or permanent residency based on the eligibility and the skill migrant category at that time of application.",
  },
  {
    question: "What are the part time work opportunities for students and how much can they earn?",
    answer:
      "Students are allowed to work part-time for 20 hours per week. The wages range from NZ$18–NZ$22 per hour. Students can choose to work in restaurants, farms, malls and as marketing executives.",
  },
];

function NewZealandPage() {
  return (
    <>
      <Navigation />
      <HeroSection />
      <WhyStudy />
      <ContactFormSection />
      <UniversityList />
      <PopularCoursesSection />
      <CostOfStudy />
      <Scholarships />
      <CareerProspect />
      <MoreAbout />
      <RelatedArticle />
      <Testimonials />
      <FAQ faqs={IndiaFAQs} title="FAQs" />
      <YourJourney />
      <FooterSection />
    </>
  );
}

export default NewZealandPage;
