"use client";

import type React from "react";
import { useState, useEffect, useRef } from "react";
import {
  Users,
  Utensils,
  ChefHat,
  Flame,
  Trees,
  Waves,
  Palmtree,
  Bath,
  Heart,
  Bed,
  Wifi,
  Music,
  Footprints,
  ChevronLeft,
  ChevronRight,
  Image as ImageIcon
} from "lucide-react";
import SectionHeader from "./section-header";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Define offering type with images
interface Offering {
  icon: React.ReactNode;
  title: string;
  description: string;
  images: string[];
}

const offerings: Offering[] = [
  {
    icon: <Users className='h-8 w-8' />,
    title: "Տաղավար մինչև 40 հյուրի համար",
    description:
      "Ընդարձակ տաղավար, որը հարմարավետ կերպով տեղավորում է մինչև 40 հյուր՝ ձեր միջոցառումների համար։",
    images: ["/images/pavilion1.jpg", "/images/pavilion2.JPG"]
  },
  {
    icon: <Utensils className='h-8 w-8' />,
    title: "Գեղեցիկ սպասք",
    description:
      "Գեղեցիկ ու հարմարավետ սպասքի ամբողջական հավաքածու՝ ձեր ճաշի փորձառության համար։",
    images: ["/images/posuda.jpg"]
  },
  {
    icon: <ChefHat className='h-8 w-8' />,
    title: "Հարմարավետ խոհանոց",
    description: "Լիովին կահավորված խոհանոց՝ տաք և սառը ջրով, գազօջախով։",
    images: ["/images/kitchen1.jpg", "images/kitchen2.jpg"]
  },
  {
    icon: <Flame className='h-8 w-8' />,
    title: "Խորովածի պարագաներ",
    description: "Խորովածի շամփուրներ և ձկան խորովելու ցանց",
    images: ["/images/shampur1.png", "/images/shampur2.png"]
  },
  {
    icon: <Trees className='h-8 w-8' />,
    title: "Կանաչ գոտի՝ խարույկի զոնայով",
    description:
      "Գեղեցիկ կանաչ տարածք՝ երեկոյան հավաքույթների համար նախատեսված խարույկի գոտիով։",
    images: [
      "/images/garden1.jpg",
      "/images/garden2.jpg",
      "/images/garden3.jpg",
      "/images/garden4.jpg"
    ]
  },
  {
    icon: <Waves className='h-8 w-8' />,
    title: "Լողավազան և պարագաներ",
    description:
      "Լողավազան և բոլոր անհրաժեշտ պարագաները՝ փչովի օղակներ, տապչաններ։",
    images: [
      "/images/pool1.JPG",
      "/images/pool2.JPG",
      "/images/pool3.JPG",
      "/images/pool4.JPG"
    ]
  },
  {
    icon: <Palmtree className='h-8 w-8' />,
    title: "Ճոճանակներ և պարահրապարակ",
    description: "Ճոճանակներ ու հրապարակ ՝ հանգստանալու և զվարճանալու համար։",
    images: ["/images/chochanak1.jpg"]
  },
  {
    icon: <Bath className='h-8 w-8' />,
    title: "Սանհանգույց և հանդերձարան",
    description:
      "Մաքուր և հարմարավետ սանհանգուցային և հանդերձարանային հարմարություններ։",
    images: ["/images/toilet1.jpg"]
  },
  {
    icon: <Heart className='h-8 w-8' />,
    title: "Առաջին օգնության դեղատուփ",
    description:
      "Համապարփակ առաջին օգնության պայուսակ՝ արտակարգ իրավիճակների համար։",
    images: ["/images/dexatup.png"]
  },
  {
    icon: <Bed className='h-8 w-8' />,
    title: "Գիշերակացով սենյակ 5-6 հոգու համար",
    description:
      "Հարմարավետ սենյակ, որը տեղավորում է 5-6 մարդ՝ գիշերակացի համար։",
    images: ["/images/not-available.jpg"]
  },
  {
    icon: <Wifi className='h-8 w-8' />,
    title: "Անվճար Wi-Fi",
    description: "Մնացեք կապի մեջ՝ բարձր արագության ինտերնետով ողջ տարածքում։",
    images: ["/images/wifi1.png"]
  },
  {
    icon: <Music className='h-8 w-8' />,
    title: "Երաժշտություն և սեղանի խաղեր",
    description:
      "Ժամանցի տարբերակներ՝ ներառյալ երաժշտություն և սեղանի խաղեր՝ նարդի, շախմատ, դոմինո, խաղային քարտեր",
    images: [
      "/images/games1.png",
      "/images/music1.png",
      "/images/domino.jpg",
      "/images/cards.jpg",
      "images/nardi.jpg",
      "/images/shaxmat.jpg"
    ]
  }
];

