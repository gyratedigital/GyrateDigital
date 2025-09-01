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
            // start: () => `top+=${i * window.innerHeight * 0.2} top`,
            start: () => `top+=${i * window.innerHeight * 0.7 - 300} top`,
            end: () => `+=${window.innerHeight * 0.7}`,
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
              opacity: 0.1,
              zIndex: 5 - (i - j),
              duration: 0.5,
            },
            '<' // sync with same position in timeline
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

      <div className="relative h-[300vh]">
        <div className="sticky top-20 flex flex-col items-center">
          {workSection.map((work) => (
            <div
              key={work.id}
              className="work-card absolute w-[90%] max-w-md card bg-secondary rounded-2xl shadow-md bg-[url('/card-bg.svg')] bg-[length:46%] bg-top-right bg-no-repeat overflow-hidden"
            >
              <div className="absolute inset-0 bg-secondary/90 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 rounded-xl"></div>

              <div className="relative z-10 p-7 pb-4">
                <p className="text-card-light text-xs mb-5">{work.category}</p>
                <h3 className="text-card-light text-2xl font-semibold mb-0">
                  {(Array.isArray(work.title) ? work.title : [work.title]).map((ti, i) => (
                    <p key={i} className="outfit-text text-card-light text-2xl font-semibold mb-0">
                      {ti}
                    </p>
                  ))}
                </h3>
              </div>

              <img
                src={work.image}
                alt={Array.isArray(work.title) ? work.title.join(' ') : work.title}
                className="w-full h-auto rounded-lg p-4 pt-0"
              />

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
