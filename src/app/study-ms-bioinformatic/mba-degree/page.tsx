"use client";

import Image from "next/image";
import Link from "next/link";
import NavigationSection from "~/app/_components/navigation1";
import YourJourney from "~/app/_components/study-abroad/your-journey";
import FooterSection from "~/app/_components/footer1";
import FAQ from "~/app/_components/study-abroad/faq";

export default function Page() {
  return (
    <>
      <NavigationSection />
      <main className="bg-white text-gray-900">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-4 py-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            MBA Degree in Australia for Indian Students
          </h1>
          <div className="relative w-full h-64 md:h-[400px] rounded-3xl overflow-hidden shadow-lg mx-auto">
            <Image
              src="/images/mba-degree-in-australia-for-indian-students.png"
              alt="MBA Degree in Australia Hero"
              fill
              className="object-cover"
            />
          </div>
        </section>
        {/* Intro Section */}
        <section className="max-w-4xl mx-auto px-4 py-8 space-y-6 text-lg leading-relaxed text-gray-800">
          <p>
            Australia, well-known for its top-tier universities, beautiful scenery, and varied cultures is a highly sought-after study abroad destination.
          </p>
          <p>
            Based on whether it’s pursued full-time or part-time, an MBA in Australia generally takes 1–2 years. These programs provide vital abilities in finance, strategy, management, and marketing, plus networking opportunities in Australia’s dynamic business community.
          </p>
        </section>
        {/* Multiple Sections */}
        <Section title="Why Study an MBA Degree in Australia?">
          <ul>
            <li>Top-notch instruction with practical case studies</li>
            <li>Internationally recognized MBA degrees</li>
            <li>Strong industry connections and internships</li>
            <li>Opportunity to work part-time during study</li>
            <li>Pathways to permanent residency</li>
          </ul>
        </Section>
        <Section title="Best MBA Courses in Australia">
          <ul>
            <li>MBA in Health Management</li>
            <li>MBA in International Business</li>
            <li>MBA in Human Resource Management</li>
            <li>MBA in Leadership and Strategy</li>
            <li>MBA in Supply Chain Management</li>
            <li>MBA in Marketing</li>
            <li>MBA in Finance</li>
            <li>MBA in Entrepreneurship</li>
          </ul>
        </Section>
        <Section title="Best Universities for MBA in Australia">
          <ul>
            <li>University of Melbourne (Melbourne Business School)</li>
            <li>University of Sydney Business School</li>
            <li>University of New South Wales (AGSM)</li>
            <li>Monash University</li>
            <li>Australian National University (ANU)</li>
          </ul>
        </Section>
        <Section title="What's the Cost of Pursuing an MBA in Australia?">
          <p>
            Tuition typically ranges from <strong>AUD 30,000–AUD 100,000</strong>, with living costs around <strong>AUD 20,000–40,000</strong>. Scholarships may reduce costs.
          </p>
        </Section>
        <Section title="Eligibility Criteria">
          <ul>
            <li>Bachelor’s degree or equivalent</li>
            <li>Possible GMAT/GRE scores</li>
            <li>English proficiency (IELTS/TOEFL)</li>
            <li>2–5 years of work experience</li>
            <li>Statement of Purpose (SOP)</li>
            <li>Recommendation letters</li>
            <li>Interviews at some universities</li>
            <li>Meet Australian visa requirements</li>
          </ul>
        </Section>
        <Section title="Job Opportunities After MBA">
          <ul>
            <li>Project Manager</li>
            <li>Entrepreneur</li>
            <li>Financial Analyst</li>
            <li>Management Consultant</li>
            <li>Business Development Manager</li>
            <li>Marketing Manager</li>
          </ul>
        </Section>
        <FAQ
          faqs={[
            {
              question: "What's the cost of a 1-year MBA in Australia?",
              answer: "Tuition ranges from AUD 21,800–106,650 annually, plus living costs of AUD 18,000–46,080 per year.",
            },
            {
              question: "Which universities offer affordable MBA programs?",
              answer: "Examples: Charles Darwin University, Kaplan Business School, Victoria University.",
            },
            {
              question: "Popular business schools?",
              answer: "Melbourne Business School, ANU College of Business and Economics, UNSW Business School.",
            },
          ]}
        />
        <SecondImage />
        <ShareSection />
        <ServicesSection />
      </main>
      <YourJourney />
      <FooterSection />
    </>
  );
}
/* ---------- Sections ---------- */
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6 text-blue-800">{title}</h2>
      <div className="text-lg space-y-4">{children}</div>
    </section>
  );
}
function SecondImage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      <div className="mb-6">
        <Image
          src="/images/mba-degree-in-australia-for-indian-students-2.jpg"
          alt="Study Abroad with Edwise International"
          width={900}
          height={500}
          className="w-full rounded-lg shadow-lg"
        />
      </div>
      <p className="text-lg">
        For further information and to study in the UK, USA, Canada, Australia, New Zealand, Singapore, Ireland, Germany, France, and more, students can reach out to <strong>Edwise International</strong> to explore our comprehensive services.
      </p>
    </section>
  );
}

