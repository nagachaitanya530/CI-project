'use client'
import { FileBadge2, FileText, IdCardLanyard } from 'lucide-react'
import { useEffect, useRef, useState, type JSX } from 'react';

import Navigation from '../../_components/navigation1';
import HeroSection from '~/app/_components/study-abroad/study-abroad-netherlands/hero';
import StatsBlock from "~/app/_components/study-abroad/study-abroad-netherlands/statsblock";
import WhyStudy from '~/app/_components/study-abroad/study-abroad-netherlands/WhyStudy';
import UniversityList from '~/app/_components/study-abroad/study-abroad-netherlands/UniversityLists';
import PopularCoursesSection from '~/app/_components/study-abroad/study-abroad-netherlands/PopularCourse';
import CostOfStudying from '~/app/_components/study-abroad/study-abroad-netherlands/cost-of-studying';
import Scholarships from '~/app/_components/study-abroad/study-abroad-netherlands/scholarship';
import CareerProspects from '~/app/_components/study-abroad/study-abroad-netherlands/carrerprospects';
import MoreAbout from '~/app/_components/study-abroad/study-abroad-netherlands/moreabout';
import SuccessStories from '~/app/_components/study-abroad/home/successstories';
import FAQ from '~/app/_components/study-abroad/faq';
import YourJourney from "~/app/_components/study-abroad/your-journey";
import Footer from '../../_components/footer1';

//FAQs props
const NetherlandsFAQs = [
  {
    question: "Are there scholarships available for studying in the Netherlands?",
    answer: "The Netherlands has a number of scholarships for international students studying at different levels. Here are some of the scholarships available: Holland Scholarship, Orange Knowledge Programme, and Radboud University Scholarship Programme, University of Maastricht High Potential Scholarship, Utrecht University Excellence Scholarships, TU Delft Excellence Scholarships, Leiden University Excellence Scholarships, Erik Bleumink Scholarships at the University of Groningen, University of Twente Scholarships."
  },
  {
    question: "Can I work while studying in the Netherlands?",
    answer: "You are permitted to work in the Netherlands if you have a student residence permit. But during the year, your working hours are limited to 16 hours a week, or full-time during the summer (June to August)."
  },
  {
    question: "Do I need to be fluent in Dutch to study in the Netherlands?",
    answer: "Most universities and colleges in India have on-campus accommodations referred to as hostels. Students may also live off-campus if required."
  },
  {
    question: "What is the cost of studying in the Netherlands?",
    answer: "Students are only allowed to work or earn as part of the education program. Working full time or part-time in other capacities is not allowed."
  },
  {
    question: "What are the best universities for studying a Master’s in the Netherlands?",
    answer: "Almost all courses of higher education are taught in English making India an attractive study destination for international students."
  },
  
];

export default function India() {
    return (
        <>
        <Navigation />
        <HeroSection />
        <StatsBlock />
        <WhyStudy />
        <UniversityList />
        <PopularCoursesSection />
        <CostOfStudying />
        <Scholarships />
        <CareerProspects />  
        <MoreAbout />
        <SuccessStories /> 
        <FAQ faqs={NetherlandsFAQs} title="FAQs" />
        <YourJourney />
        <Footer />
        </>
    )

}


