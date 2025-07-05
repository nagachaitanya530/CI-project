
import LanguageLandingPage from "./_components/home/Home";
import Hero from "./_components/Hero";
import LeadCaptureModal from "./LeadCaptureModal";
import Footer from "./_components/Footer";
import Navigation from "./_components/Navigation";



export default function Home() {
  return (
    <>
      <div className="relative z-0 min-h-screen bg-white text-black">

        <Navigation />
        <Hero />
        <LanguageLandingPage />
        <Footer />
        <LeadCaptureModal />
      </div>

    </>
  );
}
