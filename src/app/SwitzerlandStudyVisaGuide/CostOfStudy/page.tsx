"use client";
import FooterSection from "~/app/_components/footer1"
import NavigationSection from "~/app/_components/navigation1"
import YourJourney from "~/app/_components/study-abroad/your-journey"
import CardSection from "~/app/_components/SwitzerlandStudyVisaGuide/cards"
import Herosection from "~/app/_components/MBA/HeroSection"
import MBAinAustralia from "~/app/_components/MBA/Autralia"
import CardPage from "~/app/_components/SwitzerlandStudyVisaGuide/cards";
import HeroSection from "~/app/_components/SwitzerlandStudyVisaGuide/CostOFStudy/HeroSection";
import CostOFStudyContent from "~/app/_components/SwitzerlandStudyVisaGuide/CostOFStudy/CostOFStudyContent";
function CostOfStudy()
{
    return(


        <>

         <NavigationSection/>
         <HeroSection/>
         <CostOFStudyContent/>
         
         <CardPage/>
         <YourJourney/>
         <FooterSection/>
         
         

        </>

    )

}
export default CostOfStudy