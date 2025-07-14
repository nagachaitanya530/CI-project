"use client";

import MauritiusCard from '~/app/_components/study-abroad/study-mauritius/MauritiusCard';

const courses = [
  {
    title: "Tourism Administration",
 image: "/popularcoursescard1.jpeg",

  },
  {
    title: "Psychology",
    image: "/popularcoursescard2.avif",
  },
  {
    title: "Information Technology",
    image: "/popularcoursescard3.avif",
  },
    {
    title: "MBA",
    image: "/popularcoursescard4.avif",
  },
    {
    title: "Marketing",
    image: "/popularcoursescard5.avif",
  },
    {
    title: "Finance",
    image: "/popularcoursescard6.avif",
  },
];

export default function PopularCourses() {
  return (
    <section className="px-4 md:px-20 py-12 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-2">
          <span className="font-bold underline decoration-red-500">Popular Courses</span> In Ireland
        </h2>
        <p className="text-gray-600 mb-10">
          Ireland offers diverse, globally recognized courses, making it a top choice for <br />
          international students. Here are the top courses in Ireland that are preferred by  <br/>
          international students:
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
