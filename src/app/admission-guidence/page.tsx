"use client";

import { useState } from "react";
import FooterSection from "~/app/_components/footer1";
import YourJourney from "~/app/_components/study-abroad/your-journey";
import HeroSection from "../_components/admission-guidence/Hero";
import Second from "../_components/admission-guidence/Second";
import ConsultationForm from "../_components/celpip/ConsultationForm"; // ✅ Update if path differs

export default function AdmissionGuidencePage() {
  const [showForm, setShowForm] = useState(false);

  return (

    <> 
   
      <HeroSection />

    <>
      <HeroSection onConsultClick={() => setShowForm(true)} />

      <ConsultationForm show={showForm} onClose={() => setShowForm(false)} />


      <Second />
      <YourJourney />
      <FooterSection />
    </>
  );
}
