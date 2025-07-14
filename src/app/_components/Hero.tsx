// src/app/_components/Hero.tsx
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex flex-col md:flex-row items-center bg-gradient-to-br from-[#284c87] to-[#4cc4dd] px-6 pt-10 pb-6 min-h-[460px]">
      {/* Left text */}
      <div className="flex-1 ml-6 md:ml-20 text-white max-w-xl z-10">
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

      {/* Right illustration */}
      <div className="flex justify-center lg:justify-end relative order-1 lg:order-2 mt-6 md:mt-0">
        <div className="relative rounded-lg overflow-hidden w-full max-w-[400px] md:max-w-[700px] lg:max-w-[800px] h-[250px] md:h-[350px] lg:h-[500px] z-0">
          <Image
            src="/home/professional-women.png"
            alt="Professional woman"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 800px"
            priority
          />
        </div>
      </div>
    </section>
  );
}
