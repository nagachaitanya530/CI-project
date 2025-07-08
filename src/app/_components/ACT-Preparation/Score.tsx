"use client";

export default function Score() {
  return (
<<<<<<< HEAD
    <section
      id="scores"
      className="w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-10 py-12"
    >
   
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        ACT <span className="underline decoration-red-500">Scoring</span>
      </h2>

     
      <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
        Each section has a test score range of <strong>1 – 36</strong>:
      </p>

      <div className="text-gray-700 text-base sm:text-lg space-y-3">
        <p>
          <strong>Below Average Score Range:</strong> 1 – 16
        </p>
        <p>
          <strong>Average Score Range:</strong> 17 – 24
        </p>
        <p>
          <strong>Above Average Score Range:</strong> 25 – 36
=======
    <section id="scores" className="mt-12 px-4 md:px-10 py-16">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        ACT <span className="underline decoration-red-500">Scoring</span>
      </h2>

      {/* Score Description */}
      <p className="text-gray-700 text-base leading-relaxed mb-6">
        Each section has a test score range of <strong>1 - 36</strong>:
      </p>

      {/* Score Ranges */}
      <div className="text-gray-700 text-base space-y-3">
        <p>
          <strong>Below Average Score Range:</strong> 1 - 16
        </p>
        <p>
          <strong>Average Score Range:</strong> 17 - 24
        </p>
        <p>
          <strong>Above Average Score Range:</strong> 25 - 36
>>>>>>> cost-of-studying-usa
        </p>
      </div>
    </section>
  );
}
