import Link from "next/link";
import Footer from "../../_components/Footer";
import Navigation from "../../_components/Navigation";
import HeroSection from "../../_components/fees-ieltssuperfast/HeroSection";
import About from "../../_components/fees-ieltssuperfast/About";
import { Check, CheckCircle } from "lucide-react";
import Curriculum from "../../_components/fees-ieltssuperfast/Curriculum";
import CEFRProgress from "../../_components/fees-ieltssuperfast/DonutChartCard";
import Testimonial from "../../_components/fees-ieltssuperfast/Testimonial";
import ReviewPage from "../../_components/english-business-course/ReviewPage";
import AdditionalFacilities from "../../_components/fees-ieltssuperfast/AdditionalFacilities";
import Enrollment from "../../_components/fees-ieltssuperfast/Enrollment";

function EnglishBusinessCourse() {


    return (
        <div>
            <Navigation />
             <section className="px-4 md:px-1 lg:px-20 xl:px-40">

        <div className=" flex py-1 md:px-10 lg:px-10 ">
          <img className="h-5 w-5" src="https://p.kindpng.com/picc/s/82-822718_transparent-mobile-home-clipart-mobile-home-icon-png.png" alt="" />
          <p>&gt; Fees &gt; IELTS GENERAL PACKAGE &gt; IELTS TURBO</p>
        </div>
      </section>
         <HeroSection/>

            
      {/* Nav Bar After Hero Section */}
      <section className="sticky top-16">
        <div className="hidden lg:flex items-center space-x-6 h-15  bg-white shadow-md z-10 md:pl-50">

          <Link href="#about" className="px-4 py-2 bg-gray-200 text-gray-800 hover:bg-gray-300 hover:text-blue-500 transition-all duration-300">About</Link>
          <Link href="#curriculum" className="px-4 py-2 bg-gray-200 text-gray-800 hover:bg-gray-300 hover:text-blue-500 transition-all duration-300">Curriculum</Link>
         <Link href="#outcome" className="px-4 py-2 bg-gray-200 text-gray-800 hover:bg-gray-300 hover:text-blue-500 transition-all duration-300">Outcome</Link>
          <Link href="#testimonial" className="px-4 py-2 bg-gray-200 text-gray-800 hover:bg-gray-300 hover:text-blue-500 transition-all duration-300">Testimonials</Link>
          <Link href="#addition" className="px-4 py-2 bg-gray-200 text-gray-800 hover:bg-gray-300 hover:text-blue-500 transition-all duration-300">Additional Facilities</Link>
          <Link href="#enroll" className="px-4 py-2 bg-gray-200 text-gray-800 hover:bg-gray-300 hover:text-blue-500 transition-all duration-300">Enrollment</Link>
        </div>
      </section>


            <div className="px-4 md:px-1 lg:px-20 xl:px-50">

        <About />
       
        <Curriculum/>

   {/* after the curriculum static data */}

          <section className="border rounded-2xl mt-16 p-5 min-h-[24rem]">
            <div className="flex flex-col md:flex-row items-center justify-between gap-10">

              {/* Left Section */}
              <div className="md:w-1/2 p-5">
                <h1 className="mb-3 font-bold text-3xl">
                  Join industry-leading course
                </h1>
                <p className="text-gray-500 text-sm">
                  National Institute of Language provides top quality trainers with updated curriculum for best outcomes.
                </p>
                <ul className="list-disc list-inside text-gray-500 text-sm mt-5 space-y-2">
                  <li>Learn from British Council and Cambridge certified trainers.</li>
                  <li>Engage in conversation activities with trainers and other students to improve your fluency.</li>
                  <li>Get proper assessment and detailed feedback on your performance.</li>
                  <li>Engage in community activities to make connections for your future study, professional and Migration programmes.</li>
                </ul>
              </div>

              {/* Right Section */}
              <div className="md:w-2/5 flex flex-col border rounded-2xl">
                <img
                  src="/home/woman-laptop.jpg"
                  alt="Static"
                  className="rounded-t-2xl mb-6 w-full h-64 object-cover"
                />

                <div className="flex flex-col sm:flex-row justify-between gap-2 p-5 text-center">
                  {/* Students Trained */}
                  <div>
                    <h2 className="text-xl font-bold text-gray-800">60000+</h2>
                    <p className="text-gray-500 text-sm">
                      <strong>Students</strong> trained over the years
                    </p>
                  </div>

                  {/* Certificates */}
                  <div>
                    <h2 className="text-xl font-bold text-gray-800">19000+</h2>
                    <p className="text-gray-500 text-sm">
                      British Council Certificates <b>and counting</b>
                    </p>
                  </div>

                  {/* Success Rate */}
                  <div>
                    <h2 className="text-xl font-bold text-gray-800">95%</h2>
                    <p className="text-gray-500 text-sm">
                      Success rate in <b>industry leaders</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>


        <CEFRProgress />
        
         <section>
            <div className=" my-12 max-w-7xl mx-auto text-gray-800">
              <div className=" flex flex-col md:flex-row gap-10 md:gap-15 text-gray-800">
                <h2 className="text-3xl font-semibold text-center mb-0 md:mb-12 mr-10">
                  Get exclusive access to career resources
                </h2>

                {/* Services Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">

                  <div className="flex flex-col w-2/3 ">
                    <div className="text-2xl md:text-3xl pb-5">📄</div>
                    <h3 className="text-base font-semibold">Resume Review</h3>
                    <p className="text-sm text-gray-600 pb-5 md:pb-2">
                      Get your resume reviewed for job applications.
                    </p>
                  </div>

                  <div className="flex flex-col w-2/3 ">
                    <div className="text-2xl md:text-3xl pb-5">📘</div>
                    <h3 className="text-base font-semibold">Application Support</h3>
                    <p className="text-sm text-gray-600 pb-5 md:pb-2">
                      Get support for choosing and applying for different colleges and universities.
                    </p>
                  </div>

                  <div className="flex flex-col w-2/3">
                    <div className="text-2xl md:text-3xl pb-5">✈️</div>
                    <h3 className="text-base font-semibold">Visa Support</h3>
                    <p className="text-sm text-gray-600 pb-5 md:pb-2">
                      Get assistance in getting a visa and for Visa interview.
                    </p>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <hr className="my-8 border-gray-300" />

              {/* Universities Section */}
              <div className="flex flex-col  md:flex-row ">
                <p className="font-semibold text-lg mb-6 w-2/6">
                  Get access to more than 4000 International universities and colleges
                </p>
                <div className="flex justify-center items-center gap-0 md:gap-3">
                  <img
                    src="https://nationalinstituteoflanguage.in/wp-content/uploads/2023/08/International-Foundation-Year-Uni-Logo-Bar-01-1.png"
                    alt="Sheffield Hallam University"
                    className="h-15 object-contain"
                  />
                </div>
              </div>
            </div>
          </section>
       <Testimonial/>
        <ReviewPage/>
        <AdditionalFacilities/>
        <Enrollment/>

            </div>   {/* main div */}
            <Footer />
        </div>
    );
}

export default EnglishBusinessCourse;