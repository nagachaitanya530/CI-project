'use client';
import { useState } from 'react';
import { X } from 'lucide-react';

const countries = ['UK', 'USA', 'CAN', 'AUS', 'NZ', 'IRE', 'SNG', 'Other'];
const intakes = ['Jan 25', 'Apr 25', 'Sept 25'];
const levels = ["Bachelor's", "Master's", 'Diploma'];
const branches = ['AHMEDABAD', 'MUMBAI', 'DELHI', 'BANGALORE'];

interface StudyAbroadModalProps {
  onClose: () => void;
}

export default function StudyAbroadModal({ onClose }: StudyAbroadModalProps) {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    country: '',
    intake: '',
    level: '',
    specialization: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    branch: '',
  });

  const handleInput = (key: string, value: string) => {
    setForm({ ...form, [key]: value });
  };

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-black/30 flex items-center justify-center z-50 pointer-events-none">
      <div className="bg-white w-full max-w-2xl rounded-3xl p-6 relative shadow-xl pointer-events-auto">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400">
          <X />
        </button>

     
        {step === 0 && (
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-4">Welcome To The Journey Of Studying Abroad!</h2>
            <p className="text-blue-700 mb-4">Choose Your Desired Country</p>
            <div className="flex flex-wrap justify-center gap-4">
              {countries.map((country) => (
                <button
                  key={country}
                  onClick={() => {
                    handleInput('country', country);
                    setStep(1);
                  }}
                  className="bg-[#edf1f7] rounded-full px-6 py-2 font-medium"
                >
                  {country}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 1 && (
          <div className="text-center">
            <p className="mb-4 text-blue-700">Select your desired commencement date</p>
            <h2 className="text-xl font-semibold mb-4">Choose Your Intake</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {intakes.map((intake) => (
                <button
                  key={intake}
                  onClick={() => {
                    handleInput('intake', intake);
                    setStep(2);
                  }}
                  className="bg-[#edf1f7] rounded-full px-6 py-2 font-medium"
                >
                  {intake}
                </button>
              ))}
            </div>
            <button onClick={() => setStep(0)} className="mt-4 text-sm text-gray-600">← Back</button>
          </div>
        )}

       
        {step === 2 && (
          <div className="text-center">
            <p className="mb-4 text-blue-700">What level of study are you planning to pursue?</p>
            <h2 className="text-xl font-semibold mb-4">Choose Your Level</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {levels.map((level) => (
                <button
                  key={level}
                  onClick={() => {
                    handleInput('level', level);
                    setStep(3);
                  }}
                  className="bg-[#edf1f7] rounded-full px-6 py-2 font-medium"
                >
                  {level}
                </button>
              ))}
            </div>
            <button onClick={() => setStep(1)} className="mt-4 text-sm text-gray-600">← Back</button>
          </div>
        )}

        {step === 3 && (
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-4">Enter your area of academic specialisation</h2>
            <input
              value={form.specialization}
              onChange={(e) => handleInput('specialization', e.target.value)}
              placeholder="e.g. BTech, Finance, etc."
              className="border p-2 rounded w-full max-w-md"
            />
            <div className="mt-4 flex justify-between">
              <button onClick={() => setStep(2)} className="text-sm text-gray-600">← Back</button>
              <button onClick={() => setStep(4)} className="bg-blue-700 text-white px-6 py-2 rounded-md font-semibold">
                Continue →
              </button>
            </div>
          </div>
        )}

       
        {step === 4 && (
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-4">What's your name?</h2>
            <div className="flex flex-col gap-4 max-w-md mx-auto">
              <input placeholder="First Name" className="border p-2 rounded" value={form.firstName} onChange={(e) => handleInput('firstName', e.target.value)} />
              <input placeholder="Last Name" className="border p-2 rounded" value={form.lastName} onChange={(e) => handleInput('lastName', e.target.value)} />
            </div>
            <div className="mt-4 flex justify-between">
              <button onClick={() => setStep(3)} className="text-sm text-gray-600">← Back</button>
              <button onClick={() => setStep(5)} className="bg-blue-700 text-white px-6 py-2 rounded-md font-semibold">
                Continue →
              </button>
            </div>
          </div>
        )}

       
        {step === 5 && (
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-4">How can we contact you?</h2>
            <div className="flex flex-col gap-4 max-w-md mx-auto">
              <input placeholder="Email ID" className="border p-2 rounded" value={form.email} onChange={(e) => handleInput('email', e.target.value)} />
              <input placeholder="Mobile Number" className="border p-2 rounded" value={form.phone} onChange={(e) => handleInput('phone', e.target.value)} />
              <select className="border p-2 rounded" value={form.branch} onChange={(e) => handleInput('branch', e.target.value)}>
                <option value="">Select Branch</option>
                {branches.map((branch) => (
                  <option key={branch} value={branch}>{branch}</option>
                ))}
              </select>
            </div>
            <label className="flex items-center justify-center mt-4 gap-2 text-sm text-gray-600">
              <input type="checkbox" className="border rounded" defaultChecked />
              I consent to receiving Calls, WhatsApp, Email and Google RCS from Edwise.
            </label>
            <div className="mt-4 flex justify-between">
              <button onClick={() => setStep(4)} className="text-sm text-gray-600">← Back</button>
              <button onClick={() => setStep(6)} className="bg-blue-700 text-white px-6 py-2 rounded-md font-semibold">
                Continue →
              </button>
            </div>
          </div>
        )}

       
        {step === 6 && (
          <div className="text-left max-w-xl mx-auto">
            <h2 className="text-xl font-semibold mb-4 text-center">Kindly confirm your details before proceeding</h2>

            <div className="mb-4">
              <p className="font-medium">Course Details:</p>
              <p><strong>Country:</strong> {form.country}</p>
              <p><strong>Intake:</strong> {form.intake}</p>
              <p><strong>Level:</strong> {form.level}</p>
              <p><strong>Specialisation:</strong> {form.specialization}</p>
            </div>

            <div className="mb-4">
              <p className="font-medium">Personal Details:</p>
              <p><strong>Full Name:</strong> {form.firstName} {form.lastName}</p>
              <p><strong>Mobile number:</strong> {form.phone}</p>
              <p><strong>Email ID:</strong> {form.email}</p>
              <p><strong>Branch:</strong> {form.branch}</p>
            </div>

            <div className="flex justify-between">
              <button onClick={() => setStep(0)} className="text-sm text-gray-600 underline">Edit Details</button>
              <button className="bg-green-600 text-white px-6 py-2 rounded-md font-semibold">Submit</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
