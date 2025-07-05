import FooterSection from "../_components/footer1";
import NavigationSection from "../_components/navigation1";
import ForexAssistance from "../_components/travel_and_forex_assistance/ForexAssistance";
import HeroBanner from "../_components/travel_and_forex_assistance/HeroBanner";
import TravelAssistance from "../_components/travel_and_forex_assistance/TravelAssistance"; // ✅ Your section component
import JourneyCTA from "../_components/usa/FinalCTASection";

export default function TravelForexPage() {
  return (
    <>
      <NavigationSection />
      <HeroBanner />
      <TravelAssistance />
      <ForexAssistance />
      <JourneyCTA />
      <FooterSection />
    </>
  );
}
