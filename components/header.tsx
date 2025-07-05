"use client"

import { useState, useEffect } from "react"
import { Menu } from "lucide-react"
import MobileMenu from "./mobile-menu"
import Image from "next/image"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Set header transparency based on scroll position
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      // Determine active section
      const sections = ["hero", "what-we-offer", "gallery", "location", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const top = element.offsetTop
          const height = element.offsetHeight

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled ? "bg-[#274C22]/70 backdrop-blur-md py-3" : "bg-[#274C22] py-5"
        }`}
      >
        <div className="container mx-auto px-6 md:px-16 lg:px-24 flex justify-between items-center">
          <button onClick={scrollToTop} className="flex items-center gap-3">
            <div className="relative">
              {/* Animated glowing border container */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#879D49] via-[#4C6E2A] to-[#879D49] p-[2px] animate-pulse"></div>

              {/* Moving light effect */}
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shimmer"></div>
              </div>

              {/* Logo container */}
              <div className="relative bg-transparent/20 backdrop-blur-sm rounded-full p-1 border border-[#879D49]/50">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src="/website-logo.png"
                    alt="Այգետնակ №206 Logo"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div style={{ fontFamily: "Arial Armenian, Arial, sans-serif" }}>
              <span className="text-[#F3F3F3] font-light text-lg tracking-wider drop-shadow-lg">
                ԱՅԳԵՏՆԱԿ <span className="font-normal text-[#879D49] drop-shadow-lg">№206</span>
              </span>
            </div>
          </button>

          <nav className="hidden md:flex gap-8">
            {[
              { id: "what-we-offer", label: "Մեր Առաջարկը" },
              { id: "gallery", label: "Պատկերասրահ" },
              { id: "contact", label: "Կապ" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative text-[#F3F3F3] font-light tracking-wide hover:text-[#879D49] transition-colors group`}
                style={{ fontFamily: "Arial Armenian, Arial, sans-serif" }}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-[#879D49] transition-all duration-300 group-hover:w-full ${
                    activeSection === item.id ? "w-full" : ""
                  }`}
                />
              </button>
            ))}
          </nav>

          <button
            className="md:hidden p-2 rounded-lg bg-[#879D49]/20 text-[#F3F3F3] hover:bg-[#879D49]/30 transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        scrollToSection={scrollToSection}
        activeSection={activeSection}
      />
    </>
  )
}
