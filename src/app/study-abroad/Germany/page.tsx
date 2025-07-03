"use client";

import { useState } from "react";

import Navigation from "~/app/_components/navigation1";

import UniversityList from "~/app/_components/study-abroad/Germany/listofuniversities";
import PopularCoursesSection from "~/app/_components/study-abroad/Germany/popularcourses";
import { Plus, Minus } from "lucide-react";
import WhyStudy from "~/app/_components/study-abroad/Germany/whystudy";
import CostOfStudying from "~/app/_components/study-abroad/Germany/costofstudying";
import Scholarships from "~/app/_components/study-abroad/Germany/scholarship";
import MoreAbout from "~/app/_components/study-abroad/Germany/moreabout";
import TOC from "~/app/_components/study-abroad/Germany/TOC";
import Hero from "~/app/_components/study-abroad/Germany/hero";
import InfoStats from "~/app/_components/study-abroad/Germany/infostats";
import CareerProspectsSection from "~/app/_components/study-abroad/Germany/CareerProspects";
import FAQ from "~/app/_components/study-abroad/faq";
import SuccessStories from "~/app/_components/study-abroad/Germany/SuccessStories";
import RelatedArticles from "~/app/_components/study-abroad/Germany/RelatedArticles";
import ConsultationForm from "~/app/_components/study-abroad/Germany/ConsultationForm"
import FooterSection from "~/app/_components/footer1";
import YourJourney from "~/app/_components/study-abroad/your-journey";
import {
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaFacebook,
  FaXTwitter,
  FaBlogger,
} from "react-icons/fa6";

// ✅ This is the missing function declaration
export default function GermanyPage() {
  const [showModal, setShowModal] = useState(false)
  return (

    <main>

      <>
        <ConsultationForm show={showModal} onClose={() => setShowModal(false)} />
      </>


      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <Hero onFreeConsultClick={() => setShowModal(true)} />

      {/* Info Stats Section */}
      <main className="max-w-7xl mx-auto p-4">
        <InfoStats />
      </main>

      {/* Why Study in Germany */}
      <WhyStudy />

      {/* University List Section */}
      <UniversityList />

      {/* Popular Courses Section */}
      <PopularCoursesSection />

      {/* Cost of Studying */}
      <CostOfStudying />

      {/* Scholarships */}
      <Scholarships />

      {/* CareerProspectsection */}
      <CareerProspectsSection />

      {/* More About Germany */}
      <MoreAbout onFreeConsultClick={() => setShowModal(true)} />

      {/* Table of Contents */}
      {/* <TOC /> */}

      <RelatedArticles />

      {/* Success Stories*/}
      <SuccessStories />

      {/* FAQ Section */}
      <FAQ />

      {/* Call to Action */}
      <CTA_Section />

      {/* this is the footer */}
      <FooterSection />
    </main>
  );
}
