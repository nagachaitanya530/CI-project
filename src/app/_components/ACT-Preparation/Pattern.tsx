"use client";

export default function Pattern() {
<<<<<<< HEAD
  return (
    <section
      id="pattern"
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-12"
    >
   
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        ACT <span className="underline decoration-red-500">Pattern</span>
      </h2>

     
      <p className="text-blue-800 font-semibold text-base sm:text-lg mb-6">
        The following sections compose the ACT test:
      </p>

      <div className="w-full overflow-x-auto">
        <div className="inline-block min-w-full align-middle border border-gray-200 rounded-xl shadow-sm">
          <table className="min-w-full divide-y divide-gray-200 text-sm md:text-base">
            <thead className="bg-blue-900 text-white">
              <tr>
                <th className="py-3 px-4 text-left">Test</th>
                <th className="py-3 px-4 text-center">Number of Questions</th>
                <th className="py-3 px-4 text-center">Minutes Per Test</th>
                <th className="py-3 px-4 text-left">This section measures</th>
              </tr>
            </thead>
            <tbody className="bg-white text-gray-800">
              {[
                {
                  name: "English",
                  questions: "75",
                  minutes: "45",
                  description:
                    "The ability to make decisions to revise and edit short texts and essays in different genres.",
                },
                {
                  name: "Mathematics",
                  questions: "60",
                  minutes: "60",
                  description:
                    "The mathematical skills you have typically acquired in courses up to the beginning of grade 12.",
                },
                {
                  name: "Reading",
                  questions: "40",
                  minutes: "35",
                  description:
                    "The ability to read closely, reason logically about texts using evidence, and integrate information from multiple resources.",
                },
                {
                  name: "Science",
                  questions: "40",
                  minutes: "35",
                  description:
                    "The interpretation, analysis, evaluation, reasoning, and problem-solving skills required in biology, chemistry, Earth/space sciences, and physics.",
                },
                {
                  name: "Writing (optional)",
                  questions: "1 essay",
                  minutes: "40",
                  description:
                    "Writing skills taught in high school English classes and in entry-level college composition courses. This section is optional.",
                },
              ].map((row, i) => (
                <tr key={i} className="border-t">
                  <td className="py-3 px-4 font-medium">{row.name}</td>
                  <td className="py-3 px-4 text-center">{row.questions}</td>
                  <td className="py-3 px-4 text-center">{row.minutes}</td>
                  <td className="py-3 px-4">{row.description}</td>
                </tr>
              ))}

              <tr className="border-t bg-gray-50 font-semibold">
                <td className="py-3 px-4">Total Duration</td>
                <td className="py-3 px-4 text-center" colSpan={3}>
                  2 hours and 55 minutes
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p className="mt-6 text-gray-800 text-base sm:text-lg leading-relaxed">
        The ACT consists of four multiple-choice tests in English, mathematics,
        reading, and science. The four multiple-choice sections contain 215
        questions and take 2 hours and 55 minutes to complete. After the
        mathematics test, you will be given a 15-minute break. If you take the
        optional writing test you will have 40 minutes to complete the essay and
        will receive an additional 5-minute break before the writing portion
        begins.
      </p>
    </section>
  );
=======
    return (
        <section className="py-16 mt-20 px-4 md:px-10" id="pattern">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                ACT <span className="underline decoration-red-500">Pattern</span>
            </h2>

            {/* Subheading */}
            <p className="text-blue-800 font-semibold text-lg mb-6">
                The following sections compose the ACT test :
            </p>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full border-collapse text-sm md:text-base shadow-md border border-gray-200 rounded-xl overflow-hidden">
                    <thead className="bg-blue-900 text-white">
                        <tr>
                            <th className="py-4 px-6 text-left">Test</th>
                            <th className="py-4 px-6 text-center">Number of Questions</th>
                            <th className="py-4 px-6 text-center">Minutes Per Test</th>
                            <th className="py-4 px-6 text-left">This section measures</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-800">
                        <tr className="border-t">
                            <td className="py-4 px-6 font-medium">English</td>
                            <td className="py-4 px-6 text-center">75</td>
                            <td className="py-4 px-6 text-center">45</td>
                            <td className="py-4 px-6">
                                The ability to make decisions to revise and edit short texts and essays in different genres.
                            </td>
                        </tr>
                        <tr className="border-t">
                            <td className="py-4 px-6 font-medium">Mathematics</td>
                            <td className="py-4 px-6 text-center">60</td>
                            <td className="py-4 px-6 text-center">60</td>
                            <td className="py-4 px-6">
                                The mathematical skills you have typically acquired in courses up to the beginning of grade 12.
                            </td>
                        </tr>
                        <tr className="border-t">
                            <td className="py-4 px-6 font-medium">Reading</td>
                            <td className="py-4 px-6 text-center">40</td>
                            <td className="py-4 px-6 text-center">35</td>
                            <td className="py-4 px-6">
                                The ability to read closely, reason logically about texts using evidence, and integrate information from multiple resources.
                            </td>
                        </tr>
                        <tr className="border-t">
                            <td className="py-4 px-6 font-medium">Science</td>
                            <td className="py-4 px-6 text-center">40</td>
                            <td className="py-4 px-6 text-center">35</td>
                            <td className="py-4 px-6">
                                The interpretation, analysis, evaluation, reasoning, and problem-solving skills required in biology, chemistry, Earth/space sciences, and physics.
                            </td>
                        </tr>
                        <tr className="border-t">
                            <td className="py-4 px-6 font-medium">Writing (optional)</td>
                            <td className="py-4 px-6 text-center">1 essay</td>
                            <td className="py-4 px-6 text-center">40</td>
                            <td className="py-4 px-6">
                                Writing skills taught in high school English classes and in entry-level college composition courses. This section is optional.
                            </td>
                        </tr>
                        <tr className="border-t bg-gray-50 font-semibold">
                            <td className="py-4 px-6">Total Duration</td>
                            <td className="py-4 px-6 text-center" colSpan={3}>
                                2 hours and 55 minutes
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <br></br>
            <div>
                <p>
                    The ACT consists of four multiple-choice tests in English, mathematics, reading, and science. The four multiple-choice sections contain 215 questions and take 2 hours and 55 minutes to complete. After the mathematics test, you will be given a 15-minute break. If you take the optional writing test you will have 40 minutes to complete the essay and will receive an additional 5-minute break before the writing portion begins.
                </p>
            </div>
        </section>
    );
>>>>>>> cost-of-studying-usa
}
