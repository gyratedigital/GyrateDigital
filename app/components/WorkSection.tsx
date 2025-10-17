'use client'
import * as React from 'react'
import { useEffect, useRef } from 'react'
import { workSection } from '../data/workSection'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

export default function WorkSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('.work-card')
      // const images = gsap.utils.toArray<HTMLElement>('.work-image')

      // initial state
      gsap.set(cards, { yPercent: 50, opacity: 0, scale: 0.9 })
      // gsap.set(images, { y: 0 })

      cards.forEach((card, i) => {
        const prevCards = cards.slice(0, i)
        // const image = images[i] as HTMLElement

        // timeline for each card
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: () => `top+=${i * window.innerHeight * 0.7} top`, // trigger a bit earlier
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

        // bounce animation for image
        // if (image) {
        //   tl.to(image, {
        //     y: -10,
        //     duration: 0.3,
        //     ease: "bounce.out",
        //   }, "-=0.2")
        // }

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
      <div className="relative h-[400vh]"> {/* enough scroll space */}
        <div className="sticky top-24 flex flex-col items-center h-[70vh] sm:h-[80vh]">
          {workSection.map((work) => (
            <div
              key={work.id}
              className="work-card group bg-white flex sm:flex-row flex-col items-stretch absolute w-full sm:max-w-[90%] max-w-full h-auto sm:h-[70vh] max-h-[70vh] sm:max-h-[80vh] rounded-2xl shadow-lg border border-gray-100"
            >
              {/* Content */}
              <div className="relative z-10 p-6 sm:p-8 sm:w-[60%] w-full flex flex-col justify-center overflow-y-auto">
                <h3 className="text-gray-900 text-2xl sm:text-4xl font-bold mb-3 sm:mb-4">
                  {(Array.isArray(work.title) ? work.title : [work.title]).map((ti, i) => (
                    <span key={i} className="block">
                      {ti}
                    </span>
                  ))}
                </h3>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                  {work.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs sm:text-sm rounded-full border border-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">{work.description}</p>
                
                <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-full text-xs sm:text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200 w-fit">
                  Find out more →
                </button>
              </div>

              {/* Image Container */}
              <div className="sm:w-[40%] w-full h-48 sm:h-auto relative overflow-hidden p-6 sm:p-8 sm:pl-0 pt-0 sm:pt-8">
                <Image
                  src={work.image}
                  alt={Array.isArray(work.title) ? work.title.join(" ") : work.title}
                  width={400}
                  height={300}
                  className="work-image w-full h-full object-cover rounded-2xl rounded-tr-[40px] sm:rounded-tr-[70px]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
