"use client";

import { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";
import { gsap } from "gsap";

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const decorRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Hero section entrance animation - faster animations (removed button animation)
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 0.8 }
    )
      .fromTo(
        decorRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.5 },
        "-=0.6"
      )
      .fromTo(
        textRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.3"
      );

    return () => {
      tl.kill();
    };
  }, []);

  // Enhanced particle animation effect with glowing lights (no mouse interaction) - faster particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasDimensions();
    window.addEventListener("resize", setCanvasDimensions);

    // Particle class with enhanced properties
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      alpha: number;
      glowing: boolean;
      glowIntensity: number;
      glowColor: string;
      pulseSpeed: number;
      pulseDirection: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 4 + 1;
        this.speedX = Math.random() * 1.2 - 0.6; // Increased speed
        this.speedY = Math.random() * 1.2 - 0.6; // Increased speed

        // Randomize particle appearance
        const colorOptions = ["#F3F3F3", "#879D49", "#4C6E2A", "#274C22"];
        this.color =
          colorOptions[Math.floor(Math.random() * colorOptions.length)];
        this.alpha = Math.random() * 0.6 + 0.2;

        // Glowing effect properties
        this.glowing = Math.random() > 0.7; // 30% of particles will glow
        this.glowIntensity = Math.random() * 10 + 5;
        this.glowColor = this.color === "#F3F3F3" ? "#FFFFFF" : this.color;

        // Pulsing effect - faster pulse
        this.pulseSpeed = Math.random() * 0.05 + 0.02; // Increased from 0.03 + 0.01
        this.pulseDirection = 1;
      }

      update() {
        // Basic movement only
        this.x += this.speedX;
        this.y += this.speedY;

        // Boundary check with bounce effect
        if (this.x < 0 || this.x > canvas.width) {
          this.speedX = -this.speedX;
        }

        if (this.y < 0 || this.y > canvas.height) {
          this.speedY = -this.speedY;
        }

        // Pulsing alpha for glowing particles
        if (this.glowing) {
          this.alpha += this.pulseSpeed * this.pulseDirection;

          if (this.alpha > 0.8) {
            this.alpha = 0.8;
            this.pulseDirection = -1;
          } else if (this.alpha < 0.2) {
            this.alpha = 0.2;
            this.pulseDirection = 1;
          }
        }
      }

      draw() {
        if (!ctx) return;

        // Draw base particle
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();

        // Add glow effect for special particles
        if (this.glowing) {
          // Create radial gradient for glow
          const gradient = ctx.createRadialGradient(
            this.x,
            this.y,
            this.size * 0.5,
            this.x,
            this.y,
            this.size * this.glowIntensity
          );
          gradient.addColorStop(0, `${this.glowColor}`);
          gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

          ctx.globalAlpha = this.alpha * 0.4;
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(
            this.x,
            this.y,
            this.size * this.glowIntensity,
            0,
            Math.PI * 2
          );
          ctx.fill();
        }

        ctx.globalAlpha = 1;
      }
    }

    // Create particles
    const particles: Particle[] = [];
    const particleCount = 80; // Increased particle count for more visual effect

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const particle of particles) {
        particle.update();
        particle.draw();
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasDimensions);
    };
  }, []);

  // Ensure video plays properly on mobile
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Function to attempt playing the video
    const attemptPlay = () => {
      video.play().catch((error) => {
        console.log("Auto-play was prevented:", error);
        // We'll keep the poster image visible in this case
      });
    };

    // Try to play when component mounts
    attemptPlay();

    // Also try to play on user interaction (for mobile devices)
    const handleInteraction = () => {
      attemptPlay();
      // Remove event listeners after first interaction
      document.removeEventListener("touchstart", handleInteraction);
      document.removeEventListener("click", handleInteraction);
    };

    document.addEventListener("touchstart", handleInteraction);
    document.addEventListener("click", handleInteraction);

    return () => {
      document.removeEventListener("touchstart", handleInteraction);
      document.removeEventListener("click", handleInteraction);
    };
  }, []);

  const scrollToOffers = () => {
    const offersSection = document.getElementById("what-we-offer");
    if (offersSection) {
      window.scrollTo({
        top: offersSection.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id='hero'
      ref={heroRef}
      className='relative h-screen flex items-center justify-center overflow-hidden'
    >
      {/* Video background with enhanced overlay */}
      <div className='absolute inset-0 z-0'>
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className='w-full h-full object-cover'
          poster='/videos/dji_fly_20250510_172426_472_1746995522516_video_2.mp4'
          preload='auto'
          crossOrigin='anonymous'
        >
          <source
            src='/videos/dji_fly_20250510_172426_472_1746995522516_video_2.mp4'
            type='video/mp4'
          />
          <source
            src='/videos/dji_fly_20250510_172426_472_1746995522516_video_2.mp4'
            type='video/webm'
          />

          {/* Alternative: Use external video URL (uncomment if needed) */}
          {/* <source src="https://your-video-url.com/video.mp4" type="video/mp4" /> */}

          <img
            src='/lush-garden-scene.png'
            alt='Garden landscape'
            className='w-full h-full object-cover'
          />
        </video>
        {/* Enhanced multi-layer overlay for depth and dimension */}
        <div className='absolute inset-0 bg-gradient-to-b from-[#274C22]/40 to-[#4C6E2A]/40 mix-blend-multiply' />
        <div className='absolute inset-0 bg-gradient-to-tr from-[#274C22]/30 to-transparent' />
        <div className='absolute inset-0 bg-black/20' />{" "}
        {/* Subtle darkening for better text contrast */}
        {/* Additional texture overlay */}
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200')] opacity-5" />
      </div>

      {/* Enhanced particle animation */}
      <canvas ref={canvasRef} className='absolute inset-0 z-10 opacity-60' />

      {/* Hero content */}
      <div className='container mx-auto px-6 md:px-16 lg:px-24 relative z-20 text-center max-w-5xl'>
        <h1
          ref={titleRef}
          className='text-4xl md:text-5xl lg:text-6xl font-light text-[#F3F3F3] leading-tight mb-6 drop-shadow-lg'
          style={{
            fontFamily: "Arial Armenian, Arial, sans-serif",
            fontWeight: "800"
          }}
        >
          ԱՅԳԵՏՆԱԿ №206
        </h1>

        {/* Decorative underline for hero */}
        <div
          ref={decorRef}
          className='flex justify-center items-center gap-2 mb-10'
        >
          <div className='h-[1px] w-12 bg-[#879D49]/40'></div>
          <div className='h-[3px] w-24 bg-[#879D49]'></div>
          <div className='h-[1px] w-12 bg-[#879D49]/40'></div>
        </div>

        <p
          ref={textRef}
          className='text-xl md:text-2xl text-[#F3F3F3] font-light mb-10 leading-relaxed drop-shadow-lg'
          style={{ fontFamily: "Arial Armenian, Arial, sans-serif" }}
        >
          Հրաշալի հանգստավայր բնության գրկում։ Վայելեք կանաչ դրախտի
          գեղեցկությունը և դարձրեք ձեր օրը անմոռանալի։
        </p>

        {/* Button without animation */}
        <button
          onClick={scrollToOffers}
          className='group bg-[#879D49] hover:bg-[#4C6E2A] text-[#F3F3F3] px-8 py-3 rounded-full transition-all duration-200 flex items-center gap-2 mx-auto shadow-lg hover:shadow-xl'
          style={{ fontFamily: "Arial Armenian, Arial, sans-serif" }}
        >
          <span>Բացահայտել Ավելին</span>
          <ArrowDown className='h-4 w-4 transition-transform duration-200 group-hover:translate-y-1' />
        </button>
      </div>
    </section>
  );
}
