// import {
//     Briefcase,
//     Stethoscope,
//     Cpu,
//     Building2,
//     FlaskConical,
//     Palette,
//     Globe2,
//     Rocket,
// } from "lucide-react";
// import React from "react";

// const courses = [
//     { image: Building2, name: "Engineering" },
//     { image: Stethoscope, name: "Information Technology" },
//     { image: Cpu, name: "Computer Science & IT" },
//     { image: Briefcase, name: "Business & Management" },    
//     { image: FlaskConical, name: "Natural Sciences" },
//     { image: Palette, name: "Art & Design" },
//     { image: Globe2, name: "Social Sciences" },
//     { image: Rocket, name: "Aerospace & Aviation" },
// ];

// const CareerProspect = () => {
//     return (
//         <section className="bg-[#f9fbff] py-16 px-4 lg:px-24">
//             <div className="max-w-7xl mx-auto text-center mb-12">
//                 <h2 className="text-3xl font-bold text-gray-900 mb-2">
//                     <span className="underline decoration-red-500 decoration-2 underline-offset-5">
//                         Career Prospects
//                     </span>{" "}
//                     In Canada
//                 </h2>
//                 <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto mt-2">
//                     The employment landscape in Canada is diverse, offering opportunities across various sectors. 
//                     Here are some key sectors and industries that offer employment opportunities:
//                 </p>
//             </div>

//             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
//                 {courses.map((course, idx) => (
//                     <div
//                         key={idx}
//                         className="bg-white p-6 rounded-2xl border border-[#dbe3ef] text-center hover:shadow-md transition"
//                     >
//                         <div className="flex justify-center mb-4">
//                             <course.image className="w-8 h-8 text-blue-700" />
//                         </div>
//                         <h4 className="text-sm font-semibold text-gray-800">
//                             {course.name}
//                         </h4>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// };

// export default CareerProspect;

import Image from "next/image";
import React from "react";

const courses = [
    { image: "/popular-courses/engineer.jpg", name: "Engineering" },
    { image: "/popular-courses/information-technology.jpg", name: "Information Technology" },
    { image: "/popular-courses/finance-banking.jpg", name: "Finance & Banking" },
    { image: "/popular-courses/business-management.jpg", name: "Business & Management" },
    { image: "/popular-courses/education-training.jpg", name: "Education & Training" },
    { image: "/popular-courses/hospitality.jpg", name: "Hospitality" },
];

const CareerProspect = () => {
    return (
        <section className="bg-gray-50 py-16 px-6">
            <div className="max-w-7xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    <span className="underline decoration-red-500 decoration-2 underline-offset-8">
                        Career Prospects
                    </span>{" "}
                    In Canada
                </h2>
                <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto mt-2">
                    The employment landscape in Canada is diverse, offering opportunities across various sectors.
                    Here are some key sectors and industries that offer employment opportunities:
                </p>
            </div>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {courses.map((course, index) => (
                    <div
                        key={index}
                        className="rounded-3xl overflow-hidden border border-blue-100 shadow bg-white">
                        <Image src={course.image} alt={course.name} className="w-full  md:h-48 lg:h-56 object-cover rounded-2xl" width={500} height={300}   />
                        <div className="p-4 text-lg font-semibold text-gray-900">{course.name}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CareerProspect;