export default function WhatWeOfferSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const [currentMobileIndex, setCurrentMobileIndex] = useState(0);
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);
  const [currentImageIndices, setCurrentImageIndices] = useState<
    Record<number, number>
  >({});
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  // Set up scroll animations - faster animations
  useEffect(() => {
    if (!sectionRef.current || !headerRef.current || !cardsContainerRef.current)
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

    // Cards container animation with staggered children - faster animations
    const cards = cardsContainerRef.current.querySelectorAll(".offer-card");
    gsap.fromTo(
      cards,
      { opacity: 0, y: 30, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.4, // Reduced from 0.6
        stagger: 0.05, // Reduced from 0.1
        scrollTrigger: {
          trigger: cardsContainerRef.current,
          start: "top 85%",
          end: "bottom 65%",
          toggleActions: "play none none reverse"
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [currentPage, isMobile]);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Drag-to-scroll functionality
  useEffect(() => {
    const cardsContainer = cardsContainerRef.current;
    let isMouseDown = false;
    let startX: number = 0;
    let scrollLeft: number = 0;

    const handleMouseDown = (e: MouseEvent) => {
      isMouseDown = true;
      startX = e.pageX - cardsContainer!.offsetLeft;
      scrollLeft = cardsContainer!.scrollLeft;
      cardsContainer!.style.cursor = "grabbing";
    };

    const handleMouseLeave = () => {
      isMouseDown = false;
      cardsContainer!.style.cursor = "grab";
    };

    const handleMouseUp = () => {
      isMouseDown = false;
      cardsContainer!.style.cursor = "grab";
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isMouseDown) return;
      e.preventDefault();
      const x = e.pageX - cardsContainer!.offsetLeft;
      const walk = (x - startX) * 2; // Speed of scroll
      cardsContainer!.scrollLeft = scrollLeft - walk;
    };

    if (cardsContainer) {
      cardsContainer.addEventListener("mousedown", handleMouseDown);
      cardsContainer.addEventListener("mouseleave", handleMouseLeave);
      cardsContainer.addEventListener("mouseup", handleMouseUp);
      cardsContainer.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (cardsContainer) {
        cardsContainer.removeEventListener("mousedown", handleMouseDown);
        cardsContainer.removeEventListener("mouseleave", handleMouseLeave);
        cardsContainer.removeEventListener("mouseup", handleMouseUp);
        cardsContainer.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  const itemsPerPage = 6;
  const totalPages = Math.ceil(offerings.length / itemsPerPage);

  // Desktop navigation
  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
    setHoveredCardIndex(null);
    setCurrentImageIndices({});
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    setHoveredCardIndex(null);
    setCurrentImageIndices({});
  };

  // Mobile navigation
  const nextMobileCard = () => {
    setCurrentMobileIndex((prev) => (prev + 1) % offerings.length);
    setHoveredCardIndex(null);
    setCurrentImageIndices({});
  };

  const prevMobileCard = () => {
    setCurrentMobileIndex(
      (prev) => (prev - 1 + offerings.length) % offerings.length
    );
    setHoveredCardIndex(null);
    setCurrentImageIndices({});
  };

  const currentItems = isMobile
    ? [offerings[currentMobileIndex]]
    : offerings.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
      );

  // Function to cycle through images for a specific card
  const cycleImage = (index: number) => {
    const offering = currentItems[index];
    if (!offering || offering.images.length <= 1) return;

    setCurrentImageIndices((prev) => {
      const currentIndex = prev[index] || 0;
      const nextIndex = (currentIndex + 1) % offering.images.length;
      return { ...prev, [index]: nextIndex };
    });
  };

  return (
    <section id='what-we-offer' ref={sectionRef} className='py-16'>
      <div ref={headerRef}>
        <SectionHeader
          title='Մեր Առաջարկը'
          accentWord='Առաջարկը'
          subtitle='Այգետնակ №206-ը տրամադրում է այն ամենը ինչ անհրաժեշտ է կատարյալ օր անցկացնելու համար։ Ծանոթացեք բոլոր հարմարություններին, որոնք առկա են՝ Ձեր իսկ հարմարավետության համար'
        />
      </div>

      <div className='relative'>
        {/* Mobile Navigation Arrows */}
        {isMobile && (
          <>
            <div className='absolute left-0 top-1/3 -translate-y-1/2 translate-y-2.5 z-10'>
              <button
                onClick={prevMobileCard}
                className='bg-white/80 hover:bg-[#879D49] text-[#274C22] hover:text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-x-1'
                aria-label='Previous'
              >
                <ChevronLeft className='h-6 w-6' />
              </button>
            </div>

            <div className='absolute right-0 top-1/3 -translate-y-1/2 translate-y-2.5 z-10'>
              <button
                onClick={nextMobileCard}
                className='bg-white/80 hover:bg-[#879D49] text-[#274C22] hover:text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:translate-x-1'
                aria-label='Next'
              >
                <ChevronRight className='h-6 w-6' />
              </button>
            </div>
          </>
        )}

        {/* Desktop Navigation Arrows */}
        {!isMobile && (
          <>
            <button
              onClick={prevPage}
              className='absolute left-[-30px] top-[300px] -translate-y-1/2 z-10 bg-white/80 hover:bg-[#879D49] text-[#274C22] hover:text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-x-1'
              aria-label='Previous'
            >
              <ChevronLeft className='h-6 w-6' />
            </button>

            <button
              onClick={nextPage}
              className='absolute right-[-30px] top-[300px] -translate-y-1/2 z-10 bg-white/80 hover:bg-[#879D49] text-[#274C22] hover:text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:translate-x-1'
              aria-label='Next'
            >
              <ChevronRight className='h-6 w-6' />
            </button>
          </>
        )}

        {/* Cards Container */}
        <div
          ref={cardsContainerRef}
          className={`transition-all duration-200 ${
            isMobile
              ? "flex justify-center overflow-x-auto"
              : "grid grid-cols-1 md:grid-cols-3 gap-8"
          }`}
        >
          {currentItems.map((offering, index) => {
            const isHovered = hoveredCardIndex === index;
            const currentImageIndex = currentImageIndices[index] || 0;
            const hasMultipleImages = offering.images.length > 1;

            return (
              <div
                key={
                  isMobile
                    ? `mobile-${currentMobileIndex}`
                    : `${currentPage}-${index}`
                }
                className={`offer-card group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-200 border border-[#879D49]/30 hover:border-[#4C6E2A] cursor-pointer h-[280px] relative overflow-hidden ${
                  isMobile ? "w-full max-w-sm mx-4" : ""
                }`}
                onMouseEnter={() => setHoveredCardIndex(index)}
                onMouseLeave={() => setHoveredCardIndex(null)}
                onClick={() => hasMultipleImages && cycleImage(index)}
              >
                {/* Content container (visible when not hovered) */}
                <div
                  className={`p-6 h-full flex flex-col transition-opacity duration-300 ${
                    isHovered ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <div className='bg-[#879D49]/20 p-3 rounded-lg flex items-center gap-3 mb-4 transition-colors duration-200'>
                    <div className='text-[#274C22]'>{offering.icon}</div>
                    <h3
                      className='text-xl font-medium text-[#274C22]'
                      style={{
                        fontFamily: "Arial Armenian, Arial, sans-serif"
                      }}
                    >
                      {offering.title}
                    </h3>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      height: "100%"
                    }}
                  >
                    <p
                      className='text-[#274C22]/70'
                      style={{
                        fontFamily: "Arial Armenian, Arial, sans-serif"
                      }}
                    >
                      {offering.description}
                    </p>
                    <div className='mt-2 flex items-center gap-2 text-sm text-[#274C22]/70'>
                      <ImageIcon className='h-4 w-4' />
                      <span>Տեսնել նկարները</span>
                    </div>
                  </div>
                </div>

                {/* Image container (visible when hovered) */}
                <div
                  className={`absolute inset-0 transition-opacity duration-300 ${
                    isHovered ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src={
                      offering.images[currentImageIndex] || "/placeholder.svg"
                    }
                    alt={offering.title}
                    className='w-full h-full object-cover'
                  />
                  <div className='absolute inset-0 bg-gradient-to-br from-[#274C22]/50 to-[#4C6E2A]/50'></div>
                  <div className='absolute inset-0 bg-gradient-to-tr from-[#274C22]/30 to-transparent'></div>
                  <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] opacity-10"></div>

                  {hasMultipleImages && (
                    <div className='absolute bottom-8 left-0 right-0 px-4 text-center'>
                      <p
                        className='text-white/90 text-xs font-light drop-shadow-md'
                        style={{
                          fontFamily: "Arial Armenian, Arial, sans-serif"
                        }}
                      >
                        Սեղմեք էկրանին տեսնելու նկարը
                      </p>
                    </div>
                  )}

                  {hasMultipleImages && (
                    <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2'>
                      {offering.images.map((_, imgIndex) => (
                        <div
                          key={imgIndex}
                          className={`h-2 w-2 rounded-full transition-all ${
                            currentImageIndex === imgIndex
                              ? "bg-white"
                              : "bg-white/50"
                          }`}
                        />
                      ))}
                    </div>
                  )}

                  {/* Title overlay on hover */}
                  <div className='absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/60 to-transparent'>
                    <h3
                      className='text-white text-xl font-medium drop-shadow-md'
                      style={{
                        fontFamily: "Arial Armenian, Arial, sans-serif"
                      }}
                    >
                      {offering.title}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination indicators */}
        <div className='flex justify-center mt-8 gap-2'>
          {isMobile
            ? Array.from({ length: offerings.length }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentMobileIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    currentMobileIndex === index
                      ? "w-8 bg-[#274C22]"
                      : "w-2 bg-[#274C22]/30"
                  }`}
                  aria-label={`Go to card ${index + 1}`}
                />
              ))
            : Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`h-2 rounded-full transition-all ${
                    currentPage === index
                      ? "w-8 bg-[#274C22]"
                      : "w-2 bg-[#274C22]/30"
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
        </div>

        {/* Mobile card counter */}
        {isMobile && (
          <div className='text-center mt-4'>
            <span
              className='text-[#274C22]/70 text-sm'
              style={{ fontFamily: "Arial Armenian, Arial, sans-serif" }}
            >
              {currentMobileIndex + 1} / {offerings.length}
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
