import * as React from 'react'
import { qualitySection } from '../data/qualitySection'

export default function QualitySection() {
    return(
        <div className="bg-gradient-to-r from-[#233E2B] to-[#68BA7F] py-20 sm:mt-[100px] mt-8 mb-[100px]">
            <div className="container px-4 mx-auto">
                <div className="max-w-4xl mx-auto">
                    <h2 className="font-semibold mb-2 text-4xl text-card-light text-center relative">Reasons you should choose Gyrate</h2>
                    <p className="text-center text-sm text-card-light mb-12">We Provide Quality</p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {qualitySection.map((quality) => (
                        <div key={quality.id} className="card relative bg-light-primary p-[30px] rounded-2xl shadow-md bg-[url('/card-bg.svg')] bg-[length:46%] bg-top-right bg-no-repeat overflow-hidden">
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
                        </div>

                    ))}
                </div>
            </div>
        </div>
    )
}