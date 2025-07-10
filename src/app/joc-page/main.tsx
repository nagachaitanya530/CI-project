import React from "react";

// You can split each section into its own file if you wish for greater maintainability.

const courses = [
  {
    id: 1,
    title: "JOC Mastery: English for Global Jobs",
    description: "Complete mastery of business communication, interview speaking, group discussions, and real workplace scenarios. Hands-on with HR Q&A, client calls practice, and project presentations.",
    details: "Modules include Interview Q&A Strategy, HR/Managerial Interactions, Global Team Coordination, Survivor Roleplays, Group Discussion Workshops, and Live Career Labs.",
    duration: "10 weeks",
    rating: 4.95,
    students: 1380,
    price: "₹6,499",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop",
    skills: [
      "Mock interviews with instant feedback",
      "Career English accent & fluency labs",
      "Resume & LinkedIn optimization",
      "Presentation demos & video assignments",
    ],
  },
  {
    id: 2,
    title: "AI-Powered English Fluency for Interviews",
    description: "Accelerated English speaking skills: all practice is powered by AI for instant voice analysis, grammar checking, and role-play with realistic AI interviewers.",
    details: "Practice panel interviews, one-way video assessments, and live group feedback sessions. Get placement reports based on real employer rubrics.",
    duration: "4 weeks",
    rating: 4.89,
    students: 1100,
    price: "₹3,999",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=500&h=300&fit=crop",
    skills: [
      "Always-on speaking labs",
      "Pronunciation & clarity boosters",
      "24/7 AI mentor",
      "Confidence & clarity boosters",
    ],
  },
  {
    id: 3,
    title: "Professional Business Writing & Email Etiquette",
    description: "Advanced English writing for digital jobs: emails, proposal documents, summary reports, client messaging, and formal international communication.",
    details: "Includes live feedback on writing samples, digital documentation labs, and portfolio assignments you can showcase to employers.",
    duration: "6 weeks",
    rating: 4.81,
    students: 880,
    price: "₹4,499",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop",
    skills: [
      "Live writing workshops",
      "Templates for global documentation",
      "Formal & informal writing sprints",
      "Portfolio assignments",
    ],
  },
  {
    id: 4,
    title: "Digital Work Skills & Productivity in English",
    description: "Hands-on with top productivity tools and workplace documentation—everything in modern global English for hybrid/remote jobs.",
    details: "Covers MS Office essentials (Excel, PPT, Docs), cross-team communication tools, and digital meeting etiquette.",
    duration: "5 weeks",
    rating: 4.86,
    students: 720,
    price: "₹3,799",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop",
    skills: [
      "MS Office (Excel, PPT, Docs) in English",
      "Remote meeting etiquette",
      "Professional reporting",
      "Team collaboration tools",
    ],
  },
];

const categories = [
  {
    icon: "💼",
    title: "Job Communication Mastery",
    description:
      "Real business scenarios, global interviews, meetings, and teamwork in English—build the foundation to succeed in tech and non-tech roles.",
    detail:
      "Focused modules for cross-border projects, interview clinics, remote work simulations, and global career prep.",
  },
  {
    icon: "🤖",
    title: "AI-Powered English Fluency",
    description:
      "24/7 practice with AI: instant grammar correction, voice labs, and feedback dashboards. Personalized progress tracking for interviews and presentations.",
    detail:
      "Roleplay with AI, mock interviews, automated voice scoring, and tailored lesson paths.",
  },
  {
    icon: "📝",
    title: "Business Writing & Email Skills",
    description:
      "Master top-impact professional writing: emails, reports, and global workplace docs for real jobs and international clients.",
    detail:
      "Live workshops, error analysis, and digital portfolio building for global positions.",
  },
  {
    icon: "💻",
    title: "Digital Productivity (in English)",
    description:
      "Excel, Docs, presentations—learn to communicate insights in English using global workplace platforms. Project-based, demo-driven practice.",
    detail:
      "Document modeling, meeting etiquette, and automated feedback for reporting and collaboration.",
  },
  {
    icon: "🚀",
    title: "Freelancing & Entrepreneurial English",
    description:
      "Pitch confidently, negotiate, and write proposals for clients worldwide. Learn business English for freelancing, marketing, and contracts.",
    detail:
      "Client mock calls, contract etiquette, and global email negotiation labs.",
  },
];

