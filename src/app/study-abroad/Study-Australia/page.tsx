'use client';

import React from 'react'
import More from '../../_components/study-abroad/Study-Australia/More'
import Related from '../../_components/study-abroad/Study-Australia/Related-Articles'
import CostStudying from '../../_components/study-abroad/Study-Australia/Cost-Of-Studying'
import WhyStudy from '../../_components/study-abroad/Study-Australia/why'
import UniversityList from '../../_components/study-abroad/Study-Australia/university'
import Scholarships from '../../_components/study-abroad/Study-Australia/scholar'
import ContactFormSection from '~/app/_components/study-abroad/home/contact-form'
import Herosection from '~/app/_components/study-abroad/Study-Australia/Herosection'
import Navigation from '~/app/_components/navigation1'
import FooterSection from '~/app/_components/footer1'
import Faq from '~/app/_components/study-abroad/Study-Australia/Faq'
import YourJourney from '~/app/_components/study-abroad/your-journey'
import Popular from '~/app/_components/study-abroad/Study-Australia/Popular'
import CareerProspect from '~/app/_components/study-abroad/Study-Australia/CareerProspect'
import SuccessStory from '~/app/_components/study-abroad/Study-Australia/SuccessStory'







function page() {
  return (
<div>
<Navigation/>
<Herosection/>
<WhyStudy/>
<ContactFormSection />
<UniversityList/>
<Popular/>
<CostStudying/>
<Scholarships/>
<CareerProspect/>
<More/>
<Related/>
<SuccessStory></SuccessStory>
<Faq/>
<YourJourney/>
<FooterSection/>
</div>
  )
}

export default page










        