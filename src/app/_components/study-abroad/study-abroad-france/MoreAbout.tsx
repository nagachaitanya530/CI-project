import React, { useState } from "react";
import { FileText, CheckCircle } from "react-feather";
import { motion } from "framer-motion";
import ConsultationForm from "./ConsultationForm";

function MoreAbout() {
    const [tab, setTab] = useState("documents");
    
      const tabs = [
        { id: "documents", name: "Documents", icon: <FileText size={18} /> },
        { id: "visa", name: "Visa", icon: <CheckCircle size={18} /> },
      ];
    const [isopen, setIsOpen] = useState(false);  

    return (
        <>

       {isopen && <ConsultationForm show={isopen} onClose={() => setIsOpen(false)} />}
        <section className="py-28 px-6 lg:px-24 bg-white">
      <h2 className="text-5xl font-bold text-center text-orange-600 mb-12">
        More About <span className="text-black">France</span>
      </h2>

      <div className="grid lg:grid-cols-4 gap-10">
        <div className="flex lg:flex-col gap-4 lg:col-span-1 justify-start">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full hover:cursor-pointer hover:shadow-lg font-medium transition-all duration-300 ${
                tab === t.id
                  ? "bg-blue-900 text-white shadow-md"
                  : "bg-blue-100 text-blue-900 hover:bg-blue-200 hover:text-blue-900"
              }`}
            >
              {t.icon} {t.name}
            </button>
          ))}
        </div>

        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-3 bg-gray-50 p-10 border-3 border-gray-200 rounded-3xl shadow-lg"
        >
          {tab === "documents" ? (
            <>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Documents required to study in France
              </h3>
              <p className="text-gray-700 mb-4">
               To study in France as an international student, there are specific requirements for documents that depend on the course of study and the institution. Here is a list of documents that are commonly required to study in France:
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Application form</li>
                <li>Identity Proof</li>
                <li>Educational documents like high school or secondary school academic transcripts, Bachelor’s Degree
                 (if pursuing a Master's), various Diplomas or Degree certificates.</li>
                <li>Letter of Motivation and Statement of Purpose</li>
                <li>Curriculum Vitae (CV) or Resume</li>
                <li>Letters of Recommendation</li>
                <li>Financial documents</li>
                <li>Visa documents</li>
                <li>Health insurance</li>
              </ul>
              <div className="mt-6 text-left">
                <button onClick= {()=> setIsOpen(true)} className="px-6 py-3 bg-white text-blue-900 hover:cursor-pointer font-semibold border border-blue-900 rounded-full hover:bg-blue-900 hover:text-white transition">
                  Free Expert Consultation
                </button>
              </div>
            </>
          ) : (
            <>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                France study visa process
              </h3>
              <p className="text-gray-700 mb-4">
                France has a very simple procedure for student visas. Students must complete the Campus France visa application process prior to applying for the French visa. An interview will be conducted by Campus France and after getting an NOC, they need to book a visa appointment with the VFS.
              </p>
              
              <div className="mt-6 text-left">
                <button onClick={()=> setIsOpen(true)} className="px-6 py-3 bg-white hover:cursor-pointer text-blue-900 font-semibold border border-blue-900 rounded-full hover:bg-blue-900 hover:text-white transition">
                  Free Expert Consultation
                </button>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </section>
        </>
    );
}
export default MoreAbout;