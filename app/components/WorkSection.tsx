'use client'

import { useEffect, useRef } from 'react'
import { workSection } from '../data/workSection'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { useLenis } from './LenisProvider'

gsap.registerPlugin(ScrollTrigger)

export default function WorkSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { lenis } = useLenis()
  const displayedWorks = workSection.slice(0, 4)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('.work-card')
      if (cards.length === 0) return

      // Normal cards move through fairly quickly; only the last one holds longer
      const normalScroll = () => Math.round(window.innerHeight * 0.55)
      const lastScroll = () => Math.round(window.innerHeight * 1.25)

      const distanceFor = (i: number) =>
        i === cards.length - 1 ? lastScroll() : normalScroll()

      const startOffsetFor = (i: number) => {
        let offset = 0
        for (let j = 0; j < i; j++) offset += distanceFor(j)
        return offset
      }

      gsap.set(cards, {
        yPercent: 22,
        opacity: 0,
        scale: 0.78,
        zIndex: 1,
        force3D: true,
        transformOrigin: '50% 50%',
      })
      // First card visible on load
      gsap.set(cards[0], { yPercent: 0, opacity: 1, scale: 1, zIndex: 10 })

      cards.forEach((card, i) => {
        const prevCards = cards.slice(0, i)
        const nextCards = cards.slice(i + 1)
        const isLast = i === cards.length - 1

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            start: () => `top+=${startOffsetFor(i)} top`,
            end: () => `+=${distanceFor(i)}`,
            scrub: true,
            invalidateOnRefresh: true,
          },
        })

        if (i === 0) {
          tl.to(card, { scale: 1, duration: 1, ease: 'none' })
          return
        }

        // Enter + pop out
        tl.fromTo(
          card,
          { yPercent: 22, scale: 0.78, opacity: 0, zIndex: 1 },
          {
            yPercent: 0,
            scale: 1.05,
            opacity: 1,
            zIndex: 20,
            duration: isLast ? 0.4 : 0.7,
            ease: 'none',
            force3D: true,
          }
        )
        // Settle from overshoot
        tl.to(card, {
          scale: 1,
          duration: isLast ? 0.15 : 0.2,
          ease: 'none',
          force3D: true,
        })
        // Extra hold only on the last card
        tl.to(card, {
          scale: 1,
          duration: isLast ? 0.45 : 0.1,
          ease: 'none',
        })

        prevCards.forEach((prevCard, j) => {
          const stackDepth = i - j
          tl.to(
            prevCard,
            {
              yPercent: -8 * stackDepth,
              scale: Math.max(0.72, 0.94 - stackDepth * 0.06),
              opacity: Math.max(0.08, 0.45 - stackDepth * 0.15),
              zIndex: Math.max(1, 8 - stackDepth),
              duration: isLast ? 0.4 : 0.7,
              ease: 'none',
              force3D: true,
            },
            0
          )
        })

        nextCards.forEach((nextCard) => {
          tl.set(
            nextCard,
            {
              yPercent: 22,
              opacity: 0,
              scale: 0.78,
              zIndex: 1,
            },
            0
          )
        })
      })
    }, container)

    const refresh = () => {
      lenis?.resize()
      ScrollTrigger.refresh()
    }

    const raf = requestAnimationFrame(refresh)
    window.addEventListener('resize', refresh)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', refresh)
      ctx.revert()
    }
  }, [lenis])

  return (
    <div ref={containerRef} className="container px-4 mx-auto sm:mb-[100px] mb-[250px] relative">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-semibold mb-2 text-4xl text-foreground text-center relative">Our Work</h2>
        <p className="text-center text-sm text-foreground mb-12">
          Designs that speak, results that last.
        </p>
      </div>

      {/* Cards stacked — shorter travel for early cards, longer hold for the last */}
      <div
        className="relative mb-32 sm:mb-12"
        style={{ height: `${(displayedWorks.length - 1) * 55 + 125 + 20}vh` }}
      >
        <div className="sticky top-24 flex flex-col items-center h-[70vh] sm:h-[80vh]">
          {displayedWorks.map((work) => (
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
                  const gallery = work.imageGallery
                  // Two identical halves = seamless -50% loop
                  const column = [...gallery, ...gallery]

                  return (
                    <div className="h-full w-full sm:max-h-full max-h-[283px] sm:rounded-tr-[40px] rounded-b-[32px] sm:rounded-b-none overflow-hidden">
                      <div className="work-image-scroller relative flex h-full w-full items-start gap-2 overflow-hidden rounded-b-[20px] sm:rounded-b-none sm:rounded-r-[36px]">
                        {/* First column — scrolls up */}
                        <div className="flex w-1/2 shrink-0 flex-col gap-2 animate-work-image-scroll">
                          {column.map((src, idx) => (
                            <div
                              key={`${work.slug}-up-${idx}`}
                              className="relative w-full shrink-0 overflow-hidden rounded-xl border border-foreground/20 bg-card-light/20"
                            >
                              <div className="flex items-center justify-start gap-[3px] border border-b border-foreground/20 bg-card px-2 py-[5px]">
                                <p className="h-[4px] w-[4px] rounded-full bg-[#EC6B60]"></p>
                                <p className="h-[4px] w-[4px] rounded-full bg-[#F5BE4F]"></p>
                                <p className="h-[4px] w-[4px] rounded-full bg-[#62C554]"></p>
                              </div>
                              <Image
                                src={src}
                                alt={`${Array.isArray(work.title) ? work.title.join(' ') : work.title} - Image ${idx + 1}`}
                                width={320}
                                height={220}
                                sizes="(min-width: 1024px) 18vw, 40vw"
                                className="h-auto w-full object-cover"
                                loading="lazy"
                              />
                            </div>
                          ))}
                        </div>

                        {/* Second column — scrolls down */}
                        <div className="flex w-1/2 shrink-0 flex-col gap-2 animate-work-image-scroll reverse">
                          {column.map((src, idx) => (
                            <div
                              key={`${work.slug}-down-${idx}`}
                              className="relative w-full shrink-0 overflow-hidden rounded-xl border border-foreground/5 bg-card-light/20"
                            >
                              <div className="flex items-center justify-start gap-[3px] border border-b border-foreground/20 bg-card px-2 py-[5px]">
                                <p className="h-[4px] w-[4px] rounded-full bg-[#EC6B60]"></p>
                                <p className="h-[4px] w-[4px] rounded-full bg-[#F5BE4F]"></p>
                                <p className="h-[4px] w-[4px] rounded-full bg-[#62C554]"></p>
                              </div>
                              <Image
                                src={src}
                                alt={`${Array.isArray(work.title) ? work.title.join(' ') : work.title} - Image ${idx + 1}`}
                                width={320}
                                height={220}
                                sizes="(min-width: 1024px) 18vw, 40vw"
                                className="h-auto w-full object-cover"
                                loading="lazy"
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

      <div className="flex justify-center">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:-translate-y-0.5 hover:shadow-primary/30"
        >
          View All
          <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </div>
  )
}
