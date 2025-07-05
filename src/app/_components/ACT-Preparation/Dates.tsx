"use client";

export default function Dates() {
  return (
    <section
      id="dates"
      className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-10 py-12"
    >
      
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        ACT <span className="underline decoration-red-500">Dates</span>
      </h2>

      
      <div className="w-full overflow-x-auto">
        <table className="min-w-[600px] md:min-w-full border-collapse text-sm sm:text-base shadow border border-gray-200 rounded-xl">
          <thead className="bg-blue-900 text-white">
            <tr>
              <th className="py-3 px-4 text-left">Test Date</th>
              <th className="py-3 px-4 text-left">Registration Deadline</th>
              <th className="py-3 px-4 text-left">Late Fee Required</th>
              <th className="py-3 px-4 text-left">Photo Upload Deadline</th>
            </tr>
          </thead>
          <tbody className="text-gray-900 bg-white">
            {[
              {
                date: "13–14 September, 2024",
                reg: "16 August",
                late: "30 August",
                photo: "6 September",
              },
              {
                date: "25–26 October, 2024",
                reg: "27 September",
                late: "11 October",
                photo: "18 October",
              },
              {
                date: "13–14 December, 2024",
                reg: "15 November",
                late: "29 November",
                photo: "6 December",
              },
            ].map((row, idx) => (
              <tr key={idx} className="border-t">
                <td className="py-3 px-4">{row.date}</td>
                <td className="py-3 px-4">{row.reg}</td>
                <td className="py-3 px-4">{row.late}</td>
                <td className="py-3 px-4">{row.photo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
