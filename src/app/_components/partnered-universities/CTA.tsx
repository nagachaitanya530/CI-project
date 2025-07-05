'use client';

import Link from "next/link";

export default function CTASection() {
  return (
    <section id="enroll" className="py-12 bg-cyan-900 text-white text-center">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-4">Ready to Boost Your Business English?</h2>
        <p className="mb-6">Join hundreds of professionals improving their careers through better communication.</p>
        <div className="flex justify-between">
          <Link href="/book-demo" className="bg-white text-cyan-900 px-6 py-3 font-bold rounded shadow hover:bg-gray-200">
            Book a Free Demo
          </Link>
          <a href="/" className="bg-cyan-600 text-white px-6 py-3  rounded shadow hover:bg-cyan-700">
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
