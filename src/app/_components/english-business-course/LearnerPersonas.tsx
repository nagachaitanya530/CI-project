'use client';
import Image from "next/image";

<<<<<<< HEAD
import Image from "next/image";

export default function LearnerPersonas() {
    return (
        <section className=" ">
            <h2 className="font-semibold text-4xl my-10">Ideal Learner Personas</h2>
            <div className="container flex flex-col md:flex-row gap-5">
                <div className="left size-fit rounded-xl shadow-xl hover:shadow-2xl">
                    <Image src="/home/british-guy.png" className="h-62 w-full rounded-t-xl shadow-xl" alt="working Professional Image" width={500} height={300} />
                    <h2 className="text-3xl text-center font-semibold font-sans p-4">Professionals</h2>
                    <hr className="text-gray-300 px-2" />
                    <p className="text-sm text-center text-gray-500 p-5">
                        Improve business communication for better career opportunities.
                    </p>
                </div>
                <div className="left size-fit rounded-xl shadow-xl hover:shadow-2xl">
                    <Image src="/home/job-seeker.jpg" className="h-62 w-full rounded-t-xl shadow-xl" alt="working Professional Image" width={500} height={300} />
                    <h2 className="text-3xl text-center font-semibold font-sans p-4">Job Seekers</h2>
                    <hr className="text-gray-300 px-2" />
                    <p className="text-sm text-center text-gray-500 p-5">
                        Master business English to stand out in interviews and job offers.
                    </p>
                </div>
                <div className="left size-fit rounded-xl shadow-xl hover:shadow-2xl">
                    <Image src="/home/learning-Girl.jpg" className="h-62 w-full rounded-t-xl shadow-xl" alt="working Professional Image" width={500} height={300} />
                    <h2 className="text-3xl text-center font-semibold font-sans p-4">Student</h2>
                    <hr className="text-gray-300 px-2" />
                    <p className="text-sm text-center text-gray-500 p-5">
                        Improve your communication skills for better career opportunities.
                    </p>
                </div>
                <div className="left size-fit rounded-xl shadow-xl hover:shadow-2xl">
                    <Image src="/home/professional-women-2.png" className="h-62 w-full rounded-t-xl shadow-xl" alt="working Professional Image" width={500} height={300} />
                    <h2 className="text-3xl text-center font-semibold font-sans p-4">Native Speaker</h2>
                    <hr className="text-gray-300 px-2" />
                    <p className="text-sm text-center text-gray-500 p-5">
                        Improve your communication skills for better career opportunities.
                    </p>
                </div>
            </div>
        </section>
    );
=======
export default function LearnerPersonas() {
  return (
                <section className=" ">
                    <h2 className="font-semibold text-4xl my-10">Ideal Learner Personas</h2>

                    <div className="container flex flex-col md:flex-row gap-5">
                        <div className="left size-fit rounded-xl shadow-xl hover:shadow-2xl">
                            <div className="relative w-full h-[248px]"> 
                                <Image
                                src="/home/british-guy.png" 
                                alt="working Professional Image"
                                fill
                                className="object-cover rounded-t-xl shadow-xl"
                                />
                            </div>  
                            <h2 className="text-3xl text-center font-semibold font-sans p-4">Professionals</h2>
                            <hr className="text-gray-300 px-2" />
                            <p className="text-sm text-center text-gray-500 p-5">
                                Improve business communication for better career opportunities.
                            </p>
                        </div>
                        <div className="left size-fit rounded-xl shadow-xl hover:shadow-2xl">
                            <img src="../../home/job-seeker.jpg" className="h-62 w-full rounded-t-xl shadow-xl" alt="working Professional Image" />
                            <h2 className="text-3xl text-center font-semibold font-sans p-4">Job Seekers</h2>
                            <hr className="text-gray-300 px-2" />
                            <p className="text-sm text-center text-gray-500 p-5">
                                Master business English to stand out in interviews and job offers.
                            </p>
                        </div>
                        <div className="left size-fit rounded-xl shadow-xl hover:shadow-2xl">
                            <img src="../../home/learning-Girl.jpg" className="h-62 w-full rounded-t-xl shadow-xl" alt="working Professional Image" />
                            <h2 className="text-3xl text-center font-semibold font-sans p-4">Student</h2>
                            <hr className="text-gray-300 px-2" />
                            <p className="text-sm text-center text-gray-500 p-5">
                                Improve your communication skills for better career opportunities.
                            </p>
                        </div>
                        <div className="left size-fit rounded-xl shadow-xl hover:shadow-2xl">
                            <img src="../../home/professional-women-2.png" className="h-62 w-full rounded-t-xl shadow-xl" alt="working Professional Image" />
                            <h2 className="text-3xl text-center font-semibold font-sans p-4">Native Speaker</h2>
                            <hr className="text-gray-300 px-2" />
                            <p className="text-sm text-center text-gray-500 p-5">
                                Improve your communication skills for better career opportunities.
                            </p>
                        </div>
                    </div>
                </section>
  );
>>>>>>> changes_ci
}

