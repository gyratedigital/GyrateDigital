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
  const stackRef = useRef<HTMLDivElement>(null)
  const displayedWorks = workSection.slice(0, 4)

  useEffect(() => {
    const mm = gsap.matchMedia()

    mm.add('(max-width: 767px)', () => {
      const cards = gsap.utils.toArray<HTMLElement>('.work-card')
      const stage = stackRef.current
      if (!stage || cards.length === 0) return

      gsap.set(cards, { y: 32, opacity: 0, scale: 1, zIndex: 1, pointerEvents: 'none' })
      gsap.set(cards[0], { y: 0, opacity: 1, zIndex: 2, pointerEvents: 'auto' })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: stage,
          start: 'top 72px',
          end: () => `+=${Math.round(window.innerHeight * cards.length * 0.9)}`,
          pin: true,
          pinSpacing: true,
          scrub: 0.85,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })

      cards.forEach((card, i) => {
        if (i === 0) return
        const prev = cards[i - 1]
        tl.to(prev, { y: -28, opacity: 0, pointerEvents: 'none', duration: 1, ease: 'none' }, i)
        tl.to(card, { y: 0, opacity: 1, zIndex: 2, pointerEvents: 'auto', duration: 1, ease: 'none' }, i)
      })

      return () => {
        tl.scrollTrigger?.kill()
        tl.kill()
      }
    })

    mm.add('(min-width: 768px)', () => {
      const cards = gsap.utils.toArray<HTMLElement>('.work-card')
      if (cards.length === 0) return

      gsap.set(cards, { yPercent: 10, opacity: 0, scale: 0.7, zIndex: 1 })

      cards.forEach((card, i) => {
        const prevCards = cards.slice(0, i)
        const nextCards = cards.slice(i + 1)
        const scrollDistance = Math.min(window.innerHeight * 0.45, 380)

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: () => `top+=${i * scrollDistance} top`,
            end: () => `+=${scrollDistance}`,
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        })

        tl.to(card, {
          yPercent: 0,
          scale: 1,
          opacity: 1,
          zIndex: 10,
          duration: 0.4,
        })

        prevCards.forEach((prevCard, j) => {
          const stackDepth = i - j
          tl.to(
            prevCard,
            {
              yPercent: -10 * stackDepth,
              scale: Math.max(0.7, 0.9 - stackDepth * 0.05),
              opacity: Math.max(0, 0.1),
              zIndex: Math.max(1, 5 - stackDepth),
              duration: 0.4,
            },
            '<'
          )
        })

        nextCards.forEach((nextCard) => {
          tl.set(
            nextCard,
            {
              yPercent: 10,
              opacity: 0,
              scale: 0.7,
              zIndex: 1,
            },
            '<'
          )
        })
      })
    })

    return () => mm.revert()
  }, [])

  return (
    <div ref={containerRef} className="container px-4 mx-auto sm:mb-[100px] mb-[80px] relative">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-semibold mb-2 text-4xl text-foreground text-center relative">Our Work</h2>
        <p className="text-center text-sm text-foreground mb-12">
          Designs that speak, results that last.
        </p>
      </div>

      <div
        ref={stackRef}
        className="relative mb-16 md:mb-32 md:h-[245vh]"
      >
        <div className="relative mx-auto h-[min(38.5rem,calc(100dvh-6.5rem))] w-full md:sticky md:top-24 md:flex md:h-[80vh] md:flex-col md:items-center">
          <div className="relative h-full w-full">
            {displayedWorks.map((work) => {
              const duplicated = [...work.imageGallery, ...work.imageGallery]
              const mobileImage = work.imageGallery[0] ?? work.image

              return (
                <div
                  key={work.id}
                  className="work-card group absolute inset-0 flex h-full w-full max-w-full flex-col items-stretch overflow-hidden rounded-[32px] border border-border/60 bg-card text-card-foreground shadow-[0_24px_72px_rgba(8,16,12,0.12)] md:inset-auto md:h-[70vh] md:max-h-[80vh] md:max-w-[90%] md:flex-row p-5 md:p-8"
                >
                  <div className="flex min-h-0 flex-1 flex-col justify-center gap-4 md:gap-6">
                    <div className="space-y-3 md:space-y-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
                        {work.category}
                      </p>
                      <h3 className="text-2xl font-semibold leading-tight md:text-[40px]">
                        {(Array.isArray(work.title) ? work.title : [work.title]).map((ti, titleIndex) => (
                          <span key={titleIndex} className="block">
                            {ti.trim()}
                          </span>
                        ))}
                      </h3>
                      <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground sm:text-base md:line-clamp-none">
                        {work.description}
                      </p>
                    </div>

                    {Array.isArray(work.tags) && work.tags.length > 0 && (
                      <div className="hidden flex-wrap gap-3 md:flex">
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

                  <div className="relative mt-4 min-h-0 w-full flex-1 overflow-hidden rounded-[24px] bg-background md:mt-0 md:h-full md:max-h-full md:w-[42%] md:rounded-b-none md:rounded-r-[50px] p-2 md:p-3">
                    <div className="md:hidden relative h-full min-h-[160px] w-full overflow-hidden rounded-xl">
                      <Image
                        src={mobileImage}
                        alt={Array.isArray(work.title) ? work.title.join(' ') : work.title}
                        fill
                        sizes="100vw"
                        className="object-cover"
                        loading="lazy"
                      />
                    </div>

                    <div className="hidden h-full w-full overflow-hidden md:block sm:rounded-tr-[40px]">
                      <div className="work-image-scroller relative flex h-full w-[150%] items-center gap-2 overflow-hidden rounded-b-[20px] sm:rounded-b-none sm:rounded-r-[36px]">
                        <div className="flex flex-1 flex-col justify-center gap-2 animate-work-image-scroll">
                          {duplicated.map((src, idx) => (
                            <div
                              key={`${work.slug}-top-${idx}`}
                              className="relative h-auto w-full flex-shrink-0 overflow-hidden rounded-xl border border-foreground/20 bg-card-light/20"
                            >
                              <div className="flex items-center justify-start gap-[3px] border border-b border-foreground/20 bg-card px-2 py-[5px]">
                                <p className="h-[4px] w-[4px] rounded-full bg-[#EC6B60]"></p>
                                <p className="h-[4px] w-[4px] rounded-full bg-[#F5BE4F]"></p>
                                <p className="h-[4px] w-[4px] rounded-full bg-[#62C554]"></p>
                              </div>
                              <Image
                                src={src}
                                alt={`${Array.isArray(work.title) ? work.title.join(' ') : work.title} - Image ${idx + 1}`}
                                fill
                                sizes="(min-width: 1024px) 20vw, 50vw"
                                className="object-contain !relative"
                                loading="lazy"
                              />
                            </div>
                          ))}
                        </div>

                        <div className="flex flex-1 flex-col justify-center gap-2 animate-work-image-scroll reverse">
                          {duplicated.map((src, idx) => (
                            <div
                              key={`${work.slug}-bottom-${idx}`}
                              className="relative h-auto w-full flex-shrink-0 overflow-hidden rounded-xl border border-foreground/5 bg-card-light/20"
                            >
                              <div className="flex items-center justify-start gap-[3px] border border-b border-foreground/20 bg-card px-2 py-[5px]">
                                <p className="h-[4px] w-[4px] rounded-full bg-[#EC6B60]"></p>
                                <p className="h-[4px] w-[4px] rounded-full bg-[#F5BE4F]"></p>
                                <p className="h-[4px] w-[4px] rounded-full bg-[#62C554]"></p>
                              </div>
                              <Image
                                src={src}
                                alt={`${Array.isArray(work.title) ? work.title.join(' ') : work.title} - Image ${idx + 1}`}
                                fill
                                sizes="(min-width: 1024px) 20vw, 50vw"
                                className="object-contain !relative"
                                loading="lazy"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
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
