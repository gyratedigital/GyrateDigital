import { Facebook, Instagram, Linkedin, Mail, Twitter } from 'lucide-react';
import Image from 'next/image';
import * as React from 'react'

export default function FooterSection() {
    // return(
    //     <div className="w-full bg-primary">
    //         <div className="container p-4 mx-auto">Footer</div>
    //     </div>
    // )

    return (
        <div className="w-full bg-primary">
            {/* Top bar with logo */}
            <div className="max-w-7xl mx-auto px-6 md:px-8 pt-10">
                <div className="flex items-center justify-start">
                    <Image
                        className="md:h-[40px] md:w-[147px] h-[36px] w-[132px] block"
                        src="/gy-logo.svg"
                        alt="logo"
                        width={147}
                        height={40}
                        priority
                    />
                </div>
            </div>


            {/* Main grid */}
            <div className="max-w-7xl mx-auto px-6 md:px-8 py-10 grid gap-12 md:gap-16 lg:gap-24 md:grid-cols-2 lg:grid-cols-3">
                {/* Contact */}
                <div>
                    <h3 className="font-bold text-xl mb-6 text-card-dark">Contact</h3>


                    <div className="space-y-6 text-sm leading-6">
                        <div>
                            <h4 className="font-semibold text-card-dark text-lg">United Kingdom Office</h4>
                            <p className="text-card-dark">33 Copgrove Road, Leeds,<br />West Yorkshire LS8 2SP, United Kingdom</p>
                            <p className="text-card-dark mt-2">+92 332 4543168</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-card-dark text-lg">Bahrain Office</h4>
                            <p className="text-card-dark">Office 210, Building 1691,<br />Road 432, Salmabad 704, Bahrain</p>
                            <p className="text-card-dark mt-2">+973 3467 9176</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-card-dark text-lg">Email Us</h4>
                            <a href="mailto:info@gyratedigital.com" className="inline-flex items-center gap-2 underline hover:no-underline text-card-dark">
                            <Mail className="h-4 w-4" /> info@gyratedigital.com
                            </a>
                        </div>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="font-bold text-xl mb-6 text-card-dark">Quick Links</h3>
                    <ul className="space-y-4 text-sm">
                        <li><a className="text-card-dark hover:opacity-70" href="#">Blog</a></li>
                        <li><a className="text-card-dark hover:opacity-70" href="#">Services</a></li>
                        <li><a className="text-card-dark hover:opacity-70" href="#">Our Work</a></li>
                        <li><a className="text-card-dark hover:opacity-70" href="#">Contact</a></li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="font-bold text-xl mb-6 text-card-dark">Subscribe to our Newsletter</h3>
                    <form onSubmit={(e) => e.preventDefault()} className="max-w-md">
                        <div className="flex items-stretch gap-3">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="text-card-dark w-full h-12 px-4 rounded-lg border border-card-dark/50 bg-transparent focus:outline-none focus:ring-2 focus:ring-black/60 placeholder-card-dark"
                                required
                            />
                            {/* <button
                                type="submit"
                                className="h-12 px-5 rounded-lg bg-black text-white font-medium hover:opacity-90 active:opacity-80"
                            >
                            Get Started
                            </button> */}
                            <a
                                href="#"
                                data-slot="button"
                                className="w-max inline-flex items-center justify-center gap-1.5 rounded-lg bg-card-dark px-4 py-3 text-md font-medium text-card-light shadow hover:bg-card-dark/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 transition-all"
                                >
                                Get Started
                            </a>
                        </div>
                    </form>
                </div>
            </div>

            {/* Divider */}
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <div className="h-px w-full bg-black/30" />
            </div>

            {/* Bottom bar */}
            <div className="max-w-7xl mx-auto px-6 md:px-8 py-6 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <p className="text-sm text-card-dark">© 2025 Gyrate Digital</p>
                <div className="flex items-center gap-6 text-sm">
                    <a href="#" className="text-card-dark hover:opacity-70">Privacy policy</a>
                    <a href="#" className="text-card-dark hover:opacity-70">Cookie policy</a>
                </div>
                <div className="flex items-center gap-3">
                    <IconCircle>
                    <Linkedin className="h-4 w-4" />
                    </IconCircle>
                    <IconCircle>
                    <Facebook className="h-4 w-4" />
                    </IconCircle>
                    <IconCircle>
                    <Twitter className="h-4 w-4" />
                    </IconCircle>
                    <IconCircle>
                    <Instagram className="h-4 w-4" />
                    </IconCircle>
                </div>
            </div>
        </div>
    );
}


function IconCircle({ children }: { children: React.ReactNode }) {
    return (
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black text-white hover:opacity-90">
            {children}
        </span>
    );
}