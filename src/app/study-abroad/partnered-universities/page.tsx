import FooterSection from "~/app/_components/footer1";
import NavigationSection from "~/app/_components/navigation1";
import CountryUniversity from "~/app/_components/partnered-universities/CountryGrid";
import CTA from "~/app/_components/partnered-universities/CTA";
import HeroSection from "~/app/_components/partnered-universities/Hero";
import SuccessStoriesSection from "~/app/_components/partnered-universities/SuccessStories";

import YourJourney from "~/app/_components/study-abroad/your-journey";

function PartneredUniversities(){
    return(<>
        <NavigationSection/>
        <HeroSection/>
        <CountryUniversity/>
        <SuccessStoriesSection/>
        <YourJourney/>
        <CTA/>
        <FooterSection/>
    </>);
}

export default PartneredUniversities;