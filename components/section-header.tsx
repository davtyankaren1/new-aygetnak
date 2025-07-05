interface SectionHeaderProps {
  title: string
  subtitle: string
  accentWord?: string
  subtitleColor?: string
}

export default function SectionHeader({
  title,
  subtitle,
  accentWord,
  subtitleColor = "text-[#274C22]/80",
}: SectionHeaderProps) {
  // If accentWord is provided, replace it with styled version in the title
  const formattedTitle = accentWord
    ? title.replace(accentWord, `<span class="text-[#4C6E2A]">${accentWord}</span>`)
    : title

  return (
    <div className="text-center mb-12 relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Left decorative leaves */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex items-center gap-8">
            {/* Left side leaves */}
            <div className="flex items-center gap-2 opacity-20">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#879D49] rotate-45">
                <path d="M12 2C12 2 7 7 7 12C7 17 12 22 12 22C12 22 17 17 17 12C17 7 12 2 12 2Z" fill="currentColor" />
                <path d="M12 2C12 2 15 5 15 8C15 11 12 14 12 14" stroke="currentColor" strokeWidth="1" fill="none" />
              </svg>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[#4C6E2A] rotate-12">
                <path d="M12 2C12 2 7 7 7 12C7 17 12 22 12 22C12 22 17 17 17 12C17 7 12 2 12 2Z" fill="currentColor" />
              </svg>
            </div>

            {/* Spacer for title */}
            <div className="w-80"></div>

            {/* Right side leaves */}
            <div className="flex items-center gap-2 opacity-20">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[#4C6E2A] -rotate-12">
                <path d="M12 2C12 2 7 7 7 12C7 17 12 22 12 22C12 22 17 17 17 12C17 7 12 2 12 2Z" fill="currentColor" />
              </svg>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#879D49] -rotate-45">
                <path d="M12 2C12 2 7 7 7 12C7 17 12 22 12 22C12 22 17 17 17 12C17 7 12 2 12 2Z" fill="currentColor" />
                <path d="M12 2C12 2 15 5 15 8C15 11 12 14 12 14" stroke="currentColor" strokeWidth="1" fill="none" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Main title */}
      <div className="relative z-10">
        <h2
          className="text-3xl md:text-4xl font-medium text-[#274C22] mb-3 relative inline-block"
          style={{ fontFamily: "Arial Armenian, Arial, sans-serif" }}
          dangerouslySetInnerHTML={{ __html: formattedTitle }}
        />

        {/* Enhanced decorative underline with leaf elements */}
        <div className="flex justify-center items-center gap-3 mt-4 mb-6">
          {/* Left leaf */}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-[#879D49]">
            <path d="M12 2C12 2 7 7 7 12C7 17 12 22 12 22C12 22 17 17 17 12C17 7 12 2 12 2Z" fill="currentColor" />
          </svg>

          {/* Left line */}
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#879D49]/60"></div>

          {/* Center decorative element */}
          <div className="relative">
            <div className="h-[3px] w-20 bg-gradient-to-r from-[#879D49] via-[#4C6E2A] to-[#879D49] rounded-full"></div>
            {/* Small leaf accent on center */}
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              className="text-[#4C6E2A] absolute -top-1 left-1/2 -translate-x-1/2"
            >
              <path d="M12 2C12 2 7 7 7 12C7 17 12 22 12 22C12 22 17 17 17 12C17 7 12 2 12 2Z" fill="currentColor" />
            </svg>
          </div>

          {/* Right line */}
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#879D49]/60"></div>

          {/* Right leaf */}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-[#879D49] scale-x-[-1]">
            <path d="M12 2C12 2 7 7 7 12C7 17 12 22 12 22C12 22 17 17 17 12C17 7 12 2 12 2Z" fill="currentColor" />
          </svg>
        </div>

        {/* Subtitle with enhanced styling */}
        <div className="relative">
          <p
            className={`text-center ${subtitleColor} max-w-2xl mx-auto leading-relaxed`}
            style={{ fontFamily: "Arial Armenian, Arial, sans-serif" }}
          >
            {subtitle}
          </p>

          {/* Subtle decorative dots */}
          <div className="flex justify-center gap-2 mt-4">
            <div className="w-1 h-1 bg-[#879D49]/40 rounded-full"></div>
            <div className="w-1 h-1 bg-[#4C6E2A]/60 rounded-full"></div>
            <div className="w-1 h-1 bg-[#879D49]/40 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Additional floating leaf decorations */}
      <div className="absolute top-0 left-1/4 opacity-10 pointer-events-none">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-[#879D49] rotate-12 animate-float">
          <path d="M12 2C12 2 7 7 7 12C7 17 12 22 12 22C12 22 17 17 17 12C17 7 12 2 12 2Z" fill="currentColor" />
          <path d="M12 2C12 2 15 5 15 8C15 11 12 14 12 14" stroke="currentColor" strokeWidth="1" fill="none" />
        </svg>
      </div>

      <div className="absolute top-0 right-1/4 opacity-10 pointer-events-none">
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          className="text-[#4C6E2A] -rotate-12 animate-float"
          style={{ animationDelay: "1s" }}
        >
          <path d="M12 2C12 2 7 7 7 12C7 17 12 22 12 22C12 22 17 17 17 12C17 7 12 2 12 2Z" fill="currentColor" />
        </svg>
      </div>
    </div>
  )
}
