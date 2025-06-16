"use client";

import React, { useState } from "react";

const curriculum = [
  { week: "Week 1", topics: ["Introduction to English", "Basic Grammar", "Common Vocabulary"] },
  { week: "Week 2", topics: ["Present Tenses", "Reading & Listening Practice"] },
  { week: "Week 3", topics: ["Past & Future Tenses", "Constructing Questions"] },
  { week: "Week 4", topics: ["Adjectives & Adverbs", "Describing People/Places"] },
  { week: "Week 5", topics: ["Articles & Prepositions", "Speaking Role Plays"] },
  { week: "Week 6", topics: ["Paragraph Writing", "Email & Letter Practice"] },
  { week: "Week 7", topics: ["Speaking on Topics", "Using Connectors"] },
  { week: "Week 8", topics: ["Idioms & Phrasal Verbs", "Group Discussions"] },
  { week: "Week 9", topics: ["Newspaper Reading", "Debates & Opinions"] },
  { week: "Week 10", topics: ["Conditionals & Modals", "Podcast Listening"] },
  { week: "Week 11", topics: ["Interview Skills", "Presentation Skills"] },
  { week: "Week 12", topics: ["Formal vs Informal", "Mock Interviews"] },
  { week: "Week 13", topics: ["Personality Development", "Review & Practice"] },
  { week: "Week 14", topics: ["Final Assessment", "Course Wrap-up"] },
];

const CurriculumSection = () => {
  const [activeWeek, setActiveWeek] = useState<number | null>(null);

  const toggleWeek = (index: number) => {
    setActiveWeek(index === activeWeek ? null : index);
  };

  return (
    <section className="py-16 px-4 md:px-20 bg-white">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-[#284c87] mb-14 relative group">
        Curriculum to Be Covered
        <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-[2px] w-0 bg-[#284c87] group-hover:w-1/2 transition-all duration-500 rounded"></span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/*Sidebar */}
        <div className="col-span-1 hidden md:flex flex-col items-start border-r pr-4 border-gray-300">
          <div className="bg-[#284c87] text-white rounded-xl p-6 w-full shadow-md transition-all duration-300">
            {activeWeek !== null && curriculum[activeWeek] ? (
              <>
                <p className="text-xl mb-2">📘 Current Week</p>
                <h3 className="text-2xl font-semibold">
                  {curriculum[activeWeek].week}
                </h3>
                <p className="text-sm mt-2 text-blue-100">
                  Click to view another week’s curriculum.
                </p>
              </>
            ) : (
              <>
                <p className="text-xl mb-2">📚 Curriculum</p>
                <p className="text-sm text-blue-100">
                  Select a week to view its content.
                </p>
              </>
            )}
          </div>
        </div>

        {/* Main  Section */}
        <div className="col-span-3 space-y-4">
          {curriculum.map((weekData, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-md shadow-sm"
            >
              <button
                className="w-full flex justify-between items-center px-6 py-4 text-left font-medium text-lg text-[#284c87] hover:bg-gray-100 transition"
                onClick={() => toggleWeek(index)}
              >
                {weekData.week}
                <span className="text-xl">
                  {activeWeek === index ? "−" : "+"}
                </span>
              </button>

              <div
                className={`overflow-hidden px-6 transition-all duration-300 ease-in-out ${
                  activeWeek === index ? "max-h-96 py-4" : "max-h-0"
                }`}
              >
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
                  {weekData.topics.map((topic, topicIndex) => (
                    <li key={topicIndex}>{topic}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
