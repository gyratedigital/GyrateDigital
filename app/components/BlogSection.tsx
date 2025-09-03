'use client'
import * as React from 'react'
import { blogSection } from '../data/blogSection'
import Image from 'next/image'


export default function BlogSection() {

  return (
    <div className="container px-4 mx-auto mb-[100px]">
                <div className="max-w-4xl mx-auto">
                    <h2 className="font-semibold mb-2 text-4xl text-foreground text-center">Our Blog</h2>
                    <p className="text-center text-sm text-foreground mb-12">Ideas that inspire, stories that matter.</p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {blogSection.map((blog) => (
                        <div key={blog.id} className="card relative group bg-primary p-[30px] rounded-2xl shadow-md bg-[url('/card-bg.svg')] bg-[length:46%] bg-top-right bg-no-repeat transition-[background-size] duration-500 ease-in-out hover:bg-[length:80%] overflow-hidden">
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-primary/90 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 rounded-xl z-99"></div>
                            {/* Content */}
                            <div className="relative z-10 mb-5">
                                <p className="text-card-dark text-xs mb-5">{blog.category}</p>
                                <h3 className="text-card-dark text-2xl font-semibold mb-5">
                                {(Array.isArray(blog.title) ? blog.title : [blog.title]).map((ti, i) => (
                                    <p key={i} className="outfit-text text-card-dark text-2xl font-semibold mb-0">
                                    {ti}
                                    </p>
                                ))}
                                </h3>
                                <p className="text-card-dark text-sm line-clamp-5">{blog.description}</p>
                            </div>
                            {/* Hover Text (extra layer) */}
                            <div className="absolute inset-0 flex items-center justify-center text-card-dark text-lg font-semibold opacity-0 translate-y-5 transition-all duration-700 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 cursor-pointer z-99">
                                Learn More →
                            </div>
                            <Image
                                src={blog.image}
                                alt={Array.isArray(blog.title) ? blog.title.join(" ") : blog.title}
                                width={800}
                                height={600}
                                className="w-full h-auto object-cover rounded-lg"
                            />
                        </div>
    
                    ))}
                </div>
            </div>
  )
}
