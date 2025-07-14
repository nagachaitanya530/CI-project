function FormatDetails() {
    return (
        <>
            <section id="pattern" className="my-10 ">
                <h1 className="text-4xl mb-5">IELTS <strong className="underline decoration-red-500">Pattern </strong></h1>
                <p className="text-xl">Paper-based (PB)/ Computer Based (CB) <br />
                    IELTS consist of four components</p>
                <h3 className="text-xl text-cyan-900 my-5 font-bold">IELTS consist of four components:    </h3>

                <div className="overflow-hidden rounded-2xl border border-gray-300 mb-10">
                    <table className="border p-2 w-full">
                        <thead>
                            <tr className="bg-cyan-800">
                                <th className="text-center text-white text-lg px-4 py-4 w-1/2 ">Sections</th>
                                <th className="text-center text-white text-lg px-4 py-4 w-1/2 ">Format</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="text-center text-lg px-4 py-4 bg-gray-50" colSpan={2}>Listening <br />
                                    4 parts, 40 questions <br />
                                    PB- 40 minutes and CB- approximately 30 minutes</td>
                            </tr>
                            <tr>
                                <td className="text-center text-lg px-4 py-4 border bg-gray-50">Academic Reading <br />
                                    3 passages, 40 questions 60 minutes</td>
                                <td className="text-center text-lg px-4 py-4 border bg-gray-50">General Training Reading <br /> 3 sections, 40 questions 60 minutes</td>
                            </tr>
                            <tr>
                                <td className="text-center text-lg px-4 py-4 border bg-gray-50">Academic Reading <br /> 2 tasks 60 minutes</td>
                                <td className="text-center text-lg px-4 py-4 border bg-gray-50">General Training Reading <br /> 2 tasks 60 minutes</td>
                            </tr>
                            <tr>
                                <td className="text-center text-lg px-4 py-4 border bg-gray-50" colSpan={2}>Speaking <br /> 3 parts, 11 to 14 minutes</td>

                            </tr>
                            <tr>
                                <td className="text-center text-lg px-4 py-4 border bg-gray-50" colSpan={2}>Total Test Time <br /> 2 hours 45 minutes</td>
                            </tr>
                        </tbody>
                    </table>
                </div><br />
         <div className="overflow-hidden rounded-2xl border border-gray-300 mb-10">
                <table className="border p-2 w-full">
                    <thead>
                       <tr className="bg-cyan-800">
                           <th className="text-center text-white text-lg px-4 py-4 w-1/2 ">Sections</th>
                            <th className="text-center text-white text-lg px-4 py-4 w-1/2 ">Format</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-center text-lg px-4 py-4 bg-gray-50" colSpan={2}>Listening <br />
                                4 parts, 40 questions <br />
                                PB- 40 minutes and CB- approximately 30 minutes</td>
                        </tr>
                        <tr>
                            <td className="text-center text-lg px-4 py-4 border bg-gray-50">Academic Reading <br />
                           3 passages, 40 questions 60 minutes</td>
                            <td className="text-center text-lg px-4 py-4 border bg-gray-50">General Training Reading <br /> 3 sections, 40 questions 60 minutes</td>

                        </tr>
                        <tr>
                            <td className="text-center text-lg px-4 py-4 border bg-gray-50">Academic Reading <br /> 2 tasks 60 minutes</td>
                            <td className="text-center text-lg px-4 py-4 border bg-gray-50">General Training Reading <br /> 2 tasks 60 minutes</td>
                        </tr>
                        <tr>
                            <td className="text-center text-lg px-4 py-4 border bg-gray-50" colSpan={2}>Speaking <br /> 3 parts, 11 to 14 minutes</td>

                        </tr>
                        <tr>
                            <td className="text-center text-lg px-4 py-4 border bg-gray-50" colSpan={2}>Total Test Time <br /> 2 hours 45 minutes</td>
                        </tr>
                    </tbody>
                </table>
</div><br />
            </section>
        </>
    );
}

export default FormatDetails;