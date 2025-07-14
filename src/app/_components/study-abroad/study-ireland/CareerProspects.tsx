"use client";
import MauritiusCard from  '~/app/_components/study-abroad/study-mauritius/MauritiusCard';

const careerOptions = [
  {
    title: "Tourism & Hospitality",
 image: "/popularcoursescard1.jpeg",
  },
  {
    title: "Financial Services",
    image: "/popularcoursescard6.avif",
  },
  {
    title: "Information Technology",
      image: "/popularcoursescard3.avif",
  },
  {
    title: "Manufacturing",
    image: "/carreerprospect2.avif",
  },
  {
    title: "Professional Services",
    image: "/carreerprospect3.avif",
  },
  {
    title: "Renewable Energy",
    image: "/carreerprospect4.avif",
  },
];

export default function CareerProspects() {
  return (
    <section className="px-4 md:px-20 py-12 bg-[#f7faff]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-2">
          <span className="font-bold underline decoration-red-500">Career Prospects</span> In Ireland
        </h2>
        <p className="text-gray-600 mb-10">
        The employment landscape in Ireland is diverse, offering opportunities across
          <br />
      various sectors. Here are some key sectors and industries that presently offer
      <br />
      employment opportunities:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {careerOptions.map((career, index) => (
            <MauritiusCard key={index} title={career.title} image={career.image} />
          ))}
        </div>
      </div>
    </section>
  );
}
