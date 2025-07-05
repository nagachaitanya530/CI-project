import React from 'react'
import More from '../../_components/study-abroad/Study-Australia/More'
import Related from '../../_components/study-abroad/Study-Australia/Related-Articles'

<<<<<<< Updated upstream

=======
import Testimonials from '../../_components/study-abroad/Study-Australia/Testimonials'
>>>>>>> Stashed changes
import CostStudying from '../../_components/study-abroad/Study-Australia/Cost-Of-Studying'

import WhyStudy from '../../_components/study-abroad/Study-Australia/why'
import UniversityList from '../../_components/study-abroad/Study-Australia/university'
import Scholarships from '../../_components/study-abroad/Study-Australia/scholar'

import HeroSection from '~/app/ContactUs/Hero'
import Herosection from '~/app/_components/study-abroad/Study-Australia/Herosection'

import Navigation from '~/app/_components/Navigation'

import FooterSection from '~/app/_components/footer1'
import Faq from '~/app/_components/study-abroad/Study-Australia/Faq'
import YourJourney from '~/app/_components/study-abroad/your-journey'
import PopularCoursesSection from '~/app/_components/study-abroad/Study-Australia/Popular'
import Popular from '~/app/_components/study-abroad/Study-Australia/Popular'
import CareerProspect from '~/app/_components/study-abroad/Study-Australia/CareerProspect'
import SuccessStory from '~/app/_components/study-abroad/Study-Australia/SuccessStory'







function page() {
  return (
    <div>
<Navigation/>


<Herosection/>



<WhyStudy/>



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

        <h2 className="relative inline-block text-4xl font-bold">
  Success Stories
  <span
    className="absolute left-0 bottom-0 w-full h-3 bg-no-repeat bg-contain bg-left"
    style={{
      backgroundImage: "url('/zigzag-underline.png')", // Add this image in public folder
    }}
  ></span>
</h2>

    </div>
  )
}

export default page










        