"use client"
import NavigationSection from "~/app/_components/navigation1"
import { useState } from "react"
import University from "./university"
import { Button } from "../../../components/ui/button"
import { Input } from "../../../components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../components/ui/select"
import { Checkbox } from "../../../components/ui/checkbox"
import { Card, CardContent } from "../../../components/ui/card"
import CostOfStudyingPage from "./cost"
import CarrerPage from "./carrer"
import Process from "./process"
import FooterSection from "~/app/_components/footer1"
import YourJourney from "~/app/_components/study-abroad/your-journey"
import FAQ from "~/app/_components/study-abroad/faq"
import SuccessStories from "~/app/_components/study-abroad/home/successstories"
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
import ScholarshipsPage from "./scholership"

const IndiaFAQs = [
  {
    question: "What are the entrance exams accepted internationally?",
    answer: "The entrance tests generally accepted are: IELTS, TOEFL, GMAT, GRE, GATE, PTE, LSAT, ACT, SAT and USMLE"
  },
  {
    question: "What type of courses are available abroad?",
    answer: "The Government of India has made it easier for International students to obtain a visa to study in India and the process is generally straightforward."
  },
  {
    question: "Do I need to learn a new language for studying abroad?",
    answer: "No, you need not learn a new language as the medium of instruction at the best global universities would be English."
  }
  
];
export default function GlobalUniversitiesPage() {
  const [activeTab, setActiveTab] = useState("documents")

  return (
    <div>
         <NavigationSection/>
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


     
<section>
      <Topcourses/>
</section>

       {/* Cost of Studying Section */}
       <section className="py-16 px-4 md:px-8 bg-gray-100">
        <CostOfStudyingPage/>
      </section>
      <section>
        <ScholarshipsPage/>
      </section>
      <section>
        <CarrerPage/>
      </section>

      {/* Documents and Visa Section */}
      <section className="py-16 px-4 md:px-8 bg-white">
       <Process/>
      </section>
      {/* Success Stories Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-200">
      <SuccessStories/>
      </section>
      {/*faq*/}
      
      <section>
      <FAQ faqs={IndiaFAQs} title="FAQs" />
      <YourJourney/>
      </section>
      {/* Footer CTA Section */}
      <section className="py-16 px-4 md:px-8 bg-blue-700 text-white">
        <FooterSection/>
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
