function Scoring() {
    return (
        <div
            id="scores"
            className="px-4 py-10 sm:px-8 md:px-16 lg:px-20"
            style={{ fontFamily: "'Poppins', sans-serif" }}
        >
            <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl mb-5">
                CELPIP <span className="text-blue-900">Scoring</span>
            </h1>
            <div className="overflow-x-auto border-2 rounded-lg">
                <table className="min-w-[400px] w-full border border-gray-600 rounded-lg text-center text-sm sm:text-base">
                    <thead className="bg-blue-900 text-white">
                        <tr className="text-base sm:text-lg">
                            <th className="py-2 px-3 sm:py-3 sm:px-6">CELPIP LEVEL</th>
                            <th className="py-2 px-3 sm:py-3 sm:px-6">Descriptor</th>
                        </tr>
                    </thead>
                    <tbody className="text-blue-900 border">
                        <tr className="bg-blue-50">
                            <td className="py-2 px-3 sm:py-3 sm:px-6 border-b">12</td>
                            <td className="py-2 px-3 sm:py-3 sm:px-6 border-b border-r">
                                Advanced proficiency in workplace and community contexts
                            </td>
                        </tr>
                        <tr>
                            <td className="py-2 px-3 sm:py-3 sm:px-6 border-b">11</td>
                            <td className="py-2 px-3 sm:py-3 sm:px-6 border-b border-r">
                                Advanced proficiency in workplace and community contexts
                            </td>
                        </tr>
                        <tr className="bg-blue-50">
                            <td className="py-2 px-3 sm:py-3 sm:px-6 border-b">10</td>
                            <td className="py-2 px-3 sm:py-3 sm:px-6 border-b border-r">
                                Highly effective proficiency in workplace and community contexts
                            </td>
                        </tr>
                        <tr>
                            <td className="py-2 px-3 sm:py-3 sm:px-6 border-b">9</td>
                            <td className="py-2 px-3 sm:py-3 sm:px-6 border-b border-r">
                                Effective proficiency in workplace and community contexts
                            </td>
                        </tr>
                        <tr className="bg-blue-50">
                            <td className="py-2 px-3 sm:py-3 sm:px-6 border-b">8</td>
                            <td className="py-2 px-3 sm:py-3 sm:px-6 border-b border-r">
                                Good proficiency in workplace and community contexts
                            </td>
                        </tr>
                        <tr>
                            <td className="py-2 px-3 sm:py-3 sm:px-6 border-b">7</td>
                            <td className="py-2 px-3 sm:py-3 sm:px-6 border-b border-r">
                                Adequate proficiency in workplace and community contexts
                            </td>
                        </tr>
                        <tr className="bg-blue-50">
                            <td className="py-2 px-3 sm:py-3 sm:px-6 border-b">6</td>
                            <td className="py-2 px-3 sm:py-3 sm:px-6 border-b border-r">
                                Developing effective proficiency in workplace and community contexts
                            </td>
                        </tr>
                        <tr>
                            <td className="py-2 px-3 sm:py-3 sm:px-6 border-b">5</td>
                            <td className="py-2 px-3 sm:py-3 sm:px-6 border-b border-r">
                                Aquiring effective proficiency in workplace and community contexts
                            </td>
                        </tr>
                        <tr className="bg-blue-50">
                            <td className="py-2 px-3 sm:py-3 sm:px-6 border-b">4</td>
                            <td className="py-2 px-3 sm:py-3 sm:px-6 border-b border-r">
                                Adequate proficiency for daily life activities
                            </td>
                        </tr>
                        <tr>
                            <td className="py-2 px-3 sm:py-3 sm:px-6 border-b">3</td>
                            <td className="py-2 px-3 sm:py-3 sm:px-6 border-b border-r">
                                Some proficiency in limited contexts
                            </td>
                        </tr>
                        <tr className="bg-blue-50">
                            <td className="py-2 px-3 sm:py-3 sm:px-6 border-b">2</td>
                            <td className="py-2 px-3 sm:py-3 sm:px-6 border-b border-r">2 tasks</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-3 sm:py-3 sm:px-6 border-b">1</td>
                            <td className="py-2 px-3 sm:py-3 sm:px-6 border-b border-r">
                                Insufficient information to assess
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default Scoring;