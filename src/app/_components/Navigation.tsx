"use client"
import Link from "next/link"
import type React from "react"

import { useState, useEffect, useRef, useCallback } from "react"


const logoUrl = "#"

interface NavItem {
  label: string
  href?: string
  isButton?: boolean
  dropdown?: NavItem[]
}



const navItems = [
  { label: "Home", href: '/' },

  {
    label: "Courses",
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
      { label: "Foreign Languages", href: "/foreign-languages" },
      { label: "Kids Courses (Languages)", href: "/" },
      { label: "Online Mock Tests", href: "/" },
    ],
  },
  { label: "Book a Demo", href: "/book-demo", isButton: true },
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
]

// Reusable components
const ChevronIcon = ({ isOpen, className = "" }: { isOpen: boolean; className?: string }) => (
  <svg
    width="14"
    height="14"
    className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""} ${className}`}
    viewBox="0 0 20 20"
  >
    <path
      fill="#284c87"
      d="M5.23 7.21L10 12.07l4.77-4.86A1 1 0 1 1 16.2 8.63l-5.14 5.23a1.11 1.11 0 0 1-1.57 0L3.8 8.63a1 1 0 1 1 1.43-1.42z"
    />
  </svg>
)

const ArrowIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg
    width="12"
    height="12"
    className={`ml-2 transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`}
    fill="none"
    stroke="#284c87"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path d="M9 5l7 7-7 7" />
  </svg>
)

const SearchIcon = () => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
)

export default function Navigation() {
  const [state, setState] = useState({
    mobileMenuOpen: false,
    activeDropdown: null as number | null,
    activeSubDropdown: null as number | null,
    activeDeepDropdown: null as number | null,
    searchOpen: false,
    searchQuery: "",
    isDesktop: true,
    clickedDropdown: { main: false, sub: false, deep: false },
  })

  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const navRef = useRef<HTMLDivElement>(null)

  const updateState = useCallback((updates: Partial<typeof state>) => {
    setState((prev) => ({ ...prev, ...updates }))
  }, [])

  const clearHoverTimeout = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
  }, [])

  const resetDropdowns = useCallback(() => {
    updateState({
      activeDropdown: null,
      activeSubDropdown: null,
      activeDeepDropdown: null,
      clickedDropdown: { main: false, sub: false, deep: false },
    })
  }, [updateState])

  // Event handlers
  const handleResize = useCallback(() => {
    updateState({ isDesktop: window.innerWidth >= 768 })
  }, [updateState])

  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        resetDropdowns()
      }
    },
    [resetDropdowns],
  )

  const createHoverHandler = useCallback(
    (level: "main" | "sub" | "deep", index?: number) => {
      return () => {
        if (!state.isDesktop) return

        const clickedKey = level === "main" ? "main" : level === "sub" ? "sub" : "deep"
        if (state.clickedDropdown[clickedKey]) return

        clearHoverTimeout()

        if (level === "main" && index !== undefined) {
          updateState({ activeDropdown: index, activeSubDropdown: null, activeDeepDropdown: null })
        } else if (level === "sub" && index !== undefined) {
          updateState({ activeSubDropdown: index, activeDeepDropdown: null })
        } else if (level === "deep" && index !== undefined) {
          updateState({ activeDeepDropdown: index })
        }
      }
    },
    [state.isDesktop, state.clickedDropdown, clearHoverTimeout, updateState],
  )

  const createLeaveHandler = useCallback(
    (level: "main" | "sub" | "deep") => {
      return () => {
        if (!state.isDesktop) return

        const clickedKey = level === "main" ? "main" : level === "sub" ? "sub" : "deep"
        if (state.clickedDropdown[clickedKey]) return

        clearHoverTimeout()
        timeoutRef.current = setTimeout(() => {
          if (level === "main") {
            updateState({ activeDropdown: null, activeSubDropdown: null, activeDeepDropdown: null })
          } else if (level === "sub") {
            updateState({ activeSubDropdown: null, activeDeepDropdown: null })
          } else {
            updateState({ activeDeepDropdown: null })
          }
        }, 300)
      }
    },
    [state.isDesktop, state.clickedDropdown, clearHoverTimeout, updateState],
  )

  const createToggleHandler = useCallback(
    (level: "main" | "sub" | "deep", index: number) => {
      return (e: React.MouseEvent) => {
        e.preventDefault()
        e.stopPropagation()

        const currentActive =
          level === "main" ? state.activeDropdown : level === "sub" ? state.activeSubDropdown : state.activeDeepDropdown

        if (!state.isDesktop) {
          // Mobile behavior
          const updates: Partial<typeof state> = {}
          if (level === "main") {
            updates.activeDropdown = currentActive === index ? null : index
            updates.activeSubDropdown = null
            updates.activeDeepDropdown = null
          } else if (level === "sub") {
            updates.activeSubDropdown = currentActive === index ? null : index
            updates.activeDeepDropdown = null
          } else {
            updates.activeDeepDropdown = currentActive === index ? null : index
          }
          updateState(updates)
        } else {
          // Desktop behavior
          const clickedKey = level === "main" ? "main" : level === "sub" ? "sub" : "deep"
          const newClickedState = { ...state.clickedDropdown }

          if (currentActive === index) {
            newClickedState[clickedKey] = false
            const updates: Partial<typeof state> = { clickedDropdown: newClickedState }
            if (level === "main") updates.activeDropdown = null
            else if (level === "sub") updates.activeSubDropdown = null
            else updates.activeDeepDropdown = null
            updateState(updates)
          } else {
            if (level === "main") {
              newClickedState.main = true
              newClickedState.sub = false
              newClickedState.deep = false
              updateState({
                activeDropdown: index,
                activeSubDropdown: null,
                activeDeepDropdown: null,
                clickedDropdown: newClickedState,
              })
            } else if (level === "sub") {
              newClickedState.sub = true
              updateState({
                activeSubDropdown: index,
                activeDeepDropdown: null,
                clickedDropdown: newClickedState,
              })
            } else {
              newClickedState.deep = true
              updateState({ activeDeepDropdown: index, clickedDropdown: newClickedState })
            }
          }
        }
      }
    },
    [state, updateState],
  )

  // Effects
  useEffect(() => {
    handleResize()
    window.addEventListener("resize", handleResize)
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      window.removeEventListener("resize", handleResize)
      document.removeEventListener("mousedown", handleClickOutside)
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [handleResize, handleClickOutside])

  // Render helpers
  const renderDropdownItem = (item: NavItem, index: number, level: "main" | "sub" | "deep") => {
    const isActive =
      level === "main"
        ? state.activeDropdown === index
        : level === "sub"
          ? state.activeSubDropdown === index
          : state.activeDeepDropdown === index

    if (item.dropdown) {
      return (
        <li
          key={index}
          className="relative"
          onMouseEnter={createHoverHandler(level, index)}
          onMouseLeave={createLeaveHandler(level)}
        >
          <button
            onClick={createToggleHandler(level, index)}
            className="flex w-full items-center justify-between py-3 px-4 cursor-pointer font-medium hover:bg-blue-50 text-[#284c87] transition-colors"
            aria-expanded={isActive}
            aria-haspopup="true"
          >
            {item.label}
            <ArrowIcon isOpen={isActive} />
          </button>
          {renderSubDropdown(item.dropdown, level, isActive)}
        </li>
      )
    }

    return (
      <li key={index}>
        <Link
          href={item.href || "#"}
          className="block py-3 px-4 hover:bg-blue-50 text-[#284c87] font-medium transition-colors first:rounded-t-lg last:rounded-b-lg"
        >
          {item.label}
        </Link>
      </li>
    )
  }

  const renderSubDropdown = (items: NavItem[], parentLevel: "main" | "sub" | "deep", isVisible: boolean) => {
    const nextLevel = parentLevel === "main" ? "sub" : "deep"
    const positionClass = parentLevel === "main" ? "left-0 top-full pt-1" : "left-full top-0 ml-1"
    const transformClass =
      parentLevel === "main" ? "transform translate-y-0 scale-100" : "transform translate-x-0 scale-100"
    const hiddenTransformClass =
      parentLevel === "main" ? "transform -translate-y-2 scale-95" : "transform -translate-x-2 scale-95"

    return (
      <ul
        className={`absolute ${positionClass} min-w-[250px] bg-white border border-zinc-200 rounded-lg shadow-lg transition-all duration-300 z-${parentLevel === "main" ? "40" : "50"} ${isVisible
          ? `opacity-100 visible ${transformClass}`
          : `opacity-0 invisible ${hiddenTransformClass} pointer-events-none`
          }`}
        onMouseEnter={clearHoverTimeout}
        onMouseLeave={createLeaveHandler(parentLevel)}
      >
        {items.map((item, index) => renderDropdownItem(item, index, nextLevel))}
      </ul>
    )
  }

  const renderMobileDropdown = (items: NavItem[], level = 0) => {
    const activeState =
      level === 0 ? state.activeDropdown : level === 1 ? state.activeSubDropdown : state.activeDeepDropdown
    const bgClass = level === 0 ? "bg-blue-50" : level === 1 ? "bg-white" : "bg-gray-50"

    return items.map((item, index) => (
      <li key={index} className={level === 0 ? "border-b border-zinc-100 last:border-b-0" : "mb-2 last:mb-0"}>
        {item.dropdown ? (
          <>
            <button
              onClick={createToggleHandler(level === 0 ? "main" : level === 1 ? "sub" : "deep", index)}
              className="w-full flex justify-between items-center py-3 px-2 text-[#284c87] font-semibold"
            >
              {item.label}
              <ChevronIcon isOpen={activeState === index} />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${activeState === index ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                }`}
            >
              <ul className={`pl-4 py-2 ${bgClass} rounded-lg my-2`}>
                {renderMobileDropdown(item.dropdown, level + 1)}
              </ul>
            </div>
          </>
        ) : item.isButton ? (
          <Link
            href={item.href || "#"}
            className="block w-full text-center my-2 px-5 py-2 rounded-md bg-[#284c87] hover:bg-[#18345b] text-white font-bold shadow-sm transition"
          >
            {item.label}
          </Link>
        ) : (
          <Link
            href={item.href || "#"}
            className={`block py-${level === 0 ? "3" : "1"} px-2 text-[#284c87] font-${level === 0 ? "semibold" : "medium"} hover:bg-blue-50 rounded transition-colors`}
          >
            {item.label}
          </Link>
        )}
      </li>
    ))
  }

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 shadow-[0_2px_8px_0_rgba(40,76,135,0.07)] border-b border-zinc-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center h-20 justify-between" ref={navRef}>
        {/* Logo and mobile menu button */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link href="/" className="flex items-center">
            <img src={logoUrl || "/placeholder.svg"} alt="Logo" className="h-8 w-auto" />
          </Link>

          <button
            onClick={() => updateState({ mobileMenuOpen: !state.mobileMenuOpen })}
            className="md:hidden p-2 text-[#284c87]"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={state.mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-2 items-center flex-1 justify-center text-base font-semibold text-[#284c87]">
          {navItems.map((item, idx) => (
            <li
              key={idx}
              className="relative"
              onMouseEnter={createHoverHandler("main", idx)}
              onMouseLeave={createLeaveHandler("main")}
            >
              {item.dropdown ? (
                <>
                  <button
                    onClick={createToggleHandler("main", idx)}
                    className="cursor-pointer px-4 py-2 rounded hover:bg-blue-50 hover:text-[#284c87] transition flex items-center gap-1 font-semibold"
                    aria-expanded={state.activeDropdown === idx}
                    aria-haspopup="true"
                  >
                    {item.label}
                    <ChevronIcon isOpen={state.activeDropdown === idx} className="ml-1" />
                  </button>
                  {renderSubDropdown(item.dropdown, "main", state.activeDropdown === idx)}
                </>
              ) : item.isButton ? (
                <Link
                  href={item.href || "#"}
                  className="ml-2 px-5 py-2 rounded-md bg-[#284c87] hover:bg-[#18345b] text-white font-bold shadow-sm transition"
                >
                  {item.label}
                </Link>
              ) : (
                <Link
                  href={item.href || "#"}
                  className="px-4 py-2 hover:bg-blue-50 rounded-md hover:text-[#284c87] transition font-semibold"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Search and Sign In */}
        <div className="hidden md:flex gap-4 items-center">
          <button
            onClick={() => updateState({ searchOpen: !state.searchOpen })}
            className="text-[#284c87] hover:text-[#18345b] transition"
            aria-label="Search"
          >
            <SearchIcon />
          </button>

          {state.searchOpen && (
            <form
              onSubmit={(e) => {
                e.preventDefault()
                console.log("Searching for:", state.searchQuery)
              }}
              className="absolute top-20 right-40 bg-white p-2 shadow-md rounded-md border border-gray-200 z-50"
            >
              <input
                type="text"
                value={state.searchQuery}
                onChange={(e) => updateState({ searchQuery: e.target.value })}
                placeholder="Search..."
                className="px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#284c87]"
                autoFocus
              />
            </form>
          )}

          <div className="h-6 w-px bg-gray-200" />

          <Link
            href="/login"
            className="rounded-lg px-5 py-2 bg-white border border-[#284c87] text-[#284c87] hover:bg-[#284c87] hover:text-white font-bold transition"
          >
            Sign in
          </Link>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-20 left-0 right-0 bg-white shadow-lg border-t border-zinc-200 z-40 transition-all duration-300 ease-in-out ${state.mobileMenuOpen
            ? "opacity-100 visible max-h-[80vh] overflow-y-auto"
            : "opacity-0 invisible max-h-0 overflow-hidden"
            }`}
        >
          <div className="px-4 py-3 border-b border-gray-200">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                console.log("Searching for:", state.searchQuery)
              }}
              className="flex"
            >
              <input
                type="text"
                value={state.searchQuery}
                onChange={(e) => updateState({ searchQuery: e.target.value })}
                placeholder="Search..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-[#284c87]"
              />
              <button type="submit" className="px-3 py-2 bg-[#284c87] text-white rounded-r-md">
                <SearchIcon />
              </button>
            </form>
          </div>
          <ul className="px-4 py-2">
            {renderMobileDropdown(navItems)}
            <li className="mt-4 mb-2">
              <Link
                href="/login"
                className="block text-center rounded-lg px-5 py-2 bg-white border border-[#284c87] text-[#284c87] hover:bg-[#284c87] hover:text-white font-bold transition"
              >
                Sign in
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
