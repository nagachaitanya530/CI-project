const CurriculumPage = () => {
    return (
        <div>
            <div className="max-w-5xl mx-auto p-6 text-gray-800 space-y-6">
                <h1 className="text-xl font-bold text-blue-700">
                    Sample Syllabus: Business English (Intermediate Level)
                </h1>

                <p><strong>Course:</strong> Corporate English</p>
                <p><strong>Level:</strong> Advanced</p>

                <p>
                    <strong>This is for:</strong> anyone who’s willing to communicate efficiently in general business situations, including managers, salespeople, account/finance managers, and business leaders.
                </p>

                <h2 className="text-2xl font-semibold text-blue-600">Learning Objectives</h2>
                <ul className="list-disc pl-6 space-y-1">
                    <li>Communicate in practical, business-oriented situations</li>
                    <li>Express with fluency, accuracy, and confidence</li>
                    <li>Navigate various business contexts such as negotiations, calls, presentations, and social events</li>
                </ul>

                <h2 className="text-2xl font-semibold text-blue-600">Course Support</h2>
                <ul className="list-disc pl-6 space-y-1">
                    <li>Systematic work on core grammatical structures</li>
                    <li>Error rectification, vocabulary patterns, and pronunciation</li>
                    <li>Content customized via pre-course Needs Analysis, and adapted as the course progresses</li>
                </ul>

                <h2 className="text-2xl font-semibold text-blue-600">Modules Overview</h2>

                <div className="space-y-4">

                    {/* Introduction */}
                    <div>
                        <h3 className="text-xl font-bold">Introduction</h3>
                        <ul className="list-disc pl-6">
                            <li>Language outline and approach</li>
                            <li>Describing roles and responsibilities</li>
                            <li>Common business scenarios and key issues</li>
                        </ul>
                    </div>

                    {/* Meetings */}
                    <div>
                        <h3 className="text-xl font-bold">Meetings</h3>
                        <ul className="list-disc pl-6">
                            <li>Chairing, setting the agenda, controlling the conversation</li>
                            <li>Turn-taking, active listening, note-taking</li>
                            <li>Being diplomatic, agreeing and disagreeing effectively</li>
                        </ul>
                    </div>

                    {/* Business Correspondence */}
                    <div>
                        <h3 className="text-xl font-bold">Business Correspondence</h3>
                        <ul className="list-disc pl-6">
                            <li>Email: register, style, standard phrasing</li>
                            <li>Notes and memos</li>
                            <li>Business-specific language usage</li>
                        </ul>
                    </div>

                    {/* Telephoning */}
                    <div>
                        <h3 className="text-xl font-bold">Telephoning</h3>
                        <ul className="list-disc pl-6">
                            <li>Checking & clarifying information</li>
                            <li>Finance-specific scenarios</li>
                            <li>Understanding accents, tone, and intonation</li>
                        </ul>
                    </div>

                    {/* Presentations */}
                    <div>
                        <h3 className="text-xl font-bold">Making Presentations</h3>
                        <ul className="list-disc pl-6">
                            <li>Effective topic introduction</li>
                            <li>Linking and sequencing ideas</li>
                            <li>Concluding strongly and handling questions</li>
                        </ul>
                    </div>

                    {/* Process Management */}
                    <div>
                        <h3 className="text-xl font-bold">Process Management</h3>
                        <ul className="list-disc pl-6">
                            <li>Describing processes, cause and effect</li>
                            <li>Critiquing and making recommendations</li>
                            <li>Quality assurance and continuous improvement</li>
                        </ul>
                    </div>

                    {/* Negotiating */}
                    <div>
                        <h3 className="text-xl font-bold">Negotiating</h3>
                        <ul className="list-disc pl-6">
                            <li>Key language for negotiation and argument framing</li>
                            <li>Negotiating with suppliers and customers</li>
                        </ul>
                    </div>

                    {/* Reports */}
                    <div>
                        <h3 className="text-xl font-bold">Reports</h3>
                        <ul className="list-disc pl-6">
                            <li>Skimming reports and news sources</li>
                            <li>Reporting ideas effectively</li>
                            <li>Report writing: style, register, structure</li>
                        </ul>
                    </div>

                    {/* Social English */}
                    <div>
                        <h3 className="text-xl font-bold">Social English</h3>
                        <ul className="list-disc pl-6">
                            <li>Making a strong first impression</li>
                            <li>Speed networking and elevator pitches</li>
                            <li>Small talk, turn-taking, and conventions</li>
                        </ul>
                    </div>

                    {/* Optional Areas */}
                    <div>
                        <h3 className="text-xl font-bold">Additional Topics (Optional)</h3>
                        <ul className="list-disc pl-6">
                            <li>Case studies</li>
                            <li>Writing effective proposals</li>
                            <li>Team management</li>
                            <li>Cross-cultural awareness</li>
                            <li>Discussing the global economic picture</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>






    )

}
export default CurriculumPage