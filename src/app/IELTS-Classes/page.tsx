import Navigation from "../_components/Navigation";
import Footer from "../_components/Footer";
import HeroSection from "../_components/IELTS-Classes/Hero";
import AIEvaluationSection from "../_components/IELTS-Classes/AIEvaluationSection";
import NILAnalyticsComponent from "../_components/IELTS-Classes/ProgressBar";

const IELTSpage = () => {
    return (
        <main>
            <Navigation/>
            <HeroSection/>
            <AIEvaluationSection/>
            <NILAnalyticsComponent/>
            
            <Footer/>
        </main>
    )
}
export default IELTSpage;