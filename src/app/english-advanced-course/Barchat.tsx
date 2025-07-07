import React from 'react';

function Chat() {

  interface Skill {
    name: string;
    level: string;
    percentage: number;
    color: string;
  }

  const skills: Skill[] = [
    { name: 'Writing Skills', level: 'CEFR C1 Level Proficiency', percentage: 91, color: 'bg-orange-500' },
    { name: 'Grammar Skills', level: 'CEFR C1 Level Proficiency', percentage: 90, color: 'bg-cyan-500' },
    { name: 'Speaking Skills', level: 'CEFR B2 Level Proficiency', percentage: 89, color: 'bg-rose-500' },
    { name: 'Listening Skills', level: 'CEFR C1 Level Proficiency', percentage: 89, color: 'bg-fuchsia-600' },
    { name: 'Comprehension Skills', level: 'CEFR C1 Level Proficiency', percentage: 89, color: 'bg-blue-900' },
  ];

  return (
    <>
      <div id="Outcomes" className="min-h-96 mb-20 p-4 flex flex-col scroll-mt-35 lg:flex-row items-center justify-center">
        <div className="bg-white shadow-[-4px_9px_10px_rgba(0,0,0,0.2)] scroll-m-35 rounded-bl-3xl p-5 w-full max-w-3xl mb-6 lg:mb-0 lg:mr-4">
          <div className="flex-1">
            <h2 className="text-lg sm:text-xl font-bold mb-1 mt-3">*Expected outcome by the end of the course.</h2>
            <p className="text-sm text-gray-500 mb-6">
              *The results may vary depending upon individual's skill set, and the time put in practice.
              This should not be taken as a guarantee, but a general guideline.
            </p>

            {skills.map((skill, idx) => (
              <div key={idx}>
                <p className="font-medium">{skill.name}</p>

                <div className="w-full h-7 bg-gray-200 mb-3 shadow-2xl rounded">
                  <div
                    className={`h-full flex items-center justify-between px-3 text-white font-semibold rounded ${skill.color}`}
                    style={{ width: `${skill.percentage}%` }}
                  >
                    <span className="text-xs sm:text-sm">{skill.level}</span>
                    <span className="text-xs sm:text-sm">{skill.percentage}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden lg:block w-px h-[30rem] bg-gray-600 mx-4"></div>
        <div className=" w-60 h-60 flex items-center justify-center">
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
    </>
  );
}

export default Chat;
