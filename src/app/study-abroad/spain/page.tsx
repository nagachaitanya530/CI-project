"use client";

import { useState } from "react";
import ConsultationFormModal from "~/app/_components/study-abroad/study-in-spain/ConsultationForm";
import NavigationSection from "~/app/_components/navigation1";
import SpainHeroSection from "~/app/_components/study-abroad/study-in-spain/SpainHeroSection";
import WhyStudy from "~/app/_components/study-abroad/study-in-spain/WhyStudy";
import ListOfUniversity from "~/app/_components/study-abroad/study-in-spain/ListOfUniversity";
import PapularCourse from "~/app/_components/study-abroad/study-in-spain/PapularCourse";
import CostOfStudy from "~/app/_components/study-abroad/study-in-spain/CostOfStudy";
import Scholarship from "~/app/_components/study-abroad/study-in-spain/Scholarship";
import CareerProspective from "~/app/_components/study-abroad/study-in-spain/CareerProspective";
import MoreAbout from "~/app/_components/study-abroad/study-in-spain/MoreAbout";
import SuccesStory from "~/app/_components/study-abroad/study-in-spain/SuccesStory";
import FAQ from "~/app/_components/study-abroad/faq";
import YourJourney from "~/app/_components/study-abroad/your-journey";
import FooterSection from "~/app/_components/footer1";
export default function SpainPage() {
  const [showModal, setShowModal] = useState(false);
  return (
    <main>
      <>
        <ConsultationFormModal
          show={showModal}
          onClose={() => setShowModal(false)}
        />
      </>
      <NavigationSection />
      <SpainHeroSection onFreeConsultClick={() => setShowModal(true)} />
      <WhyStudy />
      <ListOfUniversity />
      <PapularCourse />
      <CostOfStudy />
      <Scholarship />
      <CareerProspective />
      <MoreAbout onFreeConsultClick={() => setShowModal(true)} />
      <SuccesStory />
      <FAQ
        faqs={[
          {
            question: "Can I study and work with my student visa?",
            answer:
              "Current legislation allows students to work while in possession of a student visa and resident permit (NIE estudiante) as long as they do not work full-time and the work does not interfere with their studies. You are allowed to work 30 hours per week when you decide to study abroad in Spain.",
          },
          {
            question:
              "Do I need to have some Spanish language skills to attend a programme?",
            answer:
              "Knowing Spanish especially for studying Master’s in Spain for Indian students is not an issue since courses are available in 100% English.",
          },
          {
            question:
              "What are the documents required to study in Spain for Indian students?",
            answer:
              "You will generally need: valid passport, offer letter, academic transcripts, financial proof, health insurance, and a student visa application form. Requirements may vary by university.",
          },
          {
            question: "Is Spain a very expensive country to study?",
            answer:
              "Spain is relatively affordable compared to other European countries. Living costs and tuition fees are manageable for international students.",
          },
          {
            question: "What is the cost of studying a Master degree in Spain?",
            answer:
              "The tuition fees for studying a Master degree in Spain is approximately between EUR 4,000 to 15,000 per year.",
          },
        ]}
      />
      <YourJourney />
      <FooterSection />
    </main>
  );
}
