import {  CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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
                                <CheckCircle className="w-40 h-40" />
                                <div className="pl-5">
                                    <h3 className="font-semibold">Intermediate Grammar</h3>
                                    <p className="text-gray-500 text-sm " >You will learn Intermediate
                                        level concepts of English grammar
                                        and how to use them in writing and speaking.</p>
                                </div>
                            </div>
                            <div className="flex items-center px-10 ">
                                <CheckCircle className="w-40 h-40" />
                                <div className="pl-5">
                                    <h3 className="font-semibold">Interpersonal Skills</h3>
                                    <p className="text-gray-500 text-sm " >You will learn how to
                                        communicate in different
                                        circumstances with different
                                        people in various settings.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center px-10 ">
                                <CheckCircle className="w-60 h-60" />
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
                                <CheckCircle className="w-35 h-35" />
                                <div className="pl-5">
                                    <h3 className="font-semibold">Vocabulry</h3>
                                    <p className="text-gray-500 text-sm " >Possessing extensive and
                                        impressive vocabulary is
                                        essential for advanced communication.</p>
                                </div>
                            </div>
                        </div>
                        <div className="right h-[100%] border-md shadow-2xl mb-2 mt-5 rounded-2xl ">
                            <div>
                                <Image decoding="async"
                                    src="/home/learning-Girl.jpg"
                                    alt="Online French Language classNamees Best French classNamees online french tutor"
                                    className="h-70 w-full rounded-t-md " width={500}
                                    height={300}
                                ></Image>
                            </div>

                        </div>
                       
                        <div className="flex items-center px-10 ">
                             <CheckCircle className="w-35 h-35"/>
                            <div className="pl-5">
                                <h3 className="font-semibold">Vocabulry</h3>
                                <p className="text-gray-500 text-sm " >Possessing extensive and 
                                    impressive vocabulary is 
                                    essential for advanced communication.</p>
                            </div>
                        </div>
                    </div>
                    <div className="right h-[100%] border-md shadow-2xl mb-2 mt-5 rounded-2xl ">
                        
                    <div className="relative w-full h-[280px] rounded-t-md overflow-hidden">
                    <Image
                        src="/home/learning-Girl.jpg" 
                        alt="Online French Language classes Best French classes online french tutor"
                        fill
                        className="object-cover"
                        priority 
                        />
                    </div>
                        <div>
                            <h2 className="text-[38px]  p-5">Want something general?</h2>
                            <p className="text-gray-500 text-lg pl-5 mb-2">Check our Foundation English Course.</p>
                            <div className="button p-5 flex items-center ">
                                <Link href="/english-foundation-course" className="inline-block px-6 py-3 bg-cyan-600 text-white rounded-md hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
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