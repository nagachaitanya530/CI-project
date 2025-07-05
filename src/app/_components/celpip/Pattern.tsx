function Pattern() {
    return (
        <div
            id="pattern"
            className="px-4 py-10 sm:px-8 md:px-16 lg:px-20"
            style={{ fontFamily: "'Poppins', sans-serif" }}
        >
            <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl mb-5 text-center">
                CELPIP <span className="text-blue-900">Pattern</span>
            </h1>
            <div className="overflow-x-auto border-2 rounded-lg">
                <table className="min-w-[500px] w-full border border-gray-600 rounded-lg text-center">
                    <thead className="bg-blue-900 text-white">
                        <tr className="text-base sm:text-lg">
                            <th className="py-2 px-4 sm:py-3 sm:px-6">Sections</th>
                            <th className="py-2 px-4 sm:py-3 sm:px-6">Questions</th>
                            <th className="py-2 px-4 sm:py-3 sm:px-6">Time</th>
                        </tr>
                    </thead>
                    <tbody className="text-blue-900 text-base sm:text-lg border">
                        <tr className="bg-blue-50">
                            <td className="py-2 px-4 sm:py-3 sm:px-6 border-b">Listening</td>
                            <td className="py-2 px-4 sm:py-3 sm:px-6 border-b border-r">38 questions</td>
                            <td className="py-2 px-4 sm:py-3 sm:px-6 border-b">47-55 minutes</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 sm:py-3 sm:px-6 border-b border-r">Reading</td>
                            <td className="py-2 px-4 sm:py-3 sm:px-6 border-b border-r">38 questions</td>
                            <td className="py-2 px-4 sm:py-3 sm:px-6 border-b">55-60 minutes</td>
                        </tr>
                        <tr className="bg-blue-50">
                            <td className="py-2 px-4 sm:py-3 sm:px-6 border-b border-r">Writing</td>
                            <td className="py-2 px-4 sm:py-3 sm:px-6 border-b border-r">2 tasks</td>
                            <td className="py-2 px-4 sm:py-3 sm:px-6 border-b border-r">55-60 minutes</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 sm:py-3 sm:px-6 border-b border-r">Speaking</td>
                            <td className="py-2 px-4 sm:py-3 sm:px-6 border-b border-r">8 tasks</td>
                            <td className="py-2 px-4 sm:py-3 sm:px-6 border-b border-r">15-20 minutes</td>
                        </tr>
                    </tbody>
                </table>
                <p className="p-2 text-gray-700 text-center font-semibold text-sm sm:text-base">
                    The timings shown are variable. The test will last for about 3 hours.
                </p>
            </div>
        </div>
    );
}
export default Pattern;