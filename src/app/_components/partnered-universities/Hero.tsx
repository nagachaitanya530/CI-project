'use client'
import { useState } from "react";

function HeroSection() {
<<<<<<< HEAD
  const paragraphStyle: React.CSSProperties = {
    WebkitLineClamp: 5,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: "-webkit-box"
  }

  const [isOpen, setIsOpen] = useState(false);

  return (<>
    <section className=" bg-gradient-to-r from-40% to-95% from-slate-50 to-amber-100">
      <div className=" flex flex-col-reverse lg:flex-row p-5 md:p-15 lg:p-25 justify-between ">
        <div className="lg:w-1/2 p-5">
          <div>
            <h1 className="text-2xl md:text-3xl lg:text-5xl/15">Edwise represents over
              <strong className="underline decoration-red-600"> 950+ Universities</strong> <br />across
              <strong> 16 Countries </strong></h1>
          </div> <br />
          <div>
            <p style={isOpen ? undefined : paragraphStyle} className="text-base">
              Edwise has partnered with some of the best universities to study abroad giving students the option to choose from the best of the best for making their dreams come true. With an impressive roster of more than 950 foreign universities, we offer Indian students excellent opportunities for studying abroad. <br /> <br />
              We have partnered with universities from more than 16 countries which ensures that the student gets to choose from a wide range of options and select from the study abroad universities of their choice. Contact us now and one of our expert counselors will guide you according to your specific needs and suggest a list with the best universities abroad for Indian students.
            </p>
            <button onClick={() => setIsOpen(!isOpen)}
              className="border bg-cyan-500 hover:bg-cyan-700 py-3 px-5 mt-2 rounded-xl">
              {isOpen ? 'Read Less' : 'Read More'}</button>
          </div>
        </div>
        <div>
          <img src="/man-uni.png" alt="" className="lg:h-96 w-full" />
        </div>
      </div>
    </section>
  </>);
=======

    const paragraphStyle: React.CSSProperties = {
        WebkitLineClamp: 5,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
        display: "-webkit-box"
    }

    const [isOpen, setIsOpen] = useState(false);

    return (<>
        <section className=" bg-gradient-to-r from-40% to-95% from-slate-50 to-amber-100">
            <div className="p-25 flex justify-between ">
                {/* leftside title  */}
                <div className="w-1/2 p-5">
                    <div>
                        <h1 className="text-5xl/15">Edwise represents over
                            <strong className="underline decoration-red-600"> 950+ Universities</strong> <br />across
                            <strong> 16 Countries </strong></h1>
                    </div> <br />
                    <div>
                        <p style={isOpen ? undefined : paragraphStyle} className="text-base">
                            Edwise has partnered with some of the best universities to study abroad giving students the option to choose from the best of the best for making their dreams come true. With an impressive roster of more than 950 foreign universities, we offer Indian students excellent opportunities for studying abroad. <br /> <br />
                            We have partnered with universities from more than 16 countries which ensures that the student gets to choose from a wide range of options and select from the study abroad universities of their choice. Contact us now and one of our expert counselors will guide you according to your specific needs and suggest a list with the best universities abroad for Indian students.
                        </p>
                        <button onClick={() => setIsOpen(!isOpen)} 
                        className="border py-3 px-5 mt-2 rounded-xl">
                            {isOpen ? 'Read Less' : 'Read More'}</button>
                    </div>
                </div>

                {/* rightside image  */}
                <div>
                    <img src="/man-uni.png" alt="" className="h-96 w-full" />
                </div>
            </div>
        </section>
    </>);
>>>>>>> cost-of-studying-usa
}

export default HeroSection;