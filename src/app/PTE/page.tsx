
import FAQ from "../_components/study-abroad/faq";
import NavigationSection from "../_components/navigation1";
import SuccessStories from "../_components/dubai/SuccessStories";
import YourJourney from "../_components/study-abroad/your-journey";
import FooterSection from "../_components/footer1";
import Dummy from "../_components/dummy";


import Link from 'next/link';
// import Image from 'next/image';

function Celpip(){

    const faqs = [
        {
            question: "In which format universities accept PTE result?",
            answer: "Universities accept PTE result through the official PTE portal (www.pearsonpte.com) or through student’s Score Report Code, which is a unique id. It must be kept in mind that universities do not accept the hard copy or pdf version of student’s PTE scorecard. You can directly e-mail this score report from your account on PearsonPTE website to universities and colleges.",
        },
        {
            question: "Will the PTE score card be e-mailed to me or sent by courier in form of hard copy ?",
            answer: "Your score card will become available to you through your “mypte” account on PearsonPTE website. It is not e-mailed to you directly nor any hard copy is sent.",
        },
        {
            question: "What is Competent, Good and Excellent PTE score ?",
            answer: "Competent PTE Score - above 60  Good PTE Score – beween 65 -75 Excellent PTE Score - above 75",
        },
        {
            question: "How can I get started with your PTE test preparation coaching?",
            answer: "Contact us or visit any of our offices near you to get all the information you require about PTE preparation.",
        },
        {
            question: "How do I prepare for PTE exam ?",
            answer: "Edwise’s PTE classes provide 30 hours of intensive training for clearing the PTE exam.",
        },
      
    ]
    
    return(
        
        <>

        <NavigationSection/>
        

        



 <div className="bg-white">
      {/* Breadcrumb Navigation */}
      <nav className="text-sm text-gray-600 px-6 md:px-16 pt-6 pb-2">
        <Link href="/" className="hover:underline">Home</Link> &nbsp;&gt;&nbsp;
        <Link href="/test-preparation" className="hover:underline">Test Preparation</Link> &nbsp;&gt;&nbsp;
        <span className="text-blue-800 font-bold">PTE</span>
      </nav>
      </div>
      <br />
      

        {/* HERO */}
        <div className="flex flex-row items-center  justify-between  border-2 bg-blue-100 p-20 h-100">
            <div className="grid ">
                <h1 className="font-bold text-4xl text-blue-900 mb-5">PTE-2025</h1>
                <h1 className="font-semibold  text-2xl">Test Formate:</h1>
                <p className=" text-blue-900 ">Listening, Reading, Writing, Speaking</p><br/>
                <h1 className="font-semibold text-2xl">Mode:</h1>
                <p className="mb-5 text-blue-900">Computer Based Test with headset<br /> provided at exam centre.</p>
                <button className="bg-blue-900 text-white py-3 px-6 rounded-3xl font-semibold hover:bg-white hover:text-blue-900 transition  hover:cursor-pointer duration-300">Free Expert Consultation</button>
            </div>
            <div className=" text-2xl text-blue-900 mr-60">
            <h1 className="align-center font-bold text-black">Duration:</h1>
            <p className="text-sm">3 hours (Approximately)</p>
            </div>
            <div className="text-center ">
                <img src="https://www.edwiseinternational.com/img/test-bnr-cont-img.webp" alt="study" className="w-120 h-80 justify-start   shadow-lg rounded-lg"/>
                <p><i>Last updated - 19 October '24</i></p>
            </div>
        </div>
        {/* <Hero/> */}
        <Dummy />

        {/* section */}

        {/* PTE Overview */}
        <div id="overview" className="p-20" style={{ fontFamily: "'Poppins', sans-serif" }}>
            <h1 className="font-bold text-4xl mb-5">PTE <span className="underline decoration-red-500">Overview</span></h1>
            <p className="text-[18px] text-gray-600">
            PTE (Pearson Test of English) is a globally recognized and standardised English language proficiency test that assesses an individual's communication skills. It is a computer delivered exam. Over 35,000+ universities and educational institutes across the globe rely on PTE scores for providing admissions in various degree courses. The PTE exam is accepted for study applications, work visas, immigration in US, UK,, New Zealand, Australia, Canada, UAE, Singapore, etc.
            </p>
        </div>
        
        {/* Types Of PTE Exam */}
        <div className="px-20" style={{ fontFamily: "'Poppins', sans-serif" }}>
            <h2 className="font-bold text-3xl py-2 ">Ways to take PTE exam</h2>
            <p className="text-xl">
            
            <br/>
            <span className="font-bold text-blue-900 py-2">PTE at PTE Test Center</span>
            <ul className="list-disc list-inside text-[18px] text-gray-600">
                <li>In India, there are over 62 PTE test centers which are spread across major cities.</li>
                <li>Usually no more that 10-15 test takers are allowed in a test-center.</li>
                <li>Test takers must reach the test centers 30 minutes earlier to fullfill the check-in formalities.</li>
            </ul>
            <br/>
            <span className="font-bold py-2 text-blue-900">PTE at-home Online edition</span>
            <br/>
            <ul className="list-disc list-inside text-[18px] text-gray-600">
                <li>
                    You have the option to take the PTE test exam on a computer at an authorised IELTS testing facility.

                </li>
                <li>
                   The Speaking is done in face-to-face with a qualified IELTS examiner.

                </li>
                <li>Test takers can take the exam in the comfort of their private space such as home or office, without going to the test-center.</li>
                <li>IELTS on computer results are accessible 3-5 days after the test is completed.</li>
            </ul>    
            </p>
        </div>

        
        {/* PTE Pattern */}
        <div id="pattern" className="p-20" style={{ fontFamily: "'Poppins', sans-serif" }}>
            <h1 className="font-bold text-4xl mb-5">PTE <span className="underline decoration-red-500">Pattern</span></h1>
            <div className="overflow-x-auto border-2 rounded-lg">
            <table className="min-w-full border border-gray-600 rounded-lg text-center">
                <thead className="bg-blue-900 text-white">
                    <tr className="text-lg">
                        <th className="py-3 px-6  ">Main parts : PTE Academic</th>
                        <th className="py-3 px-6 ">Time taken</th>
                        <th className="py-3 px-6 ">Number of questions</th>
                    </tr>
                </thead>
                <tbody className="text-blue-900 text-lg border ">
                    <tr className="bg-blue-50">
                        <td className="py-3 px-6 border-b border ">Personal Introduction</td>
                        <td className="py-3 px-6 border-b border-r ">1 minute</td>
                        <td className="py-3 px-6 border-b"> - </td>
                    </tr>
                    <tr>
                        <td className="py-3 px-6 border-b border-r">Part 1: Speaking & Writing</td>
                        <td className="py-3 px-6 border-b border-r ">54-67 minutes</td>
                        <td className="py-3 px-6 border-b">7 Question types</td>
                    </tr>
                    <tr className="bg-blue-50">
                        <td className="py-3 px-6 border-b border-r ">Part 2: Reading & Writing</td>
                        <td className="py-3 px-6 border-b border-r ">30 minutes</td>
                        <td className="py-3 px-6 border-b border-r">5 Question types</td>
                    </tr>
                    <tr>
                        <td className="py-3 px-6 border-b border-r ">Part 3: Listening</td>
                        <td className="py-3 px-6 border-b border-r ">30 minutes</td>
                        <td className="py-3 px-6 border-b border-r">8 Question types</td>
                    </tr>
  <tr>
                        <td className="py-3 px-6 border-b border-r ">Total</td>
                        <td className="py-3 px-6 border-b border-r ">2 Hour</td>
                        <td className="py-3 px-6 border-b border-r">20 Question types</td>
                    </tr>

                </tbody>
            </table>
           
            </div>
        </div>

        {/* Syllabus */}
        <div id="syllabus" className="px-20" style={{ fontFamily: "'Poppins', sans-serif" }}>
            <h1 className="font-bold text-4xl py-2 ">PTE <span className="underline decoration-red-500">Syllabus</span></h1>
            <p className="text-xl">
            <br/>
            <span className="font-bold text-black-900 text-2xl py-2">PTE Academic:</span>
            <br />
            <br />
            <span className="font-bold text-blue-900 py-2">The personal introduction :</span>
            <br />
            <br />
            
            <ul className="list-disc list-inside text-gray-700 text-[18px] text-gray-600">
                <li>This is an opportunity to give your selected institutions some information about yourself. This section is not scored.</li>
            </ul>

            <br/>
            
                 
            </p>
        </div>

        {/* PTE Table */}
         <div className="p-20" style={{ fontFamily: "'Poppins', sans-serif" }}>
           
            <div className="overflow-x-auto border-2 rounded-lg">
            <table className="min-w-full border border-gray-600 rounded-lg text-center">
                <thead className="bg-blue-900 text-white">
                    <tr className="text-lg">
                        <th className="py-3 px-6  ">Section</th>
                        <th className="py-3 px-6 ">Type</th>
                    </tr>
                </thead>
                <tbody className="text-blue-900 text-lg border ">
                    <tr className="bg-blue-50">
                        <td className=" p-50 py-3 px-6 border-b border ">Speaking & Writing</td>
                        <td className="py-3 px-6 border-b border-r ">ead aloud, Repeat sentence, Describe image, Retell lecture, Answer short question, Summarize written text and Write Essay</td>
                    </tr>
                    <tr>
                        <td className="py-3 px-6 border-b border ">Reading</td>
                        <td className="py-3 px-6 border-b border-r ">Multiple choice (single answer), multiple choice (multiple answers), re-order paragraphs, reading and writing: fill in the blanks and reading: fill in the blanks</td>
                    </tr>
                    <tr className="bg-blue-50">
                        <td className="py-3 px-6 border-b border ">Listening</td>
                        <td className="py-3 px-6 border-b border-r ">Multiple-choice-choose multiple answers, fill in the blanks, highlight correct summary, multiple choice- single answer, select missing word, highlight incorrect words and write from dictation</td>
                    </tr>
                  
                </tbody>
            </table>
            </div>
        </div>

        {/* PTE Scoring */}
        <div id="scores" className="px-20 px-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
            <h1 className="font-bold text-4xl ">PTE <span className="underline decoration-red-500">Scoring</span></h1>
            <p className="text-[18px] text-gray-600 "> 
              <br />
              <li>PTE Academic, Core and PTE Academic UKVI scores are graded between 10-90.</li>
<li>There is an Overall PTE score. You will also get individual scores for Speaking, Writing, Listening & Reading.</li>
<li>PTE Home A1, A2 & B1 are beginner’s level of English exam. It tests 2 skills – Speaking and Listening. There is only a Pass or Fail Result.</li>
              </p>
        </div>

<br />
<br />
{/* {PTE DATES} */}
 <div id="dates" className="px-20 px-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
            <h1 className="font-bold text-4xl ">PTE <span className="underline decoration-red-500">Dates</span></h1>
            <p className="text-[18px] text-gray-600 "> 
              <br />
             <li>The exam occurs throught the year and frequently throughout every month.</li>
             <li>The test is conducted at over 62 Pearson Testing Centers (PTC).</li>
             <li>PTC Centers are available in Mumbai, Pune, Ahmedabad, New Delhi and Chennai. </li>
             <li>Different PTC in different cities follow different exam dates.</li>
             <li>The exam can be booked 6 months in advance to avail the preferable dates.</li>
             <li>Some available dates for month of November, December, January 2024 are: <br /> &nbsp;  &nbsp; 4,7,13,15,16,19,20,21,23,27,28,5,12,19,26, 3,9,15,23,31.</li>
             
              </p>
        </div>


        {/* PTE Traning  */}
        <div id="training" className="px-20 mt-15" style={{ fontFamily: "'Poppins', sans-serif" }}>
            <h1 className="font-bold p-2 text-4xl">PTE <span className="underline decoration-red-500">Training</span></h1>
            <p className="font-bold text-blue-900 py-3">&nbsp; Salient Features of PTE training at Edwise</p><br/>
            <ul className="list-disc ml-6 mb-4 space-y-2 text-[18px] text-gray-600">
                <li>30 hours of intensive and comprehensive coaching for PTE.</li>
<li>Cambridge IELTS, official publication, issued as courseware. - We give PTE practice test plus as courseware.</li>
<li>Maximum 10-15 students per batch, which personalizes each session of the PTE exam preparation.</li>
<li>Equal focus on all facets of the test (Listening, Reading, Writing and Speaking)</li>
<li>Qualified, experienced and trained faculties</li>
<li>3 full-length mock tests</li>
<li>Facility of shifting to any branch throughout India</li>
<li>We Conduct both online and offline sessions</li>  
            </ul>
            <br />
             <ul className="list-disc ml-6 mb-4 space-y-2 text-[18px] text-gray-600">
             <p className="text-[18px] text-blue-900"> Timing </p>
             <li>Weekdays: Tuesday to Friday, 2 hours per day</li>
<li>Weekends: Saturday and Sunday, 4 hours per day</li>
<li>Fast track mode: Tuesday to Sunday, 4 hours per day</li>
</ul>

        </div>

        {/* Miscellaneous Details */}
        <div id="misc" className="px-20 mt-15" style={{ fontFamily: "'Poppins', sans-serif" }}>
            <h1 className="font-bold p-2 text-4xl">Miscellaneous <span className="underline decoration-red-500">Details</span></h1>
            <ul className="list-disc ml-6 mb-4 space-y-1 text-[18px] text-gray-600">
               <li>
                Score Validity : 2 years</li>
<li>Score Declared : 2 working days</li>
<li>Registration Mode : Edwise Centre / Online</li>
<li>Rescheduling Fee : 25% of the test fees</li>
<li>Mode of payment : PTE Voucher (Cash)/ Credit card / Debit card</li>
<li>Test Administration Frequency : On fixed date </li>
<li>Test Repetition Policy : Exam can be rescheduled 5 days after the last test appointment.</li>
<li>Score Reporting time : usually within 48 hours.</li>
<li>Score Reporting is free in PTE not before 48 hours.</li>
<li>Official Website : www.pearsonpte.com

               </li>
               
                
            <h1 className="font-bold my-4 -mx-4 text-2xl text-blue-900">PTE Exam Fees</h1>
                <li>Test Fee : ₹17,000/-</li>
                <li>Late Fee : ₹17,850/-</li>
                <li>Extra Score Reporting Fee : No Fee</li>
            </ul>
        </div>
        
        {/* FAQ */}
        {/* FAQ */}
<div id="faq">
  <FAQ faqs={faqs}/>
</div>


        {/* Sucess story */}
        <SuccessStories/>

        {/* Your Journey */}
        <YourJourney/>

        {/* Footer */}
        <FooterSection/>
        
        
        </>

    )
};
export default Celpip;