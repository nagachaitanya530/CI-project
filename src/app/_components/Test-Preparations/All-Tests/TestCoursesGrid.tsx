"use client";
import Image from "next/image";

interface TestCourse {
  image: string;
  title: string;
  description: string;
  link?: string;
}

interface TestCoursesGridProps {
  heading: string;
  subheading: string;
  courses: TestCourse[];
}

export default function TestCoursesGrid({
  heading,
  subheading,
  courses,
}: TestCoursesGridProps) {
  return (
    <section className=" mx-auto px-4 md:px-20 py-12">
      <div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-semibold mb-4">
  Explore Test{" "}
  <span className="relative inline-block">
    <span className="relative z-10">Preparation Courses</span>
    <span className="absolute left-0 bottom-0 w-full h-[6px] bg-red-400 rounded-full z-0 translate-y-1"></span>
  </span>{" "}
  with CI
</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">{subheading}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl border p-4 shadow-sm flex flex-col h-full justify-between"
          >
            <div>
              <Image
                src={course.image}
                alt={course.title}
                width={600}
                height={300}
                className="rounded-xl w-full h-64 object-cover mb-4"
              />
              <h3 className="text-lg font-bold text-gray-900">
                {course.title}
              </h3>
              <p className="text-gray-700 mt-2">{course.description}</p>
            </div>
            <div className="mt-4">
              <a
                href={course.link || "#"}
                className="inline-block border border-blue-600 text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-md mt-2 transition"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
