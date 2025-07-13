import FooterSection from "~/app/_components/footer1";
import NavigationSection from "~/app/_components/navigation1";
import DuolingoInfo from "~/app/_components/duolingo/HeroBanner";
import ScrollableTabs from "~/app/_components/duolingo/ScrollingSection";
import DuolingoTest from "~/app/_components/duolingo/OverviewSection";

import FAQ from "~/app/_components/study-abroad/faq";
import SuccessStories from "~/app/_components/dubai/SuccessStories";

import YourJourney from "~/app/_components/study-abroad/your-journey";



const IndiaFAQs = [
  {
    question: "How do I prepare for the Duolingo English Test?",
    answer: "Edwise provides comprehensive coaching for Duolingo English Test preparation which covers all the aspects of the test which are Literacy, Comprehension, Conversation and Production Skills."

  },
  {
    question: "Does Edwise provide mock tests to prepare for the Duolingo English Test?",
    answer: "Yes, during the entire duration of the Duolingo preparation training provided by Edwise, a Duolingo mock test is conducted every 8th day of the training."
  },
  {
    question: "Do I need to go to a test centre to give the test?",
    answer: "No, the Duolingo English Test is taken entirely online, so you can take it from anywhere with a computer and internet connection."
  },
  {
    question: "Do I need access to camera to appear for the test?",
    answer: "Yes, you need access to a camera and microphone for the Duolingo English Test."
  },
  {
    question: "What documents do I need to appear for the Duolingo English Test?",
    answer: "For the Duolingo English Test, you typically only need a government-issued photo ID to verify your identity, like a valid passport, driver's license, etc."
  },
  {
    question: "Is Duolingo English Test accepted for visa?",
    answer: "Yes, the Duolingo English Test is accepted for visa applications in certain countries and by some institutions. However, it's essential to check the specific requirements of the country or institution where you plan to use the test results."
  },

];







export default function duolingo() {
  return (
    <>

      <NavigationSection />
      < DuolingoInfo />
      <ScrollableTabs />
      <DuolingoTest />

      <div id="faq">
        <FAQ faqs={IndiaFAQs} title="FAQs" />
      </div>

      <SuccessStories />
      <YourJourney />

      <FooterSection />



    </>
  )
}