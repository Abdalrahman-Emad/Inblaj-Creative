"use client"

import { useState, useEffect } from "react"
import { useTheme } from "../components/theme-provider"
import { dawnPhases } from "../lib/theme"

export function useDawnAnimation() {
  const { dawnPhase, setDawnPhase } = useTheme()
  const [isAnimating, setIsAnimating] = useState(false)
  const [currentPhase, setCurrentPhase] = useState("night")

  const startDawnSequence = () => {
    setIsAnimating(true)
    const phases = ["night", "preDawn", "sunrise", "golden", "daylight"]
    let currentIndex = 0

    const animatePhase = () => {
      if (currentIndex < phases.length) {
        const phase = phases[currentIndex]
        setCurrentPhase(phase)
        setDawnPhase(phase)

        setTimeout(() => {
          currentIndex++
          animatePhase()
        }, dawnPhases[phase].duration)
      } else {
        setIsAnimating(false)
      }
    }

    animatePhase()
  }

  useEffect(() => {
    // Auto-start dawn sequence on mount
    const timer = setTimeout(() => {
      startDawnSequence()
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return {
    currentPhase,
    isAnimating,
    startDawnSequence,
    dawnPhase,
  }
}
