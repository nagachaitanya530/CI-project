function Overview() {
    return (
        <>
            <div
                id="overview"
                className="px-4 py-10 md:px-10 lg:px-20"
                style={{ fontFamily: "'Poppins', sans-serif" }}
            >
                <h1 className="font-bold text-3xl md:text-4xl mb-5">
                    CELPIP <span className="text-blue-900">Overview</span>
                </h1>
                <p className="text-base md:text-lg text-gray-600">
                    CELPIP, Canadian English Language Proficiency Index Program, is a general English language proficiency test.
                    The CELPIP exam allows test takers to demonstrate their ability to function in English.
                </p>
            </div>
            <div
                id="overview"
                className="px-4 pb-10 md:px-10 lg:px-20"
                style={{ fontFamily: "'Poppins', sans-serif" }}
            >
                <h1 className="font-bold text-3xl md:text-4xl py-2">
                    Types Of <span className="text-blue-900">CELPIP Exam</span>
                </h1>
                <p className="text-base md:text-xl">
                    There are two types of CELPIP test:
                    <br />
                    <br />
                    <span className="font-bold text-blue-900 py-2">CELPIP (General Ls)</span>
                    <ul className="list-disc list-inside text-base md:text-lg text-gray-600">
                        <li>Only available for people residing in Canada and USA.</li>
                    </ul>
                    <br />
                    <span className="font-bold py-2 text-blue-900">CELPIP (General)</span>
                    <br />
                    <ul className="list-disc list-inside text-base md:text-lg text-gray-600">
                        <li>
                            For people residing in other parts of the world. The CELPIP (General) test measures all English Language skills, including Listening, Reading, Writing and Speaking. It is fully computer delivered, providing test takers the opportunity to complete all test components in one sitting with no additional appointments, interviews, or test sittings required.
                        </li>
                        <li>
                            It is fully computer delivered, providing test takers the opportunity to complete all test components in one sitting with no additional appointments, interviews, or test sittings required.
                        </li>
                    </ul>
                </p>
            </div>
        </>
    );
}
export default Overview;