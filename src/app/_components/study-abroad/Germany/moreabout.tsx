'use client'

import type { JSX } from "react";

import TOC from "./TOC";


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
                <p ><span className="text-black"> Documents required to study in Germany:</span>
                    <ul className="list-disc p-5">
                        <li>Valid Passport
                        </li>
                        <li>1 copy of your passport’s data page</li>
                        <li>3 passport pictures according to biometric specifications</li>
                        <li>Cover letter from applicant explaining the exact purpose and duration of stay</li>
                        <li>Letter of admission from German university</li>
                        <li>Proof of payment of study fees, if applicable</li>
                        <li>Proof of language proficiency in English and/or German (ONLY if course is taught in German)</li>
                        <li>Proof of other academic qualifications, if applicable</li>
                        <li>Proof of financial means to cover the costs for the time of your studies by one of the following</li>
                        <li>Documents:
                            - Confirmation of scholarship/ stipend
                            - “Verpflichtungserklärung” (FOL) by sponsor living in Germany
                        </li>
                    </ul>
                </p>
            </div>
        )
    }]

const visa_items: visa[] = [{
    heading: "Germany Study Visa Process",
    description: (<div>
        <p ><span className="text-black">  To study in Germany you need to apply for visa ideally 3 months prior to the intake. Below are the documents required - </span>
            <ul className="list-disc p-5">
                <li>Apply at least six months prior to your intended start date.</li>
                <li>Apply for Akademische Prüfstelle or APS (Academic Evaluation Centre)</li>
                <li>Processing of offer letter typically takes 2-3 weeks (varies from university to university)</li>
                <li>Pay one year’s tuition fees upon receiving the offer letter.</li>
                <li>Set aside funds for living expenses, deposited in the form of Block Account.</li>
                <li>Purchase Travel Insurance and Health Insurance</li>
                <li>Apply for a visa online</li>
                <li>Deposit visa application form, along with the passport, supporting documents and 3 passport size photographs at the VFS and complete biometrics as per the appointment</li>

            </ul>
        </p>
    </div>

    )
}]

function MoreAbout({ onFreeConsultClick }: { onFreeConsultClick: () => void }) {
    return (
        <>

            <h1 className="text-3xl lg:text-5xl text-center my-10">More About <span className="font-semibold decoration-red-600 underline-offset-4 underline">Germany</span></h1>
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
                            doc_items.map((item) =>
                                <div className="border-2 p-5 md:p-10 rounded-4xl">
                                    <h1 className="text-2xl font-semibold mb-3 ">{item.heading}</h1>
                                    <p className="text-gray-500 text-lg">{item.description}</p>
                                    <button
                                        onClick={onFreeConsultClick}
                                        className="mt-10 px-6 py-3 bg-[#183D8C] hover:bg-[#102b6a] text-white font-semibold rounded-xl shadow-md transition-all"
                                    >
                                        Free Expert Consultation
                                    </button>
                                </div>
                            )}
                    </div>
                    {/* Visa Section  */}
                    <div id="visa" className="m-4 md:m-10 ">
                        {
                            visa_items.map((item) => (

                                <div className="border-2 p-5 md:p-10 rounded-4xl">
                                    <h1 className="text-2xl font-semibold mb-3 ">{item.heading}</h1>
                                    <p className="text-gray-500 text-lg">{item.description}</p>
                                    <button
                                        onClick={onFreeConsultClick}
                                        className="mt-10 px-6 py-3 bg-[#183D8C] hover:bg-[#102b6a] text-white font-semibold rounded-xl shadow-md transition-all"
                                    >
                                        Free Expert Consultation
                                    </button>
                                </div>
                            ))}
                    </div>
                </section>

            </div>
        </>
    );
}
export default MoreAbout;