'use client';
<<<<<<< HEAD
import { useState } from "react";
import ConsultationForm from "./ConsultationForm";

function Hero() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            {isOpen && <ConsultationForm show={isOpen} onClose={() => setIsOpen(false)} />}
             <section className="bg-blue-100 py-10 px-6 lg:px-24 flex flex-col-reverse lg:flex-row justify-between items-center">
                {/* Left Side Content */}
                <div className="max-w-2xl">
                    <h1 className="text-4xl font-semibold  mb-2">CELPIP - 2025</h1>
                    <div className="grid grid-cols-2 space-x-15">
                        <div className="mb-4">
                            <p className="font-semibold text-lg">Test Format:</p>
                            <p className="text-blue-900 text-base">
                                Listening, Reading, Writing, Speaking
                            </p>
                        </div>

                        <div className="mb-4">
                            <p className="font-semibold text-lg">Duration :</p>
                            <p className="text-blue-900 text-base">
                                3 Hours (Approximately)
                            </p>
                        </div>

                        <div className="mb-6">
                            <p className="font-semibold text-lg">Mode :</p>
                            <p className="text-blue-900 text-base">
                                Computer Delivered
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={() => setIsOpen(true)}
                        className="bg-blue-900 border border-blue-900 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-blue-900 transition hover:cursor-pointer duration-300"
                    >
                        Free Expert Consultation
                    </button>
                </div>
                <div className="mt-10 lg:mt-0 lg:ml-12 text-right">
                    <div className="rounded-2xl overflow-hidden shadow-lg max-w-md">
                        <img
                            src="test.jpg"
                            alt="IELTS Preparation"
                            width={500}
                            height={300}
                            className="w-full h-auto"
                        />
                    </div>
                    <p className="text-sm italic text-gray-700 mt-2">
                        Last updated – 25 June '25
                    </p>
                </div>
            </section>
        </>
=======
import ConsultationForm from "./ConsultationForm";
//import { useState } from "react";

function Hero() {
    const [isOpen, setIsOpen] = useState(false);
    return(
    <>
    {isOpen && <ConsultationForm show={isOpen} onClose={() => setIsOpen(false)} />}
    <div className="flex flex-row items-center  justify-between  border-2 bg-blue-100 p-20 h-100">
            <div className="grid ">
                <h1 className="font-bold text-4xl text-blue-900 mb-5">CELPIP-2025</h1>
                <h1 className="font-semibold  text-2xl">Test Formate:</h1>
                <p className=" text-blue-900 ">Listening, Reading, Writing, Speaking</p><br/>
                <h1 className="font-semibold text-2xl">Mode:</h1>
                <p className="mb-5 text-blue-900">Computer Delivered</p>
                <button onClick={()=> setIsOpen(true)} className="bg-blue-900 text-white py-3 px-6 rounded-3xl font-semibold hover:bg-white hover:text-blue-900 transition  hover:cursor-pointer duration-300">Free Expert Consultation</button>
            </div>
            <div className=" text-2xl text-blue-900 mr-60">
            <h1 className="align-center font-bold text-black">Duration:</h1>
            <p className="text-sm">3 hours (Approximately)</p>
            </div>
            <div className="text-center ">
                <img src="/study.jpg" alt="study" className="w-120 h-80 justify-start   shadow-lg rounded-lg"/>
                <p className="italic text-md">Last updated  -   June 2025</p>
            </div>
        </div>
    </>
>>>>>>> cost-of-studying-usa
    );
}

export default Hero;
<<<<<<< HEAD
=======
function useState(arg0: boolean): [any, any] {
    throw new Error("Function not implemented.");
}

>>>>>>> cost-of-studying-usa
