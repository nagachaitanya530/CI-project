import { Check, CheckCircle } from "lucide-react";
import Link from "next/link";


function AboutPage() {
    return (
        <>
            <section id="about" className=" border-gray-300 rounded-xl shadow-lg ">
                <div className="flex flex-col md:flex-row">
                    <div className="left p-2 grid grid-cols-1 sm:grid-cols-2 gap-4">

                        <div className="flex items-center p-10 ">
                                <CheckCircle className="w-40 h-40"/>
                            <div className="pl-5">
                                <h3 className="font-semibold">Intermediate Grammar</h3>
                                <p className="text-gray-500 text-sm " >You will learn Intermediate
                                    level concepts of English grammar
                                    and how to use them in writing and speaking.</p>
                            </div>

                        </div>
                        <div className="flex items-center p-10 ">
                           <CheckCircle className="w-40 h-40"/>
                            <div className="pl-5">
                                <h3 className="font-semibold">Intermediate Grammar</h3>
                                <p className="text-gray-500 text-sm " >You will learn Intermediate
                                    level concepts of English grammar
                                    and how to use them in writing and speaking.</p>
                            </div>

                        </div>
                        <div className="flex items-center p-10 ">
                            <CheckCircle className="w-40 h-40"/>
                            <div className="pl-5">
                                <h3 className="font-semibold">Intermediate Grammar</h3>
                                <p className="text-gray-500 text-sm " >You will learn Intermediate
                                    level concepts of English grammar
                                    and how to use them in writing and speaking.</p>
                            </div>


                        </div>
                        <div className="flex items-center p-10 ">
                             <CheckCircle className="w-40 h-40"/>
                            <div className="pl-5">
                                <h3 className="font-semibold">Intermediate Grammar</h3>
                                <p className="text-gray-500 text-sm " >You will learn Intermediate
                                    level concepts of English grammar
                                    and how to use them in writing and speaking.</p>
                            </div>


                        </div>
                    </div>
                    <div className="right  w-[85%] border-md shadow-2xl mb-2 mt-5 ">
                        <div>
                            <img decoding="async"
                                src="../../home/learning-Girl.jpg"
                                className="h-60 w-full rounded-md "
                                alt="Online French Language classNamees Best French classNamees online french tutor"
                            ></img>
                        </div>
                        <div>
                            <h2 className="text-[38px]  p-5">Want something general?</h2>
                            <p className="text-gray-500 text-lg pl-5 mb-2">Check our Foundation English Course.</p>
                            <div className="button p-5 flex items-center ">
                                <Link href="/" className="inline-block px-6 py-3 bg-cyan-600 text-white rounded-md hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <span>
                                        Foundation English
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default AboutPage;


// animaion present motion 