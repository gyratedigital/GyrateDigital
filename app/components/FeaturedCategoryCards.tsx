'use client'

import * as React from 'react'
import { useRef } from 'react'
import { featuredCategories } from "../data/featuredCategory";
import useHorizontalScroll from '../hooks/horizontalScroll';

export default function FeaturedCategories() {
    const sectionRef = useRef<HTMLElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    useHorizontalScroll({
        sectionRef,
        trackRef,
        distanceScale: 1.15,
    });

    return (
        <section
            ref={sectionRef}
            className="relative flex h-screen w-full flex-col overflow-hidden"
        >
            <div className="flex min-h-0 flex-1 items-center">
                <div
                    ref={trackRef}
                    className="flex w-max items-stretch gap-6 px-6 will-change-transform md:gap-8 md:px-10 lg:gap-10 lg:px-14"
                >
                    {featuredCategories.map((cat) => (
                        <div
                            key={cat.id}
                            className="card flex w-[78vw] max-w-[420px] shrink-0 flex-col bg-primary p-[30px] rounded-2xl shadow-md
                                       bg-[url('/card-bg.svg')] bg-[60%] bg-top-right bg-no-repeat
                                       sm:w-[360px] lg:w-[400px]"
                        >
                            <p className="text-card-dark text-xs mb-5">{cat.number}</p>
                            <h3 className="text-card-dark text-2xl font-semibold mb-5">
                                {(Array.isArray(cat.title) ? cat.title : [cat.title]).map((ti, i) => (
                                    <p key={i} className="outfit-text text-card-dark text-2xl font-semibold mb-0">
                                        {ti}
                                    </p>
                                ))}
                            </h3>
                            <p className="text-card-dark text-sm line-clamp-5">{cat.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
