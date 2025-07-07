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
        heading: "Documents required to study in Canada",
        description: (
            <div>
                <span className="text-black"> The most common list of documents required
                    when applying to study in Canada includes:</span>
                <ul className="list-disc p-5">
                    <li>English proficiency scores (IELTS or PTE)</li>
                    <li>Copies of marksheets for Grade 10th, 12th, and all semester marksheets of the Bachelor's Degree.</li>
                    <li>Backlog certificate</li>
                    <li>Work experience document & salary statements of last 4-6 months (if applicable)</li>
                    <li>Updated Resume</li>
                </ul>

            </div>
        )
    }]

const visa_items: visa[] = [{
    heading: "Canada Study Visa Process",
    description: (<div>
        <span className="text-black">  To study in Canada you need to apply for visa ideally 3 months prior to the intake. Below are the documents required - </span>
        <ul className="list-disc p-5">
            <li>A valid Passport</li>
            <li>Letter of acceptance (offer letter from the university)</li>
            <li>English Proficiency Test</li>
            <li>Tuition Fee receipt</li>
            <li>GIC (Guaranteed Investment Certificate) account-fixed deposit</li>
            <li> Medical Certificate as per the requirement</li>
            <li>Statement of Purpose (SOP) and Resume</li>
            <li>Visa Application form and Family Information Form</li>
            <li>Provincial Attestation Letter (PAL) if required as per the program</li>
        </ul>
    </div>
    )
}]

function MoreAbout() {
    return (
        <>
            <h1 className="text-2xl md:text-3xl lg:text-4xl text-center my-10">More About <span className="font-semibold decoration-red-600 underline-offset-4 underline"> Canada</span></h1>
            <div className="flex flex-col md:flex-row lg:justify-between lg:mx-15">
                <div className="lg:m-10">
                    <TOC />
                </div>
                <section>
                    <div id="document" className="m-4 md:m-10 scroll-m-20 ">
                        {
                            doc_items.map((item, index) =>
                                <div key={index} className="border-2 p-5 md:p-10 rounded-4xl">
                                    <h1 className="text-base md:text-xl lg:text-2xl font-semibold mb-3 ">{item.heading}</h1>
                                    <div className="text-gray-500 text-sm md:text-base lg:text-lg">{item.description} </div>
                                    <button className="md:mt-10 border p-3 rounded-2xl text-sm md:text-lg text-blue-300 border-blue-300">Free Expert Consultation</button>
                                </div>
                            )}
                    </div>
                    <div id="visa" className="m-4 md:m-10 ">
                        {
                            visa_items.map((item, index) => (
                                <div key={index} className="border-2 p-5 md:p-10 rounded-4xl">
                                    <h1 className="text-base md:text-xl lg:text-2xl  font-semibold mb-3 ">{item.heading}</h1>
                                    <div className="text-gray-500 text-sm md:text-base lg:text-lg">{item.description} </div>
                                    <button className="md:mt-10 border p-3 rounded-2xl text-sm md:text-lg text-blue-300 border-blue-300">Free Expert Consultation</button>
                                </div>
                            ))}
                    </div>
                </section>
            </div>
        </>
    );
}
export default MoreAbout;