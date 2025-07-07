import FooterSection from "~/app/_components/footer1";
import NavigationSection from "~/app/_components/navigation1";
<<<<<<< HEAD
import CountryUniversity from "~/app/_components/partnered-universities/CountryGrid";
import CTA from "~/app/_components/partnered-universities/CTA";
import HeroSection from "~/app/_components/partnered-universities/Hero";
import SuccessStoriesSection from "~/app/_components/partnered-universities/SuccessStories";

=======
import HeroSection from "~/app/_components/partnered-universities/Hero";
import SideBarSection from "~/app/_components/partnered-universities/SideBar";
import SuccessStoriesSection from "~/app/_components/partnered-universities/SuccessStories";
import UKUniversity from "~/app/_components/partnered-universities/uk";
>>>>>>> cost-of-studying-usa
import YourJourney from "~/app/_components/study-abroad/your-journey";

function PartneredUniversities(){
    return(<>
        <NavigationSection/>
        <HeroSection/>
<<<<<<< HEAD
        <CountryUniversity/>
        <SuccessStoriesSection/>
        <YourJourney/>
        <CTA/>
=======
        {/* <SideBarSection/> */}
        <UKUniversity/>
        <SuccessStoriesSection/>
        <YourJourney/>
>>>>>>> cost-of-studying-usa
        <FooterSection/>
    </>);
}

export default PartneredUniversities;