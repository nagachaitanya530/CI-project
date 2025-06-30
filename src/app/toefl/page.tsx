import FooterSection from "../_components/footer1";
import NavigationSection from "../_components/navigation1";
import YourJourney from "../_components/study-abroad/your-journey";
import HeroBanner from "../_components/toefl/HeroBanner";
import StickySectionNav from "../_components/toefl/StickySectionNav";
import TOEFLDates from "../_components/toefl/TOEFLDates";
import TOEFLFAQs from "../_components/toefl/TOEFLFAQs";
import TOEFLMisc from "../_components/toefl/TOEFLMisc";
import TOEFLOutline from "../_components/toefl/TOEFLOutline";
import TOEFLPattern from "../_components/toefl/TOEFLPattern";
import TOEFLScores from "../_components/toefl/TOEFLScores";
import TOEFLSyllabus from "../_components/toefl/TOEFLSyllabus";
import TOEFLTraining from "../_components/toefl/TOEFLTraining";
import SuccessStories from "../_components/usa/SuccessStories";

export default function TOEFLPage() {
  return (
    <>
      <NavigationSection />
      <HeroBanner />
      <StickySectionNav />
      <TOEFLOutline />
      <TOEFLPattern />
      <TOEFLSyllabus />
      <TOEFLScores />
      <TOEFLDates />
      <TOEFLTraining />
      <TOEFLMisc />
      <TOEFLFAQs />
      <SuccessStories />
      <YourJourney />
      <FooterSection />
    </>
  );
}
