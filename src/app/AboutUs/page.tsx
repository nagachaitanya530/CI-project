import HeroSection from "~/app/_components/AboutUs/HeroSection";
import Navigation from "~/app/_components/Navigation";
import CoreValues from "../_components/AboutUs/CoreValues";
import TimelineCarousel from "../_components/AboutUs/Cards";
import FounderSection from  "../_components/AboutUs/OurFounder";
import OurTeamCarousel from "../_components/AboutUs/International";
import EdwiseTeamSection from "../_components/AboutUs/EdwiseTeamSection";
import ServicesSection from "../_components/AboutUs/Ourservices"; 
import  AccreditationsGrid from "../_components/AboutUs/Recognition";
import  MediaLogosGrid from  "../_components/AboutUs/PressRecognition";

import FooterSection from "~/app/_components/footer1";
import YourJourney from "../_components/study-abroad/your-journey";


export default function AboutUs() {
    return (
        <>
        <Navigation/>
        <HeroSection/>
        <CoreValues/>
        <TimelineCarousel/>
       <FounderSection/>
       <OurTeamCarousel/>
       <EdwiseTeamSection/>
       <ServicesSection/>
       < AccreditationsGrid/>
        <MediaLogosGrid/>
    
       
       
        <YourJourney/>
    
        <FooterSection/>
        
        
        </>


    )
}