import FooterSection from "~/app/_components/footer1";
import NavigationSection from "~/app/_components/navigation1";
import YourJourney from "~/app/_components/study-abroad/your-journey";
import HeroSection from "../_components/tp-cael/HeroSection";
import SectionNav from "../_components/tp-cael/SectionNav";
import SuccessStories from "../_components/tp-cael/SuccessStories";
import FAQ from "../_components/study-abroad/faq";

const TestPrCaelFAQs = [
  {
            question: "What is the Difference between CAEL and CELPIP?",
            answer:"Canadian English Language Proficiency Index Program – General (CELPIP-General) for immigration and the Canadian Academic English Language Test – Computer Edition (CAEL CE) for studies. Both are online exams and English proficiency tests."
        },
        {
            question: "What modules do CAEL include?",
            answer: "Both are English proficiency test. CAEL has five sections namely as Speaking, Integrated Reading,Integrated Listening, Academic Writing unit A and Academic Writing unit B."
        },
        {
            question:"How many mock tests does Edwise Provide?",
            answer:"3 full length mock tests are included in coaching at Edwise."
        },
        {
            question:"How many hourse of coaching is given for CAEL?",
            answer:"For CAEL 30 hours of training is given."
        },
        {
          question:"How can we get the venue details for the CAEL Examination?",  
          answer:"CAEL is online exam conducted by PARAGON.So the venue details are available online while registering students can opt out the preferred testing centre. CAEL is currently available in Chandigarh and Gujarat"
        },
        {
            question:"What is the CEAL test fee in India?",
            answer:"The CAEL exam fees will be $280 plus taxes."
        },
        {
            question:"How many times can I take the CAEL English test?",
            answer:"You may register for no more than one Test Session within four (4) calendar days"
        },
        {
            question:"Does Edwise assist for registration and payments for the exams?",
            answer:"For CAEL we are authorised Partner for PARAGON. One can do registration at Edwise by paying cash/ or via debit/credit card."
        },
        {
            question:"How many times can I take CAEL?",
            answer:"You may register for no more than one Test Session within four (4) calendar days"
        },
        {
            question:"In how many days we can receive the results and scores for CAEL?",
            answer:"Test takers can access their CAEL Test scores online through their CAEL Account in 8 business days after their test date"
        },
        {
            question:"Do all institutions Canada accept CAEL?",
            answer:"Accepted by over 180 Canadian universities and colleges, including all English-speaking institutions"
        },
        {
            question:"What is the cost of score reporting for CAEL?",
            answer:"Free score for upto 5 institutions while doing the exam registration online , or up to 1 business day before your scores are posted online. thereafter cost of score reporting is 20$ CAD per institute posted via mail to the academic institutions."
        },
        {
            question:"What is the exam registration fee for CAEL?",
            answer:"For CAEL it is Rs 10845"
        },
        {
            question:"Is Basic English Grammar included in Coaching?", 
            answer:"Basic English Grammar will not be included during the training."
        },
  
];

