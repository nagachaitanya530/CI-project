'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Curriculum() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const curriculumData = [
    {
      week: "Week 1",
      description: (
        <div>
          <p>Day 1: Interaction & Overview of Business English</p>
          <ul className="list-disc pl-10 my-5">
            <li>Introduction Overview</li>
            <li>Language Evaluation</li>
            <li>Overview of Course</li>
          </ul>
          <p>Day 2: Understanding of Sentence Construction & Formation</p>
          <p>Learn the fundamentals of sentence structure used in business communications.</p>
          <p>Day 3: Rectification of Grammar</p>
          <ul className="list-disc pl-10 my-5">
            <li>Overview of Subject-Verb Agreement</li>
            <li>Overview of a Variety of Sentences</li>
            <li>Overview of Imperative Sentences</li>
          </ul>
          <p>Day 4: Discussion on Verb Forms</p>
          <ul className="list-disc pl-10 my-5">
            <li>To Be Forms</li>
            <li>Gerund Forms</li>
            <li>Past Participle</li>
          </ul>
          <p>Day 5: Brainstorming Activity</p>
          <ul className="list-disc pl-10 my-5">
            <li>Video Observation</li>
            <li>Picture Narration</li>
            <li>Content Enhancement</li>
          </ul>
        </div>
      ),
    },
    {
      week: "Week 2",
      description: (
        <div>
          <p>Day 6: Preposition Errors</p>
          <ul className="list-disc pl-10 my-5">
            <li>Phrasal Verbs</li>
            <li>Difference Between Time & Place Prepositions</li>
          </ul>
          <p>Day 7: Conditional Sentences</p>
          <ul className="list-disc pl-10 my-5">
            <li>Overview</li>
            <li>Types of Conditional Sentences</li>
            <li>Use of Types with Examples</li>
            <li>Worksheet Practice</li>
          </ul>
          <p>Day 8: Evaluation on Grammatical Errors Correction</p>
          <p>Day 9: Use of Phrasal Verbs</p>
          <ul className="list-disc pl-10 my-5">
            <li>Introduction</li>
            <li>Practice Some Phrasal Verbs with Examples</li>
          </ul>
          <p>Day 10: Brainstorming Activity</p>
        </div>
      ),
    },
    {
      week: "Week 3",
      description: (
        <div>
          <p>Day 11: Ellipsis (Exceptional Sentences)</p>
          <ul className="list-disc pl-10 my-5">
            <li>Overview</li>
            <li>Types of Ellipsis</li>
            <li>Ellipsis in Sentences</li>
          </ul>
          <p>Day 12: Assessment through Practice</p>
          <ul className="list-disc pl-10 my-5">
            <li>Verbal Practice</li>
            <li>Written Practice</li>
          </ul>
          <p>Day 13: Cleft Sentences</p>
          <ul className="list-disc pl-10 my-5">
            <li>What is a Cleft Sentence?</li>
            <li>Describing the Main Idea of Structures to Make Cleft Sentences</li>
          </ul>
          <p>Day 14: Negative Adverbials</p>
          <ul className="list-disc pl-10 my-5">
            <li>Inversion with Negative Adverbials</li>
            <li>Use in Sentences</li>
          </ul>
          <p>Day 15: Brainstorming Activity</p>
          <ul className="list-disc pl-10 my-5">
            <li>Exercises on Cleft Sentences and Negative Adverbials</li>
          </ul>
        </div>
      ),
    },
    {
      week: "Week 4",
      description: (
        <div>
          <p>Day 16: Assessment through Practice</p>
          <p>Evaluation of skills through exercises and practice sessions.</p>
          <p>Day 17: British and American English</p>
          <ul className="list-disc pl-10 my-5">
            <li>Overview of Sounds Based on American & British English</li>
            <li>Overview of Spelling Based on American & British English</li>
          </ul>
          <p>Day 18: British and American English (Continued)</p>
          <ul className="list-disc pl-10 my-5">
            <li>Overview of Pronunciation Based on American & British English</li>
            <li>Overview of Word Differences Based on American & British English</li>
          </ul>
          <p>Day 19: Verbal & Written Assessment</p>
          <p>Complete assessments on both verbal and written English skills.</p>
          <p>Day 20: Business Etiquette Module</p>
          <ul className="list-disc pl-10 my-5">
            <li>Workplace Etiquette</li>
            <li>Cubicle Etiquette Practices</li>
          </ul>
        </div>
      ),
    },
    {
      week: "Week 5",
      description: (
        <div>
          <p>Day 21: Dining Etiquette</p>
          <ul className="list-disc pl-10 my-5">
            <li>Elaborating Table Manners</li>
            <li>Meal Etiquette</li>
            <li>Order Manners</li>
          </ul>
          <p>Day 22: Dos & Don’ts in Business</p>
          <ul className="list-disc pl-10 my-5">
            <li>Business Etiquette Essentials</li>
          </ul>
          <p>Day 23: Business & Client Meeting Etiquette</p>
          <ul className="list-disc pl-10 my-5">
            <li>Professional Behavior in Meetings</li>
            <li>Building Strong Client Relationships</li>
          </ul>
          <p>Day 24: Effective Communication Etiquette</p>
          <ul className="list-disc pl-10 my-5">
            <li>Communication Etiquette at Workplace</li>
            <li>Language Etiquette During Official Meetings</li>
          </ul>
          <p>Day 25: Etiquette Assessment</p>
          <ul className="list-disc pl-10 my-5">
            <li>Scenario-Based Practice</li>
          </ul>
        </div>
      ),
    },
    {
      week: "Week 6",
      description: (
        <div>
          <p>Day 26: Body Language Module</p>
          <ul className="list-disc pl-10 my-5">
            <li>Overview of Non-Verbal Communication</li>
            <li>Dress Sense & Other Etiquettes</li>
          </ul>
          <p>Day 27: Scenario Practice</p>
          <ul className="list-disc pl-10 my-5">
            <li>Where & How to Use Body Language</li>
            <li>Assessment through Practice</li>
          </ul>
          <p>Day 28: Voice & Accent Module</p>
          <ul className="list-disc pl-10 my-5">
            <li>Understanding Pitch & Pace</li>
            <li>Explaining Intonation</li>
            <li>Voice Modulation</li>
            <li>Pronunciations</li>
          </ul>
          <p>Day 29: Articulations</p>
          <ul className="list-disc pl-10 my-5">
            <li>Warm-Ups for Articulation</li>
            <li>Discussion on MTI (Mother Tongue Influence)</li>
          </ul>
          <p>Day 30: Brainstorming Activity</p>
          <ul className="list-disc pl-10 my-5">
            <li>Creative Articulation Exercises</li>
          </ul>
        </div>
      ),
    },
    {
      week: "Week 7",
      description: (
        <div>
          <p>Day 31: Tongue Twister Practices</p>
          <ul className="list-disc pl-10 my-5">
            <li>Consonant & Vowel Sounds</li>
            <li>Different Sounds of Tongue Twisters</li>
          </ul>
          <p>Day 32: Syllables</p>
          <ul className="list-disc pl-10 my-5">
            <li>Voiced & Unvoiced Sounds</li>
            <li>Describing Syllables</li>
            <li>Different Kinds of Syllables</li>
            <li>How Do We Count Syllables?</li>
          </ul>
          <p>Day 33: Syllabic/Word Stress</p>
          <p>Learn stress patterns in syllables and words.</p>
          <p>Day 34: Evaluation</p>
          <ul className="list-disc pl-10 my-5">
            <li>Assessment Based on Pronunciations</li>
          </ul>
          <p>Day 35: Brainstorming Activity</p>
          <ul className="list-disc pl-10 my-5">
            <li>Creative Stress and Pronunciation Exercises</li>
          </ul>
        </div>
      ),
    },
    {
      week: "Week 8",
      description: (
        <div>
          <p>Day 36: Business Presentation Skills</p>
          <ul className="list-disc pl-10 my-5">
            <li>What is Presentation Skill?</li>
            <li>Essentials of Presentation Skills</li>
            <li>Effective Presentation Skills</li>
          </ul>
          <p>Day 37: Delivering Presentation before Client</p>
          <ul className="list-disc pl-10 my-5">
            <li>Work on Self-Confidence</li>
            <li>Develop Strategies for Overcoming Fear</li>
            <li>Tips to Help You Ace Your Presentation</li>
          </ul>
          <p>Day 38: Presentation Skill Evaluation</p>
          <ul className="list-disc pl-10 my-5">
            <li>Scenario-Based Practice</li>
            <li>Feedback</li>
          </ul>
          <p>Day 39: Soft Skills</p>
          <ul className="list-disc pl-10 my-5">
            <li>Introduction to Soft Skills</li>
            <li>Difference Between Soft Skills and Hard Skills</li>
          </ul>
          <p>Day 40: Brainstorming Activity</p>
          <ul className="list-disc pl-10 my-5">
            <li>Soft Skill Application Exercises</li>
          </ul>
        </div>
      ),
    },
    {
      week: "Week 9",
      description: (
        <div>
          <p>Day 41: Essentials of Soft Skills</p>
          <ul className="list-disc pl-10 my-5">
            <li>How to Develop Language Through Activity</li>
            <li>Outcome of Soft Skills</li>
          </ul>
          <p>Day 42: Feedback on Activity</p>
          <ul className="list-disc pl-10 my-5">
            <li>Self-Assessment</li>
            <li>Integrated Feedback</li>
          </ul>
          <p>Day 43: Writing Skills</p>
          <ul className="list-disc pl-10 my-5">
            <li>Essentials of Effective Communication</li>
            <li>Email Drafting</li>
            <li>Different Email Formats to Analyze</li>
          </ul>
          <p>Day 44: Business Reports</p>
          <ul className="list-disc pl-10 my-5">
            <li>Structure of Business Reports</li>
            <li>Tips for Writing Effective Business Reports</li>
            <li>Proofreading</li>
          </ul>
          <p>Day 45: Briefing Business Memo</p>
          <ul className="list-disc pl-10 my-5">
            <li>How to Write an Effective Business Memo</li>
            <li>Parts of a Business Memo</li>
            <li>Tips for Writing an Effective Business Memo</li>
          </ul>
        </div>
      ),
    },
    {
      week: "Week 10",
      description: (
        <div>
          <p>Day 46: Business Letters</p>
          <ul className="list-disc pl-10 my-5">
            <li>Types of Business Letters</li>
            <li>Parts of a Business Letter</li>
            <li>Proofreading</li>
          </ul>
          <p>Day 47: Written Assessment Based on:</p>
          <ul className="list-disc pl-10 my-5">
            <li>Email Drafting</li>
            <li>Business Reports</li>
            <li>Business Memos</li>
            <li>Business Letters</li>
          </ul>
          <p>Day 48: Telephonic Etiquette Module</p>
          <ul className="list-disc pl-10 my-5">
            <li>Manners of Using Telephone Communications</li>
            <li>Enhance Listening Skills</li>
            <li>Importance of Telephone Etiquette</li>
          </ul>
          <p>Day 49: Assessment & Evaluation</p>
          <ul className="list-disc pl-10 my-5">
            <li>Scenarios to Attend Call</li>
            <li>Mock Calls</li>
            <li>Feedback</li>
          </ul>
          <p>Day 50: Brainstorming Activity</p>
          <ul className="list-disc pl-10 my-5">
            <li>Scenario-Based Communication Exercises</li>
          </ul>
        </div>
      ),
    }, {
      week: "Week 11",
      description: (
        <div>
          <p>Day 51: Language Specification Session</p>
          <ul className="list-disc pl-10 my-5">
            <li>Set Clear Objectives (specific skill)</li>
            <li>Pre-Watching Preparation</li>
            <li>Active Watching</li>
            <li>Post Watching</li>
            <li>Feedback</li>
          </ul>
          <p>Day 52: Self-Assessment through Practice</p>
          <ul className="list-disc pl-10 my-5">
            <li>Reflect and Apply</li>
          </ul>
          <p>Day 53: Analytical Skills</p>
          <ul className="list-disc pl-10 my-5">
            <li>What Are Analytical Skills?</li>
            <li>How to Develop Your Analytical Skills</li>
          </ul>
          <p>Day 54: Highlighting Your Analytical Skills</p>
          <ul className="list-disc pl-10 my-5">
            <li>Key Analytical Skills (Critical Thinking, Analysis of Information)</li>
            <li>Tips to Assess Analytical Skills in Interviews</li>
          </ul>
          <p>Day 55: Evaluation of Analytical Skills</p>
          <ul className="list-disc pl-10 my-5">
            <li>Assessment of Skills</li>
          </ul>
        </div>
      ),
    }, {
      week: "Week 12",
      description: (
        <div>
          <p>Day 56: Confidence Boosting Sessions</p>
          <ul className="list-disc pl-10 my-5">
            <li>Activities and Exercises to Build Confidence</li>
          </ul>
          <p>Day 57: Professional Communication Skills</p>
          <ul className="list-disc pl-10 my-5">
            <li>Outcome of Professional Communication Skills</li>
            <li>How to Work on Professional Language</li>
          </ul>
          <p>Day 58: Key Components of Professional Communication Skills</p>
          <ul className="list-disc pl-10 my-5">
            <li>Listening Skills</li>
            <li>Verbal Communication</li>
            <li>Nonverbal Communication</li>
            <li>Cultural Awareness</li>
          </ul>
          <p>Day 59: Language Assessment</p>
          <ul className="list-disc pl-10 my-5">
            <li>Scenario-based Practice</li>
            <li>Professional Conflict Resolution</li>
            <li>Feedback</li>
          </ul>
          <p>Day 60: Extra Session</p>
          <ul className="list-disc pl-10 my-5">
            <li>Additional Practice</li>
            <li>Feedback and Q&A</li>
          </ul>
        </div>
      ),
    }, {
      week: "Week 13",
      description: (
        <div>
          <p>Day 61: Telephonic Etiquette Module</p>
          <ul className="list-disc pl-10 my-5">
            <li>Manners of Using Telephone Communications</li>
            <li>Enhance Listening Skills</li>
            <li>Mock Calls</li>
            <li>Assessment & Evaluation</li>
            <li>Scenarios to Attend Call</li>
          </ul>
          <p>Day 62: Interview Preparation</p>
          <ul className="list-disc pl-10 my-5">
            <li>Types of Interviews</li>
            <li>Tips to Prepare</li>
            <li>Professional Interview Etiquettes</li>
            <li>Resume Preparation</li>
            <li>Commonly Asked Interview Questions</li>
          </ul>
          <p>Day 63: Assessment through Practices</p>
          <ul className="list-disc pl-10 my-5">
            <li>Mock Interviews</li>
          </ul>
          <p>Day 64: Presentation Skills</p>
          <ul className="list-disc pl-10 my-5">
            <li>What is Presentation Skill?</li>
            <li>Essentials of Presentation Skills</li>
            <li>Effective Presentation Skills</li>
            <li>Delivering Presentation Before Client</li>
            <li>Develop Strategies for Overcoming Fear</li>
            <li>Tips to Help You Ace Your Presentation</li>
          </ul>
          <p>Day 65: Presentation Skill Evaluation</p>
          <ul className="list-disc pl-10 my-5">
            <li>Scenario-based Practice</li>
            <li>Feedback</li>
          </ul>
        </div>
      ),
    }
    , {
      week: "Week 14",
      description: (
        <div>
          <p>Day 61: Extra Session</p>
          <ul className="list-disc pl-10 my-5">
            <li>Additional Practice and Feedback</li>
          </ul>
          <p>Day 62: Extra Session</p>
          <ul className="list-disc pl-10 my-5">
            <li>Additional Practice and Q&A</li>
          </ul>
          <p>Day 63: Assessment- 1</p>
          <ul className="list-disc pl-10 my-5">
            <li>Comprehensive Evaluation</li>
          </ul>
          <p>Day 64: Assessment- 2</p>
          <ul className="list-disc pl-10 my-5">
            <li>Comprehensive Evaluation Continued</li>
          </ul>
          <p>Day 65: Assessment- 3</p>
        </div>
      ),
    }
    ,
    {
      week: "Final Day",
      description: (<p>
        Day 66: Wind Up Sessions with Conversational Activities only along
        with written & verbal assessment to have the grade on the certificate
      </p>
      ),
    },
  ];

  const toggleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="curriculum" className="py-10 px-4 md:py-8 lg:py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-semibold mb-6">Curriculum to be covered</h2>
          <ul className="space-y-2 text-sm">
            {curriculumData.map((item, index) => (
              <li key={index} className="p-4">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleDropdown(index)}
                >
                  <span className="font-medium">{item.week}</span>
                  <svg
                    className={`w-5 h-5 text-gray-600 transform transition-transform duration-200 ${openIndex === index ? "rotate-180" : ""
                      }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                {openIndex === index && (
                  <div className="mt-2 border border-cyan-400 p-5 text-gray-700">{item.description}</div>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className=" mb-5">
            <div className="bg-cyan-700 text-white rounded-xl p-6 w-full shadow-md transition-all duration-300">
              {openIndex !== null && curriculumData[openIndex] ?
                (<>
                  <p className="text-xl mb-2">Current Week</p>
                  <h2 className="text-2xl font-semibold">{curriculumData[openIndex].week}</h2>
                  <p className="text-sm mt-2 text-blue-100">Click to view Curriculum</p>
                </>
                ) : (
                  <>
                    <p className="text-xl mb-2">Curriculum</p>
                    <p className="text-sm text-blue-100">Select week for view its Content</p>
<<<<<<< HEAD
                  </>
                )
              }
            </div>
=======
                    </>
                  )
                  }
                </div>

              </div>
        <div className="m-0 p-0 bg-gray-300 rounded-lg shadow overflow-hidden self-start">
          <div className="relative w-full h-85">
            <Image
              src="/home/professional-women.png"
              alt="Sunday Webinar"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
>>>>>>> changes_ci
          </div>
          <div className="m-0 p-0 bg-gray-300 rounded-lg shadow overflow-hidden self-start">
            <div className="relative w-full h-85">
              <Image
                src="/home/professional-women.png"
                alt="Sunday Webinar"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-5">
              <h2 className="text-2xl font-semibold mb-2">Sunday Webinar</h2>
              <p className="text-base text-gray-600 mb-5">
                Join our open webinar on Sundays to improve your English communication skills and to get in touch with our huge community of students.
              </p>
              <Link
                href="/english-business-course/free-webinar"
                className=" px-5 py-3 text-white border rounded-lg bg-cyan-500">
                Register Free
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}