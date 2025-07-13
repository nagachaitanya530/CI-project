import React from 'react';

const GrePatternTable = () => {
  return (
    <div id="pattern" className="px-6 py-12 md:px-20 bg-white scroll-mt-30">
      {/* Title */}
      <h2 className="text-3xl font-bold text-black mb-2">
        GRE <span className="text-black underline decoration-red-500 decoration-4 underline-offset-[10px]">Pattern</span>
      </h2>

      {/* Subtitle */}
      <h3 className="text-xl font-semibold text-blue-800 mb-6">
        The GRE Test Format is divided into different sections
      </h3>

      {/* Table */}
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full table-fixed text-center border-collapse rounded-xl overflow-hidden">
          <thead>
            <tr className="bg-blue-900 text-white cols">
              <th className="px-4 py-3 border border-gray-300">Sections</th>
              <th className="px-4 py-3 border border-gray-300">Number of Questions</th>
              <th className="px-4 py-3 border border-gray-300">Time alloted</th>
            </tr>
          </thead>
          <tbody className="text-gray-900">
            <tr>
              <td className="border border-gray-300 px-4 py-4">Analytical Writing</td>
              <td className="border border-gray-300 px-4 py-4">1 question</td>
              <td className="border border-gray-300 px-4 py-4">30 minutes</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-4">Analyze an issue</td>
              <td className="border border-gray-300 px-4 py-4">1 question</td>
              <td className="border border-gray-300 px-4 py-4">30 minutes</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-4">Quantitative Reasoning (2 sections)</td>
              <td className="border border-gray-300 px-4 py-4">Total 27 questions</td>
              <td className="border border-gray-300 px-4 py-4">47 minutes</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-4">Verbal Reasoning (2 sections)</td>
              <td className="border border-gray-300 px-4 py-4">Total 27 questions</td>
              <td className="border border-gray-300 px-4 py-4">41 minutes</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-4 font-semibold">Total Time</td>
              <td className="border border-gray-300 px-4 py-4"></td>
              <td className="border border-gray-300 px-4 py-4 font-semibold">2 hours</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default GrePatternTable;
