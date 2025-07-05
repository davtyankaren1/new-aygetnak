"use client";

import { useRef } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import SectionHeader from "./section-header";

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      id='contact'
      ref={sectionRef}
      className='py-16 relative z-10 w-full'
    >
      {/* Background with overlay */}
      <div className='absolute inset-0 z-0'>
        <img
          src='/garden-location-background.png'
          alt='x'
          className='w-full h-full object-cover opacity-20'
        />
        <div className='absolute inset-0 bg-gradient-to-r from-[#274C22]/40 to-[#4C6E2A]/40 mix-blend-multiply' />
      </div>

      <div className='container mx-auto px-4 md:px-16 lg:px-24 relative z-10'>
        <SectionHeader
          title='Կապ Մեզ Հետ'
          accentWord='Մեզ Հետ'
          subtitle='Ունե՞ք հարցեր կամ ցանկանո՞ւմ եք ամրագրում կատարել։ Կապվեք մեզ հետ, և մենք ուրախությամբ կօգնենք ձեզ ցանկացած հարցում։'
          subtitleColor='text-white'
        />

        <div className='flex flex-col md:flex-row gap-6'>
          {/* Contact Information */}
          <div className='bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 flex-1 w-full'>
            <h3
              className='text-2xl font-light text-[#274C22] mb-6'
              style={{ fontFamily: "Arial Armenian, Arial, sans-serif" }}
            >
              Կոնտակտային Տվյալներ
            </h3>

            <div className='space-y-6'>
              <div className='flex items-start gap-4'>
                <div className='bg-[#879D49]/30 p-3 rounded-full'>
                  <Phone className='h-5 w-5 text-[#274C22]' />
                </div>
                <div>
                  <h4
                    className='text-lg font-medium text-[#274C22] mb-1'
                    style={{ fontFamily: "Arial Armenian, Arial, sans-serif" }}
                  >
                    Հեռախոս
                  </h4>
                  <a
                    href='tel:+12345678900'
                    className='block text-[#274C22]/80 hover:text-[#4C6E2A] transition-colors'
                  >
                    +374 93 122055
                  </a>
                  <a
                    href='tel:+12345678901'
                    className='block text-[#274C22]/80 hover:text-[#4C6E2A] transition-colors'
                  >
                    +374 77 122055
                  </a>
                </div>
              </div>

              <div className='flex items-start gap-4'>
                <div className='bg-[#879D49]/30 p-3 rounded-full'>
                  <Clock className='h-5 w-5 text-[#274C22]' />
                </div>
                <div>
                  <h4
                    className='text-lg font-medium text-[#274C22] mb-1'
                    style={{ fontFamily: "Arial Armenian, Arial, sans-serif" }}
                  >
                    Աշխատանքային Ժամեր
                  </h4>
                  <p
                    className='text-[#274C22]/80'
                    style={{ fontFamily: "Arial Armenian, Arial, sans-serif" }}
                  >
                    Երկուշաբթի - Ուրբաթ: 9:00 - 23:00
                  </p>
                  <p
                    className='text-[#274C22]/80'
                    style={{ fontFamily: "Arial Armenian, Arial, sans-serif" }}
                  >
                    Շաբաթ - Կիրակի: 8:00 - 24:00
                  </p>
                  <p
                    className='text-[#274C22]/80 text-sm mt-1'
                    style={{ fontFamily: "Arial Armenian, Arial, sans-serif" }}
                  >
                    Պահանջվում է նախնական ամրագրում
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Location Information */}
          <div className='bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 flex-1 w-full'>
            <div className='flex items-start gap-4 mb-6'>
              <div className='bg-[#879D49]/30 p-3 rounded-full'>
                <MapPin className='h-5 w-5 text-[#274C22]' />
              </div>
              <div>
                <h4
                  className='text-lg font-medium text-[#274C22] mb-1'
                  style={{ fontFamily: "Arial Armenian, Arial, sans-serif" }}
                >
                  Հասցե
                </h4>
                <p
                  className='text-[#274C22]/80'
                  style={{ fontFamily: "Arial Armenian, Arial, sans-serif" }}
                >
                  Այգետնակ №206
                  <br />
                  Կոորդինատներ: 39.224527, 46.342792
                </p>
              </div>
            </div>

            {/* Map */}
            <div className='h-[250px] rounded-xl overflow-hidden'>
              <iframe
                src='https://yandex.com/map-widget/v1/?ll=46.342792%2C39.224527&z=15&l=sat%2Cskl&pt=46.342792%2C39.224527%2Cpm2rdm'
                width='100%'
                height='100%'
                frameBorder='0'
                allowFullScreen
                style={{ border: 0 }}
              ></iframe>
            </div>

            <a
              href={`https://yandex.com/maps/?ll=46.342792,39.224527&z=15&l=sat,skl&pt=46.342792,39.224527,pm2rdm`}
              target='_blank'
              rel='noopener noreferrer'
              className='block w-full mt-4 bg-[#274C22] hover:bg-[#4C6E2A] text-white text-center py-3 rounded-lg transition-colors'
              style={{ fontFamily: "Arial Armenian, Arial, sans-serif" }}
            >
              Ստանալ Ուղղությունները
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
