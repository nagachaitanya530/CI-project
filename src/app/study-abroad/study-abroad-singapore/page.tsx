"use client";
import React from "react";
import HeroSection from "~/app/_components/study-abroad/study-abroad-singapore/HeroSection";
import UniversityList from "~/app/_components/study-abroad/study-abroad-singapore/UniversityList";
import CostOfStudying from "~/app/_components/study-abroad/study-abroad-singapore/CostOfStudying";
import Whystudy from "~/app/_components/study-abroad/study-abroad-singapore/Whystudy";
import ContactFormSection from '~/app/_components/study-abroad/home/contact-form';
import ScholarshipsSection from "~/app/_components/study-abroad/study-abroad-singapore/ScholarshipsSection";
import PopularCoursesSection from "~/app/_components/study-abroad/study-abroad-singapore/PopularCoursesSection";
import CareerProspectSection from "~/app/_components/study-abroad/study-abroad-singapore/CareerProspectSection";
import SuccessStories from "~/app/_components/study-abroad/study-abroad-singapore/SuccessStories";
import NavigationSection from "~/app/_components/navigation1";
import FooterSection from "~/app/_components/footer1";
import FAQ from "~/app/_components/study-abroad/faq";
import YourJourney from "~/app/_components/study-abroad/your-journey";



const FrontendFAQ = [
  {
    question: "Are international students allowed to work part-time?",
    answer: "Yes but only public universities allow part-time study options, providing flexibility for students to balance their education with other commitments."
  },
  {    
    question: "What are the best courses to study in singapore for Indian students?",
    answer: "The best courses to study are engineering, management, and law. Singapore is home to same of the world's leading universities. As one of India's leading Singapore education consultants, we can guide you into selecting the perfect course and university."
  },
  {
    question:"Is IELTS manadatory in Singapore?",
    answer: "No, IELTS is not mandatory if enrolled in professional courses like nursing, management, design, etc."
  },
  { 
    question:"What would be the living cost in Singapore?",
    answer: "The living cost on an average would be SG$ 15K to SG$ 20K per year"
  },
  {
    question:"What is the cost od studying Master's in Singapore for Indian students?",
    answer:"There are plenty of internationally recognized courses in Singapore for pursuing your Master's and they usally cost between SGD 25,0000 - 55,000 per year."
  },
  {
    question:"How can a student arrange for accommodation?",
    answer: "There is a wide variety of accommodation options in Singapore that are suitable for different budgests and needs. Student should make arrangements before their arrival. Temporary accommodation can be arranged giving the student more time to settle. The student can seek the help of the international Student Officer available at most institudes. some of the housing options available include residence halls, private hostels, homestays, public and private apartments."
  }
  ];




function SingaporePage() {

  const articles = [
  { title: "Top Colleges in Singapore", url: "https://www.edwiseinternational.com/blogs/study-in-top-colleges-in-singapore-march-2015.html" },
  { title: "The Best of Singapore Colleges and Universities", url: "https://www.edwiseinternational.com/blogs/the-best-of-singapore-colleges-universities-july-2016.html" },
  { title: "Business Management in Singapore", url: "https://www.edwiseinternational.com/blogs/study-business-management-in-singapore.html" },
  { title: "Best Under graduation Courses in Singapore", url: "https://www.edwiseinternational.com/blogs/best-under-graduation-courses-in-singapore.html" },
  { title: "IT and Computer Science in Singapore", url: "https://www.edwiseinternational.com/blogs/All-About-Pursuing-IT-and-Computer-Science-in-Singapore.html" },
  { title: "Engineering in Singapore", url: "https://www.edwiseinternational.com/blogs/All-You-Need-To-Know-About-Pursuing-Engineering-in-Singapore.html" },
  { title: "Environmental Science Degree from Singapore", url: "https://www.edwiseinternational.com/blogs/Fly-High-With-an-Environmental-Science-Degree-from-Singapore.html" },
  { title: "Architectural Degree in Singapore", url: "https://www.edwiseinternational.com/blogs/Advance-Your-Career-With-an-Architectural-Degree-from-Singapore.html" },
  { title: "Hospitality and Tourism Degree in Singapore", url: "https://www.edwiseinternational.com/blogs/Know-It-All-About-Pursuing-Hospitality-and-Tourism-in-Singapore.html" },
  { title: "Study in Singapore - FAQs", url: "https://www.edwiseinternational.com/blogs/frequently-asked-questions-about-study-in-singapore.html" },
  { title: "Singapore Study Visa", url: "https://www.edwiseinternational.com/blogs/know-about-singapore-study-visa.html" },
  { title: "Study Marine Biology in Singapore", url: "https://www.edwiseinternational.com/blogs/know-all-about-marine-biology-in-singapore.html" },
  { title: "Study Designing Courses in Singapore", url: "https://www.edwiseinternational.com/blogs/know-all-about-studying-designing-in-singapore.html" },
  { title: "Reasons to Study Diploma in Singapore", url: "https://www.edwiseinternational.com/blogs/reasons-to-study-diploma-in-singapore.html" },
  { title: "UG & PG Courses in Singapore", url: "https://www.edwiseinternational.com/blogs/understanding-ug-pg-structure-in-singapore-december-2015.html" },
  { title: "Universities in Singapore for International Students", url: "https://www.edwiseinternational.com/blogs/universities-in-singapore-for-international-students.html" },
  { title: "Study Hospitality Courses in Singapore", url: "https://www.edwiseinternational.com/blogs/hospitality-in-singapore-december-2014.html" },
];


  return (
    <>
    <NavigationSection/>
    <HeroSection/>
    <Whystudy/>
    <ContactFormSection />
    <UniversityList/>
    <PopularCoursesSection/>
    <CostOfStudying/>
    <ScholarshipsSection/>
    <CareerProspectSection/>


    <section>
      <>
        <div
      className="comm-section mb-12 py-10 "
      data-aos="fade-in"
      data-duration="200"
    >
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-6">
          <span className="text-blue-600">Related Articles</span> on Studying in Singapore
        </h3>

        <div className="bg-gray-400 text-gray-700 rounded-sm space-y-2 max-w-6xl mx-auto text-center-justify text-sm sm:text-base">
          {articles.map((article, index) => (
            <span key={index}>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {article.title}
              </a>
              {index < articles.length - 1 && " | "}
            </span>
          ))}
        </div>
      </div>
    </div>
      </>
    </section>

    <SuccessStories/>
    <FAQ faqs={FrontendFAQ} />
    <YourJourney/>
    <FooterSection/>
       
      </>
  );
}
export default SingaporePage;