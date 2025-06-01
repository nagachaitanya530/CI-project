import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex flex-col md:flex-row items-center bg-gradient-to-br from-[#284c87] to-[#4cc4dd] px-6 pt-10 pb-6 min-h-[460px]">
      {/* Left text */}
      <div className="flex-1 text-white max-w-xl">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4 drop-shadow-sm leading-tight">
          Turning Your Dreams Into Reality
        </h1>
        <p className="mb-8 text-lg font-medium drop-shadow-sm">
          National Institute of Language is the top online education platform to learn English, French, Spanish and German along with IELTS preparation.
        </p>
        <a href="#book-demo" className="inline-block bg-[#b8925b] hover:bg-[#965a6d] transition px-7 py-3 text-lg font-bold rounded shadow-md text-white">
          Book a demo
        </a>
      </div>
      {/* Right illustration */}
      <div className="flex-1 mt-8 md:mt-0 flex items-center justify-center">
        <img src="https://ext.same-assets.com/2494541280/649069322.webp" alt="Student Hero" className="rounded-xl shadow-lg w-[290px] md:w-[330px] lg:w-[400px]" />
      </div>
      {/* Optionally add decorative background SVGs here if required */}
    </section>
  );
}
