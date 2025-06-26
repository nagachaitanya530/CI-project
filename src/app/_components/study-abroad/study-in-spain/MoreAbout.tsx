import React, { useState } from "react";
import { FileText, CheckCircle } from "react-feather";
import { motion } from "framer-motion";

function MoreAbout({ onFreeConsultClick }: { onFreeConsultClick: () => void }) {
    const [tab, setTab] = useState("documents");
    const tabs = [
        { id: "documents", name: "Documents", icon: <FileText size={18} /> },
        { id: "visa", name: "Visa", icon: <CheckCircle size={18} /> },
      ];
    return (
        <>
        <section className="py-28 px-6 lg:px-24 bg-white">
      <h2 className="text-5xl font-bold text-center text-gray-900 mb-12">
        More About <span className="underline decoration-red-500 underline-offset-[6px]">Spain</span>
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
          className="lg:col-span-3 bg-gray-50 p-10 rounded-3xl shadow-lg"
        >
          {tab === "documents" ? (
            <>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Documents required to study in Spain
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Proof of earning your Bachelor’s degree or High School diploma</li>
                <li>A copy of your passport</li>
                <li>A copy of your transcripts</li>
                <li>2 Letter of Recommendations</li>
                <li>Statement of Purpose</li>
                <li>English Language Proficiency</li>
                <li>Updated Resume</li>
              </ul>
              <div className="mt-6 text-left">
                <button
            onClick={onFreeConsultClick}
            className="mt-10 px-6 py-3 bg-[#183D8C] hover:bg-[#102b6a] text-white font-semibold rounded-xl shadow-md transition-all"
          >
            Free Expert Consultation
          </button>
              </div>
            </>
          ) : (
            <>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Spain study visa process
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Visa application form</li>
                <li>Photograph</li>
                <li>Valid and unexpired passport</li>
                <li>Proof of acceptance of study</li>
                <li>Proof of Financial Means</li>
                <li>Health Insurance (approved by Spanish Government)</li>
                <li>Criminal record and check certificate</li>
                <li>Medical Certificate</li>
                <li>Proof of representatives identity and capacity (If minor)</li>
                <li>Authorization of legal representatives (If minor)</li>
                <li>Payment of Visa Fees</li>
              </ul>
              <p className="text-gray-700 mt-4">
                The visa application process can take several weeks, so it is advisable to apply well in advance of your intended travel date.
              </p>
              <div className="mt-6 text-left">
                <button
            onClick={onFreeConsultClick}
            className="mt-10 px-6 py-3 bg-[#183D8C] hover:bg-[#102b6a] text-white font-semibold rounded-xl shadow-md transition-all"
          >
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