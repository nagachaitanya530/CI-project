import Navigation from "./_components/Navigation";
import Footer from "./_components/Footer";


import Hero from "./_components/Hero";

import LanguageLandingPage from "./_components/Home";


export default function Home() {
  return (
    <>
      <Navigation />

      <Hero />
      {/* <LanguageLandingPage /> */}

      <LanguageLandingPage />
      

      <Footer />
    </>
  );
}
