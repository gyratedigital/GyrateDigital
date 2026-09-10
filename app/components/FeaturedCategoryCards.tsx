'use client'

import * as React from 'react'
import { featuredCategories } from "../data/featuredCategory";
import useHorizontalScroll from '../hooks/horizontalScroll';

export default function FeaturedCategories() {
    useHorizontalScroll();
    return (
        <section className="relative overflow-hidden" id="horizontal-scroll">
            <div className="sticky top-0 h-screen lg:h-[80vh] xl:h-[70vh] 2xl:h-[60vh] flex items-center">
                {/* Horizontal track */}
                <div className="flex gap-6 px-10 will-change-transform" id="horizontal-track">
                    {featuredCategories.map((cat) => (
                        <div 
                            key={cat.id} 
                            className="min-w-[350px] lg:min-w-[400px] card bg-primary p-[30px] rounded-2xl shadow-md w-full 
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
