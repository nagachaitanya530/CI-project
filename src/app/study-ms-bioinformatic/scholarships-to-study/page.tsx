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
            Scholarships to Study in Australia for Indian Students
          </h1>
          <div className="relative w-full h-64 md:h-[400px] rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="/images/scholarships-to-study-in-australia-for-indian-students.jpg"
              alt="scholarships-to-Study"
              fill
              className="object-cover"
            />
          </div>
        </section>
        {/* Intro Section */}
        <section className="max-w-4xl mx-auto px-2 py-2 space-y-8 text-lg leading-relaxed text-gray-1500">
          <p>
            Australia, also lovingly called as the Land Down Under, is a top
            destination for Indian students seeking higher education, with its
            world-renowned universities and diverse academic programs. However,
            studying abroad can be expensive, which is where scholarships come
            in helping to ease the cost of education. There is numerous
            scholarship in Australia for Indian students, ranging from
            government-funded opportunities to university-specific programs.
            These scholarships help ease the financial burden of the
            international students studying in Australia and provide access to
            world-class education.
          </p>
        </section>

        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-3xl md:text-3xl mb-10 text-green-800">
            Types of Scholarships Available in Australia
          </h2>
          <div className="space-y-10 text-lg">
            <div>
              <h3 className="font-semibold mb-10">
                Australia Government Scholarships
              </h3>
              <p>
                The Australian government offers several fully funded
                scholarships for Indian students through programs such as the
                Australia Awards. This prestigious scholarship covers tuition
                fees, living expenses, airfare, and health insurance. Another
                notable program is the Endeavour Postgraduate Scholarship, which
                offers full funding for master’s and doctoral students.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-10">University Scholarships</h3>
              <p>
                Many Australian universities provide scholarships to attract
                international students. For example, the University of Sydney
                offers the Sydney Scholars Awards, a competitive scholarship for
                undergraduate students that helps cover partial tuition fees.
                The University of Melbourne offers the Melbourne International
                Undergraduate Scholarship, which is a partial fee remission for
                international students pursuing undergraduate programs.
                Australian National University (ANU) offers the Global Diversity
                Scholarship, providing substantial financial assistance for both
                undergraduate and postgraduate students.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-10">
                Fully Funded Undergraduate Scholarships for International
                Students
              </h3>
              <p>
                Fully funded scholarships are also available that cover tuition,
                living expenses, and travel costs. The Australia Awards
                Scholarship is one of the most popular choices. Additionally,
                the Destination Australia Scholarship encourages students to
                study in regional areas of Australia, offering full financial
                support. The Charles Darwin University Vice-Chancellor’s
                International High Achievers Scholarship also provides complete
                funding for students with exceptional academic standing.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-10">
                Scholarships for Master’s Degree in Australia
              </h3>
              <p>
                Australia is a great destination for postgraduate studies, and
                several scholarships are available for Indian students seeking
                master’s degrees. The Endeavour Postgraduate Scholarship,
                mentioned earlier, is available for students pursuing
                postgraduate courses. The University of Queensland offers the UQ
                Graduate School Scholarship, which covers tuition fees and
                living expenses for research-based master's and Ph.D. students.
              </p>
              <p>
                Monash University also offers the Graduate Scholarship, which
                provides substantial financial support for international
                students pursuing master’s programs.
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-3xl md:text-3xl mb-10 text-purple-800">
            Eligibility Criteria for Scholarships in Australia
          </h2>
          <p className="text-lg mb-10">
            Eligibility for Australia scholarships for international students
            varies, but common requirements include:
          </p>
          <ol className="list-decimal space-y-5 text-lg">
            <li>
              Academic Performance: Strong grades and academic achievements are
              often required, with minimum GPA or exam score thresholds.
            </li>
            <li>
              English Proficiency:Most scholarships require proof of English
              language skills, typically through IELTS or TOEFL.
            </li>
            <li>
              Financial Need: Some scholarships assess financial background to
              offer need-based assistance.
            </li>
            <li>
              Course:Certain scholarships are available only for specific fields
              (e.g., STEM, business).
            </li>
            <li>
              Additional Requirements:These can include work experience,
              leadership roles, volunteer work, and statements of purpose
              (SOPs).
            </li>
          </ol>
        </section>

        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-3xl md:text-3xl mb-10 text-green-800">
            Conclusion
          </h2>
          <p className="text-lg mb-10">
            Australia continues to be an attractive destination for Indian
            students, thanks to its world-class education system and cultural
            diversity. With the wide array of scholarships in Australia
            available, including fully funded government and university-specific
            scholarships, Indian students can pursue their dreams without
            worrying about financing their international education. Whether
            you’re applying for an undergraduate or master’s degree, there is a
            scholarship in Australia that can make your study abroad journey
            more accessible and financially manageable.
          </p>
        </section>

        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-3xl md:text-3xl mb-10 text-blue-800">FAQs</h2>
          <div className="space-y-10 text-lg">
            <div>
              <p className="font-semibold mb-10">
                What scholarships are available for Indian students in
                Australia?
              </p>
              <p>
                Indian students can apply for government-funded scholarships
                like the Australia Awards, Endeavour Postgraduate Scholarships,
                and various university-specific scholarships.
              </p>
            </div>
            <div>
              <p className="font-semibold mb-10">
                Can Indian students get scholarships for undergraduate studies
                in Australia?
              </p>
              <p>
                Yes, there are many scholarships in Australia for Indian
                students which may be fully funded or partially funded for
                students pursuing undergraduate programs.
              </p>
            </div>
            <div>
              <p className="font-semibold mb-10">
                Are there fully funded scholarships for Indian students in
                Australia?
              </p>
              <p>
                Yes, there are fully funded scholarships available for Indian
                students, covering tuition, living expenses, airfare, and health
                insurance. Some examples include the Australia Awards
                Scholarships and the Endeavour Scholarships and Fellowships.
              </p>
            </div>
            <div>
              <p className="font-semibold mb-10">
                How can I apply for scholarships to study in Australia?
              </p>
              <p>
                Students should research available scholarships, check
                eligibility, prepare required documents, and submit their
                application online at the respective portals before the
                deadline.
              </p>
            </div>
            <div>
              <p className="font-semibold mb-10">
                Are there scholarships for master’s degrees in Australia?
              </p>
              <p>
                Yes, there are several scholarships for master’s degree
                students, including the Endeavour Postgraduate Scholarship and
                university-specific options.
              </p>
            </div>
            <div>
              <p className="font-semibold mb-10">
                Can I apply for scholarships after receiving an admission offer?
              </p>
              <p>
                Some Australian university scholarships require you to have an
                offer of admission, while others can be applied for before or
                after applying to universities.
              </p>
            </div>
            <div>
              <p className="font-semibold mb-10">
                Do Australian universities offer partial scholarships to study
                in Australia?
              </p>
              <p>
                Yes, many universities in Australia offer partial scholarships
                that cover a portion of tuition fees for international students.
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 py-8">
          <img
            src="/images/share-blog-banner.jpg"
            alt="Share Blog Banner"
            className="w-full rounded-lg shadow-lg mb-15"
          />
          <p className="text-lg mb-10">
            For any further assistance or queries, students can reach out to
            Edwise International and explore our comprehensive range of services
            for studying in top destinations such as study in UK, study in USA,
            study in Canada, study in Australia, study in New Zealand, study in
            Singapore, study in Ireland, study in Germany, study in France and
            many more.
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
