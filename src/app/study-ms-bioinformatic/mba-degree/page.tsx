"use client";

import Image from "next/image";
import Link from "next/link";
import NavigationSection from "~/app/_components/navigation1";
import YourJourney from "~/app/_components/study-abroad/your-journey";
import FooterSection from "~/app/_components/footer1";

export default function Page() {
  return (
    <>
      <NavigationSection />
      <main className="bg-white text-gray-900">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-4 py-10 ">
          <h1 className="text-6xl md:text-5xl mb-12">
            MBA Degree in Australia for Indian Students
          </h1>
          <div className="relative w-full h-64 md:h-[400px] rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="/images/mba-degree-in-australia-for-indian-students.png"
              alt="Bioinformatics Hero"
              fill
              className="object-cover"
            />
          </div>
        </section>
        {/* Intro Section */}
        <section className="max-w-4xl mx-auto px-2 py-2 space-y-10 text-lg leading-relaxed text-gray-1500">
          <p>
            Australia, well-known for its top-tier universities, beautiful
            scenery, and varied cultures is a highly sought-after
            <span className="font-bold"> study abroad</span> destination. The
            country offers a distinctive blend of academic prowess and lifestyle
            appeal to overseas students, owing to its first-rate educational
            standards, bustling cities viz., Melbourne and Sydney, and
            possibilities for outdoor pursuits.
          </p>
          <p>
            Based on whether its pursued full-time or part-time, an
            <span className="font-bold"> MBA in Australia</span> generally takes
            1-2 years to complete. An in-depth business education is offered in
            these programs, providing students with vital abilities in finance,
            strategy, management, and marketing, while also offering
            possibilities for networking in the dynamic business community of
            Australia.
          </p>
        </section>
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-3xl md:text-3xl mb-10 text-blue-800">
            Why Study an MBA Degree in Australia?
          </h2>
          <p className="text-lg mb-10">
            Pursuing an MBA in Australia can be a wise decision for the reasons
            mentioned below:
          </p>
          <ul className=" space-y-6 text-lg">
            <li>
              <span className="font-bold">Top-notch Instruction:</span> MBA
              colleges in Australia are renowned for their high academic
              standards, ensuring a valuable learning experience.
            </li>
            <li>
              <span className="font-bold">International Acclamation:</span> MBA
              degrees from Australia are internationally recognized, enhancing
              employment opportunities and providing access to global job
              markets.
            </li>
            <li>
              <span className="font-bold">
                Creative Methods of Instruction:
              </span>{" "}
              Many MBA programs in Australia include practical projects, case
              studies, and hands-on simulations that promote critical thinking
              and problem-solving abilities.
            </li>
            <li>
              <span className="font-bold">Stunning Atmosphere:</span> The
              country is famous for its breathtaking natural scenery and vibrant
              cities, offering an outstanding standard of living alongside
              academic pursuits.
            </li>
            <li>
              <span className="font-bold">Cultural Variations:</span> As a
              melting pot of cultures, Australia offers a diverse and rewarding
              environment for students to build connections, collaborate, and
              learn from peers with varied backgrounds.
            </li>
            <li>
              <span className="font-bold">Fluency in English:</span> Studying in
              an English-speaking country helps students improve their language
              skills—a valuable asset in today’s global job market.
            </li>
            <li>
              <span className="font-bold">Possibilities for Networking:</span>{" "}
              Universities in Australia often maintain strong industry
              connections, offering numerous networking opportunities and
              potential internships or job placements.
            </li>
            <li>
              <span className="font-bold">Students’ Work Rights:</span>{" "}
              International students in Australia are typically allowed to work
              part-time during studies, helping them earn extra income and gain
              relevant work experience.
            </li>
            <li>
              <span className="font-bold">Robust Economy:</span> Australia
              boasts a strong and growing economy, with thriving sectors in
              technology, healthcare, and finance, offering many job
              opportunities after graduation.
            </li>
            <li>
              <span className="font-bold">Route to Permanent Residency:</span>{" "}
              Australia offers various pathways for skilled migrants, and
              earning an MBA can be a step toward permanent residency or even
              citizenship.
            </li>
          </ul>
        </section>

        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-3xl md:text-3xl mb-10 text-blue-800">
            Best MBA Courses in Australia
          </h2>
          <p className="text-lg mb-10">
            Listed below are the best MBA in Australia courses:
          </p>
          <ul className=" space-y-6 text-lg ">
            <li>MBA in Health Management</li>
            <li>MBA in International Business</li>
            <li>MBA in Human Resource Management</li>
            <li>MBA in Leadership and Strategy</li>
            <li>MBA in Supply Chain Management</li>
            <li>MBA in Marketing</li>
            <li>MBA in Technology and Innovation</li>
            <li>MBA in Finance</li>
            <li>MBA in Entrepreneurship</li>
            <li>MBA in Digital Transformation</li>
          </ul>
        </section>

        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-3xl md:text-3xl mb-10 text-blue-800">
            Best Universities for MBA in Australia
          </h2>
          <p className="text-lg mb-10">
            Listed below are the best MBA universities in Australia:
          </p>
          <ul className="space-y-6 text-lg">
            <li>Australian National University (ANU)</li>
            <li>University of New South Wales (AGSM)</li>
            <li>University of Western Australia (UWA Business School)</li>
            <li>University of Sydney Business School</li>
            <li>University of Queensland (UQ Business School)</li>
            <li>University of Melbourne (Melbourne Business School)</li>
            <li>Monash University</li>
            <li>Deakin University (Deakin Business School)</li>
            <li>Macquarie University (Macquarie Business School)</li>
            <li>University of Technology Sydney (UTS Business School)</li>
          </ul>
        </section>
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-3xl md:text-3xl mb-10 text-blue-800">
            What's the Cost of Pursuing an MBA in Australia?
          </h2>
          <p className="text-lg">
            Based on the university, location, length of the program, and
            whether it is pursued full-time or part-time, the cost of an MBA in
            Australia can differ substantially. Typically, tuition fees for MBA
            programs in Australia range between{" "}
            <span className="font-bold">AUD 30,000–AUD 100,000</span> or higher
            for the entire course. Students also need to consider other expenses
            such as textbooks, living costs, housing, and personal spending. To
            help reduce these costs, there may be{" "}
            <span className="font-bold">
              bursaries, scholarships, and financial assistance
            </span>{" "}
            opportunities available. For precise cost estimates for specific MBA
            programs they plan to apply to, students should conduct thorough
            research and contact universities directly .
          </p>
        </section>
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-3xl md:text-3xl mb-10 text-blue-800">
            Eligibility Criteria to Pursue an MBA in Australia
          </h2>
          <p className="text-lg mb-10">
            <span className="font-bold">
            An MBA in Australia for Indian students </span>{" "}
            requires fulfilling the
            following entry prerequisites:
          </p>
          <ul className=" space-y-5 text-lg">
            <li>
              The student needs to hold a{" "}
              <span className="font-bold">Bachelor’s degree or equivalent</span>{" "}
              from an accredited university.
            </li>
            <li>
              Some MBA colleges in Australia may require{" "}
              <span className="font-bold">GRE or GMAT test scores</span> as part
              of the application. This may be waived based on professional
              experience or other qualifications.
            </li>
            <li>
              Since English is the primary language of instruction, overseas
              students must{" "}
              <span className="font-bold">demonstrate English proficiency</span>{" "}
              by taking tests such as the TOEFL or IELTS.
            </li>
            <li>
              Many MBA programs in Australia demand{" "}
              <span className="font-bold">
                at least 2–5 years of work experience
              </span>
              .
            </li>
            <li>
              A well-drafted{" "}
              <span className="font-bold">Statement of Purpose (SOP)</span>{" "}
              explaining the student’s rationale for pursuing an MBA and their
              professional goals is required by most programs.
            </li>
            <li>
              Submission of{" "}
              <span className="font-bold">recommendation letters</span> from
              professors or managers.
            </li>
            <li>
              Some universities conduct{" "}
              <span className="font-bold">interviews</span> to evaluate the
              student’s suitability for the program as part of the selection
              process.
            </li>
            <li>
              Overseas students must meet{" "}
              <span className="font-bold">Australian visa requirements</span>,
              including providing proof of funds and medical insurance coverage.
            </li>
          </ul>
        </section>
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-3xl md:text-3xl mb-10 text-blue-800">
            Job Opportunities after Completing an MBA in Australia
          </h2>
          <p className="text-lg mb-10">
            Post completing an MBA in Australia, students can opt for the
            following jobs:
          </p>
          <ul className=" space-y-5 text-lg">
            <li>Project Manager</li>
            <li>Entrepreneur</li>
            <li>Financial Analyst</li>
            <li>Supply Chain Manager</li>
            <li>Management Consultant</li>
            <li>Business Development Manager</li>
            <li>Investment Banker</li>
            <li>Operations Manager</li>
            <li>Human Resources Manager</li>
            <li>Marketing Manager</li>
          </ul>
        </section>
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-3xl md:text-3xl mb-10 text-blue-800">FAQs</h2>
          <div className="space-y-10 text-lg">
            <div>
              <p className="font-semibold mb-10">
                What’s the cost of pursuing a 1 year MBA program in Australia?
              </p>
              <p>
                With tuition fees ranging between{" "}
                <span className="font-bold">AUD 21,800–AUD 106,650</span>{" "}
                annually and living costs between{" "}
                <span className="font-bold">AUD 18,000–AUD 46,080</span> per
                year, the cost of pursuing a 1-year MBA in Australia varies from
                university to university.
              </p>
            </div>
            <div>
              <p className="font-semibold mb-10">
                Which universities in Australia offer affordable MBA programs?
              </p>
              <p>
                Several universities offer affordable MBA programs in Australia,
                including{" "}
                <span className="font-bold">
                  Charles Darwin University, Kaplan Business School, Victoria
                  University, Edith Cowan University, Central Queensland
                  University
                </span>
                , and <span className="font-bold">Holmes Institute</span>.
              </p>
            </div>
            <div>
              <p className="font-semibold mb-10">
                Which are the popular business schools in Australia?
              </p>
              <p>
                Some of the popular business schools in Australia include{" "}
                <span className="font-bold">
                  Melbourne Business School, ANU College of Business and
                  Economics, Monash Business School, UNSW Business School
                </span>
                , and <span className="font-bold">UQ Business School</span>.
              </p>
            </div>
          </div>
        </section>
        <section className="max-w-4xl mx-auto px-4 py-8">
          <div className="mb-15">
            <img
              src="/images/mba-degree-in-australia-for-indian-students-2.jpg"
              alt="Study Abroad with Edwise International"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <p className="text-lg">
            For any further information and to{" "}
            <span className="font-bold">
              study in UK, study in USA, study in Canada, study in Australia,
              study in New Zealand, study in Singapore, study in Ireland, study
              in Germany, study in France
            </span>
            , and many more, students can reach out to{" "}
            <span className="font-bold">Edwise International</span> and explore
            our comprehensive range of services.
          </p>
          <div className="flex space-x-6 mt-10">
            <p className="text-lg font-bold">Share Blog via :</p>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 fill-pink-500 hover:fill-pink-700 transition"
                viewBox="0 0 24 24"
              >
                <path d="M7 2C4.79 2 3 3.79 3 6v12c0 2.21 1.79 4 4 4h10c2.21 0 4-1.79 4-4V6c0-2.21-1.79-4-4-4H7zm0 2h10c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-2.5a1 1 0 100 2 1 1 0 000-2z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 fill-blue-600 hover:fill-blue-800 transition"
                viewBox="0 0 24 24"
              >
                <path d="M22 12a10 10 0 10-11.5 9.95v-7.05h-2.7V12h2.7V9.7c0-2.7 1.6-4.2 4-4.2 1.1 0 2.3.2 2.3.2v2.5h-1.3c-1.3 0-1.7.8-1.7 1.6V12h2.9l-.5 2.9h-2.4v7.05A10 10 0 0022 12z" />
              </svg>
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 fill-blue-400 hover:fill-blue-600 transition"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
          </div>
        </section>

        {/* Services Cards */}
        <section className="max-w-6xl mx-auto px-6 pb-10">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
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
          </div>
        </section>
      </main>
      <YourJourney />
      <FooterSection />
    </>
  );
}
// ServiceCard Component
type ServiceCardProps = {
  image: string;
  title: string;
  link?: string;
};

const ServiceCard = ({ image, title, link }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-3xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
      <Image
        src={image}
        alt={title}
        width={500}
        height={300}
        className="object-cover w-full h-80"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        {link ? (
          <Link href={link}>
            <button className="border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white px-4 py-2 rounded-md transition">
              Read More
            </button>
          </Link>
        ) : null}
      </div>
    </div>
  );
};
