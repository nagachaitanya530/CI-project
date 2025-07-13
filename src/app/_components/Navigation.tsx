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

const logoUrl = "/placeholder.svg?height=32&width=120";

const navItems = [
  { label: "Home", href: "/", icon: Home },
  {
    label: "Courses",
    icon: BookOpen,
    dropdown: [
      { label: "Special Classes", href: "/special-classes" },
      { label: "IELTS Classes", href: "/what-is-ielts" },
      {
        label: "Spoken English",
        dropdown: [
        
          {
            label: "English Courses",
            dropdown: [
              { label: "English Foundation Personal", href: "/english-foundation-course" },
              { label: "English Business Personal", href: "/english-business-course" },
              { label: "English Advanced Personal", href: "/english-advanced-course" },
              { label: "Soft Skills Personal Training", href: "/soft-skills-personal-training" },
              { label: "Corporate Training English", href: "/corporate-training-english" },
            ],
          },
        ],
      },
      { label: "OET Classes", href: "/oet-classes" },
      { label: "Foreign Languages", href: "/foreign-languages" },
      { label: "Kids Courses (Languages)", href: "/Kids_Courses" },
      { label: "Online Mock Tests", href: "/online-mock-test" },
              
            ],
          },
     
  { label: "Book Demo", href: "/book-demo", isButton: true, icon: CalendarCheck },


  { label: "Fees", href: "/fees", icon: FileText },

  { label: "JOC", href: "/joc-page", icon: GraduationCap },



 { label: "Study Abroad", href: "/study-abroad", isButton: true, icon: Globe },





  {
    label: "About CI",
    icon: Info,
    dropdown: [

      { label: "About us", href: "/about_us" },
      { label: "Careers", href: "/career" },
      { label: "Community", href: "/community" },
      { label: "Contact us", href: "/ContactUs" },
      { label: "Terms of Service", href: "/term_of_service" },
      { label: "Privacy Policy", href: "/privecy_policy" },


    ],
  },
];

interface DropdownMenuProps {
  items: any[];
  isMobile?: boolean;
  closeMenu?: () => void;
  level?: number;
  isVisible?: boolean;
}

