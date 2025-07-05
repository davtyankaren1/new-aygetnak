import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head"; // Import Head component from next/head

export const metadata: Metadata = {
  title: "Այգետնակ №206 ",
  description:
    "Հրաշալի հանգստավայր բնության սրտում։ Վայելեք կանաչ դրախտի գեղեցկությունը և դարձրեք ձեր օրը անմոռանալի։",
  generator: "v0.dev"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='hy' className='scroll-smooth'>
      <Head>
        <link rel='icon' href='/website-logo.ico' />
        <link rel='icon' type='image/png' href='/website-logo.png' />
        <meta property='og:image' content='/website-logo.png' />
      </Head>
      <body className='font-arial'>{children}</body>
    </html>
  );
}
