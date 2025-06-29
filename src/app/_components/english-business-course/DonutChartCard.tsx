import React from 'react';

interface Skill {
  name: string;
  level: string;
  percentage: number;
  color: string;
}

const skills: Skill[] = [ 
  { name: 'Business Vocabulary', level: 'CEFR C1 Level Proficiency', percentage: 91, color: 'bg-orange-500' },
  { name: 'Presentations', level: 'CEFR C1 Level Proficiency', percentage: 90, color: 'bg-cyan-500' },
  { name: 'Emails', level: 'CEFR B2 Level Proficiency', percentage: 89, color: 'bg-rose-500' },
  { name: 'Meetings', level: 'CEFR C1 Level Proficiency', percentage: 89, color: 'bg-fuchsia-600' },
  { name: 'Negotiations', level: 'CEFR C1 Level Proficiency', percentage: 89, color: 'bg-blue-900' },
];

export default function CEFRProgress() {
  return (
    <section className="min-h-screen bg-white px-4 py-12 flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-xl p-6 sm:p-8 flex flex-col lg:flex-row gap-8 w-full max-w-6xl">
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-1">*Expected outcome by the end of the course.</h2>
          <p className="text-sm text-gray-500 mb-6">
            *The results may vary depending upon individual's skill set, and the time put in practice.
            This should not be taken as a guarantee, but a general guideline.
          </p>

          <div className="">
            {skills.map((skill, idx) => (
              <div key={idx}>
                <p className="font-medium text-gray-800">{skill.name}</p>
                <div className={`inline-block text-xs text-gray-500 px-1  rounded-md mb-1 `}>
                  {skill.level}
                </div>
                <div className="w-full h-5 bg-gray-200 rounded-full relative overflow-hidden">
                  <div
                    className={`h-full rounded-full ${skill.color}`}
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                  <div className="absolute right-2 top-0 text-sm h-full flex items-center font-semibold text-white">
                    {skill.percentage}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center w-full lg:w-64 h-64 relative mx-auto">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" stroke="#e5e7eb" strokeWidth="10" fill="none" />
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="#0ea5e9"
              strokeWidth="10"
              fill="none"
              strokeDasharray={`${90 * 2.83}, 999`}
              strokeLinecap="round"
              transform="rotate(-90 50 50)"
            />
          </svg>
          <div className="absolute text-center">
            <p className="text-sm text-gray-500">CEFR</p>
            <p className="text-2xl font-semibold">High C1</p>
            <p className="text-sm text-gray-500">Level</p>
          </div>
        </div>
      </div>
    </section>
  );
}
