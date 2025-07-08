const AboutPage = () => {
    return (
        <div>
            <img
                src="../../soft.webp"
                alt="Soft Skills Banner"
                className="rounded-lg object-cover w-200 h-80"
            />
            <div className="p-6 max-w-4xl mx-auto text-gray-800 space-y-6">
                <p className="text-lg leading-relaxed">
                    Many non-native English speakers pursue their studies in the language with the intention of
                    conducting business with English-speaking nations or with businesses that may be situated
                    elsewhere but nevertheless use English as a lingua franca or a common language. Non-native
                    English speakers communicate in business settings all across the world in a significant
                    amount of English. The goal of the exercise in situations like these is efficient and
                    effective communication. When a negotiator is under pressure and merely wants to achieve a
                    deal as soon as possible, for example, the rigid rules of language are occasionally broken
                    in such situations.
                </p>
                <p className="text-lg leading-relaxed">
                    To different people, business English means different things. Some people concentrate on the
                    vocabulary and subjects related to business, trade, money, and international relations.
                    Others use the term to refer to communication techniques employed at work. They concentrate
                    on the vocabulary and techniques required for standard business communication, including
                    meetings, small chat, socialising, correspondence, report writing, and a methodical
                    approach.
                </p>
                <h2 className="text-2xl font-bold text-blue-600 mt-8">COURSE FEATURES</h2>
                <ul className="list-disc space-y-2 mt-4">
                    {[
                        'Flexible content to meet emerging needs',
                        'Flexible logistics, including training location, scheduling, and duration',
                        'Customised materials, including required documents where appropriate',
                        'A choice of training methods, including in–‐group training, in–‐country immersion, personal tuition',
                        'Experienced, experienced & skilled–‐speaker trainers using participative, practical methodology',
                        'On–‐going review and assessment',
                        'Customised online reporting platform, to include attendance, trainer notes, and progress assessment',
                        'Customised online learning resource, to include lesson materials, extra resources, and learner forums',
                    ].map((item, index) => (
                        <li key={index} className="flex items-start space-x-2">
                            <span className="text-green-600 font-bold">✓</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>





    )

}
export default AboutPage