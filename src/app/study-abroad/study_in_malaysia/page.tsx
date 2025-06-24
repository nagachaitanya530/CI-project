import HeroSection from "~/app/_components/study-abroad/study_in_malaysia/HeroSection";
import WhyMalaysia from "~/app/_components/study-abroad/study_in_malaysia/WhyMalaysia";
import Universities from "~/app/_components/study-abroad/study_in_malaysia/Universities";
import Courses from "~/app/_components/study-abroad/study_in_malaysia/Courses";
import CostOfStudy from "~/app/_components/study-abroad/study_in_malaysia/CostOfStudy";
import Scholarship from "~/app/_components/study-abroad/study_in_malaysia/Scholarship";
import CareerProspect from "~/app/_components/study-abroad/study_in_malaysia/CareerProspect";
import MoreAboutMalaysia from "~/app/_components/study-abroad/study_in_malaysia/MoreAboutMalaysia";
import SuccessStories from "~/app/_components/study-abroad/study_in_malaysia/SuccessStories";
import FAQ from "~/app/_components/study-abroad/study_in_malaysia/FAQ";
import NavigationSection from "~/app/_components/navigation1";
import YourJourney from "~/app/_components/study-abroad/study_in_malaysia/YourJourney";

import FooterSection from "~/app/_components/footer1";


export default function study_in_malaysia() {
  return (
    <>
      <NavigationSection />
      <HeroSection />
      <WhyMalaysia />
      <Universities />
      <Courses />
       <CostOfStudy />
       <Scholarship />
        <CareerProspect />
         <MoreAboutMalaysia />
         <SuccessStories />
           <FAQ />
            <YourJourney />
           <FooterSection />
    </>
  );
}

