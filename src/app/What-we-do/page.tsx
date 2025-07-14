"use client";
import React, { useState } from "react";
import NavigationSection from "../_components/navigation1";
import FooterSection from "../_components/footer1";
import Whathero from "../_components/whatwedo/whathero"
import YourJourney from "../_components/study-abroad/your-journey";
import Afterhero from "../_components/whatwedo/afterhero";
import ConsultationFormModal from '~/app/_components/study-abroad/study-in-spain/ConsultationForm';
export default function whatwedo() {
  const [showModal, setShowModal] = useState(false);
  return (

    <>
      <ConsultationFormModal show={showModal} onClose={() => setShowModal(false)} />
      <NavigationSection />
      <Whathero onFreeConsultClick={() => setShowModal(true)} />
      <Afterhero />
      <YourJourney />
      <FooterSection />
    </>
  )
};

