import { Check, CheckCircle } from "lucide-react";
import Link from "next/link";


function AboutPage() {
    return (
        <>
            <section id="about" className=" border-gray-300 rounded-xl shadow-lg ">
                
                <div>

                
                <h1 className="text-3xl font-semibold py-5 w-1/2">
                    What you''ll learn   
                    </h1>
                <div className="flex flex-col md:flex-row">
                    <div className="left md:w-3/4 p-2 grid grid-cols-1 sm:grid-cols-2">

                        <div className="flex items-center px-10 ">
                                <CheckCircle className="w-40 h-40"/>
                            <div className="pl-5">
                                <h3 className="font-semibold">Grammar Rectification</h3>
                                <p className="text-gray-500 text-sm " >You will get advanced overview of grammar to improve your grammatical range and accuracy.</p>
                            </div>

                        </div>
                         <div className="flex items-center px-10 ">
                            <CheckCircle className="w-40 h-40"/>
                            <div className="pl-5">
                                <h3 className="font-semibold">Score building</h3>
                                <p className="text-gray-500 text-sm " >You will learn how to select, choose and find answers in reading & listening sections and verify their accuracy with tipsto score highest possible bands in the test.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center px-10 ">
                           <CheckCircle className="w-40 h-40"/>
                            <div className="pl-5">
                                <h3 className="font-semibold">Advanced Grammar</h3>
                                <p className="text-gray-500 text-sm " >You will also learn advanced 
                                    level concepts like conditional sentences,
                                     passive sentences etc and their utilisation
                                      for a specific purposes of of 
                                      more advanced communication
                                </p>
                            </div>

                        </div>
                       
                        <div className="flex items-center px-10 ">
                             <CheckCircle className="w-35 h-35"/>
                            <div className="pl-5">
                                <h3 className="font-semibold">Strategic Management</h3>
                                <p className="text-gray-500 text-sm " >You will learn the strategies to manage your time and answer the questions in reading and listening sections of the test.</p>
                            </div>


                        </div>
                    </div>
                    <div className="right h-[100%] border-md shadow-2xl mb-2 mt-5 rounded-2xl ">
                        <div>
                            <img decoding="async"
                                src="../../home/learning-Girl.jpg"
                                className="h-70 w-full rounded-t-md "
                                alt="Online French Language classNamees Best French classNamees online french tutor"
                            ></img>
                        </div>
                        <div>
                            <h2 className="text-[38px]  p-5">Want extended course?</h2>
                            <p className="text-gray-500 text-lg pl-5 mb-2">Check out our Complete IELTS course on IELTS. (Recommended for beginners).</p>
                            <div className="button p-5 flex items-center ">
                                <Link href="/" className="inline-block px-6 py-3 bg-cyan-600 text-white rounded-md hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <span>
                                       IELTS COMPLETE
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </>
    );
}
export default AboutPage;