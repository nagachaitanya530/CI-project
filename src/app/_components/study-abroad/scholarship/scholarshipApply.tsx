import React from "react";

const ScholarshipApplyForm = () => {
  return (
    <div className="comm-section bg-blue-300 text-black py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Image */}
          <div className="w-full lg:w-1/2">
            <img
              src="/scholarship/form.jpg"
              alt="Scholarship Team"
              className="rounded shadow-lg"
            />
          </div>

          {/* Right Form */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6">
              Apply for <span className="text-yellow-400">Scholarship</span>
            </h2>

            <form className="space-y-6">
              <div className="flex flex-wrap gap-6">
                <div className="w-full md:w-[48%]">
                  <label className="block mb-1">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    className="w-full px-4 py-2 rounded-2xl text-black border border-black"
                    required
                  />
                </div>

                <div className="w-full md:w-[48%]">
                  <label className="block mb-1 text-black">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    className="w-full px-4 py-2 rounded-2xl text-black border border-black"
                    required
                  />
                </div>

                <div className="w-full md:w-[48%]">
                  <label className="block mb-1">Email ID</label>
                  <input
                    type="email"
                    name="email"
                    className="w-full px-4 py-2 rounded-2xl text-black border border-black"
                    required
                  />
                </div>

                <div className="w-full md:w-[48%]">
                  <label className="block mb-1">Mobile Number</label>
                  <input
                    type="tel"
                    name="mobile"
                    maxLength={12}
                    className="w-full px-4 py-2 rounded-2xl text-black border border-black"
                    required
                  />
                </div>

                <div className="w-full">
                  <label className="block mb-1">Country</label>
                  <select
                    name="country"
                    className="w-full px-4 py-2 rounded-2xl text-black border border-black"
                    required
                  >
                    <option value="">Select Destination</option>
                    <option value="UK">UK</option>
                    <option value="USA">USA</option>
                    <option value="Australia">Australia</option>
                    <option value="New Zealand">New Zealand</option>
                    <option value="Canada">Canada</option>
                    <option value="Singapore">Singapore</option>
                    <option value="Switzerland">Switzerland</option>
                    <option value="Ireland">Ireland</option>
                    <option value="Dubai">Dubai</option>
                    <option value="France">France</option>
                    <option value="Germany">Germany</option>
                    <option value="Sweden">Sweden</option>
                    <option value="Spain">Spain</option>
                    <option value="Finland">Finland</option>
                    <option value="Europe">Europe</option>
                    <option value="India">India</option>
                    <option value="Netherlands">Netherlands</option>
                    <option value="Mauritius">Mauritius</option>
                    <option value="Italy">Italy</option>
                  </select>
                </div>

                <div className="w-full">
                  <div className="flex items-start gap-2 mt-4">
                    <input
                      type="checkbox"
                      id="consent"
                      name="consent"
                      required
                      className="mt-1"
                    />
                    <label htmlFor="consent" className="text-sm">
                      I consent to receiving Calls, WhatsApp, Email and Google
                      RCS from Edwise to assist with this enquiry.
                    </label>
                  </div>
                </div>

                <div className="w-full mt-4">
                  <button
                    type="submit"
                    className="bg-transparent border border-white px-6 py-2 rounded hover:bg-white  transition"
                  >
                    Submit
                  </button>
                  <div id="message" className="mt-4 text-black text-sm"></div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipApplyForm;
