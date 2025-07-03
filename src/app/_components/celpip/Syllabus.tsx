function Syllabus() {
    return (
        <div
            id="syllabus"
            className="px-4 sm:px-8 md:px-12 lg:px-20 py-6"
            style={{ fontFamily: "'Poppins', sans-serif" }}
        >
            <h1 className="font-bold text-3xl sm:text-4xl py-2">
                CELPIP <span className="text-blue-900">Syllabus</span>
            </h1>
            <div className="text-base sm:text-lg md:text-xl">
                <br />
                <span className="font-bold text-blue-900 py-2">Listening</span>
                <ul className="list-disc list-inside text-gray-700 text-[16px] sm:text-[18px] text-gray-600">
                    <li>
                        It has 1 unscored task and 6 scored parts (38 questions). There are 4 conversations and 2 monologues. All audios clips are played once only. All questions are multiple choices, with 4 options and 1 correct answer.
                    </li>
                </ul>
                <br />
                <span className="font-bold py-2 text-blue-900">Reading</span>
                <br />
                <ul className="list-disc list-inside text-[16px] sm:text-[18px] text-gray-600">
                    <li>
                        The Reading section consists of 4 scored parts (38 questions). For each Reading part, you need to read the texts and answer the questions. All questions are multiple choices, with 4 options and 1 correct answer.
                    </li>
                </ul>
                <br />
                <span className="font-bold py-2 text-blue-900">Writing</span>
                <br />
                <ul className="list-disc text-md list-inside text-[16px] sm:text-[18px] text-gray-600">
                    <li>
                        It comprises of 2 tasks. Task 1 presents email prompt. In Task 2, students have to respond to a survey questions.
                    </li>
                </ul>
                <br />
                <span className="font-bold py-2 text-blue-900">Speaking</span>
                <br />
                <ul className="list-disc list-inside text-[16px] sm:text-[18px] text-gray-600">
                    <li>
                        The Speaking section consists of 1 unscored task and 8 scored parts. Each parts has 1 task. The tasks are based on giving advice, talking about a personal experience, describing a scene, making a prediction, comparing and persuading, dealing with a difficult situation, expressing opinion, and descrining an unusual situation.
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Syllabus;