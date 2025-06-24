
'use client';

import { useEffect, useRef, useState, type JSX } from 'react';
import { BookOpen } from 'lucide-react'
import React from 'react'

import Image from "next/image";
import { FileText, FileSearch } from "lucide-react";
import BookConsultationForm from '../BookConsultationForm';
import Topcourse from '../home/successstories'
import Link from 'next/link';


const Herosection =()=>{
  return(
    // <section>
    //   <div>
    //     <div className='flex flex-col md:flex-row items-center justify-between'>
    //     <div className='max-w-xl'>
    //     <h1 className='text-xl font-semibold text-left'><span className='font-extrabold'>Italy: </span>Italy: A country of knowledge,<br/> innovation and culture</h1>
    //        <button className="mt-6 bg-blue-700  px-6 py-2 rounded-lg hover:bg-blue-800 transition">
    //         Free Expert Consultation
    //       </button>
           
    //        </div>
    //        <div className="mt-10 md:mt-0">
    //       <img
    //         src="/card2.jpg"
    //         alt="Student with flag"
    //         className="w-72 md:w-96 object-cover"
    //       />
    //     </div>
    //     </div>
        
    //      <div className="mt-16 bg-gray-100 rounded-2xl shadow-lg p-8 grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
    //     <div>
    //       <p className="text-3xl font-bold text-blue-700">60+</p>
    //       <p className="text-gray-600 mt-2">Universities</p>
    //     </div>
    //     <div>
    //       <p className="text-3xl font-bold text-blue-700">€18k–€32k</p>
    //       <p className="text-gray-600 mt-2">Annual tuition fees</p>
    //     </div>
    //     <div>
    //       <p className="text-3xl font-bold text-blue-700">32k+</p>
    //       <p className="text-gray-600 mt-2">International Students</p>
    //     </div>
    //     <div>
    //       <p className="text-3xl font-bold text-blue-700">1 Year</p>
    //       <p className="text-gray-600 mt-2">Post-Study Work Visa</p>
    //     </div>
    //   </div>
    //     </div>
    // </section>
     <div className="bg-gradient-to-r from-white to-pink-50 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Text */}
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-5xl font-light leading-tight">
            <span className="font-bold">Italy:</span>{" "}
            <span>
              A country of knowledge, <br className="hidden md:block" />
              <span className="">
                innovation
              </span>{" "}
              and culture
            </span>
          </h1>
          <button className="bg-blue-700 text-white px-5 py-3 rounded font-semibold hover:bg-blue-800 transition">
            Free Expert Consultation
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-1 bg-gradient-to-r from-white to-pink-50 p-4 rounded-xl">
          <img
            src="/stit.jpg"
            alt="Student with flag"
            className="w-full max-w-sm mx-auto"
          />
        </div>
      </div>

      {/* Statistics */}
      <div className="mt-12 bg-gray-200 rounded-2xl p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-center gap-6 max-w-5xl mx-auto">
        <div>
          <h2 className="text-4xl text-blue-700 font-semibold">60+</h2>
          <p className="text-gray-800 font-bold">Universities</p>
        </div>
        <div>
          <h2 className="text-4xl text-blue-700 font-semibold">€18k–€32k</h2>
          <p className="text-gray-800 font-bold">Annual tuition fees</p>
        </div>
        <div>
          <h2 className="text-4xl text-blue-700 font-semibold">32k+</h2>
          <p className="text-gray-800 font-bold">International Students</p>
        </div>
        <div>
          <h2 className="text-4xl text-blue-700 font-semibold">1 Year</h2>
          <p className="text-gray-800 font-bold">Post-Study Work Visa</p>
        </div>
      </div>
    </div>
  )
}

