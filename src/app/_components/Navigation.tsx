import Link from "next/link";

const logoUrl = "";

const navItems = [
  {
    label: "Courses",
    dropdown: [
      { label: "IELTS Classes", href: "/" },
      { label: "Spoken English", href: "/" },
      {
        label: "English Courses",
        dropdown: [
          { label: "English Foundation Personal", href: "/" },
          { label: "English Business Personal", href: "/" },
          { label: "English Advanced Personal", href: "/" },
          { label: "Soft Skills Personal Training", href: "/" },
          { label: "Corporate Training English", href: "/" },
        ],
      },
      { label: "OET Classes", href: "/" },
      { label: "Foreign Languages", href: "/" },
      { label: "Kids Courses (Languages)", href: "/" },
      { label: "Online Mock Tests", href: "/" },
    ],
  },
  {
    label: "Book Demo",
    href: "/",
    isButton: true
  },
  { label: "Fees", href: "/" },
  {
    label: "Study Abroad",
    dropdown: [
      { label: "Free Consultation", href: "/" },
      { label: "Why Study Abroad", href: "/" },
      { label: "Study in UK", href: "/" },
      { label: "Study in Canada", href: "/" },
      { label: "Study in Australia", href: "/" },
    ],
  },
  {
    label: "About CI",
    dropdown: [
      { label: "About us", href: "/" },
      { label: "Careers", href: "/" },
      { label: "Community", href: "/" },
      { label: "Contact us", href: "/" },
      { label: "Terms of Service", href: "/" },
      { label: "Privacy Policy", href: "/" },
    ],
  },
];

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 shadow-[0_2px_8px_0_rgba(40,76,135,0.07)] border-b border-zinc-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center h-20 justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 min-w-[130px]">
          <img src={logoUrl} alt="CI Logo" className="h-11 w-auto" />
        </Link>
        {/* Main nav list */}
        <ul className="hidden md:flex gap-2 items-center flex-1 justify-center text-base font-semibold text-[#284c87]">
          {navItems.map((item, idx) => (
            <li key={idx} className="relative group">
              {item.dropdown ? (
                <>
                  <span className="cursor-pointer px-4 py-2 rounded hover:bg-blue-50 hover:text-[#284c87] transition select-none leading-6 flex items-center gap-1 font-semibold">
                    {item.label}
                    <svg width="14" height="14" className="ml-1" viewBox="0 0 20 20"><path fill="#284c87" d="M5.23 7.21L10 12.07l4.77-4.86A1 1 0 1 1 16.2 8.63l-5.14 5.23a1.11 1.11 0 0 1-1.57 0L3.8 8.63a1 1 0 1 1 1.43-1.42z"></path></svg>
                  </span>
                  {/* Dropdown */}
                  <ul className="absolute left-0 mt-3 min-w-[250px] bg-white border border-zinc-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all flex flex-col z-40">
                    {item.dropdown.map((sub, subIdx) =>
                      sub.dropdown ? (
                        <li key={subIdx} className="relative group/dropdown">
                          <span className="flex items-center justify-between py-2 px-6 cursor-pointer rounded-lg font-medium hover:bg-blue-50 group-hover/dropdown:bg-blue-50 text-[#284c87]">
                            {sub.label}
                            <svg width="12" height="12" className="ml-2" fill="none" stroke="#284c87" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
                          </span>
                          <ul className="absolute left-full top-0 ml-2 mt-0 min-w-[250px] bg-white border border-zinc-200 rounded-lg shadow-lg opacity-0 group-hover/dropdown:opacity-100 pointer-events-none group-hover/dropdown:pointer-events-auto transition-all flex flex-col z-50">
                            {sub.dropdown.map((deep, deepIdx) => (
                              <li key={deepIdx}>
                                <Link href={deep.href} className="block py-2 px-6 hover:bg-blue-50 text-[#284c87] rounded-lg font-medium">
                                  {deep.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                      ) : (
                        <li key={subIdx}>
                          <Link href={sub.href} className="block py-2 px-6 hover:bg-blue-50 text-[#284c87] rounded-lg font-medium">
                            {sub.label}
                          </Link>
                        </li>
                      )
                    )}
                  </ul>
                </>
              ) : item.isButton ? (
                <Link href={item.href} className="ml-2 px-5 py-2 rounded-md bg-[#284c87] hover:bg-[#18345b] text-white font-bold shadow-sm transition">
                  {item.label}
                </Link>
              ) : (
                <Link href={item.href} className="px-4 py-2 hover:bg-blue-50 rounded-md hover:text-[#284c87] transition font-semibold">
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
        {/* Sign In button */}
        <div className="flex gap-2 items-center">
          <Link
            href="/login"
            className="rounded-lg px-5 py-2 bg-white border border-[#284c87] text-[#284c87] hover:bg-[#284c87] hover:text-white font-bold transition"
          >
            Sign in
          </Link>
        </div>
      </div>
    </nav>
  );
}
