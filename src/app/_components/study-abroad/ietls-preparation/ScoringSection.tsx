import Table from "./Table";

function ScoringSection() {
    const body = [
<<<<<<< HEAD
        { left: "9", right: "Expert User" },
        { left: "8", right: "Very Good User" },
        { left: "7", right: "Good User" },
        { left: "6", right: "Competent User" },
        { left: "5", right: "Modest User" },
    ]
=======
    {left: "9",right:"Expert User"},
    {left: "8",right:"Very Good User"},
    {left: "7",right:"Good User"},
    {left: "6",right:"Competent User"},
    {left: "5",right:"Modest User"},
]
>>>>>>> cost-of-studying-usa

    return (
        <>
            <section id="score" className="my-15">
                <h1 className="text-4xl my-5">IELTS <strong className="underline decoration-red-500"> Scoring</strong></h1>
                <ul className="list-disc text-lg px-5">
                    <li>
                        IELTS is graded on a scale of 0 - 9, known as Band Scale.
                    </li>
                    <li>
                        Test Report Form has the test taker's overall score as well as scores for the Listening, Reading, Writing, and Speaking.
                    </li>
                    <li>
                        Generally, a score of at least 6 bands for UG and 6.5 bands for PG is required in each section.
                    </li>
                </ul>
<<<<<<< HEAD
                <Table bodyrows={body} heading="The nine bands are as follows:" thead1="IELTS Score Band" thead2="Proficiency Level" />
                <div className="space-y-2 mt-10">
                    <h2 className="text-2xl font-semibold text-cyan-900">Note :</h2>
                    <p className="text-lg text-cyan-900">IELTS One Skill Retake</p>
                    <ul className="list-disc pl-6 text-lg text-gray-700">
                        <li>It helps individuals to retake only one specific section of the test instead of retaking the full test.</li>
                        <li>You can only retake once within 60 days of the original test date.</li>
                        <li>Check with the specific institution or organization to confirm if they accept the Online Score Report.</li>
                        <li>One skill retake is only for computer delivered candidates.</li>
                    </ul>
                </div>
=======
                <Table bodyrows={body} heading="The nine bands are as follows:" thead1="IELTS Score Band" thead2="Proficiency Level"/>
             <div className="space-y-2 mt-10">
      {/* Heading */}
      <h2 className="text-2xl font-semibold text-cyan-900">Note :</h2>

      {/* Paragraph */}
      <p className="text-lg text-cyan-900">IELTS One Skill Retake
        
      </p>

      {/* Unordered List */}
      <ul className="list-disc pl-6 text-lg text-gray-700">
        <li>It helps individuals to retake only one specific section of the test instead of retaking the full test.</li>
        <li>You can only retake once within 60 days of the original test date.</li>
        <li>Check with the specific institution or organization to confirm if they accept the Online Score Report.</li>
        <li>One skill retake is only for computer delivered candidates.</li>
      </ul>
    </div>
>>>>>>> cost-of-studying-usa
            </section>
        </>
    );
}
export default ScoringSection;