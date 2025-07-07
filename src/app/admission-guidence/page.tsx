"use client";

import { useState } from "react";
import FooterSection from "~/app/_components/footer1";
import YourJourney from "~/app/_components/study-abroad/your-journey";
import HeroSection from "../_components/admission-guidence/Hero";
<<<<<<< HEAD
import Second from "../_components/admission-guidence/Second";
import ConsultationForm from "../_components/celpip/ConsultationForm"; // ✅ Update if path differs

export default function AdmissionGuidencePage() {
  const [showForm, setShowForm] = useState(false);

=======
import Second from "../_components/admission-guidence/Second"
import Navigation from "../_components/navigation1";
export default function admission_guidence() {
>>>>>>> optimizing/ansu
  return (

    <> 
<<<<<<< HEAD
   
      <HeroSection />

    <>
      <HeroSection onConsultClick={() => setShowForm(true)} />

      <ConsultationForm show={showForm} onClose={() => setShowForm(false)} />


      <Second />
=======
      <Navigation />
       < HeroSection />
       < Second />
>>>>>>> optimizing/ansu
      <YourJourney />
      <FooterSection />
    </>
  );
}
