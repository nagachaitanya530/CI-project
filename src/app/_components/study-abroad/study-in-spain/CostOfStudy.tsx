function CostOfStudy(){
    return(
        <>
        <main className="bg-blue-50 rounded-4xl text-black font-sans min-h-screen md:px-5">
                <section className="bg-gray p-6 md:p-10 ">
                    <div className="flex flex-col md:flex-row gap-5 ">
                        {/* LeftSide  */}
                        <div className="md:w-2/5 mb-5 px-5">
                            <div>
                                <h2 className="text-4xl text-black font-light">
                                    <span className="font-extrabold underline decoration-red-500 underline-offset-[6px]">
                                        Cost Of Studying
                                    </span>{" "}
                                        In Spain
                                </h2>

                            </div>
                            <div>
                                <p className="text-xl md:p-5">
                                The cost of studying in Spain for international students depends on several factors, including the institution, program of study, location, and available funding opportunities. Additionally, living expenses such as rent, utilities, and recreational activities play a significant role in the overall cost.
                                </p>
                            </div>
                        </div>
                        {/* Right Side  */}
                        <div className="md:w-3/5 mx-3 md:mx-0">
                            <div>
                                <div className="border font-semibold md:w-1/2 rounded-xl px-5 py-4 text-xl text-gray-500 my-6 whitespace-nowrap">
                                    <p>Tuition Fees (Average per annum)</p>
                                </div>
                                <div className="bg-white border-gray rounded-xl p-5 text-lg font-semibold flex flex-col md:flex-row md:justify-between ">
                                    <p className="mb-2 md:mb-0">Bachelor's</p>
                                    <p>EUR 3,000 – 17,000</p>
                                </div>
                                <br />
                                <div className="bg-white border-gray rounded-xl p-5 text-lg font-semibold flex flex-col md:flex-row md:justify-between">
                                    <p className="mb-2 md:mb-0">Master's</p>
                                    <p>EUR 4,000 – 25,000 </p>
                                </div>
                            </div>
                            <div>
                                <h2 className="border font-semibold md:w-1/2 rounded-xl px-5 py-4 text-xl text-gray-500 my-6 whitespace-nowrap">
                                    Living Expenses (Average per annum)
                                </h2>
                                <div className="bg-white border border-gray-200 rounded-xl px-5 py-4 font-semibold flex justify-end text-lg">
                                    Approx. EUR 15,000
                                </div>
                            </div>
                            <div>
                                <h2 className="border font-semibold md:w-1/2 rounded-xl px-5 py-4 text-xl text-gray-500 my-6 whitespace-nowrap">
                                    Accommodation (Average per month)
                                </h2>
                                <div className="bg-white border-gray rounded-xl p-5 text-lg font-semibold flex flex-col md:flex-row md:justify-between">
                                    <p className="mb-2 md:mb-0">On-Campus</p>
                                    <p>EUR 400 – 800</p>
                                </div>
                                <div className="bg-white border-gray rounded-xl p-5 text-lg font-semibold flex flex-col md:flex-row md:justify-between my-5">
                                    <p className="mb-2 md:mb-0"> Shared Apartments</p>
                                    <p>EUR 1500 – 300</p>
                                </div>
                                <div className="bg-white border-gray rounded-xl p-5 text-lg font-semibold flex flex-col md:flex-row md:justify-between">
                                    <p className="mb-2 md:mb-0">Private Apartment</p>
                                    <p>EUR 600 - 1,000</p>
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