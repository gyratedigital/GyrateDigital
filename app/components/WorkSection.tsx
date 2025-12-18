'use client'
import * as React from 'react'
import { useEffect, useRef } from 'react'
import { workSection } from '../data/workSection'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function WorkSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('.work-card')

      // initial state
      gsap.set(cards, { yPercent: 10, opacity: 0, scale: 0.9 })

      cards.forEach((card, i) => {
        const prevCards = cards.slice(0, i)

        // timeline for each card
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: () => `top+=${i * window.innerHeight-300 * 0.7} top`, // trigger a bit earlier
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
          duration: 0.7,
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
              duration: 0.7,
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
        <h2 className="font-semibold mb-2 text-4xl text-foreground text-center relative">Our Work</h2>
        <p className="text-center text-sm text-foreground mb-12">
          Designs that speak, results that last.
        </p>
      </div>

      {/* Cards stacked */}
      <div className="relative h-[500vh]"> {/* enough scroll space */}
        <div className="sticky top-24 flex flex-col items-center h-[70vh] sm:h-[80vh]">
          {workSection.map((work) => (
            <div
              key={work.id}
              className="work-card group absolute flex h-auto w-full max-w-full flex-col items-stretch rounded-[32px] border border-border/60 bg-card text-card-foreground shadow-[0_24px_72px_rgba(8,16,12,0.12)] sm:h-[70vh] sm:max-h-[80vh] sm:max-w-[90%] sm:flex-row p-6 sm:p-8"
            >
              <div className="flex flex-1 flex-col justify-center gap-6">
                <div className="space-y-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
                    {work.category}
                  </p>
                  <h3 className="text-3xl font-semibold leading-tight sm:text-[40px]">
                    {(Array.isArray(work.title) ? work.title : [work.title]).map((ti, index) => (
                      <span key={index} className="block">
                        {ti.trim()}
                      </span>
                    ))}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {work.description}
                  </p>
                </div>

                {Array.isArray(work.tags) && work.tags.length > 0 && (
                  <div className="flex flex-wrap gap-3">
                    {work.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-full border border-border/60 bg-muted/40 px-4 py-2 text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground sm:text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-3">
                  <Link
                    href={`/portfolio/${work.slug}`}
                    className="inline-flex h-11 items-center gap-2 rounded-full border border-primary bg-primary px-5 text-sm font-semibold text-card-dark transition-colors hover:bg-primary/80 wave-button"
                  >
                    Details
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  {work.liveUrl && (
                    <Link
                      href={work.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-11 items-center gap-2 rounded-full border border-border/60 px-5 text-sm font-semibold text-card-foreground transition-colors hover:border-primary hover:text-primary"
                    >
                      Visit Site
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  )}
                </div>
              </div>

              <div className="relative w-full overflow-hidden rounded-b-[32px] bg-background sm:h-full sm:max-h-full max-h-[300px] sm:w-[42%] sm:rounded-b-none sm:rounded-r-[50px] p-2 sm:p-3 sm:mt-0 mt-6">
                {(() => {
                  // const baseImages = Array.from(
                  //   new Set([
                  //     work.image,
                  //     ...(work.caseStudy?.gallery?.map((g) => g.src) ?? [])
                  //   ])
                  // )

                  // const galleryImages =
                  //   baseImages.length >= 2
                  //     ? baseImages.slice(0, 4)
                  //     : [...baseImages, work.image].slice(0, 4)

                  // if (galleryImages.length <= 1) {
                  //   return (
                  //     <Image
                  //       src={galleryImages[0]}
                  //       alt={Array.isArray(work.title) ? work.title.join(" ") : work.title}
                  //       width={520}
                  //       height={400}
                  //       className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.04]"
                  //     />
                  //   )
                  // }

                  // const duplicated = [...galleryImages, ...galleryImages]

                  const duplicated = [...work.imageGallery, ...work.imageGallery]

                  return (
                    <div className="h-full w-full sm:max-h-full max-h-[283px] sm:rounded-tr-[40px] rounded-b-[32px] sm:rounded-b-none overflow-hidden">
                      <div className="work-image-scroller h-full w-[150%] overflow-hidden flex items-center gap-2 relative  rounded-b-[20px] sm:rounded-b-none sm:rounded-r-[36px]">
                        
                        {/* First Row - Scrolls Up */}
                        <div className="flex-1 flex flex-col justify-center gap-2 animate-work-image-scroll">
                          {duplicated.map((src, idx) => (
                            <div
                              key={`${work.slug}-top-${idx}`}
                              className="relative h-auto w-full overflow-hidden rounded-xl bg-card-light/20 border border-foreground/20 flex-shrink-0"
                            >
                              {/* MAC style three dots indicator */}
                              <div className="flex items-center justify-start bg-card px-2 py-[5px] gap-[3px] border border-b border-foreground/20">
                                <p className="w-[4px] h-[4px] rounded-full bg-[#EC6B60]"></p>
                                <p className="w-[4px] h-[4px] rounded-full bg-[#F5BE4F]"></p>
                                <p className="w-[4px] h-[4px] rounded-full bg-[#62C554]"></p>
                              </div>
                              <Image
                                src={src}
                                alt={`${Array.isArray(work.title) ? work.title.join(" ") : work.title} - Image ${idx + 1}`}
                                fill
                                sizes="(min-width: 1024px) 20vw, 50vw"
                                className="object-contain !relative"
                              />
                            </div>
                          ))}
                        </div>

                        {/* Second Row - Scrolls Down */}
                        <div className="flex-1 flex flex-col justify-center gap-2 animate-work-image-scroll reverse">
                          {duplicated.map((src, idx) => (
                            <div
                              key={`${work.slug}-bottom-${idx}`}
                              className="relative h-auto w-full overflow-hidden rounded-xl bg-card-light/20 border border-foreground/5 flex-shrink-0"
                            >
                              <div className="flex items-center justify-start bg-card px-2 py-[5px] gap-[3px] border border-b border-foreground/20">
                                <p className="w-[4px] h-[4px] rounded-full bg-[#EC6B60]"></p>
                                <p className="w-[4px] h-[4px] rounded-full bg-[#F5BE4F]"></p>
                                <p className="w-[4px] h-[4px] rounded-full bg-[#62C554]"></p>
                              </div>
                              <Image
                                src={src}
                                alt={`${Array.isArray(work.title) ? work.title.join(" ") : work.title} - Image ${idx + 1}`}
                                fill
                                sizes="(min-width: 1024px) 20vw, 50vw"
                                className="object-contain !relative"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )
                })()}
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
