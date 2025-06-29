import Link from "next/link";

function HeroSection(){
    return (
        <>
           <section className="bg-cyan-100 shadow-2xl flex flex-col md:flex-row px-4 md:px-10 lg:px-50 py-10">
                <div className="left mb-10 w-full lg:w-1/2">
                    <img className="h-8 ml-0 m-5" src="" alt="Website-Logo" />
                    <h2 className="text-4xl font-bold mb-6">
                        ENGLISH BUSINESS COURSE: Personal Training.</h2>
                    <p className="mb-6  text-gray-500 ">
                        This course is intended to provide training for Business Level English from intermediate level.
                        Comprises of Intermediate to advanced level English language training with personality development.
                    </p>

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
                <div className="right  bg-white border-gray-300 rounded-xl shadow-lg max-w-md mx-auto hover:bg-gray-100  ">
                    <iframe
                        className="w-full h-64 animate-pulse"
                        src="https://www.youtube-nocookie.com/embed/ZVnjOPwW4ZA=1"
                        title="National Institute of Language"
                    ></iframe>

                    <p className="text-lg text-blue-400 mt-4 m-4">4.8 ★ (16,527 Ratings)</p>

                    <div className="mt-4 m-4">
                        <h2 className="text-xl font-semibold text-gray-800">Business Skill Course</h2>
                        <p className="text-gray-600">Comprehensive Business Level Course for more advanced learning</p>
                    </div>



                    <div className="mt-4 m-4">
                        <h2 className="text-lg font-medium text-gray-800">Intermediate Level</h2>
                        <p className="text-gray-500">Recommended Experience</p>
                    </div>



                    <div className="mt-4 m-4">
                        <h2 className="text-lg font-medium text-gray-800">Upto 3 months / 66 hours</h2>
                    </div>
                </div>
            </section></>
    );
}

export default HeroSection;