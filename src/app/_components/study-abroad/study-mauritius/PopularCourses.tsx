"use client";
import MauritiusCard from "./MauritiusCard";

const courses = [
  {
    title: "Tourism Administration",
 image: "/hospitality-img.webp",

  },
  {
    title: "Psychology",
    image: "/Psychologyimg.webp",
  },
  {
    title: "Information Technology",
    image: "/InformationTechnology.webp",
  },
    {
    title: "MBA",
    image: "/mba.webp",
  },
    {
    title: "Marketing",
    image: "/Marketing.webp",
  },
    {
    title: "Finance",
    image: "/Finance.webp",
  },
];

export default function PopularCourses() {
  return (
    <section className="px-4 md:px-20 py-12 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-2">
          <span className="font-bold underline decoration-red-500">Popular Courses</span> In Mauritius
        </h2>
        <p className="text-gray-600 mb-10">
          Mauritius is emerging as a popular study abroad destination. <br />
          Here are some of the most popular programs in Mauritius:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <MauritiusCard key={index} title={course.title} image={course.image} />
          ))}
        </div>
      </div>
    </section>
  );
}
