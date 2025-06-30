"use client";

import Image from "next/image";
import Link from "next/link";
import NavigationSection from "../_components/navigation1";
import YourJourney from "../_components/study-abroad/your-journey";
import FooterSection from "../_components/footer1";

export default function Page() {
  return (
    <>
      <NavigationSection />
      <main className="bg-white text-gray-900">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-4 py-10 ">
          <h1 className="text-6xl md:text-5xl mb-12">
            Study MS in Bioinformatics in the UK
          </h1>
          <div className="relative w-full h-64 md:h-[400px] rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="/images/bioinformatics-hero.jpg"
              alt="Bioinformatics Hero"
              fill
              className="object-cover"
            />
          </div>
        </section>
        {/* Intro Section */}
        <section className="max-w-4xl mx-auto px-2 py-2 space-y-8 text-lg leading-relaxed text-gray-1500">
          <p>
            With the UK home to key research centers like the European
            Bioinformatics Institute (EMBL-EBI) and the Wellcome Sanger
            Institute, Bioinformatics in the country is a fast-expanding field.
            The bioinformatics market in the UK is anticipated to flourish
            greatly, fueled by innovations in AI, precision medicine, and
            genomics, with the sector assisting in innovations such as the
            100,000 Genomes Project, which helped sequence genomes for rare
            disease and cancer research.
          </p>
          <p>
            Focusing on genomics, data science, and computational biology,
            thereby equipping graduates for roles in healthcare, research, and
            biotech industries,
            <span className="font-bold">
              {" "}
              Bioinformatics Master's in the UK
            </span>{" "}
            generally spans 1 year for a full-time program or 2 years for
            part-time study.
          </p>
        </section>

        {/* Why Study Section */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-3xl md:text-3xl mb-10 text-blue-800">
            Why Study an MSc Bioinformatics UK?
          </h2>
          <p className="text-lg mt-8">
            Studying an{" "}
            <span className="font-bold">MS in Bioinformatics UK</span> is a wise
            decision for the reasons mentioned below:
          </p>
          <ul className="list-disc space-y-6 text-lg mt-10">
            <li>
              <span className="font-bold">International Acclaim:</span> Degrees
              earned from{" "}
              <span className="text-darkblue-600 font-semibold">
                universities in UK
              </span>{" "}
              are well-respected globally, improving employment opportunities.
            </li>
            <li>
              <span className="font-bold">Multidisciplinary Learning:</span>{" "}
              Integrates biology, statistics, and computer science, leading to
              numerous employment opportunities.
            </li>
            <li>
              <span className="font-bold">State-of-the-art Research:</span>{" "}
              Students who{" "}
              <span className="font-semibold">
                study Bioinformatics in the UK
              </span>{" "}
              have access to renowned research facilities and can partner with
              leading professionals in genomics, artificial intelligence, and
              computational biology.
            </li>
            <li>
              <span className="font-bold">Robust Career Opportunities:</span>{" "}
              Bioinformaticians are highly sought-after in healthcare, biotech,
              academia, and pharma.
            </li>
            <li>
              <span className="font-bold">Linkages with Industry:</span>{" "}
              Possibilities for internships and projects with leading research
              organizations and businesses in the UK.
            </li>
          </ul>
        </section>

        {/* Universities Section */}
        <section className="bg-gray-50 py-8">
          <div className="max-w-4xl  mx-auto px-4">
            <h2 className="text-3xl md:text-4xl mb-10 text-blue-800">
              Top Universities for MS in Bioinformatics in UK
            </h2>
            <p className="text-lg mt-8">
              Listed below are the{" "}
              <span className="font-bold">
                best universities for Bioinformatics in the UK
              </span>{" "}
              that offer MS programs:
            </p>
            <ul className="list-disc mt-10 text-lg space-y-6">
              <li>University of Oxford</li>
              <li>University of Cambridge</li>
              <li>Imperial College London</li>
              <li>University College London (UCL)</li>
              <li>University of Edinburgh</li>
              <li>University of Manchester</li>
              <li>University of Glasgow</li>
              <li> University of Birmingham</li>
              <li>University of Nottingham</li>
              <li>Queen's University Belfast</li>
            </ul>
          </div>
        </section>
        {/* Best Bioinformatics Master's Programs Section */}
        <section className="bg-white py-8">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl mb-10 text-blue-800">
              Best Bioinformatics Master's Programs UK
            </h2>
            <p className="text-lg mt-8">
              The best{" "}
              <span className="font-bold">UK Bioinformatics MSc programs</span>{" "}
              are mentioned below:
            </p>
            <ul className="list-disc text-lg mt-10 space-y-6">
              <li>MSc in Computational Biology - University of Oxford</li>
              <li>MSc in Bioinformatics - University of Edinburgh</li>
              <li>
                MSc in Bioinformatics and Theoretical Systems Biology - Imperial
                College London
              </li>
              <li>
                MSc in Bioinformatics and Computational Biology - University of
                Glasgow
              </li>
              <li>MSc in Bioinformatics - University College London (UCL)</li>
              <li>
                MSc in Bioinformatics and Theoretical Systems Biology - King's
                College London
              </li>
              <li>MPhil in Computational Biology - University of Cambridge</li>
              <li>MSc in Bioinformatics - University of Southampton</li>
              <li>MSc in Bioinformatics - University of Manchester</li>
              <li>
                MSc in Bioinformatics and Systems Biology - University of
                Warwick
              </li>
            </ul>
          </div>
        </section>
        {/* Cost of Studying Section */}
        <section className="bg-gray-50 py-8">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl mb-10 text-blue-800">
              Cost of Studying MS in Bioinformatics in the UK
            </h2>
            <p className="text-lg leading-relaxed mt-8">
              Based on the university and program, the{" "}
              <span className="font-bold">
                cost of studying MS in Bioinformatics courses in UK
              </span>{" "}
              differs. Typically, overseas students pay between{" "}
              <span className="font-bold">£15,000–£30,000</span> in tuition
              annually. UK and EU students, on the other hand, are charged lower
              tuition fees, costing between £10,000 and £20,000 per year.
              Moreover, students should set aside money for living expenses,
              which based on the university’s location can add up to
              £12,000–£15,000 annually. In comparison to other regions, major
              cities like London generally have higher living costs. To assist
              in alleviating a portion of these expenses,{" "}
              <span className="text-blue-800 font-bold">scholarships</span>,
              bursaries, and{" "}
              <span className="text-blue-800 font-bold">
                monetary assistance
              </span>{" "}
              may be available.
            </p>
          </div>
        </section>
        {/* Scholarships Section */}
        <section className="bg-white py-8">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl mb-10 text-blue-800">
              MS in Bioinformatics Scholarships UK
            </h2>
            <p className="text-lg mt-8">
              The different{" "}
              <span className="font-bold">Bioinformatics postgraduate UK</span>{" "}
              scholarships are as under:
            </p>
            <ul className="list-disc mt-10 text-lg space-y-6">
              <li>
                University of Bristol – Think Big Undergraduate and Postgraduate
                Scholarships
              </li>
              <li>King’s College London – Graduate School Scholarships</li>
              <li>
                Imperial College London – Imperial College PhD Scholarships
              </li>
              <li>
                Queen Mary University of London – QMUL International
                Scholarships
              </li>
              <li>
                London School of Hygiene & Tropical Medicine – LSHTM
                Scholarships for International Students
              </li>
              <li>
                University of Manchester – International Excellence Scholarships
              </li>
              <li>
                University of Sheffield – Postgraduate Scholarships for
                International Students
              </li>
              <li>University of Oxford – Clarendon Fund Scholarships</li>
              <li>
                University of Glasgow – International Leadership Scholarships
              </li>
              <li>
                University of Edinburgh - Dean’s International Scholarship
              </li>
              <li>University of Sussex - Sussex Excellence Scholarships</li>
              <li>
                University of York - International Scholarships for MSc Programs
              </li>
              <li>
                University of Cambridge - Cambridge International Scholarships
              </li>
              <li>
                University of Leicester - International Postgraduate
                Scholarships
              </li>
              <li>
                University of Warwick - Warwick International Scholarships
              </li>
            </ul>
          </div>
        </section>
        {/* Entry Requirements Section */}
        <section className="bg-gray-50 py-8">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl mb-10 text-blue-800">
              Bioinformatics MSc Requirements UK
            </h2>
            <p className="text-lg mt-8">
              The typical{" "}
              <span className="font-bold">
                entry requirements for MS in Bioinformatics UK
              </span>{" "}
              are:
            </p>
            <ul className="list-disc mt-10 text-lg space-y-6">
              <li>
                The student needs to have secured a minimum 2:1 Bachelor’s
                degree (or comparable) in a pertinent domain (e.g.,
                Bioinformatics, Computer Science, Biology, Mathematics).
              </li>
              <li>
                Expertise in programming languages (e.g., Python, R, Java) and a
                solid foundation in math/statistics and computational skills.
              </li>
              <li>
                Non-native English speakers must prove proficiency via tests
                like <span className="font-bold text-blue-800">IELTS</span>{" "}
                (usually 6.5–7.0).
              </li>
              <li>
                Professional experience or internships in bioinformatics or
                computational biology is advantageous.
              </li>
              <li>
                A well-written personal statement showcasing motivation and
                career goals.
              </li>
              <li>
                Submission of 2 recommendation letters from instructors or
                employers.
              </li>
              <li>
                Some programs may require an interview or further evaluation.
              </li>
              <li>
                Certain universities may also ask for prior coursework in
                biology, data analysis, or bioinformatics tools,may apply to
                certain institutions.
              </li>
            </ul>
          </div>
        </section>
        {/* Career Opportunities Section */}
        <section className="bg-white py-8">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl mb-10 text-blue-800">
              Career Opportunities After Bioinformatics MSc UK
            </h2>
            <p className="text-lg mt-8">
              The post{" "}
              <span className="font-bold">
                MS Bioinformatics job opportunities UK
              </span>{" "}
              are listed below:
            </p>
            <ul className="list-disc mt-10 text-lg space-y-6">
              <li>Drug Discovery Scientist</li>
              <li>Genomics Analyst</li>
              <li>Systems Biologist</li>
              <li>Laboratory Information Systems Manager</li>
              <li>Proteomics Specialist</li>
              <li>Computational Biologist</li>
              <li>Biotechnology Entrepreneur</li>
              <li>Medical Data Analyst</li>
              <li>Health Informatics Manager</li>
              <li>Biostatistician</li>
              <li>Research Scientist (Biomedical/Pharmaceutical)</li>
              <li>Clinical Research Associate (Bioinformatics focus)</li>
              <li>Bioinformatics Consultant</li>
              <li>Data Scientist in Healthcare</li>
              <li>Bioinformatics Application Specialist</li>
              <li>Clinical Informatics Specialist</li>
              <li>Bioinformatics Software Developer</li>
              <li>Academic Researcher/Professor</li>
              <li>Bioinformatics Scientist</li>
              <li>Bioinformatics Algorithm Developer</li>
            </ul>
          </div>
        </section>
        {/* Image */}
        <section className="rounded-6xl overflow-hidden shadow py-8">
          <div className="max-w-4xl rounded-4xl mx-auto px-4">
            <Image
              src="/images/uk-cityscape.jpg"
              alt="UK Cityscape"
              width={400}
              height={150}
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </section>
        {/* FAQs Section */}
        <section className="bg-white py-8">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl mb-10 text-blue-800">
              FAQs – MS in Bioinformatics in UK
            </h2>
            <div className="space-y-10 text-lg">
              <div>
                <h3 className="font-semibold text-xl mb-10">
                  What are the admission deadlines for MSc Bioinformatics UK?
                </h3>
                <p>
                  Based on the university,{" "}
                  <strong>
                    MS in Bioinformatics UK admissions often range from January
                    to July
                  </strong>
                  , with most deadlines between December and April for a
                  September intake.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-1">
                  Can international students work while studying an MS in
                  Bioinformatics UK?
                </h3>
                <p>
                  Yes, students on a valid Tier 4 visa can work up to 20
                  hours/week during term and full-time during holidays.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-1">
                  What types of research possibilities are available during an
                  MSc Bioinformatics UK?
                </h3>
                <p>
                  Research opportunities include structural bioinformatics,
                  algorithm development, personalized medicine, computational
                  genomics, systems biology, and data mining.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-1">
                  What are the core subjects taught in an MSc Bioinformatics UK?
                </h3>
                <p>
                  The core subjects taught in an MS in Bioinformatics UK
                  typically include: Biological Databases, Genomics and
                  Proteomics, Data Mining and Machine Learning, Statistical
                  Methods in Bioinformatics, and Computational Biology.
                </p>
              </div>
            </div>
            <div className="flex space-x-10 mt-10">
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
