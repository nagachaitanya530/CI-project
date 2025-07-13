import Navigation from "../_components/Navigation";
import Footer from "../_components/footer1";
import Image from "next/image";
import { MessageCircle, PhoneCall, Mail } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  img?: string;
}

interface Brand {
  name: string;
  logo: string;
}

interface Location {
  name: string;
  address: string;
}

const teamMembers: TeamMember[] = [
  { name: "John Doe", role: "Executive Director", img: "/images/team/john_doe.png" },
  { name: "Jane Smith", role: "Director Of Training", img: "/images/team/jane_smith.png" },
  { name: "Alex Brown", role: "Training Lead", img: "/images/team/alex_brown.png" },
  { name: "Emily Davis", role: "Director - Public Relations", img: "/images/team/emily_davis.png" },
];

const brands: Brand[] = [
  { name: "Airtel", logo: "/images/airtel.png" },
  { name: "Wipro", logo: "/images/wipro.png" },
  { name: "Genpact", logo: "/images/genpact.png" },
  { name: "Vi", logo: "/images/vi.png" },
  { name: "Tata", logo: "/images/tata.png" },
];

const locations: Location[] = [
  {
    name: "NIL EDUTECH (P) LIMITED",
    address: "203, 2nd Floor, Ackruti Star, MIDC Central Road, Andheri (East), Mumbai - 400093",
  },
  {
    name: "NIL EDUTECH (P) LIMITED",
    address: "#592, 3rd Block, Koramangala, Bengaluru, Karnataka - 560034",
  },
  {
    name: "NIL EDUTECH (P) LIMITED",
    address: "Basant Tower, Sneh Nagar, Near Singar Nagar Metro, Lucknow - 226005",
  },
];

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-light">
              And our skills make us <span className="font-bold text-indigo-600">different</span>
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Coaching Institute, CI Academy, and CI Technologies are units of CI Edutech (P) Limited,
              reinventing e-learning for students, especially in South-East Asia. Our goal is to develop
              skills using technology and qualified educators, creating a unique educational culture in Asia.
            </p>
          </div>
          <Image
            src="/images/our_skills_team.png"
            alt="Team showing skills at NIL"
            width={800}
            height={400}
            className="rounded-xl w-full h-auto"
            priority
          />
        </section>

      
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <Image
            src="/images/ci_culture.png"
            alt="Work culture at CI"
            width={800}
            height={400}
            className="rounded-xl w-full h-auto"
          />
          <div className="space-y-4">
            <h4 className="uppercase text-sm font-semibold text-gray-500 tracking-wide">
              We are a proud team
            </h4>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">The culture</h2>
            <p className="text-gray-600 leading-relaxed">
              CI fosters a culture of excellence, training employees to perform at their best. Our
              feedback-improvement system ensures quality delivery, benefiting students with certified
              faculty and structured implementation.
            </p>
          </div>
        </section>

        <section className="text-center py-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-8">
            We conducted trainings for
            <br />
            <span className="text-indigo-600">national and international brands</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-8 sm:gap-12">
            {brands.map((brand) => (
              <Image
                key={brand.name}
                src={brand.logo}
                alt={`${brand.name} logo`}
                width={120}
                height={120}
                className="shadow-md rounded-md hover:scale-105 transition-transform duration-300"
              />
            ))}
          </div>
        </section>

        <section className="bg-white py-16 px-4 rounded-lg shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            <h1 className="text-3xl sm:text-5xl font-light text-gray-900">
              We have a <br />
              genius <span className="font-bold text-indigo-600">team</span>
            </h1>
            <div className="text-gray-600 space-y-4">
              <p>
                Organizations thrive with committed, innovative people delivering value to both the
                company and its clients — <strong>That’s You.</strong>
              </p>
              <p>
                Our team is driven by elevating online education to its rightful place in the modern world.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <Image
              src="/images/core_team_banner.png"
              alt="Core Team Banner"
              width={1200}
              height={300}
              className="w-full max-w-4xl h-auto object-contain mb-8 rounded-lg"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <Image
                    src={member.img || "/images/default_profile.png"}
                    alt={`Photo of ${member.name}`}
                    width={128}
                    height={128}
                    className="rounded-full w-32 h-32 object-cover mb-3 border-4 border-indigo-500"
                  />
                  <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-indigo-600 text-sm font-medium">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative bg-indigo-600 py-16 text-white overflow-hidden">
          <svg
            className="absolute top-0 w-full h-32"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#fff"
              fillOpacity="1"
              d="M0,192L60,181.3C120,171,240,149,360,160C480,171,600,213,720,213.3C840,213,960,171,1080,160C1200,149,1320,171,1380,181.3L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
            ></path>
          </svg>
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <Image
              src="/images/ci logo.png"
              alt="NIL Logo"
              width={120}
              height={120}
              className="mx-auto mb-6 rounded-full"
            />
            <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
              Awards and <span className="font-bold">Achievements</span>
            </h2>
            <div className="bg-white text-gray-700 p-6 rounded-lg shadow-lg">
              <Image
                src="/images/dileep_padgaonkar.jpg"
                alt="Dileep Padgaonkar"
                width={120}
                height={120}
                className="mx-auto rounded-full mb-4"
              />
              <blockquote className="text-md italic mb-4">
                "CI has introduced a fresh and innovative vocational education concept in India — a system
                that promotes employable skills. Online education is the future, and we need more players
                like CI."
              </blockquote>
              <p className="text-indigo-600 font-bold">Dileep Padgaonkar</p>
              <Image
                src="/images/times_of_india.png"
                alt="The Times of India"
                width={160}
                height={60}
                className="mx-auto mt-4"
              />
            </div>
          </div>
        </section>

        <section className="py-12 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <Image
              src="/images/trophy.png"
              alt="Award Trophy"
              width={120}
              height={180}
              className="mx-auto mb-6"
            />
            <p className="text-gray-600 mb-4">
              For exceptional innovation in vocational training, GENE awarded NIL the Best Indian
              Educator Trophy.
            </p>
            <p className="text-gray-600 mb-6">A prestigious honor in the vocational training industry.</p>
            <h3 className="text-xl font-bold text-indigo-600 mb-4">GENE Award</h3>
            <Image
              src="/images/gene_award.png"
              alt="GENE Global Education Innovation Award"
              width={140}
              height={80}
              className="mx-auto"
            />
          </div>
        </section>

        <section className="py-12">
          <Image
            src="/images/online_students.png"
            alt="Illustration of online students"
            width={800}
            height={500}
            className="mx-auto rounded-lg"
          />
        </section>

        <section className="py-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8">
            Student Support Channels
          </h2>
          <Image
            src="/images/student_support.png"
            alt="Student Support Illustration"
            width={800}
            height={500}
            className="mx-auto rounded-lg"
          />
        </section>

        <section className="py-12">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-gray-800">WhatsApp</h3>
              <p className="text-gray-600 text-sm">Available 24x7, 365 days a year</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <PhoneCall className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-gray-800">Call Support</h3>
              <p className="text-gray-600 text-sm">Mon-Sat, 8:00 AM - 11:00 PM (Indian Time)</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-indigo-500 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-gray-800">E-mail Support</h3>
              <p className="text-gray-600 text-sm">Mon-Sat, 8:00 AM - 11:00 PM (Indian Time)</p>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-12">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            {locations.map((location, idx) => (
              <div key={idx} className="text-center">
                <h3 className="font-semibold text-gray-700 mb-2">{location.name}</h3>
                <address className="not-italic text-gray-600 text-sm">{location.address}</address>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}