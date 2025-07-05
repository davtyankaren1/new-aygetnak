"use client"

import { type ReactNode, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

interface AnimationProviderProps {
  children: ReactNode
}

export default function AnimationProvider({ children }: AnimationProviderProps) {
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger)

    // Set default ease for all animations
    gsap.defaults({
      ease: "power2.out",
    })

    return () => {
      // Clean up all ScrollTrigger instances when component unmounts
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return <>{children}</>
}