const Secondsection =()=>{ 
  const whyitaly = [
    {
    
      title:'Excellent degree programs',
      description:'The degrees from universities in Italy are highly recognised. Business, Engineering, Fashion, and Designing are some of the most popular courses offered here.',
    },
      {
     
      title:'Affordable country',
      description:'Italy is considered an afforable country as the cost of studying there is among the lowest in Europe. Additionally, scholarships and grants are available to students based on merit.',
    },
      {
     
      title:'Better career opportunities',
      description:'Internships and job placements are available to all students across various sectors like fashion, design, travel, and many others. With many foreign businesses based in Italy, the exposure gained is highly valuable.',
    },
      {
     
      title:'Language and linguistic diversity',
      description:'Studying in Italy offers the opportunity to learn Italian, which enhances communication skills, cognitive development, and cross-cultural understanding. Proficiency in another language also boosts travel experiences and job prospects.',
    },
      {
    
      title:'Central Location in Europe',
      description:"Italy's central location in Europe makes it easy to travel and explore other European countries during breaks or weekends.",
    },
      {
    
      title:'Cultural Immersion',
      description:'Italian universities provide international students with the chance to immerse themselves in the Italian language, cuisine, and lifestyle, enriching the overall educational experience.',
    },
  ]
  return(
    <section>
  <div className="py-12 px-6 md:px-20 bg-white">
    {/* Grid with 2 columns: left content + right form */}
    <div className="grid md:grid-cols-3 gap-10">
      
      {/* Left Column: Content */}
      <div className="md:col-span-2">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-12">
          Why <span className="font-bold">Study In Italy?</span>
        </h2>

        <div className="space-y-12">
          {whyitaly.map((item, idx) => (
            <div key={idx} className="justify-items-start">
              <div className="flex gap-5 items-start">
                <div className="bg-blue-100 p-3 rounded-full">
                  <BookOpen className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
                  <p className="text-gray-600 mt-2">{item.description}</p>
                </div>
              </div>
              {idx !== whyitaly.length - 1 && (
                <hr className="border-t border-gray-200 mt-6" />
              )}
            </div>
          ))}
        </div>
      </div>

     
      <div>
        <BookConsultationForm />
      </div>
    </div>
  </div>
</section>


    
  )
}




const universities = [
  {
    name: "Istituto Marangoni",
    image: "/istituto-marangoni.webp",
    popularFor: "Fashion Design",
    ranking: "51-100",
  },
  {
    name: "Nuova Accademia di Belle Arti",
    image: "/nuova-accademia-di-belle-arti.webp",
    popularFor: "Graphic Design",
    ranking: "51-100",
  },
  {
    name: " Domus Academy Milan",
    image: "/domus-academy-milan.webp",
    popularFor: "Interior & Living Design",
    ranking: "151-200",
  },
  {
    name: "Sapienza-University of Rome ",
    image: "/sapienza-university-of-rome.webp",
    popularFor: "Classics and Ancient History",
    ranking: "151-200",
  },
  {
    name: "University of Bologna",
    image: "/university-of-bologna.webp",
    popularFor: " Law",
    ranking: "100-151",
  },
];

