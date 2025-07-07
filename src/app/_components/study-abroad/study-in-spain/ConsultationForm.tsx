"use client";

import { useState } from "react";

const countries = ["UK", "USA", "CAN", "AUS", "NZ", "IRE", "SNG", "Other"];
const intakes = ["Jan 25", "Apr 25", "Sept 25"];
const studyLevels = ["Bachelor's", "Master's", "Diploma"];
const branches = [
  "AHMEDABAD",
  "BANGALORE",
  "CHANDIGARH",
  "CHENNAI",
  "COCHIN",
  "COIMBATORE",
  "DELHI",
  "HYDERABAD",
  "INDORE",
  "JAIPUR",
  "KOLKATA",
  "MALAD",
  "MARINELINES",
  "MUMBAI",
];

type Props = {
  show: boolean;
  onClose: () => void;
};

export default function MultiStepConsultationForm({ show, onClose }: Props) {
  const [step, setStep] = useState(1);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [selectedIntake, setSelectedIntake] = useState<string | null>(null);
  const [selectedStudyLevel, setSelectedStudyLevel] = useState<string | null>(
    null
  );
  const [specialisation, setSpecialisation] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [branch, setBranch] = useState("");
  const [consent, setConsent] = useState(true);

  const handleSubmit = () => {
    const data = {
      selectedCountry,
      selectedIntake,
      selectedStudyLevel,
      specialisation,
      firstName,
      lastName,
      email,
      mobile,
      branch,
      consent,
    };
    alert("Form submitted successfully!\n" + JSON.stringify(data, null, 2));
    onClose();
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-10 rounded-3xl shadow-lg w-[95%] max-w-2xl relative text-center">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-xl text-gray-500 hover:text-gray-800"
        >
          &times;
        </button>

        {step === 1 && (
          <>
            <h2 className="text-xl font-bold mb-2">
              Welcome To The Journey Of Studying Abroad!
            </h2>
            <p className="text-blue-800 font-medium mb-4">
              Choose Your Desired Country
            </p>
            <div className="grid grid-cols-2 gap-3">
              {countries.map((country) => (
                <button
                  key={country}
                  onClick={() => {
                    setSelectedCountry(country);
                    setStep(2);
                  }}
                  className="bg-gray-100 hover:bg-blue-200 text-sm font-medium py-2 rounded-full"
                >
                  {country}
                </button>
              ))}
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="text-xl font-semibold mt-4 mb-2">
              Select your desired commencement date.
            </h2>
            <p className="text-blue-800 mb-5 font-medium">Choose Your Intake</p>
            <div className="flex justify-center gap-3 mb-6 flex-wrap">
              {intakes.map((intake) => (
                <button
                  key={intake}
                  onClick={() => {
                    setSelectedIntake(intake);
                    setStep(3);
                  }}
                  className={`px-5 py-2 rounded-full font-medium ${
                    selectedIntake === intake
                      ? "bg-blue-700 text-white"
                      : "bg-gray-100 hover:bg-blue-100"
                  }`}
                >
                  {intake}
                </button>
              ))}
            </div>
            <button
              onClick={() => setStep(1)}
              className="mt-2 px-6 py-2 bg-blue-700 text-white rounded-full"
            >
              Back
            </button>
          </>
        )}

        {step === 3 && (
          <>
            <h2 className="text-xl font-bold mb-2">
              What level of study are you planning to pursue?
            </h2>
            <p className="text-blue-800 font-medium mb-4">Choose Your Level</p>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {studyLevels.map((level) => (
                <button
                  key={level}
                  onClick={() => {
                    setSelectedStudyLevel(level);
                    setStep(4);
                  }}
                  className={`px-5 py-2 rounded-full font-medium ${
                    selectedStudyLevel === level
                      ? "bg-blue-700 text-white"
                      : "bg-gray-100 hover:bg-blue-100"
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
            <button
              onClick={() => setStep(2)}
              className="mt-2 px-6 py-2 bg-blue-700 text-white rounded-full"
            >
              Back
            </button>
          </>
        )}

        {step === 4 && (
          <>
            <h2 className="text-xl font-bold mb-4">
              Enter your area of academic specialisation
            </h2>
            <input
              type="text"
              value={specialisation}
              onChange={(e) => setSpecialisation(e.target.value)}
              placeholder="e.g. Computer Science"
              className="w-full border p-2 rounded-lg mb-4"
            />
            <div className="flex justify-between">
              <button
                onClick={() => setStep(3)}
                className="bg-gray-200 px-6 py-2 rounded-lg"
              >
                Back
              </button>
              <button
                onClick={() => setStep(5)}
                className="bg-blue-700 text-white px-6 py-2 rounded-lg"
              >
                Continue
              </button>
            </div>
          </>
        )}

        {step === 5 && (
          <>
            <h2 className="text-xl font-bold mb-2">
              All grand adventures begin with your name.
            </h2>
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="border p-2 rounded-lg"
              />
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="border p-2 rounded-lg"
              />
            </div>
            <div className="flex justify-between mt-4">
              <button
                onClick={() => setStep(4)}
                className="bg-gray-200 px-6 py-2 rounded-lg"
              >
                Back
              </button>
              <button
                onClick={() => setStep(6)}
                className="bg-blue-700 text-white px-6 py-2 rounded-lg"
              >
                Continue
              </button>
            </div>
          </>
        )}

        {step === 6 && (
          <>
            <h2 className="text-xl font-bold mb-4">How can we contact you?</h2>
            <input
              type="email"
              placeholder="Email ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border p-2 rounded-lg mb-3"
            />
            <input
              type="tel"
              placeholder="Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="w-full border p-2 rounded-lg mb-3"
            />
            <select
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
              className="w-full border p-2 rounded-lg mb-3"
            >
              <option value="">Select Branch</option>
              {branches.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
            <label className="flex items-center space-x-2 mb-2">
              <input
                type="checkbox"
                checked={consent}
                onChange={() => setConsent(!consent)}
              />
              <span className="whitespace-nowrap text-sm">
                I consent to be contacted via Calls, WhatsApp, Email.
              </span>
            </label>
            <div className="flex justify-between">
              <button
                onClick={() => setStep(5)}
                className="bg-gray-200 px-6 py-2 rounded-lg"
              >
                Back
              </button>
              <button
                onClick={() => setStep(7)}
                className="bg-blue-700 text-white px-6 py-2 rounded-lg"
              >
                Continue
              </button>
            </div>
          </>
        )}

        {step === 7 && (
          <>
            <h2 className="text-2xl font-bold mb-2">Summary</h2>
            <p className="text-gray-600 mb-6">
              Kindly confirm your details before proceeding.
            </p>

            <div className="text-left space-y-3">
              <div>
                <h3 className="font-bold text-lg">Course Details :</h3>
                <p>
                  <strong>Country</strong> : {selectedCountry}
                </p>
                <p>
                  <strong>Intake</strong> : {selectedIntake}
                </p>
                <p>
                  <strong>Level</strong> : {selectedStudyLevel}
                </p>
                <p>
                  <strong>Specialisation</strong> : {specialisation}
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg">Personal Details :</h3>
                <p>
                  <strong>Full Name</strong> : {firstName} {lastName}
                </p>
                <p>
                  <strong>Mobile number</strong> : {mobile}
                </p>
                <p>
                  <strong>Email ID</strong> : {email}
                </p>
                <p>
                  <strong>Branch</strong> : {branch}
                </p>
              </div>
            </div>

            <div className="flex justify-between mt-6">
              <button
                onClick={() => setStep(6)}
                className="px-6 py-2 bg-gray-200 rounded-lg"
              >
                Edit Details
              </button>
              <button
                onClick={handleSubmit}
                className="px-6 py-2 bg-blue-700 text-white rounded-lg"
              >
                Submit
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
