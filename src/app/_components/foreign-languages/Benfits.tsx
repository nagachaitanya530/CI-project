import React from 'react';
import { Check, CheckCircle } from 'lucide-react';

const BenefitsSection = () => {
  return (
    <section className="flex flex-col md:flex-row w-full h-[80vh] min-h-[600px] mt-8">
      <div className="w-full md:w-1/2 flex items-center justify-center overflow-hidden bg-gray-100">
        <img 
          src="../../home/3-proffessionalsStudy.jpg"
          alt="Your custom image" 
          className="w-full h-full object-cover" 
        />
      </div>
      <div className="bg-white w-full md:w-1/2 flex flex-col justify-center px-8 md:px-12 lg:px-16 py-8 md:py-12">
        <h3 className="text-green-800 text-lg md:text-xl font-bold mb-4 tracking-wide uppercase">
          Benefits
        </h3>
        <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold leading-tight mb-6 text-[#0d79ab] tracking-wide">
          UNLIMITED POSSIBILITIES
        </h1>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-lg mb-8">
          The benefits of learning foreign languages are multiplying as the world gets more 
          globalised, and bilingualism is today considered to be one of the most useful real-world 
          skills that has ever existed, rather than simply being a cool party trick to 
          impress friends.
        </p>
        <div className="space-y-3">
          <div className="flex items-center">
            <CheckCircle className="text-green-500 w-5 h-5 mr-3" />
            <span className="text-gray-700">Global Communication Skills</span>
          </div>
          <div className="flex items-center">
            <CheckCircle className="text-green-500 w-5 h-5 mr-3" />
            <span className="text-gray-700">Career Advancement Opportunities</span>
          </div>
          <div className="flex items-center">
            <CheckCircle className="text-green-500 w-5 h-5 mr-3" />
            <span className="text-gray-700">Cultural Understanding</span>
          </div>
        </div>
      </div>
    </section>
   );
};
export default BenefitsSection;