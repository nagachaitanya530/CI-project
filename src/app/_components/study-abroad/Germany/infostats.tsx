// components/InfoStats.tsx
export default function InfoStats() {
  const stats = [
    {
      title: "400+",
      subtitle: "Universities",
    },
    {
      title: "€10k–€20k",
      subtitle: "Annual tuition fees",
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
    <div className="bg-[#eef2f7] rounded-3xl p-6 md:p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center min-h-[250px]">
      {stats.map((item, index) => (
        <div key={index} className="flex flex-col items-center justify-center border-r last:border-none border-gray-300 px-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-900">{item.title}</h2>
          <p className="text-sm md:text-base font-medium text-gray-800 mt-2">{item.subtitle}</p>
        </div>
      ))}
    </div>
  );
}
