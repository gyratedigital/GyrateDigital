"use client"

import * as React from "react"
import { useRipple } from "@/hooks/useRipple"
import { cn } from "@/lib/utils"

interface RippleWrapperProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  as?: keyof JSX.IntrinsicElements
  rippleColor?: string
}

export function RippleWrapper({
  children,
  as: Component = "div",
  className,
  onClick,
  rippleColor = "bg-white/30",
  ...props
}: RippleWrapperProps) {
  const elementRef = React.useRef<HTMLElement>(null)
  const { addRipple } = useRipple()
  const [ripplesState, setRipplesState] = React.useState<Array<{ x: number; y: number; id: number }>>([])

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (elementRef.current) {
      const newRipples = addRipple(e as any)
      setRipplesState([...newRipples])
    }
    onClick?.(e)
  }

  return React.createElement(
    Component,
    {
      ref: elementRef,
      className: cn("relative overflow-hidden", className),
      onClick: handleClick,
      ...props,
    },
    <>
      {children}
      {ripplesState.map((ripple) => (
        <span
          key={ripple.id}
          className={cn("absolute rounded-full pointer-events-none animate-ripple", rippleColor)}
          style={{
            left: `${ripple.x}px`,
            top: `${ripple.y}px`,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
    </>
  )
}

