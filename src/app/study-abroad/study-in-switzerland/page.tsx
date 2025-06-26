
import NavigationSection from "~/app/_components/navigation1";
import FooterSection from "~/app/_components/footer1";
import WhyStudy from "~/app/_components/study-abroad/study-switzerland/whystudy";
import ContactFormSection from '~/app/_components/study-abroad/home/contact-form';
import Costofstudy from "~/app/_components/study-abroad/study-switzerland/costofstudy";
import Scholarships from "~/app/_components/study-abroad/study-switzerland/scholarship";
import ListOfUniversity from "~/app/_components/study-abroad/study-switzerland/listofuniversity";
import RelatedArticles from "~/app/_components/study-abroad/study-switzerland/relatedarticle";
import Herosection from "~/app/_components/study-abroad/study-switzerland/herosection";
import CareerProspectsSection from "../../_components/study-abroad/study-switzerland/careerprospe";
import MoreAbout from "~/app/_components/study-abroad/study-switzerland/moreabout";
import PopularCourses from "~/app/_components/study-abroad/study-switzerland/popularcourses";
import SuccessStories from "~/app/_components/study-abroad/study-switzerland/successstories";
import Frequently from "~/app/_components/study-abroad/study-switzerland/Frequently";
import Getready from "~/app/_components/study-abroad/study-switzerland/Getready";
const StudyInSwitzerland = () => {
  return (
    <>
      <NavigationSection />
      <Herosection /> 
      <WhyStudy />
      <ContactFormSection />
      <ListOfUniversity />
      <PopularCourses />
      <Costofstudy />
      <Scholarships />
      <CareerProspectsSection />
      <MoreAbout />
      <RelatedArticles />
      <SuccessStories />
      <Frequently />
      <Getready />
      <FooterSection />
    </>
  );
};

export default StudyInSwitzerland;

