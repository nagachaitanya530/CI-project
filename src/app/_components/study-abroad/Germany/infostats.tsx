"use client";

export default function InfoStats() {
  const stats = [
    {
      title: "400+",
      subtitle: "Universities",
    },
    {
      title: "€10k–€20k",
      subtitle: "Annual Tuition Fees",
    },
    {
      title: "400K+",
      subtitle: "International Students",
    },
    {
      title: "1.5 Years",
      subtitle: "Post-Study Work Visa",
    },
  ];

  return (
    <section className="bg-[#eef2f7] rounded-3xl w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-300">
        {stats.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center py-6 px-4 text-center"
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-blue-900">
              {item.title}
            </h2>
            <p className="text-sm sm:text-base font-medium text-gray-800 mt-2">
              {item.subtitle}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
