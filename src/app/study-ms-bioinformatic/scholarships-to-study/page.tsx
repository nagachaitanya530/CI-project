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
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 sm:mb-12 text-center">
            Scholarships to Study in Australia for Indian Students
          </h1>
          <div className="relative w-full h-54 sm:h-90 rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="/images/scholarships-to-study-in-australia-for-indian-students.jpg"
              alt="Scholarships to Study"
              fill
              className="object-cover"
            />
          </div>
        </section>

        {/* Intro Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6 text-base sm:text-lg leading-relaxed text-gray-800">
          <p>
            Australia, also called the Land Down Under, is a top destination for Indian students seeking higher education, with world-renowned universities and diverse academic programs. However, studying abroad can be expensive, which is where scholarships help ease the cost of education. There are numerous scholarships in Australia for Indian students, ranging from government-funded opportunities to university-specific programs. These scholarships reduce the financial burden and provide access to world-class education.
          </p>
        </section>

        {/* Types of Scholarships */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h2 className="text-3xl font-bold mb-8 text-green-800">
            Types of Scholarships Available in Australia
          </h2>
          <div className="space-y-10 text-base sm:text-lg">
            <div>
              <h3 className="font-semibold mb-4">
                Australia Government Scholarships
              </h3>
              <p>
                The Australian government offers fully funded scholarships like the Australia Awards. This prestigious program covers tuition fees, living expenses, airfare, and health insurance. Another notable program is the Endeavour Postgraduate Scholarship, offering full funding for master’s and doctoral students.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">University Scholarships</h3>
              <p>
                Many Australian universities provide scholarships for international students. For example, the University of Sydney offers the Sydney Scholars Awards for undergraduate students. The University of Melbourne offers the Melbourne International Undergraduate Scholarship, while ANU has the Global Diversity Scholarship for undergraduate and postgraduate students.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">
                Fully Funded Undergraduate Scholarships
              </h3>
              <p>
                Fully funded scholarships cover tuition, living expenses, and travel costs. The Australia Awards Scholarship is a popular choice. The Destination Australia Scholarship encourages study in regional areas, offering full financial support. Charles Darwin University’s Vice-Chancellor’s International High Achievers Scholarship also provides complete funding for exceptional students.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">
                Scholarships for Master’s Degrees
              </h3>
              <p>
                Australia is an excellent choice for postgraduate studies, with scholarships like the Endeavour Postgraduate Scholarship for master’s courses. The University of Queensland offers the UQ Graduate School Scholarship, covering tuition and living expenses for research-based master's and Ph.D. students. Monash University also provides substantial support through its Graduate Scholarship.
              </p>
            </div>
          </div>
        </section>

        {/* Eligibility Criteria */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h2 className="text-3xl font-bold mb-8 text-purple-800">
            Eligibility Criteria for Scholarships in Australia
          </h2>
          <p className="text-base sm:text-lg mb-8">
            Eligibility varies, but common requirements include:
          </p>
          <ol className="list-decimal space-y-4 text-base sm:text-lg pl-6">
            <li>Strong academic performance with minimum GPA or exam scores.</li>
            <li>English proficiency (IELTS or TOEFL scores).</li>
            <li>Financial need for some scholarships.</li>
            <li>Specific courses (e.g., STEM, business) for certain scholarships.</li>
            <li>Additional requirements such as work experience, leadership, volunteer work, and SOPs.</li>
          </ol>
        </section>

        {/* Conclusion */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h2 className="text-3xl font-bold mb-8 text-green-800">Conclusion</h2>
          <p className="text-base sm:text-lg mb-8">
            Australia remains an attractive destination for Indian students thanks to its world-class education system and cultural diversity. With various scholarships available—including fully funded government and university-specific options—students can pursue their dreams without worrying about financing their education. Whether for undergraduate or master’s degrees, there is a scholarship in Australia to make studying abroad more accessible and affordable.
          </p>
        </section>

        {/* FAQs */}
       <FAQ faqs={faqData} />

        {/* Share Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-10 lg:px-30 py-8 ">
          <Image
            src="/images/share-blog-banner.jpg"
            alt="Share Blog Banner"
            width={1000}
            height={400}
            className="w-full rounded-lg shadow-md mb-8"
          />
          <p className="text-base sm:text-lg mb-8">
            For any further assistance or queries, students can reach out to Edwise International and explore our comprehensive range of services for studying in destinations such as the UK, USA, Canada, Australia, New Zealand, Singapore, Ireland, Germany, France, and more.
          </p>
          <div className="flex items-center space-x-6">
            <p className="text-base sm:text-lg font-bold">Share Blog via:</p>
            <SocialIcons />
          </div>
        </section>

        {/* Services Cards */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

// FAQ Data
const faqData = [
  {
    question: "What scholarships are available for Indian students in Australia?",
    answer: "Government-funded options like Australia Awards, Endeavour Scholarships, and many university-specific scholarships."
  },
  {
    question: "Can Indian students get scholarships for undergraduate studies in Australia?",
    answer: "Yes, many scholarships in Australia for Indian students are available, both fully and partially funded."
  },
  {
    question: "Are there fully funded scholarships for Indian students in Australia?",
    answer: "Yes, options like the Australia Awards Scholarships and Endeavour Scholarships cover tuition, living expenses, airfare, and insurance."
  },
  {
    question: "How can I apply for scholarships to study in Australia?",
    answer: "Research scholarships, check eligibility, prepare documents, and apply online before deadlines."
  },
  {
    question: "Are there scholarships for master’s degrees in Australia?",
    answer: "Yes, including the Endeavour Postgraduate Scholarship and many university-specific options."
  },
  {
    question: "Can I apply for scholarships after receiving an admission offer?",
    answer: "Some require an admission offer first, while others can be applied for before or after applying."
  },
  {
    question: "Do Australian universities offer partial scholarships?",
    answer: "Yes, many universities offer partial scholarships covering part of tuition fees for international students."
  }
];

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
        className="object-cover w-full h-48 sm:h-55 md:h-64"
      />
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>
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
};

// SocialIcons Component
const SocialIcons = () => (
  <div className="flex space-x-6">
    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 fill-pink-500 hover:fill-pink-700 transition"
        viewBox="0 0 24 24"
      >
        <path d="M7 2C4.79 2 3 3.79 3 6v12c0 2.21 1.79 4 4 4h10c2.21 0 4-1.79 4-4V6c0-2.21-1.79-4-4-4H7zm0 2h10c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-2.5a1 1 0 100 2 1 1 0 000-2z" />
      </svg>
    </a>
    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 fill-blue-600 hover:fill-blue-800 transition"
        viewBox="0 0 24 24"
      >
        <path d="M22 12a10 10 0 10-11.5 9.95v-7.05h-2.7V12h2.7V9.7c0-2.7 1.6-4.2 4-4.2 1.1 0 2.3.2 2.3.2v2.5h-1.3c-1.3 0-1.7.8-1.7 1.6V12h2.9l-.5 2.9h-2.4v7.05A10 10 0 0022 12z" />
      </svg>
    </a>
    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 fill-blue-400 hover:fill-blue-600 transition"
        viewBox="0 0 24 24"
      >
        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
      </svg>
    </a>
  </div>
);
