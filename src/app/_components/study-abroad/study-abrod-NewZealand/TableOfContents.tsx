'use client'
import { useEffect, useState } from "react";
function TOC() {
  const [activeSection, setActiveSection] = useState<string>('document');
  const handleScroll = () => {
    const sections = ['document', 'visa'];
    const scrollPosition = window.scrollY;
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const { top, bottom } = element.getBoundingClientRect();
        if (top <= window.innerHeight && bottom >= 0) {
          setActiveSection(section);
        }
      }
    });
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <section className="hidden lg:block sticky top-20" >
        <div >
          <button onClick={() => document.getElementById('document')?.scrollIntoView({ behavior: "smooth" })}
            className={` py-2  rounded-md ${activeSection === 'document' ? ' bg-blue-400' : 'hover:bg-gray-600'} w-70 mt-2 rounded-3xl`}>
            Document</button>
          <button onClick={() => document.getElementById('visa')?.scrollIntoView({ behavior: "smooth" })}
            className={` py-2  rounded-md ${activeSection === 'visa' ? ' bg-blue-400' : 'hover:bg-gray-600'} w-70 mt-2 rounded-3xl`}>
            Visa
          </button>
        </div>
      </section>
    </>
  );
}
export default TOC;