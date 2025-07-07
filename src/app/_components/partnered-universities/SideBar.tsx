<<<<<<< HEAD
import type { CountryKey } from "./CountryGrid";

interface SideBarProps {
  countries: CountryKey[];
  onSelectCountry: (country: CountryKey) => void;
  selectedCountry: CountryKey;
}

function SideBarSection({ countries, onSelectCountry, selectedCountry }: SideBarProps) {
  return (
    <div className="py-5 my-15 shadow-lg rounded-2xl">
      {countries.map((country, index) => (
        <li
          key={index}
          onClick={() => onSelectCountry(country)}
          className={`py-2 my-1 px-5 list-none rounded-lg cursor-pointer ${selectedCountry === country ? 'bg-cyan-700 text-white' : 'hover:bg-cyan-700'
            }`}>
          {country}
        </li>
      ))}
    </div>
  );
}

export default SideBarSection;
=======
'use client'
function SideBarSection() {
    return (
        <>
        <section className="">
   
        <div className="flex flex-row lg:flex-col rounded-2xl shadow-lg py-10 ">
            
            <button className="text-left text-lg py-2 pl-10 w-full hover:bg-cyan-800 rounded-2xl " onClick={() => document.getElementById('uk') }>UK</button>
            <button className="text-left text-lg py-2 pl-10 w-full hover:bg-cyan-800 rounded-2xl " onClick={() => document.getElementById('usa') }>USA</button>
            <button className="text-left text-lg py-2 pl-10 w-full hover:bg-cyan-800 rounded-2xl " onClick={() => document.getElementById('canada') }>Canada</button>
            <button className="text-left text-lg py-2 pl-10 w-full hover:bg-cyan-800 rounded-2xl " onClick={() => document.getElementById('austalia') }>Australia</button>
            <button className="text-left text-lg py-2 pl-10 w-full hover:bg-cyan-800 rounded-2xl " onClick={() => document.getElementById('newzealand') }>New Zealand</button>

            <button className="text-left text-lg py-2 pl-10 w-full hover:bg-cyan-800 rounded-2xl " onClick={() => document.getElementById('singapora') }>Singapore</button>

            <button className="text-left text-lg py-2 pl-10 w-full hover:bg-cyan-800 rounded-2xl " onClick={ () => document.getElementById('ireland')}>Ireland</button>

            <button className="text-left text-lg py-2 pl-10 w-full hover:bg-cyan-800 rounded-2xl " onClick={() => document.getElementById('france') }>France</button>

            <button className="text-left text-lg py-2 pl-10 w-full hover:bg-cyan-800 rounded-2xl " onClick={() => document.getElementById('germany') }>Germany</button>

            <button className="text-left text-lg py-2 pl-10 w-full hover:bg-cyan-800 rounded-2xl " onClick={() => document.getElementById('switzerland') }>Switzerland</button>

            <button className="text-left text-lg py-2 pl-10 w-full hover:bg-cyan-800 rounded-2xl " onClick={() => document.getElementById('dubai') }>Dubai</button>

            <button className="text-left text-lg py-2 pl-10 w-full hover:bg-cyan-800 rounded-2xl " onClick={() => document.getElementById('spain') }>Spain</button>

            <button className="text-left text-lg py-2 pl-10 w-full hover:bg-cyan-800 rounded-2xl " onClick={() => document.getElementById('malaysia') }>Malaysia</button>

            <button className="text-left text-lg py-2 pl-10 w-full hover:bg-cyan-800 rounded-2xl " onClick={() => document.getElementById('mauritius') }>Mauritius</button>

            <button className="text-left text-lg py-2 pl-10 w-full hover:bg-cyan-800 rounded-2xl " onClick={() => document.getElementById('india') }>India</button>

            <button className="text-left text-lg py-2 pl-10 w-full hover:bg-cyan-800 rounded-2xl " onClick={() => document.getElementById('netherlands') }>Netherlands</button>

            <button className="text-left text-lg py-2 pl-10 w-full hover:bg-cyan-800 rounded-2xl " onClick={() => document.getElementById('italy') }>Italy</button>

            <button className="text-left text-lg py-2 pl-10 w-full hover:bg-cyan-800 rounded-2xl " onClick={() => document.getElementById('malta') }>Malta</button>

            <button className="text-left text-lg py-2 pl-10 w-full hover:bg-cyan-800 rounded-2xl " onClick={() => document.getElementById('hungary') }>Hungary</button>

            <button className="text-left text-lg py-2 pl-10 w-full hover:bg-cyan-800 rounded-2xl " onClick={() => document.getElementById('poland') }>Poland</button>

            <button className="text-left text-lg py-2 pl-10 w-full hover:bg-cyan-800 rounded-2xl " onClick={() => document.getElementById('finlad') }>Finland</button>

            <button className="text-left text-lg py-2 pl-10 w-full hover:bg-cyan-800 rounded-2xl " onClick={() => document.getElementById('international') }>International</button>

</div>
</section>
        </>
    );
}
export default SideBarSection
>>>>>>> cost-of-studying-usa
