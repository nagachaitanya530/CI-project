"use client";

export default function Miscellaneous() {
  const details = [
    { label: "Score Validity", value: "5 Years" },
    { label: "Registration Mode", value: "Online" },
    { label: "The full ACT (no writing)", value: "$181.50" },
    { label: "The full ACT with writing", value: "$206.50" },
    { label: "Nature of Test", value: "Digital and Pen & Paper" },
    {
      label: "Score Declared",
      value: "From 2 days – 8 weeks after the test date.",
    },
    { label: "Extra Score Reporting Fee", value: "$18.50" },
    { label: "Official Website", value: "www.act.org" },
    { label: "Rescheduling Fees", value: "$44" },
    { label: "Test Administration Frequency", value: "7 times in a year" },
    {
      label: "Test Repetition Policy",
      value: "As per administration frequency",
    },
  ];

  return (
    <section id="misc" className="mt-12 px-4 md:px-10 py-16">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        Miscellaneous <span className="underline decoration-red-500">Details</span>
      </h2>

      {/* Details List */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
        <dl className="divide-y divide-gray-200">
          {details.map((item, index) => (
            <div key={index} className="px-6 py-4 flex justify-between items-center">
              <dt className="text-gray-700 font-medium">{item.label}</dt>
              <dd className="text-gray-900 font-semibold text-right">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
