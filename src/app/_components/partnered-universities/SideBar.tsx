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