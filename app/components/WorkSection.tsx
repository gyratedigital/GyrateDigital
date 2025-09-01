'use client'
import * as React from 'react'
import { useEffect, useRef } from 'react'
import { workSection } from '../data/workSection'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function WorkSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('.work-card')

      // initial state
      gsap.set(cards, { yPercent: 50, opacity: 0, scale: 0.9 })

      cards.forEach((card, i) => {
        const prevCards = cards.slice(0, i)

        // timeline for each card
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: () => `top+=${i * window.innerHeight * 0.5 - 100} top`, // trigger a bit earlier
            end: () => `+=${window.innerHeight * 0.5}`,
            scrub: true,
          },
        })

        // active card animation
        tl.to(card, {
          yPercent: 0,
          scale: 1,
          opacity: 1,
          zIndex: 10,
          duration: 0.5,
        })

        // previous cards stacked behind
        prevCards.forEach((prevCard, j) => {
          tl.to(
            prevCard,
            {
              yPercent: -10 * (i - j),
              scale: 0.9 - (i - j) * 0.05,
              opacity: 0.3,
              zIndex: 5 - (i - j),
              duration: 0.5,
            },
            '<' // run at same time
          )
        })
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="container px-4 mx-auto mb-[100px] relative">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-semibold mb-2 text-4xl text-foreground text-center">Our Work</h2>
        <p className="text-center text-sm text-foreground mb-12">
          Designs that speak, results that last.
        </p>
      </div>

      {/* Cards stacked */}
      <div className="relative h-[300vh]"> {/* enough scroll space */}
        <div className="sticky top-24 flex flex-col items-center">
          {workSection.map((work) => (
            <div
              key={work.id}
              className="work-card flex sm:flex-row flex-col items-center absolute w-full sm:max-w-[80%] max-w-full min-h-[60vh] card bg-secondary rounded-2xl shadow-md overflow-hidden"
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-secondary/90 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 rounded-xl"></div>

              {/* Content */}
              <div className="relative z-10 p-7 pb-4 sm:w-2/5 w-full">
                <p className="text-card-light text-xs mb-5">{work.category}</p>
                <h3 className="text-card-light text-2xl font-semibold mb-3">
                  {(Array.isArray(work.title) ? work.title : [work.title]).map((ti, i) => (
                    <p key={i} className="outfit-text text-card-light text-2xl font-semibold mb-0">
                      {ti}
                    </p>
                  ))}
                </h3>
                <p className="text-card-light text-md font-normal">{work.description}</p>
              </div>

              <img
                src={work.image}
                alt={Array.isArray(work.title) ? work.title.join(' ') : work.title}
                className="sm:w-3/5 w-full h-auto object-cover rounded-lg p-4"
              />

              {/* Hover Text */}
              <div className="absolute inset-0 flex items-center justify-center text-card-light text-lg font-semibold opacity-0 translate-y-5 transition-all duration-700 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 cursor-pointer z-99">
                Learn More →
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
