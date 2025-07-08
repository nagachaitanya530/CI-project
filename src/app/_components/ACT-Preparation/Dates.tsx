"use client";

export default function Dates() {
  return (
    <section id="dates" className="mt-12 px-4 md:px-10 py-24">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        ACT <span className="underline decoration-red-500">Dates</span>
      </h2>

      {/* Table */}
      <div className="overflow-x-auto">
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
              <tr className="border-t">
                <td className="py-4 px-6">13–14 September, 2024</td>
                <td className="py-4 px-6">16 August</td>
                <td className="py-4 px-6">30 August</td>
                <td className="py-4 px-6">6 September</td>
              </tr>
              <tr className="border-t">
                <td className="py-4 px-6">25–26 October, 2024</td>
                <td className="py-4 px-6">27 September</td>
                <td className="py-4 px-6">11 October</td>
                <td className="py-4 px-6">18 October</td>
              </tr>
              <tr className="border-t">
                <td className="py-4 px-6">13–14 December, 2024</td>
                <td className="py-4 px-6">15 November</td>
                <td className="py-4 px-6">29 November</td>
                <td className="py-4 px-6">6 December</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
