'use client'

import { useState } from 'react';
import ConsultationFormModal from '~/app/_components/study-abroad/study-in-spain/ConsultationForm';
import NavigationSection from "~/app/_components/navigation1";
import SpainHeroSection from "~/app/_components/study-abroad/study-in-spain/SpainHeroSection";
import WhyStudy from "~/app/_components/study-abroad/study-in-spain/WhyStudy";
import ContactFormSection from '~/app/_components/study-abroad/home/contact-form';
import ListOfUniversity from "~/app/_components/study-abroad/study-in-spain/ListOfUniversity";
import PapularCourse from "~/app/_components/study-abroad/study-in-spain/PapularCourse";
import CostOfStudy from "~/app/_components/study-abroad/study-in-spain/CostOfStudy";
import Scholarship from "~/app/_components/study-abroad/study-in-spain/Scholarship";
import CareerProspective from "~/app/_components/study-abroad/study-in-spain/CareerProspective";
import MoreAbout from "~/app/_components/study-abroad/study-in-spain/MoreAbout";
import SuccesStory from "~/app/_components/study-abroad/study-in-spain/SuccesStory";
import FAQSection from "~/app/_components/study-abroad/study-in-spain/FAQs";
import SpainHero from "~/app/_components/study-abroad/study-in-spain/SpainHero";
import FooterSection from "~/app/_components/footer1";
export default function SpainPage() {
  const [showModal, setShowModal] = useState(false);
  return (
    <main>
       <>
      <ConsultationFormModal show={showModal} onClose={() => setShowModal(false)} />
    </>
      <NavigationSection />
      <SpainHeroSection onFreeConsultClick={() => setShowModal(true)} />
      <WhyStudy />
      <ContactFormSection />
      <ListOfUniversity />
      <PapularCourse />
      <CostOfStudy />
      <Scholarship />
      <CareerProspective />
      <MoreAbout onFreeConsultClick={() => setShowModal(true)} />
      <SuccesStory />
      <FAQSection />
      <SpainHero />
      <FooterSection />
    </main>
  );
}