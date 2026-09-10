'use client'

import * as React from 'react'
import { featuredCategories } from "../data/featuredCategory";
import useHorizontalScroll from '../hooks/horizontalScroll';

export default function FeaturedCategories() {
    useHorizontalScroll();
    return (
        <section className="relative md:overflow-hidden py-8 md:py-0" id="horizontal-scroll">
            <div className="md:sticky md:top-0 md:h-screen lg:h-[80vh] xl:h-[70vh] 2xl:h-[60vh] flex items-center">
                {/* Horizontal track on desktop; stacked cards on mobile */}
                <div className="flex flex-col md:flex-row gap-6 px-4 md:px-10 w-full md:w-auto md:will-change-transform" id="horizontal-track">
                    {featuredCategories.map((cat) => (
                        <div 
                            key={cat.id} 
                            className="w-full min-w-0 md:min-w-[350px] lg:min-w-[400px] card bg-primary p-[30px] rounded-2xl shadow-md 
                                       bg-[url('/card-bg.svg')] bg-[60%] bg-top-right bg-no-repeat"
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
