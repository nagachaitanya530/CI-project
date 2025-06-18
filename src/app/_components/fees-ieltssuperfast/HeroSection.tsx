import Link from "next/link";

function HeroSection(){
    return (
        <>
           <section className="bg-cyan-50 shadow-2xl flex flex-col md:flex-row px-4 md:px-10 lg:px-50 py-10">


                <div className="left mb-10 w-full lg:w-1/2">
                            {/* IELTS TURBO Branding */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg font-bold text-red-600">IELTS</span>
                    <span className="bg-blue-600 text-white font-bold px-1 py-1  text-lg">SUPERFAST</span>
                </div>
                    <h2 className="text-4xl font-bold mb-6">
                        IELTS Superfast :International English Language Testing System</h2>
                    <p className="mb-6  text-gray-500 ">
                       This course is intended for people who have quite a good understanding of English language in grammar. It is a fast paced Preparation program not intended for beginners.
                    </p>
                     {/* Instructor Information */}
                <div className="flex items-center gap-3 mb-3">
                  {/* Image */}
                  <img 
                    src="/fees/britishcouncil.webp" 
                    alt="British Council"
                    className="w-10 h-10 object-contain"
                  />
                  
                  {/* Instructor Text */}
                  <div className="text-sm text-gray-700">
                    <div className="font-semibold">Instructors:</div>
                    <div>XYZ Trained & British Council Certified</div>
                  </div>
                </div>
                    <div className="button mt-10 flex items-center space-x-10 ">
                        <Link href="#enroll" className="inline-block px-6 py-3 bg-cyan-600 text-white rounded-md hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <span>
                                ENOROLL NOW
                            </span>
                        </Link>
                        <p className=" text-gray-500 " >
                            <strong><span className="text-amber-900">₹18990</span>
                                <br />27,309</strong>
                            &nbsp;already enrolled</p>

                    </div>
                </div>

                {/* Right SIde Card  */}
                <div className="right  bg-white border-gray-300 rounded-xl shadow-lg max-w-md mx-auto hover:bg-gray-100  ">
                    <iframe
                        className="w-full h-64 animate-pulse"
                        src="https://www.youtube-nocookie.com/embed/ZVnjOPwW4ZA=1"
                        title="National Institute of Language"
                    ></iframe>

                    <p className="text-lg text-blue-400 mt-4 m-4">4.8 ★ (16,527 Ratings)</p>

                    <div className="mt-4 m-4">
                        <h2 className="text-xl font-semibold text-gray-800">IELTS Semi Crash Course</h2>
                        <p className="text-gray-600">Fast paced IELTS preparation for advanced aspirants. Group of 10-15 Students</p>
                    </div>



                    <div className="mt-4 m-4">
                        <h2 className="text-lg font-medium text-gray-800">Intermediate Advanced Level</h2>
                        <p className="text-gray-500">Recommended Experience</p>
                    </div>



                    <div className="mt-4 m-4">
                        <h2 className="text-lg font-medium text-gray-800">Upto 1.5 months / 33+33 hours</h2>
                    </div>
                </div>
                {/* </div> */}

            </section></>
    );
}

export default HeroSection;