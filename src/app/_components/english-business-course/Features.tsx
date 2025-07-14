import Image from "next/image";

function Features() {
    return (
        <>
            <section id="feature" className="">
                <h1 className="text-4xl font-semibold py-5">Features</h1>
                <div className="container flex  flex-col md:flex-row gap-5 p-5">
                    <div className="bg-cyan-600 hover:-translate-y-2 ease-in-out transition delay-150 duration-300 text-white rounded-2xl p-6 h-80 relative overflow-hidden shadow-lg">
                        <h2 className="text-2xl font-bold mb-2">Personalized Mentorship</h2>
                        <p className="text-sm mb-10">
                            Get one-on-one guidance from industry experts to improve your skills.
                        </p>
                        <img
                            src="../../home/personalized-mentorship.png"
                            alt="Personal Mentor"
                            className="w-50 absolute bottom-3 right-4 rounded-full shadow-lg"
                        />
                    </div>

                    <div className="bg-purple-600 hover:-translate-y-2 ease-in-out transition delay-150 duration-300 text-white rounded-2xl p-6 h-80 relative overflow-hidden shadow-lg">
                        <h2 className="text-2xl font-bold mb-2">Small Group Session</h2>
                        <p className="text-sm mb-10">
                            Collaborate and learn in a group with peers and expert facilitators.
                        </p>
                        <img
                            src="../../home/group-study.png"
                            alt="Group Session"
                            className="w-50 absolute bottom-3 right-4 rounded-full shadow-lg"
                        />
                    </div>
                    <div className="bg-gray-950 hover:-translate-y-2 ease-in-out transition delay-150 duration-300 text-white rounded-2xl p-6 h-80 relative overflow-hidden shadow-lg">
                        <h2 className="text-2xl font-bold mb-2">AI Evaluation</h2>
                        <p className="text-sm mb-10">
                            Receive instant feedback on your progress with our AI-based evaluation tool.
                        </p>
                        <img
                            src="../../home/ai-evaluation.png"
                            alt="AI mentor"
                            className="w-50 absolute bottom-3 right-4 rounded-full shadow-lg"
                        />
                    </div>
                </div>
                <div className="bg-purple-600 hover:-translate-y-2 ease-in-out transition delay-150 duration-300 text-white rounded-2xl p-6 h-80 relative overflow-hidden shadow-lg">
                    <h2 className="text-2xl font-bold mb-2">Small Group Session</h2>
                    <p className="text-sm mb-10">
                        Collaborate and learn in a group with peers and expert facilitators.
                    </p>
                    <Image
                        src="/home/group-study.png"
                        alt="Group Session"
                        className="w-50 absolute bottom-3 right-4 rounded-full shadow-lg"
                        width={500} height={300}
                    />
                </div>
                <div className="bg-gray-950 hover:-translate-y-2 ease-in-out transition delay-150 duration-300 text-white rounded-2xl p-6 h-80 relative overflow-hidden shadow-lg">
                    <h2 className="text-2xl font-bold mb-2">AI Evaluation</h2>
                    <p className="text-sm mb-10">
                        Receive instant feedback on your progress with our AI-based evaluation tool.
                    </p>
                    <Image
                        src="/home/ai-evaluation.png"
                        alt="AI mentor"
                        className="w-50 absolute bottom-3 right-4 rounded-full shadow-lg"
                        width={500} height={300}
                    />
                </div>
            </section>
        </>
    );

}
export default Features;