const features = [
  {
    icon: "🎧",
    title: "100% English JOC Focus",
    description:
      "All content, practice labs, and assignments focus only on job communication and career English—no distractions, just results.",
  },
  {
    icon: "🧑‍🏫",
    title: "AI + Human Mentoring",
    description:
      "Get 24/7 practice with a futuristic AI practice lab and personal 1-on-1 mentoring for feedback. Real career coaches, real voice calls, real HR-scenario prep.",
  },
  {
    icon: "🏆",
    title: "Global Certification & Placement Portfolio",
    description:
      "Earn a globally recognized certificate and create a job-ready digital showcase: interview videos, top-rated writing samples, group presentations.",
  },
  {
    icon: "📈",
    title: "Placement Assistance Program",
    description:
      "Job portal, mock tests, resume/LinkedIn audits, and direct recruiter connects—our support starts even before you finish your course.",
  },
  {
    icon: "🔬",
    title: "Work Culture Simulation",
    description:
      "Roleplays, emails, presentations, and teamwork that go beyond theory—practice like you’re already in the job.",
  },
  {
    icon: "🌐",
    title: "Anytime, Anywhere Learning",
    description:
      "Mobile-friendly, video transcripts, community scores, and monthly feature updates. Futureproof your skills for the digital workplace.",
  },
];

