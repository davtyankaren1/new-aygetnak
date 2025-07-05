"use client"

import { useEffect } from "react"
import { X, Phone, Facebook, Instagram, Mail } from "lucide-react"
import Image from "next/image"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  scrollToSection: (sectionId: string) => void
  activeSection: string
}

export default function MobileMenu({ isOpen, onClose, scrollToSection, activeSection }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId)
    onClose()
  }

  const navigationItems = [
    { id: "hero", label: "Գլխավոր", icon: "🏠" },
    { id: "what-we-offer", label: "Մեր Առաջարկը", icon: "🌟" },
    { id: "gallery", label: "Պատկերասրահ", icon: "📸" },
    { id: "contact", label: "Կապ", icon: "📱" },
  ]

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-[#274C22] z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ fontFamily: "Arial Armenian, Arial, sans-serif" }}
      >
        <div className="flex flex-col h-full w-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-[#879D49]/30 w-full">
            <div className="relative flex items-center gap-3">
              {/* Animated glowing border for logo */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#879D49] via-[#4C6E2A] to-[#879D49] p-[2px] animate-pulse"></div>

              {/* Moving light effect */}
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shimmer"></div>
              </div>

              {/* Logo container */}
              <div className="relative bg-transparent/20 backdrop-blur-sm rounded-full p-1 border border-[#879D49]/50">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src="/website-logo.png"
                    alt="Այգետնակ №206 Logo"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <span className="text-[#F3F3F3] font-light text-sm tracking-wider drop-shadow-lg">
                ԱՅԳԵՏՆԱԿ <span className="font-normal text-[#879D49] drop-shadow-lg">№206</span>
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-[#879D49]/20 text-[#F3F3F3] hover:bg-[#879D49]/30 transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Content Wrapper - Fills available space */}
          <div className="flex-1 overflow-y-auto w-full">
            {/* Navigation Items */}
            <div className="px-4 py-4 w-full">
              <h3 className="text-[#879D49] font-medium text-lg mb-3 tracking-wide">Նավիգացիա</h3>
              <nav className="w-full">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full flex items-center gap-4 p-3 rounded-lg transition-all duration-200 mb-1 ${
                      activeSection === item.id
                        ? "bg-[#879D49]/20 border border-[#879D49]/50 text-[#879D49]"
                        : "text-[#F3F3F3] hover:bg-[#879D49]/10 hover:text-[#879D49]"
                    }`}
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span className="font-light tracking-wide">{item.label}</span>
                  </button>
                ))}
              </nav>
            </div>

            {/* Contact Information */}
            <div className="px-4 py-4 border-t border-[#879D49]/30 mt-2 w-full">
              <h3 className="text-[#879D49] font-medium text-lg mb-3 tracking-wide">Կապ</h3>

              {/* Phone Number */}
              <a
                href="tel:+37477123456"
                className="flex items-center gap-3 p-3 rounded-lg bg-[#274C22] border border-[#879D49]/50 text-[#F3F3F3] hover:bg-[#879D49]/10 transition-colors mb-4 w-full"
              >
                <Phone size={20} className="text-[#879D49]" />
                <span className="font-light">+374 77 123 456</span>
              </a>

              {/* Social Media */}
              <div className="mb-4 w-full">
                <h4 className="text-[#879D49] font-light text-sm tracking-wide mb-2">Սոցիալական ցանցեր</h4>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-[#274C22] border border-[#879D49]/50 text-[#F3F3F3] hover:bg-[#879D49]/10 transition-all"
                  >
                    <Facebook size={18} />
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-[#274C22] border border-[#879D49]/50 text-[#F3F3F3] hover:bg-[#879D49]/10 transition-all"
                  >
                    <Instagram size={18} />
                  </a>
                  <a
                    href="mailto:info@aygetnak206.am"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-[#274C22] border border-[#879D49]/50 text-[#F3F3F3] hover:bg-[#879D49]/10 transition-all"
                  >
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Footer - Always at bottom */}
          <div className="p-4 border-t border-[#879D49]/30 bg-[#274C22] mt-auto w-full">
            <p className="text-[#879D49] text-sm text-center font-light">© 2024 ԱՅԳԵՏՆԱԿ №206</p>
          </div>
        </div>
      </div>
    </>
  )
}
