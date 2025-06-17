
import Footer from "../_components/Footer";
import Navigation from "../_components/Navigation";
import HeroSection from "../_components/Free-Consultancy/HeroSection";
import ProcessSection from "../_components/Free-Consultancy/ProcessSection";
import TimelineSection from "../_components/Free-Consultancy/TimelineSection";
import ConsultationSection from "../_components/Free-Consultancy/ConsultationSection";


export default function EnglishFoundationCourse() {
  return (
    <>
      <Navigation />
        <HeroSection/>
         <ConsultationSection/>
         <ProcessSection/>
           <TimelineSection/>
          
      <Footer />
    </>
  );
}