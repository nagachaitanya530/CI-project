"use client";

import React, { useState } from "react";

const curriculum = [
  {
    week: "Week 1",
    topics: [
      "Day 1: Interaction & Overview of Foundation English",
      "• Introduction Overview",
      "• Language Evaluation",
      "• Overview of Course",
      "Day 2: Parts of Speech",
      "• Overview of Parts of Speech",
      "• Examples",
      "• Worksheet Practice",
      "Day 3: Articles",
      "• Definite and Indefinite Articles",
      "• Examples",
      "• Worksheet Practices",
      "Day 4: Sub/Verb/Agreement",
      "• Sentence Formation",
      "• Imperative Sentences",
      "• Practice through Examples",
      "Day 5: Body Language Module",
      "• Overview of Non-verbal Communication",
      "• Dress Sense & Other Etiquettes",
    ],
  },
  {
    week: "Week 2",
    topics: [
      "Day 6: Scenario Practice",
      "• Where & how to use",
      "• Assessment through Practice",

      "Day 7: Elucidation of Verbs",
      "• To be Verb Forms",
      "• Gerund and Participles",
      "• Practice through Examples",

      "Day 8: Modals - I",
      "• Use of Can & Could",
      "• Difference between Must, May & Might",
      "• Worksheet",

      "Day 9: Modals - II",
      "• Difference between Should & Ought to",
      "• Use of Will & Shall",
      "• Use of Modals with Examples",

      "Day 10: Modals - III",
      "• Explanation of Modals of Past",
      "• Use of Modals with Examples",
      "• Scenario based practice",
    ],
  },
  { week: "Week 3", topics: [ "Day 11: Briefing Phrasal Verbs",
    "• Use in Different Sentences",
    "• Practice through Realistic Examples",

    "Day 12: Use of “used to” and “would”",
    "• Elaboration & Examples",
    "• Worksheet",

    "Day 13: Degrees of Comparison of Adjectives",
    "• Explanation & Examples",
    "• Assessment",

    "Day 14: Prepositions - I",
    "• Preposition of Time",
    "• Preposition of Place",
    "• Worksheet Practice",

    "Day 15: Prepositions - II",
    "• Preposition of Direction/Movement",
    "• Worksheet Practice",] },
  { week: "Week 4", topics: [  "Day 16: Voice & Accent Module",
    "• Understanding Pitch & Pace",
    "• Explaining Intonation",
    "• Voice Modulation",
    "• Pronunciations",

    "Day 17: Articulations",
    "• Warm-ups for Articulation",
    "• Discussion on MTI (Mother Tongue Influence)",

    "Day 18: Tongue Twister Practices",
    "• Consonant & Vowel Sounds",
    "• Different Sounds of Tongue Twisters",

    "Day 19: Syllables",
    "• Voiced & Unvoiced Sounds",
    "• Describing Syllables",
    "• Different Kinds of Syllables",
    "• How Do We Count Syllables",
    "• Pronunciations Practice (Extra Session, if Required)",

    "Day 20: Asking Questions",
    "• Basic Question Words (WH-family)",
    "• Main Types of Questions",
    "• Open-ended",
    "• Close-ended"] },
  { week: "Week 5", topics: [  "Day 21: Conjunction - I",
    "• Overview of Conjunctions",
    "• Purpose to Use",
    "• Elucidation of Independent & Dependent Clauses",
    "• Types of Conjunctions",
    "• Usage Through Examples",

    "Day 22: Conjunction - II",
    "• Explanations of Coordinating & Subordinating Conjunctions",
    "• Purposes",
    "• Practice through Examples",

    "Day 23: Conjunction - III",
    "• Explanations of Correlative Conjunctions",
    "• Examples",
    "• Worksheet Practice",

    "Day 24: Elaboration of Adverbs - I",
    "• Define with Example",
    "• Types of Adverbs",
    "• Use in Sentences",
    "• Worksheet Practice",

    "Day 25: Adverbs - II",
    "• Degree of Comparison",
    "• Examples",
    "• Worksheet Practice"] },
  { week: "Week 6", topics: ["Day 26: Explanation of Tense",
    "• Overview of Indefinite Tense",
    "• Formation of Indefinite Tense in:",
    "  – Present (Examples with different scenarios)",
    "  – Past (Examples with different scenarios)",
    "  – Future (Examples with different scenarios)",

    "Day 27: Practice Day",
    "• Scenarios to Conversate",
    "• Worksheet Practice",
    "• Feedback",

    "Day 28: Overview of Continuous Tense",
    "• Formation of Continuous Tense in:",
    "  – Present (Examples with different scenarios)",
    "  – Past (Examples with different scenarios)",
    "  – Future (Examples with different scenarios)",

    "Day 29: Practice Day",
    "• Scenarios to Converse",
    "• Worksheet Practice",
    "• Feedback",

    "Day 30: Overview of Perfect Tense",
    "• Formation of Perfect Tense in:",
    "  – Present (Examples with different scenarios)",
    "  – Past (Examples with different scenarios)",
    "  – Future (Examples with different scenarios)"] },
  { week: "Week 7", topics: ["Day 31: Practice Day",
    "• Scenarios to Conversate",
    "• Worksheet Practice",
    "• Feedback",

    "Day 32: Overview of Perfect Continuous Tense",
    "• Formation of Perfect Continuous Tense in:",
    "  – Present (Examples with different scenarios)",
    "  – Past (Examples with different scenarios)",
    "  – Future (Examples with different scenarios)",

    "Day 33: Practice Day",
    "• Scenarios to Converse",
    "• Worksheet Practice",
    "• Feedback",

    "Day 34: Picture Narration",
    "• Picture to Story",
    "• Practice",

    "Day 35: Dining Etiquette",
    "• Elaborating Table Manners",
    "• Meal Etiquette",
    "• Order Manners"] },
  { week: "Week 8", topics: [  "Day 36: Conditional Sentences",
    "• Overview",
    "• Types of Conditional Sentences",
    "• Use of Types with Examples",
    "• Worksheet Practice",

    "Day 37: Assessment through Practice",
    "• Verbal",
    "• Written",
    "• Provide Feedback",

    "Day 38: Business Etiquette Module",
    "• Workplace Etiquette",
    "• Cubicle Etiquette Practices",

    "Day 39: Dos & Don’ts in Business",
    "• Social Dealing",
    "• Business & Client Meeting Etiquette",

    "Day 40: Group Discussion",
    "• Tips to Be Followed",
    "• Scenario Based Practice"] },
  { week: "Week 9", topics: [ "Day 41: Elucidation of Passive Voice - I",
    "• Overview of Present Tense",
    "• Example Practices",

    "Day 42: Elucidation of Passive Voice - II",
    "• Overview of Past Tense",
    "• Example Practices",

    "Day 43: Elucidation of Passive Voice - III",
    "• Overview of Future Tense",
    "• Example Practices",

    "Day 44: Modal Verbs Passive Voice - I",
    "• Overview of Can & Could",
    "• Overview of May & Might",
    "• Example Practices",

    "Day 45: Modal Verbs Passive Voice - II",
    "• Use of Should Passive Voice",
    "• Use of “is going to” Passive Voice",
    "• Example Practices"] },
  { week: "Week 10", topics: [ "Day 46: Assessment through Practices",

    "Day 47: Dialogue Delivery",
    "• Method of Delivery",
    "• Scenario Based Practices",

    "Day 48: Role Plays",
    "• Scenario Based Practice",

    "Day 49: Article Reading",
    "• Main Ideas",
    "• Supporting Ideas",
    "• Brainstorming Activity",

    "Day 50: Discussion on Question Tags",
    "• Question Tags",
    "• Worksheet Practice"] },
  { week: "Week 11", topics: [ "Day 51: Explanation of Causative Verb - I",
    "• When to use",
    "• Rules to use Get",
    "• Practice through Examples",
    "• Worksheet",

    "Day 52: Explanation of Causative Verb - II",
    "• When to use",
    "• Rules to use Have",
    "• Practice through Examples",
    "• Worksheet",

    "Day 53: Explanation of Causative Verb - III",
    "• When to use",
    "• Rules to use Make",
    "• Practice through Examples",
    "• Worksheet",

    "Day 54: Explanation of Causative Verb - IV",
    "• When to use",
    "• Rules to use Let",
    "• Practice through Examples",
    "• Worksheet",

    "Day 55: Business Writing Skills",
    "• Essentials of effective Communication",
    "• Email Drafting",
    "• Structure to Form Business Reports",
    "• Briefing Business Memo & Business Letters",
    "• Proofread"] },
  { week: "Week 12", topics: ["Day 56: Written Assessment Based on:",
    "• Email Drafting",
    "• Business Reports",
    "• Business Memo",
    "• Business Letter",

    "Day 57: Debates Practices",
    "• Tips for Debates",
    "• Debates in 2 candidates",
    "• Debates in Teams (Groups)",

    "Day 58: Complex and Compound Sentences",
    "• Formation of Sentences",
    "• Practice with Scenarios",

    "Day 59: Assessment Evaluation",
    "• Verbal Practice",
    "• Written Practice",

    "Day 60: Professional Introduction",
    "• Tips for Introduction",
    "• Scenario Practices"] },
  { week: "Week 13", topics: [ "Day 61: Telephonic Etiquette Module",
    "• Manners of using telephone communications",
    "• Enhance Listening skills",
    "• Mock calls",
    "• Assessment & Evaluation",
    "• Scenarios to attend call",

    "Day 62: Interview Preparation",
    "• Types of Interviews",
    "• Tips to Prepare",
    "• Professional Interview Etiquettes",
    "• Resume Preparation",
    "• Commonly Asked Interview Questions",

    "Day 63: Assessment through Practices",
    "• Mock Interviews",

    "Day 64: Presentation Skills",
    "• What is Presentation Skill?",
    "• Essentials of Presentation skills",
    "• Effective presentation skills",
    "• Delivering Presentation before client",
    "• Develop strategies for overcoming fear.",
    "• Tips to help you ace your presentation",

    "Day 65: Presentation Skill Evaluation",
    "• Scenario based practice",
    "• Feedback"] },
  { week: "Week 14", topics: [  "Day 66: Wind-Up Session",
    "• Conversational Activities",
    "• Written & Verbal Assessment",
    "• Final Grading for Certificate"] },
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
        <div className="col-span-1 hidden md:flex flex-col items-start border-r pr-4 border-gray-300">
          <div className="bg-[#284c87] text-white rounded-xl p-6 w-full shadow-md transition-all duration-300">
            {activeWeek !== null && curriculum[activeWeek] ? (
              <>
                <p className="text-xl mb-2">📘 Current Week</p>
                <h3 className="text-2xl font-semibold">{curriculum[activeWeek].week}</h3>
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
<<<<<<< HEAD

=======
>>>>>>> changes_ci
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
                className={`overflow-hidden px-6 transition-all duration-500 ease-in-out ${
                  activeWeek === index ? "max-h-[2000px] py-4" : "max-h-0"
                }`}
              >
                <ul className="list-inside text-sm text-gray-700 space-y-2">
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
