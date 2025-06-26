import { Section } from 'lucide-react'
import React from 'react'
import { tr } from 'zod/v4/locales'

function Syllabus() {

const Syllabus=[
    {Section:"Verbal Reasoning	", question:["Reading Comprehension", "Critical Reasoning"],
        chainges:["Sentence Correction has been eliminated from the Verbal Reasoning Section."
        ]},





    {Section:"Quantitative Reasoning	", question:["Problem Solving","(Algebra and Arithmetic)"],
        chainges:["Geometry has been eliminated from the Quantitative Reasoning Section.","Data Sufficiency has been shifted from the Quantitative Reasoning Section to a new Data Insights section."





        ]},



        
    {Section:"Data Insights	", quetion:["Data Sufficiency","Multi-source Reasoning","Table-analysis","Graphics Interpretation","Two-Part Analysis	"],
        
        
        chainges:[
"A new Data Insights section has been introduced.",
"It subsumes the Integrated Reasoning section and Data sufficiency questions.",
"The Analytical Writing Section has been removed from the GMAT Focus Edition.",
"Overall, the number of questions in GMAT (GFE) have been reduced as compared to the former GMAT (GCE).",
"Overall timelimit for GMAT (GFE) has also been reduced as compared to the former GMAT (GCE)."

 ]}
    ]





  return (
    <>

<div  id='syllabus' className="px-4 sm:px-6 lg:px-20 py-10 scroll-mt-30">
  <h3 className="text-2xl sm:text-3xl lg:text-5xl  py-6 ">
    GMAT <span className="underline decoration-red-500">Syllabus</span>
  </h3>

  {/* Responsive table container */}
  <div className="overflow-x-auto px-4 ">
    <table className="min-w-full text-sm sm:text-base text-center border-collapse">
      <thead className="bg-blue-900 text-white">
        <tr>
          <th className="py-3 px-4 border border-black">
            GMAT Focus Edition (GFE) Sections
          </th>
          <th className="py-3 px-4 border border-black">
            Question Types
          </th>
          <th className="py-3 px-4 border border-black">
            Changes made in GFE
          </th>
        </tr>
      </thead>

      <tbody className="bg-white text-black">
        {Syllabus.map((item, index) => (
          <tr key={index} className="border border-black align-top">
            <td className="py-3 px-4  border border-black">
              {item.Section}
            </td>

            <td className="py-3 px-4 border border-black">
              <ul className="list-disc list-inside text-center  space-y-1">
                {(item.question || item.quetion)?.map((q, i) => (
                  <li key={i}>{q}</li>
                ))}
              </ul>
            </td>

            <td className="py-3 px-4 border border-black text-center w-1/3 xl:px-25">
              <ul className="list-disc  list-inside space-y-1">
                {item.chainges?.map((chg, i) => (
                  <li key={i}>{chg}</li>
                ))}
              </ul>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>




</>


  )
}

export default Syllabus