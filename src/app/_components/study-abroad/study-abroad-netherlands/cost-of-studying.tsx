import React from 'react';

interface TuitionFee {
  level: string;
  range: string;
}

interface LivingExpense {
  location: string;
  cost: string;
}

interface Accomodation {
  location: string;
  cost: string;
}
const CostOfStudying: React.FC = () => {
  const tuitionFees: TuitionFee[] = [
    { level: "Bachelor's", range: "EUR 6,000 – 15,000" },
    { level: "Master's", range: "EUR 8,000 – 20,000" }
  ];

  const livingExpenses: LivingExpense[] = [
    { location: "", cost: "Approx. EUR 15,000" }
  ];
  
   const accomodation: Accomodation[] = [
    { location: "On-Campus", cost: "EUR 350 - 600" },
    { location: "Off-Campus", cost: "EUR 350 - 600" },
    { location: "Private Apartment", cost: "EUR 350 - 600" }
  ];

  return (
    <div className="bg-slate-100 p-8 rounded-2xl max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Section - Title and Description */}
        <div className="space-y-6">
          <div>
            <h1 className="text-5xl font-bold text-black mb-3 leading-tight">
              Cost Of Studying
            </h1>
            <div className="w-24 h-1 bg-red-500 mb-4"></div>
            <h2 className="text-5xl font-bold text-black leading-tight">In Netherlands</h2>
          </div>
          
          <p className="text-gray-800 text-lg leading-relaxed mt-8">
           The cost of studying in the Netherlands for <br />
           international students depends on several<br />
          factors, including the institution, program of<br />
           study, location, and available funding<br />
           opportunities. Additionally, living expenses<br />
           such as rent, utilities, and recreational<br />
           activities play a significant role in the overall<br />
           cost.
          </p>
        </div>

        {/* Right Section - Cost Details */}
        <div className="space-y-8">
          {/* Tuition Fees Section */}
          <div>
            <h3 className="text-lg font-medium text-gray-600 mb-6">
              Tuition Fees (Average per annum)
            </h3>
            <div className="space-y-4">
              {tuitionFees.map((fee, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl px-6 py-5 shadow-sm border border-gray-200 flex justify-between items-center"
                >
                  <span className="text-black font-medium text-lg">{fee.level}</span>
                  <span className="text-black font-semibold text-lg">{fee.range}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Living Expenses Section */}
          <div>
            <h3 className="text-lg font-medium text-gray-600 mb-6">
              Living Expenses (Average per month)
            </h3>
            <div className="space-y-4">
              {livingExpenses.map((expense, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl px-6 py-5 shadow-sm border border-gray-200 flex justify-between items-center"
                >
                  <span className="text-black font-medium text-lg">{expense.location}</span>
                  <span className="text-black font-semibold text-lg">{expense.cost}</span>
                </div>
              ))}
            </div>
          </div>
           {/* Living Expenses Section */}
          <div>
            <h3 className="text-lg font-medium text-gray-600 mb-6">
              Accomodation (Average per month)
            </h3>
            <div className="space-y-4">
              {accomodation.map((expense, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl px-6 py-5 shadow-sm border border-gray-200 flex justify-between items-center"
                >
                  <span className="text-black font-medium text-lg">{expense.location}</span>
                  <span className="text-black font-semibold text-lg">{expense.cost}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CostOfStudying;