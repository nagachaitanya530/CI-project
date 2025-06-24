'use client'
import { FileBadge2, FileText, IdCardLanyard } from 'lucide-react'
import { useEffect, useRef, useState, type JSX } from 'react';
import BookConsultationForm from '../../_components/study-abroad/BookConsultationForm';

interface ScholarshipItem {
    name: string;
    description: JSX.Element;
}

const items: ScholarshipItem[] = [
    {
        name: 'Netherlands',
        description: (
            <div>
                <p>
                    New Zealand Excellence Awards is available for all eligible students. 
                    Additionally, there are universities that offer their own scholarships as well. 
                    As the number of scholarships in New Zealand are less in number, only students with exceptional grades are considered. 
                    New Zealand scholarship for Indian students can go up to NZ$20,000.
                    </p>
            </div>
        ),
    },
];




function NewZealandPage()
{

const [select,Selected]=useState("doc");

    const stats = [
  { title: "25+", description: "Institutions" },
  { title: "NZ$27k–55k", description: "Annual tuition fees" },
  { title: "34k+", description: "International Students" },
  { title: "2–3 Years", description: "Post–Study Work Visa" },
];

const sectionRef = useRef<HTMLElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            { threshold: 0.3 }
        );

        const currentSection = sectionRef.current;
        if (currentSection) {
            observer.observe(currentSection);
        }

        return () => {
            if (currentSection) {
                observer.unobserve(currentSection);
            }
        };
    }, []);





    return(
<>

    <div className="bg-gradient-to-r from-white via-red-50 to-green-100  px-6 py-12 md:flex md:items-center md:justify-between ">
            {/* {text section} */}
        <div className="md:w-1/2 mt-15">

            <h1 className="text-5xl md:text-5xl text-gray-800 ml-15 leading-15">
                <span className="font-bold text-black underline decoration-red-500 decoration-4 underline-offset-[14px]">
                New Zealand:
                </span>{" "}
                Where<br/> modern education and<br/> tradition meet
            </h1>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 ml-15">
                <button className="bg-blue-900 text-white hover:bg-white  hover:text-blue-900 font-semibold px-6 py-3 rounded-md">
                    Free Expert Consultation
                </button>
            </div>
        </div>

        {/* Image Section */}
         <div className="md:mt-0 md:w-1/2 flex justify-center items-center">
                <img  className="h-120 object-contain z-5 absolute top-20 right-50 " 
                
                src="../../study-abrd-nz.webp"
                alt="student"
            
                />
    
        </div>

</div>

<div className="bg-[#E9EEF6] rounded-[50px] p-6 md:p-10 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0 mx-auto w-[90%] shadow-sm mt-33">
{stats.map((item, index) => (
        <div
          key={index}
          className="flex-1 text-center px-4 relative"
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-[#1E40AF]">{item.title}</h3>
          <p className="text-base md:text-lg mt-1 font-medium text-gray-900">{item.description}</p>

          {/* Divider */}
          {index < stats.length - 1 && (
            <span className="hidden md:block absolute top-1/2 right-0 transform -translate-y-1/2 h-12 border-r border-gray-300" />
          )}
        </div>
      ))}


</div>

<section className="flex flex-col lg:flex-row justify-between gap-8 px-6 lg:px-24 py-16">
  {/* LEFT: Why Study in Netherlands */}
  <div className="lg:w-2/3 mt-10">
    <h1 className="text-4xl md:text-5xl font-light mb-6">
      Why <span className="text-black font-semibold">Study In Netherlands?</span>
    </h1>

    {/* Section 1 */}
    <section className="mb-6 mt-10">
      <h2 className="font-bold text-2xl flex items-center gap-2">
        <span><FileBadge2 /></span> High-Quality Education
      </h2>
      <p className="text-xl text-gray-700 mt-5 ml-10">
        Dutch universities are renowned for their excellent academic standards and innovative teaching methods.
      </p>
    </section>
    <hr className="border-t border-gray-300" />

    {/* Section 2 */}
    <section className="mb-6 mt-10">
      <h2 className="font-bold text-2xl flex items-center gap-2">
        <span><FileBadge2 /></span> International Environment
      </h2>
      <p className="text-xl text-gray-700 mt-5 ml-10">
        The Netherlands is a multicultural country with a welcoming attitude towards international students, creating a diverse and enriching learning environment.
      </p>
    </section>
    <hr className="border-t border-gray-300" />

    {/* Section 3 */}
    <section className="mb-6 mt-10">
      <h2 className="font-bold text-2xl flex items-center gap-2">
        <span><FileBadge2 /></span> English-Taught Programs
      </h2>
      <p className="text-xl text-gray-700 mt-5 ml-10">
        Universities in Netherlands provide an extensive selection of approximately 2,000 programs taught in English.
      </p>
    </section>
    <hr className="border-t border-gray-300" />

    {/* Section 4 */}
    <section className="mb-6 mt-10">
      <h2 className="font-bold text-2xl flex items-center gap-2">
        <span><FileBadge2 /></span> Innovation And Research
      </h2>
      <p className="text-xl text-gray-700 mt-5 ml-10">
        The Netherlands is at the forefront of innovation and research in various fields, providing students with opportunities for cutting-edge research and practical experience. They invented Wi-fi.
      </p>
    </section>
    <hr className="border-t border-gray-300" />

    {/* Section 5 */}
    <section className="mb-6 mt-10">
      <h2 className="font-bold text-2xl flex items-center gap-2">
        <span><FileBadge2 /></span> Career Opportunities
      </h2>
      <p className="text-xl text-gray-700 mt-5 ml-10">
        The Netherlands is home to many multinational companies and startups, offering ample job opportunities and internships for graduates.
      </p>
    </section>
    <hr className="border-t border-gray-300" />

    {/* Section 6 */}
    <section className="mb-6 mt-10">
      <h2 className="font-bold text-2xl flex items-center gap-2">
        <span><FileBadge2 /></span> Affordable Education
      </h2>
      <p className="text-xl text-gray-700 mt-5 ml-10">
        Compared to other popular study destinations, the cost of tuition and living expenses in the Netherlands is relatively affordable, especially when considering the high quality of education.
      </p>
    </section>
    <hr className="border-t border-gray-300" />
  </div>

  {/* RIGHT: Book Consultation Form */}
  <div className="lg:w-1/3 flex justify-center mt-10">
    <div className="w-full max-w-md">
      <BookConsultationForm />
    </div>
  </div>
</section>




{/* cost of stying */}
<div className='flex flex-col md:flex-row justify-between p-6 md:p-6 bg-gray-100  rounded-4xl'>
{/* left section */}

        <div className='md: w-1/2 mb-10 md:mb-0 ml-20 mt-10'>
            <h2 className='text-4xl md:text-5xl font-semibold text-gray-800'>
                <span className='font-bold leading-20'>Cost Of Studying </span><br />
                <span className='font-normal'>In New Zealand</span>
            </h2>
            <p className='text-gray-700 mt-4 max-w-md text-xl'>
                New Zealand provides high quality education and a high standard of living at a lower cost than Australia, UK, and the USA. Tuition fees vary from program to program.
            </p>
        </div>

{/* Right Section */}
      <div className="md:w-1/1 space-y-4 ml-20 mt-10 mb-20">
        <div className="text-gray-800 font-medium shadow rounded-lg items-center md:w-1/3 p-3 ">Tuition Fees (Average per annum)</div>
        
        <div className="bg-white shadow rounded-2xl flex justify-between items-center p-4">
          <span className="font-semibold text-xl">Diplomas And Certificates</span>
          <span className="font-semibold text-xl">NZD 24,000 – 30,000</span>
        </div>
        
        <div className="bg-white shadow rounded-2xl flex justify-between items-center p-4">
          <span className="font-semibold text-xl">Bachelor’s</span>
          <span className="font-semibold text-xl">NZD 24,000 – 35,000</span>
        </div>
        
        <div className="bg-white shadow rounded-2xl flex justify-between items-center p-4">
          <span className="font-semibold text-xl">Master’s</span>
          <span className="font-semibold text-xl">NZD 27,000 – 55,000</span>
        </div>

        <div className="text-gray-800 font-medium shadow rounded-lg items-center md:w-1/2 p-3 mt-10">Living Expenses (Average per annum)</div>

        <div className="bg-white shadow rounded-2xl flex justify-between items-center p-4">
          <span className="font-semibold text-xl"></span>
          <span className="font-semibold text-xl">Approx. NZD 20,000</span>
        </div>
        <div className="text-gray-800 font-medium shadow rounded-lg items-center  md:w-1/2 p-3 mt-10">Accommodation (Average per month)</div>
        <div className="bg-white shadow rounded-2xl flex justify-between items-center p-4">
          <span className="font-semibold text-xl">On-Campus</span>
          <span className="font-semibold text-xl">NZD 410 - 700</span>
        </div>
        <div className="bg-white shadow rounded-2xl flex justify-between items-center p-4">
          <span className="font-semibold text-xl">Off-Campus Rental</span>
          <span className="font-semibold text-xl">NZD 90 - 190</span>
        </div>
        <div className="bg-white shadow rounded-2xl flex justify-between items-center p-4">
          <span className="font-semibold text-xl">Homestay</span>
          <span className="font-semibold text-xl">NZD 290-310</span>
        </div>
      </div>    
</div>

{/* scholarships  */}

 <section ref={sectionRef} className="my-20 px-4 md:px-20">
                <div className="flex flex-col md:flex-row items-center justify-between p-5 ">
                    {/* Text Block transiton from left to right */}
                    <div className={`transition-all duration-1000 ease-out ${isVisible ? 
                                    'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
                        {items.map((item, index) => (
                            <div key={index}>
                                <h1 className="text-5xl mb-6 text-gray-800"><b> Scholarships</b> In {item.name}</h1>
                                <div className="text-lg text-gray-700 max-w-3xl">{item.description}</div>
                            </div>
                        ))}
                    </div>

                    {/* Image transiction right to left */}
                    <div className={`transition-all duration-1000 ease-out ${isVisible ? 
                                'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'} mt-10 md:mt-0 md:w-2/5`}>
                        <img
                            src="../../scholar-img.webp"
                            alt="Scholarships"
                            className="h-80 w-full max-w-lg object-cover rounded-lg shadow-lg"/>
                    </div>
                </div>
</section>



<h1 className='text-center text-5xl'>More about <span>New Zealand</span></h1>

<div className='relative sm:px-5 flex  md:flex-row  gap-10 md:gap-30 flex-row  align-middle justify-center sm:m-10 p-4'> 
    {/* Right side */}
    <div className='hidden lg:flex flex-col gap-4 md:sticky top-10 h-fit  justify-center '>
        <a  href="#doc" onClick={() => Selected('doc')}  className={`text-30 border-2 p-2 rounded-full w-[22rem] flex justify-center  ${select === 'doc' ? 'bg-blue-900 text-white' : 'bg-white text-black hover:bg-blue-100'}`}><FileText className="w-6 h-7 " />Documents</a>
        <a  href="#vis"onClick={() => Selected('vis') } className={`text-30 border-2 p-2 rounded-full w-[22rem] flex justify-center ${select==='vis' ? "bg-blue-900 text-white":"bg-white text-black hover:bg-blue-900 hover:text-white"}`}><IdCardLanyard className="w-6 h-7 " />Visa</a>
    </div>



    {/* Left side */}
    <div className=' flex flex-col gap-10 items-centerw-full scroll-smooth w-full max-w-3xl'>
    {/* top */}
        <div id="doc" className='border-2 rounded-4xl p-10 '>
            <h2 className='text-3xl font-semibold'>Documents required to study in New Zealand</h2>
                  <p className='text-xl mt-5'> Here are the documents required to study in New Zealand:</p>
            <ul className=' text-xl ml-5 list-disc text-md text-gray-500  space-y-2 mb-10'>
                <li>Completed Application Form</li>
                   <li>Passport</li>
                  <li>Academic Transcripts</li>
                  <li>English Language Proficiency</li> 
                    <li>Letter of Recommendation </li> 
                    <li>Statement of Purpose (SOP) or Personal Statement</li> 
                    <li>CV/Resume</li> 
                    <li>Portfolio (if applicable)</li> 
                    <li>Financial Documentation</li> 
                    <li>Health and Medical Insurance</li> 

            </ul>
           <a href="#" className='border-1 p-2 sm:p-3  rounded-xl border-blue-900 hover:text-white hover:bg-blue-900'>Free Expert Consultation</a>

        </div>

{/* bottom */}

         <div  id='vis' className='border-2 rounded-4xl p-9 w-full max-w-3xl '>
            <h1 className='text-3xl'>New Zealand study visa process</h1>
     
            <ul className='list-disc text-md text-gray-500 ml-5 mb-10'>
                <li>A candidate must have an unconditional Offer Letter</li>
                <li>Financial proof for the next 12 months covering tuition fees and living expenses</li>
                <li>All relevant academic documents along with resume</li>
                  <li>Medical insurance is mandatory</li> 
                    <li>Police clearance certificate</li> 
                    
                   

            </ul>
            <a href="#" className='border-1 p-3  rounded-xl border-blue-900 hover:text-white hover:bg-blue-900'>Free Expert Consultation</a>

        </div>
    </div>
</div>

<div className='flex flex-col items-center mb-80 '  > <h3 className='text-xl sm:text-3xl text-center lg:text-4xl xl:text-5xl	 m-10 '><span className='font-semibold'>Related Articles</span> on Studying in New Zealand</h3>
    <p className='rounded-[3rem] border-2 w-[88%] p-7  text-blue-900  text-lg'>
      Top Universities in New Zealand for International Students | Travel and Tourism in New Zealand | Top 5 Affordable New Zealand Cities For International Students | Top 10 Reasons to Study in New Zealand | Animation Courses in New Zealand | Study Construction courses in New Zealand | Top 5 Courses To Study In New Zealand | Civil Engineering in New Zealand | Study Healthcare Courses in New Zealand | Study Medicine Courses in New Zealand as an International Student | Top 4 Masters Courses in New Zealand | Agricultural Studies in New Zealand | 5 Best Courses to Study in New Zealand | Study Culinary Arts in New Zealand | Common Reasons for a New Zealand Student Visa Refusal | Creative Arts and Design Degree in New Zealand | MBA in New Zealand | MS in Computer Science in New Zealand | 5 Facts To Know Before You Visit New Zealand | Scholarships in New Zealand for International Students | Top Most Universities and Colleges in New Zealand | Top 4 Masters Courses in New Zealand | Top 10 popular courses to study in New Zealand | Top 7 Universities for Public Relations in New Zealand | COVID-19 Updates from Top Universities in New Zealand | Student's Life in New Zealand | How To Apply For A Visa In New Zealand?
</p></div>





    



</>

    )

}
export default NewZealandPage;


