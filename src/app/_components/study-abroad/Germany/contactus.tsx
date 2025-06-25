// 'use client';

// import { useState } from "react";
// import Navigation from "~/app/_components/study-abroad/navigation";
// import CTA_Section from "~/app/study-abroad/Germany/CTA_Section";
// import Locations from "~/app/study-abroad/Germany/location";
// import location from "~/app/study-abroad/Germany/location";


// export default function ContactUs() {
//   const [form, setForm] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     mobile: "",
//     destination: "",
//     course: "",
//     studyTime: "",
//     studyYear: "",
//     consent: false,
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value, type, checked } = e.target;
//     setForm({ ...form, [name]: type === "checkbox" ? checked : value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Form submitted:", form);
//     // You can add API call here
//   };

//   return (
    
//     <>
     
//       <Navigation />

//       <p className="text-sm text-blue-800 md-4 ml-4 p-6">
//         <a href="/" className="underline">Home</a> &gt; Contact us
//       </p>


//       <section className="max-w-2xl mx-auto p-8">




//         <h1 className="text-3xl font-semibold text-center mb-8">
//           Contact Edwise – <span className="font-bold underline decoration-red-500">Unlock</span> Overseas Education Opportunities
//         </h1>
//         <div className="max-w-2xl mx-auto p-6 mt-10">

//           <form
//             onSubmit={handleSubmit}
//             className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-3xl shadow-md h-[600px]"
//           >
//             <input
//               type="text"
//               name="firstName"
//               placeholder="First Name"
//               value={form.firstName}
//               onChange={handleChange}
//               className="border border-gray-300 rounded-lg p-3"
//               required
//             />
//             <input
//               type="text"
//               name="lastName"
//               placeholder="Last Name"
//               value={form.lastName}
//               onChange={handleChange}
//               className="border border-gray-300 rounded-lg p-3"
//               required
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Email ID"
//               value={form.email}
//               onChange={handleChange}
//               className="border border-gray-300 rounded-lg p-3"
//               required
//             />
//             <input
//               type="tel"
//               name="mobile"
//               placeholder="Mobile Number"
//               value={form.mobile}
//               onChange={handleChange}
//               className="border border-gray-300 rounded-lg p-3"
//               required
//             />

//             <select
//               name="destination"
//               value={form.destination}
//               onChange={handleChange}
//               className="border border-gray-300 rounded-lg p-3"
//               required
//             >
//               <option value="">Select Destination</option>
//               <option value="Canada">Canada</option>
//               <option value="Germany">Germany</option>
//               <option value="USA">USA</option>
//               <option value="UK">UK</option>
//             </select>

//             <input
//               type="text"
//               name="course"
//               placeholder="Course"
//               value={form.course}
//               onChange={handleChange}
//               className="border border-gray-300 rounded-lg p-3"
//               required
//             />

//             <select
//               name="studyTime"
//               value={form.studyTime}
//               onChange={handleChange}
//               className="border border-gray-300 rounded-lg p-3"
//             >
//               <option value="">When do you plan to study?</option>
//               <option value="Immediately">Immediately</option>
//               <option value="Next 6 Months">Next 6 Months</option>
//               <option value="Next Year">Next Year</option>
//             </select>

//             <select
//               name="studyYear"
//               value={form.studyYear}
//               onChange={handleChange}
//               className="border border-gray-300 rounded-lg p-3"
//             >
//               <option value="">Select Year</option>
//               <option value="2025">2025</option>
//               <option value="2026">2026</option>
//             </select>

//             <label className="md:col-span-2 flex items-start gap-2 text-sm text-gray-700">
//               <input
//                 type="checkbox"
//                 name="consent"
//                 checked={form.consent}
//                 onChange={handleChange}
//                 className="mt-1"
//               />
//               I consent to receiving Calls, WhatsApp, Email and Google RCS from Edwise to assist with this enquiry.
//             </label>

//             <button
//               type="submit"
//               className="md:col-span-2 bg-[#15377c] text-white py-2 px-6 rounded-xl font-medium hover:bg-[#0f2d61] transition"
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//       </section>

//        <div className="min-h-screen">
//       {/* You can also add a Contact Form or other sections here */}
//       <Locations />
//     </div>
      
//       <CTA_Section />

     
      
//     </>
    

    
//   );
// }
