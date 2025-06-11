import Footer from "~/app/_components/Footer";
import Navigation from "~/app/_components/Navigation";
import HeroSection from "../_components/english-foundation-course/HeroSection";
import AboutSection from "../_components/english-foundation-course/AboutSection";
import TargetLearners from "../_components/english-foundation-course/TargetLearners";
import SkillsCovered from "../_components/english-foundation-course/SkillsCovered";
import Benefits from "../_components/english-foundation-course/Benefits";
import StickyEnrollBar from "../_components/english-foundation-course/StickyEnrollBar";


export default function EnglishFoundationCourse() {
  return (
    <>
      <Navigation />
        <HeroSection />
        <AboutSection />
        <TargetLearners />
        <SkillsCovered />
        <Benefits />
        <StickyEnrollBar />
      <Footer />
    </>
  );
}