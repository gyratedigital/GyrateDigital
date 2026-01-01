import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ServiceCTAProps = {
  heading: string;
  description: string;
};

export default function ServiceCTA({ heading, description }: ServiceCTAProps) {
  return (
    <section className="container mx-auto px-4 pb-16">
      <div className="max-w-4xl mx-auto rounded-2xl border border-foreground/10 bg-background/80 p-12 text-center">
        <h2 className="text-3xl font-semibold text-foreground mb-4">
          {heading}
        </h2>
        <p className="text-foreground/70 text-lg mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:-translate-y-0.5 hover:shadow-primary/30"
        >
          Get Started Today
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

