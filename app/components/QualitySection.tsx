import * as React from 'react'
import { qualitySection } from '../data/qualitySection'

export default function QualitySection() {
    return(
        <div className="bg-gradient-to-r from-[#233E2B] to-[#68BA7F] py-20 mt-[500px] mb-[100px]">
            <div className="container px-4 mx-auto">
                <div className="max-w-4xl mx-auto">
                    <h2 className="font-semibold mb-2 text-4xl text-card-light text-center">Reasons you should choose Gyrate</h2>
                    <p className="text-center text-sm text-card-light mb-12">We Provide Quality</p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {qualitySection.map((quality) => (
                        <div key={quality.id} className="card relative group bg-light-primary p-[30px] rounded-2xl shadow-md bg-[url('/card-bg.svg')] bg-[length:46%] bg-top-right bg-no-repeat transition-[background-size] duration-500 ease-in-out hover:bg-[length:80%] overflow-hidden">
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-light-primary/90 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 rounded-xl z-99"></div>
                            {/* Content */}
                            <div className="relative z-10">
                                <p className="text-card-dark text-xs mb-5">{quality.number}</p>
                                <h3 className="text-card-dark text-2xl font-semibold mb-5">
                                {(Array.isArray(quality.title) ? quality.title : [quality.title]).map((ti, i) => (
                                    <p key={i} className="outfit-text text-card-dark text-2xl font-semibold mb-0">
                                    {ti}
                                    </p>
                                ))}
                                </h3>
                                <p className="text-card-dark text-sm line-clamp-5">{quality.description}</p>
                            </div>
                            {/* Hover Text (extra layer) */}
                            <div className="absolute inset-0 flex items-center justify-center text-card-dark text-lg font-semibold opacity-0 translate-y-5 transition-all duration-700 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 cursor-pointer z-99">
                                Learn More →
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    )
}