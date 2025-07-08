"use client";

import { useState } from "react";
import HeroSection from "~/app/_components/study-abroad/study_in_malaysia/HeroSection";
import WhyMalaysia from "~/app/_components/study-abroad/study_in_malaysia/WhyMalaysia";
import ContactFormSection from '~/app/_components/study-abroad/home/contact-form';
import Universities from "~/app/_components/study-abroad/study_in_malaysia/Universities";
import Courses from "~/app/_components/study-abroad/study_in_malaysia/Courses";
import CostOfStudy from "~/app/_components/study-abroad/study_in_malaysia/CostOfStudy";
import Scholarship from "~/app/_components/study-abroad/study_in_malaysia/Scholarship";
import CareerProspect from "~/app/_components/study-abroad/study_in_malaysia/CareerProspect";
import MoreAboutMalaysia from "~/app/_components/study-abroad/study_in_malaysia/MoreAboutMalaysia";
import SuccessStories from "~/app/_components/study-abroad/home/successstories";
import NavigationSection from "~/app/_components/navigation1";
import YourJourney from "~/app/_components/study-abroad/your-journey";
import FooterSection from "~/app/_components/footer1";

import FAQ from "~/app/_components/study-abroad/faq";

import ConsultationForm from "~/app/_components/celpip/ConsultationForm";


const MalaysiaFAQs = [
  {
    question: "Is it expensive to study in Malaysia?",
    answer:
      "Studying in Malaysia is generally affordable compared to many Western countries. Tuition fees and living costs are relatively low, making it a popular destination for international students.",
  },
  {
    question: "Is it easy to get a visa to study in Malaysia?",
    answer:
      "Yes, the Malaysian government has a streamlined process for student visa applications, especially through the Education Malaysia Global Services (EMGS) system.",
  },
  {
    question: "What is the accommodation like for students in Malaysia?",
    answer:
      "Universities in Malaysia offer on-campus hostels and dormitories. Off-campus housing is also available and often affordable near university campuses.",
  },
  {
    question: "Can I work while studying in Malaysia?",
    answer:
      "International students in Malaysia are allowed to work part-time for up to 20 hours per week during semester breaks or holidays, subject to certain restrictions.",
  },
  {
    question: "Do I need to learn Malay to study in Malaysia?",
    answer:
      "No, most higher education programs in Malaysia are conducted in English, so learning Malay is not required for academic success.",
  },
  {
    question: "Are Malaysian degrees recognized globally?",
    answer:
      "Yes, degrees from Malaysian universities are recognized internationally. Many Malaysian institutions collaborate with universities from the UK, Australia, and the US.",
  },
  {
    question: "How long does the student visa process take?",
    answer:
      "The student visa process typically takes 4 to 6 weeks after all documents are submitted. It’s best to start early to avoid delays.",
  },
  {
    question: "What are the top fields of study in Malaysia for international students?",
    answer:
      "Popular fields include Engineering, Business, Medicine, IT, Hospitality, and Creative Arts. Malaysia also offers strong programs in Islamic Studies and Education.",
  },
  {
    question: "Can I stay in Malaysia after completing my studies?",
    answer:
      "Yes, Malaysia offers a Graduate Employability Program and certain work visa routes that may allow graduates to work in the country after completing their studies.",
  },
  {
    question: "Is Malaysia safe for international students?",
    answer:
      "Yes, Malaysia is considered a safe country for international students with low crime rates, friendly locals, and a diverse multicultural society.",
  },
];

export default function StudyInMalaysiaPage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <NavigationSection />

      
      <HeroSection onConsultClick={() => setShowForm(true)} />
      <ConsultationForm show={showForm} onClose={() => setShowForm(false)} />

      <WhyMalaysia />
      <ContactFormSection />
      <Universities />
      <Courses />
      <CostOfStudy />
      <Scholarship />
      <CareerProspect />

  

      <MoreAboutMalaysia onConsultClick={() => setShowForm(true)} /> {/* ✅ added */}
      <SuccessStories />
      <FAQ faqs={MalaysiaFAQs} title="FAQs" />

      <YourJourney />
      <FooterSection />
    </>
  );
}