function ShareSection() {
  return (
     <section className="bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center gap-6 text-lg">
          <span className="font-bold">Share Blog via:</span>
          <SocialIcon href="https://www.instagram.com" color="pink-500" hover="pink-700" />
          <SocialIcon href="https://www.facebook.com" color="blue-600" hover="blue-800" />
          <SocialIcon href="https://www.twitter.com" color="blue-400" hover="blue-600" />
        </div>
      </div>
    </section>
  );
}

// SocialIcon component for sharing links
function SocialIcon({ href, color, hover }: { href: string; color: string; hover: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="transition">
      {href.includes("instagram") && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-8 h-8 fill-${color} hover:fill-${hover} transition`}
          viewBox="0 0 24 24"
        >
          <path d="M7 2C4.79 2 3 3.79 3 6v12c0 2.21 1.79 4 4 4h10c2.21 0 4-1.79 4-4V6c0-2.21-1.79-4-4-4H7zm0 2h10c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-2.5a1 1 0 100 2 1 1 0 000-2z" />
        </svg>
      )}
      {href.includes("facebook") && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-8 h-8 fill-${color} hover:fill-${hover} transition`}
          viewBox="0 0 24 24"
        >
          <path d="M22 12a10 10 0 10-11.5 9.95v-7.05h-2.7V12h2.7V9.7c0-2.7 1.6-4.2 4-4.2 1.1 0 2.3.2 2.3.2v2.5h-1.3c-1.3 0-1.7.8-1.7 1.6V12h2.9l-.5 2.9h-2.4v7.05A10 10 0 0022 12z" />
        </svg>
      )}
      {href.includes("twitter") && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-8 h-8 fill-${color} hover:fill-${hover} transition`}
          viewBox="0 0 24 24"
        >
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
        </svg>
      )}
    </a>
  );
}

function ServicesSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 pb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <ServiceCard
        image="/images/mba-degree-in-australia.png"
        title="MBA Degree in Australia for Indian Students"
        link="/study-ms-bioinformatic/mba-degree"
      />
      <ServiceCard
        image="/images/Cost-of-Studying-in-Australia.png"
        title="Cost of Studying in Australia for Indian Students"
        link="/study-ms-bioinformatic/cast-of-study"
      />
      <ServiceCard
        image="/images/scholarships-to-study-in-australia.png"
        title="Scholarships to Study in Australia for Indian Students"
        link="/study-ms-bioinformatic/scholarships-to-study"
      />
    </section>
  );
}
function ServiceCard({ image, title, link }: { image: string; title: string; link?: string }) {
  return (
    <div className="bg-white rounded-3xl shadow-md hover:shadow-xl transition overflow-hidden">
      <Image src={image} alt={title} width={500} height={300} className="object-cover w-full" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        {link && (
          <Link href={link}>
            <button className="border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white px-4 py-2 rounded-md transition">
              Read More
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}
