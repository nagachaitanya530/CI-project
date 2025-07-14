"use client";

export default function Dates() {
  return (
    <section id="dates" className="mt-12 px-4 md:px-10 py-16 md:py-24">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        ACT <span className="underline decoration-red-500">Dates</span>
      </h2>

      {/* Table for medium and larger screens */}
      <div className="hidden md:block overflow-x-auto">
        <div className="overflow-hidden rounded-xl shadow-md border border-gray-200">
          <table className="min-w-full text-center border-collapse">
            <thead>
              <tr className="bg-blue-900 text-white text-base">
                <th className="py-4 px-6">Test Date</th>
                <th className="py-4 px-6">Registration Deadline</th>
                <th className="py-4 px-6">Late Fee Required</th>
                <th className="py-4 px-6">Photo Upload Deadline</th>
              </tr>
            </thead>
            <tbody className="text-gray-900 text-base">
              {rows.map((row, i) => (
                <tr key={i} className="border-t">
                  {row.map((cell, j) => (
                    <td key={j} className="py-4 px-6">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile stacked view */}
      <div className="md:hidden space-y-4">
        {rows.map((row, i) => (
          <div
            key={i}
            className="border border-gray-200 rounded-xl shadow-sm bg-white p-4"
          >
            <div className="mb-2">
              <span className="block text-sm font-medium text-gray-500">
                Test Date
              </span>
              <span className="text-base text-gray-900">{row[0]}</span>
            </div>
            <div className="mb-2">
              <span className="block text-sm font-medium text-gray-500">
                Registration Deadline
              </span>
              <span className="text-base text-gray-900">{row[1]}</span>
            </div>
            <div className="mb-2">
              <span className="block text-sm font-medium text-gray-500">
                Late Fee Required
              </span>
              <span className="text-base text-gray-900">{row[2]}</span>
            </div>
            <div>
              <span className="block text-sm font-medium text-gray-500">
                Photo Upload Deadline
              </span>
              <span className="text-base text-gray-900">{row[3]}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// Data
const rows = [
  [
    "13–14 September, 2024",
    "16 August",
    "30 August",
    "6 September",
  ],
  [
    "25–26 October, 2024",
    "27 September",
    "11 October",
    "18 October",
  ],
  [
    "13–14 December, 2024",
    "15 November",
    "29 November",
    "6 December",
  ],
];
