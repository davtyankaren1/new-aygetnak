// "use client"

// import { useState, useEffect, useRef } from "react"
// import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react"
// import SectionHeader from "./section-header"
// import { gsap } from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"

// // Define gallery categories and images
// interface GalleryImage {
//   src: string
//   alt: string
//   category: string
// }

// const galleryImages: GalleryImage[] = [
//   {
//     src: "/outdoor-pavilion-event.png",
//     alt: "Outdoor pavilion set up for an event",
//     category: "pavilion",
//   },
//   {
//     src: "/garden-pavilion-party.png",
//     alt: "Garden pavilion decorated for a party",
//     category: "pavilion",
//   },
//   {
//     src: "/outdoor-decorated-pavilion.png",
//     alt: "Beautifully decorated outdoor pavilion",
//     category: "pavilion",
//   },
//   {
//     src: "/elegant-table-setting.png",
//     alt: "Elegant table setting with fine tableware",
//     category: "dining",
//   },
//   {
//     src: "/outdoor-tableware.png",
//     alt: "Outdoor dining table with elegant tableware",
//     category: "dining",
//   },
//   {
//     src: "/outdoor-kitchen-gas-stove-sink.png",
//     alt: "Outdoor kitchen with gas stove and sink",
//     category: "kitchen",
//   },
//   {
//     src: "/summer-house-kitchen.png",
//     alt: "Summer house kitchen interior",
//     category: "kitchen",
//   },
//   {
//     src: "/modern-outdoor-cooking.png",
//     alt: "Modern outdoor cooking area",
//     category: "kitchen",
//   },
//   {
//     src: "/flower-garden-landscape.png",
//     alt: "Beautiful garden landscape with flowers",
//     category: "garden",
//   },
//   {
//     src: "/summer-house-exterior.png",
//     alt: "Summer house exterior view",
//     category: "exterior",
//   },
//   {
//     src: "/garden-pool-lounge.png",
//     alt: "Garden swimming pool with lounge chairs",
//     category: "pool",
//   },
//   {
//     src: "/evening-garden-party.png",
//     alt: "Evening garden party with string lights",
//     category: "events",
//   },
// ]

// // Define categories for filtering
// const categories = [
//   { id: "all", label: "Բոլորը" },
//   { id: "pavilion", label: "Տաղավար" },
//   { id: "dining", label: "Ճաշասենյակ" },
//   { id: "kitchen", label: "Խոհանոց" },
//   { id: "garden", label: "Այգի" },
//   { id: "exterior", label: "Արտաքին տեսք" },
//   { id: "pool", label: "Լողավազան" },
//   { id: "events", label: "Միջոցառումներ" },
// ]

// export default function GallerySection() {
//   const [activeCategory, setActiveCategory] = useState("all")
//   const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
//   const [lightboxOpen, setLightboxOpen] = useState(false)
//   const [currentMobileIndex, setCurrentMobileIndex] = useState(0)
//   const [isMobile, setIsMobile] = useState(false)

//   const sectionRef = useRef<HTMLElement>(null)
//   const headerRef = useRef<HTMLDivElement>(null)
//   const categoriesRef = useRef<HTMLDivElement>(null)
//   const galleryRef = useRef<HTMLDivElement>(null)

//   // Set up scroll animations - faster animations
//   useEffect(() => {
//     if (!sectionRef.current || !headerRef.current || !categoriesRef.current || !galleryRef.current) return

//     gsap.registerPlugin(ScrollTrigger)

//     // Header animation - faster duration
//     gsap.fromTo(
//       headerRef.current,
//       { opacity: 0, y: 50 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 0.5, // Reduced from 0.8
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 85%",
//           end: "top 60%",
//           toggleActions: "play none none reverse",
//         },
//       },
//     )

//     // Categories animation - faster duration
//     gsap.fromTo(
//       categoriesRef.current,
//       { opacity: 0, y: 30 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 0.4, // Reduced from 0.6
//         scrollTrigger: {
//           trigger: categoriesRef.current,
//           start: "top 90%",
//           end: "top 70%",
//           toggleActions: "play none none reverse",
//         },
//       },
//     )

