"use client";
import { useState } from "react";
import NavigationSection from "~/app/_components/navigation1";
import FooterSection from "~/app/_components/footer1";
import WhyStudy from "~/app/_components/study-abroad/study-switzerland/whystudy";
import Costofstudy from "~/app/_components/study-abroad/study-switzerland/costofstudy";
import Scholarships from "~/app/_components/study-abroad/study-switzerland/scholarship";
import ListOfUniversity from "~/app/_components/study-abroad/study-switzerland/listofuniversity";
import RelatedArticles from "~/app/_components/study-abroad/study-switzerland/relatedarticle";
import Herosection from "~/app/_components/study-abroad/study-switzerland/herosection";
import CareerProspectsSection from "../../_components/study-abroad/study-switzerland/careerprospe";
import MoreAbout from "~/app/_components/study-abroad/study-switzerland/moreabout";
import PopularCourses from "~/app/_components/study-abroad/study-switzerland/popularcourses";
import SuccessStories from "~/app/_components/study-abroad/study-switzerland/successstories";
import Faq from "~/app/_components/study-abroad/faq";
import ConsultationFormModal from '~/app/_components/study-abroad/study-in-spain/ConsultationForm';
import YourJourney from "~/app/_components/study-abroad/your-journey";
const StudyInSwitzerland = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
    <>
          <ConsultationFormModal show={showModal} onClose={() => setShowModal(false)} />
        </>
      <NavigationSection />
      <Herosection onFreeConsultClick={() => setShowModal(true)} /> 
      <WhyStudy />
      <ListOfUniversity />
      <PopularCourses />
      <Costofstudy />
      <Scholarships />
      <CareerProspectsSection />
      <MoreAbout onFreeConsultClick={() => setShowModal(true)} /> 
      <RelatedArticles />
      <SuccessStories />
      <Faq faqs={[
         {
    question: 'How much does it cost to study in Switzerland?',
answer:
      'The total cost including living expenses to study in Switzerland may be around CHF 19,000 per year. To view the complete cost breakdown, refer to the cost section above.',
  },
  {
    question: 'Can Indian students study in Switzerland?',
answer:
  "Yes, Indian students can study abroad in Switzerland. The country offers plenty of options to study in Switzerland for Indian students. You can contact us and we will guide you through the entire process.",
  },
  {
    question: 'How to get admission to the universities in Switzerland?',
answer:
      'With the help of our expert counselors the student will be able to shortlist and apply to their desired university. After getting the offer letter from the university and meeting the student visa requirements, the student will be ready to start their study abroad journey in Switzerland.',
  },
  {
    question: 'Can I study in Switzerland without IELTS?',
answer:
      'The prerequisites for applying to and being admitted to Swiss universities depend on the course and university you select.',
  },
  {
    question: "How much can I earn in Switzerland while working part-time?",
    answer:
      "In Switzerland, an international student can typically make between CHF 2,200 and CHF 2,800 per month.",
  },
      ]} />
      <YourJourney />
      <FooterSection />
    </>
  );
};

export default StudyInSwitzerland;

