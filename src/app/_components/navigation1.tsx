"use client";

import Link from "next/link";
import {
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
    {
        label: "Study Abroad",
        dropdown: [


            { label: 'UK', href: "/study-abroad/study-abroad-uk" },
            { label: 'USA', href: 'study-abroad/usa' },
            { label: 'Canada', href: "/study-abroad/study-abroad-canada" },
            { label: 'Australia', href: "/study-abroad/australia" },
            { label: 'Spain', href: '/study-abroad/spain' },
            { label: 'India', href: '/study-abroad/India' },
            { label: 'Malaysia', href: '/study-abroad/study_in_malaysia' },
            { label: 'New Zealand', href: '/study-abroad/NewZealand' },
            { label: 'France', href: '/study-abroad/study-in-france' },
            { label: 'Singapore', href: '/study-abroad/study-abroad-singapore' },
            { label: 'Ireland', href: '/study-abroad/ireland' },

               { label: 'UK', href: "/study-abroad/study-abroad-uk" },
                { label: 'USA', href: 'study-abroad/usa' },
              { label: 'Canada', href: "/study-abroad/study-abroad-canada" },
                { label: 'Australia', href: "/study-abroad/australia" },
           
            { label: 'Spain', href: '/study-abroad/spain' },
            

            { label: 'India', href: '/study-abroad/India' },

            
           
            
            { label: 'Malaysia', href: '/study-abroad/study_in_malaysia' },


           
          
          
            
            
           

           
            
          

         

            { label: 'New Zealand', href: '/study-abroad/NewZealand' },
          

            
            { label: 'Singapore', href: '/study-abroad/study-abroad-singapore' },



           


            

            


            { label: 'Netherlands', href: '/study-abroad/netherlands' },
            { label: 'Italy', href: '/study-abroad/italy' },
            { label: 'Germany', href: '/study-abroad/Germany' },

            { label: 'Switzerland', href: '/study-abroad/Switzerland' },
            { label: 'Dubai', href: '/study-abroad/dubai' },
            { label: 'International', href: '/study-abroad/study-international' },
            { label: 'Study Abroad', href: '/study-abroad/abroad'},
            { label: 'Mauritius', href: '/study-abroad/study-mauritius' },

             

            

            
            
            
         
            { label: 'Dubai', href: '/study-abroad/dubai' },

            { label: 'Ireland', href: '/study-abroad/ireland' },
             { label: 'France', href: '/study-abroad/france' },
            { label: 'Netherlands', href: '/study-abroad/netherlands' },

            


      

             { label: 'Mauritius', href: '/study-abroad/study-mauritius' },
            { label: 'International', href: '/study-abroad/study-international' },
            { label: 'Study Abroad', href: '/study-abroad/abroad'},

            

           
          


        ]
    },
    {
        label: 'Student Services',
        dropdown: [
            {
                label: 'Test Preparations',
                dropdown: [
                    { label: 'All Tests', href: '/Test-Prepataions/All-Tests' },
                    { label: 'TOEFL', href: '/toefl' },
                    { label: 'IELTS', href: '/study-abroad/test-preparation/ielts' },
                    { label: 'GMAT', href: '/gmat' },
                    { label: 'GRE', href: '/gre' },
                    { label: 'SAT', href: '/study-abroad/study-abroad-sat' },
                    { label: 'CAEL', href: '/cael' },
<<<<<<< PTE
                    { label: 'ACT', href: '/act' },
                    { label: 'PTE', href: '/PTE' },
=======
                    { label: 'ACT', href: '/ACT-Preparation' },
                    { label: 'PTE', href: '/pte' },
>>>>>>> main
                    { label: 'DUOLINGO', href: '/duolingo' },
                ],
            },
            { label: 'Career Counseling', href: '/career-counseling' },
            { label: 'Admission Guidance', href: '/admission-guidence' },
            { label: 'Financial Assistance', href: '/financial-assistance' },
            { label: 'Scholarships', href: '/scholarships' },
            { label: 'Travel & Forex Assistance', href: '/travel-forex' },
            { label: 'Visa Assistance', href: '/visa-assistance' }
        ]
    },
    {
        label: 'What We Do',
        dropdown: [
            { label: 'About Us', href: '/about' },
            { label: 'University Visits', href: '/university-visits' },
            { label: 'Work With Us', href: '/work-with-us' },
            { label: 'Partnered Universities', href: '/partnered-universities' },
        ]
    },
    { label: 'Events', href: '/events' },
    { label: 'Resources', href: '/resources' }
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
            <div className={`${level === 0 ? 'space-y-1' : 'ml-4 mt-1 space-y-1'}`}>
                {items.map((item, idx) => {
                    const hasDropdown = Array.isArray(item.dropdown);
                    const isOpen = openItems[idx];

                    return (
                        <div key={idx}>
                            {hasDropdown ? (
                                <>
                                    <button
                                        onClick={() => toggleItem(idx)}
                                        className="flex justify-between items-center w-full px-3 py-2 text-left text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 rounded-lg transition-all duration-300 backdrop-blur-sm"
                                    >
                                        <span className="text-sm font-medium">{item.label}</span>
                                        <ChevronDown
                                            className={`text-gray-500 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                                            size={14}
                                        />
                                    </button>
                                    <div
                                        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                            }`}
                                    >
                                        <DropdownMenu items={item.dropdown} isMobile={isMobile} closeMenu={closeMenu} level={level + 1} />
                                    </div>
                                </>
                            ) : (
                                <Link
                                    href={item.href || "#"}
                                    onClick={closeMenu}
                                    className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 rounded-lg transition-all duration-300 backdrop-blur-sm"
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
                absolute ${level === 0 ? "left-0 top-full mt-2" : "left-full top-0 ml-2"}
                min-w-[240px] bg-white/95 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl
                opacity-100 visible transition-all duration-300 ease-out
                before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/10 before:to-transparent before:rounded-xl before:pointer-events-none
            `}
            style={{ zIndex: 1000 + level * 10 }}
            onMouseEnter={() => {
                if (hoverTimeoutRef.current) {
                    clearTimeout(hoverTimeoutRef.current);
                }
            }}
            onMouseLeave={handleMouseLeave}
        >
            <div className="relative ">
                {items.map((item, idx) => {
                    const hasDropdown = Array.isArray(item.dropdown);
                    const isHovered = hoveredItem === idx;

                    return (
                        <div key={idx} className="relative" onMouseEnter={() => handleMouseEnter(idx)}>
                            {hasDropdown ? (
                                <>
                                    <div className="flex justify-between items-center px-4 py-1.5 text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50/80 hover:to-blue-100/80 cursor-pointer transition-all duration-300 rounded-lg mx-1">
                                        <span className="text-base font-medium">{item.label}</span>
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
                                    className="block px-4 py-1 text-base text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50/80 hover:to-blue-100/80 transition-all duration-300 rounded-lg mx-1"
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
                <button className="flex items-center px-6 py-2 text-base font-normal text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50/80 hover:to-blue-100/80 rounded-xl transition-all duration-300 backdrop-blur-sm">
                    {item.icon && <item.icon className="mr-2" size={16} />}
                    {item.label}
                    <ChevronDown
                        className={`ml-2 transition-transform duration-300 ${isHovered ? "rotate-180" : ""}`}
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
                className="flex items-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm whitespace-nowrap"
            >
                {item.icon && <item.icon className="mr-2" size={16} />}
                {item.label}
            </Link>
        );
    }

    return (
        <Link
            href={item.href || "#"}
            className="flex items-center px-4 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50/80 hover:to-blue-100/80 rounded-xl transition-all duration-300 backdrop-blur-sm"
        >
            {item.icon && <item.icon className="mr-2" size={16} />}
            {item.label}
        </Link>
    );
};

// Mobile Navigation Item Component
const MobileNavigationItem = ({ item, closeMenu }: { item: any; closeMenu?: () => void }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    if (item.dropdown) {
        return (
            <div className="border-b border-gray-100/50 last:border-0 pb-1 last:pb-0">
                <button
                    onClick={toggleDropdown}
                    className="flex justify-between items-center w-full px-3 py-2 text-left text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50/80 hover:to-blue-100/80 rounded-xl transition-all duration-300 backdrop-blur-sm"
                >
                    <span className="text-sm font-medium">{item.label}</span>
                    <ChevronDown
                        className={`text-gray-500 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                        size={14}
                    />
                </button>
                <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                >
                    <DropdownMenu items={item.dropdown} isMobile closeMenu={closeMenu} />
                </div>
            </div>
        );
    }

    return (
        <div className="border-b border-gray-100/50 last:border-0 pb-1 last:pb-0">
            <Link
                href={item.href || "#"}
                onClick={closeMenu}
                className="flex items-center px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50/80 hover:to-blue-100/80 rounded-xl transition-all duration-300 text-sm backdrop-blur-sm"
            >
                <span className="font-medium">{item.label}</span>
            </Link>
        </div>
    );
};

export default function NavigationSection() {
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
                sticky top-0 z-50 w-full transition-all duration-500
                ${isScrolled
                    ? "bg-white/90 backdrop-blur-xl shadow-2xl border-b border-white/20"
                    : "bg-white/80 backdrop-blur-lg border-b border-white/10"
                }
                before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/5 before:to-transparent before:pointer-events-none
            `}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center flex-shrink-0">
                        <Link href="/" className="hover:opacity-90 transition-all duration-300 transform hover:scale-105">
                            <img src={logoUrl || "/placeholder.svg"} alt="Logo" className="h-8 w-auto" />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center justify-center flex-1 px-4">
                        <ul className="flex items-center space-x-2">
                            {navItems.map((item, idx) => (
                                <li key={idx} className="h-full flex items-center">
                                    <NavigationItem item={item} closeMenu={closeMobileMenu} />
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right side items (contact us) */}
                    <div className="hidden lg:flex items-center space-x-3 flex-shrink-0">
                        <Link
                            href="/contact"
                            className="flex items-center px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 border border-blue-600/50 hover:border-blue-700 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50/80 hover:to-blue-100/80 backdrop-blur-sm whitespace-nowrap shadow-lg hover:shadow-xl"
                        >
                            <UserCircle className="mr-2" size={16} />
                            Contact Us
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-xl text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50/80 hover:to-blue-100/80 focus:outline-none transition-all duration-300 backdrop-blur-sm"
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
                    className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-white/20 shadow-2xl max-h-[calc(100vh-4rem)] overflow-y-auto"
                >
                    <div className="px-4 py-3 space-y-2">
                        {/* Mobile Navigation Items */}
                        <div className="space-y-1">
                            {navItems.map((item, idx) => (
                                <MobileNavigationItem key={idx} item={item} closeMenu={closeMobileMenu} />
                            ))}
                        </div>

                        {/* Mobile Contact us */}
                        <div className="pt-2 border-t border-gray-200/50">
                            <Link
                                href="/contact"
                                onClick={closeMobileMenu}
                                className="flex items-center justify-center px-3 py-2 border border-blue-600/50 text-blue-600 font-medium rounded-xl hover:bg-gradient-to-r hover:from-blue-50/80 hover:to-blue-100/80 transition-all duration-300 text-sm backdrop-blur-sm shadow-lg"
                            >
                                <UserCircle className="mr-3" size={16} />
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}