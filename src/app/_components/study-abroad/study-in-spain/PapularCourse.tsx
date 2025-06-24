const courses = [
  {
    name: "MBA",
    image: "/images/MBA.jpg",
  },
  {
    name: "Architecture",
    image: "/Images/Architecture.jpg",
  },
  {
    name: "Sports",
    image: "/images/Sports.jpg",
  },
  {
    name: "Arts & Business",
    image: "/images/ArtsBusiness.jpg",
  },
  {
    name: "Business",
    image: "/images/Business.jpg",
  },
  {
    name: "Hospitality",
    image: "/images/Hospitality.jpg",
  },
];

function PopularCourses() {
  return (
    <div className="py-10 px-4 text-center">
      {/* Title */}
      <h2 className="text-3xl font-bold text-gray-900">
        <span className="relative inline-block">
          <span className="relative z-10 text-black">Popular Courses</span>
          <span className="absolute left-0 right-0 bottom-0 h-1 bg-red-500 z-0 rounded-full"></span>
        </span>{" "}
        In Spain
      </h2>

      {/* Subtext */}
      <p className="text-center text-base mt-2 text-gray-700">
        Education in Spain is of high quality and excellence taught by experienced faculty members.
        <br />
        Here are some of the most popular courses to study in Spain:
      </p>

      {/* Course Cards */}
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-8 max-w-6xl mx-auto">
        {courses.map((course, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden border border-blue-100 shadow bg-white w-full"
          >
            <img
              src={course.image}
              alt={course.name}
              className="w-full h-50 object-cover hover:cursor-pointer"
            />
            <div className="py-2 text-lg font-extrabold text-gray-800">{course.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularCourses;
