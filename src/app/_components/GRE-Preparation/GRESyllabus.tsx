<<<<<<< HEAD
import React from "react";
const GreSyllabus = () => {
  return (
    <>
      <div className="px-6 py-12 md:px-20 bg-white scroll-mt-30">
        <h1 className="text-4xl font-normal text-black mb-2 ">
          GRE <span className="underline decoration-red-500 decoration-[5px] font-bold">Syllabus</span>
        </h1>
        <div className="overflow-x-auto mt-10">
          <table className="w-full text-left border-collapse rounded-xl overflow-hidden font-normal">
            <thead>
              <tr className="bg-blue-900 text-white text-center h-16">
                <th className="border border-gray-300 py-3 px-4">Sections</th>
                <th className="border border-gray-300 py-3 px-4">Tasks</th>
                <th className="border border-gray-300 py-3 px-4">Types of Questions</th>
              </tr>
            </thead>
            <tbody className="text-gray-800 text-center">
              <tr>
                <td className="border border-gray-300 py-4 px-4">Analytical Writing</td>
                <td className="border border-gray-300 py-4 px-4">1</td>
                <td className="border border-gray-300 py-4 px-4">Analyse an issue</td>
              </tr>
              <tr>
                <td className="border border-gray-300 py-4 px-4">Quantitative Reasoning</td>
                <td className="border border-gray-300 py-4 px-4">2 sets with 20 questions each</td>
                <td className="border border-gray-300 py-4 px-4 text-left">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Quantitative comparison</li>
                    <li>Problem Solving</li>
                    <li>Numeric entry</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 py-4 px-4">Verbal Reasoning</td>
                <td className="border border-gray-300 py-4 px-4">2 sets with 20 questions each</td>
                <td className="border border-gray-300 py-4 px-4 text-left">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Reading comprehension</li>
                    <li>Text completion</li>
                    <li>Sentence equivalence</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="p-6 px-20 bg-white">
        <h2 className="text-2xl font-semibold text-blue-900 mb-4">
          Section Adaptive Test Format
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
          <li>
            The GRE is a section adaptive test meaning it changes the difficulty
            level of the questions as you answer them.
          </li>
          <li>
            The GRE also allows students to skip questions and go back to
            previous questions.
          </li>
        </ul>
      </div>
      <div className="px-6 py-12 md:px-20 bg-white scroll-mt-30">
        <h1 className="text-4xl font-normal text-black mb-2">
          GRE <span className="underline decoration-red-500 decoration-[5px] font-bold">Scoring</span>
        </h1>
        <p className="text-xl mb-6 mt-5">
          A good GRE score is considered to be in between 320 to 340 points. The
          scoring system for the GRE General Test are divided as follows:
        </p>
        <div className="overflow-x-auto mt-10">
          <table className="w-full text-left border-collapse rounded-xl overflow-hidden font-normal">
            <thead>
              <tr className="bg-blue-900 text-white text-center h-16">
                <th className="border border-gray-300 py-3 px-4">Sections</th>
                <th className="border border-gray-300 py-3 px-4">Score Range</th>
                <th className="border border-gray-300 py-3 px-4">Increments</th>
              </tr>
            </thead>
            <tbody className="text-gray-800 text-center">
              <tr>
                <td className="border border-gray-300 py-4 px-4">Analytical Writing</td>
                <td className="border border-gray-300 py-4 px-4">0-6</td>
                <td className="border border-gray-300 py-4 px-4">0.5 point increments</td>
              </tr>
              <tr>
                <td className="border border-gray-300 py-4 px-4">Quantitative Reasoning</td>
                <td className="border border-gray-300 py-4 px-4">130-170</td>
                <td className="border border-gray-300 py-4 px-4">1 point increments</td>
              </tr>
              <tr>
                <td className="border border-gray-300 py-4 px-4">Verbal Reasoning</td>
                <td className="border border-gray-300 py-4 px-4">130-170</td>
                <td className="border border-gray-300 py-4 px-4">1 point increments</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
=======

import React from "react";

const GreSyllabus = () => {
  return (
    <>
    <div id="syllabus" className="p-6 md:p-12 mt-10 scroll-mt-30">
      {/* Heading */}
      <h1 className="text-4xl font-normal text-black mb-2 ml-10">
        GRE <span className="underline decoration-red-500 decoration-[5px] font-bold">Syllabus</span>
      </h1>

      {/* Table */}
      <div className="overflow-x-auto mt-10 mr-10 ml-10">
        <table className="w-full text-left border-collapse rounded-xl overflow-hidden font-normal">
          <thead>
            <tr className="bg-blue-900 text-white text-center h-16">
              <th className="border border-gray-300 py-3 px-4">Sections</th>
              <th className="border border-gray-300 py-3 px-4">Tasks</th>
              <th className="border border-gray-300 py-3 px-4">Types of Questions</th>
            </tr>
          </thead>
          <tbody className="text-gray-800 text-center">
            <tr>
              <td className="border border-gray-300 py-4 px-4">Analytical Writing</td>
              <td className="border border-gray-300 py-4 px-4">1</td>
              <td className="border border-gray-300 py-4 px-4">Analyse an issue</td>
            </tr>
            <tr>
              <td className="border border-gray-300 py-4 px-4">Quantitative Reasoning</td>
              <td className="border border-gray-300 py-4 px-4">2 sets with 20 questions each</td>
              <td className="border border-gray-300 py-4 px-4 text-left">
                <ul className="list-disc list-inside space-y-1">
                  <li>Quantitative comparison</li>
                  <li>Problem Solving</li>
                  <li>Numeric entry</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 py-4 px-4">Verbal Reasoning</td>
              <td className="border border-gray-300 py-4 px-4">2 sets with 20 questions each</td>
              <td className="border border-gray-300 py-4 px-4 text-left">
                <ul className="list-disc list-inside space-y-1">
                  <li>Reading comprehension</li>
                  <li>Text completion</li>
                  <li>Sentence equivalence</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div className="p-6 px-20 bg-white">
      <h2 className="text-2xl font-semibold text-blue-900 mb-4">
        Section Adaptive Test Format
      </h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
        <li>
          The GRE is a section adaptive test meaning it changes the difficulty
          level of the questions as you answer them.
        </li>
        <li>
          The GRE also allows students to skip questions and go back to
          previous questions.
        </li>
      </ul>
    </div>

{/* GRE scoring */}
    <div id="score" className="p-6 md:p-12 mt-10 ml-10 mr-10 scroll-mt-30">
      {/* Heading */}
      <h1 className="text-4xl font-normal text-black mb-2">
        GRE <span className="underline decoration-red-500 decoration-[5px] font-bold">Scoring</span>
      </h1>
    

      {/* Subtitle */}
      <p className="text-xl mb-6 mt-5">
        A good GRE score is considered to be in between 320 to 340 points. The
        scoring system for the GRE General Test are divided as follows:
      </p>

      {/* Table */}
       <div className="overflow-x-auto mt-10">
        <table className="w-full text-left border-collapse rounded-xl overflow-hidden font-normal">
          <thead>
            <tr className="bg-blue-900 text-white text-center h-16">
              <th className="border border-gray-300 py-3 px-4">Sections</th>
              <th className="border border-gray-300 py-3 px-4">Score Range</th>
              <th className="border border-gray-300 py-3 px-4">Increments</th>
            </tr>
          </thead>
          <tbody className="text-gray-800 text-center">
            <tr>
              <td className="border border-gray-300 py-4 px-4">Analytical Writing</td>
              <td className="border border-gray-300 py-4 px-4">0-6</td>
              <td className="border border-gray-300 py-4 px-4">0.5 point increments</td>
            </tr>
            <tr>
              <td className="border border-gray-300 py-4 px-4">Quantitative Reasoning</td>
              <td className="border border-gray-300 py-4 px-4">130-170</td>
              <td className="border border-gray-300 py-4 px-4">1 point increments</td>
            </tr>
            <tr>
              <td className="border border-gray-300 py-4 px-4">Verbal Reasoning</td>
              <td className="border border-gray-300 py-4 px-4">130-170</td>
              <td className="border border-gray-300 py-4 px-4">1 point increments</td>
            </tr>
            
            </tbody>
           
        
        </table>
      </div>
    </div>

    </>
  );
};

>>>>>>> cost-of-studying-usa
export default GreSyllabus;
