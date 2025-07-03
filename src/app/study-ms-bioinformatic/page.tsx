"use client";

import Image from "next/image";
import Link from "next/link";
import NavigationSection from "../_components/navigation1";
import YourJourney from "../_components/study-abroad/your-journey";
import FooterSection from "../_components/footer1";
import FAQ from "../_components/study-abroad/faq";

export default function Page() {
  return (
    <>
      <NavigationSection />
      <main className="bg-white text-gray-900">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-4 py-10">
          <h1 className="text-4xl sm:text-5xl font-bold mb-8">
            Study MS in Bioinformatics in the UK
          </h1>
          <div className="relative w-full h-64 md:h-[400px] rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="/images/bioinformatics-hero.jpg"
              alt="Bioinformatics Hero"
              fill
              className="object-cover"
              priority
            />
          </div>
        </section>

        {/* Intro Section */}
        <section className="max-w-4xl mx-auto px-4 py-10 text-lg leading-relaxed space-y-6">
          <p>
            The UK is home to leading research centers like the European Bioinformatics Institute and the Wellcome Sanger Institute. The bioinformatics market in the UK is growing rapidly, fueled by AI, precision medicine, and genomics innovations such as the 100,000 Genomes Project.
          </p>
          <p>
            A typical{" "}
            <span className="font-semibold">Master's in Bioinformatics in the UK</span> spans 1 year full-time or 2 years part-time, with a focus on genomics, data science, and computational biology.
          </p>
        </section>

        {/* Why Study */}
        <SectionWrapper title="Why Study an MSc Bioinformatics UK">
          <ul className="list-disc space-y-4 text-lg mt-6 ml-5">
            <li><strong>International Acclaim:</strong> Degrees from UK universities are globally respected, boosting career opportunities.</li>
            <li><strong>Multidisciplinary Learning:</strong> Combines biology, statistics, and computer science for diverse job prospects.</li>
            <li><strong>State-of-the-art Research:</strong> Access to top research facilities and partnerships in AI and computational biology.</li>
            <li><strong>Robust Career Opportunities:</strong> High demand in healthcare, biotech, pharma, and academia.</li>
            <li><strong>Industry Linkages:</strong> Internships and projects with leading research organizations and companies in the UK.</li>
          </ul>
        </SectionWrapper>

        {/* Top Universities */}
        <SectionWrapper title="Top Universities for MS in Bioinformatics in UK">
          <p className="text-lg mb-6">
            Some of the <span className="font-semibold">best universities in the UK</span> offering Bioinformatics MS programs include:
          </p>
          <ul className="list-disc ml-5 space-y-3 text-lg">
            <li>University of Oxford</li>
            <li>University of Cambridge</li>
            <li>Imperial College London</li>
            <li>University College London (UCL)</li>
            <li>University of Edinburgh</li>
            <li>University of Manchester</li>
            <li>University of Glasgow</li>
            <li>University of Birmingham</li>
            <li>University of Nottingham</li>
            <li>Queen's University Belfast</li>
          </ul>
        </SectionWrapper>

        {/* Best Programs */}
        <SectionWrapper title="Best Bioinformatics Master's Programs UK">
          <ul className="list-disc ml-5 space-y-3 text-lg">
            <li>MSc in Computational Biology – University of Oxford</li>
            <li>MSc in Bioinformatics – University of Edinburgh</li>
            <li>MSc in Bioinformatics and Theoretical Systems Biology – Imperial College London</li>
            <li>MSc in Bioinformatics and Computational Biology – University of Glasgow</li>
            <li>MSc in Bioinformatics – University College London (UCL)</li>
            <li>MSc in Bioinformatics and Theoretical Systems Biology – King's College London</li>
            <li>MPhil in Computational Biology – University of Cambridge</li>
            <li>MSc in Bioinformatics – University of Southampton</li>
            <li>MSc in Bioinformatics – University of Manchester</li>
            <li>MSc in Bioinformatics and Systems Biology – University of Warwick</li>
          </ul>
        </SectionWrapper>

        {/* Cost */}
        <SectionWrapper title="Cost of Studying MS in Bioinformatics in the UK">
          <p className="text-lg">
            Tuition fees for international students typically range between <strong>£15,000–£30,000</strong> per year. UK and EU students generally pay <strong>£10,000–£20,000</strong> annually. Living costs, depending on location, add another <strong>£12,000–£15,000</strong> yearly. Scholarships, bursaries, and financial aid may be available to help reduce costs.
          </p>
        </SectionWrapper>

        {/* Scholarships */}
        <SectionWrapper title="MS in Bioinformatics Scholarships UK">
          <ul className="list-disc ml-5 space-y-3 text-lg">
            <li>University of Bristol – Think Big Scholarships</li>
            <li>King’s College London – Graduate School Scholarships</li>
            <li>Imperial College London – PhD Scholarships</li>
            <li>Queen Mary University of London – International Scholarships</li>
            <li>London School of Hygiene & Tropical Medicine – LSHTM Scholarships</li>
            <li>University of Manchester – International Excellence Scholarships</li>
            <li>University of Sheffield – Postgraduate Scholarships</li>
            <li>University of Oxford – Clarendon Fund Scholarships</li>
            <li>University of Glasgow – International Leadership Scholarships</li>
            <li>University of Edinburgh – Dean’s International Scholarship</li>
            <li>University of Sussex – Sussex Excellence Scholarships</li>
            <li>University of York – International Scholarships for MSc</li>
            <li>University of Cambridge – Cambridge International Scholarships</li>
            <li>University of Leicester – International Postgraduate Scholarships</li>
            <li>University of Warwick – Warwick International Scholarships</li>
          </ul>
        </SectionWrapper>

        {/* Entry Requirements */}
        <SectionWrapper title="Bioinformatics MSc Requirements UK">
          <ul className="list-disc ml-5 space-y-3 text-lg">
            <li>Minimum 2:1 Bachelor's degree in Bioinformatics, Computer Science, Biology, or related field.</li>
            <li>Experience in programming (Python, R, Java), strong math/stats skills.</li>
            <li>English proficiency (IELTS 6.5–7.0 for non-native speakers).</li>
            <li>Professional experience or internships in bioinformatics is beneficial.</li>
            <li>Strong personal statement outlining motivation and goals.</li>
            <li>Two recommendation letters from instructors or employers.</li>
            <li>Some programs may require interviews or additional evaluation.</li>
            <li>Prior coursework in biology, data analysis, or bioinformatics tools may be required at certain institutions.</li>
          </ul>
        </SectionWrapper>

        {/* Career Opportunities */}
        <SectionWrapper title="Career Opportunities After Bioinformatics MSc UK">
          <ul className="list-disc ml-5 space-y-3 text-lg">
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
            <li>Research Scientist</li>
            <li>Clinical Research Associate (Bioinformatics focus)</li>
            <li>Bioinformatics Consultant</li>
            <li>Healthcare Data Scientist</li>
            <li>Bioinformatics Application Specialist</li>
            <li>Clinical Informatics Specialist</li>
            <li>Bioinformatics Software Developer</li>
            <li>Academic Researcher/Professor</li>
            <li>Bioinformatics Scientist</li>
            <li>Bioinformatics Algorithm Developer</li>
          </ul>
        </SectionWrapper>

        {/* Image */}
        <section className="py-10">
          <div className="max-w-4xl mx-auto px-4">
            <Image
              src="/images/uk-cityscape.jpg"
              alt="UK Cityscape"
              width={1200}
              height={600}
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
        </section>

        {/* FAQs */}
        <FAQ
          faqs={[
            {
              question: "What are the admission deadlines for MSc Bioinformatics UK?",
              answer: "Most universities have deadlines from December to April for September intakes, with some flexibility up to July.",
            },
            {
              question: "Can international students work while studying?",
              answer: "Yes, with a Tier 4 visa, students can work up to 20 hours/week during term and full-time during breaks."
            },
            {
              question: "What research possibilities are available?",
              answer: "Areas include structural bioinformatics, algorithm development, personalized medicine, computational genomics, systems biology, and data mining."
            },
            {
              question: "What core subjects are taught?",
              answer: "Topics typically include Biological Databases, Genomics and Proteomics, Data Mining and Machine Learning, Statistical Methods, and Computational Biology."
            }
          ]}
        />
        {/* Share Section */}
        <ShareSection />
        {/* Services Cards */}
        <section className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
      </main>

      <YourJourney />
      <FooterSection />
    </>
  );
}

// Section Wrapper Component
function SectionWrapper({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-blue-800">{title}</h2>
      {children}
    </section>
  );
}

// Share Section
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

// Service Card
function ServiceCard({ image, title, link }: { image: string; title: string; link?: string }) {
  return (
    <div className="bg-white rounded-3xl shadow-md hover:shadow-lg transition overflow-hidden">
      <Image
        src={image}
        alt={title}
        width={500}
        height={300}
        className="object-cover w-full"
      />
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