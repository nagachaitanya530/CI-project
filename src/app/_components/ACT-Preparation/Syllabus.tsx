"use client";

export default function Syllabus() {
  return (
    <section id="syllabus" className="mt-12 px-4 sm:px-6 md:px-10 py-12 md:py-16">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        ACT <span className="underline decoration-red-500">Syllabus</span>
      </h2>

      {/* English */}
      <div className="mb-6">
        <h3 className="text-lg sm:text-xl font-semibold text-blue-800 mb-2">
          English:
        </h3>
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          The test consists of five essays or passages, each accompanied by a sequence of multiple-choice test questions.
          Six elements of effective writing are included: punctuation, grammar and usage, sentence structure, strategy, organization, and style.
        </p>
      </div>

      {/* Mathematics */}
      <div className="mb-6">
        <h3 className="text-lg sm:text-xl font-semibold text-blue-800 mb-2">
          Mathematics:
        </h3>
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          Designed to assess the mathematical skills students have typically acquired in courses taken up to the beginning of grade 12.
        </p>
      </div>

      {/* Reading */}
      <div className="mb-6">
        <h3 className="text-lg sm:text-xl font-semibold text-blue-800 mb-2">
          Reading:
        </h3>
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          The questions ask you to derive meaning from texts by referring to what is explicitly stated and by reasoning to determine implicit meaning.
        </p>
      </div>

      {/* Science */}
      <div className="mb-6">
        <h3 className="text-lg sm:text-xl font-semibold text-blue-800 mb-2">
          Science:
        </h3>
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          Measures the interpretation, analysis, evaluation, reasoning, and problem-solving skills required in biology, chemistry, Earth/space sciences, and physics.
          You are not permitted to use a calculator on this test.
        </p>
      </div>

      {/* Writing */}
      <div>
        <h3 className="text-lg sm:text-xl font-semibold text-blue-800 mb-2">
          Writing:
        </h3>
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          Measures your writing skills taught in high school English classes and in entry-level college composition courses. This section is optional.
        </p>
      </div>
    </section>
  );
}
