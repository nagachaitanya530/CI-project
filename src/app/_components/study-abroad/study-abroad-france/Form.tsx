function Form(){
    return(
        <div className="flex flex-col border-2 border-gray-300 rounded-2xl p-8 gap-4 w-1/3 h-195">
                    <h1 className="text-blue-900 text-xl font-bold">Book Your Free Consultation with Trustworthy Counsellors</h1>
                    <input type="text" placeholder="Name" className="border-2 p-4 rounded-2xl border-gray-300 " />
                    <input type="text" placeholder="Email" className="border-2 p-4 rounded-2xl border-gray-300 " />
                    <input type="text" placeholder="Mobile Number" className="border-2 p-4 rounded-2xl border-gray-300" />
                    <select className="border-2 p-4 rounded-2xl border-gray-300 text-blue-900" defaultValue="">
                        <option value="" disabled>
                            Preferred Course
                        </option>
                        <option value="bachelor">Bachelor</option> 
                        <option value="master">Master</option>
                        <option value="phd">PhD</option>
                        <option value="professional">Professional</option>
                        <option value="other">Other</option>

                    </select>
                    <select className="border-2 p-4 rounded-2xl border-gray-300 text-blue-900" defaultValue="">
                        <option value="" disabled>
                            Select Month
                        </option>
                        <option value="january">January</option>
                        <option value="february">February</option>
                        <option value="march">March</option>
                        <option value="april">April</option>
                        <option value="may">May</option>
                        <option value="june">June</option>
                        <option value="july">July</option>
                        <option value="august">August</option>
                        <option value="september">September</option>
                        <option value="october">October</option>
                        <option value="november">November</option>
                        <option value="december">December</option>
                    </select>
                    <select className="border-2 p-4 rounded-2xl border-gray-300 text-blue-900" defaultValue="">
                        <option value="" disabled>
                            Select Year
                        </option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                        <option value="2027">2027</option>
                    </select>
                    <label className="flex gap-2 items-start">
                        <input type="checkbox" className="accent-blue-700 -mt-1 h-10 w-10 hover:cursor-pointer" />
                        <p className="text-blue-900">
                            {" "}
                            I consent to receiving Calls, WhatsApp, Email and Google RCS from Edwise to assist with this enquiry.
                        </p>
                    </label>
                    <br />
                    <input
                        type="submit"
                        value="Submit"
                        className="w-fit  py-3 px-5 font-semibold text-blue-900 rounded-2xl border-1 hover:bg-blue-900 hover:text-white hover:cursor-pointer"
                    />
                </div>
    )
}

export default Form;