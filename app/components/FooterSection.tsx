'use client';

import * as React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { Mail } from 'lucide-react';
import { servicesSection } from '../data/servicesSection';
import { showToast } from '@/lib/toast-utils';

// Custom Brand Icons to replace deprecated Lucide icons
const BrandIcons = {
    Linkedin: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
        </svg>
    ),
    Facebook: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
    ),
    Twitter: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
    ),
    Instagram: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
    )
};

export default function FooterSection() {
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const emailInput = form.elements.namedItem('email') as HTMLInputElement;
        const email = emailInput.value;

        if (!email) {
            showToast("Please enter your email address.", "error");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showToast("Please enter a valid email address.", "error");
            return;
        }

        setIsSubmitting(true);
        try {
            const response = await fetch('/api/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || 'Failed to subscribe');
            }

            showToast("Thank you for subscribing!", "success");
            emailInput.value = '';
        } catch (error) {
            console.error(error);
            showToast("Failed to subscribe. Please try again.", "error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="w-full bg-card-dark relative z-0">
            <div className="absolute z-0 md:w-[800px] h-[800px] w-full blur-[150px] right-0 top-[-400px] rounded-full bg-[radial-gradient(circle_at_right_center,#68BA7F,rgba(9,9,17,0)_50%)]"></div>
            <div className="absolute z-0 md:w-[800px] h-[800px] w-full blur-[150px] left-0 bottom-0 bg-[radial-gradient(circle_at_bottom_left,#68BA7F,rgba(9,9,17,0)_50%)]" />
            <div className="container px-4 mx-auto relative z-1">
                {/* Top bar with logo */}
                <div className="w-max pt-20 pb-6">
                    <Link href="/" className="text-xl font-bold text-primary">
                        <Image
                            className="md:h-[40px] md:w-[147px] h-[36px] w-[132px] block invert"
                            src="/gy-logo.svg"
                            alt="logo"
                            width={147}
                            height={40}
                            priority
                        />
                        {/* <Logo /> */}
                    </Link>
                </div>

                {/* Main grid */}
                <div className="max-w-full mx-auto py-10 grid gap-12 md:gap-16 lg:gap-24 md:grid-cols-2 lg:grid-cols-4">
                    {/* Contact */}
                    <div>
                        <h3 className="font-bold text-xl mb-6 text-card-light uppercase tracking-wider text-sm">Contact</h3>
                        <div className="space-y-6 text-sm leading-6">
                            <div>
                                <h4 className="font-semibold text-card-light text-lg">United Kingdom Office</h4>
                                <p className="text-card-light">33 Copgrove Road, Leeds,<br />West Yorkshire LS8 2SP, United Kingdom</p>
                                <p className="text-card-light mt-2">+92 332 4543168</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-card-light text-lg">Bahrain Office</h4>
                                <p className="text-card-light">Office 210, Building 1691,<br />Road 432, Salmabad 704, Bahrain</p>
                                <p className="text-card-light mt-2">+973 3467 9176</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-card-light text-lg">Email Us</h4>
                                <a href="mailto:info@gyratedigital.com" className="inline-flex items-center gap-2 underline hover:no-underline text-card-light">
                                    <Mail className="h-4 w-4" /> info@gyratedigital.com
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-bold text-xl mb-6 text-card-light uppercase tracking-wider text-sm">Quick Links</h3>
                        <ul className="space-y-4 text-sm">
                            <li>
                                <Link href="/blog" className="text-card-light hover:opacity-70">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-card-light hover:opacity-70">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/portfolio" className="text-card-light hover:opacity-70">
                                    Our Work
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-card-light hover:opacity-70">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Expertise */}
                    <div>
                        <h3 className="font-bold text-xl mb-6 text-card-light uppercase tracking-wider text-sm">Expertise</h3>
                        <ul className="space-y-4 text-sm">
                            {servicesSection.map((service) => (
                                <li key={service.id}>
                                    <Link href={`/services/${service.slug}`} className="text-card-light hover:opacity-70">
                                        {service.category}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="font-bold text-xl mb-6 text-card-light uppercase tracking-wider text-sm">Subscribe</h3>
                        <p className="text-card-light text-sm mb-6">Subscribe to our newsletter for the latest updates.</p>

                        <form
                            noValidate
                            onSubmit={handleSubscribe}
                            className="max-w-md"
                        >
                            <div className="flex flex-col items-stretch gap-3">
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="Your email address"
                                    className="text-card-light w-full h-12 px-4 rounded-xl border border-card-light/50 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/60 placeholder-card-light"
                                />
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-max inline-flex items-center justify-center gap-1.5 rounded-xl bg-card-light px-6 py-3 text-md font-medium text-card-dark shadow hover:bg-card-light/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? 'Subscribing...' : 'Get Started'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Divider */}
                <div className="max-w-full mx-auto">
                    <div className="h-px w-full bg-card-light" />
                </div>

                {/* Bottom bar */}
                <div className="max-w-full mx-auto py-6 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                    <p className="text-sm text-card-light">© 2025 Gyrate Digital</p>
                    <div className="flex items-center gap-6 text-sm">
                        <Link href="/privacy-policy" className="text-card-light hover:opacity-70">
                            Privacy Policy
                        </Link>
                        <Link href="/cookie-policy" className="text-card-light hover:opacity-70">
                            Cookie Policy
                        </Link>
                    </div>
                    <div className="flex items-center gap-3">
                        <Link href="https://www.linkedin.com/company/gyrate-digital/" target="_blank" rel="noopener noreferrer">
                            <IconCircle>
                                <BrandIcons.Linkedin />
                            </IconCircle>
                        </Link>
                        <Link href="https://www.facebook.com/GyrateDigital/" target="_blank" rel="noopener noreferrer">
                            <IconCircle>
                                <BrandIcons.Facebook />
                            </IconCircle>
                        </Link>
                        <Link href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                            <IconCircle>
                                <BrandIcons.Twitter />
                            </IconCircle>
                        </Link>
                        <Link href="https://www.instagram.com/gyrate.digital/" target="_blank" rel="noopener noreferrer">
                            <IconCircle>
                                <BrandIcons.Instagram />
                            </IconCircle>
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    );
}


function IconCircle({ children }: { children: React.ReactNode }) {
    return (
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black text-white hover:opacity-90">
            {children}
        </span>
    );
}