const UniversityList=()=> {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container || universities.length < 4) return;

    const cardWidth = 280 + 24; 
    const totalCards = universities.length;

    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex++;
      if (currentIndex > totalCards) {
        currentIndex = 1;
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollTo({ left: cardWidth * currentIndex, behavior: "smooth" });
      }

      setIndex(currentIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const duplicatedList =
    universities.length >= 4 ? [...universities, ...universities.slice(0, 4)] : universities;

  return (
    <div className="bg-[#e8eff8] py-10 px-4">
      <h2 className="text-3xl font-bold text-center">
        <span className="underline decoration-red-500 underline-offset-4">
        List of Universities 
        </span>{" "}
        In Mauritius
      </h2>
    <p className="text-center text-gray-600 mt-2">
  Mauritius is a top choice for international students seeking a prestigious education.
  <br />
  Here are some top universities where we have successfully placed students.
</p>


      <div className="relative mt-10">
    
        <div
          ref={scrollRef}
          className="flex overflow-x-hidden gap-6 scroll-smooth"
        >
          {duplicatedList.map((uni, i) => (
            <div
              key={i}
              className="w-[290px] flex-shrink-0 bg-white rounded-3xl p-6 shadow-md border border-gray-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src={uni.image}
                  alt={""}
                  width={64}
                  height={64}
                  className="object-contain border-2 border-blue-600 rounded"
                />
                <h3 className="font-semibold text-[15px] text-gray-900 leading-snug break-words">
                  {uni.name}
                </h3>
              </div>

              <hr className="mb-3 border-gray-300" />

              <div className="flex items-start gap-2 mb-2">
                <span className="text-blue-600 text-xl">🎓</span>
                <div className="text-sm text-gray-800">
                  <p className="font-medium">Popular For</p>
                  <p className="font-semibold">{uni.popularFor}</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <span className="text-blue-600 text-xl">🎖️</span>
                <div className="text-sm text-gray-800">
                  <p className="font-medium">QS World Ranking</p>
                  <p className="font-semibold">{uni.ranking}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {universities.length >= 4 && (
          <div className="w-full mt-4 px-5 relative">
            <div className="h-[1px] bg-gray-300 relative overflow-hidden">
              <div
                className="absolute top-0 h-[1px] w-[40%] bg-blue-600 transition-all duration-700"
                style={{
                  transform: `translateX(${index * 20}%)`,
                }}
              ></div>
            </div>
          </div>
        )}
      </div>

   <div className="flex justify-center items-center p-8">
  <Link href="/partnered-universities">
    <button className="bg-white hover:bg-blue-800 text-blue-800 hover:text-white font-semibold py-3 px-8 rounded-lg border-2 border-blue-600 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300">
      View our Partnered Universities
    </button>
  </Link>
</div>
    </div>
  );
}


const Costofstudying=()=>{
  return(
    <div className='bg-gray-200 rounded-4xl py-12 px-6'>
      <div className='max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start'>
        <div className='text-gray-800'>
          <h1 className='text-4xl font-bold mb-2 '>Cost Of Studying <br/>
          <span className='text-3xl font-semibold  '>In Italy</span></h1>
          <p className='mt-4 text-lg text-gray-700 max-w-3xl'>
            The cost of studying in Italy do offer high-quality education at a lower cost as 
            compared to other European countries. The cost of study in Italy for Indian students 
            varies from program to program.
          </p>
        </div>
        <div className='space-y-6 p-8 '>
        
         
            <div className='rounded-lg px-4 py-3 w-[350px]   shadow-lg'> 
              <p className='text-sm font-semibold mb-2'>Tuition Fees (Average per annum)</p>
              </div>
             
              <div className='space-y-3'>
                <div className='flex justify-between item-center bg-white rounded-lg px-4 py-3 shadow-sm'>
                  <span className='font-medium'>Bachelor’s</span>
                  <span className='font-medium'>EUR 900 – 4,000</span>
                </div>

                 <div className='flex justify-between item-center bg-white rounded-lg px-4 py-3 shadow-sm'>
                  <span className='font-medium'>Master’s</span>
                  <span className='font-medium'>EUR 2,000 – 3,500</span>
                </div>

              </div>
              <div className='rounded-lg px-4 py-3 w-[350px]   shadow-lg'>
                <p>Living Expenses (Average per annum)</p>
                </div>
              <div className='flex justify-between item-center bg-white rounded-lg px-4 py-3 shadow-sm'>
                <span></span>
                <span className='font-medium'>Approx. EUR 14,400</span>
              </div>

              <div className='rounded-lg px-4 py-3  w-[350px]   shadow-lg'>
                <p>Accommodation (Average per month)</p>
                </div>
              <div className='space-y-3'>
               < div className='flex justify-between item-center bg-white rounded-lg px-4 py-3 shadow-sm'>
                <span>On-Campus</span>
                <span className='font-medium'>EUR 400 - 900</span>
               </div>
                 < div className='flex justify-between item-center bg-white rounded-lg px-4 py-3 shadow-sm'>
                <span>Off-Campus</span>
                <span className='font-medium'>EUR 600 - 1,500</span>
               </div>
              </div>
        </div>

      </div>
      
    </div>
  )

}





const PopularCoursesSection = () => {
  const courses = [
  {
    name: "Business Management",
    image: "/bm.jpg" , 
  },
  {
    name: "Hospitality & Tourism",
    image: "/tourisam.jpg",
  },
  {
    name: "Humanities",
    image: "",
  },
   {
    name: "Fashion & Design Courses",
    image: "/fashion.jpg",
  },
   {
    name: "Engineering",
    image: "/eng.jpg",
  },
   {
    name: "Culinary Arts",
    image: "/cullinary.jpg",
  },
];
  return (
    <div className="py-12 px-4 text-center">
      {/* Title */}
      <h2 className="text-3xl font-bold text-gray-900">
        <span className="relative inline-block">
          <span className="relative z-10 text-black">Popular Courses</span>
          <span className="absolute left-0 right-0 bottom-0 h-1 bg-red-500 z-0 rounded-full"></span>
        </span>{" "}
        In Italy
      </h2>

      {/* Subtext */}
      <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
        Italy is emerging as a popular study abroad destination.<br/>Here are some of the most popular courses in Italy:
      </p>

      {/* Cards */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {courses.map((course, index) => (
          <div
            key={index}
            className="rounded-3xl overflow-hidden border border-blue-100 shadow bg-white"
          >
            <img src={course.image} alt={course.name} className="w-full h-48 object-cover" />
            <div className="py-4 text-lg font-semibold text-gray-900">{course.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};





const Moredetailsection=()=>{
 const [activeTab, setActiveTab] = useState('documents');
  return(
    <section>
    <div className='bg-white py-12 px-6'>
       <div className="max-w-7xl mx-auto">
             <h1 className='text-3xl text-center '>More about <span className='underline font-bold '>Italy</span></h1>


        <div className="flex flex-col md:flex-row gap-10 relative">
          <div className="md:w-1/4">
          <div className="sticky top-20 space-y-4">
                <button 
                  onClick={() => setActiveTab('documents')}
                  className={`flex items-center gap-2 w-full justify-center md:justify-start px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeTab === 'documents' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  <FileText size={16} />
                  Documents
                </button>
                <button 
                  onClick={() => setActiveTab('visa')}
                  className={`flex items-center gap-2 w-full justify-center md:justify-start px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeTab === 'visa' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  <FileSearch size={16} />
                  Visa
                </button>
              </div>
            </div>


            <div className="md:w-3/4 space-y-10">
             {activeTab === 'documents' && (
            <div className="bg-gray-50 p-6 rounded-4xl shadow-lg">
              <h3 className="text-xl font-bold mb-2">
                Documents required to study in Italy
              </h3>
              <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                Although getting admission in Italy is easy, it is necessary to
                make sure that all documents are ready for admission purposes.
                Here are the documents required to study in Italy:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                <li> Application Form</li>
                <li>Academic Documents</li>
                <li>Transcript</li>
                <li>Language Proficiency Test Scores</li>
                <li> Other entrance exams (GRE/GMAT) scores</li>
                <li>Recommendation Letters (LORs)</li>
              </ul>
            </div>
             )}
              {activeTab === 'visa' && (
            <div className="bg-gray-50 p-6 rounded-4xl shadow-lg">
              <h3 className="text-xl font-bold mb-2">
                Italy study visa process
              </h3>
              <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                The student needs to apply for Pre Enrollment on the
                UNIVERSITALY portal after being accepted into the chosen course.
                Once pre-enrolled, they apply for a D-Visa (if more than 90
                days) or C-Visa (if less). The following documents are needed:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                <li>Valid Passport</li>
                <li>Proof of admission to the course</li>
                <li>
                  Proof of previous education (After the Attestation and
                  Apostille)
                </li>
                <li>Proof of funds</li>
                <li>Cover letter</li>
                <li>Medical Insurance</li>
                <li>Air Ticket (depends)</li>
                <li>Proof of Accommodation</li>
              </ul>
            </div>
              )}
            </div>

        </div>

       </div>
    
      </div>


     
    </section>
  )
}



interface ScholarshipItem {
    name: string;
    description: JSX.Element;
}

const items: ScholarshipItem[] = [
    {
        name: ' Italy',
        description: (
            <div>
                <p>
                   The country offers numerous scholarships for Indian students. Italy is an attractive destination for
                    students seeking financial assistance for their higher education. These Italian scholarships for 
                    Indian students are provided by both Italian universities and external organizations. Scholarships 
                    are often limited and are awarded based on merit, after assessment of their grades from their previous
                   studies. Colleges offering programs in the field of Art and Design, have individual scholarships that 
                   they provide the students with, based on their portfolio and profile.

                </p>
            </div>
        ),
    },
];

function Scholarships() {
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

    return (
        <>
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
                            src="/scinitaly.jpg"
                            alt="Scholarships"
                            className="h-80 w-full max-w-lg object-cover rounded-lg shadow-lg"/>
                    </div>
                </div>
            </section>
 </>
    );
}




const CareerProspects = () => {

  const Career  = [
  {
    name: "Creative Industries",
    image: "/bm.jpg" , 
  },
  {
    name: "Fashion & Design",
    image: "/tourisam.jpg",
  },
  {
    name: "Food & Wine",
    image: "",
  },
   {
    name: "Marketing & Sales...",
    image: "/fashion.jpg",
  },
   {
    name: "IT professionals",
    image: "/eng.jpg",
  },
   {
    name: "Engineering &...",
    image: "/cullinary.jpg",
  },
];

  return (
    <div className="py-12 px-4 text-center">
      {/* Title */}
      <h2 className="text-4xl font-semibold text-gray-900">
        <span className="relative inline-block">
          <span className="relative z-10 text-black">Career Prospects In Italy</span>
         </span>
      </h2>

      {/* Subtext */}
      <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
The employment landscape in Italy is diverse, offering opportunities across various sectors.
Here are some key sectors and industries that presently offer employment opportunities:      </p>

      {/* Cards */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {Career.map((career, index) => (
          <div
            key={index}
            className="rounded-3xl overflow-hidden border border-blue-100 shadow bg-white"
          >
            <img src={career.image} alt={career.name} className="w-full h-48 object-cover" />
            <div className="py-4 text-lg font-semibold text-gray-900">{career.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};


const SuccesStories =()=>{
  const stories = [
    {
      id: 1,
      description:'CI does not stop at admissions. Their ongoing support post-study helped me transition smoothly into my career.The best decision for my academic journey!',
      name: 'Miral Shah',
      place:'Bournemouth University ,UK' ,
      profileImage:'/ms1.webp',
      mainImage:'/ms.webp',
    },
      {
      id: 1,
      description:' It is one of the best consulting firms available and they are genuinely committed to assisting the students.The counsekors are very approachable',
      name: 'Abhinay Pandit',
      place:'New york Film Academy, USA' ,
      profileImage:'/ab.webp',
      mainImage:'/ab1.webp',
    },
      {
      id: 1,
      description:'Wonderful consultant.I had a very flourishing process with them . They were knwledgeble nd knew what they were doing.',
      name: 'Archana Sidhwani',
      place:'Sheridan College,Canada' ,
      profileImage:'/as.webp',
      mainImage:'/as.webp',
    },
      {
      id: 1,
      description:'My experience with CI has been great.My counswlor helped me tremendously and was always there to clear any doubts.',
      name: 'Srikamalesh Rajendraboopathy',
      place:'Macquaire University , AUS' ,
      profileImage:'/sr1.webp',
      mainImage:'/sr.webp',
    },
  ]


  
  const [ currentSlide, setCurrentSlide] = useState(0);

  const goToPrevious =()=>{
    if (currentSlide===0){
      setCurrentSlide(stories.length - 1);

    }else{
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToNext =()=>{
    if (currentSlide === stories.length - 1){
      setCurrentSlide(0)
    }else{
      setCurrentSlide(currentSlide + 1)
    }
  }


  return(
       <div className="w-full bg-gray-300 mx-auto p-8">
         
      <h1 className="text-3xl font-bold underline text-center mb-8 text-gray-800">Success Stories</h1>
     
      
      <div className="bg-gray-300 rounded-3xl p-8 relative overflow-hidden">
      <div className="absolute top-6 right-6 flex space-x-3 z-10">
          <button
            onClick={goToPrevious}
            className="bg-white text-gray-600 w-12 h-12 rounded-full shadow-lg hover:bg-gray-50 flex items-center justify-center text-xl font-bold transition-all duration-200"
          >
            ←
          </button>
          <button
            onClick={goToNext}
            className="bg-white text-gray-600 w-12 h-12 rounded-full shadow-lg hover:bg-gray-50 flex items-center justify-center text-xl font-bold transition-all duration-200"
          >
            →
          </button>
        </div>

        {/* Main content container */}
        <div className="bg-white  rounded-3xl max-w-6xl shadow-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row min-h-96">
            {/* Left side - Image */}
            <div className="lg:w-1/3 relative rounded-4xl m-8">
              <img 
                src={stories[currentSlide]?.mainImage}
                alt="Student success story"
                className="w-full h-64 lg:h-full object-cover rounded-2xl"
              />
              {/* Play button overlay */}
              {/* <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white bg-opacity-90 rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
                  <div className="w-0 h-0 border-l-8 border-l-blue-500 border-t-6 border-t-transparent border-b-6 border-b-transparent ml-1"></div>
                </div>
              </div> */}
            </div>

            {/* Right side - Content */}
            <div className="lg:w-2/3 p-8 lg:p-12 rounded-2xl flex flex-col justify-center">
              {/* Quote/Description */}
              <p className="text-lg lg:text-xl text-gray-700 mb-8 leading-relaxed">
                {stories[currentSlide]?.description}
              </p>
              
              {/* Profile Section */}
              <div className="flex items-center space-x-4">
                {/* Profile Image */}
                <img 
                  src={stories[currentSlide]?.profileImage}
                  alt={stories[currentSlide]?.name}
                  className="w-16 h-16 rounded-full object-cover border-3 border-white shadow-md"
                />
                {/* Name and Place */}
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    {stories[currentSlide]?.name}
                  </h3>
                  <p className="text-gray-600">
                    {stories[currentSlide]?.place}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      
      </div>
    </div>
     
  )}




const Italy = () => {
  return (
    <div >
      <Herosection/>
      <Secondsection/>
      <UniversityList/>
      <PopularCoursesSection/>
      <Costofstudying/>
      <Scholarships/>
      <CareerProspects/>
      {/* <Scholarships_Italy/> */}
      <Moredetailsection/>

      <SuccesStories/>
      {/* <TestimonialCarousel/> */}
      {/* <Topcourse/> */}
      
     
     
    </div>
  )
}

export default Italy;