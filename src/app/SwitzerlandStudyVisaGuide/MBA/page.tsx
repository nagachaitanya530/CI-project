"use client";
import FooterSection from "~/app/_components/footer1"
import NavigationSection from "~/app/_components/navigation1"
import YourJourney from "~/app/_components/study-abroad/your-journey"
import CardSection from "~/app/_components/SwitzerlandStudyVisaGuide/cards"
//import SpainHero from "~/app/_components/study-abroad/study-in-spain/SpainHero"
import Herosection from "~/app/_components/MBA/HeroSection"
import MBAinAustralia from "~/app/_components/MBA/Autralia"
import CardPage from "~/app/_components/SwitzerlandStudyVisaGuide/cards";
function MBA()
{
    return(


        <>

         <NavigationSection/>
         <Herosection/>
         < MBAinAustralia/>
         <CardPage/>
         <YourJourney/>
         <FooterSection/>
         
         

        </>

    )

}
export default MBA