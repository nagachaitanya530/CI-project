"use client";

import Link from "next/link";
import {
  Search,
  Home,
  BookOpen,
  Globe,
  Info,
  CalendarCheck,
  FileText,
  GraduationCap,
  UserCircle,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";

const logoUrl = "#";

const navItems = [
  { label: "Home", href: "/", icon: Home },
  {
    label: "Courses",
    icon: BookOpen,
    dropdown: [
      { label: "IELTS Classes", href: "/" },
      {
        label: "Spoken English",
        dropdown: [
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
      { label: "Contact us", href: "/ContactUs" },
      { label: "Terms of Service", href: "/" },
      { label: "Privacy Policy", href: "/" },
    ],
  },
];

const DropdownMenu = ({ items, isMobile, closeMenu, level = 0 }: { items: any[], isMobile?: boolean, closeMenu?: () => void, level?: number }) => {
  return (
    <ul className={`
      ${isMobile ? 'ml-4' : `
        absolute ${level === 0 ? 'left-0 mt-1' : 'left-full top-0 ml-1'}
        min-w-[250px] bg-white border border-gray-200 rounded-md shadow-lg z-50
        invisible group-hover:visible opacity-0 group-hover:opacity-100
        transition-opacity duration-200
      `}
    `}>
      {items.map((item, idx) => {
        const hasDropdown = Array.isArray(item.dropdown);
        
        return (
          <li key={idx} className="relative group">
            {hasDropdown ? (
              <details className="group">
                <summary className={`
                  flex justify-between items-center 
                  ${isMobile ? 'px-4 py-2 hover:bg-blue-50 cursor-pointer' : 'px-4 py-2 hover:bg-blue-50 cursor-pointer'}
                `}>
                  <span className="text-gray-700 hover:text-blue-600">{item.label}</span>
                  {isMobile ? (
                    <ChevronDown className="text-gray-500 transform group-open:rotate-180 transition-transform" size={16} />
                  ) : (
                    <ChevronRight className="text-gray-500" size={16} />
                  )}
                </summary>
                <DropdownMenu items={item.dropdown} isMobile={isMobile} closeMenu={closeMenu} level={level + 1} />
              </details>
            ) : (
              <Link
                href={item.href || "#"}
                onClick={closeMenu}
                className={`
                  block 
                  ${isMobile ? 'px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50' : 'px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50'}
                `}
              >
                {item.label}
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
   <nav className={`sticky top-0 z-50 w-full bg-transparent backdrop-blur-lg transition-all duration-300 ${isScrolled ? 'shadow-md border-b border-gray-200 bg-white/80' : 'bg-transparent border-b border-transparent'}`}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 hover:opacity-90 transition-opacity">
              <img src={logoUrl} alt="Logo" className="h-8 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            <ul className="flex space-x-1">
              {navItems.map((item, idx) => (
                <li key={idx} className="relative group">
                  {item.dropdown ? (
                    <div className="relative">
                      <button className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200">
                        {item.icon && <item.icon className="mr-2" size={16} />}
                        {item.label}
                        <ChevronDown className="ml-1 transition-transform duration-200 group-hover:rotate-180" size={14} />
                      </button>
                      <DropdownMenu items={item.dropdown} />
                    </div>
                  ) : item.isButton ? (
                    <Link
                      href={item.href || "#"}
                      className="flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors duration-200"
                    >
                      {item.icon && <item.icon className="mr-2" size={16} />}
                      {item.label}
                    </Link>
                  ) : (
                    <Link
                      href={item.href || "#"}
                      className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200"
                    >
                      {item.icon && <item.icon className="mr-2" size={16} />}
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Right side items (search and login) */}
          <div className="hidden lg:flex items-center space-x-4 ml-4">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-blue-500 transition-colors duration-200" size={16} />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-64 hover:border-blue-400 transition-colors duration-200"
              />
            </div>
            <Link
              href="/login"
              className="flex items-center px-3 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 border border-blue-600 hover:border-blue-700 rounded-md transition-colors duration-200 hover:bg-blue-50"
            >
              <UserCircle className="mr-2" size={16} />
              Sign in
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 focus:outline-none transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div ref={mobileMenuRef} className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <div className="relative mb-4 group">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-blue-500 transition-colors duration-200" size={16} />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-400 transition-colors duration-200"
              />
            </div>
            
            <ul className="space-y-1">
              {navItems.map((item, idx) => (
                <li key={idx} className="border-b border-gray-100 last:border-0">
                  {item.dropdown ? (
                    <details className="group">
                      <summary className="flex justify-between items-center px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md cursor-pointer transition-colors duration-200">
                        <div className="flex items-center">
                          {item.icon && <item.icon className="mr-3" size={16} />}
                          <span className="font-medium">{item.label}</span>
                        </div>
                        <ChevronDown className="text-gray-500 transform transition-transform duration-200 group-open:rotate-180" size={16} />
                      </summary>
                      <DropdownMenu items={item.dropdown} isMobile closeMenu={closeMobileMenu} />
                    </details>
                  ) : item.isButton ? (
                    <Link
                      href={item.href || "#"}
                      onClick={closeMobileMenu}
                      className="flex items-center justify-center px-4 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors duration-200"
                    >
                      {item.icon && <item.icon className="mr-3" size={16} />}
                      {item.label}
                    </Link>
                  ) : (
                    <Link
                      href={item.href || "#"}
                      onClick={closeMobileMenu}
                      className="flex items-center px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200"
                    >
                      {item.icon && <item.icon className="mr-3" size={16} />}
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            
            <div className="pt-2">
              <Link
                href="/login"
                onClick={closeMobileMenu}
                className="flex items-center justify-center px-4 py-3 border border-blue-600 text-blue-600 font-medium rounded-md hover:bg-blue-50 transition-colors duration-200"
              >
                <UserCircle className="mr-3" size={16} />
                Sign in
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}