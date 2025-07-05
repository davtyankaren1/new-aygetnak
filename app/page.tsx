import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import WhatWeOfferSection from "@/components/what-we-offer-section";
import GallerySection from "@/components/gallery-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import AnimationProvider from "@/components/animation-provider";

// export default function Home() {
//   return (
//     <AnimationProvider>
//       <main className="min-h-screen bg-[#F3F3F3]">
//         <Header />
//         <HeroSection />
//         <div className="container mx-auto px-4 md:px-16 lg:px-24">
//           <WhatWeOfferSection />
//           <GallerySection />
//         </div>
//         {/* Contact section with location information */}
//         <ContactSection />
//         <Footer />
//       </main>
//     </AnimationProvider>
//   )
// }

export default function Home() {
  return (
    <AnimationProvider>
      <main className='min-h-screen bg-[#F3F3F3] overflow-x-hidden'>
        <Header />
        <HeroSection />
        <div className='container mx-auto px-4 md:px-16 lg:px-24'>
          <WhatWeOfferSection />
          <GallerySection />
        </div>
        {/* Contact section with location information */}
        <ContactSection />
        <Footer />
      </main>
    </AnimationProvider>
  );
}
