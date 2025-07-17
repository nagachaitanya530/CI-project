"use client";
import Link from "next/link";
import Image from "next/image";

export default function MembershipSection() {
  return (
    <section id = "membership" className="w-full bg-[#003366] text-white py-16 px-4 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-6">
        {/* Left: Form */}
        <div className="w-full lg:w-1/2">
          <form className="bg-white p-6 rounded-lg shadow-md space-y-4 text-black">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 rounded border focus:outline-none"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full px-4 py-2 rounded border focus:outline-none"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full px-4 py-2 rounded border focus:outline-none resize-none"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold w-full py-2 rounded"
            >
              SEND
            </button>
          </form>
        </div>

        {/* Right: Enlarged Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <div className="rounded-xl overflow-hidden shadow-xl w-full h-full">
            <Image
              src="/alltesttestimonial7.avif" // Replace with your actual image
              alt="Take Lead"
              width={600}
              height={800}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Membership Heading */}
      <div className="text-center mt-16 mb-8">
        <h2 className="text-3xl font-bold">Become a member now</h2>
      </div>

      {/* Pricing Cards */}
<div id="pricing" className="flex flex-col md:flex-row gap-6 justify-center items-center text-black">
        {/* 1 Month Plan */}
        <div className="bg-white px-6 py-8 rounded-xl text-center w-72 shadow-lg">
          <p className="text-lg font-medium mb-2">1 Month Membership</p>
          <h3 className="text-4xl font-bold mb-4">₹299</h3>
          <p className="mb-2">✅ 1 Month Membership</p>
          <p className="mb-6">✅ Access to WhatsApp Groups</p>
          <Link href = "/enrollment">
          <button className="bg-blue-600 text-white font-semibold px-4 py-2 rounded hover:bg-blue-700">
            Enroll Now
          </button>
          </Link>
        </div>

        {/* 3 Month Plan */}
        <div className="bg-white px-6 py-8 rounded-xl text-center w-72 shadow-lg relative border-2 border-blue-500">
          <span className="absolute -top-3 right-3 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
            Most Popular
          </span>
          <p className="text-lg font-medium mb-2">3 Month Membership</p>
          <h3 className="text-4xl font-bold mb-4">₹849</h3>
          <p className="mb-2">✅ 3 Month Membership</p>
          <p className="mb-6">✅ Access to WhatsApp Groups</p>
          <Link href="enrollment">
          <button className="bg-blue-600 text-white font-semibold px-4 py-2 rounded hover:bg-blue-700">
            Enroll Now
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