//     // Gallery items animation with stagger - faster animations
//     const galleryItems = galleryRef.current.querySelectorAll(".gallery-item")
//     gsap.fromTo(
//       galleryItems,
//       { opacity: 0, y: 40, scale: 0.95 },
//       {
//         opacity: 1,
//         y: 0,
//         scale: 1,
//         duration: 0.3, // Reduced from 0.5
//         stagger: 0.04, // Reduced from 0.08
//         scrollTrigger: {
//           trigger: galleryRef.current,
//           start: "top 85%",
//           end: "bottom 65%",
//           toggleActions: "play none none reverse",
//         },
//       },
//     )

//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
//     }
//   }, [activeCategory, isMobile])

//   // Check if device is mobile
//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 768)
//     }

//     checkMobile()
//     window.addEventListener("resize", checkMobile)
//     return () => window.removeEventListener("resize", checkMobile)
//   }, [])

//   // Filter images based on active category
//   const filteredImages =
//     activeCategory === "all" ? galleryImages : galleryImages.filter((img) => img.category === activeCategory)

//   // Reset mobile index when category changes and ensure it's within bounds
//   useEffect(() => {
//     setCurrentMobileIndex(0)
//   }, [activeCategory])

//   // Ensure currentMobileIndex is always within bounds
//   const safeCurrentMobileIndex = Math.min(currentMobileIndex, Math.max(0, filteredImages.length - 1))

//   // Mobile navigation
//   const nextMobileImage = () => {
//     if (filteredImages.length > 0) {
//       setCurrentMobileIndex((prev) => (prev + 1) % filteredImages.length)
//     }
//   }

//   const prevMobileImage = () => {
//     if (filteredImages.length > 0) {
//       setCurrentMobileIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length)
//     }
//   }

//   // Get current items based on mobile/desktop - with safety check
//   const currentItems =
//     isMobile && filteredImages.length > 0 ? [filteredImages[safeCurrentMobileIndex]].filter(Boolean) : filteredImages

//   // Open lightbox with selected image
//   const openLightbox = (image: GalleryImage) => {
//     if (image && image.src) {
//       setSelectedImage(image)
//       setLightboxOpen(true)
//       document.body.style.overflow = "hidden" // Prevent scrolling when lightbox is open
//     }
//   }

//   // Close lightbox
//   const closeLightbox = () => {
//     setLightboxOpen(false)
//     document.body.style.overflow = "auto" // Re-enable scrolling
//   }

//   // Navigate to next/previous image in lightbox
//   const navigateImage = (direction: "next" | "prev") => {
//     if (!selectedImage || filteredImages.length === 0) return

//     const currentIndex = filteredImages.findIndex((img) => img.src === selectedImage.src)
//     let newIndex: number

//     if (direction === "next") {
//       newIndex = (currentIndex + 1) % filteredImages.length
//     } else {
//       newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length
//     }

//     if (filteredImages[newIndex]) {
//       setSelectedImage(filteredImages[newIndex])
//     }
//   }

//   return (
//     <section id="gallery" ref={sectionRef} className="py-16">
//       <div ref={headerRef}>
//         <SectionHeader
//           title="Մեր Պատկերասրահը"
//           accentWord="Պատկերասրահը"
//           subtitle="Բացահայտեք մեր ամառային տան գեղեցկությունը այս մանրակրկիտ ընտրված պատկերների միջոցով։ Ոգեշնչվեք ձեր հաջորդ այցի համար և տեսեք բոլոր հրաշալի փորձառությունները, որոնք սպասում են ձեզ։"
//         />
//       </div>

//       {/* Category filters */}
//       <div ref={categoriesRef} className="flex flex-wrap justify-center gap-3 mb-8">
//         {categories.map((category) => (
//           <button
//             key={category.id}
//             onClick={() => setActiveCategory(category.id)}
//             className={`px-5 py-2 rounded-full transition-all duration-200 ${
//               activeCategory === category.id
//                 ? "bg-[#274C22] text-white shadow-md"
//                 : "bg-white text-[#274C22] hover:bg-[#879D49]/30 shadow-sm"
//             }`}
//             style={{ fontFamily: "Arial Armenian, Arial, sans-serif" }}
//           >
//             {category.label}
//           </button>
//         ))}
//       </div>

//       {/* Show content only if there are filtered images */}
//       {filteredImages.length > 0 ? (
//         <div className="relative">
//           {/* Mobile Navigation Arrows - Repositioned to be at the edges of the screen */}
//           {isMobile && filteredImages.length > 1 && (
//             <>
//               <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
//                 <button
//                   onClick={prevMobileImage}
//                   className="bg-white/80 hover:bg-[#879D49] text-[#274C22] hover:text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-x-1"
//                   aria-label="Previous image"
//                 >
//                   <ChevronLeft className="h-6 w-6" />
//                 </button>
//               </div>

