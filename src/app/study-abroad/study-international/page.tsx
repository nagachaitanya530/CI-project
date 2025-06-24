"use client"
import Navigation from "~/app/_components/study-abroad/navigation"
import { useState } from "react"
import University from "./university"
import { Button } from "../../../components/ui/button"
import { Input } from "../../../components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../components/ui/select"
import { Checkbox } from "../../../components/ui/checkbox"
import { Card, CardContent } from "../../../components/ui/card"
import {
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Globe,
  Award,
  Users,
  BookOpen,
  FileText,
  Play,
  Instagram,
  Youtube,
  Linkedin,
  Facebook,
  MessageCircle,
} from "lucide-react"
import BookFreeConsultation from "./book-free-consultaion"
import Topcourses from "./top-courses"
export default function GlobalUniversitiesPage() {
  const [activeTab, setActiveTab] = useState("documents")

  return (
    <div>
         <Navigation/>
    <div className="min-h-screen bg-gray-50">
    {/*Hero section*/}
      <section className="bg-gradient-to-r from-gray-100 to-gray-200 py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Study in{" "}
                <span className="relative gap-2">
                  Global Universities<span className="absolute bottom-2 left-0 w-full h-1 bg-orange-400"></span>
                </span>
                <br />
                Across the World
              </h1>
              <div className="flex flex-col sm:flex-row gap-4 mt-12">
                <Button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-full text-lg">
                  Free Expert Consultation
                </Button>
                <Button
        
                  className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-full text-lg"
                >
                  View & Download Brochure
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="/study-international-images/study-abrd-global.webp?height=600&width=600"
                  alt="Student with educational elements"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book Free Consultation */}
     <section >
        <BookFreeConsultation/>
     </section>

      {/* List of Universities Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            List Of Universities{" "}
            <span className="relative">
              Globally<span className="absolute bottom-1 left-0 w-full h-1 bg-orange-400"></span>
            </span>
          </h2>
          <p className="text-gray-700 text-lg mb-12 max-w-4xl mx-auto">
            Studying abroad gives you access to some of the highest standards of education that are available in the
            world. Here are some of the top ranked universities in the world:
          </p>

          <University/>

          <Button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-full text-lg">
            View Our Partnered Universities
          </Button>
        </div>
      </section>

      <section>
      
      </section>


     

      {/* Popular Courses Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-100">
      <div className="max-w-7xl mx-auto text-center mb-12">
    <h2 className="text-4xl font-bold text-gray-900 mb-4">
      <span className="relative">
        Popular Courses<span className="absolute bottom-1 left-0 w-full h-1 bg-orange-400"></span>
      </span>{" "}
      Across The Globe
    </h2>
    <p className="text-gray-700 text-lg mb-12 max-w-4xl mx-auto">
      Global universities gives students access to the most distinctive and valuable courses in the world. Here
      are some of the top courses that are preferred by international students:
    </p>
    </div>
      <Topcourses/>
</section>

       {/* Cost of Studying Section */}
       <section className="py-16 px-4 md:px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Cost Of{" "}
                <span className="relative">
                  Studying<span className="absolute bottom-1 left-0 w-full h-1 bg-orange-400"></span>
                </span>
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                The cost of studying for international students depends on several factors, including the institution,
                program of study, location, and available funding opportunities. Additionally, living expenses such as
                rent, utilities, and recreational activities play a significant role in the overall cost.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 font-medium">Tuition Fees (Average per annum)</span>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex justify-between items-center">
                  <span className="text-gray-900 font-semibold text-lg">Bachelor&apos;s</span>
                  <span className="text-gray-900 font-bold text-lg">INR 1,00,000 - 20,00,000</span>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex justify-between items-center">
                  <span className="text-gray-900 font-semibold text-lg">Master&apos;s</span>
                  <span className="text-gray-900 font-bold text-lg">INR 30,00,00 - 32,00,000</span>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex justify-between items-center">
                  <span className="text-gray-900 font-semibold text-lg">Doctorate</span>
                  <span className="text-gray-900 font-bold text-lg">INR 39,00,000 - 53,00,000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documents and Visa Section */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            More About{" "}
            <span className="relative">
              Global Universities<span className="absolute bottom-1 left-0 w-full h-1 bg-orange-400"></span>
            </span>
          </h2>

          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <div className="space-y-2">
                <Button
                  variant={activeTab === "documents" ? "default" : "outline"}
                  className={`w-full justify-start rounded-full py-3 px-6 ${
                    activeTab === "documents"
                      ? "bg-blue-700 text-white"
                      : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
                  }`}
                  onClick={() => setActiveTab("documents")}
                >
                  <FileText className="mr-2" size={20} />
                  Documents
                </Button>
                <Button
                  variant={activeTab === "visa" ? "default" : "outline"}
                  className={`w-full justify-start rounded-full py-3 px-6 ${
                    activeTab === "visa"
                      ? "bg-blue-700 text-white"
                      : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
                  }`}
                  onClick={() => setActiveTab("visa")}
                >
                  <Globe className="mr-2" size={20} />
                  Visa
                </Button>
              </div>
            </div>

            <div className="lg:col-span-3">
              <Card className="bg-gray-50 rounded-2xl p-8">
                <CardContent className="p-0">
                  {activeTab === "documents" && (
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">
                        Documents required to study in the Global Universities:
                      </h3>
                      <p className="text-gray-700 mb-6">
                        Application to one of the global colleges involves several steps and varies according to the
                        country, university and level of study. The application procedure includes:
                      </p>
                      <ul className="space-y-3 text-gray-700 mb-8">
                        <li>• Completed application form (online or paper-based).</li>
                        <li>• Transcripts and diplomas from previous educational institutions.</li>
                        <li>• Statement of purpose or personal statement.</li>
                        <li>• Letters of recommendation (academic and/or professional).</li>
                        <li>• Curriculum vitae (CV) or resume.</li>
                        <li>• Proof of language proficiency (if required).</li>
                        <li>• Standardized test scores (if required).</li>
                        <li>• Passport-sized photos.</li>
                        <li>
                          • Financial documentation to demonstrate the ability to cover tuition and living expenses.
                        </li>
                        <li>• Application fee (if applicable).</li>
                      </ul>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Intake:</h4>
                          <p className="text-gray-700">
                            The major intake of international universities is Fall, Summer and Spring seasons
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Entrance exams:</h4>
                          <p className="text-gray-700">1. TOEFL</p>
                          <p className="text-gray-700">2. IELTS</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "visa" && (
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">Study Visa Process</h3>
                      <p className="text-gray-700 mb-6">
                        Visa application being a long procedure will have to appear for specific tests and collect the
                        necessary documents. The exams include IELTS, TOEFL or any test that is accepted by the
                        country/university.
                      </p>
                      <ul className="space-y-3 text-gray-700 mb-8">
                        <li>
                          • For applying for a visa, one has to apply to the specific country well in advance. In case
                          applying for a scholarship, the application should be done well in advance.
                        </li>
                        <li>
                          • Once all the necessary documents is gathered. Documents such as application form,
                          application fees, attending an interview at the local embassy or consulate.
                        </li>
                        <li>
                          • Some countries requires the students to provide biometric information such as fingerprints
                          in order to undergo the visa application process.
                        </li>
                      </ul>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Documents required:</h4>
                          <p className="text-gray-700">
                            In every country, there is an immigration department that has specific rules that has to be
                            followed and a set of documents that needs to be in possession while applying for a visa.
                            The documents are listed below:
                          </p>
                        </div>
                        <ul className="space-y-2 text-gray-700 mt-4">
                          <li>• Valid passport</li>
                          <li>• Proof of bona fide student</li>
                          <li>• Proof of financial stability</li>
                          <li>• Test scores of English proficiency test</li>
                        </ul>
                        <p className="text-gray-700 mt-6">The visa can be applied in both online and offline mode.</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Scholarships Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                <span className="relative">
                  Scholarships<span className="absolute bottom-1 left-0 w-full h-1 bg-orange-400"></span>
                </span>{" "}
                In Global Universities
              </h2>
              <p className="text-gray-700 text-lg mb-8">
                Students who wish to fund their foreign education can apply to the following scholarships:
              </p>

              <div className="space-y-4">
                {[
                  "Fulbright-Nehru Master's Fellowships",
                  "Great Wall Program",
                  "The JN Tata Endowment – Higher Education of Indians",
                  "Aga Khan Foundation International Scholarship Programme",
                  "Fulbright-Kalam Climate Fellowship",
                  "The Lady Meherbai D Tata Education Trust",
                  "National Overseas Scholarship Scheme",
                ].map((scholarship, index) => (
                  <p key={index} className="text-gray-900 font-medium">
                    {scholarship}
                  </p>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Graduate student"
                className="w-full h-auto rounded-lg"
              />
              {/* Decorative elements */}
              <div className="absolute top-10 right-10 text-blue-600">
                <GraduationCap size={40} />
              </div>
              <div className="absolute bottom-20 left-10 text-blue-600">
                <Award size={32} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">
              <span className="relative">
                Success Stories<span className="absolute bottom-1 left-0 w-full h-1 bg-orange-400"></span>
              </span>
            </h2>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="rounded-full bg-white border-gray-300">
                <ChevronLeft size={20} />
              </Button>
              <Button variant="default" size="icon" className="rounded-full bg-blue-700">
                <ChevronRight size={20} />
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white rounded-2xl p-8 shadow-sm">
              <CardContent className="p-0">
                <div className="flex gap-6">
                  <div className="relative flex-shrink-0">
                    <img
                      src="/placeholder.svg?height=200&width=200"
                      alt="Student testimonial"
                      className="w-32 h-32 object-cover rounded-lg"
                    />
                    <Button size="icon" className="absolute inset-0 m-auto bg-white/80 hover:bg-white rounded-full">
                      <Play size={20} className="text-blue-600" />
                    </Button>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      Edwise does not stop at admissions. Their ongoing support post-study helped me transition smoothly
                      into my career. The best decision for my academic journey!
                    </p>
                    <div className="flex items-center gap-3">
                      <img
                        src="/placeholder.svg?height=50&width=50"
                        alt="Miral Shah"
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold text-gray-900">Miral Shah</p>
                        <p className="text-gray-600 text-sm">Bournemouth University, UK</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white rounded-2xl p-8 shadow-sm">
              <CardContent className="p-0">
                <div className="flex gap-6">
                  <div className="relative flex-shrink-0">
                    <img
                      src="/placeholder.svg?height=200&width=200"
                      alt="Student testimonial"
                      className="w-32 h-32 object-cover rounded-lg"
                    />
                    <Button size="icon" className="absolute inset-0 m-auto bg-white/80 hover:bg-white rounded-full">
                      <Play size={20} className="text-blue-600" />
                    </Button>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      It is one of the most available and committed organizations. The counselors and their approach...
                    </p>
                    <div className="flex items-center gap-3">
                      <img
                        src="/placeholder.svg?height=50&width=50"
                        alt="Abhi"
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold text-gray-900">Abhi</p>
                        <p className="text-gray-600 text-sm">New York</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer CTA Section */}
      <section className="py-16 px-4 md:px-8 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-4">
                Get Ready To Begin
                <br />
                Your{" "}
                <span className="relative">
                  Journey<span className="absolute bottom-1 left-0 w-full h-1 bg-orange-400"></span>
                </span>
              </h2>
              <p className="text-blue-100 text-lg mb-8">
                Explore more, stay informed, and start your journey to academic excellence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-3 rounded-full text-lg">
                  Contact Us
                </Button>
                <div className="flex gap-3">
                  {[
                    { icon: <Instagram size={20} />, color: "bg-pink-500" },
                    { icon: <Youtube size={20} />, color: "bg-red-500" },
                    { icon: <Linkedin size={20} />, color: "bg-blue-600" },
                    { icon: <Facebook size={20} />, color: "bg-blue-800" },
                    { icon: <MessageCircle size={20} />, color: "bg-black" },
                    { icon: <Globe size={20} />, color: "bg-orange-500" },
                  ].map((social, index) => (
                    <Button key={index} size="icon" className={`${social.color} hover:opacity-80 rounded-lg`}>
                      {social.icon}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Student with globe and educational elements"
                className="w-full h-auto"
              />
              {/* Decorative elements */}
              <div className="absolute top-10 right-10 text-white">
                <GraduationCap size={40} />
              </div>
              <div className="absolute bottom-20 left-10 text-white">
                <Globe size={32} />
              </div>
              <div className="absolute top-1/2 right-20 text-white">
                <FileText size={28} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chat Support Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button size="icon" className="bg-blue-700 hover:bg-blue-800 rounded-full w-14 h-14 shadow-lg">
          <MessageCircle size={24} />
        </Button>
      </div>
    </div>
    </div>
  )
}
