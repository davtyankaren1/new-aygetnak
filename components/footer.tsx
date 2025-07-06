"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  Phone,
  MapPin,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Twitter
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef<HTMLElement>(null);

  return (
    <footer
      ref={footerRef}
      className='bg-gradient-to-r from-[#274C22] to-[#4C6E2A] text-white relative overflow-hidden z-10 w-full'
    >
      {/* Decorative leaf elements */}
      <div className='absolute inset-0 pointer-events-none'>
        {/* Top left leaves */}
        <div className='absolute top-8 left-8 opacity-10'>
          <svg
            width='40'
            height='40'
            viewBox='0 0 24 24'
            fill='none'
            className='text-[#879D49] rotate-12 animate-float'
          >
            <path
              d='M12 2C12 2 7 7 7 12C7 17 12 22 12 22C12 22 17 17 17 12C17 7 12 2 12 2Z'
              fill='currentColor'
            />
            <path
              d='M12 2C12 2 15 5 15 8C15 11 12 14 12 14'
              stroke='currentColor'
              strokeWidth='1'
              fill='none'
            />
          </svg>
        </div>

        {/* Top right leaves */}
        <div className='absolute top-12 right-16 opacity-15'>
          <svg
            width='32'
            height='32'
            viewBox='0 0 24 24'
            fill='none'
            className='text-[#4C6E2A] -rotate-45 animate-float'
            style={{ animationDelay: "1s" }}
          >
            <path
              d='M12 2C12 2 7 7 7 12C7 17 12 22 12 22C12 22 17 17 17 12C17 7 12 2 12 2Z'
              fill='currentColor'
            />
          </svg>
        </div>

        {/* Middle left leaves */}
        <div className='absolute top-1/2 left-4 opacity-8'>
          <svg
            width='28'
            height='28'
            viewBox='0 0 24 24'
            fill='none'
            className='text-[#879D49] rotate-90 animate-float'
            style={{ animationDelay: "2s" }}
          >
            <path
              d='M12 2C12 2 7 7 7 12C7 17 12 22 12 22C12 22 17 17 17 12C17 7 12 2 12 2Z'
              fill='currentColor'
            />
          </svg>
        </div>

        {/* Middle right leaves */}
        <div className='absolute top-1/3 right-8 opacity-12'>
          <svg
            width='36'
            height='36'
            viewBox='0 0 24 24'
            fill='none'
            className='text-[#4C6E2A] rotate-180 animate-float'
            style={{ animationDelay: "0.5s" }}
          >
            <path
              d='M12 2C12 2 7 7 7 12C7 17 12 22 12 22C12 22 17 17 17 12C17 7 12 2 12 2Z'
              fill='currentColor'
            />
            <path
              d='M12 2C12 2 15 5 15 8C15 11 12 14 12 14'
              stroke='currentColor'
              strokeWidth='1'
              fill='none'
            />
          </svg>
        </div>

        {/* Bottom scattered leaves */}
        <div className='absolute bottom-16 left-1/4 opacity-10'>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            className='text-[#879D49] rotate-45 animate-float'
            style={{ animationDelay: "1.5s" }}
          >
            <path
              d='M12 2C12 2 7 7 7 12C7 17 12 22 12 22C12 22 17 17 17 12C17 7 12 2 12 2Z'
              fill='currentColor'
            />
          </svg>
        </div>

        <div className='absolute bottom-20 right-1/3 opacity-8'>
          <svg
            width='30'
            height='30'
            viewBox='0 0 24 24'
            fill='none'
            className='text-[#4C6E2A] -rotate-30 animate-float'
            style={{ animationDelay: "2.5s" }}
          >
            <path
              d='M12 2C12 2 7 7 7 12C7 17 12 22 12 22C12 22 17 17 17 12C17 7 12 2 12 2Z'
              fill='currentColor'
            />
          </svg>
        </div>

        {/* Center decorative cluster */}
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5'>
          <div className='flex items-center gap-4'>
            <svg
              width='20'
              height='20'
              viewBox='0 0 24 24'
              fill='none'
              className='text-[#879D49] rotate-12 animate-float'
              style={{ animationDelay: "3s" }}
            >
              <path
                d='M12 2C12 2 7 7 7 12C7 17 12 22 12 22C12 22 17 17 17 12C17 7 12 2 12 2Z'
                fill='currentColor'
              />
            </svg>
            <svg
              width='16'
              height='16'
              viewBox='0 0 24 24'
              fill='none'
              className='text-[#4C6E2A] -rotate-12 animate-float'
              style={{ animationDelay: "3.5s" }}
            >
              <path
                d='M12 2C12 2 7 7 7 12C7 17 12 22 12 22C12 22 17 17 17 12C17 7 12 2 12 2Z'
                fill='currentColor'
              />
            </svg>
            <svg
              width='22'
              height='22'
              viewBox='0 0 24 24'
              fill='none'
              className='text-[#879D49] rotate-60 animate-float'
              style={{ animationDelay: "4s" }}
            >
              <path
                d='M12 2C12 2 7 7 7 12C7 17 12 22 12 22C12 22 17 17 17 12C17 7 12 2 12 2Z'
                fill='currentColor'
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className='relative h-16 z-10'>
        <svg
          className='absolute bottom-0 w-full h-16 text-[#F3F3F3] fill-current'
          viewBox='0 0 1200 120'
          preserveAspectRatio='none'
        >
          <path d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'></path>
        </svg>
      </div>

      <div className='container mx-auto px-4 md:px-16 lg:px-24 py-12 relative z-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* Logo and about */}
          <div className='space-y-6 relative'>
            {/* Small decorative leaves around logo */}
            <div className='absolute -top-2 -right-2 opacity-20'>
              <svg
                width='16'
                height='16'
                viewBox='0 0 24 24'
                fill='none'
                className='text-[#879D49] rotate-45'
              >
                <path
                  d='M12 2C12 2 7 7 7 12C7 17 12 22 12 22C12 22 17 17 17 12C17 7 12 2 12 2Z'
                  fill='currentColor'
                />
              </svg>
            </div>

            <div className='flex items-center gap-3 relative'>
              <div className='h-12 w-12 relative overflow-hidden rounded-full'>
                <Image
                  src='/website-logo.png'
                  alt='Այգետնակ №206 լոգո'
                  width={48}
                  height={48}
                  className='object-cover w-full h-full'
                />
              </div>
              <span
                className='text-[#F3F3F3] font-light text-xl tracking-wider'
                style={{ fontFamily: "Arial Armenian, Arial, sans-serif" }}
              >
                Այգետնակ №206{" "}
                <span className='font-normal text-[#879D49]'>206</span>
              </span>
            </div>
            <p
              className='text-white/80 text-sm leading-relaxed'
              style={{ fontFamily: "Arial Armenian, Arial, sans-serif" }}
            >
              Հրաշալի հանգստավայր բնության գրկում։ Վայելեք կանաչ դրախտի
              գեղեցկությունը և դարձրեք ձեր օրը անմոռանալի։
            </p>
            <div className='flex gap-4'>
              <a
                href='https://facebook.com'
                target='_blank'
                rel='noopener noreferrer'
                className='bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors'
                aria-label='Facebook'
              >
                <Facebook className='h-5 w-5' />
              </a>
              <a
                href='https://instagram.com'
                target='_blank'
                rel='noopener noreferrer'
                className='bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors'
                aria-label='Instagram'
              >
                <Instagram className='h-5 w-5' />
              </a>
            </div>
          </div>

          {/* Contact info */}
          <div className='relative'>
            {/* Decorative leaf for section */}
            <div className='absolute -top-1 -left-1 opacity-15'>
              <svg
                width='12'
                height='12'
                viewBox='0 0 24 24'
                fill='none'
                className='text-[#879D49]'
              >
                <path
                  d='M12 2C12 2 7 7 7 12C7 17 12 22 12 22C12 22 17 17 17 12C17 7 12 2 12 2Z'
                  fill='currentColor'
                />
              </svg>
            </div>

            <h3
              className='text-lg font-medium mb-6 text-[#879D49] relative'
              style={{ fontFamily: "Arial Armenian, Arial, sans-serif" }}
            >
              Կապ Մեզ Հետ
              {/* Small leaf accent after title */}
              <svg
                width='8'
                height='8'
                viewBox='0 0 24 24'
                fill='none'
                className='text-[#879D49]/50 inline-block ml-2'
              >
                <path
                  d='M12 2C12 2 7 7 7 12C7 17 12 22 12 22C12 22 17 17 17 12C17 7 12 2 12 2Z'
                  fill='currentColor'
                />
              </svg>
            </h3>
            <ul className='space-y-4'>
              <li className='flex items-start gap-3'>
                <Phone className='h-5 w-5 mt-0.5 text-[#879D49]' />
                <div>
                  <p
                    className='font-medium'
                    style={{ fontFamily: "Arial Armenian, Arial, sans-serif" }}
                  >
                    Հեռախոս
                  </p>
                  <a
                    href='tel:+12345678900'
                    className='text-white/80 hover:text-white transition-colors block'
                  >
                    +374 77 122050
                  </a>
                  <a
                    href='tel:+12345678900'
                    className='text-white/80 hover:text-white transition-colors block'
                  >
                    +374 93 122055
                  </a>
                </div>
              </li>
              <li className='flex items-start gap-3'>
                <MapPin className='h-5 w-5 mt-0.5 text-[#879D49]' />
                <div>
                  <p
                    className='font-medium'
                    style={{ fontFamily: "Arial Armenian, Arial, sans-serif" }}
                  >
                    Հասցե
                  </p>
                  <p
                    className='text-white/80'
                    style={{ fontFamily: "Arial Armenian, Arial, sans-serif" }}
                  >
                    Այգետնակ №206
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <div className='relative'>
            {/* Decorative leaf for section */}
            <div className='absolute -top-1 -left-1 opacity-15'>
              <svg
                width='12'
                height='12'
                viewBox='0 0 24 24'
                fill='none'
                className='text-[#4C6E2A]'
              >
                <path
                  d='M12 2C12 2 7 7 7 12C7 17 12 22 12 22C12 22 17 17 17 12C17 7 12 2 12 2Z'
                  fill='currentColor'
                />
              </svg>
            </div>

            <h3
              className='text-lg font-medium mb-6 text-[#879D49]'
              style={{ fontFamily: "Arial Armenian, Arial, sans-serif" }}
            >
              Արագ Հղումներ
              <svg
                width='8'
                height='8'
                viewBox='0 0 24 24'
                fill='none'
                className='text-[#879D49]/50 inline-block ml-2'
              >
                <path
                  d='M12 2C12 2 7 7 7 12C7 17 12 22 12 22C12 22 17 17 17 12C17 7 12 2 12 2Z'
                  fill='currentColor'
                />
              </svg>
            </h3>
            <ul className='space-y-3'>
              {[
                { label: "Մեր Առաջարկը", id: "what-we-offer" },
                { label: "Նկարներ", id: "gallery" },
                { label: "Կապ", id: "contact" }
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href || `#${link.id}`}
                    className='text-white/80 hover:text-white transition-colors flex items-center gap-2'
                    style={{ fontFamily: "Arial Armenian, Arial, sans-serif" }}
                  >
                    <span className='h-1.5 w-1.5 bg-[#879D49] rounded-full'></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening hours */}
          <div className='relative'>
            {/* Decorative leaf for section */}
            <div className='absolute -top-1 -left-1 opacity-15'>
              <svg
                width='12'
                height='12'
                viewBox='0 0 24 24'
                fill='none'
                className='text-[#879D49] rotate-45'
              >
                <path
                  d='M12 2C12 2 7 7 7 12C7 17 12 22 12 22C12 22 17 17 17 12C17 7 12 2 12 2Z'
                  fill='currentColor'
                />
              </svg>
            </div>

            <h3
              className='text-lg font-medium mb-6 text-[#879D49]'
              style={{ fontFamily: "Arial Armenian, Arial, sans-serif" }}
            >
              Աշխատանքային Ժամեր
              <svg
                width='8'
                height='8'
                viewBox='0 0 24 24'
                fill='none'
                className='text-[#879D49]/50 inline-block ml-2'
              >
                <path
                  d='M12 2C12 2 7 7 7 12C7 17 12 22 12 22C12 22 17 17 17 12 C17 7 12 2 12 2Z'
                  fill='currentColor'
                />
              </svg>
            </h3>
            <ul className='space-y-3'>
              <li className='flex items-start gap-3'>
                <Clock className='h-5 w-5 mt-0.5 text-[#879D49]' />
                <div className='w-full'>
                  <div className='flex justify-between w-full'>
                    <span
                      className='text-white/80'
                      style={{
                        fontFamily: "Arial Armenian, Arial, sans-serif"
                      }}
                    >
                      Երկուշաբթի - Կիրակի
                    </span>
                    <span
                      style={{
                        fontFamily: "Arial Armenian, Arial, sans-serif"
                      }}
                    >
                      10:00 - 22:30
                    </span>
                  </div>
                  <p
                    className='text-white/80 text-sm mt-2'
                    style={{ fontFamily: "Arial Armenian, Arial, sans-serif" }}
                  >
                    Պահանջվում է նախնական ամրագրում։ Խնդրում ենք կապվել մեզ հետ
                    նախապես՝ ձեր այցը ամրագրելու համար։
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className='mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 relative'>
          {/* Small decorative leaves in bottom bar */}
          <div className='absolute left-1/4 -top-2 opacity-10'>
            <svg
              width='14'
              height='14'
              viewBox='0 0 24 24'
              fill='none'
              className='text-[#879D49] rotate-12'
            >
              <path
                d='M12 2C12 2 7 7 7 12C7 17 12 22 12 22C12 22 17 17 17 12C17 7 12 2 12 2Z'
                fill='currentColor'
              />
            </svg>
          </div>
          <div className='absolute right-1/4 -top-2 opacity-10'>
            <svg
              width='14'
              height='14'
              viewBox='0 0 24 24'
              fill='none'
              className='text-[#4C6E2A] -rotate-12'
            >
              <path
                d='M12 2C12 2 7 7 7 12C7 17 12 22 12 22C12 22 17 17 17 12C17 7 12 2 12 2Z'
                fill='currentColor'
              />
            </svg>
          </div>

          <p
            className='text-white/70 text-sm'
            style={{ fontFamily: "Arial Armenian, Arial, sans-serif" }}
          >
            © {currentYear} Այգետնակ №206։ Բոլոր իրավունքները պաշտպանված են։
          </p>
        </div>
      </div>
    </footer>
  );
}
