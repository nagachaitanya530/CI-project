"use client";

import Image from "next/image";

const courses = [
  { name: "MBA", image: "/images/MBA.jpg" },
  { name: "Architecture", image: "/images/Architecture.jpg" },
  { name: "Sports", image: "/images/Sports.jpg" },
  { name: "Arts & Business", image: "/images/ArtsBusiness.jpg" },
  { name: "Business", image: "/images/Business.jpg" },
  { name: "Hospitality", image: "/images/Hospitality.jpg" },
];

export default function PopularCourses() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-black relative inline-block">
          <span className="relative z-10">Popular Courses</span>
          <span className="absolute left-0 bottom-0 w-full h-1 bg-red-500 rounded-full -z-10"></span>{" "}
          In Spain
        </h2>
        <p className="mt-3 text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
          Education in Spain is of high quality and excellence taught by
          experienced faculty members.
          <br className="hidden sm:block" />
          Here are some of the most popular courses to study in Spain:
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-8 max-w-7xl mx-auto">
        {courses.map((course, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden border border-blue-100 shadow hover:shadow-lg transition bg-white"
          >
            <div className="relative w-full h-48 sm:h-56">
              <Image
                src={course.image}
                alt={`Course: ${course.name}`}
                fill
                className="object-cover hover:cursor-pointer transition-transform duration-300 hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                priority={index < 3}
              />
            </div>
            <div className="py-3 text-base sm:text-lg font-bold text-gray-800 text-center">
              {course.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
