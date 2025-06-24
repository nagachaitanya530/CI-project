'use client'

import type { JSX } from "react";
import TOC from "./TableOfContents";

interface document {
    heading: string,
    description: JSX.Element
}
interface visa {
    heading: string,
    description: JSX.Element
}
const doc_items: document[] = [
    {
        heading: "Documents required to study in New Zealand",
        description: (
            <div>
                <span className="text-black"> The most common list of documents required
                    when applying to study in New Zealand includes:</span>
                    <ul className="list-disc p-5">
                        <li>Completed Application Form</li>
                        <li>Passport</li>
                        <li>Academic Transcripts</li>
                        <li>English Language Proficiency</li>
                        <li>Letter(s) of Recommendation</li>
                        <li>Statement of Purpose (SOP) or Personal Statemen</li>
                        <li>CV/Resume</li>
                        <li>Portfolio (if applicable)</li>
                        <li>Financial Documentation</li>
                        <li>Health and Medical Insurance</li>
                    </ul>
                
            </div>
        )
    }]

const visa_items: visa[] = [{
    heading: "Canada Study Visa Process",
    description: (<div>
        <span className="text-black">  To study in Canada you need to apply for visa ideally 3 months prior to the intake. Below are the documents required - </span>
            <ul className="list-disc p-5">
               <li>A candidate must have an unconditional Offer Letter</li>
               <li>Financial proof for the next 12 months covering tuition fees and living expenses</li>
               <li>All relevant academic documents along with resume</li>
               <li>Medical insurance is mandatory</li>
               <li>Police clearance certificate</li>
            </ul>
        
    </div>

    )
}]

function MoreAbout() {
    return (
        <>

            <h1 className="text-4xl md:text-4xl lg:text-4xl text-center my-10">More About <span className="font-semibold decoration-red-600 underline-offset-4 underline"> New Zealand</span></h1>
            <div className="flex flex-col md:flex-row lg:justify-between lg:mx-15">

                {/* LeftSide SideNavbar  */}
                <div className="lg:m-10">
                    <TOC />
                </div>

                {/* Right Side PArt  */}
                <section>
                    {/* Document  */}
                    <div id="document" className="m-4 md:m-10 scroll-m-20 ">
                        {
                            doc_items.map((item,index) =>
                                <div key={index} className="border-2 p-5 md:p-10 rounded-4xl">
                                    <h1 className="text-base md:text-xl lg:text-2xl font-semibold mb-3 ">{item.heading}</h1>
                                    <div className="text-gray-500 text-sm md:text-base lg:text-lg">{item.description} </div>
                                    <button className="md:mt-10 border p-3 rounded-2xl text-sm md:text-lg text-blue-900 border-blue-900">Free Expert Consultation</button>
                                </div>
                            )}
                    </div>
                    {/* Visa Section  */}
                    <div id="visa" className="m-4 md:m-10 ">
                        {
                            visa_items.map((item,index) => (

                                <div key={index} className="border-2 p-5 md:p-10 rounded-4xl">
                                    <h1 className="text-base md:text-xl lg:text-2xl  font-semibold mb-3 ">{item.heading}</h1>
                                    <div className="text-gray-500 text-sm md:text-base lg:text-lg">{item.description} </div>
                                    <button className="md:mt-10 border p-3 rounded-2xl text-sm md:text-lg text-blue-900 border-blue-900">Free Expert Consultation</button>
                                </div>
                            ))}
                    </div>
                </section>

            </div>
        </>
    );
}
export default MoreAbout;