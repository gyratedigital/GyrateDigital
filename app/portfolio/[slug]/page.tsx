import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import NavigationMenuDemo from "../../components/Header";
import FooterSection from "../../components/FooterSection";
import BackButton from "@/components/BackButton";
import { workSection } from "../../data/workSection";
import { ArrowRight, ArrowUpRight } from "lucide-react";

type PortfolioRouteParams = {
    slug: string;
};

type PortfolioDetailsPageProps = {
    params: Promise<PortfolioRouteParams>;
};

export function generateStaticParams() {
    return workSection.map((work) => ({ slug: work.slug }));
}

export async function generateMetadata({ params }: PortfolioDetailsPageProps): Promise<Metadata> {
    const { slug } = await params;
    const project = workSection.find((item) => item.slug === slug);

    if (!project) {
        return {
            title: "Portfolio Project"
        };
    }

    const title = Array.isArray(project.title) ? project.title.join(" ") : project.title;

    return {
        title: `${title} | Portfolio`
    };
}

export default async function PortfolioDetailsPage({ params }: PortfolioDetailsPageProps) {
    const { slug } = await params;
    const project = workSection.find((item) => item.slug === slug);

    if (!project) {
        return notFound();
    }

    const formattedTitle = Array.isArray(project.title) ? project.title.join(" ") : project.title;

    const caseStudy = project.caseStudy;
    const summary = caseStudy?.summary ?? project.description;
    const challenge = caseStudy?.challenge;
    const solutionPoints = caseStudy?.solution ?? [];
    const resultsPoints = caseStudy?.results ?? [];
    const metrics = caseStudy?.metrics ?? [];
    const services = caseStudy?.services ?? project.tags ?? [];
    const deliverables = caseStudy?.deliverables ?? [];
    const gallery = caseStudy?.gallery ?? [];

    // Build visual gallery: prefer project.imageGallery, then case study gallery, then fallback to main image
    const galleryFromProject = (project as { imageGallery?: string[] })?.imageGallery ?? [];
    const galleryFromCaseStudy = gallery.map((item) => item.src).filter(Boolean);

    const combinedGallery = [...galleryFromProject, ...galleryFromCaseStudy].filter(Boolean);
    const filledGallery =
        combinedGallery.length >= 4
            ? combinedGallery.slice(0, 4)
            : [...combinedGallery, ...Array(4 - combinedGallery.length).fill(project.image)].slice(0, 4);

    const visualGallery = filledGallery.map((src) => ({ src, caption: formattedTitle }));
    const infoHighlights = [
        {
            label: "Timeline",
            value: caseStudy?.timeline
        },
        {
            label: "Platform",
            value: caseStudy?.platform
        },
        {
            label: "Deliverables",
            value: deliverables.slice(0, 2).join(" · ") || undefined
        }
    ].filter((item) => Boolean(item.value));

    const otherProjects = workSection.filter((item) => item.slug !== project.slug).slice(0, 2);

    return (
        <div className="w-full min-h-screen bg-background text-foreground">
            <NavigationMenuDemo />
            <div className="relative overflow-hidden bg-card">
                <div className="pointer-events-none absolute inset-x-0 top-[-320px] h-[520px] bg-gradient-to-b from-primary/30 via-transparent to-transparent opacity-70" />
                <div className="container mx-auto px-4 pt-24 pb-20">
                    <BackButton fallbackHref="/portfolio" />

                    <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr,0.9fr]">
                        <div className="flex flex-col justify-between gap-10">
                            <div className="space-y-6">
                                <p className="text-sm uppercase tracking-[0.28em] text-secondary">
                                    {project.category}
                                </p>
                                <h1 className="text-[42px] font-semibold leading-[1.05] text-foreground sm:text-[56px]">
                                    {formattedTitle}
                                </h1>
                                <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
                                    {summary}
                                </p>
                                {Array.isArray(project.tags) && project.tags.length > 0 && (
                                    <div className="flex flex-wrap gap-3">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="inline-flex items-center rounded-full border border-border/60 bg-muted/40 px-4 py-2 text-sm font-medium text-muted-foreground"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div className="flex flex-wrap items-center gap-4">
                                {project.liveUrl && (
                                    <Link
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex h-12 w-fit items-center gap-2 rounded-full border border-secondary/30 bg-card-dark px-6 text-sm font-semibold text-card-light transition-colors hover:bg-card-dark/80"
                                    >
                                        Visit Live Website
                                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                                    </Link>
                                )}
                                {services.length > 0 && (
                                    <div className="flex flex-wrap gap-2">
                                        {services.map((service) => (
                                            <span
                                                key={service}
                                                className="inline-flex items-center rounded-full border border-border/60 bg-muted/40 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground"
                                            >
                                                {service}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="relative flex items-center justify-start">
                            <div className="absolute inset-0 translate-y-[18%] rounded-full bg-primary/20 blur-[120px] opacity-40" />
                            <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card shadow-[0_24px_96px_rgba(8,16,12,0.1)]">
                                <Image
                                    src={project.image}
                                    alt={formattedTitle}
                                    width={820}
                                    height={580}
                                    className="h-full w-full min-h-[320px] object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative z-10 bg-background">
                <div className="container mx-auto px-4 py-20">
                    {metrics.length > 0 && (
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {metrics.map((metric) => (
                                <div
                                    key={`${metric.label}-${metric.value}`}
                                    className="rounded-[28px] border border-border/60 bg-card p-8 text-muted-foreground shadow-[0_16px_48px_rgba(8,16,12,0.08)]"
                                >
                                    <p className="text-xs uppercase tracking-[0.28em] text-secondary">{metric.label}</p>
                                    <p className="mt-4 text-4xl font-semibold text-card-foreground">{metric.value}</p>
                                    {metric.description && (
                                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{metric.description}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="mt-16 grid gap-12 lg:grid-cols-[1.2fr,0.8fr]">
                        <div className="space-y-10">
                            {(challenge || solutionPoints.length > 0) && (
                                <div className="rounded-[32px] border border-border/60 bg-card p-10 text-muted-foreground">
                                    <h3 className="text-2xl font-semibold text-card-foreground">Case Study</h3>
                                    <div className="mt-8 grid gap-10 sm:grid-cols-2">
                                        {challenge && (
                                            <div>
                                                <p className="text-xs uppercase tracking-[0.28em] text-secondary">Challenge</p>
                                                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{challenge}</p>
                                            </div>
                                        )}
                                        {solutionPoints.length > 0 && (
                                            <div>
                                                <p className="text-xs uppercase tracking-[0.28em] text-secondary">Solution</p>
                                                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground list-disc pl-5 marker:text-primary">
                                                    {solutionPoints.map((point) => (
                                                        <li key={point}>{point}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}

                            {resultsPoints.length > 0 && (
                                <div className="rounded-[32px] border border-border/60 bg-card p-10 text-muted-foreground">
                                    <h3 className="text-2xl font-semibold text-card-foreground">Impact</h3>
                                    <ul className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground list-disc pl-5 marker:text-primary">
                                        {resultsPoints.map((result) => (
                                            <li key={result}>{result}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {deliverables.length > 0 && (
                                <div className="rounded-[32px] border border-border/60 bg-card p-10 text-muted-foreground">
                                    <h3 className="text-2xl font-semibold text-card-foreground">Deliverables</h3>
                                    <div className="mt-6 flex flex-wrap gap-3">
                                        {deliverables.map((item) => (
                                            <span
                                                key={item}
                                                className="rounded-full border border-border/60 bg-muted/40 px-4 py-2 text-sm font-medium text-muted-foreground"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {infoHighlights.length > 0 && (
                            <div className="space-y-5">
                                <div className="rounded-3xl border border-border/60 bg-card p-8 text-muted-foreground">
                                    <h4 className="text-lg font-semibold text-card-foreground">Snapshot</h4>
                                    <div className="mt-6 space-y-5">
                                        {infoHighlights.map((highlight) => (
                                            <div key={highlight.label}>
                                                <p className="text-xs uppercase tracking-[0.22em] text-secondary">
                                                    {highlight.label}
                                                </p>
                                                <p className="mt-2 text-base font-semibold text-card-foreground">{highlight.value}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {project.liveUrl && (
                                    <div className="rounded-3xl border border-border/60 bg-card-dark p-8 text-card-light">
                                        <p className="text-sm leading-relaxed">
                                            “The refreshed experience finally reflects our craft. Customers find what they need faster,
                                            and the team can launch promotions in minutes.”
                                        </p>
                                        <Link
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-card-light"
                                        >
                                            Visit live experience
                                            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                                        </Link>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    {visualGallery.length > 0 && (
                        <div className="mt-20">
                            <h3 className="text-sm uppercase tracking-[0.28em] text-secondary">
                                Visual Gallery
                            </h3>
                            <div className="mt-6 grid gap-6 sm:grid-cols-2">
                                {visualGallery.map((item, idx) => (
                                    <div
                                        key={`${item.src}-${idx}`}
                                        className="overflow-hidden rounded-xl border border-border/60 bg-card aspect-[16/7.5]"
                                    >
                                        <Image
                                            src={item.src}
                                            alt={item.caption ?? formattedTitle}
                                            width={640}
                                            height={420}
                                            className="h-full w-full object-cover"
                                        />
                                        {item.caption && (
                                            <p className="px-6 py-4 text-sm text-muted-foreground">{item.caption}</p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {otherProjects.length > 0 && (
                        <div className="mt-20">
                            <h5 className="text-sm uppercase tracking-[0.28em] text-secondary">
                                Explore More Work
                            </h5>
                            <div className="mt-6 grid gap-8 sm:grid-cols-2">
                                {otherProjects.map((item) => (
                                    <Link
                                        key={item.id}
                                        href={`/portfolio/${item.slug}`}
                                        className="group rounded-[28px] border border-border/60 bg-card p-8 text-card-foreground transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(8,16,12,0.12)]"
                                    >
                                        <p className="text-xs uppercase tracking-[0.28em] text-secondary">
                                            {item.category}
                                        </p>
                                        <h6 className="mt-4 text-xl font-semibold text-card-foreground">
                                            {Array.isArray(item.title) ? item.title.join(" ") : item.title}
                                        </h6>
                                        <p className="mt-3 text-sm text-muted-foreground">
                                            {item.description}
                                        </p>
                                        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:text-card-foreground">
                                            View Case Study
                                            <ArrowRight className="h-4 w-4" aria-hidden="true" />
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <FooterSection />
        </div>
    );
}

