import HeroSection from "../_components/foreign-languages/HeroSection";

import Navigation from "../_components/Navigation";
import Footer from "../_components/Footer";

import LanguageCourses from "../_components/foreign-languages/LanguageCourses";
import WhyChooseUs from "../_components/foreign-languages/Whyschoose";
import LearnWithConfidence from "../_components/foreign-languages/LearnConfidence";
import ForeignLanguageBenefits from "../_components/foreign-languages/ForiegnLanguageBen";
import LanguageCard from "../_components/foreign-languages/Languagecard";

import BenefitsSection from "../_components/foreign-languages/Benfits";

const ForeignLanguagesPage = () => {
    return (
        <main>
            <Navigation />
            <HeroSection />
            <LanguageCourses />
            <WhyChooseUs />
            <BenefitsSection />
            <LanguageCard />
            <LearnWithConfidence />
            <ForeignLanguageBenefits />
            <Footer />
        </main>
    )
}
export default ForeignLanguagesPage;