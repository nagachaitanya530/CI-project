"use client";

export default function Syllabus() {
  return (
    <section id="syllabus" className="mt-12 px-4 md:px-10 py-16">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        ACT <span className="underline decoration-red-500">Syllabus</span>
      </h2>

      {/* English */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-blue-800 mb-2">English :</h3>
        <p className="text-gray-700 text-base leading-relaxed">
          The test consists of five essays or passages each of which is accompanied by a sequence of multiple-choice test questions.
          Six elements of effective writing are included in the English Test: punctuation, grammar and usage, sentence structure, strategy, organization, and style.
        </p>
      </div>

      {/* Mathematics */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-blue-800 mb-2">Mathematics :</h3>
        <p className="text-gray-700 text-base leading-relaxed">
          Test designed to assess the mathematical skills students have typically acquired in courses taken up to the beginning of grade 12.
        </p>
      </div>

      {/* Reading */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-blue-800 mb-2">Reading :</h3>
        <p className="text-gray-700 text-base leading-relaxed">
          The test questions ask you to derive meaning from several texts by referring to what is explicitly stated and by reasoning to determine implicit meaning.
        </p>
      </div>

      {/* Science */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-blue-800 mb-2">Science :</h3>
        <p className="text-gray-700 text-base leading-relaxed">
          It measures the interpretation, analysis, evaluation, reasoning, and problem-solving skills required in biology, chemistry, Earth/space sciences, and physics.
          You are not permitted to use a calculator on the science test.
        </p>
      </div>

      {/* Writing */}
      <div>
        <h3 className="text-xl font-semibold text-blue-800 mb-2">Writing :</h3>
        <p className="text-gray-700 text-base leading-relaxed">
          It measures your writing skills taught in high school English classes and in entry-level college composition courses. This section is optional.
        </p>
      </div>
    </section>
  );
}
