// 'use client'
// import { useState } from "react";

// function Curriculum(){
//   const [openIndex, setOpenIndex] = useState(null);   // State to track which item is open

    
//   // Array of curriculum weeks and descriptions
//   const curriculumData = [
//     {
//       week: "Week 1-2",
//       description: "Learn grammar structures used in business writing and meetings.",
//     },
//     {
//       week: "Week 3-4",
//       description: "Master commonly used terms and phrases for business correspondence.",
//     },
//     {
//       week: "Week 5-6",
//       description: "Improve your email writing and phone call handling skills.",
//     },
//     {
//       week: "Week 7-8",
//       description: "Practice and enhance your business presentation and negotiation techniques.",
//     },
//     {
//       week: "Week 9-10",
//       description: "Engage in group discussions and participate in skill assessments.",
//     },
//     {
//       week: "Week 11-12",
//       description: "Learn how to handle real-world business client scenarios effectively.",
//     },
//     {
//       week: "Week 13-14",
//       description: "Review all course materials and take advanced-level tests.",
//     },
//     {
//       week: "Week 15-16",
//       description: "Receive your course certification and personal feedback on your progress.",
//     },
//   ];

//    // Function to toggle dropdown visibility
//   const toggleDropdown = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };
  
//     return(
//         <>
//          {/* Curriculum */}

//           {/* <section className="bg-gray-100 py-10 px-4"> */}
//           <section className="py-10 px-4 md:py-8 lg:py-10">
//             <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

//               {/* Left Side: Curriculum */}
//               < div className="lg:col-span-2">
//                 <h2 className="text-2xl font-semibold mb-6">Curriculum to be covered</h2>
//                 <ul className="space-y-2 text-sm">
//                   {curriculumData.map((item, index) => (
//                     <li key={index} className=" p-4">
//                       <div
//                         className="flex justify-between items-center cursor-pointer"
//                         onClick={() => toggleDropdown(index)}
//                       >
//                         <span className="font-medium">{item.week}</span>
//                         <svg
//                           className={`w-5 h-5 text-gray-600 transform transition-transform duration-200 ${openIndex === index ? "rotate-180" : ""
//                             }`}
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             d="M19 9l-7 7-7-7"
//                           />
//                         </svg>
//                       </div>
//                       {openIndex === index && (
//                         <div className="mt-2 text-gray-700">{item.description}</div>
//                       )}
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Right Side Card (no margin/padding at top) */}
//               <div className="m-0 p-0 bg-gray-300 rounded-lg shadow overflow-hidden self-start">
//                 <img
//                   src="../../home/professional-women.png"
//                   alt="Sunday Webinar"
//                   className="w-fit h-96 object-cover object-center"
//                 />
//                 <div className="p-6">
//                   <h2 className="text-2xl font-semibold mb-2">Sunday Webinar</h2>
//                   <p className="text-base text-gray-500 m-2">
//                     Join our open webinar on Sundays to improve your English communication skills and to get in touch with our huge community of students.
//                   </p>
//                   <a
//                     href="https://nationalinstituteoflanguage.in/free-webinar/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-block font-bold mt-2 px-4 py-2 border"
//                   >
//                     Register Free
//                   </a>
//                 </div>
//               </div>

//             </div>
//           </section>

          
        
//         </>
//     );
// }
// export default Curriculum;



'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Curriculum() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const curriculumData = [
    {
      week: "Week 1-2",
      description: "Learn grammar structures used in business writing and meetings.",
    },
    {
      week: "Week 3-4",
      description: "Master commonly used terms and phrases for business correspondence.",
    },
    {
      week: "Week 5-6",
      description: "Improve your email writing and phone call handling skills.",
    },
    {
      week: "Week 7-8",
      description: "Practice and enhance your business presentation and negotiation techniques.",
    },
    {
      week: "Week 9-10",
      description: "Engage in group discussions and participate in skill assessments.",
    },
    {
      week: "Week 11-12",
      description: "Learn how to handle real-world business client scenarios effectively.",
    },
    {
      week: "Week 13-14",
      description: "Review all course materials and take advanced-level tests.",
    },
    {
      week: "Week 15-16",
      description: "Receive your course certification and personal feedback on your progress.",
    },
  ];

  const toggleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="curriculum" className="py-10 px-4 md:py-8 lg:py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left Side: Curriculum List */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-semibold mb-6">Curriculum to be covered</h2>
          <ul className="space-y-2 text-sm">
            {curriculumData.map((item, index) => (
              <li key={index} className="p-4">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleDropdown(index)}
                >
                  <span className="font-medium">{item.week}</span>
                  <svg
                    className={`w-5 h-5 text-gray-600 transform transition-transform duration-200 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                {openIndex === index && (
                  <div className="mt-2 text-gray-700">{item.description}</div>
                )}
              </li>
            ))}
          </ul>
        </div>

            <div>

              <div className="border mb-5">
                <div className="bg-cyan-700 text-white rounded-xl p-6 w-full shadow-md transition-all duration-300">
                  {openIndex !== null && curriculumData[openIndex] ? 
                  (<>
                    <p className="text-xl mb-2">Current Week</p>
                    <h2 className="text-2xl font-semibold">{curriculumData[openIndex].week}</h2>
                    <p className="text-sm mt-2 text-blue-100">Click to view Curriculum</p>
                  </>
                  ) : (
                    <>
                    <p className="text-xl mb-2">Curriculum</p>
                    <p className="text-sm text-blue-100">Select week for view its Content</p>
                    </>
                  )
                  }
                </div>

              </div>

            
        {/* Right Side: Static Info Card */}
        <div className="m-0 p-0 bg-gray-300 rounded-lg shadow overflow-hidden self-start">
          <div className="relative w-full h-96">
            <Image
              src="/home/professional-women.png"
              alt="Sunday Webinar"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="p-5">
            <h2 className="text-2xl font-semibold mb-2">Sunday Webinar</h2>
            <p className="text-base text-gray-600 mb-5">
              Join our open webinar on Sundays to improve your English communication skills and to get in touch with our huge community of students.
            </p>
            <Link
              href="/english-business-course/free-webinar"
              className=" px-5 py-3 text-white border rounded-lg bg-cyan-500">
              Register Free
            </Link>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}


// contact ayush for reference