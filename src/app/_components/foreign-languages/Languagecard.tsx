import React from 'react';

export default function LanguageCard() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/919000000000?text=I%20want%20to%20enquire%20about%20PDCC%20Spoken%20English%20course', '_blank');
  };
  return (
    <div className="min-h-screen bg-sky-400">
      {/* Main Section - Special Programs */}
      <section className="px-8 pt-12 pb-20 mt-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            {/* Left Content */}
            <div className="flex-1 pr-12 max-w-lg">
              <h2 className="text-green-800 text-lg font-bold mb-4">
                Why Choose Our Service?
              </h2>
              <h1 className="text-white text-3xl font-bold mb-6 leading-tight">
                Special programmes for<br />
                permanent residency<br />
                candidates
              </h1>
              <p className="text-white/80 text-base mb-8 leading-relaxed">
                Get expert guidance for your immigration journey with our specialized programs designed for permanent residency success.
              </p>
              <button className=" onClick={handleWhatsApp} bg-blue-600 hover:bg-purple-600 text-white px-8 py-3 rounded font-medium shadow-md hover:shadow-lg transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 ease-in-out active:scale-95 relative overflow-hidden group hover:cursor-pointer">
                <span className="relative z-10">CONNECT WITH US</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 group-hover:animate-pulse transition-opacity duration-300"></div>
              </button>
            </div>

            {/* Right Content - Language Chart */}
            <div className="flex justify-center">
  <div className="bg-white p-4 rounded-lg shadow-lg w-[600px] ml-10">
    {/* Header */}
    <div className="flex items-center justify-between mb-4">
      <span className="text-xs text-gray-600 font-semibold">Cambridge English Qualifications</span>
      <span className="text-xs text-gray-600 font-semibold">Multilevel Tests</span>
    </div>

    {/* Chart */}
    <div className="space-y-1.5">
      {[
        { level: 'C2', schools: 'C2 Proficiency', general: 'C2 Proficiency', business: '', ielts: '8.5' },
        { level: 'C1', schools: 'C1 Advanced', general: 'C1 Advanced', business: 'C1 Business Higher', ielts: '7.0' },
        { level: 'B2', schools: 'B2 First for Schools', general: 'B2 First', business: 'B2 Business Vantage', ielts: '6.0' },
        { level: 'B1', schools: 'B1 Preliminary for Schools', general: 'B1 Preliminary', business: 'B1 Business Preliminary', ielts: '5.0' },
        { level: 'A2', schools: 'A2 Key for Schools', general: 'A2 Key', business: '', ielts: '4.0' },
        { level: 'A1', schools: 'A1 Movers', general: '', business: '', ielts: '' },
        { level: 'Pre A1', schools: 'Pre A1 Starters', general: '', business: '', ielts: '' },
      ].map((item, idx) => (
        <div key={idx} className="flex items-center">
          <span className="w-12 text-xs font-semibold text-gray-700">{item.level}</span>
          <div className="flex-1 grid grid-cols-5 gap-1 ml-2">
            <div className="bg-purple-600 text-white text-[10px] h-8 flex items-center justify-center rounded w-[90px]">
              {item.schools}
            </div>
            <div className="bg-red-500 text-white text-[10px] h-8 flex items-center justify-center rounded w-[85px]">
              {item.general}
            </div>
            <div className="bg-blue-600 text-white text-[10px] h-8 flex items-center justify-center rounded w-[90px]">
              {item.business}
            </div>
            <div className="bg-yellow-400 text-white text-[10px] h-8 flex items-center justify-center rounded w-[75px]">
              {item.level === 'C2' && 'Linguaskill'}
            </div>
            <div className="text-[10px] text-gray-700 h-8 flex items-center justify-center w-[50px]">
              {item.ielts && `IELTS ${item.ielts}`}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

          </div>
        </div>
      </section>

      {/* Bottom Section - Language Learning Card positioned to overlap */}
      <div className="relative -mt-12 pb-12">
  <div className="max-w-7xl mx-auto px-8">
    <div className="flex justify-center">
      <div className="bg-white p-8 rounded-lg shadow-xl w-[550px] relative z-10">
        <h2 className="text-sky-400 text-2xl font-bold mb-4">
          Why Foreign Languages With NIL?
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed mb-6">
          To consider achieving the skill to acquire a foreign language takes time, strength,
          patience, tenacity, and persistence. Fortunately, there are methods that you
          can use to accommodate your expanding vision. A linguist that you
          can use to improve your linguistic skills includes enhancing cognitive abilities
          and enhancing you will be able to discover more interesting as you go by
          practicing as best as you can.
        </p>
        <div className="flex justify-center">
          <a href="/book-demo">
            <button className="bg-green-500 hover:bg-orange-500 text-white px-6 py-3 rounded font-medium shadow-md hover:shadow-lg transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 ease-in-out active:scale-95 relative overflow-hidden group hover:cursor-pointer">
              <span className="relative z-10">BOOK A DEMO</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 group-hover:animate-pulse transition-opacity duration-300"></div>
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  );
}