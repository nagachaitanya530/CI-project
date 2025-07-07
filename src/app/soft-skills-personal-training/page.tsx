'use client'
import { useState } from "react";
import Navigation from "../_components/Navigation";
import { title } from "process";
import About from "../soft-skills-personal-training/About"
import Curriculum from "./Curriculam";
import EnrollmentOption from "./Enrollment";
import Instructor from "./instructors";
import Footer from "../_components/Footer";







function SoftskillPesronTraining() {

  const [activeTab, setActiveTab] = useState('About');

  const tabs = ["About", "Curriculum", "Instructors", "Enrolment Options"];
  const handleWhatsApp = () => {
    window.open('https://wa.me/917607676998?text=I%20want%20to%20enquire%20about%20PDCC%20Spoken%20English%20course', '_blank');
  };

  return (

    <div>
      <Navigation></Navigation>

      {/* Hero Section */}

      <section className="bg-gradient-to-r from-blue-700 via-purple-600 to-red-800 text-white px-4 py-10 lg:flex items-center">
        {/* Text Side */}
        <div className="flex justify-center">
          <div className="text- mt-5 ml-30">
            <div className=" flex justify-start h-10">
              <img
                src="../../british.webp"
                alt="British Council"
              />
            </div>
            <h1 className="text-4xl font-bold mb-4 text-justify ">Soft Skills and Personal Training</h1>
            <p className="text-lg-max-w-xl">
              Soft Skills Training is a supplemental course to Foundation English <br />
              Course that focuses on efficient communication. <br />
              (For CEFR Level B1 and above)
            </p>
          </div>

        </div>
        {/* Video Side */}
        <div className="lg:w-1/2 relative">
          <div className="aspect-video w-full max-w-xl mx-auto">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/PHSNcKCAJrE"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"

            ></iframe>
          </div>
        </div>
      </section>
      {/* Features Section */}
      {/* <section className="flex justify-around items-center p-6 bg-gray-100 text-center"> */}
      <section className="bg-gray-100 py-6 px-4 flex flex-col md:flex-row justify-around text-center gap-4">
        <div>
          <div className="text-xl font-bold">12 Week </div>
          <p className="text-sm">5-7 Hours/week </p>
        </div>
        <div>
          <div className="text-xl font-bold">1:1 Training</div>
          <p className="text-sm">Fully Customized</p>
        </div>
        <div>
          <div className="text-xl font-bold">Certification</div>
          <p className="text-sm">After Course</p>
        </div>
      </section>


      {/* tab secton */}


      <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Left Content */}
        <div className="md:col-span-2 bg-white rounded-xl  p-4 shadow-xl/50">
          <div className="flex-wrap space-x-10 border-b border-gray-300 pb-2 gap-4">
            {/* Tabs */}
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-lg font-semibold ${activeTab === tab
                  ? "text-blue-700"
                  : "text-pink-600"
                  }`}
              >
                {tab}
              </button>
            ))}

          </div>


          <div className="mt-5">
            {activeTab === "About" && <About />}
            {activeTab === "Curriculum" && <Curriculum />}
            {activeTab === "Instructors" && <Instructor />}
            {activeTab === "Enrolment Options" && <EnrollmentOption />}

          </div>
        </div>

        {/* Right Card */}
        <div>
          <div className="bg-[#7B61FF] w-80 h-120 text-white shadow-lg flex flex-col items-center text-center">
            <img
              src="../../cardimage.webp"
              alt="Foundation Course"
              className="w-full  object-cover mb-4"
            />
            <h2 className="text-3xl font-bold">Looking for <br />something basic?</h2>
            <p className="text-sm mt-2 mb-4">
              Join our Foundation English course for just Rs.4990 per month with expert certified trainers.
            </p>
            <button className="border border-white px-6 py-2 rounded hover:bg-white hover:text-[#7B61FF] transition"
            >
              CLICK HERE
            </button>
          </div>
          <div className="bg-[#7B61FF] w-80 h-70 text-white p-6 shadow-lg rounded-lg flex flex-col items-center justify-center text-justify mt-5">
            <div className="flex flex-col items-start space-y-4">
              <h1 className="text-xl font-bold">Not sure what to do?</h1>
              <p className="text-sm mt-2 mb-4 text-justify">
                Talk to our student counsellor for<br /> more details on our courses and<br /> choose the one that suits you <br />best.
              </p>
              <button className="bg-white hover:bg-white text-black text-lg px-6 py-3" onClick={handleWhatsApp}>
                Call Now
              </button>




            </div>
          </div>
        </div>

      </div>

      <section className="py-10 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-6">What Our Learners Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-100 p-4 rounded-lg shadow">
              <p className="italic">"This course changed my confidence level completely!"</p>
              <p className="mt-2 font-semibold">– Aarti,Student</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow">
              <p className="italic">"The mock interviews and sessions helped me land a job."</p>
              <p className="mt-2 font-semibold">– Raj,Job Seeker</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow">
              <p className="italic">"I learned how to lead meetings and communicate better."</p>
              <p className="mt-2 font-semibold">– Sneha,Working Professional</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Options */}
      <section className="bg-blue-800 text-white py-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="mb-6 text-lg">Book a free demo session or contact us to know more.</p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-blue-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
              Book Demo
            </button>
            <button className="bg-transparent border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-800 transition">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <Footer />

    </div>
  );
}

export default SoftskillPesronTraining;