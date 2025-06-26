import FooterSection from "~/app/_components/footer1";
import YourJourney from "~/app/_components/study-abroad/study_in_malaysia/YourJourney";
import Faq from "../_components/career-counseling/FAQ";
import DetailedTestReport from "../_components/career-counseling/TestReport";
import ProcessOfTesting from "../_components/career-counseling/ProcessOfTesting";
import TypesOfAptitude  from  "../_components/career-counseling/TypesOfAptitude";
import HeroSection from "../_components/career-counseling/Hero";
import ImportanceSection from "../_components/career-counseling/ImportanceOfAptitude";

export default function career_counseling() {
  return (
    <> 
   
        <HeroSection />
         <ImportanceSection />
        <TypesOfAptitude />
        <ProcessOfTesting />
        <DetailedTestReport/>
       <Faq />
      <YourJourney />
    <FooterSection />
    </>
  );
}