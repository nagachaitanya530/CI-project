"use client";

export default function Training() {
  return (
    <section id="training" className="mt-12 px-4 md:px-10 py-16">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        ACT <span className="underline decoration-red-500">Training</span>
      </h2>

      {/* Subheading */}
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        Salient Features of ACT Coaching at Edwise
      </h3>

      {/* Features List */}
      <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
        <li>REAL ACT Prep Guide issued as courseware.</li>
        <li>Maximum 10–15 students per batch, making the sessions personalized.</li>
        <li>
          The ACT courses have a strong focus on building fundamental knowledge
          in Math.
        </li>
        <li>100 hours of intensive and comprehensive training.</li>
        <li>
          Qualified, experienced and trained faculties for conducting the ACT
          classes.
        </li>
        <li>The ACT exam preparation also includes 4 full-length mock tests.</li>
        <li>Facility of shifting to any branch throughout India.</li>
        <li>We conduct both online and offline sessions for the ACT exam training.</li>
      </ul>

      {/* Timing */}
      <h3 className="text-xl font-semibold text-gray-800 mb-2">Timing:</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        <li>
          <strong>Weekdays:</strong> Tuesday to Friday, 2 hours per day
        </li>
        <li>
          <strong>Weekends:</strong> Saturday and Sunday, 4 hours per day
        </li>
        <li>
          <strong>Fast track mode:</strong> Tuesday to Sunday, 4 hours per day
        </li>
      </ul>
    </section>
  );
}
