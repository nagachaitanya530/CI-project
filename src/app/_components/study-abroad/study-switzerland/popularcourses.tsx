const courses = [
{
    name: "Business Management",
    image: "/bussines.jpg",
},
{
    name: "Hospitality Management",
    image: "/Hospitality Management.jpg",
},
{
    name: "Artificial Intelligence",
    image: "/Artificial Intelligence AI.jpg",
},
{
    name: "Banking & Finance",
    image: "/Banking & Finance.jpg",
},
{
    name: "Education",
    image: "/Education.jpg",
},
{
    name: "International Law",
    image: "/International Law.jpg",
},
];

function PopularCourses() {
return (
    <>
     <div className="py-12 px-4 text-center">
        {/* Title */}
        <h2 className="text-2xl lg:text-4xl font-bold text-gray-900">
         <span className="relative inline-block">
            <span className="relative z-10 text-black">Popular Courses</span>
            <span className="absolute left-0 right-0 bottom-0 h-1 bg-red-500 z-0 rounded-full"></span>
         </span>{" "}
         In Switzerland
        </h2>
        {/* Subtext */}
        <p className="text-center text-sm lg:text-lg mt-2">
         There are multiple courses in Switzerland that will cater to the needs of international <br className="hidden lg:block" />
         students.
        

         Here are the top courses in Switzerland that are preferred by international students:
        </p>
        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 lg:gap-x-10 gap-y-10 max-w-7xl mx-auto">
         {courses.map((course, index) => (
            <div
             key={index}
             className="rounded-3xl overflow-hidden border border-blue-100 shadow bg-white hover:shadow-lg transition-shadow duration-300"
            >
             <img
                src={course.image}
                alt={course.name}
                className="w-full h-40 lg:h-65 object-cover hover:cursor-pointer"
             />
             <div className="py-4 text-base lg:text-lg font-semibold text-gray-900">{course.name}</div>
            </div>
         ))}
        </div>
     </div>
    </>
);
}

export default PopularCourses;