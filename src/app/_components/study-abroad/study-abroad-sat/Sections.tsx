"use client";
import React, { useEffect, useState } from "react";
import FAQ from "../faq";

const sections = [
  { id: "section1", label: "Overview" },
  { id: "section2", label: "Pattern" },
  { id: "section3", label: "Syllabus" },
  { id: "section4", label: "Scores" },
  { id: "section5", label: "Dates" },
  { id: "section6", label: "Training" },
  { id: "section7", label: "Miscellaneous" },
  { id: "section8", label: "FAQ" },
];

const SectionNav = () => {
  const [activeSection, setActiveSection] = useState("section1");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 100; // offset for navbar

      for (let section of sections) {
        const el = document.getElementById(section.id);
        if (el && el.offsetTop <= scrollY && scrollY < el.offsetTop + el.offsetHeight) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const FrontendFAQ = [
    {
      question: "How do I register for the SAT test?",
      answer: "You can register for the SAT test online."
    },
    {
      question: "What if I need to change the date or location of my test and what is the test refund policy for SAT?",
      answer: " If you need to change the SAT Test date, time or location, you will be charged the test date change fee that is $30. If you want to cancel your SAT Exam registration it has to be done before the 5 days of the scheduled test date refund will be of $10. "
    },
    {
      question: "How often can I retake the test of SAT?",
      answer: " There are no restrictions on how often you can take the exam. There are 7 SAT test dates available per year."
    },
    {
      question: "What are the coursewares that will be provided for the SAT test prep courses?",
      answer: "The SAT exam preparation course provided by us will have the books ‘Mathematics for MBA’ by RS Agarwal and the SAT Official Guide as courseware."
    },
    {
      question: "What is the Score reporting process and score reporting cost  for SAT?",
      answer: "You can send score reports to colleges before or after test day. 4 free score reports must be used up to nine days after the test date, thereafter Extra score reporting is $12 per university."
    },
    {
      question: "WHow long does it take to get the scores of SAT? ",
      answer: " Your official score will be available in 13-14 calendar days."
    },
    {
      question: "How many hours of SAT training classes are provided? ",
      answer: "  For SAT, 100 hours of training is given."
    },
    {
      question: "What is the good score for SAT and it is scored out of how much?",
      answer: "Good Score is 1250+ out of 1600"
    },
    {
      question: "Does SAT provides disability accommodation for (physical &amp; learning disability) ?",
      answer: " Provides accomodation for all kinds of diseases and learning disability."
    }
  ]

  return (
    <>
      <section className="w-full flex  justify-center items-center mt-6 sticky top-[65px] bg-white py-2 shadow-sm z-10">
        <div className="relative flex  justify-center overflow-x-auto whitespace-nowrap gap-2 sm:gap-3 px-2 scroll-smooth scrollbar-hide">
          {sections.map(({ label, id }, idx) => (
            <button
              key={idx}
              onClick={() =>
                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
              }
              className={`relative px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-sm flex-shrink-0 transition duration-300 border ${activeSection === id
                ? ' bg-blue-900 text-white shadow'
                : 'bg-blue-50 text-gray-700  hover:bg-blue-100'
                }`}
            >
              {label}
            </button>
          ))}
        </div>
      </section>

      <section id="section1" className="py-12 px-4 md:px-8 lg:px-16 bg-white scroll-mt-32">
        <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          SAT <span className="text-red-600">Overview</span>
        </div>

        <div className="text-gray-700 text-base md:text-lg mb-6">
          <p>
            The Scholastic Aptitude Test is{" "}
            <strong className="text-black">a multiple-choice, computer-based test created and administered by the College Board</strong>.
            The purpose of the SAT is to measure a high school student's readiness for college, and provide colleges
            with one common data point that can be used to compare all applicants.
          </p>
        </div>

        <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 mb-2">Ways to take SAT Exam</h3>

        <div className="text-gray-700 text-base md:text-lg">
          <p>
            The SAT exam in India is digitalised and is conducted only seven months in a year. Initially, the SAT exam
            was a <strong className="text-black">pencil-paper test</strong>, but last year College Board scrapped this format and introduced a
            new version of the SAT, which is now known as the <strong className="text-black">SAT Digital Exam</strong> and is being conducted
            at various test locations.
          </p>
        </div>
      </section>

      <section id="section2" className="py-8 px-4 md:px-8 lg:px-16 bg-white">
        <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          SAT <span className="text-red-600">Pattern</span>
        </div>

        <div className="text-black text-lg md:text-xl mb-4">
          <p>Computer Based (Digital)</p>
        </div>

        <h4 className="text-lg md:text-xl font-semibold text-blue-700 mb-4">
          SAT consists of two components
        </h4>

        <div className="overflow-x-auto mb-6">
          <table className="min-w-full table-auto border-collapse rounded-lg overflow-hidden">
            <thead className="bg-blue-700 text-white">
              <tr>
                <th className="px-4 py-3 md:px-6 md:py-4 text-left font-semibold">Component</th>
                <th className="px-4 py-3 md:px-6 md:py-4 text-left font-semibold">Time Allotted</th>
                <th className="px-4 py-3 md:px-6 md:py-4 text-left font-semibold">Questions/Tasks</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="px-4 py-3 md:px-6 md:py-4" data-label="Component">Reading and Writing</td>
                <td className="px-4 py-3 md:px-6 md:py-4" data-label="Time Allotted">64 (two 32-minute modules)</td>
                <td className="px-4 py-3 md:px-6 md:py-4" data-label="Questions/Tasks">54</td>
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                <td className="px-4 py-3 md:px-6 md:py-4 font-medium" data-label="Component">Break</td>
                <td className="px-4 py-3 md:px-6 md:py-4 text-center" colSpan={2} data-label="Time Allotted & Questions/Tasks">10 Minutes</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="px-4 py-3 md:px-6 md:py-4" data-label="Component">Math</td>
                <td className="px-4 py-3 md:px-6 md:py-4" data-label="Time Allotted">70 (two 35-minute modules)</td>
                <td className="px-4 py-3 md:px-6 md:py-4" data-label="Questions/Tasks">44</td>
              </tr>
              <tr className="bg-gray-100 font-semibold hover:bg-gray-200">
                <td className="px-4 py-3 md:px-6 md:py-4" data-label="Component">Total</td>
                <td className="px-4 py-3 md:px-6 md:py-4" data-label="Time Allotted">134</td>
                <td className="px-4 py-3 md:px-6 md:py-4" data-label="Questions/Tasks">98</td>
              </tr>
              <tr className="bg-gray-100 font-semibold hover:bg-gray-200">
                <td className="px-4 py-3 md:px-6 md:py-4" data-label="Component"></td>
                <td className="px-4 py-3 md:px-6 md:py-4" data-label="Time Allotted">Duration 2 hours 14 minutes</td>
                <td className="px-4 py-3 md:px-6 md:py-4" data-label="Questions/Tasks"></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="text-gray-700 text-base md:text-lg">
          <p>
            Most of the questions are multiple choice, though some of the math
            questions ask you to enter the answer rather than select it.
          </p>
        </div>
      </section>

      <section id="section3" className="py-8 px-4 md:px-8 lg:px-16 bg-white">
        <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          SAT <span className="text-red-600">Syllabus</span>
        </div>

        <h4 className="text-lg md:text-xl font-semibold text-blue-700 mb-3">
          The Reading and Writing Section:
        </h4>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>
            It contains reading passages (or passage pairs) ranging from 25 to
            150 words followed by a single MCQ.
          </li>
          <li>
            It covers four domains – <strong className="text-black">Craft and Structure, Information and Ideas, Standard English Conventions,</strong> and <strong>Expression of Ideas</strong>.
          </li>
          <li>
            The test is divided into 2 modules, each of which includes questions
            from all four different domains.
          </li>
          <li>
            Passages represent the subject areas of literature, history/social
            studies, the humanities, and science.
          </li>
        </ul>

        <h4 className="text-lg md:text-xl font-semibold text-blue-700 mb-3">
          The Math Section:
        </h4>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            The Math section focuses on: <strong className="text-black">Algebra, Problem Solving and Data Analysis, Geometry and Trigonometry</strong>.
          </li>
          <li>This section is also divided into 2 modules.</li>
        </ul>
      </section>

      <section id="section4" className="py-8 px-4 md:px-8 lg:px-16 bg-white">
        <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          SAT <span className="text-red-600">Scoring</span>
        </div>

        <ul className="list-disc list-inside text-gray-700 space-y-2 text-base md:text-lg">
          <li>Your section scores are based on your performance on all test questions in the section.</li>
          <li>In the higher difficulty module you don't have to answer every question correctly to get a good score.</li>
          <li>In the easier module, you can fully demonstrate your knowledge and abilities by answering the questions correctly.</li>
          <li>Section scores range from <strong className="text-black">200 to 800</strong>, in 10-point intervals.</li>
          <li>The total score for SAT is on a <strong className="text-black">400–1600</strong> scale, also in 10-point intervals.</li>
          <li>A good score is <strong className="text-black">1250+</strong> out of 1600.</li>
        </ul>
      </section>

      <section id="section5" className="py-8 px-4 md:px-8 lg:px-16 bg-white">
        <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          SAT <span className="text-red-600">Dates</span>
        </div>

        <div className="text-gray-700 text-base md:text-lg mb-6">
          <p>
            At this time, registration is open for all students for the entire 2023–24 testing year.
            These test dates and deadlines apply to all students—U.S. and international—taking the digital SAT.
            <br /> Below are the upcoming test dates:
          </p>
        </div>

        <div className="overflow-x-auto mb-6">
          <table className="min-w-full table-auto border-collapse rounded-lg overflow-hidden">
            <thead className="bg-blue-700 text-white">
              <tr>
                <th className="px-4 py-3 md:px-6 md:py-4 text-left font-semibold">Month & Date</th>
                <th className="px-4 py-3 md:px-6 md:py-4 text-left font-semibold">Registration Deadline</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="px-4 py-3 md:px-6 md:py-4" data-label="Month & Date">Dec 7, 2024</td>
                <td className="px-4 py-3 md:px-6 md:py-4" data-label="Registration Deadline">Nov 22, 2024</td>
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                <td className="px-4 py-3 md:px-6 md:py-4" data-label="Month & Date">Mar 8, 2025</td>
                <td className="px-4 py-3 md:px-6 md:py-4" data-label="Registration Deadline">Feb 21, 2025</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="px-4 py-3 md:px-6 md:py-4" data-label="Month & Date">May 3, 2025</td>
                <td className="px-4 py-3 md:px-6 md:py-4" data-label="Registration Deadline">Apr 18, 2025</td>
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                <td className="px-4 py-3 md:px-6 md:py-4" data-label="Month & Date">June 7, 2025</td>
                <td className="px-4 py-3 md:px-6 md:py-4" data-label="Registration Deadline">May 22, 2025</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="section6" className="py-8 px-4 md:px-8 lg:px-16 bg-white">
        <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          SAT <span className="text-red-600">Training</span>
        </div>

        <h4 className="text-lg md:text-xl font-semibold text-blue-700 mb-3">
          Salient Features of SAT coaching
        </h4>

        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>100 hours of intensive and comprehensive SAT exam coaching.</li>
          <li>
            Maximum 10–15 students per batch, making the SAT exam preparation personalized.
          </li>
          <li>
            <strong className="text-black">Mathematics for MBA</strong> by RS Agarwal, <strong className="text-black">SAT Princeton</strong> and <strong className="text-black">SAT Official Guide</strong> as courseware.
          </li>
          <li>Qualified, experienced & trained faculties for conducting the SAT prep.</li>
          <li>The SAT preparation classes also include 4 full-length mock tests.</li>
          <li>Facility of shifting to any branch throughout India.</li>
          <li>We also provide SAT online coaching for the students.</li>
        </ul>

        <h4 className="text-lg md:text-xl font-semibold text-blue-700 mb-3">Timing</h4>

        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Weekdays: Tuesday to Friday, 2 hours per day</li>
          <li>Weekends: Saturday and Sunday, 4 hours per day</li>
          <li>Fast track mode: Tuesday to Sunday, 4 hours per day</li>
        </ul>
      </section>

      <section id="section7" className="py-8 px-4 md:px-8 lg:px-16 bg-white">
        <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Miscellaneous <span className="text-red-600">Details</span>
        </div>

        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li><strong className="text-black">Score Validity</strong>: 5 years</li>
          <li><strong className="text-black">Registration Mode</strong>: Online</li>
          <li><strong className="text-black">Mode of Payment</strong>: Credit card</li>
          <li><strong className="text-black">Test Administration Frequency</strong>: 5 times a year</li>
          <li><strong className="text-black">Test Repetition Policy</strong>: No restrictions</li>
          <li><strong className="text-black">Score Reporting Time</strong>: Approximately 13–14 calendar days</li>
        </ul>

        <h4 className="text-lg md:text-xl font-semibold text-blue-700 mb-3">Fees</h4>

        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong className="text-black">Test Fee</strong>: $130.98</li>
          <li><strong className="text-black">Late Fee</strong>: $34 (after missing the regular deadline)</li>
          <li><strong className="text-black">Rescheduling Fee</strong>: $30</li>
          <li><strong className="text-black">Extra Score Reporting Fee</strong>: $14</li>
        </ul>
      </section>

      <section id="section8">
        <FAQ faqs={FrontendFAQ} />
      </section>
    </>
  );
};

export default SectionNav;
