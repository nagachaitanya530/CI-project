import Image from "next/image";
import React from "react";

const EdwiseTeamSection = () => {
  return (
    <section className="bg-white py-14 px-6 lg:px-20">
      <div className="text-center mb-10">
        <h2 className="text-3xl lg:text-5xl font-medium">
          Meet The{" "}
          <span className="font-extrabold underline decoration-[3px] underline-offset-4 decoration-red-500">
            Edwise Team
          </span>
        </h2>
      </div>

      <div className="flex justify-center">
        <div className="rounded-[40px] overflow-hidden shadow-lg max-w-6xl w-full">
          <Image
            src="/tss.webp" 
            alt="Edwise Team"
            width={1200}
            height={800}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default EdwiseTeamSection;