const DropdownMenu = ({ items, isMobile, closeMenu, level = 0, isVisible = true }: DropdownMenuProps) => {
  const [openItems, setOpenItems] = useState<{ [key: number]: boolean }>({});
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (index: number) => {
    if (!isMobile) {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
      setHoveredItem(index);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      hoverTimeoutRef.current = setTimeout(() => {
        setHoveredItem(null);
      }, 100);
    }
  };

  const toggleItem = (index: number) => {
    if (isMobile) {
      setOpenItems((prev) => ({
        ...prev,
        [index]: !prev[index],
      }));
    }
  };

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  if (isMobile) {
    return (
      <div className="ml-4 mt-1 space-y-1">
        {items.map((item, idx) => {
          const hasDropdown = Array.isArray(item.dropdown);
          const isOpen = openItems[idx];

          return (
            <div key={idx}>
              {hasDropdown ? (
                <>
                  <button
                    onClick={() => toggleItem(idx)}
                    className="flex justify-between items-center w-full px-3 py-2 text-left text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200"
                  >
                    <span className="text-sm">{item.label}</span>
                    <ChevronDown
                      className={`text-gray-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      size={14}
                    />
                  </button>
                  {isOpen && (
                    <DropdownMenu items={item.dropdown} isMobile={isMobile} closeMenu={closeMenu} level={level + 1} />
                  )}
                </>
              ) : (
                <Link
                  href={item.href || "#"}
                  onClick={closeMenu}
                  className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200"
                >
                  {item.label}
                </Link>
              )}
            </div>
          );
        })}
      </div>
    );
  }

  // Desktop dropdown
  if (!isVisible) return null;

  return (
    <div
      className={`
        absolute ${level === 0 ? "left-0 top-full mt-1" : "left-full top-0 ml-1"}
        min-w-[220px] bg-white border border-gray-200 rounded-lg shadow-xl
        opacity-100 visible transition-all duration-200 ease-in-out
      `}
      style={{ zIndex: 1000 + level * 10 }}
      onMouseEnter={() => {
        if (hoverTimeoutRef.current) {
          clearTimeout(hoverTimeoutRef.current);
        }
      }}
      onMouseLeave={handleMouseLeave}
    >
      <div className="py-1">
        {items.map((item, idx) => {
          const hasDropdown = Array.isArray(item.dropdown);
          const isHovered = hoveredItem === idx;

          return (
            <div key={idx} className="relative" onMouseEnter={() => handleMouseEnter(idx)}>
              {hasDropdown ? (
                <>
                  <div className="flex justify-between items-center px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 cursor-pointer transition-colors duration-200">
                    <span className="text-sm font-medium">{item.label}</span>
                    <ChevronRight className="text-gray-400" size={14} />
                  </div>
                  {isHovered && (
                    <DropdownMenu
                      items={item.dropdown}
                      isMobile={false}
                      closeMenu={closeMenu}
                      level={level + 1}
                      isVisible={true}
                    />
                  )}
                </>
              ) : (
                <Link
                  href={item.href || "#"}
                  onClick={closeMenu}
                  className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                >
                  {item.label}
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
//file changes 
const NavigationItem = ({ item, closeMenu }: { item: any; closeMenu?: () => void }) => {
  const [isHovered, setIsHovered] = useState(false);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 100);
  };

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  if (item.dropdown) {
    return (
      <div className="relative h-full flex items-center" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <button className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200">
          {item.icon && <item.icon className="mr-2" size={16} />}
          {item.label}
          <ChevronDown
            className={`ml-1 transition-transform duration-200 ${isHovered ? "rotate-180" : ""}`}
            size={14}
          />
        </button>
        {isHovered && <DropdownMenu items={item.dropdown} closeMenu={closeMenu} isVisible={true} />}
      </div>
    );
  }

  if (item.isButton) {
    return (
      <Link
        href={item.href || "#"}
        className="flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md whitespace-nowrap"
      >
        {item.icon && <item.icon className="mr-2" size={16} />}
        {item.label}
      </Link>
    );
  }

  return (
    <Link
      href={item.href || "#"}
      className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
    >
      {item.icon && <item.icon className="mr-2" size={16} />}
      {item.label}
    </Link>
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

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`
        sticky top-0 z-50 w-full transition-all duration-300
        ${isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200"
          : "bg-white/80 backdrop-blur-sm border-b border-transparent"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="hover:opacity-90 transition-opacity">
              <img src={logoUrl || "/placeholder.svg"} alt="Logo" className="h-8 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center flex-1 px-4">
            <ul className="flex items-center space-x-1">
              {navItems.map((item, idx) => (
                <li key={idx} className="h-full flex items-center">
                  <NavigationItem item={item} closeMenu={closeMobileMenu} />
                </li>
              ))}
            </ul>
          </div>

          {/* Right side items (search and login) */}
          <div className="hidden lg:flex items-center space-x-3 flex-shrink-0">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-3 py-2 w-48 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-400 transition-colors duration-200 text-sm"
              />
            </div>
            <Link
              href="/login"
              className="flex items-center px-3 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 border border-blue-600 hover:border-blue-700 rounded-lg transition-colors duration-200 hover:bg-blue-50 whitespace-nowrap"
            >
              <UserCircle className="mr-2" size={16} />
              Sign in
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 focus:outline-none transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="lg:hidden bg-white border-t border-gray-200 shadow-lg max-h-[calc(100vh-4rem)] overflow-y-auto"
        >
          <div className="px-4 py-3 space-y-2">
            {/* Mobile Search */}
            <div className="relative mb-2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              />
            </div>

            {/* Mobile Navigation Items */}
            <div className="space-y-1">
              {navItems.map((item, idx) => (
                <div key={idx} className="border-b border-gray-100 last:border-0 pb-1 last:pb-0">
                  {item.dropdown ? (
                    <div>
                      <div className="flex items-center px-3 py-2 text-gray-700 font-medium">
                        {item.icon && <item.icon className="mr-3" size={16} />}
                        <span className="text-sm">{item.label}</span>
                      </div>
                      <DropdownMenu items={item.dropdown} isMobile closeMenu={closeMobileMenu} />
                    </div>
                  ) : item.isButton ? (
                    <Link
                      href={item.href || "#"}
                      onClick={closeMobileMenu}
                      className="flex items-center justify-center px-3 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm"
                    >
                      {item.icon && <item.icon className="mr-3" size={16} />}
                      {item.label}
                    </Link>
                  ) : (
                    <Link
                      href={item.href || "#"}
                      onClick={closeMobileMenu}
                      className="flex items-center px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200 text-sm"
                    >
                      {item.icon && <item.icon className="mr-3" size={16} />}
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Sign In */}
            <div className="pt-2 border-t border-gray-200">
              <Link
                href="/login"
                onClick={closeMobileMenu}
                className="flex items-center justify-center px-3 py-2 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors duration-200 text-sm"
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
};
