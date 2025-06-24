"use client";
import Image from "next/image";

function HeroSection() {
  return (
     <div className="bg-gradient-to-r from-white via-red-50 to-green-100  px-6 py-12 md:flex md:items-center md:justify-between ">
            {/* {text section} */}
        <div className="md:w-1/2 mt-15">

            <h1 className="text-5xl md:text-6xl text-gray-800 ml-15 leading-15">
                <span className="font-bold text-black underline decoration-red-500 decoration-4 underline-offset-[14px]">
                Netherlands:
                </span>{" "}
                Where<br/> modern education and<br/> tradition meet
            </h1>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 ml-15">
                <button className="bg-blue-900 text-white hover:bg-white  hover:text-blue-900 font-semibold px-6 py-3 rounded-md">
                    Free Expert Consultation
                </button>
                
            </div>
        </div>

        {/* Image Section */}
         <div className="md:mt-0 md:w-1/2 flex justify-center items-center">
                <img  className="h-120 object-contain z-5 absolute top-20 right-50 " 
                
                src="/study-abroad-netherlands/study-abrd-netherland.webp"
                alt="student"
            
                />
    
        </div>

</div>
  );
}

export default HeroSection;