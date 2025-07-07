import { title } from "process";
import { map } from "zod";
import { tr } from "zod/v4/locales";

const gmatTableData = [
  { section: "Data Insights", questions: "20", duration: "45 minutes" },
  { section: "Quantitative Reasoning", questions: "21", duration: "45 minutes" },
  { section: "Optional Break", questions: "", duration: "" },
  { section: "Verbal Reasoning", questions: "23", duration: "45 minutes" },
  { section: "Total Duration", questions: "", duration: "2 Hour 15 minutes" },
];


const patt=[
  {
    heading:(<>GMAT <span className="border-b-4 border-red-500 inline-block">Pattern</span> </>),
    discription:"The previous version of GMAT, that is, GMAT Classic Edition (GCE) has been discontinued from 1st of February 2024.Currently, the GMAT Focus Edition (GFE) is the latest and sole mode for taking the exam.",
    note:"GMAT Focus Edition has three sections:"
  }
   
  
]




export default function GmatTable() {
  return (
    <>

{/* 
    <div className="overflow-x-auto rounded-xl shadow-lg px-20">
        <table className="min-w-full text-center border-collapse border-2 border-black ">
            <thead >
                <tr className="bg-blue-900 text-white">
                    <th className=" border-r border-black py-3 px-4 text-sm md:text-base">GMAT Focus Edition Sections</th>
                <th className=" border-r border-black py-3 px-4 text-sm md:text-base">Number of Questions</th>
                <th className="py-3 px-4 text-sm md:text-base">Section Duration</th>
                </tr>
            </thead>
            <tbody className="text-black">
                {
                    gmatTableData.map((item,index)=>(
                <tr key={index} className="border-2 border-black">

                   condition ? <IfTrue /> : <IfFalse />
                    
                 
                 {
  item.section === "Optional Break" ? (
    <>
      <td colSpan={3} className="py-4 px-4 font-medium text-center">
        {item.section}
      </td>
    </>
  ) : item.duration === "2 Hour 15 minutes" ? (
    <>
      <td>{item.section}</td>
      <td colSpan={2} className="py-4 px-4 font-medium text-center">
        {item.duration}
      </td>
    </>
  ) : (
    <>
      <td>{item.section}</td>
      <td>{item.questions}</td>
      <td>{item.duration}</td>
    </>
  )
}

        </tr>

                    ))
                }
            </tbody>
        </table>
    </div> */}




<div id="pattern"className="scroll-mt-35">
  {
    patt.map((item,index)=>(
      <div key={index} className="lg:px-25 px-5  flex flex-col  gap-6 mt-20 " >
       <h3 className="text-2xl lg:text-5xl">{item.heading}</h3>
       <p className="text-lg">{item.discription}</p>
       <p className="text-blue-900 text-2xl">{item.note}</p>
      </div>
    ))
  }
</div>



 <div className="overflow-x-auto   border-black px-4 lg:px-25">
  <table className="min-w-full text-center border-collapse border border-black ">
    <thead>
      <tr className="bg-blue-900 text-white">
        <th className="border-r border-black py-3 px-4 text-sm md:text-base">
          GMAT Focus Edition Sections
        </th>
        <th className="border-r border-black py-3 px-4 text-sm md:text-base">
          Number of Questions
        </th>
        <th className="py-3 px-4 text-sm md:text-base">
          Section Duration
        </th>
      </tr>
    </thead>
    <tbody className="text-black">
      {gmatTableData.map((item, index) => (
        <tr key={index} className="border-t border-black">
          {item.section === "Optional Break" ? (
            <td colSpan={3} className="py-4 px-4 font-medium text-center border-r border-black">
              {item.section}
            </td>
          ) : item.duration === "2 Hour 15 minutes" ? (
            <>
              <td className="border-r border-black py-4 px-4 font-medium">{item.section}</td>
              <td colSpan={2} className="py-4 px-4 font-medium text-center border-r border-black">
                {item.duration}
              </td>
            </>
          ) : (
            <>
              <td className="border-r border-black py-4 px-4 font-medium">{item.section}</td>
              <td className="border-r border-black py-4 px-4 font-medium">{item.questions}</td>
              <td className="py-4 px-4 font-medium">{item.duration}</td>
            </>
          )}
        </tr>
      ))}
    </tbody>
  </table>
</div>





</>
  );
}