function CaelPreparation(){

    return (
        <>
        <NavigationSection/>
        <HeroSection/>
        <SectionNav/>
        
        <section id="section1" className="test-dtl-sections active py-10 px-4 md:px-12 lg:px-20">
         <div className="text-3xl font-semibold mb-4">
           CAEL <span className="text-blue-600">Overview</span>
         </div>

         <div className="mb-6 text-lg font-medium text-black space-y-4">
          <p>
          The Canadian Academic English Language (CAEL) is an English language
          proficiency test created to test the skills of a student in English,
          who wish to study in Canadian Universities/Institutions. <br />
          CAEL test offers an excellent representation of language used in a
          Canadian academic context. Candidates would have to read articles,
          listen to a lecture, answer questions, and write a short essay, which
          is similar to what is done in a first-year Canadian university or
          college classroom.
          </p>
         </div>

         <h3 className="text-2xl font-semibold text-gray-800 mb-2">
           Types Of CAEL Test Exam
         </h3>
         <div className="mb-6 text-lg font-medium text-black">
          <p>
           There are two types of CAEL exam,{" "}
           <strong>Online (from home)</strong> and{" "}
           <strong>At the Test center</strong>.
          </p>
         </div>

         <h4 className="text-2xl font-semibold text-blue-600 mb-2">CAEL Online</h4>
         <ul className="list-disc list-inside mb-6 text-lg font-medium text-black">
          <li>
           In this mode, candidates can take the test from the comfort of their
           home. This mode is available right now in Canada, USA, Mexico,
           Brazil, Colombia, Japan, Vietnam, Hong Kong, South Korea, India, UAE,
           Indonesia.
          </li>
         </ul>

         <h4 className="text-2xl font-semibold text-blue-600 mb-2">
           CAEL At the test center
         </h4>
         <ul className="list-disc list-inside mb-6 text-lg font-medium text-black">
         <li>
          CAEL at test center is only available in Computer Delivered mode. This
          mode is available right now in Canada, USA, India, UAE, Philippines
          and China.
         </li>
         </ul>
        </section>

     <section id="section2" className="test-dtl-sections active py-10 px-4 md:px-12 lg:px-20">
      {/* Section Title */}
      <div className="text-3xl font-semibold mb-4">
        CAEL <span className="text-blue-600">Pattern</span>
      </div>

      {/* Subheading */}
      <h4 className="text-2xl font-semibold text-blue-600 mb-4">
        The GRE Test Format is divided into different sections
      </h4>

      {/* Table */}
      <div className="overflow-hidden rounded-lg border border-gray-300">
        <table className="w-340 h-100  text-center text-black-700">
          <thead className="text-center bg-blue-600">
            <tr className="text-black font-bold text-lg">
              <th className="border px-4 py-2">Sections</th>
              <th className="border px-4 py-2">Questions</th>
              <th className="border px-4 py-2">Time</th>
            </tr>
          </thead>
          <tbody className="text-black font-bold text-base">
            <tr>
              <td className="border px-4 py-2">Speaking</td>
              <td className="border px-4 py-2">3</td>
              <td className="border px-4 py-2">7-10 minutes</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Integrated Reading</td>
              <td className="border px-4 py-2">14-25 and 1 extra question</td>
              <td className="border px-4 py-2">35-50 minutes</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Integrated Listening</td>
              <td className="border px-4 py-2">14-25 and 1 extra question</td>
              <td className="border px-4 py-2">25-35 minutes</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Academic Unit A</td>
              <td className="border px-4 py-2">
                11-15, 11-15 and 1 extra question
              </td>
              <td className="border px-4 py-2">60-70 minutes</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Academic Unit B</td>
              <td className="border px-4 py-2">
                11-15, 11-15 and 1 extra question
              </td>
              <td className="border px-4 py-2">40-45 minutes</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
    
    <section id="section3" className="test-dtl-sections active py-10 px-4 md:px-12 lg:px-20">
      {/* Section Title */}
      <div className="text-3xl font-semibold mb-4">
        CAEL <span className="text-blue-600">Syllabus</span>
      </div>

      {/* Speaking Section */}
      <h4 className="text-2xl font-semibold text-blue-600 mb-2">Speaking :</h4>
      <ul className="list-disc list-inside mb-6 text-lg font-medium text-black ">
        <li>Two speaking tasks, each based on short question</li>
        <li>One speaking task based on a graph/diagram/chart</li>
      </ul>

      {/* Integrated Reading Section */}
      <h4 className="text-lg font-semibold text-blue-600 mb-2">Integrated Reading :</h4>
      <ul className="list-disc list-inside mb-6 text-lg font-medium text-black">
        <li>One or two short reading passages with comprehension questions</li>
        <li>One or two long reading passages with comprehension questions</li>
        <li>
          One speaking question, answered using material from a long reading
          passage
        </li>
      </ul>

      {/* Integrated Listening Section */}
      <h4 className="text-2xl font-semibold text-blue-600 mb-2">Integrated Listening :</h4>
      <ul className="list-disc list-inside mb-6 text-lg font-medium text-black">
        <li>
          One or two short listening passages with comprehension questions
        </li>
        <li>
          One or two long listening passages with comprehension questions
        </li>
        <li>
          One speaking question, answered using material from a long listening
          passage
        </li>
      </ul>

      {/* Academic Unit A Section */}
      <h4 className="text-2xl font-semibold text-blue-600 mb-2">Academic Unit A :</h4>
      <ul className="list-disc list-inside mb-6 text-lg font-medium text-black">
        <li>One long reading passage with comprehension questions</li>
        <li>
          One long listening passage on the same topic, with comprehension
          questions
        </li>
        <li>
          One writing question requiring an extended response, using material
          from both the long reading passage and the long listening passage
        </li>
      </ul>

      {/* Academic Unit B Section */}
      <h4 className="text-2xl font-semibold text-blue-600 mb-2">Academic Unit B :</h4>
      <ul className="list-disc list-inside mb-6 text-lg font-medium text-black">
        <li>One long reading passage with comprehension questions</li>
        <li>
          One long listening passage on the same topic, with comprehension
          questions
        </li>
        <li>
          One writing question requiring a short response, using material from
          both the long reading passage or the long listening passage
        </li>
      </ul>
    </section>

    <section id="section4" className="test-dtl-sections active py-10 px-4 md:px-12 lg:px-20">
        <div className="text-3xl font-semibold mb-4">
            CAEL <span className="text-blue-600">Scores</span>
        </div>
        <ul className="list-disc list-inside mb-6 text-lg font-medium text-black">
            <li>CAEL is graded on a scale of 10 to 90 marks.</li>
            <li>Candidates can get their test score online by login into their CAEL Account in 8 business days after their test date.</li>
        </ul>
        

        <div className="overflow-hidden rounded-lg border border-gray-300">
        <table className="w-340 h-170  text-center text-black-700">
          <thead className="text-center bg-blue-600">
            <tr className="text-black font-bold text-lg">
              <th className="border px-8 py-2">CAEL Score</th>
              <th className="border px-8 py-2">Descriptor</th>
            </tr>
          </thead>
          <tbody className="text-black font-bold text-base">
            <tr>
              <td className="border px-6 py-2">80-90</td>
              <td className="border px-6 py-2">Expert : Demonstrates a high level of competence, accuracy, and effectiveness in academic/professional settings</td>
            </tr>
            <tr>
              <td className="border px-6 py-2">70</td>
              <td className="border px-6 py-2">Adept : Uses generally accurate language in most settings; some limitations in flexibility are evident</td>
            </tr>
             <tr>
              <td className="border px-6 py-2">60</td>
              <td className="border px-6 py-2">Advanced : Displays competence in academic or professional settings</td>
            </tr>
             <tr>
              <td className="border px-6 py-2">50</td>
              <td className="border px-6 py-2">High Intermediate : Exhibits some competence in academic or professional settings; communication may break down in places</td>
            </tr>
             <tr>
              <td className="border px-6 py-2">40</td>
              <td className="border px-6 py-2">Intermediate : Demonstrates some ability to comprehend and articulate complex ideas and arguments typical of academic or professional settings</td>
            </tr>
             <tr>
              <td className="border px-6 py-2">30</td>
              <td className="border px-6 py-2">High Beginner : Expresses basic ideas about familiar topics in routine settings</td>
            </tr>
             <tr>
              <td className="border px-6 py-2">10-20</td>
              <td className="border px-6 py-2">Low Beginner : Communicates with limited ability</td>
            </tr>
            </tbody>
            </table>
        </div>
    </section>
    <section id="section5" className="test-dtl-sections active py-10 px-4 md:px-12 lg:px-20">
        <div className="text-3xl font-medium text-black mt-6">
            CAEL <span className="text-blue-600">Dates</span>    
       </div>
       <div className="mb-6 text-lg font-medium text-black space-y-4">
        <p>
           Test dates are available on Saturdays every month. Check the updated dates at https://www.cael.ca/take-cael/find-a-test-date/ 
        </p>
       </div>
    </section>

    <section id="section6" className="test-dtl-sections active py-10 px-4 md:px-12 lg:px-20">
    
        <div className="text-3xl font-medium text-black mt-6">
            CAEL <span className="text-blue-600">Training</span>    
       </div>
       <div className="mb-6 text-lg font-medium text-black space-y-4">
         <p>Edwise offers intensive and comprehensive training services to people aspiring to obtain a desirable score in CAEL. We have qualified, experienced and trained teachers, that train our students.</p>
       </div>
        
        <h4 className="text-2xl font-semibold text-blue-600 mb-2">How We Train our student</h4>
        <ul className="list-disc list-inside mb-6 text-lg font-medium text-black">
         <li>We conduct a mock test on the first day of training to gauge their current English abilities. The individual is given the scores after the test is over.</li>
        <li>Subsequently, we start the classroom training. Towards the end of practice session, questions are discussed with the students and answers are explained.</li>
         <li>After classroom sessions, mock-tests are conducted simulating the testing conditions and scores are given for each mock test.</li>
        </ul>

        <h4 className="text-2xl font-semibold text-blue-600 mb-2">Salient Features of CAEL training @ Edwise</h4>
        <ul className="list-disc list-inside mb-6 text-lg font-medium text-black">
         <li>Intensive Online training for 30 Hrs.</li>
         <li>The CAEL preparation course will be taught by experienced faculties</li>
         <li>Training through Digital Medium Zoom application</li>
         <li>Assignments on every module through Google Classrooms.</li>
         <li>Online Tutors to give you detailed feedback on your assessment tasks</li>
         <li>The CAEL test preparation course includes test tips and study strategies in all modules</li>
         <li>Availability of Weekdays (Tuesday to Friday, 2 hours per day) and Weekend Batches (Saturday and Sunday, 2 hours per day) under Regular Mode</li>
         <li>The CAEL preparation training is done at flexible timings.</li>
         <li>Facility of shifting to any branch throughout India</li> 
        </ul>        
    </section>

    <section id="section7" className="test-dtl-sections active py-10 px-4 md:px-12 lg:px-20">
         <div className="text-3xl font-medium text-black mt-6">
            Miscellaneous <span className="text-blue-600">Details</span>    
       </div>
       <ul className="list-disc list-inside mb-6 text-lg font-medium text-black">
         <li>Score Validity: 2years</li>
         <li>Registration Mode: Online</li>
         <li>Mode of payment: Credit</li>
         <li>Nature of Test: Computer based</li>
         <li>Official Website: www.cael.ca</li>
         <li>Test Administration Frequency: Every weekend (After 30 days from 1st attempt)</li>
         <li>Test Centres in India (Not available in Maharashtra)</li>
       </ul>

         <h4 className="text-2xl font-semibold text-blue-600 mb-2">Fees</h4>
         <ul className="list-disc list-inside mb-6 text-lg font-medium text-black">
            <li>Test fee: ₹12500/-</li>
            <li>Rescheduling Fee: C$50</li>
            <li>Extra Score Reporting Fee: C$20</li>
            <li>Cancellation Refund - Refund of fifty percent (50%) of the fee you paid for the Test Session registration</li>
         </ul>
            <h4 className="text-2xl font-semibold text-blue-600 mb-2">CAEL: At a Test Center</h4>
            <ul className="list-disc list-inside mb-6 text-lg font-medium text-black">
            <li>Testing Days: Friday - Sunday</li>
            </ul>
    </section>
        
    <section id="section8" className="test-dtl-sections active py-10 px-4 md:px-12 lg:px-20">
    <FAQ faqs={TestPrCaelFAQs} title="FAQs" />
    </section>
    
       <SuccessStories/>
    <YourJourney/>
    <FooterSection/>
    </>                                      
    );
}
export default CaelPreparation;