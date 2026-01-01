import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";

import FooterSection from "../../components/FooterSection";
import NavigationMenuDemo from "../../components/Header";
import NestedServiceCard from "../../components/shared/NestedServiceCard";
import ServiceCTA from "../../components/shared/ServiceCTA";
import { servicesSection, Service } from "../../data/servicesSection";

import { Metadata } from "next";

type ServiceParams =
  | { params: { slug: string } }
  | { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: ServiceParams): Promise<Metadata> {
  const resolvedParams = "then" in params ? await params : params;
  const slug = resolvedParams.slug;

  const service = servicesSection.find((item) => item.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  const fullTitle = service.title.join("").replace(/\s+/g, " ").trim();

  return {
    title: `${fullTitle} | Services`,
    description: service.description,
  };
}

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

  // Generate dynamic CTA content based on service
  const getCTAContent = (service: Service) => {
    const serviceTitle = fullTitle;
    const serviceCategory = service.category.toLowerCase();

    // Generate heading based on service type
    let heading = `Ready to Get Started with ${serviceTitle}?`;

    // Generate description based on service category
    let description = `Let's discuss how ${serviceTitle.toLowerCase()} can help you achieve your project goals and drive measurable results for your business.`;

    // Customize based on service category
    if (serviceCategory.includes("ai") || serviceCategory.includes("genai")) {
      heading = `Ready to Transform Your Business with ${serviceTitle}?`;
      description = `Let's explore how ${serviceTitle.toLowerCase()} can automate your workflows, enhance user experiences, and unlock new possibilities for your business.`;
    } else if (serviceCategory.includes("mobile")) {
      heading = `Ready to Build Your Mobile App?`;
      description = `Let's discuss how our ${serviceTitle.toLowerCase()} services can help you create engaging mobile experiences that connect with your users and drive business growth.`;
    } else if (serviceCategory.includes("web") || serviceCategory.includes("ecommerce")) {
      heading = `Ready to Launch Your Web Project?`;
      description = `Let's explore how our ${serviceTitle.toLowerCase()} solutions can help you build a powerful online presence that converts visitors into customers.`;
    } else if (serviceCategory.includes("cloud") || serviceCategory.includes("devops")) {
      heading = `Ready to Optimize Your Infrastructure?`;
      description = `Let's discuss how our ${serviceTitle.toLowerCase()} services can help you deploy, scale, and maintain your applications with confidence.`;
    } else if (serviceCategory.includes("ui") || serviceCategory.includes("ux") || serviceCategory.includes("design")) {
      heading = `Ready to Elevate Your User Experience?`;
      description = `Let's explore how our ${serviceTitle.toLowerCase()} services can help you create intuitive, beautiful interfaces that users love.`;
    } else if (serviceCategory.includes("staff") || serviceCategory.includes("talent")) {
      heading = `Ready to Scale Your Team?`;
      description = `Let's discuss how ${serviceTitle.toLowerCase()} can help you achieve your project goals with the right talent at the right time.`;
    }

    return { heading, description };
  };

  const ctaContent = getCTAContent(service);

  return (
    <div className="w-full relative">
      <NavigationMenuDemo />

      <div className="relative container mx-auto px-4 pt-[100px] pb-12 z-10">
        <div className="relative overflow-hidden bg-background/40 backdrop-blur z-10">
          {/* <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: `url(${service.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          /> */}
          {/* <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/92 to-background/90" /> */}

          <div className="relative z-10 grid gap-8 lg:grid-cols-[1.3fr,1fr] items-center pt-14 pb-10">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-primary">
                {service.category}
              </div>
              <h1 className="outfit-text text-4xl md:text-5xl font-semibold text-foreground">
                {fullTitle}
              </h1>
              <p className="text-foreground/70 text-lg leading-relaxed max-w-2xl">
                {service.description}
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2 relative z-50 pointer-events-auto">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:-translate-y-0.5 hover:shadow-primary/30 relative z-50 pointer-events-auto"
                >
                  Start a project
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary relative z-50 pointer-events-auto"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to all services
                </Link>
              </div>
            </div>

            <div className="relative h-80 w-2/3 aspect-[16/9] overflow-hidden rounded-xl border border-foreground/10 bg-foreground/5">
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

        <div className="flex flex-col gap-8 ">
          {service.nestedServices.map((item) => (
            <NestedServiceCard
              key={item.title}
              service={item}
              fallbackImage={service.image}
            />
          ))}
        </div>
      </section>

      <ServiceCTA heading={ctaContent.heading} description={ctaContent.description} />

      <FooterSection />
    </div>
  );
}

