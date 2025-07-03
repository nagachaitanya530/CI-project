
import Link from "next/link";

export default function Hero() {
  return (
    <><section className="relative flex flex-col md:flex-row items-center bg-gradient-to-br from-[#284c87] to-[#4cc4dd] px-6 pt-10 pb-6 min-h-[460px]">
      <div className="flex-1 ml-20 text-white max-w-xl">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4 drop-shadow-sm leading-tight">
          Turning Your Dreams Into Reality
        </h1>
        <p className="mb-8 text-lg font-medium drop-shadow-sm">
          CI is the top online education platform to learn English, French, Spanish and German along with IELTS preparation.
        </p>
        <Link href="/book-demo" className="inline-block bg-[#b8925b] hover:bg-[#965a6d] transition px-7 py-3 text-lg font-bold rounded shadow-md text-white">
          Book a demo
        </Link>
      </div>
      <div className="flex justify-center lg:justify-end relative order-1 lg:order-2">
        <div className="rounded-lg w-full max-w-[500px] lg:max-w-[900px] h-[350px] md:h-[450px] lg:h-[600px] md:-ml-12">
          <div className="relative rounded-lg w-full h-full">
            <img
              src="../../home/professional-women.png"
              alt="Professional woman in business attire"
              className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
    </>

  );
}