//               <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
//                 <button
//                   onClick={nextMobileImage}
//                   className="bg-white/80 hover:bg-[#879D49] text-[#274C22] hover:text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:translate-x-1"
//                   aria-label="Next image"
//                 >
//                   <ChevronRight className="h-6 w-6" />
//                 </button>
//               </div>
//             </>
//           )}

//           {/* Gallery grid */}
//           <div
//             ref={galleryRef}
//             className={`transition-all duration-200 ${
//               isMobile ? "flex justify-center" : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//             }`}
//           >
//             {currentItems.map((image, index) => {
//               if (!image || !image.src) return null

//               return (
//                 <div
//                   key={isMobile ? `mobile-${safeCurrentMobileIndex}` : index}
//                   className={`gallery-item group bg-white rounded-lg shadow-md cursor-pointer transition-transform hover:shadow-lg hover:-translate-y-1 duration-200 ${
//                     isMobile ? "w-full max-w-sm mx-4" : ""
//                   }`}
//                   onClick={() => openLightbox(image)}
//                 >
//                   {/* Image container with equal padding on all sides */}
//                   <div className="p-6">
//                     <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
//                       {/* Image */}
//                       <img
//                         src={image.src || "/placeholder.svg"}
//                         alt={image.alt || "Gallery image"}
//                         className="w-full h-full object-cover rounded-xl"
//                       />

//                       {/* Enhanced overlay with gradient and texture */}
//                       <div className="absolute inset-0 bg-gradient-to-br from-[#274C22]/20 to-[#4C6E2A]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
//                       <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] opacity-0 group-hover:opacity-10 transition-opacity duration-200"></div>

//                       {/* Zoom icon - always visible */}
//                       <div className="absolute top-4 right-4 bg-white/80 p-2 rounded-full transform scale-90 group-hover:scale-100 transition-transform duration-200">
//                         <ZoomIn className="h-5 w-5 text-[#274C22]" />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )
//             })}
//           </div>

//           {/* Pagination indicators - Enhanced with better styling */}
//           {isMobile && filteredImages.length > 1 && (
//             <div className="flex justify-center mt-8 gap-2">
//               {Array.from({ length: filteredImages.length }).map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrentMobileIndex(index)}
//                   className={`h-2 rounded-full transition-all ${
//                     safeCurrentMobileIndex === index ? "w-8 bg-[#274C22]" : "w-2 bg-[#274C22]/30"
//                   } hover:bg-[#879D49] focus:outline-none focus:ring-2 focus:ring-[#879D49]/50`}
//                   aria-label={`Go to image ${index + 1}`}
//                 />
//               ))}
//             </div>
//           )}

//           {/* Mobile image counter */}
//           {isMobile && filteredImages.length > 1 && (
//             <div className="text-center mt-4">
//               <span className="text-[#274C22]/70 text-sm" style={{ fontFamily: "Arial Armenian, Arial, sans-serif" }}>
//                 {safeCurrentMobileIndex + 1} / {filteredImages.length}
//               </span>
//             </div>
//           )}
//         </div>
//       ) : (
//         /* Show message when no images in category */
//         <div className="text-center py-12">
//           <p className="text-[#274C22]/70" style={{ fontFamily: "Arial Armenian, Arial, sans-serif" }}>
//             Այս կատեգորիայում պատկերներ չկան։
//           </p>
//         </div>
//       )}

//       {/* Enhanced Lightbox with better styling - FIXED FOR MOBILE */}
//       {lightboxOpen && selectedImage && selectedImage.src && (
//         <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
//           <button
//             onClick={closeLightbox}
//             className="absolute top-4 right-4 md:top-6 md:right-6 z-10 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-all"
//             aria-label="Close lightbox"
//           >
//             <X className="h-6 w-6" />
//           </button>

//           {/* LEFT ARROW - Fixed for mobile visibility */}
//           <button
//             onClick={() => navigateImage("prev")}
//             className="absolute left-2 md:left-4 lg:left-8 top-1/2 -translate-y-1/2 -translate-y-2.5 z-10 bg-white/20 hover:bg-[#879D49]/80 text-white p-2 md:p-3 rounded-full transition-all transform hover:-translate-x-1"
//             aria-label="Previous image"
//           >
//             <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
//           </button>

