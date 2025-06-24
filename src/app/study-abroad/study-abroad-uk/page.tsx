"use client";
import Navigation from "~/app/_components/study-abroad/navigation";
import CareerProspectsUK from "~/app/_components/study-abroad/study-abroad-uk/CareerProspect";
import CostOfStudying from "~/app/_components/study-abroad/study-abroad-uk/CostOfStudying";
import HeroSection from "~/app/_components/study-abroad/study-abroad-uk/HeroSection";
import ListOfUniversity from "~/app/_components/study-abroad/study-abroad-uk/ListOfUniversity";
import MoreAboutUK from "~/app/_components/study-abroad/study-abroad-uk/MoreAboutUK";
import PopularCoursesSection from "~/app/_components/study-abroad/study-abroad-uk/PopularCourse";
import RelatedArticles from "~/app/_components/study-abroad/study-abroad-uk/RelatedArticles";
import Scholarships from "~/app/_components/study-abroad/study-abroad-uk/Scholarship";
import SuccessStories from "~/app/_components/study-abroad/study-abroad-uk/Stories";
import WhyStudy from "~/app/_components/study-abroad/study-abroad-uk/WhyStudy";
import WhyStudySection from "../../_components/study-abroad/study-abroad-uk/WhyStudy";
import StudyTabs from "~/app/_components/study-abroad/study-abroad-uk/MoreAboutUK";


function StudyInUk()
{
     const counters = [
    { value: "150+", label: "Universities" },
    { value: "£11k-£35k", label: "Annual tuition fees" },
    { value: "600k+", label: "International Students" },
    { value: "2 Years", label: "Graduate Immigration Visa" },
  ];
return(
    
    <div>
        <Navigation/>
      <HeroSection/>
        <section className="bg-blue-200">
             <div className="comm-section py-12" data-aos="fade-in" data-duration="0" >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {counters.map((counter, index) => (
            <div key={index} className="counter-cont-wrap">
              <h3 className="text-4xl font-bold text-blue-600">
                {counter.value}
              </h3>
              <h4 className="text-lg font-medium text-gray-700 mt-2">
                {counter.label}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
        </section>
        <WhyStudySection/>
          <ListOfUniversity/>
             <PopularCoursesSection/>
        <CostOfStudying/>
      
        <Scholarships/>
        <CareerProspectsUK/>
         <StudyTabs/>
         <RelatedArticles/>
        <SuccessStories/>
       
     
    </div>
    
)
}
export default StudyInUk;