"use client";

import { Lightbulb, Shield, Target, Rocket, Eye } from "lucide-react";

const coreValues = [
    {
        icon: Lightbulb,
        title: "Innovation",
        description:
            "We continuously evolve with technology, creativity, and AI-enabled thinking to deliver solutions that are future-ready and relevant.",
    },
    {
        icon: Shield,
        title: "Integrity",
        description:
            "We believe in honest communication, accountability, and trust. Transparency guides how we work with our clients and partners.",
    },
    {
        icon: Target,
        title: "Impact",
        description:
            "Every solution we build is aligned with real business outcomes. We focus on work that delivers measurable, long-term value.",
    },
];

export default function CoreValuesMissionVision() {
    return (
        <section className="py-20 px-6 bg-background">
            <div className="container mx-auto max-w-6xl">
                {/* Core Values Section */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary">
                        What Drives Us
                    </span>
                    <h2 className="outfit-text text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Our Core Values
                    </h2>
                    <p className="text-foreground/70 max-w-2xl mx-auto">
                        The principles that guide every decision we make and every solution we build.
                    </p>
                </div>

                {/* Values Cards */}
                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    {coreValues.map((value, index) => (
                        <div
                            key={index}
                            className="group relative p-8 rounded-2xl bg-gradient-to-br from-foreground/5 to-transparent border border-foreground/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                        >
                            {/* Icon */}
                            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                                <value.icon className="w-7 h-7 text-primary" />
                            </div>

                            {/* Content */}
                            <h3 className="outfit-text text-xl font-semibold text-foreground mb-3">
                                {value.title}
                            </h3>
                            <p className="text-foreground/70 leading-relaxed">
                                {value.description}
                            </p>

                            {/* Decorative gradient */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        </div>
                    ))}
                </div>

                {/* Mission & Vision Section */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Mission */}
                    <div className="relative p-8 md:p-10 rounded-2xl bg-foreground overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-5">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full blur-3xl" />
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-green-500 rounded-full blur-3xl" />
                        </div>

                        <div className="relative z-10">
                            <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                                <Rocket className="w-7 h-7 text-primary" />
                            </div>
                            <h3 className="outfit-text text-2xl font-bold text-background mb-4">
                                Our Mission
                            </h3>
                            <p className="text-background/80 leading-relaxed">
                                To help businesses build digital solutions that perform over time — by combining strategy, design, technology, marketing, and AI to create systems that are practical, scalable, and built for real-world impact.
                            </p>
                        </div>
                    </div>

                    {/* Vision */}
                    <div className="relative p-8 md:p-10 rounded-2xl bg-gradient-to-br from-primary to-primary/80 overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
                            <div className="absolute bottom-0 right-0 w-48 h-48 bg-green-300 rounded-full blur-3xl" />
                        </div>

                        <div className="relative z-10">
                            <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-6">
                                <Eye className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="outfit-text text-2xl font-bold text-white mb-4">
                                Our Vision
                            </h3>
                            <p className="text-white/90 leading-relaxed">
                                To become a trusted long-term digital partner for businesses worldwide — empowering growth through thoughtful innovation, reliable software, and continuously evolving digital solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
