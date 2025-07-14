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
      <section id="overview" className="px-4 sm:px-6 md:px-10 lg:px-20 py-8 md:py-10 bg-white text-gray-900">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
          DUOLINGO English Test{' '}
          <span className="relative inline-block font-bold">
            <span className=" relative">Overview</span>
            <span className="absolute bottom-0 left-0 w-full h-1 border-b-[4px] sm:border-b-[6px] border-red-500 z-0 rounded-sm"></span>
          </span>
        </h1>
        <p className="text-base sm:text-lg text-gray-800 mt-2">
          The Duolingo English Test is a computer-based proficiency test that evaluates a test taker's Listening, Reading, Writing, and Speaking skills. Using computer adaptive technology, the Duolingo exam adjusts the difficulty of questions for each individual.
        </p>
        <p className="text-base sm:text-lg text-gray-800 mt-3">
          Additionally, the test includes a video interview and a writing sample, which, while not graded, are submitted to the institution along with your proficiency score when you report your results.
        </p>
      </section>

      {/* Ways to Take Section */}
      <section id="ways-to-take" className="px-4 sm:px-6 md:px-10 lg:px-20 py-8 md:py-10 bg-white text-gray-900">
        <h2 className="text-2xl sm:text-3xl font-bold">Ways to take the Duolingo English Test</h2>
        <p className="text-sm sm:text-base text-gray-800 mt-2">
          The Duolingo English Test is entirely computer-based. After purchasing the test, you can take it from the comfort of your home within 21 days of purchase.
        </p>
      </section>

      {/* Pattern Section */}
      <section id="pattern" className="px-4 sm:px-6 md:px-10 lg:px-20 py-8 md:py-10 bg-white text-gray-900">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
          Duolingo{' '}
          <span className="relative inline-block font-bold">
            <span className="relative z-10">Pattern</span>
            <span className="absolute bottom-0 left-0 w-full h-1 border-b-[4px] sm:border-b-[6px] border-red-500 z-0 rounded-sm"></span>
          </span>
        </h2>
        <h3 className="text-xl sm:text-2xl font-bold text-[#1f3c88] mt-4 sm:mt-6">
          The Duolingo Test Format is as follows:
        </h3>

        <div className="mt-4 sm:mt-6">
          <div className="rounded-lg sm:rounded-xl shadow-sm sm:shadow-md border border-gray-200 overflow-hidden">
            <div className="min-w-full grid grid-cols-3 bg-[#1f3c88] text-white text-sm sm:text-base md:text-lg">
              <div className="py-3 sm:py-4 px-2 sm:px-4 md:px-6 font-semibold">Sections</div>
              <div className="py-3 sm:py-4 px-2 sm:px-4 md:px-6 font-semibold">Details</div>
              <div className="py-3 sm:py-4 px-2 sm:px-4 md:px-6 font-semibold">Time</div>
            </div>
            <div className="text-gray-800 text-sm sm:text-base">
              <div className="grid grid-cols-3 border-t">
                <div className="py-4 sm:py-6 px-2 sm:px-4 font-semibold">Quick Setup</div>
                <div className="py-4 sm:py-6 px-2 sm:px-4">
                  Introduction of the exam, along with the rules and regulations.
                </div>
                <div className="py-4 sm:py-6 px-2 sm:px-4 font-medium">5 minutes</div>
              </div>
              <div className="grid grid-cols-3 border-t">
                <div className="py-4 sm:py-6 px-2 sm:px-4 font-semibold">Adaptive Test</div>
                <div className="py-4 sm:py-6 px-2 sm:px-4">
                  Includes a variety of questions related to all the 4 modules – Reading, Listening, Writing and Speaking. The questions appear randomly.
                </div>
                <div className="py-4 sm:py-6 px-2 sm:px-4 font-medium">45 minutes</div>
              </div>
              <div className="grid grid-cols-3 border-t">
                <div className="py-4 sm:py-6 px-2 sm:px-4 font-semibold">Video Interview</div>
                <div className="py-4 sm:py-6 px-2 sm:px-4">
                  This part is not assessed, but the reporting institution receives it along with your scores.
                </div>
                <div className="py-4 sm:py-6 px-2 sm:px-4 font-medium">10 minutes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Syllabus Section */}
      <section id="syllabus" className="px-4 sm:px-6 md:px-10 lg:px-20 py-8 md:py-10 bg-white text-gray-900">
        <h2 className="text-3xl sm:text-4xl font-bold">
          Duolingo <span className="underline decoration-red-500 underline-offset-4">Syllabus</span>
        </h2>
        <h3 className="mt-6 sm:mt-8 text-xl sm:text-2xl font-bold text-gray-900">TYPE OF QUESTIONS:</h3>
        <ul className="list-disc pl-5 sm:pl-6 text-gray-700 text-sm sm:text-base space-y-2 sm:space-y-3 mt-4 sm:mt-6">
          {[
            "Read and Complete: Fill in missing letters in a paragraph.",
            "Read and Select: Identify real English words from a list.",
            "Write About the Photo: Describe an image in 1–3 sentences.",
            "Speak About the Photo: Speak about an image for 1 minute.",
            "Listen and Type: Type the sentence you hear.",
            "Read Aloud: Read the given sentence aloud.",
            "Read, Then Speak: Speak for 1-2 minutes based on a written or spoken prompt.",
            "Interactive Writing: Write a response based on prompts in two steps (5 mins + 3 mins).",
            "Listen, Then Speak: Listen to a prompt, then respond verbally.",
            "Complete the Sentences: Choose the correct word to complete blanks in a passage.",
            "Complete the Passage: Select the best sentence to fill a gap between two parts of a passage.",
            "Highlight the Answer: Find and highlight the answer in a passage.",
            "Identify the Idea: Choose the main idea expressed in the passage.",
            "Title the Passage: Choose the best title for a passage.",
            "Listen and Respond: Choose the best response to start a conversation based on a scenario.",
            "Summarize the Conversation: Write a concise summary of a conversation in 75 seconds."
          ].map((item, index) => (
            <li key={index}>
              <strong>{item.split(':')[0]}:</strong>{item.split(':')[1]}
            </li>
          ))}
        </ul>
      </section>

      {/* Scoring Section */}
      <section id="scores" className="px-4 sm:px-6 md:px-10 lg:px-20 py-8 md:py-10 bg-white text-gray-900">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">
          Duolingo <span className="underline decoration-red-500 decoration-2 sm:decoration-4">Scoring</span>
        </h2>
        <p className="text-base sm:text-lg leading-relaxed">
          Duolingo English Test is graded out of 160 in 5-point increments. Generally, 115 is considered to be a good score. Test results include an overall score as well as the scores of Literacy, Conversation, Comprehension, and Production sections. The result is available within 2 days of test completion.
        </p>
      </section>

      {/* Dates Section */}
      <section id="dates" className="px-4 sm:px-6 md:px-10 lg:px-20 py-8 md:py-10 bg-white text-gray-900">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">
          Duolingo <span className="underline decoration-red-500 decoration-2 sm:decoration-4">Dates</span>
        </h2>
        <p className="text-base sm:text-lg leading-relaxed">
          Once the student registers they can select the required test dates.
        </p>
      </section>

      {/* Training Section */}
      <section id="training" className="px-4 sm:px-6 md:px-10 lg:px-20 py-8 md:py-10 bg-white text-gray-900">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">
          Duolingo <span className="underline decoration-red-500 decoration-2 sm:decoration-4">Training</span>
        </h2>
        <p className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
          Salient Features of Duolingo Coaching at Edwise
        </p>
        <ul className="list-disc pl-5 sm:pl-6 text-sm sm:text-base leading-6 sm:leading-8 text-gray-700 space-y-1 sm:space-y-2">
          {[
            "30 hours of comprehensive training for the test.",
            "Training in all four sections of the test: Literacy, Comprehension, Conversation and Production Skills.",
            "Initial assessment and question types in academic context.",
            "Detailed explanation of each question type with practice.",
            "Mock test every 8th day.",
            "Online and offline sessions available."
          ].map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Miscellaneous Section */}
      <section id="misc" className="px-4 sm:px-6 md:px-10 lg:px-20 py-8 md:py-10 bg-white text-gray-900">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">
          Miscellaneous <span className="underline decoration-red-500 decoration-2 sm:decoration-4">Details</span>
        </h2>
        <ul className="list-disc pl-5 sm:pl-6 text-sm sm:text-base leading-6 sm:leading-8 text-gray-700 space-y-1 sm:space-y-2">
          {[
            "Score Validity: 2 years",
            "Registration Mode: Online",
            "Official Website: www.englishtest.duolingo.com",
            "Mode of Payment: Debit Card/ Credit Card",
            "Test Administration Frequency: Anytime",
            "Test Repetition Policy: Anytime",
            "Nature of Test: Computer Based Test",
            "Score Reporting: Unlimited free reporting"
          ].map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <h3 className="text-xl sm:text-2xl font-bold text-[#1E3A8A] mt-6 sm:mt-8 mb-2">Duolingo Exam Fees:</h3>
        <ul className="list-disc pl-5 sm:pl-6 text-sm sm:text-base leading-6 sm:leading-8 text-gray-700 space-y-1 sm:space-y-2">
          <li>Test Fee: $65</li>
          <li>Extra Score Reporting Fee: No fee</li>
        </ul>
      </section>
    </div>
  );
}