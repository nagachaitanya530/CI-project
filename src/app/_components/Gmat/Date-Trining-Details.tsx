import { title } from 'process'
import React from 'react'

export default  function Date() {


 const details = [
    {
      heading: (<> GMAT <span className='decoration-red-700 underline'>Dates</span></>),
      title: "",
      description: "The exam can be taken in GMAT exam centers in specific cities only. Different cities have different exam dates. However, the exam occurs every month throughout the year. It is recommended to book the exam 2-3 months in advance to avail preferable dates."
    },
  ]

  const Training=[
    {
        heading:(<> GMAT <span className='decoration-red-700 underline'>Training</span></>),
        title:"Salient Features of GMAT coaching at Edwise",
        point:["100 hours of intensive and comprehensive GMAT preparation training",
            "Maximum 10-15 students per batch, personalizing each session of the GMAT preparation coching.",
            "Our coaching for GMAT has a syllabus with a strong focus on building fundamental knowledge in Math.",
            "Mathematics for MBA by RS Agarwal, GMAT official Guide as courseware.",
            "The GMAT classes are taught by qualified, experienced and trained faculties",
            "Mathematics for MBA by RS Agarwal, GMAT Princeton and GMAT official Guide as courseware.",
            "Our GMAT training also includes 20 full-length mock tests.",
            "Facility of shifting to any of our GMAT coaching centres across India",
            "We Conduct both online and offline sessions for the GMAT test prep coaching.",
        ],
        sub:"Timing",
        point2:[
            "Weekdays: Tuesday to Friday, 2 hours per day",
            "Weekends: Saturday and Sunday, 4 hours per day",
            "Fast track mode: Tuesday to Sunday, 4 hours per day",
        ]
    },
    
]

const Miscellaneous=[
      
    {
        heading:(<> Miscellaneous <span className='decoration-red-700 underline'>Details</span></>),
        title:"",
        point:[
            "Score Validity : 5 years",
            "Registration Mode : Edwise Centre / Online",
            "Mode of payment : Debit Card / Credit card",
            "Test Administration Frequency : Maximum of 5 attempts a year with a lifetime limit of 8 attempts.",
            "Test Repetition policy: 16 days after the previous attempt",
            "Score Reporting time : 3-5 days after the test date"
        ],
        sub:"Fees :",
        point2:[
            "Test Fee: $325 (Including taxes)",
            "Extra Score Reporting Fee: $35 each",
            "Rescheduling Fee: $55 each",
        ]
        
    }
]

 return (
    <>
  <div id='dates' className="space-y-6 flex flex-col px-10 gap-15 lg:px-25 lg:py-10  mt-20 scroll-mt-24">
        {details.map((item, index) => (
          <div key={index} className="">
            <h3 className="text-xl md:text-4xl  ">{item.heading}</h3>

            {item.title && (
              <h4 className="text-lg md:text-2xl mt-4">{item.title}</h4>
            )}

            {item.description && (
              <p className="mt-2 md:text-lg">{item.description}</p>
            )}
          </div>
        ))}
      </div>

<div id='training' className="space-y-6 flex flex-col px-10 gap-15 lg:px-25 lg:py-10 mt-20 scroll-mt-24">
  {Training.map((item, index) => (
    <div key={index} className="">
      <h3 className="text-xl md:text-4xl  ">{item.heading}</h3>

      {item.title && (
        <h4 className="text-lg md:text-2xl mt-4">{item.title}</h4>
      )}

      {item.point && (
        <ul className="list-disc list-inside mt-2 space-y-1">
          {item.point.map((pitem, pindex) => (
            <li key={pindex}>{pitem}</li>
          ))}
        </ul>
      )}

      {item.sub && (
        <p   className="mt-4 text-2xl">{item.sub}</p>
      )}

      {item.point2 && (
        <ul className="list-disc list-inside mt-2 space-y-1">
          {item.point2.map((point2, index2) => (
            <li key={index2}>{point2}</li>
          ))}
        </ul>
      )}
    </div>
  ))}
</div>  

<div id='fee' className="space-y-6 flex flex-col px-10 gap-15 lg:px-25 lg:py-10 mt-20 scroll-mt-24">
  {Miscellaneous.map((item, index) => (
    <div key={index} className="">
      <h3 className="text-xl md:text-4xl  ">{item.heading}</h3>

      {item.title && (
        <h4 className="text-lg md:text-2xl mt-4">{item.title}</h4>
      )}

      {item.point && (
        <ul className="list-disc list-inside mt-2 space-y-1">
          {item.point.map((pitem, pindex) => (
            <li key={pindex}>{pitem}</li>
          ))}
        </ul>
      )}

      {item.sub && (
        <p className="mt-4 text-2xl">{item.sub}</p>
      )}

      {item.point2 && (
        <ul className="list-disc list-inside mt-2 space-y-1">
          {item.point2.map((point2, index2) => (
            <li key={index2}>{point2}</li>
          ))}
        </ul>
      )}
    </div>
  ))}
</div>

   </>
)
}