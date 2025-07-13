'use client'
import { BookCheckIcon, FileBadge2, FileText, IdCardLanyard } from 'lucide-react'
import { useEffect, useRef, useState, type JSX } from 'react';
import FooterSection from '~/app/_components/footer1';
import Navigation from '~/app/_components/navigation1';
import BookConsultationForm from '~/app/_components/study-abroad/BookConsultationForm';
import CareerProspect from '~/app/_components/study-abroad/study-abrod-NewZealand/CareerProspect';
import CostOfStudy from '~/app/_components/study-abroad/study-abrod-NewZealand/CostOfStudy';

import HeroSection from '~/app/_components/study-abroad/study-abrod-NewZealand/HeroSection';
import MoreAbout from '~/app/_components/study-abroad/study-abrod-NewZealand/MoreAbout';
import PopularCoursesSection from '~/app/_components/study-abroad/study-abrod-NewZealand/PopularCorses';
import RelatedArticle from '~/app/_components/study-abroad/study-abrod-NewZealand/RelatedArticle';
import Scholarships from '~/app/_components/study-abroad/study-abrod-NewZealand/Scholarship';
import SuccessStories from '~/app/_components/study-abroad/study-abrod-NewZealand/SuccessStory';
import Testimonials from '~/app/_components/study-abroad/study-abrod-NewZealand/Testimonials';
import UniversityList from '~/app/_components/study-abroad/study-abrod-NewZealand/UniversityList';
import WhyStudy from '~/app/_components/study-abroad/study-abrod-NewZealand/WhyStudy';
import YourJourney from "~/app/_components/study-abroad/your-journey";

function NewZealandPage()
{
return(
<>
      <Navigation/>
      <HeroSection/>
      <WhyStudy/>
      <UniversityList/>
      <PopularCoursesSection/>
      <CostOfStudy/>
      <Scholarships/>
      <CareerProspect/>
      <MoreAbout/>
      <RelatedArticle/>
      <Testimonials/>
      <YourJourney/>
      <FooterSection/>

</>

    )

}
export default NewZealandPage;