//           <div className="relative max-w-5xl max-h-[80vh] w-full mx-8 md:mx-16">
//             <img
//               src={selectedImage.src || "/placeholder.svg"}
//               alt={selectedImage.alt || "Gallery image"}
//               className="w-full h-full object-contain rounded-lg"
//             />

//             {/* Subtle overlay for better contrast */}
//             <div className="absolute inset-0 bg-gradient-to-br from-[#274C22]/10 to-[#4C6E2A]/10 pointer-events-none"></div>
//           </div>

//           {/* RIGHT ARROW - Fixed for mobile visibility */}
//           <button
//             onClick={() => navigateImage("next")}
//             className="absolute right-2 md:right-4 lg:right-8 top-1/2 -translate-y-1/2 -translate-y-2.5 z-10 bg-white/20 hover:bg-[#879D49]/80 text-white p-2 md:p-3 rounded-full transition-all transform hover:translate-x-1"
//             aria-label="Next image"
//           >
//             <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
//           </button>
//         </div>
//       )}
//     </section>
//   )
// }

"use client";

import { useState, useEffect, useRef } from "react";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeader from "./section-header";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Define gallery categories and images
interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

const galleryImages: GalleryImage[] = [
  {
    src: "/images/pavilion1.jpg",
    alt: "Outdoor pavilion set up for an event",
    category: "pavilion"
  },
  {
    src: "/images/pavilion2.JPG",
    alt: "Garden pavilion decorated for a party",
    category: "pavilion"
  },
  {
    src: "/images/kitchen1.jpg",
    alt: "Summer house kitchen interior",
    category: "kitchen"
  },
  {
    src: "/images/kitchen2.jpg",
    alt: "Modern outdoor cooking area",
    category: "kitchen"
  },
  {
    src: "/images/pool1.JPG",
    alt: "Garden swimming pool with lounge chairs",
    category: "pool"
  },
  {
    src: "/images/pool2.JPG",
    alt: "Garden swimming pool with lounge chairs",
    category: "pool"
  },
  {
    src: "/images/pool3.JPG",
    alt: "Garden swimming pool with lounge chairs",
    category: "pool"
  },
  {
    src: "/images/pool4.JPG",
    alt: "Garden swimming pool with lounge chairs",
    category: "pool"
  },

  {
    src: "/images/pool6.JPG",
    alt: "Garden swimming pool with lounge chairs",
    category: "pool"
  },

  {
    src: "/images/garden1.jpg",
    alt: "Beautiful garden landscape with flowers",
    category: "garden"
  },
  {
    src: "/images/garden2.jpg",
    alt: "Beautiful garden landscape with flowers",
    category: "garden"
  },
  {
    src: "/images/garden3.jpg",
    alt: "Beautiful garden landscape with flowers",
    category: "garden"
  }
];

