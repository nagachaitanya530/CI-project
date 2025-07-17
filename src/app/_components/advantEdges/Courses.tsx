"use client";

import { useState } from "react";
import { Send, Megaphone, Gem ,Check } from "lucide-react";
import Link from "next/link";
const plans = {
  monthly: [
    {
      title: "Foundation Group",
      price: 1990,
      icon: <Send className="w-6 h-6 text-[#4B50C4]" />,
      features: [
        "2 Hour Classes",
        "Mon-Fri Regular",
        "Sunday Webinars",
        "All Live Sessions",
      ],
      description: "This is a starter course for beginners who want to learn English.",
    },
    {
      title: "Advanced English",
      price: 2590,
      icon: <Megaphone className="w-6 h-6 text-[#4B50C4]" />,
      tag: "POPULAR",
      features: [
        "All Foundation Benefits",
        "In-Depth Grammar",
        "High Level Vocabulary",
        "V&A Training",
      ],
      description: "This course is for those who have a moderate command on the language.",
    },
    {
      title: "AdvantEdge",
      price: 1499,
      icon: <Gem className="w-6 h-6 text-[#4B50C4]" />,
      tag: "NEW",
      features: [
        "Group + Personal",
        "Group Practice",
        "1:1 Trainer",
        "Sunday Extra Sessions",
      ],
      description: "This is a course where you get the benefits of group and personal training.",
    },
  ],
  quarterly: [
    {
      title: "Foundation Group",
      price: 4990,
      icon: <Send className="w-6 h-6 text-[#4B50C4]" />,
      features: [
        "2 Hour Classes",
        "Mon-Fri Regular",
        "Sunday Webinars",
        "All Live Sessions",
      ],
      description: "3 month starter course for beginners.",
    },
    {
      title: "Advanced English",
      price: 6490,
      icon: <Megaphone className="w-6 h-6 text-[#4B50C4]" />,
      tag: "POPULAR",
      features: [
        "All Foundation Benefits",
        "In-Depth Grammar",
        "High Level Vocabulary",
        "V&A Training",
      ],
      description: "3 month advanced level training.",
    },
    {
      title: "AdvantEdge",
      price: 3890,
      icon: <Gem className="w-6 h-6 text-[#4B50C4]" />,
      tag: "NEW",
      features: [
        "Group + Personal",
        "Group Practice",
        "1:1 Trainer",
        "Sunday Extra Sessions",
      ],
      description: "3 month combined personal + group plan.",
    },
  ],
};

export default function CoursePlans() {
  const [isMonthly, setIsMonthly] = useState(true);
  const currentPlans = isMonthly ? plans.monthly : plans.quarterly;

  return (
    <section className="bg-[#4B50C4] text-white py-20 px-4 md:px-16 text-center">
      <h3 className="text-sm uppercase tracking-widest mb-2">Choose according to your needs</h3>
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Multiple Course Options</h1>
      <p className="max-w-3xl mx-auto text-sm mb-6">
        We offer cost effective Group Classes as well as more customised and focused Personal Training Sessions.
        Not only that we have courses spanning multiple levels such as Foundation English, Business English and
        Advanced English. We have options for Kids as well.
      </p>

      <div className="flex justify-center items-center gap-4 mb-10">
        <span className={`text-sm font-semibold ${isMonthly ? "text-white" : "text-gray-300"}`}>Monthly</span>
        <div
          className="w-14 h-7 flex items-center bg-white rounded-full px-1 cursor-pointer"
          onClick={() => setIsMonthly(!isMonthly)}
        >
          <div
            className={`bg-orange-600 w-5 h-5 rounded-full shadow-md transform duration-300 ${
              isMonthly ? "" : "translate-x-7"
            }`}
          ></div>
        </div>
        <span className={`text-sm font-semibold ${!isMonthly ? "text-white" : "text-gray-300"}`}>3 Month</span>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        <div className="bg-[#3f45c3] text-left p-6 rounded-xl w-[280px]">
          <h4 className="text-xs font-medium mb-2 uppercase">Per Month</h4>
          <h3 className="text-lg font-bold mb-3">Pay Monthly & Go Along</h3>
          <p className="text-sm mb-2">
            You can choose to pay monthly for our courses and finish your course in 3 months.
          </p>
          <p className="text-xs text-gray-300">*You can get discounted fee for 3 month plans.</p>
        </div>

        {currentPlans.map((plan, idx) => (
          <div key={idx} className="bg-white text-[#111c43] p-6 rounded-xl w-[280px]">
            <div className="flex justify-center mb-3">{plan.icon}</div>

            {plan.tag && (
              <span
                className={`absolute top-2 right-2 text-xs font-bold px-2 py-1 rounded-full ${
                  plan.tag === "POPULAR" ? "bg-green-500 text-white" : "bg-red-500 text-white"
                }`}
              >
                {plan.tag}
              </span>
            )}
            <h2 className="text-lg font-bold">{plan.title}</h2>
            <p className="text-3xl font-bold text-[#4B50C4] mb-2">₹{plan.price}</p>
         <ul className="text-sm space-y-1 mb-3">
  {plan.features.map((feat, i) => (
    <li key={i} className="flex items-start gap-2">
      <Check className="w-4 h-4 text-green-600 mt-1" />
      <span>{feat}</span>
    </li>
  ))}
</ul>

            <p className="text-xs text-gray-600 mb-4">{plan.description}</p>
            <Link href="enrollment">
            <button className="bg-[#111c43] text-white text-sm py-2 px-4 rounded w-full font-semibold">
              Enroll Now
            </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
