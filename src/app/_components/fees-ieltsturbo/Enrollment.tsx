'use client';

import Link from "next/link";

export default function CTA() {
  return (
    <section id="enroll" className="py-12 bg-cyan-900 text-white text-center mb-10">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-4">Start with IELTS Turbo</h2>
        <p className="mb-6">Course fee is  ₹5990 or $71 You can pay in EMIs with your credit/debt card (if your bank/card supports it)</p>
        <div className="flex justify-between">
          <Link href="/book-demo" className="bg-white text-cyan-900 px-6 py-3 font-bold rounded shadow hover:bg-gray-200">
            Contact us: +91 9569 285 185
          </Link>
          <a href="/enrollment" className="bg-cyan-600 text-white px-6 py-3  rounded shadow hover:bg-cyan-700">
            Enroll Now
          </a>
        </div>
      </div>
    </section>
  );
}
