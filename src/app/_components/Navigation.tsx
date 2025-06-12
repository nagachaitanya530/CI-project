import Link from "next/link";
import { Search, Home, BookOpen, Globe, Info, CalendarCheck, FileText, GraduationCap, UserCircle } from "lucide-react";

const logoUrl = "#";

const navItems = [
  { label: "Home", href: "/", icon: Home },
  {
    label: "Courses",
    icon: BookOpen,
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
    href: "/book-demo",
    isButton: true,
    icon: CalendarCheck,
  },
  { label: "Fees", href: "/", icon: FileText },
  { label: "JOC", href: "/", icon: GraduationCap },
  {
    label: "Study Abroad",
    icon: Globe,
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
    icon: Info,
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
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md font-sans shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-20">
        {/* Left Section - Logo and Search */}
        <div className="flex items-center gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center min-w-[120px]">
            <img src={logoUrl} alt="CI Logo" className="h-9 w-auto" />
          </Link>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden lg:flex items-center relative w-64">
            <input
              type="text"
              placeholder="Search..."
              className="w-full py-2 px-4 pl-10 border border-zinc-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
            />
            <Search className="absolute left-3 top-2.5 text-zinc-500" size={16} />
          </div>
        </div>

        {/* Center Section - Navigation Links */}
        <div className="hidden lg:flex items-center justify-center flex-1 max-w-2xl mx-4">
          <ul className="flex items-center gap-1 text-sm font-medium text-[#284c87]">
            {navItems.map((item, idx) => (
              <li key={idx} className="relative group">
                {item.dropdown ? (
                  <>
                    <span className="flex items-center gap-1 px-3 py-2 rounded hover:bg-blue-50 cursor-pointer transition whitespace-nowrap">
                      {item.icon && <item.icon size={16} className="shrink-0" />}
                      {item.label}
                      <svg width="14" height="14" className="ml-1 shrink-0" viewBox="0 0 20 20">
                        <path fill="#284c87" d="M5.23 7.21L10 12.07l4.77-4.86A1 1 0 1 1 16.2 8.63l-5.14 5.23a1.11 1.11 0 0 1-1.57 0L3.8 8.63a1 1 0 1 1 1.43-1.42z"></path>
                      </svg>
                    </span>
                    <ul className="absolute left-0 mt-2 min-w-[250px] bg-white border border-zinc-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all z-40">
                      {item.dropdown.map((sub, subIdx) =>
                        sub.dropdown ? (
                          <li key={subIdx} className="relative group/dropdown">
                            <span className="flex justify-between items-center py-2 px-4 cursor-pointer hover:bg-blue-50 text-sm whitespace-nowrap">
                              {sub.label}
                              <svg width="12" height="12" className="ml-2" fill="none" stroke="#284c87" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M9 5l7 7-7 7" />
                              </svg>
                            </span>
                            <ul className="absolute left-full top-0 ml-2 mt-0 min-w-[250px] bg-white border border-zinc-200 rounded-md shadow-lg opacity-0 group-hover/dropdown:opacity-100 pointer-events-none group-hover/dropdown:pointer-events-auto transition-all z-50">
                              {sub.dropdown.map((deep, deepIdx) => (
                                <li key={deepIdx}>
                                  <Link href={deep.href} className="block py-2 px-4 hover:bg-blue-50 text-sm whitespace-nowrap">
                                    {deep.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </li>
                        ) : (
                          <li key={subIdx}>
                            <Link href={sub.href} className="block py-2 px-4 hover:bg-blue-50 text-sm whitespace-nowrap">
                              {sub.label}
                            </Link>
                          </li>
                        )
                      )}
                    </ul>
                  </>
                ) : item.isButton ? (
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 px-3 py-2 bg-[#284c87] text-white rounded-md shadow hover:bg-[#18345b] transition whitespace-nowrap ml-2"
                  >
                    {item.icon && <item.icon size={16} className="shrink-0" />}
                    {item.label}
                  </Link>
                ) : (
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 px-3 py-2 rounded hover:bg-blue-50 transition whitespace-nowrap"
                  >
                    {item.icon && <item.icon size={16} className="shrink-0" />}
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section - Sign In */}
        <div className="flex items-center gap-4">
          {/* Mobile Search Icon - Hidden on desktop */}
          <button className="lg:hidden text-[#284c87] p-2">
            <Search size={20} />
          </button>
          
          {/* Sign In Button */}
          <Link
            href="/login"
            className="flex items-center gap-1 px-3 py-2 border border-[#284c87] text-[#284c87] rounded-md hover:bg-[#284c87] hover:text-white text-sm font-semibold whitespace-nowrap"
          >
            <UserCircle size={16} className="shrink-0" />
            <span className="hidden sm:inline">Sign in</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}