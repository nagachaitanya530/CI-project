'use client';
import { useState } from "react";

type Plan = {
  title: string;
  duration: string;
  schedule: string;
  sessions: string;
};

const plans: Plan[] = [
  { title: "Foundation 30", duration: "30 Min Sessions", schedule: "Monday -Friday", sessions: "20 Sessions (1 Month)" },
  { title: "Foundation 30", duration: "30 Min Sessions", schedule: "Monday -Friday", sessions: "60 Sessions (3 Month)" },
  { title: "Foundation 40", duration: "40 Min Sessions", schedule: "Monday -Friday", sessions: "20 Sessions (1 Month)" },
  { title: "Foundation 40", duration: "40 Min Sessions", schedule: "Monday -Friday", sessions: "60 Sessions (3 Month)" },
  { title: "Foundation 60", duration: "60 Min Sessions", schedule: "Monday -Friday", sessions: "20 Sessions (1 Month)" },
  { title: "Foundation 60", duration: "60 Min Sessions", schedule: "Monday -Friday", sessions: "60 Sessions (3 Month)" },
];

export default function FoundationPlans() {
  const [showModal, setShowModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

  const openModal = (plan: Plan) => {
    setSelectedPlan(plan);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedPlan(null);
  };

  return (
    <section id="enrollment" className="py-20 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
          Choose Your Foundation Plan
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-lg flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {plan.title}
                </h3>
                <ul className="text-gray-600 space-y-2 mb-6 list-disc list-inside">
                  <li>{plan.duration}</li>
                  <li>{plan.schedule}</li>
                  <li>{plan.sessions}</li>
                </ul>
              </div>
              <button
                onClick={() => openModal(plan)}
                className="bg-[#1a3e7d] hover:bg-[#143065] text-white font-semibold py-2 px-4 rounded shadow-lg transition-all"
              >
                Enroll Now
              </button>
            </div>
          ))}
        </div>
      </div>
<<<<<<< HEAD

=======
>>>>>>> changes_ci
      {showModal && selectedPlan && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white p-6 rounded-xl shadow-2xl max-w-md w-full relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 text-xl font-bold"
            >
              ×
            </button>

            <h3 className="text-xl font-semibold mb-4 text-center text-blue-800">
              Enroll for {selectedPlan.title}
            </h3>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Full Name"
                className="w-full border rounded-md p-2 border-gray-300"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-md p-2 border-gray-300"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border rounded-md p-2 border-gray-300"
              />
              <textarea
                placeholder="Any message (optional)"
                rows={3}
                className="w-full border rounded-md p-2 border-gray-300"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-[#1a3e7d] hover:bg-[#143065] text-white font-semibold py-2 px-4 rounded transition-all"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
