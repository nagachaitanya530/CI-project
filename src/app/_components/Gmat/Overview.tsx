import { Heading3 } from 'lucide-react';
import React, { type JSX } from 'react'


interface GmatSection {
 heading: JSX.Element | string;      
  paragraphs?: string[];               
  sections?: {
    title: string;                      
    points: string[];                   
  }[];
  note?: string;                        
}

function Overview() {

const over = [
  {
    heading: (
      <>
        GMAT <span className="border-b-4 border-red-500 inline-block">Overview</span>
      </>
    ),
    paragraphs: 
      "GMAT (Graduate Management Admission Test) is a globally recognized business school exam to get into business school for pursuing postgraduate degrees.The GMAT exam assesses an individual's business skills as well as other in-demand business world relevant skills such as data analytics.Over 7,700 business school programs throughout the world rely on GMAT scores for enrolling students in Master of Business Administration (MBA), MS in Management and other post-graduate business degree courses."
    
  },
  {
    heading:"Ways to take GMAT Focus Edition Exam",   
    sections: [
      {
        title: "GMAT Focus in Test Centre",
        points: [
          "The test-takers may choose to take the GMAT Focus Edition exam in person at a GMAT test center.",
          "Test-takers choose from a list of test centers and available time slots.",
          "Test infrastructure such as desk, chair, computer, internet connection, electricity are taken care of by the GMAT exam centers.",
          "The exam is monitored by an in-person test-administrator.",
          "It is advisable to reach the exam test center 30 minutes in advance."
        ]
      },
      {
        title: "GMAT Online",
        points: [
          "The test-takers may choose to take the GMAT Focus Edition exam online at home.",
          "Testing time slots are available 24x7.",
          "Test-takers must themselves arrange for all exam-related infrastructure.",
          "The exam is monitored by a remote proctor.",
          "Test-takers must log-in 15 minutes in advance to complete the check-in formalities."
        ],
         note:
      "However, both modes of taking the GMAT exam (GFE) have the same content, format, and the process of receiving and reporting the score."
      }
    ],
   
  }
];

  return (
<>







{
 over.map((item,index)=>(
    <div key={index} id='overview' className='flex flex-col gap-8 lg:px-25 px-4  mb-4 scroll-mt-35 '>
        {index===0 && <h3 className='text-2xl lg:text-4xl xl:text-5xl'>{item.heading}</h3>}
        {item.paragraphs && <p className='lg:text-xl'>{item.paragraphs}</p> }



 
        <div className='flex gap-5 flex-col '>
            {index===1 && <h3 className='text-2xl lg:text-3xl'>{item.heading}</h3> }
           
        {
            
            item.sections?.map((sitems,sindex)=>(
                <div key={ sindex} >
                    <div className='flex-col  gap-3 flex'>
                        {sitems.title && <h4 className='text-blue-900 text-2xl'>{sitems.title}</h4> }
                    <ul className="list-disc ml-6 space-y-2 text-gray-700 text-lg flex  flex-col ">{
                        sitems.points.map((i,j)=>(
                            
                                <li key={j} className=''>{i}</li>
                          
                        ))
                    }</ul>
                    {sitems.note && <p className='text-blue-900 text-xl lg:text-2xl'>{sitems.note}</p> } 
                    </div>
                    

                </div>
            ))
         
        }
        
        </div>
         
    </div>
 
 ))
}








</>
  )
}

export default Overview











// <div className="space-y-8">
//   {over.map((item, index) => (
//     <div key={index}>
//       Heading
//       <h2 className="text-2xl font-bold mb-2">{item.heading}</h2>

//       Paragraphs section
//       {item.paragraphs && (
//         <p className="text-gray-700">{item.paragraphs}</p>
//       )}

//       Sections with points
//       {item.sections?.map((section, sIdx) => (
//         <div key={sIdx} className="mt-4">
//           <h3 className="text-lg font-semibold">{section.title}</h3>
//           <ul className="list-disc list-inside text-gray-600 mt-1">
//             {section.points.map((point, pIdx) => (
//               <li key={pIdx}>{point}</li>
//             ))}
//           </ul>
//         </div>
//       ))}

//       Optional note
//       {item.note && (
//         <p className="italic text-sm text-gray-500 mt-4">{item.note}</p>
//       )}
//     </div>
//   ))}
// </div>