const Joc: React.FC = () => (
  <div className="bg-gradient-to-br from-blue-950 via-white to-purple-50 min-h-screen">
    {/* Hero Section */}
    <section className="relative min-h-[70vh] flex flex-col justify-center items-center bg-gradient-to-br from-blue-900 via-purple-900 to-black px-2">
      <div className="max-w-5xl mx-auto text-center pt-24 pb-16 z-10 relative">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight text-white shadow-lg">
          Next-Gen <span className="text-yellow-400 drop-shadow-xl">English</span> <br /> for Global Jobs
        </h1>
        <p className="mt-6 text-2xl md:text-3xl text-blue-200 max-w-3xl mx-auto font-medium">
          <span className="bg-blue-800/30 px-4 py-1 rounded-md font-bold text-cyan-200">Master job communication,</span> ace interviews, and showcase your skills with <span className="text-yellow-300">real projects & recruiter connections.</span>
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10 mb-6">
          <button className="px-10 py-4 rounded-full bg-yellow-400 hover:bg-yellow-500 font-bold text-lg text-gray-900 shadow-xl transition transform hover:scale-105">
            Browse Courses
          </button>
          <button className="px-10 py-4 rounded-full border-2 border-white text-white hover:bg-white hover:text-blue-800 font-bold text-lg shadow-lg transition transform hover:scale-105">
            Start Free JOC Demo
          </button>
        </div>
        {/* Badges */}
        <div className="flex flex-wrap gap-4 pt-8 justify-center">
          <span className="bg-green-500/20 rounded-full px-6 py-2 text-green-200 text-md font-semibold shadow">
            3200+ Careers Launched
          </span>
          <span className="bg-yellow-500/20 rounded-full px-6 py-2 text-yellow-100 font-semibold shadow">
            98% Placement Success
          </span>
          <span className="bg-cyan-700/20 rounded-full px-6 py-2 text-cyan-200 font-semibold shadow">
            HR + AI Interview Labs
          </span>
        </div>
      </div>
      {/* Overlay futuristic lights */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-2 left-1/4 w-80 h-80 bg-gradient-to-br from-yellow-400 via-white/20 to-transparent rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-0 right-1/3 w-96 h-48 bg-gradient-to-br from-cyan-400 via-blue-300 to-purple-700 blur-2xl opacity-20" />
        <div className="absolute top-20 right-0 w-36 h-36 bg-pink-400/30 rounded-full blur-2xl opacity-70" />
      </div>
    </section>
    {/* Why Choose Us Section */}
    <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Why Choose Us for Job-Oriented English?
          </h2>
          <div className="flex flex-col items-center gap-3 mb-3">
            <div className="inline-block text-lg text-cyan-700 bg-cyan-100 px-4 py-1 rounded-full font-semibold">
              English-First Training. Global Careers. JOC Guarantee.
            </div>
            <p className="text-gra7-800 text-xl max-w-3xl mx-auto">
              Our platform is engineered for <b>job success</b>: specialized English, future skills, and personalized placement support at every step.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {features.map((feature, idx) => (
            <div key={feature.title} className="bg-white rounded-xl shadow-2xl p-8 flex flex-col items-center text-center hover:shadow-emerald-200/50 transition-all border-2 border-cyan-200/20">
              <div className="w-16 h-16 bg-blue-600/90 text-white rounded-2xl flex items-center justify-center text-4xl mb-4 shadow-lg">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-blue-900">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
        {/* Stats Bar */}
        <div className="grid md:grid-cols-5 gap-4 bg-gradient-to-r from-blue-700 via-cyan-600 to-purple-700 text-white rounded-3xl p-8 shadow-xl max-w-5xl mx-auto mt-16">
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-yellow-300">100%</span>
            <span className="text-blue-100">English-Only Curriculum</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-yellow-300">98%</span>
            <span className="text-blue-100">Placement Success</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-yellow-300">3200+</span>
            <span className="text-blue-100">Careers Launched</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-yellow-300">AI + Human</span>
            <span className="text-blue-100">Personal Mentoring</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-yellow-300">24/7</span>
            <span className="text-blue-100">Support</span>
          </div>
        </div>
      </div>
    </section>
    {/* Popular Courses Section */}
    <section className="py-20 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Our Most Popular Job-Oriented English Courses
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Accelerate your path to placement: master business English, interview fluency, and career skills. Choose the right program for you.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-3xl overflow-hidden shadow-xl group hover:shadow-yellow-200/60 transition transform hover:-translate-y-2 border-2 border-blue-200/10"
            >
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 px-3 py-1 bg-yellow-400 text-black font-semibold text-xs rounded-full shadow-lg">{course.title.includes("JOC") ? "Best Seller" : "Featured"}</span>
              </div>
              <div className="p-7">
                <h3 className="text-xl font-bold text-blue-900 mb-3">{course.title}</h3>
                <p className="text-gray-800 mb-2">{course.description}</p>
                <p className="text-sm text-gray-600 italic mb-4">{course.details}</p>
                <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
                  {course.skills.map(skill => <li key={skill}>{skill}</li>)}
                </ul>
                <div className="flex items-center justify-between text-gray-500 text-xs mb-3">
                  <div>
                    <b>Duration:</b> {course.duration}
                  </div>
                  <div>
                    <b>Rating:</b> {course.rating}★
                  </div>
                  <div>
                    <b>Students:</b> {course.students}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-extrabold text-blue-700">{course.price}</span>
                  <button className="bg-blue-700 hover:bg-blue-900 text-white rounded-full px-6 py-2 font-semibold shadow hover:scale-105 transition">View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-14">
          <button className="border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white px-8 py-4 rounded-full transform hover:scale-105 transition font-semibold shadow">
            View All English Courses
          </button>
        </div>
      </div>
    </section>
    {/* Course Categories Section */}
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-2 tracking-tight">
            Course Categories: Get JOC-Ready!
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Choose your focus, level up your English, and get ready for international careers!
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-7">
          {categories.map((cat) => (
            <div key={cat.title} className="group cursor-pointer hover:shadow-xl border-none bg-white/90 rounded-3xl overflow-hidden p-6 shadow-md flex flex-col gap-2 transition-all hover:-translate-y-1">
              <div className="flex justify-center mb-2">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-600 via-cyan-400 to-purple-700 text-white rounded-2xl flex items-center justify-center text-3xl shadow-md">
                  {cat.icon}
                </div>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-bold text-blue-900 mb-1">{cat.title}</h4>
                <p className="text-blue-600 font-semibold text-xs mb-1">{cat.description}</p>
                <p className="text-sm text-gray-700">{cat.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    {/* Call To Action Section */}
    <section className="py-16 bg-gradient-to-b from-blue-900 via-purple-800 to-black">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto bg-white/10 rounded-2xl px-10 py-16 backdrop-blur-md shadow-2xl">
          <h3 className="text-3xl font-bold text-yellow-400 mb-4">💼 Ready for Your Dream Job?</h3>
          <p className="text-xl text-white mb-8">
            Book a free 1-on-1 counseling call, try our JOC demo class, or get instant assessment to find your perfect path.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-10 py-4 rounded-full shadow-lg transform hover:scale-105 transition">
              Book Free Career Call
            </button>
            <button className="bg-white/10 border-2 border-yellow-400 text-yellow-400 font-semibold px-10 py-4 rounded-full shadow-lg transform hover:scale-105 hover:bg-yellow-400 hover:text-black transition">
              Try a Demo Class
            </button>
          </div>
          <div className="mt-8 text-gray-100 text-sm flex flex-col gap-2 opacity-90">
            <span>EMI options | 24/7 mentor support | Global job assistance</span>
            <span>Contact: support@aalionsinfotech.com | WhatsApp: +91-7607676998</span>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Joc;
