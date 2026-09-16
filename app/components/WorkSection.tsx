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
  const sectionRef = useRef<HTMLElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)
  const { lenis } = useLenis()
  const displayedWorks = workSection.slice(0, 4)

  useEffect(() => {
    const section = sectionRef.current
    const stage = stageRef.current
    if (!section || !stage) return

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('.work-card', stage)
      if (cards.length < 2) return

      // Lenis.dev "enter in": next card scales up from behind, current flies toward camera
      gsap.set(cards, {
        scale: 0.55,
        opacity: 0,
        zIndex: 1,
        force3D: true,
        transformOrigin: '50% 50%',
        pointerEvents: 'none',
      })
      gsap.set(cards[0], {
        scale: 1,
        opacity: 1,
        zIndex: 10,
        pointerEvents: 'auto',
      })

      const transitions = cards.length - 1
      // Equal scroll distance per card transition
      const endDistance = () =>
        Math.round(window.innerHeight * transitions * 0.95)

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${endDistance()}`,
          pin: true,
          pinSpacing: true,
          scrub: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          fastScrollEnd: true,
        },
      })

      cards.forEach((card, i) => {
        if (i === cards.length - 1) return

        const next = cards[i + 1]
        const at = i

        // Current card — scale past the viewer (out)
        tl.to(
          card,
          {
            scale: 1.65,
            opacity: 0,
            zIndex: 5,
            pointerEvents: 'none',
            duration: 1,
            ease: 'none',
            force3D: true,
          },
          at
        )

        // Next card — enter from behind and pop into place
        tl.fromTo(
          next,
          {
            scale: 0.5,
            opacity: 0,
            zIndex: 20,
            pointerEvents: 'none',
          },
          {
            scale: 1.04,
            opacity: 1,
            zIndex: 20,
            pointerEvents: 'auto',
            duration: 0.85,
            ease: 'none',
            force3D: true,
          },
          at
        )

        // Settle pop (1.04 → 1)
        tl.to(
          next,
          {
            scale: 1,
            duration: 0.15,
            ease: 'none',
            force3D: true,
          },
          at + 0.85
        )
      })
    }, section)

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
    <div className="relative">
      <section
        ref={sectionRef}
        className="relative flex h-screen w-full flex-col overflow-hidden"
      >
        <div className="container mx-auto max-w-4xl shrink-0 px-4 pt-6 pb-4 sm:pt-8 sm:pb-6">
          <h2 className="relative mb-2 text-center text-3xl font-semibold text-foreground sm:text-4xl">
            Our Work
          </h2>
          <p className="text-center text-sm text-foreground">
            Designs that speak, results that last.
          </p>
        </div>

        <div
          ref={stageRef}
          className="relative flex min-h-0 flex-1 w-full items-center justify-center px-4 pb-4"
        >
          {displayedWorks.map((work) => (
            <div
              key={work.id}
              className="work-card group absolute flex h-auto w-full max-w-full flex-col items-stretch rounded-[32px] border border-border/60 bg-card p-6 text-card-foreground shadow-[0_24px_72px_rgba(8,16,12,0.12)] sm:h-[min(62vh,640px)] sm:max-h-[68vh] sm:max-w-[90%] sm:flex-row sm:p-8"
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

              <div className="relative mt-6 w-full max-h-[300px] overflow-hidden rounded-b-[32px] bg-background p-2 sm:mt-0 sm:h-full sm:max-h-full sm:w-[42%] sm:rounded-b-none sm:rounded-r-[50px] sm:p-3">
                {(() => {
                  const gallery = work.imageGallery
                  const column = [...gallery, ...gallery]

                  return (
                    <div className="h-full max-h-[283px] w-full overflow-hidden rounded-b-[32px] sm:max-h-full sm:rounded-b-none sm:rounded-tr-[40px]">
                      <div className="work-image-scroller relative flex h-full w-full items-start gap-2 overflow-hidden rounded-b-[20px] sm:rounded-b-none sm:rounded-r-[36px]">
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
      </section>

      <div className="mt-12 flex justify-center px-4">
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
