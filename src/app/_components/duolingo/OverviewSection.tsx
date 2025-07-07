"use client";

import { useRef } from "react";
 
export default function ScrollTabs() {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full">
      {/* Overview Section */}
      <div id="overview" className="px-6 md:px-20 lg:px-28 py-10 bg-white text-gray-900">
        <h1 className="text-5xl font-semibold">
          DUOLINGO English Test{' '}
          <span className="relative inline-block font-bold">
            <span className="z-10 relative">Overview</span>
            <span className="absolute bottom-0 left-0 w-full h-1 border-b-[6px] border-red-500 z-0 rounded-sm"></span>
          </span>
        </h1>
        <p className="text-lg text-gray-800 mt-2">
          The Duolingo English Test is a computer-based proficiency test that evaluates a test taker's Listening, Reading, Writing, and Speaking skills. Using computer adaptive technology, the Duolingo exam adjusts the difficulty of questions for each individual.
        </p>
        <p className="text-lg text-gray-800 mt-1">
          Additionally, the test includes a video interview and a writing sample, which, while not graded, are submitted to the institution along with your proficiency score when you report your results.
        </p>
      </div>

      {/* Ways to Take Section */}
      <div id="ways-to-take" className="px-6 md:px-20 lg:px-28 py-10 bg-white text-gray-900">
        <h2 className="text-3xl font-bold">Ways to take the Duolingo English Test</h2>
        <p className="text-base text-gray-800 mt-2">
          The Duolingo English Test is entirely computer-based. After purchasing the test, you can take it from the comfort of your home within 21 days of purchase.
        </p>
      </div>

      {/* Pattern Section */}
      <div id="pattern" className="px-6 md:px-20 lg:px-28 py-10 bg-white text-gray-900">
        <h2 className="text-5xl font-semibold">
          Duolingo{' '}
          <span className="relative inline-block font-bold">
            <span className="relative z-10">Pattern</span>
            <span className="absolute bottom-0 left-0 w-full h-1 border-b-[6px] border-red-500 z-0 rounded-sm"></span>
          </span>
        </h2>
        <h3 className="text-2xl font-bold text-[#1f3c88] mt-6">
          The Duolingo Test Format is as follows:
        </h3>

        <div className="overflow-x-auto mt-6">
          <div className="overflow-hidden rounded-xl shadow-md border border-gray-200">
            <table className="min-w-full text-center border-collapse">
              <thead>
                <tr className="bg-[#1f3c88] text-white text-lg">
                  <th className="py-4 px-6">Sections</th>
                  <th className="py-4 px-6">Details</th>
                  <th className="py-4 px-6">Time</th>
                </tr>
              </thead>
              <tbody className="text-gray-800 text-base">
                <tr className="border-t">
                  <td className="py-6 px-4 font-semibold">Quick Setup</td>
                  <td className="py-6 px-4">
                    Introduction of the exam, along with the rules and regulations.
                  </td>
                  <td className="py-6 px-4 font-medium">5 minutes</td>
                </tr>
                <tr className="border-t">
                  <td className="py-6 px-4 font-semibold">Adaptive Test</td>
                  <td className="py-6 px-4">
                    Includes a variety of questions related to all the 4 modules – Reading, Listening, Writing and Speaking. The questions appear randomly.
                  </td>
                  <td className="py-6 px-4 font-medium">45 minutes</td>
                </tr>
                <tr className="border-t">
                  <td className="py-6 px-4 font-semibold">Video Interview</td>
                  <td className="py-6 px-4">
                    This part is not assessed, but the reporting institution receives it along with your scores.
                  </td>
                  <td className="py-6 px-4 font-medium">10 minutes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Syllabus Section */}
      <div id="syllabus" className="px-6 md:px-20 lg:px-28 py-10 bg-white text-gray-900">
        <h2 className="text-4xl font-bold">
          Duolingo <span className="underline decoration-red-500 underline-offset-4">Syllabus</span>
        </h2>
        <h3 className="mt-10 text-2xl font-bold text-gray-900">TYPE OF QUESTIONS:</h3>
        <ul className="list-disc pl-6 text-gray-700 text-base space-y-4 mt-6">
          <li><strong>Read and Complete:</strong> Fill in missing letters in a paragraph.</li>
          <li><strong>Read and Select:</strong> Identify real English words from a list.</li>
          <li><strong>Write About the Photo:</strong> Describe an image in 1–3 sentences.</li>
          <li><strong>Speak About the Photo:</strong> Speak about an image for 1 minute.</li>
          <li><strong>Listen and Type:</strong> Type the sentence you hear.</li>
          <li><strong>Read Aloud:</strong> Read the given sentence aloud.</li>
          <li><strong>Read, Then Speak:</strong> Speak for 1-2 minutes based on a written or spoken prompt.</li>
          <li><strong>Interactive Writing:</strong> Write a response based on prompts in two steps (5 mins + 3 mins).</li>
          <li><strong>Listen, Then Speak:</strong> Listen to a prompt, then respond verbally.</li>
          <li><strong>Complete the Sentences:</strong> Choose the correct word to complete blanks in a passage.</li>
          <li><strong>Complete the Passage:</strong> Select the best sentence to fill a gap between two parts of a passage.</li>
          <li><strong>Highlight the Answer:</strong> Find and highlight the answer in a passage.</li>
          <li><strong>Identify the Idea:</strong> Choose the main idea expressed in the passage.</li>
          <li><strong>Title the Passage:</strong> Choose the best title for a passage.</li>
          <li><strong>Listen and Respond:</strong> Choose the best response to start a conversation based on a scenario.</li>
          <li><strong>Summarize the Conversation:</strong> Write a concise summary of a conversation in 75 seconds.</li>
        </ul>
      </div>

      {/* Scoring Section */}
      <div id="scores" className="px-6 md:px-20 lg:px-28 py-10 bg-white text-gray-900">
        <h2 className="text-4xl font-bold mb-4">
          Duolingo <span className="underline decoration-red-500 decoration-4">Scoring</span>
        </h2>
        <p className="text-lg leading-relaxed">
          Duolingo English Test is graded out of 160 in 5-point increments. Generally, 115 is considered to be a good score. Test results include an overall score as well as the scores of Literacy, Conversation, Comprehension, and Production sections. The result is available within 2 days of test completion.
        </p>
      </div>

      {/* Dates Section */}
      <div id="dates" className="px-6 md:px-20 lg:px-28 py-10 bg-white text-gray-900">
        <h2 className="text-4xl font-bold mb-4">
          Duolingo <span className="underline decoration-red-500 decoration-4">Dates</span>
        </h2>
        <p className="text-lg leading-relaxed">
          Once the student registers they can select the required test dates.
        </p>
      </div>

      {/* Training Section */}
      <div id="training" className="px-6 md:px-20 lg:px-28 py-10 bg-white text-gray-900">
        <h2 className="text-4xl font-bold mb-6">
          Duolingo <span className="underline decoration-red-500 decoration-4">Training</span>
        </h2>
        <p className="text-lg font-semibold mb-4">
          Salient Features of Duolingo Coaching at Edwise
        </p>
        <ul className="list-disc pl-6 text-lg leading-8 text-gray-700 space-y-2">
          <li>30 hours of comprehensive training for the test.</li>
          <li>Training in all four sections of the test: Literacy, Comprehension, Conversation and Production Skills.</li>
          <li>Initial assessment and question types in academic context.</li>
          <li>Detailed explanation of each question type with practice.</li>
          <li>Mock test every 8th day.</li>
          <li>Online and offline sessions available.</li>
        </ul>
      </div>

      {/* Miscellaneous Section */}
      <div id="misc" className="px-6 md:px-20 lg:px-28 py-10 bg-white text-gray-900">
        <h2 className="text-4xl font-bold mb-6">
          Miscellaneous <span className="underline decoration-red-500 decoration-4">Details</span>
        </h2>
        <ul className="list-disc pl-6 text-lg leading-8 text-gray-700 space-y-2">
          <li>Score Validity: 2 years</li>
          <li>Registration Mode: Online</li>
          <li>Official Website: www.englishtest.duolingo.com</li>
          <li>Mode of Payment: Debit Card/ Credit Card</li>
          <li>Test Administration Frequency: Anytime</li>
          <li>Test Repetition Policy: Anytime</li>
          <li>Nature of Test: Computer Based Test</li>
          <li>Score Reporting: Unlimited free reporting</li>
        </ul>
        <h3 className="text-2xl font-bold text-[#1E3A8A] mt-8 mb-2">Duolingo Exam Fees:</h3>
        <ul className="list-disc pl-6 text-lg leading-8 text-gray-700 space-y-2">
          <li>Test Fee: $65</li>
          <li>Extra Score Reporting Fee: No fee</li>
        </ul>
      </div>
      
    </div>
    
  );
}
