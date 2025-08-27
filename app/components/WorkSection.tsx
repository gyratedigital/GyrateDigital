import * as React from 'react'
import { workSection } from '../data/workSection'

export default function WorkSection() {
    return(
        <div className="container px-4 mx-auto mb-[100px]">
            <div className="max-w-4xl mx-auto">
                <h2 className="font-semibold mb-2 text-4xl text-foreground text-center">Our Work</h2>
                <p className="text-center text-sm text-foreground mb-12">Designs that speak, results that last.</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {workSection.map((work) => (
                    <div key={work.id} className="card relative group bg-secondary p-[30px] rounded-xl shadow-md bg-[url('/card-bg.svg')] bg-[length:46%] bg-top-right bg-no-repeat transition-[background-size] duration-500 ease-in-out hover:bg-[length:80%] overflow-hidden">
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-secondary/90 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 rounded-xl z-99"></div>
                        {/* Content */}
                        <div className="relative z-10">
                            <p className="text-card-light text-xs mb-5">{work.category}</p>
                            <h3 className="text-card-light text-2xl font-semibold mb-5">
                            {(Array.isArray(work.title) ? work.title : [work.title]).map((ti, i) => (
                                <p key={i} className="outfit-text text-card-light text-2xl font-semibold mb-0">
                                {ti}
                                </p>
                            ))}
                            </h3>
                             {/* 👇 Add image after title */}
                            <img 
                                src={work.image} 
                                alt={Array.isArray(work.title) ? work.title.join(" ") : work.title} 
                                className="w-full h-auto rounded-lg" 
                            />

                        </div>
                        {/* Hover Text (extra layer) */}
                        <div className="absolute inset-0 flex items-center justify-center text-card-light text-lg font-semibold opacity-0 translate-y-5 transition-all duration-700 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 cursor-pointer z-99">
                            Learn More →
                        </div>
                    </div>

                ))}
            </div>
        </div>
    )
}