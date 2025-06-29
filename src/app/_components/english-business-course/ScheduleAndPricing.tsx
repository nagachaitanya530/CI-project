function ScheduleAndPricing(){
    return(
        <>
                <section id="schedule" className="my-10">
                    <h1 className="text-4xl font-semibold pb-10">
                        Choose Your Learning Track
                    </h1>
                    <div className="container flex flex-col md:flex-row rounded-xl border shadow-xl">
                        <div className="left w-1/2 ">
                            <h2 className="text-3xl font-semibold m-5 ">Group Classes</h2>
                            <p className="text-xl mx-5 text-gray-600"><strong className="text-black">Duration: </strong>1 Month</p>
                            <p className="text-xl mx-5 text-gray-600"><strong className="text-black">Schedule: </strong>Mon-Fri,2-hours</p>
                            <h2 className="text-4xl font-semibold m-5">₹3000 /<sub>3 Month</sub></h2>
                            <button className="bg-cyan-600 hover:bg-cyan-700 w-50 text-white text-xl rounded-md p-3 m-5">Enroll Now</button>
                        </div>
                        <div className="right p-7  ">
                            <img src="../../home/group-study.png" alt="group-study" className="w-80 rounded-2xl" />
                        </div>
                    </div>

                    <div className="container flex flex-col md:flex-row justify-between rounded-xl border shadow-xl my-5">
                        <div className="right p-7  ">
                            <img src="../../home/ai-evaluation.png" alt="group-study" className="w-80 rounded-2xl" />
                        </div>
                        <div className="left w-1/2 ">
                            <h2 className="text-3xl font-semibold m-5 ">AI Evaluation</h2>
                            <p className="text-xl mx-5 text-gray-600"><strong className="text-black">Duration: </strong>1 Month</p>
                            <p className="text-xl mx-5 text-gray-600"><strong className="text-black">Schedule: </strong>Mon-Fri,3-hours</p>
                            <h2 className="text-4xl font-semibold m-5">₹5000 /<sub>1 Month</sub></h2>
                            <button className="bg-cyan-600 hover:bg-cyan-700 w-50 text-white text-xl rounded-md p-3 m-5">Enroll Now</button>
                        </div>
                    </div>

                    <div className="container flex flex-col md:flex-row rounded-xl border shadow-xl ">
                        <div className="left w-1/2 ">
                            <h2 className="text-3xl font-semibold m-5 ">Personal Training</h2>
                            <p className="text-xl mx-5 text-gray-600"><strong className="text-black">Duration: </strong>3 Month</p>
                            <p className="text-xl mx-5 text-gray-600"><strong className="text-black">Schedule: </strong>Mon-Fri,1-hours</p>
                            <h2 className="text-4xl font-semibold m-5">₹4990 /<sub>3 Month</sub></h2>
                            <button className="bg-cyan-600 hover:bg-cyan-700 w-50 text-white text-xl rounded-md p-3 m-5">Enroll Now</button>
                        </div>
                        <div className="right p-7  ">
                            <img src="../../home/personalized-mentorship.png" alt="group-study" className="w-80 rounded-2xl" />
                        </div>
                    </div>
                </section>
                </>
    );

}
export default ScheduleAndPricing;