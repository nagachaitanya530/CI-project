'use client';
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
    );
}

export default Hero;
function useState(arg0: boolean): [any, any] {
    throw new Error("Function not implemented.");
}

