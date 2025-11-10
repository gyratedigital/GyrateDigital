import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import NavigationMenuDemo from "../../components/Header";
import FooterSection from "../../components/FooterSection";
import { workSection } from "../../data/workSection";

type PortfolioDetailsPageProps = {
    params: {
        slug: string;
    };
};

export function generateStaticParams() {
    return workSection.map((work) => ({ slug: work.slug }));
}

export function generateMetadata({ params }: PortfolioDetailsPageProps): Metadata {
    const project = workSection.find((item) => item.slug === params.slug);

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

export default function PortfolioDetailsPage({ params }: PortfolioDetailsPageProps) {
    const project = workSection.find((item) => item.slug === params.slug);

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
            <div className="relative overflow-hidden bg-bg-background/50">
                <div className="pointer-events-none absolute inset-x-0 top-[-320px] h-[520px] bg-gradient-to-b from-primary/30 via-transparent to-transparent opacity-70 dark:from-[#10241A]" />
                <div className="container mx-auto px-4 pt-24 pb-20">
                    <Link
                        href="/portfolio"
                        className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground dark:text-[#7E9189] dark:hover:text-white"
                    >
                        <span aria-hidden="true">←</span>
                        Back to portfolio
                    </Link>

                    <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr,0.9fr]">
                        <div className="flex flex-col justify-between gap-10">
                            <div className="space-y-6">
                                <p className="text-sm uppercase tracking-[0.28em] text-secondary dark:text-[#6F8178]">
                                    {project.category}
                                </p>
                                <h1 className="text-[42px] font-semibold leading-[1.05] text-foreground sm:text-[56px]">
                                    {formattedTitle}
                                </h1>
                                <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground dark:text-[#B1C0B8]">
                                    {summary}
                                </p>
                                {Array.isArray(project.tags) && project.tags.length > 0 && (
                                    <div className="flex flex-wrap gap-3">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="inline-flex items-center rounded-full border border-border/60 bg-muted/40 px-4 py-2 text-sm font-medium text-muted-foreground dark:border-[#1F2D25] dark:bg-[#101D17] dark:text-[#DCE7E1]"
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
                                        className="inline-flex h-12 w-fit items-center gap-2 rounded-full border border-secondary/30 bg-card-dark px-6 text-sm font-semibold text-card-light transition-colors hover:bg-card-dark/80 dark:border-[#1F2D25] dark:bg-white dark:text-[#0C130F] dark:hover:bg-[#E0EFE7]"
                                    >
                                        Visit Live Website
                                        <span aria-hidden="true">↗</span>
                                    </Link>
                                )}
                                {services.length > 0 && (
                                    <div className="flex flex-wrap gap-2">
                                        {services.map((service) => (
                                            <span
                                                key={service}
                                                className="inline-flex items-center rounded-full border border-border/60 bg-muted/40 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground dark:border-[#1F2D25] dark:bg-[#101D17] dark:text-[#A7B6AE]"
                                            >
                                                {service}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="relative flex items-center justify-center">
                            <div className="absolute inset-0 translate-y-[18%] rounded-full bg-primary/20 blur-[120px] opacity-40 dark:bg-[#133023]" />
                            <div className="relative overflow-hidden rounded-[32px] border border-border/60 bg-card-light shadow-[0_24px_96px_rgba(8,16,12,0.1)] dark:border-[#1C2A23] dark:bg-[#121C16] dark:shadow-[0_40px_160px_rgba(5,10,8,0.4)]">
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
                                    className="rounded-[28px] border border-border/60 bg-card-light p-8 text-muted-foreground shadow-[0_16px_48px_rgba(8,16,12,0.08)] dark:border-[#132019] dark:bg-[#0B1410] dark:text-[#B1C0B8] dark:shadow-[0_24px_72px_rgba(5,10,8,0.3)]"
                                >
                                    <p className="text-xs uppercase tracking-[0.28em] text-secondary dark:text-[#6F8178]">{metric.label}</p>
                                    <p className="mt-4 text-4xl font-semibold text-foreground dark:text-white">{metric.value}</p>
                                    {metric.description && (
                                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground dark:text-[#CEDBD4]">{metric.description}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="mt-16 grid gap-12 lg:grid-cols-[1.2fr,0.8fr]">
                        <div className="space-y-10">
                            {(challenge || solutionPoints.length > 0) && (
                                <div className="rounded-[32px] border border-border/60 bg-card-light p-10 text-muted-foreground dark:border-[#132019] dark:bg-[#08110D] dark:text-[#B1C0B8]">
                                    <h3 className="text-2xl font-semibold text-foreground dark:text-white">Case Study</h3>
                                    <div className="mt-8 grid gap-10 sm:grid-cols-2">
                                        {challenge && (
                                            <div>
                                                <p className="text-xs uppercase tracking-[0.28em] text-secondary dark:text-[#6F8178]">Challenge</p>
                                                <p className="mt-4 text-sm leading-relaxed text-muted-foreground dark:text-[#CEDBD4]">{challenge}</p>
                                            </div>
                                        )}
                                        {solutionPoints.length > 0 && (
                                            <div>
                                                <p className="text-xs uppercase tracking-[0.28em] text-secondary dark:text-[#6F8178]">Solution</p>
                                                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground list-disc pl-5 marker:text-primary dark:text-[#CEDBD4] dark:marker:text-[#7FA291]">
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
                                <div className="rounded-[32px] border border-border/60 bg-card-light p-10 text-muted-foreground dark:border-[#132019] dark:bg-[#0B1410] dark:text-[#B1C0B8]">
                                    <h3 className="text-2xl font-semibold text-foreground dark:text-white">Impact</h3>
                                    <ul className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground list-disc pl-5 marker:text-primary dark:text-[#CEDBD4] dark:marker:text-[#7FA291]">
                                        {resultsPoints.map((result) => (
                                            <li key={result}>{result}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {deliverables.length > 0 && (
                                <div className="rounded-[32px] border border-border/60 bg-card-light p-10 text-muted-foreground dark:border-[#132019] dark:bg-[#08110D] dark:text-[#B1C0B8]">
                                    <h3 className="text-2xl font-semibold text-foreground dark:text-white">Deliverables</h3>
                                    <div className="mt-6 flex flex-wrap gap-3">
                                        {deliverables.map((item) => (
                                            <span
                                                key={item}
                                                className="rounded-full border border-border/60 bg-muted/40 px-4 py-2 text-sm font-medium text-muted-foreground dark:border-[#1F2D25] dark:bg-[#101D17] dark:text-[#DCE7E1]"
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
                                <div className="rounded-3xl border border-border/60 bg-card-light p-8 text-muted-foreground dark:border-[#1C2A23] dark:bg-[#0B1410] dark:text-[#B1C0B8]">
                                    <h4 className="text-lg font-semibold text-foreground dark:text-white">Snapshot</h4>
                                    <div className="mt-6 space-y-5">
                                        {infoHighlights.map((highlight) => (
                                            <div key={highlight.label}>
                                                <p className="text-xs uppercase tracking-[0.22em] text-secondary dark:text-[#6F8178]">
                                                    {highlight.label}
                                                </p>
                                                <p className="mt-2 text-base font-semibold text-foreground dark:text-white">{highlight.value}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {project.liveUrl && (
                                    <div className="rounded-3xl border border-border/60 bg-card-light p-8 text-muted-foreground dark:border-[#1C2A23] dark:bg-[#0C1612] dark:text-[#DCE7E1]">
                                        <p className="text-sm leading-relaxed">
                                            “The refreshed experience finally reflects our craft. Customers find what they need faster,
                                            and the team can launch promotions in minutes.”
                                        </p>
                                        <Link
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground dark:text-white"
                                        >
                                            Visit live experience
                                            <span aria-hidden="true">↗</span>
                                        </Link>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    {gallery.length > 0 && (
                        <div className="mt-20">
                            <h3 className="text-sm uppercase tracking-[0.28em] text-secondary dark:text-[#6F8178]">
                                Visual Gallery
                            </h3>
                            <div className="mt-6 grid gap-6 sm:grid-cols-2">
                                {gallery.map((item) => (
                                    <div
                                        key={item.src}
                                        className="overflow-hidden rounded-[28px] border border-border/60 bg-card-light dark:border-[#132019] dark:bg-[#0B1410]"
                                    >
                                        <Image
                                            src={item.src}
                                            alt={item.caption ?? formattedTitle}
                                            width={640}
                                            height={420}
                                            className="h-full w-full object-cover"
                                        />
                                        {item.caption && (
                                            <p className="px-6 py-4 text-sm text-muted-foreground dark:text-[#B1C0B8]">{item.caption}</p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {otherProjects.length > 0 && (
                        <div className="mt-20">
                            <h5 className="text-sm uppercase tracking-[0.28em] text-secondary dark:text-[#6F8178]">
                                Explore More Work
                            </h5>
                            <div className="mt-6 grid gap-8 sm:grid-cols-2">
                                {otherProjects.map((item) => (
                                    <Link
                                        key={item.id}
                                        href={`/portfolio/${item.slug}`}
                                        className="group rounded-[28px] border border-border/60 bg-card-light p-8 text-foreground transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(8,16,12,0.12)] dark:border-[#132019] dark:bg-[#0B1410] dark:text-white dark:hover:shadow-[0_20px_60px_rgba(5,10,8,0.35)]"
                                    >
                                        <p className="text-xs uppercase tracking-[0.28em] text-secondary dark:text-[#6F8178]">
                                            {item.category}
                                        </p>
                                        <h6 className="mt-4 text-xl font-semibold text-foreground dark:text-white">
                                            {Array.isArray(item.title) ? item.title.join(" ") : item.title}
                                        </h6>
                                        <p className="mt-3 text-sm text-muted-foreground dark:text-[#B1C0B8]">
                                            {item.description}
                                        </p>
                                        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:text-foreground dark:text-[#DCE7E1] dark:group-hover:text-white">
                                            View Case Study
                                            <span aria-hidden="true">→</span>
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

