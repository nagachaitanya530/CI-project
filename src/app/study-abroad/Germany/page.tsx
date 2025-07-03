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


export default function GermanyPage() {
  const [showModal, setShowModal] = useState(false)
  return (

    <main>

      <>
        <ConsultationForm show={showModal} onClose={() => setShowModal(false)} />
      </>
    <Navigation />
    <Hero onFreeConsultClick={() => setShowModal(true)} />
      <main className="max-w-7xl mx-auto p-4">
        <InfoStats />
      </main>
    <WhyStudy />
    <UniversityList />
    <PopularCoursesSection />
    <CostOfStudying />
    <Scholarships />
    <CareerProspectsSection />
    <MoreAbout onFreeConsultClick={() => setShowModal(true)} />
      <RelatedArticles />
    <SuccessStories />
    <FAQ faqs={[
        {
          question: "What is the cost of studying in Germany?",
          answer:
            "The total cost of studying in Germany including living expenses may be around EUR 20,000 per year. To view the complete breakdown, refer to the cost section above.",
        },
        {
          question: "How is life in Germany for Indian students?",
          answer:
            "Germany is renowned for its excellence in engineering, technology, and natural sciences, and the universities in Germany are recognized for the exceptional quality of education that they provide. This along with a high standard of living and a growing Indian community makes Germany an ideal study destination for Indian students.",
        },
        {
          question: "Is a medical test required for getting a student visa in Germany?",
          answer:
            "A medical test is not required to study abroad in Germany. Students can get approved for a German student visa without the results of a medical examination.",
        },
        {
          question: "What is the best way to pursue a Master’s in Germany for Indian students?",
          answer:
            "There are plenty of options for selecting universities in Germany for a Master’s degree. As one of India's leading education consultants we can guide you in selecting the best postgraduate course based on your specific needs and in accordance with the existing trends in the international job market.",
        },
        {
          question: "Is it compulsory to be proficient at German language in order to study in Germany?",
          answer:
            "No, it's not compulsory. Many universities in Germany offer programs in English, and proficiency in German is not required for admission.",
        },
      ]} />


      <YourJourney />

      <FooterSection />
    </main>
  );
}
