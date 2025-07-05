import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Ամառային Տուն 206 - Այգու Տնակ",
  description: "Հրաշալի հանգստավայր բնության սրտում։ Վայելեք կանաչ դրախտի գեղեցկությունը և դարձրեք ձեր օրը անմոռանալի։",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hy" className="scroll-smooth">
      <body className="font-arial">{children}</body>
    </html>
  )
}
