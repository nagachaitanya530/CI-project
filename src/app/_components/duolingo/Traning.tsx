"use client";

export default function Training() {
  return (
    <div className="px-6 md:px-20 lg:px-28 py-10 bg-white text-gray-900">
      
      {/* Title */}
      <h2 className="text-4xl font-bold mb-6">
        Duolingo{" "}
        <span className="underline decoration-red-500 decoration-4">Training</span>
      </h2>

      {/* Subtitle */}
      <p className="text-lg font-semibold mb-4">
        Salient Features of Duolingo Coaching at Edwise
      </p>

      {/* Bullet Points */}
      <ul className="list-disc pl-6 text-lg leading-8 text-gray-700 space-y-2">
        <li>30 hours of comprehensive training for the test.</li>
        <li>Training in all four sections of the test: Literacy, Comprehension, Conversation and Production Skills.</li>
        <li>
          On the first day we assess students ability giving different question types in academic context including fill in the blanks, complete the missing letter, short writing, speak on a topic and photo, identify the real English words, listening and speaking.
        </li>
        <li>
          In following days, candidates are given detail information about each question types with minimum 15 questions to solve.
        </li>
        <li>
          After intensive training, every 8th day a Duolingo mock test is conducted.
        </li>
        <li>We Conduct both online and offline sessions.</li>
      </ul>
    </div>
  );
}