// Define categories for filtering
const categories = [
  { id: "all", label: "Բոլորը" },
  { id: "pavilion", label: "Տաղավար" },
  { id: "kitchen", label: "Խոհանոց" },
  { id: "garden", label: "Այգի" },
  { id: "pool", label: "Լողավազան" }
];

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentMobileIndex, setCurrentMobileIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  // Set up scroll animations - faster animations
  useEffect(() => {
    if (
      !sectionRef.current ||
      !headerRef.current ||
      !categoriesRef.current ||
      !galleryRef.current
    )
      return;

    gsap.registerPlugin(ScrollTrigger);

    // Header animation - faster duration
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5, // Reduced from 0.8
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          end: "top 60%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Categories animation - faster duration
    gsap.fromTo(
      categoriesRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.4, // Reduced from 0.6
        scrollTrigger: {
          trigger: categoriesRef.current,
          start: "top 90%",
          end: "top 70%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Gallery items animation with stagger - faster animations
    const galleryItems = galleryRef.current.querySelectorAll(".gallery-item");
    gsap.fromTo(
      galleryItems,
      { opacity: 0, y: 40, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.3, // Reduced from 0.5
        stagger: 0.04, // Reduced from 0.08
        scrollTrigger: {
          trigger: galleryRef.current,
          start: "top 85%",
          end: "bottom 65%",
          toggleActions: "play none none reverse"
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [activeCategory, isMobile]);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Filter images based on active category
  const filteredImages =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  // Reset mobile index when category changes and ensure it's within bounds
  useEffect(() => {
    setCurrentMobileIndex(0);
  }, [activeCategory]);

  // Ensure currentMobileIndex is always within bounds
  const safeCurrentMobileIndex = Math.min(
    currentMobileIndex,
    Math.max(0, filteredImages.length - 1)
  );

  // Mobile navigation
  const nextMobileImage = () => {
    if (filteredImages.length > 0) {
      setCurrentMobileIndex((prev) => (prev + 1) % filteredImages.length);
    }
  };

  const prevMobileImage = () => {
    if (filteredImages.length > 0) {
      setCurrentMobileIndex(
        (prev) => (prev - 1 + filteredImages.length) % filteredImages.length
      );
    }
  };

  // Get current items based on mobile/desktop - with safety check
  const currentItems =
    isMobile && filteredImages.length > 0
      ? [filteredImages[safeCurrentMobileIndex]].filter(Boolean)
      : filteredImages;

  // Open lightbox with selected image
  const openLightbox = (image: GalleryImage) => {
    if (image && image.src) {
      setSelectedImage(image);
      setLightboxOpen(true);
      document.body.style.overflow = "hidden"; // Prevent scrolling when lightbox is open
    }
  };

  // Close lightbox
  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto"; // Re-enable scrolling
  };

  // Navigate to next/previous image in lightbox
  const navigateImage = (direction: "next" | "prev") => {
    if (!selectedImage || filteredImages.length === 0) return;

    const currentIndex = filteredImages.findIndex(
      (img) => img.src === selectedImage.src
    );
    let newIndex: number;

    if (direction === "next") {
      newIndex = (currentIndex + 1) % filteredImages.length;
    } else {
      newIndex =
        (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    }

    if (filteredImages[newIndex]) {
      setSelectedImage(filteredImages[newIndex]);
    }
  };

  return (
    <section id='gallery' ref={sectionRef} className='py-16'>
      <div ref={headerRef}>
        <SectionHeader
          title='Նկարներ'
          accentWord='Նկարներ'
          subtitle='Բացահայտեք մեր ամառային տան գեղեցկությունը այս մանրակրկիտ ընտրված պատկերների միջոցով։ Ոգեշնչվեք ձեր հաջորդ այցի համար և տեսեք բոլոր հրաշալի փորձառությունները, որոնք սպասում են ձեզ։'
        />
      </div>

      {/* Category filters */}
      <div
        ref={categoriesRef}
        className='flex flex-wrap justify-center gap-3 mb-8'
      >
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-5 py-2 rounded-full transition-all duration-200 ${
              activeCategory === category.id
                ? "bg-[#274C22] text-white shadow-md"
                : "bg-white text-[#274C22] hover:bg-[#879D49]/30 shadow-sm"
            }`}
            style={{ fontFamily: "Arial Armenian, Arial, sans-serif" }}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Show content only if there are filtered images */}
      {filteredImages.length > 0 ? (
        <div className='relative'>
          {/* Mobile Navigation Arrows - Repositioned to be at the edges of the screen */}
          {isMobile && filteredImages.length > 1 && (
            <>
              <div className='absolute left-0 top-[120px] -translate-y-1/2 z-10'>
                <button
                  onClick={prevMobileImage}
                  className='bg-white/80 hover:bg-[#879D49] text-[#274C22] hover:text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-x-1'
                  aria-label='Previous image'
                >
                  <ChevronLeft className='h-6 w-6' />
                </button>
              </div>

              <div className='absolute right-0 top-[120px] -translate-y-1/2 z-10'>
                <button
                  onClick={nextMobileImage}
                  className='bg-white/80 hover:bg-[#879D49] text-[#274C22] hover:text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:translate-x-1'
                  aria-label='Next image'
                >
                  <ChevronRight className='h-6 w-6' />
                </button>
              </div>
            </>
          )}

          {/* Gallery grid */}
          <div
            ref={galleryRef}
            className={`transition-all duration-200 ${
              isMobile
                ? "flex justify-center"
                : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            }`}
          >
            {currentItems.map((image, index) => {
              if (!image || !image.src) return null;

              return (
                <div
                  key={isMobile ? `mobile-${safeCurrentMobileIndex}` : index}
                  className={`gallery-item group bg-white rounded-lg shadow-md cursor-pointer transition-transform hover:shadow-lg hover:-translate-y-1 duration-200 ${
                    isMobile ? "w-full max-w-sm mx-4" : ""
                  }`}
                  onClick={() => openLightbox(image)}
                >
                  {/* Image container with equal padding on all sides */}
                  <div className='p-6'>
                    <div className='relative aspect-[4/2] overflow-hidden rounded-xl'>
                      {/* Image */}
                      <img
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt || "Gallery image"}
                        className='w-full h-full object-cover rounded-xl'
                      />

                      {/* Enhanced overlay with gradient and texture */}
                      <div className='absolute inset-0 bg-gradient-to-br from-[#274C22]/20 to-[#4C6E2A]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200'></div>
                      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] opacity-0 group-hover:opacity-10 transition-opacity duration-200"></div>

                      {/* Zoom icon - always visible */}
                      <div className='absolute top-4 right-4 bg-white/80 p-2 rounded-full transform scale-90 group-hover:scale-100 transition-transform duration-200'>
                        <ZoomIn className='h-5 w-5 text-[#274C22]' />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pagination indicators - Enhanced with better styling */}
          {isMobile && filteredImages.length > 1 && (
            <div className='flex justify-center mt-8 gap-2'>
              {Array.from({ length: filteredImages.length }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentMobileIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    safeCurrentMobileIndex === index
                      ? "w-8 bg-[#274C22]"
                      : "w-2 bg-[#274C22]/30"
                  } hover:bg-[#879D49] focus:outline-none focus:ring-2 focus:ring-[#879D49]/50`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          )}

          {/* Mobile image counter */}
          {isMobile && filteredImages.length > 1 && (
            <div className='text-center mt-4'>
              <span
                className='text-[#274C22]/70 text-sm'
                style={{ fontFamily: "Arial Armenian, Arial, sans-serif" }}
              >
                {safeCurrentMobileIndex + 1} / {filteredImages.length}
              </span>
            </div>
          )}
        </div>
      ) : (
        /* Show message when no images in category */
        <div className='text-center py-12'>
          <p
            className='text-[#274C22]/70'
            style={{ fontFamily: "Arial Armenian, Arial, sans-serif" }}
          >
            Այս կատեգորիայում պատկերներ չկան։
          </p>
        </div>
      )}

      {/* Enhanced Lightbox with better styling - FIXED FOR MOBILE */}
      {lightboxOpen && selectedImage && selectedImage.src && (
        <div className='fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4'>
          <button
            onClick={closeLightbox}
            className='absolute top-4 right-4 md:top-6 md:right-6 z-10 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-all'
            aria-label='Close lightbox'
          >
            <X className='h-6 w-6' />
          </button>

          {/* LEFT ARROW - Fixed for mobile visibility */}
          <button
            onClick={() => navigateImage("prev")}
            className='absolute left-2 md:left-4 lg:left-8 top-1/2 -translate-y-1/2 -translate-y-2.5 z-10 bg-white/20 hover:bg-[#879D49]/80 text-white p-2 md:p-3 rounded-full transition-all transform hover:-translate-x-1'
            aria-label='Previous image'
          >
            <ChevronLeft className='h-5 w-5 md:h-6 md:w-6' />
          </button>

          <div className='relative max-w-2xl max-h-[100vh] w-full mx-8 md:mx-16'>
            <img
              src={selectedImage.src || "/placeholder.svg"}
              alt={selectedImage.alt || "Gallery image"}
              className='w-full h-full object-contain rounded-lg'
            />

            {/* Subtle overlay for better contrast */}
            <div className='absolute inset-0 bg-gradient-to-br from-[#274C22]/10 to-[#4C6E2A]/10 pointer-events-none'></div>
          </div>

          {/* RIGHT ARROW - Fixed for mobile visibility */}
          <button
            onClick={() => navigateImage("next")}
            className='absolute right-2 md:right-4 lg:right-8 top-1/2 -translate-y-1/2 -translate-y-2.5 z-10 bg-white/20 hover:bg-[#879D49]/80 text-white p-2 md:p-3 rounded-full transition-all transform hover:translate-x-1'
            aria-label='Next image'
          >
            <ChevronRight className='h-5 w-5 md:h-6 md:w-6' />
          </button>
        </div>
      )}
    </section>
  );
}
