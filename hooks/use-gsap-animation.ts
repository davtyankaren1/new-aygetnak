"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

type AnimationOptions = {
  trigger?: string
  start?: string
  end?: string
  scrub?: boolean | number
  markers?: boolean
  duration?: number
  delay?: number
  stagger?: number
  from?: gsap.TweenVars
  to?: gsap.TweenVars
  toggleActions?: string
  pin?: boolean
  anticipatePin?: boolean
  once?: boolean
}

export function useGsapAnimation(selector: string, options: AnimationOptions = {}) {
  const animationRef = useRef<ScrollTrigger | null>(null)
  const timelineRef = useRef<gsap.core.Timeline | null>(null)

  useEffect(() => {
    // Make sure GSAP and ScrollTrigger are available
    if (typeof window === "undefined" || !gsap || !ScrollTrigger) return

    // Default options - faster animations
    const {
      trigger = selector,
      start = "top bottom-=100",
      end = "bottom top",
      scrub = false,
      markers = false,
      duration = 0.6, // Reduced from 1
      delay = 0,
      stagger = 0.05, // Reduced from 0.1
      from = { opacity: 0, y: 50 },
      to = { opacity: 1, y: 0 },
      toggleActions = "play none none reverse",
      pin = false,
      anticipatePin = false,
      once = false,
    } = options

    // Create a timeline for the animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: trigger,
        start: start,
        end: end,
        scrub: scrub,
        markers: markers,
        toggleActions: toggleActions,
        pin: pin,
        anticipatePin: anticipatePin,
        once: once,
        onEnter: () => {
          if (once && animationRef.current) {
            // If animation should only play once, kill the ScrollTrigger after it plays
            setTimeout(
              () => {
                if (animationRef.current) {
                  animationRef.current.kill()
                }
              },
              duration * 1000 + 100,
            )
          }
        },
      },
    })

    // Select elements and animate them
    const elements = document.querySelectorAll(selector)
    if (elements.length > 0) {
      tl.fromTo(elements, from, {
        ...to,
        duration: duration,
        delay: delay,
        stagger: stagger,
      })
    }

    // Store references for cleanup
    timelineRef.current = tl
    animationRef.current = ScrollTrigger.getAll().pop() || null

    // Cleanup function
    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill()
      }
      if (animationRef.current) {
        animationRef.current.kill()
      }
    }
  }, [selector, options])

  return animationRef.current
}
