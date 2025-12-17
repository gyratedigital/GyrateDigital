import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";

import FooterSection from "../../components/FooterSection";
import NavigationMenuDemo from "../../components/Header";
import { servicesSection, Service } from "../../data/servicesSection";

type ServiceParams =
  | { params: { slug: string } }
  | { params: Promise<{ slug: string }> };

export default async function ServiceDetailPage({ params }: ServiceParams) {
  const resolvedParams = "then" in params ? await params : params;
  const slug = resolvedParams.slug;

  const service: Service | undefined = servicesSection.find(
    (item) => item.slug === slug
  );

  if (!service) {
    return notFound();
  }

  const fullTitle = service.title.join("").replace(/\s+/g, " ").trim();

  return (
    <div className="w-full">
      <NavigationMenuDemo />

      <div className="relative container mx-auto px-4 pt-[100px] pb-12">
        <div className="relative overflow-hidden rounded-2xl border border-foreground/10 bg-background/40 backdrop-blur">
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: `url(${service.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/92 to-background/90" />

          <div className="relative z-10 grid gap-8 lg:grid-cols-[1.3fr,1fr] items-center px-6 py-10 md:px-10 md:py-14">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-primary">
                {service.category}
              </div>
              <h1 className="outfit-text text-4xl md:text-5xl font-semibold text-foreground">
                {fullTitle}
              </h1>
              <p className="text-foreground/70 text-lg leading-relaxed">
                {service.description}
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:-translate-y-0.5 hover:shadow-primary/30"
                >
                  Start a project
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to all services
                </Link>
              </div>
            </div>

            <div className="relative h-96 w-full overflow-hidden rounded-xl border border-foreground/10 bg-foreground/5">
              <Image
                src={service.image}
                alt={fullTitle}
                fill
                sizes="(min-width: 1024px) 520px, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <section className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-semibold text-foreground">
            What&apos;s included
          </h2>
          <p className="text-foreground/70 mt-3">
            The nested services below outline how we deliver this capability end-to-end.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {service.nestedServices.map((item) => (
            <div
              key={item.title}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-foreground/10 bg-background/80 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative h-40 w-full overflow-hidden">
                <Image
                  src={item.image || service.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 320px, 50vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-5">
                <div className="flex items-center gap-2 text-primary text-sm font-semibold">
                  <CheckCircle className="h-4 w-4" />
                  Nested service
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <FooterSection />
    </div>
  );
}

