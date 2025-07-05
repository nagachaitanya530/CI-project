import { title } from 'process';
import React from 'react'

function Score() {




    const scores = [
        {
                    heading:(<> GMAT <span className='decoration-red-700 underline'>Scores</span></>),
                    title:"",
                    points:["GMAT Focus Edition is graded on a scale from 205 to 805 in 10 points increment.",
                        "The score of each section contributes equally to the total score.",
                        "Both, Total score and Percentile score are considered by universities/colleges for admission.",
                        "Generally, a score of at least 650 is considered a good GMAT (GFE) score. Score above 695 is considered an excellent GMAT (GFE) score.",
                        "Good score is 655+ /805",
                    ]

        },
        {heading:"",
                                title:"",
                                
            table:[
                { section: "Quantitative Reasoning Score	", range: "60-90", Score : "1", Standard:"3" },
  { section: "Verbal Reasoning Score", range: "60-90", Score : "1", Standard:"3" },
  { section: "Data Insights Score", range: "60-90", Score : "1", Standard:"3" },
  { section: "Total", range: "205-805", Score : "10", Standard:"30-40" },
            ]
        },
        {
            heading:"",
     title:"Salient Features of GMAT Focus Edition",
     points:[
        "GMAT is Computer Adaptive Test. A testing software determines the difficulty level of the next few questions based on your performance.",
        "All the 3 sections - Verbal, Quant and DI are Computer adaptive.", 
         "The 3 sections can be completed in any order by the test-taker.",
          "At the end of each section, the test-takers can book-mark and review as many questions as they like.",
         "Test-takers can edit upto 3 answers in each section.",
         "A detailed score report gives insights into a student's performance in each section and each question type.",
         "Test-takers can send 5 reports for free within 48 hours of receiving their Official score reports. However, additional score reports can be obtained only after the payment of a fee.",
         "We Conduct both online and offline sessions.",
         
          
         
        
     ]
        }
        
  
  
];
  return (
   

<div  id="score" className="space-y-8 pflex flex-col px-4 gap-15 lg:px-25 lg:py-10 scroll-mt-30">
  {scores.map((item, index) => (
    <div key={index} className=" p-6 ">
      
      {/* Heading */}
      {item.heading && (
        <h3 className="text-xl md:text-4xl  ">{item.heading}</h3>
      )}

      {/* Title */}
      {item.title && item.title !== "" && (
        <h4 className="text-lg md:text-2xl mt-4">{item.title}</h4>
      )}

      {/* Points List */}
      {item.points && (
        <ul className="list-disc list-inside mt-2 space-y-1">
          {item.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      )}

      {/* Table Section */}
      {item.table && (
        <div className="overflow-x-auto mt-4 rounded-t-2xl overflow-hidden">
          <table className="min-w-full text-center border-collapse border border-black">
            <thead className="bg-blue-900 text-white">
              <tr>
                <th className="py-3 px-4 border border-black">Sections</th>
                <th className="py-3 px-4 border border-black">Score Range</th>
                <th className="py-3 px-4 border border-black">Score Interval</th>
                <th className="py-3 px-4 border border-black">Standard error of measurement</th>
              </tr>
            </thead>
            <tbody className="bg-white text-black">
              {item.table.map((row, rowIndex) => (
                <tr key={rowIndex} className="border border-black">
                  <td className="py-3 px-4 border border-black">{row.section}</td>
                  <td className="py-3 px-4 border border-black">{row.range}</td>
                  <td className="py-3 px-4 border border-black">{row.Score}</td>
                  <td className="py-3 px-4 border border-black">{row.Standard}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

    </div>
  ))}
</div>



  )
}

export default Score