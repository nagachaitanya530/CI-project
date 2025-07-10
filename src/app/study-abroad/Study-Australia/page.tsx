import React from 'react'
import More from '../../_components/study-abroad/Study-Australia/More'
import Related from '../../_components/study-abroad/Study-Australia/Related-Articles'
import CostStudying from '../../_components/study-abroad/Study-Australia/Cost-Of-Studying'
import WhyStudy from '../../_components/study-abroad/Study-Australia/why'
import UniversityList from '../../_components/study-abroad/Study-Australia/university'
import Scholarships from '../../_components/study-abroad/Study-Australia/scholar'

import Herosection from '~/app/_components/study-abroad/Study-Australia/Herosection'
import FooterSection from '~/app/_components/footer1'
import YourJourney from '~/app/_components/study-abroad/your-journey'
import Popular from '~/app/_components/study-abroad/Study-Australia/Popular'
import CareerProspect from '~/app/_components/study-abroad/Study-Australia/CareerProspect'
import SuccessStory from '~/app/_components/study-abroad/Study-Australia/SuccessStory'
import FAQ from '~/app/_components/study-abroad/faq'
import NavigationSection from '~/app/_components/navigation1'


function page() {
  const faqs = [
    {
      question: "Why aren’t GMAT and GRE scores required by all Australian universities?",
      answer:
        "The reason why universities in Australia do not always ask for GMAT, GRE, etc., is because these exams are for American universities, so students have to give these tests to be judged by American standar. Australia and India recognise each other's degrees; however, specific universities may ask the same for assessing the student."
    },
    {
      question: "Which is the best university in Australia?",
      answer:
        "One cannot classify any specific institution as the best there are plenty of worldclass universities in Australia for international students and all are regulated under the Vice Chancellors Committee, which follows the code of ethics. If you wish to study abroad in Australia, it is advisable to follow market trends like MBAs, BBAs, MIT, etc., but it would be unfair to judge universities as one can only compare the course structure and faculty.",
    },
    {
      question: "How long does the visa application process take?",
      answer:
        "On average, the time taken by the Australian High Commission for the visa procedure is between 4 and 12 weeks, depending on the candidate’s background. Students can start applying for the visa at least 3 months in advance of their course commencement. Our visa experts will make sure that your entire visa process is hassle-free.",
    },
    {
      question: "How do I know if I am eligible for Permanent Residency (PR)?",

      answer:
        "As a student, one needs to cover up to 60 points to be eligible for permanent residency (PR). The points can be gained through a combination of age, program chosen, English language proficiency, duration of the program, working part-time and studying in a regional area."
    },
    {
      question: "What are the visa possibilities for my spouse or dependent?",
      answer: "A spouse or dependent of a student visa holder in Australia can get a dependent visa and a valid work permit for the same duration as the primary applicant for the visa. The visa is applicable only to students pursuing a master's or higher degree."
    }
  ];


  return (
    <div>
      <NavigationSection />
      <Herosection />
      <WhyStudy />
      <UniversityList />
      <Popular />
      <CostStudying />
      <Scholarships />
      <CareerProspect />
      <More />
      <Related />
      <SuccessStory></SuccessStory>
      <section id="faq" className="bg-white py-14 px-4 md:px-20   scroll-mt-15">
        <FAQ faqs={faqs} />
      </section>
      <YourJourney />
      <FooterSection />
    </div>
  )
}

export default page