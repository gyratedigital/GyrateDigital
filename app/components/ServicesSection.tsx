import * as React from 'react'
import { servicesSection } from '../data/servicesSection'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function ServicesSection() {
    return(
        <div className="container px-4 mx-auto mb-[100px]">
            <div className="max-w-4xl mx-auto">
                <h2 className="font-semibold mb-2 text-4xl text-foreground text-center relative">Services</h2>
                <p className="text-center text-sm text-foreground mb-12">Comprehensive services, lasting impact.</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {servicesSection.slice(0, 4).map((service) => (
                    <Link 
                        key={service.id} 
                        href={`/services/${service.slug}`} 
                        className="card relative group bg-primary p-[30px] rounded-2xl shadow-md bg-[url('/card-bg.svg')] bg-[length:46%] bg-top-right bg-no-repeat transition-[background-size] duration-500 ease-in-out hover:bg-[length:80%] overflow-hidden block"
                    >
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-primary/90 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 rounded-xl z-99"></div>
                        {/* Content */}
                        <div className="relative z-10">
                            <p className="text-card-dark text-xs mb-5">{service.number}</p>
                            <h3 className="text-card-dark text-2xl font-semibold mb-5 line-clamp-2">
                            {(Array.isArray(service.title) ? service.title : [service.title]).map((ti, i) => (
                                <p key={i} className="outfit-text text-card-dark text-2xl font-semibold mb-0">
                                {ti}
                                </p>
                            ))}
                            </h3>
                            <p className="text-card-dark text-sm line-clamp-4">{service.description}</p>
                        </div>
                        {/* Hover Text (extra layer) */}
                        <div className="absolute inset-0 flex items-center justify-center gap-2 text-card-dark text-lg font-semibold opacity-0 translate-y-5 transition-all duration-700 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 cursor-pointer z-99">
                            <span>Learn More</span>
                            <ArrowRight className="h-5 w-5" aria-hidden="true" />
                        </div>
                    </Link>

                ))}
            </div>
        </div>
    )
}