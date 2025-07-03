"use client";
import { CheckCircle, PhoneCall } from "lucide-react";
import Footer from "../_components/Footer";
import Navigation from "../_components/Navigation";
import { useEffect, useState } from "react";
const rotatingWords = ["solution", "result", "service"];
function IeltsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % rotatingWords.length);
    }, 2500); 
    return () => clearInterval(interval);
  }, []);
  const [activeTab, setActiveTab] = useState(1);
  const steps = [
    {
      number: "01",
      title: "Choose a course",
      description:
        "Talk to our advisors choose the best course for your individual needs.",
    },
    {
      number: "02",
      title: "Fee payment",
      description:
        "Make the payment through credit/debit card/net banking/UPI/Paypal etc.",
    },
    {
      number: "03",
      title: "Confirmation",
      description:
        "You will get a confirmation and instructions on your mail and through text.",
    },
    {
      number: "04",
      title: "Start Preparing",
      description:
        "Start your classes on your scheduled time and be ready for success.",
    },
  ];
  const features = [
    {
      title: "Personal Online Guidance",
      text: `Understand the Techniques from the best IELTS trainers in India and achieve your desired band. “CI” provides one-to-one/group training sessions on our own specialized portal instead of any other apps like Hangout or Zoom.`,
    },
    {
      title: "24×7 Assistance available, Anywhere",
      text: `CI believes in Flexibility and quality learning & it is possible with our experienced trainers. Take our free trial interacting with trainers.`,
    },
    {
      title: "Well Organised Study Methods",
      text: `Candidates are trained based upon their Plus and Minus Points through the regular evaluation. You will be guided according to CEFR standards which is the international scale of language proficiency.`,
    },
    {
      title: "Extensive Mock Test Series",
      text: `More than 100 mock tests are conducted to look after every module for extensive practice.`,
    },
  ];
  const titleWords = "Most Popular Group Courses".split(" ");
  interface CardProps {
    image: string;
    title: string;
    description: string;
    badge?: string;
  }

  function Card({ image, title, description, badge }: CardProps) {
    return (
      <div className="bg-white rounded-2xl shadow-md overflow-hidden">
        <div className="relative">
          <img src={image} alt={title} className="w-full h-48 object-cover" />
          {badge && (
            <span className="absolute top-2 right-2 bg-red-400 text-white text-xs px-2 py-1 rounded-full">
              {badge}
            </span>
          )}
        </div>
        <div className="p-4">
          <div className="font-bold text-lg mb-1">{title}</div>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    );
  }


  const tabs = [
    {
      id: 1,
      title: "IELTS Listening",
      content: (
        <div>
          <p>
            The <a href="https://nationalinstituteoflanguage.in/">IELTS listening test</a> will take
            about 30 minutes, and you will have an extra 10 minutes to transfer your answers to the
            answer sheet.
          </p>
          <p>
            You will listen to four recorded texts, monologues and conversations by a range of
            native speakers, and write their answers to a series of questions.
          </p>
        </div>
      ),
    },
    {
      id: 2,
      title: "IELTS Reading",
      content: (
        <div>
          <p>
            The <a href="https://nationalinstituteoflanguage.in/">IELTS reading test</a> will take
            about 60 minutes. It consists of 40 questions.
          </p>
          <p>
            The Academic test includes long texts from descriptive to analytical. The General test
            includes passages from books, ads, newspapers, and guidelines.
          </p>
        </div>
      ),
    },
    {
      id: 3,
      title: "IELTS Writing",
      content: (
        <div>
          <p>
            <strong>Academic Task 1:</strong> Describe a graph, table, chart or diagram.
          </p>
          <p>
            <strong>General Task 1:</strong> Write a letter for information or explanation.
          </p>
          <p>
            <strong>Task 2:</strong> Write an essay in response to a viewpoint, argument or problem.
          </p>
        </div>
      ),
    },
    {
      id: 4,
      title: "IELTS Speaking",
      content: (
        <div>
          <p>
            <strong>Task 1:</strong> General questions about yourself and familiar topics.
          </p>
          <p>
            <strong>Task 2:</strong> Speak on a topic from a card for 2 minutes with 1-minute prep.
          </p>
          <p>
            <strong>Task 3:</strong> Discussion questions related to Task 2 topic.
          </p>
        </div>
      ),
    },
  ];


  interface ProgressBarProps {
    label: string;
    value: number;
    text: string;
  }

  const ProgressBar: React.FC<ProgressBarProps> = ({ label, value, text }) => (
    <div className="space-y-1">
      <span className="text-sm font-medium text-gray-800">{label}</span>
      <div className="w-full bg-gray-200 rounded-full h-4">
        <div
          className="bg-blue-600 h-4 rounded-full flex items-center justify-between px-2 text-white text-xs"
          style={{ width: `${value}%` }}
        >
          <span>{text}</span>
          <span>{value}%</span>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <Navigation />

      <section>
        <div className="relative bg-[#12191D] text-white overflow-hidden">
         
          <div className="absolute bottom-0 w-full pointer-events-none z-0">
            <svg
              className="w-full"
              viewBox="0 0 1440 320"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#ffffff"
                d="M0,256L48,245.3C96,235,192,213,288,202.7C384,192,480,192,576,186.7C672,181,768,171,864,186.7C960,203,1056,245,1152,261.3C1248,277,1344,267,1392,261.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              />
            </svg>
          </div>

         
          <div className="relative z-10 max-w-screen-xl mx-auto px-6 pt-32 pb-52 grid md:grid-cols-2 gap-16">
            <div className="border-l-4 border-green-500 pl-8">
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-[#FDEBD0]">
                IELTS Makes <br /> The World Go <br /> Round
              </h1>
            </div>

            <div className="grid grid-cols-1 gap-5 text-lg md:text-xl">
              {[
                "10000+ Institutions",
                "140+ Countries",
                "1100+ Test Centres",
                "1.4 Million Test Takers",
                "14000+ Evaluators",
                "No. 1 Language Test in The World",
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-orange-500 mr-4 text-2xl mt-1">✔</span>
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="min-h-screen bg-gradient-to-r from-green-50 to-blue-50 p-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <div className="sticky top-10 left-40">
                <img
                  src="https://nationalinstituteoflanguage.in/wp-content/uploads/2024/07/verfied-badge.png"
                  alt="Verified Badge"
                />
                <h4 className="text-2xl font-semibold py-2">Best Online IELTS Courses</h4>
                <h1 className="text-7xl font-bold">Live Class</h1>
                <h2 className="text-3xl font-semibold py-2">Certified Expert Coaches</h2>
                <p className="w-1/2">
                  Get your desired IELTS Score in live online classes with British Council & Cambridge Certified Trainers.
                  Join India’s best online IELTS courses at National Institute of Langauge.
                </p>
                <br />
                <div className="flex items-center">
                  <hr className="w-6 pr-7" /> &nbsp;
                  <a href="/book demo" className="pl-5 font-semibold text-lg">
                    Book a Free DEMO 📓
                  </a>
                </div>
              </div>
            </div>
            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="translate-y-0">
                <Card
                  image="https://nationalinstituteoflanguage.in/wp-content/uploads/2024/07/typeelementorsiteurlhttpsnationalinstituteoflanguage.inwp-jsonelementsid3fd08ddelTypewidgetisInnerfalseisLockedfalsesettingscontent_widthfullspaceunitpxsize87sizesspace_tabletu.png"
                  title="Customised TestPrep™ Platform"
                  description="Specially developed online conferencing system to make it feel like a physical classroom."
                />
              </div>
              <div className="translate-y-10">
                <Card
                  image="https://nationalinstituteoflanguage.in/wp-content/uploads/2024/07/typeelementorsiteurlhttpsnationalinstituteoflanguage.inwp-jsonelementsid3fd08ddelTypewidgetisInnerfalseisLockedfalsesettingscontent_widthfullspaceunitpxsize87sizesspace_tabletu-1.png"
                  title="Dual Certified IELTS™ Coaches"
                  description="A truly interactive experience with experts who have immense experience & Competence"
                  badge="USP"
                />
              </div>
              <div className="translate-y-0">
                <Card
                  image="https://nationalinstituteoflanguage.in/wp-content/uploads/2024/07/nnnws.gif"
                  title="Performance Analytics"
                  description="Track your progress and identify key focus areas to improve your band score."
                />
              </div>
              <div className="translate-y-10">
                <Card
                  image="https://nationalinstituteoflanguage.in/wp-content/uploads/2024/07/NEWSS.gif"
                  title="Live Practice Sessions"
                  description="Experience real exam simulations with expert feedback in real-time."
                />
              </div>
            </div>
          </div>
        </div>

      </section>
      <section>
        <div className="p-6 max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <CheckCircle className="text-green-600 w-6 h-6" />

            <h2 className="text-4xl font-bold text-gray-800 flex flex-wrap">
              {titleWords.map((word, index) => (
                <span
                  key={index}
                  style={{ animationDelay: `${index * 0.2}s` }}
                  className="inline-block mr-2 animate-loopFade"
                >
                  {word}
                </span>
              ))}
            </h2>
          </div>

          <p className="text-gray-600 mb-4 font-bold">
            Most comprehensive and effective group classes with no more than 10
            students per batch.
          </p>

          <div className="border-t border-gray-300"></div>
        </div>
      </section>
      <section className="pb-5">

        <div className="w-full  bg-gray-100 flex justify-center items-start pt-10 px-4">
          <div className="w-full max-w-[1400px] flex flex-col lg:flex-row justify-center items-stretch gap-15">
            <div className="bg-white rounded-xl shadow-lg w-full lg:w-1/3">
              <img src="https://nationalinstituteoflanguage.in/wp-content/uploads/2024/07/NEWSS-2.png" alt="Complete" className="w-full h-40 object-cover" />
              <div className="bg-blue-700 p-6 text-white rounded-b-xl">
                <div className="bg-white text-black p-4 mb-4 rounded-xl text-center font-bold text-xl">Complete</div>
                <div className="mb-2">⭐⭐⭐⭐⭐</div>
                <p className="font-semibold mb-2">Comprehensive IELTS Course.</p>
                <ul className="text-sm list-disc list-inside space-y-1">
                  <li>2 Months Group Classes</li>
                  <li>Live Sessions</li>
                  <li>Mon-Fri</li>
                  <li>Sat Mock tests</li>
                  <li>Sunday Webinars</li>
                  <li>A.I Mock Test Access</li>
                </ul>
                <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full">KNOW MORE</button>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg w-full lg:w-1/3">
              <img src="https://nationalinstituteoflanguage.in/wp-content/uploads/2024/07/NEWSS-3.png" alt="SuperFast" className="w-full h-40 object-cover" />
              <div className="bg-blue-700 p-6 text-white rounded-b-xl">
                <div className="bg-white text-black p-4 mb-4 rounded-xl text-center font-bold text-xl">SuperFast</div>
                <div className="mb-2">⭐⭐⭐⭐⭐</div>
                <p className="font-semibold mb-2">Fast Paced IELTS Course.</p>
                <ul className="text-sm list-disc list-inside space-y-1">
                  <li>45 Days Group Classes</li>
                  <li>Live Sessions</li>
                  <li>Mon-Fri</li>
                  <li>Sat Mock tests</li>
                  <li>Sunday Webinars</li>
                  <li>A.I Mock Test Access</li>
                </ul>
                <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full">KNOW MORE</button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg w-full lg:w-1/3">
              <img src="https://nationalinstituteoflanguage.in/wp-content/uploads/2024/07/NEWSS-4.png" alt="Turbo" className="w-full h-40 object-cover" />
              <div className="bg-blue-700 p-6 text-white rounded-b-xl">
                <div className="bg-white text-black p-4 mb-4 rounded-xl text-center font-bold text-xl">Turbo</div>
                <div className="mb-2">⭐⭐⭐⭐⭐</div>
                <p className="font-semibold mb-2">Crash IELTS Course.</p>
                <ul className="text-sm list-disc list-inside space-y-1">
                  <li>1 Month Group Classes</li>
                  <li>Live Sessions</li>
                  <li>Mon-Fri</li>
                  <li>Sat Mock tests</li>
                  <li>Sunday Webinars</li>
                  <li>A.I Mock Test Access</li>
                </ul>
                <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full">KNOW MORE</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 py-10 px-6 text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          
          <div className="space-y-6 animate-fadeInUp">
            <h2 className="text-4xl font-bold leading-tight">
              Make your
              <br />
              IELTS story
            </h2>
            <p className="text-lg">
              Prepare for your IELTS examination online with the help of National Institute of Language and its expert faculty.
            </p>
            <p className="text-lg">
              National Institute of Language provides you British Council and Cambridge certified educators in its online IELTS classes.
            </p>
            <a
              href="#"
              className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded shadow hover:scale-105 transition-transform"
            >
              Read More
            </a>
          </div>

        
          <div className="   animate-fadeInUp">
            <iframe
              className="w-full  h-80 rounded  shadow-lg"
              src="https://www.youtube.com/embed/fJqTKYwPspY?controls=1&rel=0"
              title="IELTS with the National Institute of Language"


              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <blockquote className="border-l-4 pl-4 border-blue-600 italic text-gray-800">
              <p>
                IELTS examination opens the door for many different opportunities.
                CI online IELTS classes have always proved to be the best in the
                industry since its inception.
              </p>
              <footer className="mt-2 text-right font-semibold text-gray-600">
                — Director training-CI
              </footer>
            </blockquote>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://nationalinstituteoflanguage.in/wp-content/uploads/elementor/thumbs/Untitled-design-2-qjjs4gfg5sssvm817zqlh8ljx02u252mjbg7n3crwg.jpg"
                alt="IELTS Visual 1"
                className="rounded shadow-lg transform transition-transform hover:scale-105"
              />
              <img
                src="https://nationalinstituteoflanguage.in/wp-content/uploads/elementor/thumbs/Add-a-subheading-1-q576f4izys1q33i16xybj3s9sfs5eeogs7chv1dhkw.png"
                alt="IELTS Visual 2"
                className="rounded shadow-lg transform transition-transform hover:scale-105 delay-200"
              />
            </div>
            <div className="flex items-center gap-4 border-l-4 border-green-600 pl-4 bg-green-50 p-4 rounded shadow-md animate-fadeInUp">
              <PhoneCall className="text-green-600 w-6 h-6" />
              <div>
                <h5 className="text-lg font-semibold">
                  <a href="tel:9569285185" className="text-green-700 hover:underline">
                    Let's Talk Now
                  </a>
                </h5>
                <p className="text-sm text-gray-700">(+91) 9569 285 185</p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-blue-700">CI Online IELTS Courses</h2>
            <h3 className="text-2xl font-semibold text-gray-900">
              National Institute of Language offers unmatched benefits.
            </h3>
            <p className="text-gray-700">
              Our online IELTS Online courses come with numerous features and services
              that are not available anywhere. Our online IELTS classes feel like
              regular physical classroom with cost and time benefits.
            </p>
            <ProgressBar label="Comprehensive preparation" value={99} text="All four sections" />
            <ProgressBar label="Success rate" value={85} text="7.5 bands and above" />
            <ProgressBar label="Time saving" value={60} text="60% less time" />
          </div>
        </div>
      </section>
      <section className="py-16 px-4 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xl text-gray-600 font-semibold block mb-2">Salient Features</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Online IELTS Classes With Best In Industry Facilities</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative bg-cover bg-center rounded-2xl shadow-lg overflow-hidden group" style={{ backgroundImage: "url('https://nationalinstituteoflanguage.in/wp-content/uploads/elementor/thumbs/Untitled-design-qqp6vkzdhybwhd2h9s29xngv04qb7eczdhloyqo9c0.png')" }}>
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all"></div>
              <div className="relative z-10 p-6 text-white">
                <div className="w-12 h-12 mb-4 bg-white/20 rounded-full flex items-center justify-center">
                  <i className="fas fa-users text-white"></i>
                </div>
                <h4 className="text-xl font-bold mb-2">Certified Trainers</h4>
                <p className="mb-4">CI online IELTS classes provide you the best and certified faculty</p>
                <a href="https://nationalinstituteoflanguage.in/book-demo-ielts/" className="inline-block bg-white text-black font-semibold py-2 px-4 rounded-lg hover:bg-gray-200">Meet Faculty</a>
              </div>
            </div>
            <div className="relative bg-cover bg-center rounded-2xl shadow-lg overflow-hidden group" style={{ backgroundImage: "url('https://nationalinstituteoflanguage.in/wp-content/uploads/elementor/thumbs/Untitled-design-1-qqp74dqzh4dj5yacw2zjrxj76zd09eaix1gbozml34.png')" }}>
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all"></div>
              <div className="relative z-10 p-6 text-white">
                <div className="w-12 h-12 mb-4 bg-white/20 rounded-full flex items-center justify-center">
                  <i className="fas fa-stream text-white"></i>
                </div>
                <h4 className="text-xl font-bold mb-2">A.I Powered Mocks</h4>
                <p className="mb-4">You cannot crack IELTS without intense practice and mock tests.</p>
                <a href="https://nationalinstituteoflanguage.in/a-i-powered-ielts-online-mock-tests/" className="inline-block bg-white text-black font-semibold py-2 px-4 rounded-lg hover:bg-gray-200">Learn More</a>
                <span className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-bl">Popular</span>
              </div>
            </div>
            <div className="relative bg-cover bg-center rounded-2xl shadow-lg overflow-hidden group" style={{ backgroundImage: "url('https://nationalinstituteoflanguage.in/wp-content/uploads/elementor/thumbs/IMG_5464-pp8tsyc8k1tqn19y410hpaozeugrmoc11bglegnm0w.png')" }}>
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all"></div>
              <div className="relative z-10 p-6 text-white">
                <div className="w-12 h-12 mb-4 bg-white/20 rounded-full flex items-center justify-center">
                  <i className="fas fa-share-alt text-white"></i>
                </div>
                <h4 className="text-xl font-bold mb-2">Huge Active Community</h4>
                <p className="mb-4">Practice and connect with other students in the CI community</p>
                <a href="https://nationalinstituteoflanguage.in/forums/forum/ielts-writing-tasks/" className="inline-block bg-white text-black font-semibold py-2 px-4 rounded-lg hover:bg-gray-200">Check Community</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div
          className="bg-cover bg-center min-h-screen flex items-center"
          style={{
            backgroundImage:
              "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHYOvQgqJNynAYA5yDf0oEM0XEkghgXOXWsA&s')",
          }}
        >
          <div className="bg-white/80 w-full px-6 pt-0 pb-12 md:px-16 lg:px-24 flex flex-col lg:flex-row justify-between items-center gap-10">
            <div className="w-full lg:w-1/2">
              <p className="text-sm font-semibold text-gray-800 mb-2">
                How can CI's Online IELTS Classes Help You?
              </p>
              <h2 className="text-4xl font-extrabold text-black mb-4 leading-tight">
                Our Online IELTS Courses Deliver Results With Less Time And More
                Comfort.
              </h2>
              <p className="text-gray-600 mb-6">
                We provide multiple course options depending upon your individual
                needs. From group classes to personal training sessions, our online
                IELTS classes have redefined online preparation in Asia.
              </p>
              <a
                href="/ielts-courses"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-md transition inline-block"
              >
                REGISTER YOURSELF →
              </a>
            </div>
            <div className="grid grid-cols-2 gap-6 w-full lg:w-1/2 pt-12">
              <div className="bg-black text-white rounded-xl p-6 shadow-md">
                <h3 className="text-4xl font-bold mb-1">50+<sup>+</sup></h3>
                <p className="font-semibold">Batches</p>
                <p className="text-sm text-gray-300 mt-1">
                  Group classes provide discipline and collective learning
                </p>
              </div>
              <div className="bg-black text-white rounded-xl p-6 shadow-md">
                <h3 className="text-4xl font-bold mb-1">10+<sup>+</sup></h3>
                <p className="font-semibold">Customised courses</p>
                <p className="text-sm text-gray-300 mt-1">
                  Choose from Personal Training or Group classes.
                </p>
              </div>
              <div className="bg-black text-white rounded-xl p-6 shadow-md">
                <h3 className="text-4xl font-bold mb-1">800+<sup>+</sup></h3>
                <p className="font-semibold">Expert Trainers</p>
                <p className="text-sm text-gray-300 mt-1">
                  Highly competent and specialised faculty members
                </p>
              </div>
              <div className="bg-black text-white rounded-xl p-6 shadow-md">
                <h3 className="text-4xl font-bold mb-1">79K<sup>+</sup></h3>
                <p className="font-semibold">8+ Band</p>
                <p className="text-sm text-gray-300 mt-1">
                  Our results speak for themselves
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white text-gray-800">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <p className="text-lg text-gray-500">It's easy to enrol yourself.</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Easy Steps To Register For Online IELTS Classes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-indigo-50 p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h4 className="text-indigo-600 font-bold text-2xl mb-4">
                {step.number}
              </h4>
              <h5 className="text-xl font-semibold mb-2">{step.title}</h5>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section
        className="relative py-12 px-4 bg-cover bg-center bg-black"

      >
        <div className="absolute inset-0 bg-black opacity-10 z-0"></div>

        <div className="relative z-10 max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
          <div className="lg:w-10/12 space-y-6">
            <span className="text-200 font-bold text-gray-100 ">Connect with our dedicated advisor</span>
            <h2 className=" lg:text-6xl font-bold text-white">
              We value your time and that's why we assign a dedicated advisor for you
            </h2>
            <p className="text-gray-200">
              Dedicated advisor will help you from booking a demo class to choosing the correct course as well as guide you
              through your entire journey with CI Online IELTS Classes.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:+919569285185"
                className="inline-flex items-center bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
              >
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                >
                  <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
                </svg>
                Get an advisor
              </a>

              <a
                href="tel:+919569285185"
                className="inline-flex items-center bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
              >
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                >
                  <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
                </svg>
                +91 9569 285 185
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full px-6 py-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl text-white bg-gradient-to-br from-blue-600 to-indigo-500 shadow-md">
            <h2 className="text-xl font-semibold mb-2">Certified Trainers</h2>
            <p>
              CI Online IELTS Test Prep Course Gives You Access To Live Classes
              With Certified Trainers
            </p>
          </div>
          <div className="p-6 rounded-xl text-white bg-gradient-to-br from-purple-600 to-pink-500 shadow-md">
            <h2 className="text-xl font-semibold mb-2">Live Online Classes</h2>
            <p>
              Recorded Lessons Can’t Solve Your Doubts, That’s Why We Focus On
              Live Interactive Sessions.
            </p>
          </div>
          <div className="p-6 rounded-xl text-white bg-gradient-to-br from-teal-500 to-green-500 shadow-md">
            <h2 className="text-xl font-semibold mb-2">Regular Mock Tests</h2>
            <p>
              IELTS Can Not Be Cracked Without Proper Evaluation. We Conduct
              Regular Mock Tests For IELTS
            </p>
          </div>
        </div>
      </section>
      <section className="w-full px-4 py-12 bg-blue-950">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Getting Started Is Easy
          </h2>
          <p className="text-lg text-white">
            Call an advisor – <strong>+91 9569 285 185</strong>. Take a Free Demo.
          </p>
          <a
            href="https://nationalinstituteoflanguage.in/book-demo-ielts/"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition"
          >
            Book a Session
          </a>
        </div>
      </section>
      <section className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-12">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="w-full lg:w-1/2">
            <img
              src="https://nationalinstituteoflanguage.in/wp-content/uploads/2021/05/bb-content-04.png"
              alt="What is IELTS"
              width={570}
              height={516}
              className="w-full h-auto"
              loading="lazy"
              decoding="async"
              title="What is IELTS 16"
            />
          </div>
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="text-sm text-gray-700 font-semibold">
              Online IELTS Test Prep by CI.
            </div>

            <h2 className="text-3xl font-bold text-gray-900">
              Here’s all you need to know about IELTS
            </h2>

            <p className="text-black-600  leading-relaxed">
              <a
                href="https://nationalinstituteoflanguage.in/"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                The International English Language Testing System (IELTS)
              </a>{" "}
              is the most approved high-stakes English language proficiency test
              in the world for study, work and migration. The IELTS results are
              acknowledged by more than 10,000 organisations, including
              educational institutions, employers, professional associations, and
              governments, in one hundred forty countries around the world.
            </p>

            <a
              href="https://www.ielts.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md transition"
            >
              Learn More on Official Site
            </a>
          </div>
        </div>
      </section>
      <section className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-12">
        {/* Background overlay - empty div for overlay if needed */}
        <div className="absolute inset-0 bg-black opacity-10 pointer-events-none"></div>

        <div className="relative flex flex-col lg:flex-row gap-10 items-center">
          {/* Left Column - Image + overlay box */}
          <div className="w-full lg:w-1/2 relative">
            <img
              src="https://nationalinstituteoflanguage.in/wp-content/uploads/2021/10/pexels-wendy-wei-1699159.jpg"
              alt="Best online IELTS Coaching"
              width={640}
              height={960}
              className="w-full h-auto rounded"
              decoding="async"
              loading="lazy"
              title="What is IELTS 17"
            />

            {/* Overlay box */}
            <div className="absolute top-6 left-6 bg-blue-600 bg-opacity-90 p-6 rounded shadow-md max-w-xs ">
              <h2 className="text-xl font-bold mb-2">Understand IELTS</h2>
              <p className="text-gray-700">The International Test</p>
            </div>
          </div>

          {/* Right Column - Text content */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              IELTS Test Types &amp; Requirements
            </h2>

            {/* Divider line */}
            <div className="border-b border-gray-300 w-20 mb-4"></div>

            <p className="text-gray-700 font-semibold">
              The IELTS test can be taken either on paper or computer, depends on your requirement and there is no difference in the format or level of difficulty between the two options.
            </p>

            <p className="text-gray-700 font-semibold">
              Yes, you need to be careful while choosing the module you wish to take –{" "}
              <a
                href="https://nationalinstituteoflanguage.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                IELTS Academic or IELTS General Training
              </a>
              , based on the purpose of taking this test. However, to study in the UK, you have to take the IELTS test approved for UK Visa and Immigration (UKVI).
            </p>

            <a
              href="tel:+919569285185"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md transition"
            >
              Consult with us
            </a>
          </div>
        </div>
      </section>



      <section className="flex justify-center bg-[#f3f9fd] py-12 px-4">
        <div className="bg-white shadow-lg rounded-2xl max-w-4xl w-full p-8 space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Why IELTS is the most popular test.
          </h2>

          <div>
            <h3 className="text-lg md:text-xl font-bold text-black-600 inline-block px-2 py-1 rounded-sm">
              THE TEST FOR STUDY
            </h3>
            <p className="text-gray-700 mt-2">
              Thousands of the world’s most reliable & trusted universities and colleges accept your IELTS results as proof
              of your English language proficiency.
            </p>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-bold">THE TEST FOR PROFESSIONALS</h3>
            <p className="text-gray-700 mt-2">
              Professional bodies in many fields accept an IELTS result, accounting, including, law, medicine, engineering,
              nursing, pharmacy, and teaching bodies in many countries. This shows that after your studies, you have to take
              the test in order to have professional registration in an{" "}
              <span className="text-blue-600 font-medium">English-speaking</span> country.
            </p>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-bold">THE TEST FOR MIGRATION</h3>
            <p className="text-gray-700 mt-2">
              IELTS score is mandate& required by governments in more countries than any other{" "}
              <span className="text-blue-600 font-medium">English language</span> test for permanent residency. Unlike other
              providers, the IELTS General Training test is the only non-academic test available for migration to Canada,
              Australia, New Zealand, The United Kingdom and The USA.
            </p>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-bold">THE TEST THAT’S HONEST TO YOU</h3>
            <p className="text-gray-700 mt-2">
              IELTS evaluates you on your practical communication abilities and gives with an accurate assessment of the four
              skills tested. It focuses on testing the language skills rather than specialist knowledge of the candidate and
              offers two versions –{" "}
              <span className="text-blue-600 font-medium">Academic and General Training</span>. Moreover, it allows for a
              one-on-one Speaking test with an examiner in a separate room with no distractions. The test content for IELTS is
              designed by an international team of experts and undergoes extensive research to ensure the test remains
              transparent for the candidates regardless of nationality, gender, background, lifestyle or location.
            </p>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-start gap-10">
          {/* Left Image Column */}
          <div className="w-full md:w-1/2">
            <img
              src="https://nationalinstituteoflanguage.in/wp-content/uploads/2021/05/Untitled-design-41.png"
              alt="IELTS Coaching"
              className="rounded-lg shadow-md w-full h-auto"

            />
          </div>

          {/* Right Content Column */}
          <div className="w-full md:w-1/2 space-y-6">
            {features.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
              >
                <h5 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h5>
                <p className="text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-10 ">
        <h2 className="text-3xl font-bold text-center mb-6">IELTS Test Format</h2>
        <p className="font-semibold mb-6">
          You are assessed on four sections: Listening, Reading, Writing and Speaking. Listening,
          Reading, and Writing all take place on the same day without any break. For Speaking, you can
          either book a slot online or get one assigned automatically. The total test duration is under
          three hours.
        </p>

        <div className="border-">
          <div className="flex flex-wrap justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors duration-300 ${activeTab === tab.id ? "border-blue-600 text-blue-600" : "border-transparent"
                  }`}
              >
                {tab.title}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 text-gray-700">
          {tabs.map((tab) => (
            <div key={tab.id} className={activeTab === tab.id ? "block" : "hidden"}>
              {tab.content}
            </div>
          ))}
        </div>
      </section>



      <section className="bg-gradient-to-r from-blue-100 to-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left Content */}
            <div className="w-full md:w-1/2 space-y-4">
              <h4 className="text-2xl font-bold text-gray-800">IELTS Test Dates</h4>
              <p className="text-gray-700">
                In India, the IELTS test dates are available 4 times in a month or
                48 times in a year (for paper-based), and are generally taken
                place on Saturdays and Thursdays to provide convenience &amp;
                flexibility to the test seekers. With the computer-based IELTS,
                you have an option to choose multiple dates and time slots in a
                day and get your results in 3–5 days. However, the availability of
                the IELTS dates may differ depending on the test type &amp; module
                you opt for – Academic or General Training.
                <br />
                <br />
                <strong>Note:</strong> Due to Covid-19 Pandemic, there may be some
                trouble finding a date for examination in your selected city
                subject to government’s guidelines.
              </p>
            </div>

            {/* Right Button */}
            <div className="w-full md:w-auto text-right md:text-right">
              <a
                href="https://www.ieltsidpindia.com/registration/registration"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-blue-700 transition"
              >
                Book The Test
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 px-6 bg-white">
        <div className="container mx-auto flex flex-col lg:flex-row gap-10">
          {/* Left Column */}
          <div className="lg:w-1/2 space-y-10">
            {/* IELTS UKVI Section */}
            <div className="space-y-4">
              <a
                href="#"
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                IELTS UKVI
              </a>
              <h2 className="text-2xl font-semibold">
                For people who want to apply for UK Visa
              </h2>
              <p className="text-gray-700">
                Here’s all you need to know about the UK Visa and Immigration
                approved IELTS. The International English Language Testing System
                (IELTS) is a test for anyone who wants to look after an academic
                or professional career internationally. It includes IELTS General
                and IELTS Academic Training. However, if you are planning to
                apply for a UK visa, you have to take an IELTS test approved for
                UK Visa and Immigration (UKVI) known as IELTS for UKVI. This is
                for everyone coming from a non-English speaking country. While
                there is no change in the format or level of difficulty, and
                scoring, IELTS for UKVI simply has certain extra security
                protocols to ensure the genuineness of the test taker. Also, the
                Test Report Form (TRF) might look slightly different from the
                IELTS Academic or General Training.
              </p>
            </div>

            {/* Student Visa Section */}
            <div className="space-y-4">
              <a
                href="#"
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Student Visa
              </a>
              <h2 className="text-xl font-semibold">
                You can apply for a Student visa to study in the UK if you’re 16
                or over and you:
              </h2>
              <h2 className="text-xl font-semibold">
                Student Visa Requirements for United Kingdom
              </h2>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>
                  Have been offered a place on{" "}
                  <a
                    href="https://www.gov.uk/student-visa/course"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    a course by a licensed student sponsor
                  </a>
                </li>
                <li>
                  Have enough{" "}
                  <a
                    href="https://www.gov.uk/student-visa/money"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    money to support yourself and pay for your course
                  </a>{" "}
                  – the amount will vary depending on your circumstances
                </li>
                <li>
                  Can{" "}
                  <a
                    href="https://www.gov.uk/student-visa/knowledge-of-english"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    speak, read, write and understand English
                  </a>
                </li>
                <li>
                  Have consent from your parents if you’re 16 or 17 – you’ll need
                  evidence of this when you apply
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column (Image) */}
          <div className="lg:w-1/2 flex justify-center items-start">
            <img
              src="https://nationalinstituteoflanguage.in/wp-content/uploads/2021/10/Untitled-design-9.png"
              alt="UK Visa & Immigration IELTS Preparation"
              className="rounded-lg shadow-md max-w-full h-auto"
            />
          </div>
        </div>
      </section>

      <section className="relative bg-white px-6 py-12 flex flex-col md:flex-row gap-8 items-center justify-between overflow-hidden">
        {/* Left Column */}
        <div className="w-full md:w-1/2 space-y-6 z-10 pl-6 md:pl-12">
          <img
            src="https://nationalinstituteoflanguage.in/wp-content/uploads/2021/06/New-Picture.png"
            alt="best online Ielts classes in India"
            className="w-64 h-auto"
          />

          <h2 className="text-3xl font-bold text-gray-800">IELTS LIFESKILL</h2>

          <div className="text-gray-700 space-y-4 text-base leading-relaxed">
            <p>
              <strong>IELTS Life Skills</strong>&nbsp;is a test for those who want to prove their
              English speaking and listening skills to obtain a UK VISA, and is available at Common
              European Framework of Reference for Languages (CEFR) level A1 and B1. It is designed to
              fulfil the requirements of UKVI for certain visa categories and other immigration
              purposes.
            </p>
            <p>
              • <strong>IELTS Life Skills A1</strong>: If you apply for a ‘family of a settled person’
              visa
              <br />
              • <strong>IELTS Life Skills B1</strong>: If you apply for a ‘indefinite leave to remain
              or citizenship’ visa
            </p>
            <p>
              You can take the IELTS Life Skills test multiple times. However, if you pass it once,
              you cannot re-take it at the same level for two years.
            </p>
          </div>

          <a
            href="https://nationalinstituteoflanguage.in/book-demo-ielts/"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition"
          >
            Get Appointment
          </a>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 relative z-0">
          <img
            src="https://nationalinstituteoflanguage.in/wp-content/uploads/2021/05/3299789-2.jpg"
            alt="IELTS Illustration"
            className="w-full max-w-xl mx-auto object-contain rounded-lg"
          />
        </div>
      </section>
      <section className="py-12 px-6 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Column - Animated Heading */}
          <div className="w-full md:w-1/2">
            <h2 className="text-5xl  font-bold leading-snug text-gray-800">
              <span >We are providing better </span>
              <span className="inline-block text-blue-600 transition-all duration-700 ease-in-out animate-fade">
                {rotatingWords[currentIndex]}
              </span>
              <span> for you</span>
            </h2>
          </div>

        {/* Right Column - Info Text */}
        <div className="w-full md:w-1/2 text-gray-700  text-base space-y-4 leading-relaxed">
          <p className="font-bold text-2xl">
            A certified IELTS examiner evaluates your performance throughout the
            Speaking and Listening test based on:
            <br />1. Obtaining information
            <br />2. Conveying information
            <br />3. Speaking to communicate
            <br />4. Engaging in discussion
          </p>
          <p className="font-semibold">
            Don’t forget to give your best as the performance of the other test
            taker paired with you in the IELTS Life Skills test does not affect
            the assessment of your own performance.
          </p>
        </div>
      </div>
    </section>
    
    <section
      className="min-h-screen flex items-center justify-center px-4 py-10 bg-no-repeat bg-contain bg-center"
      style={{
        backgroundImage:
          "url('https://d2o42wz6gj7hm6.cloudfront.net/wp-content/uploads/2021/07/01130041/040030021-contact-us-banner.jpg')",
      }}
    >
      <div className="bg-white/90 rounded-xl p-6 w-[600px] flex flex-col md:flex-row gap-8 items-start">
        {/* Left Column */}
        <div className="w-full md:w-1/2 space-y-6">
          <img
            src=""
            alt="National Institute of Language"
            className="w-full h-auto object-contain"
          />

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800">We are here to help</h2>
              <p className="text-gray-700">
                If you need any help regarding any of these IELTS tests kinds, give us a call or drop a message on:
              </p>
              <h2 className="text-2xl font-bold text-blue-600">+91 9569 285 185</h2>
            </div>
          </div>

          {/* Right Column (Empty) */}
          <div className="w-full md:w-1/2">{/* Empty space */}</div>
        </div>
      </section>

      <Footer />
    </div>
  )

}
export default IeltsPage;