"use client";

import { useState } from "react";
import FooterSection from "~/app/_components/footer1";
import YourJourney from "~/app/_components/study-abroad/your-journey";
import HeroSection from "../_components/admission-guidence/Hero";
import Second from "../_components/admission-guidence/Second";
import ConsultationForm from "../_components/celpip/ConsultationForm"; // ✅ Make sure the path is correct
import NavigationSection from "../_components/navigation1";

export default function AdmissionGuidencePage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <NavigationSection />
      <HeroSection onConsultClick={() => setShowForm(true)} />

      <ConsultationForm show={showForm} onClose={() => setShowForm(false)} />

      <Second />
      <YourJourney />
      <FooterSection />
    </>
  );
}
