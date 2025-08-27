'use client'

import * as React from 'react'
import { featuredCategories } from "../data/featuredCategory";

export default function FeaturedCategories() {
    return (
        <div className="container px-4 mx-auto">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {featuredCategories.map((cat) => (
                    <div key={cat.id} className="card bg-primary p-[30px] rounded-2xl shadow-md bg-[url('/card-bg.svg')] bg-[60%] bg-top-right bg-no-repeat">
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
    );
}