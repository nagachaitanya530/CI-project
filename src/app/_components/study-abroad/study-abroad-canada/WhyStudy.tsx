import { ShieldCheck } from "lucide-react";
import BookConsultationForm from "../BookConsultationForm";


import Image from "next/image";
import React from "react";

interface WhyStudy {
    image: string
    heading: string
    description: string;
}

const items: WhyStudy[] = [
    {
        image: "/shield-check.png",
        heading: "Four of the World's Top 100 Universities",
        description: "Canada is home to four universities that rank amongst the top 100 universities in the world according to the QS World Ranking. Canadian universities are known for their high-quality education and inclusive environments, fostering both academic excellence and research collaboration."
    },
    {
        image: "/shield-check.png",
        heading: "Globally Recognized Degrees",
        description: "The universities in Canada offer world-class education, providing exceptional academic programs and research opportunities, that open the doors to international career opportunities and prestigious academic recognition."
    },
    {
        image: "/shield-check.png",
        heading: "Post Study Work Up To 3 years",
        description: "Canada offers post-study work permits of up to three years, allowing international students to gain valuable work experience after completing their studies."
    },
    {
        image: "/shield-check.png",
        heading: "Working hours",
        description: "When you study in Canada, you get the opportunity to work for 24 hours per week during your ongoing course, and 40 hours per week during vacations, providing valuable work experience and potential income to support your studies."
    },
    {
        image: "/shield-check.png",
        heading: "Permanent Residency & Canadian Immigration",
        description: "A student opting to study in Canada is eligible to apply for post study work and then subsequently for permanent Residency. There are several different immigration programs, including the Express Entry system, making it an attractive study destination."
    },
    {
        image: "/shield-check.png",
        heading: "Safe Place to Study",
        description: "Being a land of immigrants, Canada is known for being a safe and inclusive country, making it an ideal place for international students to study and live."
    },
];

function WhyStudy() {
    return (
        <>
            <section className="mb-5 px-10">
                <div className=" flex flex-col lg:flex-row">
                    <div className="lg:w-3/5   p-10">
                        <h1 className="text-xl md:text-2xl lg:text-4xl mb-5 md:mb-3">Why <span className="font-semibold underline decoration-red-500"> Study in Canada?</span></h1>
                        {items.map((item, index) => (
                            <div key={index} className="">
                                <div className="flex justify-between gap-5 md:p-5">
                                    <Image src={item.image} alt="" className="md:w-7 md:h-7 w-5 h-5 mt-0.5 mt:mt-0 " width={500} height={300} />
                                    <div>
                                        <h3 className="font-semibold text-base md:text-xl mb-5">{item.heading}</h3>
                                        <p className="text-sm md:text-lg">{item.description} </p>
                                    </div>
                                </div>
                                <hr className="my-4" />
                            </div>
                        ))}
                    </div>
                   </div>
            </section>
        </>
    );
}

export default WhyStudy;