'use client';

export default function whystudy() {
  return (
    <section className="bg-white py-16">
      <div className="flex flex-col lg:flex-row gap-14 px-6 lg:px-20">
        {/* Left Content */}
        <div className="lg:w-2/3">
          <h2 className="text-4xl text-black font-light">
              Why{" "}
             <span className="font-extrabold underline decoration-red-500 underline-offset-[6px]">
               Study In Switzerland
             </span>
            </h2>


          {features.map((feature, index) => (
            <div key={index} className="pt-10 pb-6">
              <div className="flex items-start gap-6">
                <div className="flex items-center justify-center w-14 h-14 shadow-xl rounded-full">
                  <img
                    src="/images/certificate.png"
                    alt={feature.title}
                    className="w-8 h-8"
                  />
                </div>
                <h2 className="text-2xl font-bold">{feature.title}</h2>
              </div>
              <p className="text-lg mt-2 text-gray-700">{feature.description}</p>
              <hr className="w-[90%] border-gray-300 mt-5" />
            </div>
          ))}
        </div>

        {/* Right Form */}
        <div className="flex flex-col border-2 border-gray-300 rounded-2xl p-8 gap-4 w-1/3 h-195">
        <h1 className="text-blue-900 text-xl font-bold">Book Your Free Consultation with Trustworthy Counsellors</h1>

          <input type="text" placeholder="Name" className={inputClass} />
          <input type="email" placeholder="Email" className={inputClass} />
          <input type="tel" placeholder="Mobile Number" className={inputClass} />
          <input type="text" placeholder="Preferred Course" className={inputClass} />

          <select className={inputClass} defaultValue="">
            <option value="" disabled>Select Month</option>
            {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
              .map((month) => (
                <option key={month} value={month.toLowerCase()}>{month}</option>
              ))}
          </select>

          <select className={inputClass} defaultValue="">
            <option value="" disabled>Select Year</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
            <option value="2027">2027</option>
          </select>

          <label className="flex gap-2 items-start text-blue-900 text-sm">
            <input type="checkbox" className="accent-blue-700 mt-1" />
            <span>
              I consent to receiving Calls, WhatsApp, Email and Google RCS from Edwise to assist with this enquiry.
            </span>
          </label>

          <input
            type="submit"
            value="Submit"
            className="mt-4 w-fit py-3 px-6 font-semibold text-blue-900 rounded-2xl border border-blue-900 hover:bg-blue-900 hover:text-white cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
}

const inputClass =
  "border border-gray-300 p-3 rounded-2xl text-blue-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300";

const features = [
  {
    title: "World-class education system",
    description:
      "Universities in Switzerland have gained widespread recognition across Europe for the excellent quality of its educators and the high standards of its academic programs, a sentiment echoed by the students surveyed.",
  },
  {
    title: "High Class Cities",
    description:
      "Switzerland is home to some of the most exquisite and advanced urban areas in the world. The great cities of Switzerland provide the best of metropolitan life.",
  },
  {
    title: "A Global Network",
    description:
      "Many international students are drawn to Switzerland for their studies due to its renowned education system, affordable tuition fees, and abundant scholarship opportunities, resulting in a significant portion of the student body being foreign.",
  },
  {
    title: "Europe at Your Doorstep",
description:
  "Switzerland shares borders with five European countries and boasts a highly efficient transportation system, thus making your dream weekend getaway incredibly convenient.",
  },
  {
    title: "High salaries",
    description:
      "In Switzerland, workers enjoy some of Europe's highest salaries due to the country's well-educated and specialized talent pool, resulting in lucrative job opportunities. Studying a Master’s in Switzerland for Indian students is an excellent opportunity to join this workforce.",
  },
   {
    title: "Secure Living",
    description:
      "As one of the safest countries globally, students can set aside any worries about their safety while studying abroad in Switzerland.",
  },
];