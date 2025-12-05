import { useCallback, useRef } from "react"

interface Ripple {
  x: number
  y: number
  id: number
}

export function useRipple() {
  const rippleIdRef = useRef(0)
  const ripplesRef = useRef<Ripple[]>([])

  const addRipple = useCallback((event: React.MouseEvent<HTMLElement>) => {
    const button = event.currentTarget
    const rect = button.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    const id = rippleIdRef.current++
    const ripple: Ripple = { x, y, id }

    ripplesRef.current.push(ripple)

    // Remove ripple after animation completes
    setTimeout(() => {
      ripplesRef.current = ripplesRef.current.filter((r) => r.id !== id)
    }, 600)

    return ripplesRef.current
  }, [])

  return { addRipple, ripples: ripplesRef.current }
}

