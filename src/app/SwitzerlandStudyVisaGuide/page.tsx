"use client";
import FooterSection from "../_components/footer1"
import YourJourney from "../_components/study-abroad/your-journey"
import CardPage from "../_components/SwitzerlandStudyVisaGuide/cards";
import Herosection from "../_components/SwitzerlandStudyVisaGuide/HeroSection"
import SwitzerlandVisaContent from "../_components/SwitzerlandStudyVisaGuide/SwitzerlandVisaContent"
import Navigation from '~/app/_components/navigation1';
function SwitzerlandStudyVisa()
{
    return (
    <>
        <Navigation/>
        <Herosection />
        <SwitzerlandVisaContent/>
        <CardPage/>
        <YourJourney />
        <FooterSection />
    </>

    )
}
export default SwitzerlandStudyVisa 