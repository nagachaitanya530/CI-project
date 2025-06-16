import Link from "next/link";
import Footer from "../_components/Footer";
import Navigation from "../_components/Navigation";
import HeroSection from "../_components/english-business-course/HeroSection";
import AboutPage from "../_components/english-business-course/AboutPage";
import Curriculum from "../_components/english-business-course/Curriculum";
import Testimonial from "../_components/english-business-course/Tesimonial";
import ScheduleAndPricing from "../_components/english-business-course/ScheduleAndPricing";
import Features from "../_components/english-business-course/Features";
import LearnerPersonas from "../_components/english-business-course/LearnerPersonas";
import CTA from "../_components/english-business-course/CTA";
import ReviewPage from "../_components/english-business-course/ReviewPage";
import CEFRProgress from "../_components/english-business-course/DonutChartCard";
import TrackPackege from "../_components/english-business-course/TrackPackege";

function EnglishBusinessCourse() {


    return (
        <div>
            <Navigation />
             <section className="px-4 md:px-1 lg:px-20 xl:px-40">

        <div className=" flex py-1 md:px-10 lg:px-10 ">
          <img className="h-5 w-5" src="https://p.kindpng.com/picc/s/82-822718_transparent-mobile-home-clipart-mobile-home-icon-png.png" alt="" />
          <p>&gt; Courses &gt; IELTS Courses &gt; IELTS Foundation</p>
        </div>
      </section>
         <HeroSection/>

            
      {/* Nav Bar After Hero Section */}
      <section className="sticky top-16">
        <div className="hidden lg:flex items-center space-x-6 h-15  bg-white shadow-md z-10 md:pl-50">

          <Link href="#about" className="px-4 py-2 bg-gray-200 text-gray-800 hover:bg-gray-300 hover:text-blue-500 transition-all duration-300">About</Link>
          <Link href="#curriculum" className="px-4 py-2 bg-gray-200 text-gray-800 hover:bg-gray-300 hover:text-blue-500 transition-all duration-300">Curriculum</Link>
          <Link href="#feature" className="px-4 py-2 bg-gray-200 text-gray-800 hover:bg-gray-300 hover:text-blue-500 transition-all duration-300">Features</Link>
          <Link href="#schedule" className="px-4 py-2 bg-gray-200 text-gray-800 hover:bg-gray-300 hover:text-blue-500 transition-all duration-300">Schedule</Link>
          <Link href="#enroll" className="px-4 py-2 bg-gray-200 text-gray-800 hover:bg-gray-300 hover:text-blue-500 transition-all duration-300">Enrollment</Link>
          <Link href="#testimonial" className="px-4 py-2 bg-gray-200 text-gray-800 hover:bg-gray-300 hover:text-blue-500 transition-all duration-300">Testimonials</Link>
        </div>
      </section>


            <div className="px-4 md:px-1 lg:px-20 xl:px-50">

        <AboutPage/>
        <LearnerPersonas/>
        <Curriculum/>
        <CEFRProgress />
        <Features/>
        <ScheduleAndPricing/>
        <CTA/>
        <Testimonial/>
        <ReviewPage/>
        <TrackPackege/>

            </div>   {/* main div */}
            <Footer />
        </div>
    );
}

export default EnglishBusinessCourse;