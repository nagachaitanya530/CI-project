function CostOfStudy(){
    return(
        <>
        <main className="bg-blue-50 rounded-4xl text-black font-sans min-h-screen md:px-5">
                <section className="bg-gray p-6 md:p-10 ">
                    <div className="flex flex-col md:flex-row gap-5 ">
                        {/* LeftSide  */}
                        <div className="md:w-2/5 mb-5 px-5">
                            <div>
                                <h1 className=" md:text-5xl font-bold my-3 leading-snug align-left md:px-5">
                                 <span className="text-orange-600">   Cost of studying </span><br />
                                    In France
                                </h1>
                            </div>
                            <div>
                                <p className="text-xl md:p-5">
                                    The cost of studying in France for international students depends on several factors, including the institution, program of study,
                                    location, and available funding opportunities. Additionally, living expenses such as rent, utilities, and recreational activities play a significant role in the overall cost.
                                </p>
                            </div>
                        </div>
                        {/* Right Side  */}
                        <div className="md:w-3/5 mx-3 md:mx-0">
                            <div>
                                <div className="border font-semibold md:w-1/2 rounded-xl px-5 py-4 text-xl text-gray-500 my-6">
                                    <p>Tuition Fees (Average per annum)</p>
                                </div>
                                <div className="bg-white border-gray rounded-xl p-5 text-lg font-semibold flex flex-col md:flex-row md:justify-between ">
                                    <p className="mb-2 md:mb-0">Master's</p>
                                    <p>EUR 10,000 – 16,500</p>
                                </div>
                                <br />
                                <div className="bg-white border-gray rounded-xl p-5 text-lg font-semibold flex flex-col md:flex-row md:justify-between">
                                    <p className="mb-2 md:mb-0">MBA</p>
                                    <p>EUR 16,000 – 25,000</p>
                                </div>
                                <br />
                                
                            </div>
                            <div>
                                <h2 className="border font-semibold md:w-1/2 rounded-xl px-5 py-4 text-xl text-gray-500 my-6">
                                    Living Expenses (Average per annum)
                                </h2>
                                <div className="bg-white border border-gray-200 rounded-xl px-5 py-4 font-semibold flex justify-end text-lg">
                                    Approx. EUR 9,300
                                </div>
                            </div>
                            <div>
                                <h2 className="border font-semibold md:w-1/2 rounded-xl px-5 py-4 text-xl text-gray-500 my-6">
                                    Accommodation (Average per month)
                                </h2>
                                <div className="bg-white border-gray rounded-xl p-5 text-lg font-semibold flex flex-col md:flex-row md:justify-between">
                                    <p className="mb-2 md:mb-0">Student Residences</p>
                                    <p>EUR 500 – 700</p>
                                </div>
                                <div className="bg-white border-gray rounded-xl p-5 text-lg font-semibold flex flex-col md:flex-row md:justify-between my-5">
                                    <p className="mb-2 md:mb-0">Private Apartments and Shared Apartments</p>
                                    <p>EUR 600 – 1,500</p>
                                </div>
                                <div className="bg-white border-gray rounded-xl p-5 text-lg font-semibold flex flex-col md:flex-row md:justify-between">
                                    <p className="mb-2 md:mb-0">University residence halls managed by CROUS</p>
                                    <p>EUR 780 - 800</p>
                                </div>
                                <br />
                                <div className="bg-white border-gray rounded-xl p-5 text-lg font-semibold flex flex-col md:flex-row md:justify-between">
                                    <p className="mb-2 md:mb-0">Studapart</p>
                                    <p>EUR 700 – 1,000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
export default CostOfStudy;