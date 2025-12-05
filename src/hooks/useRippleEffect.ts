"use client"

import { useState, useRef, useCallback } from "react"

export function useRippleEffect() {
  const rippleIdRef = useRef(0)
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([])

  const addRipple = useCallback((event: React.MouseEvent<HTMLElement>) => {
    const element = event.currentTarget
    const rect = element.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    const id = rippleIdRef.current++

    // Add new ripple
    setRipples((prev) => [...prev, { x, y, id }])

    // Remove ripple after animation completes
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id))
    }, 800)

    return { x, y, id }
  }, [])

  return { ripples, addRipple }
}

