import FooterSection from "~/app/_components/footer1";
import NavigationSection from "~/app/_components/navigation1";
import HeroSection from "~/app/_components/partnered-universities/Hero";
import SideBarSection from "~/app/_components/partnered-universities/SideBar";
import SuccessStoriesSection from "~/app/_components/partnered-universities/SuccessStories";
import UKUniversity from "~/app/_components/partnered-universities/uk";
import YourJourney from "~/app/_components/study-abroad/your-journey";

function PartneredUniversities(){
    return(<>
        <NavigationSection/>
        <HeroSection/>
        {/* <SideBarSection/> */}
        <UKUniversity/>
        <SuccessStoriesSection/>
        <YourJourney/>
        <FooterSection/>
    </>);
}

export default PartneredUniversities;