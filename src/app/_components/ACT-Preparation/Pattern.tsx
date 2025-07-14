"use client";

export default function Pattern() {
  const sections = [
    {
      test: "English",
      questions: "75",
      minutes: "45",
      measures:
        "The ability to make decisions to revise and edit short texts and essays in different genres.",
    },
    {
      test: "Mathematics",
      questions: "60",
      minutes: "60",
      measures:
        "The mathematical skills you have typically acquired in courses up to the beginning of grade 12.",
    },
    {
      test: "Reading",
      questions: "40",
      minutes: "35",
      measures:
        "The ability to read closely, reason logically about texts using evidence, and integrate information from multiple resources.",
    },
    {
      test: "Science",
      questions: "40",
      minutes: "35",
      measures:
        "The interpretation, analysis, evaluation, reasoning, and problem-solving skills required in biology, chemistry, Earth/space sciences, and physics.",
    },
    {
      test: "Writing (optional)",
      questions: "1 essay",
      minutes: "40",
      measures:
        "Writing skills taught in high school English classes and in entry-level college composition courses. This section is optional.",
    },
  ];

  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 md:px-10 mt-12 md:mt-20" id="pattern">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        ACT <span className="underline decoration-red-500">Pattern</span>
      </h2>

      {/* Subheading */}
      <p className="text-blue-800 font-semibold text-base sm:text-lg mb-6">
        The following sections compose the ACT test:
      </p>

      {/* Table for md+ screens */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full border-collapse text-base shadow-md border border-gray-200 rounded-xl overflow-hidden">
          <thead className="bg-blue-900 text-white">
            <tr>
              <th className="py-4 px-6 text-left">Test</th>
              <th className="py-4 px-6 text-center">Number of Questions</th>
              <th className="py-4 px-6 text-center">Minutes Per Test</th>
              <th className="py-4 px-6 text-left">This section measures</th>
            </tr>
          </thead>
          <tbody className="text-gray-800">
            {sections.map((s, i) => (
              <tr key={i} className="border-t">
                <td className="py-4 px-6 font-medium">{s.test}</td>
                <td className="py-4 px-6 text-center">{s.questions}</td>
                <td className="py-4 px-6 text-center">{s.minutes}</td>
                <td className="py-4 px-6">{s.measures}</td>
              </tr>
            ))}
            <tr className="border-t bg-gray-50 font-semibold">
              <td className="py-4 px-6">Total Duration</td>
              <td className="py-4 px-6 text-center" colSpan={3}>
                2 hours and 55 minutes
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Stacked Cards for small screens */}
      <div className="md:hidden space-y-4">
        {sections.map((s, i) => (
          <div
            key={i}
            className="border border-gray-200 rounded-xl shadow-sm bg-white p-4"
          >
            <h3 className="text-lg font-semibold text-blue-900 mb-2">{s.test}</h3>
            <p className="text-gray-700 mb-1">
              <span className="font-medium">Number of Questions: </span>
              {s.questions}
            </p>
            <p className="text-gray-700 mb-1">
              <span className="font-medium">Minutes Per Test: </span>
              {s.minutes}
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Measures: </span>
              {s.measures}
            </p>
          </div>
        ))}
        <div className="border border-gray-200 rounded-xl shadow-sm bg-gray-50 p-4 font-semibold text-gray-800">
          Total Duration: 2 hours and 55 minutes
        </div>
      </div>

      {/* Additional text */}
      <div className="mt-6 text-base leading-relaxed text-gray-800">
        <p>
          The ACT consists of four multiple-choice tests in English, mathematics,
          reading, and science. The four multiple-choice sections contain 215
          questions and take 2 hours and 55 minutes to complete. After the
          mathematics test, you will be given a 15-minute break. If you take the
          optional writing test you will have 40 minutes to complete the essay and
          will receive an additional 5-minute break before the writing portion
          begins.
        </p>
      </div>
    </section>
  );
}
