import { ChevronRight, Facebook, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import Cards from '~/app/cost-of-studying/cards-studying'
import FAQ from '../_components/study-abroad/faq';

function Hsection() {

  const faq = [
    {
      question: "What is the difference between public and private universities?",
      answer: (
        <>
          Public universities are state-funded and generally have lower tuition
          fees, whereas, private universities are independently funded and tend to
          be more expensive but may offer more scholarships.
        </>
      ),
    },
    {
      question: "Can students work while studying in the USA?",
      answer: (
        <>
          Yes, international students who study in USA on F1 visas can work up to
          20 hours per week on-campus during the academic year and full-time during
          scheduled breaks.
        </>
      ),
    },
    {
      question: "How long can students stay in the US after graduation?",
      answer: (
        <>
          Students can stay up to 12 months under OPT after completing their
          degree. However, STEM graduates may extend their OPT for an additional
          24 months.
        </>
      ),
    },
    {
      question: "How much does a student visa to study in the United States typically cost?",
      answer: (
        <>
          The student visa cost USA generally costs $160 for the visa application
          fee and $350 for the SEVIS fee, totalling $510.
        </>
      ),
    },
    {
      question: "What are the monthly living expenses in USA for students in 2025?",
      answer: (
        <>
          The monthly living expenses in USA for students in 2025 range from $1,100
          - $1,850, comprising food, housing, transit, utilities, and individual
          expenditures.
        </>
      ),
    },
  ];

  const Ausis = [
    {
      description: <>For further assistance or queries students can contact us, Edwise International and avail our wide range of services for students on destinations like <span>{" "}</span>
        <Link href="/study-abroad/study-abroad-uk" className="text-blue-900  font-bold">Study in UK</Link>,
        <Link href="/study-abroad/study-abroad-usa" className="text-blue-900  font-bold">Study in USA</Link>,
        <Link href="/study-abroad/study-abroad-canada" className="text-blue-900  font-bold">Study in Canada</Link>,
        <Link href="/study-abroad/Study-Australia" className="text-blue-900  font-bold">Study in Australia</Link>,
        <Link href="/study-abroad/NewZealand" className="text-blue-900  font-bold">study in NewZealand</Link>,
        <Link href="/study-abroad/study-abroad-singapore" className="text-blue-900  font-bold">Study in Singapore</Link>,
        <Link href="/study-abroad/ireland" className="text-blue-900  font-bold">Study in Ireland</Link>,
        <Link href="/study-abroad/study-in-france" className="text-blue-900  font-bold">Study in France</Link>,
        <Link href="/study-abroad/Germany" className="text-blue-900  font-bold">Study in Germany</Link>, and many other countries
      </>

    },
  ]



  return (
    <>
      <div className="flex- flex-col items-center xl:px-30 px-5 py-5 ">
        <div className='flex  md:flex-row  flex-col text-sm text-gray-600 py-5  '>
          <div className='flex items-center text-lg text-gray-600 '>
            <Link href="/study-abroad" className="hover:underline text-blue-600">Home</Link>
            <ChevronRight className="w-4 h-4" />

            <Link href="" className="hover:underline text-blue-600">Blogs</Link>
            <ChevronRight className="w-4 h-4" />
          </div>
          <span className="text-blue-800 font-medium text-lg">
            Cost of Studying in USA for Indian Students
          </span>
        </div>
        <h3 className=' xl:text-5xl text-3xl lg:text-4xl py-5'>Cost of Studying in USA for Indian Students
        </h3>
      </div>

      <div className='flex flex-col items-center px-5  xl:px-20'>
        <img src="../Cost-of-Study1-Ausis.webp" alt="Image " className='rounded-3xl w-full xl:h-[35rem] object-cover' />
      </div>

      <div className="xl:px-55 flex flex-col gap-10 px-10 md:text-justify">
        <p className='leading-8 mt-15 text-l'>
          The United States of America is one of the top study abroad destinations, and is famous for world-class universities, flexible education system,
          cutting-edge research facilities. Students can have access to dynamic cities like New York, Boston, San Francisco, and Chicago. <span className='text-black'>Study in USA for Indian students </span>
          also benefits them by providing job opportunities after graduation through programs like OPT. <span>Cost of studying in USA</span> for Indian students includes tuition fees,
          living expenses, accommodation, visa and other costs, and also requires obtaining an F1 visa. Students can experience the unique aspect of studying and living in US.
        </p>

        <div className='flex flex-col gap-8 md:text-justify'>
          <h3 className="text-blue-500 text-2xl">WHY STUDY IN USA?</h3>
          <p><span className='text-xl'>Study in USA for Indian students</span>is a popular choice for the reasons mentioned below:</p>

          <ul className="list-disc pl-6 flex flex-col gap-4">
            <li>
              <span> Top ranking institutions:</span> The USA has the majority of top-ranking colleges. These institutions
              and universities are consistently recognized for their academic excellence, research opportunities, and reputation.
            </li>
            <li>
              <span>Research opportunities:</span> The USA offers a plethora of opportunities for students at various stages of their academic and professional
              career from undergraduate internships to postdoctoral fellowships and government research positions.
            </li>
            <li>
              <span>    Diverse and flexible programs:</span> The country has the world’s most flexible education system.
              Students can study in their area of interest as a specialization.
            </li>
            <li>
              <span>Gain a global perspective:</span> Experience the diverse culture and innovation of the United States,
              where global ideas meet local perspective.
            </li>
            <li>
              <span>Post-study work permit:</span> The Graduate route permits students to work for 3 years post completing their studies.
            </li>
            <li>
              <span>Universities over 90% employment rate:</span> Most of the universities in USA boast impressive employment rate.
            </li>
            <li>
              <span>Specialized courses: </span>The USA is well known for having a well-established and legally protected system of special education.
            </li>
            <li>
              <span>Soft skills development:</span> Study and communicate in the world’s most widely spoken language.
            </li>
          </ul>


          <div className='flex flex-col gap-8'>
            <h3 className="text-blue-500 text-2xl">Popular Bachelor's Degrees in the USA</h3>
            <p>Here is the list of the best bachelor's degree programs in the USA for Indian students:</p>
            <ul className="list-disc pl-6 flex flex-col gap-4">
              <li>Bachelor of Computer Science (BCS)</li>
              <li>
                Bachelor of Data Science (BDS)
              </li>
              <li>
                Bachelor of Science (BSC)
              </li>
              <li>
                Bachelor of Science (BSC)
              </li>
              <li>
                Bachelor of Engineering (BENG)
              </li>
              <li>Bachelor of Engineering (BENG)
              </li>
              <li>
                Bachelor of Finance/Accounting
              </li>
            </ul>
          </div>
        </div>

        <div className='flex flex-col gap-8'>
          {/* Popular Master's Degrees in the USA */}
          <h3 className="text-blue-500 text-2xl">
            Popular Master's Degrees in the USA
          </h3>
          <p>Here is the list of the best master’s degree programs in the USA for Indian students:</p>

          <ul className="list-disc pl-6 flex flex-col gap-4">
            <li>Master of Business Administration</li>
            <li>Master of Pharmaceuticals</li>
            <li>MFA Creative Writing</li>
            <li>Master of Mechanical Engineering</li>
            <li>Master of Public Health</li>
            <li>Master of Business Analytics</li>
            <li>Master of International Business</li>
            <li>Master of Chemical Engineering</li>
            <li>Master of Data Science (MSDS)</li>
            <li>Master of Laws (LLM)</li>
          </ul>
        </div>
        <div className='flex flex-col gap-8'>
          <h1 className="text-blue-500  text-2xl">Affordable Universities in USA for Indian Students</h1>
          <p>The cost of study in US includes tuition fees, living costs, health insurance, as well as other academic-related expenditures.
            Students often worry about the high cost of studying in America. Nevertheless, there are a number of budget-friendly universities in USA for Indian students.
            They are as under:
          </p>
          <ul className="list-disc pl-6 flex flex-col gap-4">
            <li>California State University</li>
            <li>Brigham Young University</li>
            <li>Delta State University</li>
            <li>South Dakota State University</li>
            <li>Dakota State University</li>
            <li>City University of New York</li>
            <li>Mississippi University for Women</li>
            <li>University of North Georgia</li>
            <li>University of Florida</li>
            <li>Arizona State University</li>
            <li>Duke University</li>
            <li>Northeastern University</li>
            <li>Purdue University</li>
            <li>San Jose State University</li>
          </ul>
        </div>

        <div className='flex flex-col gap-8'>
          <h3 className="text-blue-500 text-2xl">HOW MUCH DOES IT COST TO STUDY IN USA?</h3>
          <p>The tuition fees in USA for international students largely depends on the university. Generally higher-ranking universities tend to have higher tuition fees.
            The USA has both public and private universities, the cost can vary significantly between them. Public universities offer more affordable tuition fees compared to the private institutions.
            The fees generally range between $20000 to $35000 annually,
            including tuition fees and living expenses for public institutes and $35000 to $55000 annually for private institutes.</p>
          <p>
            Fees to study in USA for undergraduate programs in public universities usually cost around $15000 to $30000, whereas private universities may range from $25000 to $55000 or more per year.
            On the other hand, the cost of MS in USA for Indian students at public universities ranges from $20000 to $35000, whereas private universities may charge between $30000 to $60000 or more per year,
            depending on the program.
          </p>
          <h3 className="text-blue-500 text-2xl">SCHOLARSHIPS TO STUDY IN USA</h3>
          <p>The cost of education in USA can be substantially high, particularly at private universities and for overseas students.
            Nevertheless, there are several affordable course options available, along with various types of financial aid, scholarships, fellowship-scholarships, assistantships
            and sports-scholarships to help students manage their expenses. They are:</p>
        </div>
        <div>
          <ul className="list-disc pl-6 flex flex-col gap-4">
            <li>Fulbright-Nehru Master's Fellowships</li>
            <li>Hubert H. Humphrey Fellowship Program</li>
            <li>Inlaks Shivdasani Foundation Scholarships</li>
            <li>Stanford Reliance Dhirubhai Fellowship</li>
            <li>AAUW International Fellowships</li>
            <li>Tata Scholarship for Cornell University</li>
            <li>University-Specific Scholarships</li>
          </ul>

        </div>
        <img src="../Cost-of-Study2-Ausis.webp" alt="" className='rounded-3xl w-[50rem] px-2 md:px-0 xl:h-[25rem] object-cover' />
      </div>

      <section className="bg-white py-14 px-4 md:px-20   scroll-mt-15">
        <FAQ faqs={faq} />
      </section>

      <div className='xl:px-40 px-5 py-5'>

        {
          Ausis.map((item, index) => (

            <div key={index}>
              {item.description &&
                <p className='xl:text-justify'>{item.description}</p>
              }
            </div>
          ))
        }

      </div>

      <div className="flex items-center gap-2 px-8 mt-10 xl:px-50">
        <p>Share Blog via :</p>
        <span className="flex gap-4">
          <Link href="https://facebook.com" className="bg-blue-800 text-white transform transition-transform hover:-translate-y-2 duration-200 rounded-full w-8 h-8 flex items-center justify-center">
            <Facebook className="h-4 w-4" />
          </Link>
          <Link href="https://linkedin.com" className="bg-blue-800 text-white transform transition-transform hover:-translate-y-2 duration-200 rounded-full w-8 h-8 flex items-center justify-center">
            <Linkedin className="h-4 w-4" />
          </Link>
          <Link href="https://linkedin.com" className="bg-blue-800 text-white transform transition-transform hover:-translate-y-2 duration-200 rounded-full w-8 h-8 flex items-center justify-center">
            <Twitter className="h-4 w-4" />
          </Link>
        </span>
      </div>
      <Cards />
    </>
  )
}

export default Hsection