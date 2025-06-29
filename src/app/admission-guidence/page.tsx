import FooterSection from "~/app/_components/footer1";
import YourJourney from "~/app/_components/study-abroad/your-journey";
import HeroSection from "../_components/admission-guidence/Hero";
import Second from "../_components/admission-guidence/Second"
import Navigation from "../_components/navigation1";
export default function admission_guidence() {
  return (
    <> 
      <Navigation />
       < HeroSection />
       < Second />
      <YourJourney />
    <FooterSection />
    </>
  );
}