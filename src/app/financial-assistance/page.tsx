"use client";

import { useState } from "react";
import Image from "next/image";
import NavigationSection from "../_components/navigation1";
<<<<<<< HEAD
import YourJourney from "../_components/study-abroad/your-journey";
=======
import SpainHero from "../_components/study-abroad/study-in-spain/SpainHero";
>>>>>>> cost-of-studying-usa
import FooterSection from "../_components/footer1";
import ConsultationForm from "../_components/study-abroad/study-in-spain/ConsultationForm";

export default function FinancialAssistancePage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <ConsultationForm show={showModal} onClose={() => setShowModal(false)} />
      <NavigationSection />

      <main className="bg-white text-black">

        {/* HERO SECTION WITH GRADIENT BACKGROUND */}
        <section className="bg-gradient-to-r from-blue-50 via-white to-blue-100 py-16">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl">
                Financial{" "}
                <span className="underline decoration-red-500 font-bold underline-offset-[6px]">
                  Assistance
                </span>
                <br />
                <span className="mt-3 inline-block">and Scholarships</span>
              </h1>
              <button
                onClick={() => setShowModal(true)}
                className="mt-8 px-6 py-3 bg-[#183D8C] hover:bg-[#102b6a] text-white font-semibold rounded-xl shadow-md transition-all"
              >
                Book Free Consultation With Expert
              </button>
            </div>
            <div className="relative w-full h-80 md:h-[400px]">
              <Image
<<<<<<< HEAD
              src="/financial-asst-bnr-img.png"
              alt="Consultant"
              fill
              className="object-contain"
            />

=======
                src="/images/lady.png"
                alt="Consultant"
                fill
                className="object-contain"
              />
>>>>>>> cost-of-studying-usa
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* MAIN CONTENT SECTION finan-asst-bnr-img.png*/}
=======
        {/* MAIN CONTENT SECTION */}
>>>>>>> cost-of-studying-usa
        <section className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl">
            <span className="underline font-bold decoration-red-500 underline-offset-[6px]">
              Financial
            </span>{" "}
            Assistance
          </h2>

          <p className="mt-8">
            You can easily achieve your dream of studying abroad even if you have limited funds.
            Education loans for studying abroad can be a crucial part of your overall funding strategy.
            At Edwise, we provide you the opportunity to avail of an education loan for overseas studies that covers
            all aspects of higher education including college fees, cost of books and accommodation.
          </p>
          <p className="mt-4">
            We partner with Nationalized & Co-Operative Banks that offer student loans at reasonable interest rates
            and have association with financial institutions. We help with selecting banks, producing documentation,
            meeting eligibility, interest rates and repayment period. The process is simplified with Edwise’s expertise.
          </p>

          <h3 className="mt-8 text-2xl font-bold">
            Listed Below Are Several Points That One Should Know About Study Loans.
          </h3>

          <h4 className="mt-6 text-xl font-semibold text-blue-900">Eligible Courses</h4>
          <ul className="list-disc list-inside space-y-1">
            <li>All recognized courses having employment prospects</li>
            <li>Graduation / Post Graduation / Diploma / Professional Courses</li>
          </ul>

          <h4 className="mt-6 text-xl font-semibold text-blue-900">Expenses Which Constitute The Student Loan</h4>
          <ul className="list-disc list-inside space-y-1">
            <li>Air fare / Travel expenses</li>
            <li>Admission / Tuition Fees</li>
            <li>Boarding and Lodging expenses</li>
            <li>Books and Stationery expenses</li>
            <li>Instruments/Equipment etc. required to complete the course</li>
            <li>Examination / Library / Laboratory fee or other academic expenses</li>
          </ul>

          <h4 className="mt-6 text-xl font-semibold text-blue-900">Eligibility</h4>
          <ul className="list-disc list-inside space-y-1">
            <li>Applicant should be a resident of India</li>
            <li>Secured admission to a professional/technical course abroad</li>
            <li>Age should be between 18-35 years</li>
          </ul>

          <h4 className="mt-6 text-xl font-semibold text-blue-900">Quantum Of Loan</h4>
          <p>
            Loans from ₹4 Lakh up to ₹15 Lakh or more depending on the institution.
          </p>

          <h4 className="mt-6 text-xl font-semibold text-blue-900">Security / Collateral</h4>
          <ul className="list-disc list-inside space-y-1">
            <li>Up to ₹4 lakhs – No Security</li>
            <li>Above ₹4 lakhs – Collateral or co-obligation depending on the amount</li>
            <li>Partial collateral accepted by some banks</li>
          </ul>

          <h4 className="mt-6 text-xl font-semibold text-blue-900">Acceptable Collateral</h4>
          <ul className="list-disc list-inside space-y-1">
            <li>Residential / Commercial property</li>
            <li>Fixed Deposits / NSC / LIC policies</li>
          </ul>

          <h4 className="mt-6 text-xl font-semibold text-blue-900">Applicant and Co-Applicant</h4>
          <ul className="list-disc list-inside space-y-1">
            <li>Documents executed by student and parent/guardian</li>
            <li>Applicant is the student; Co-applicant can be parent/guardian</li>
          </ul>

          <h4 className="mt-6 text-xl font-semibold text-blue-900">Tenure</h4>
          <ul className="list-disc list-inside space-y-1">
            <li>Repayment in 5–10 years</li>
            <li>Monthly payment starts post disbursement</li>
            <li>Principal repayment starts 6–12 months post completion or job</li>
            <li>Interest may be frozen during moratorium by some banks</li>
          </ul>

          <h4 className="mt-6 text-xl font-semibold text-blue-900">Margin</h4>
          <ul className="list-disc list-inside space-y-1">
            <li>15% borne by student for loans above ₹4 Lakhs</li>
            <li>85% by bank (or 100% by some institutions)</li>
          </ul>

          <h4 className="mt-6 text-xl font-semibold text-blue-900">Who Can Be A Co-Applicant?</h4>
          <ul className="list-disc list-inside space-y-1">
            <li>Any earning family member: Father/Mother/Brother/Sister/Spouse</li>
            <li>Also: Father-in-law/Mother-in-law/Uncle/Aunt etc.</li>
          </ul>

          <h4 className="mt-6 text-xl font-semibold text-blue-900">Tax Deduction</h4>
          <p>
            Students or parents who borrow directly can claim tax deductions under Section 80E of the Income Tax Act.
          </p>
        </section>
<<<<<<< HEAD
        <YourJourney />
=======
        <SpainHero />
>>>>>>> cost-of-studying-usa
        <FooterSection />
      </main>
    </>
  );
}