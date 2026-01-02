// components/GreenBanner.tsx
import { Button } from "@/components/ui/button";

export default function GreenBanner() {
  return (
    <section className="bg-foreground py-16 px-6 text-center">
      {/* Small Button */}
      <Button
        variant="secondary"
        className="mb-6 rounded-full bg-green-500/40 text-background hover:bg-green-500/60"
      >
        How We Create Value
      </Button>

      {/* Heading */}
      <h2 className="text-3xl font-bold tracking-tight text-background sm:text-4xl">
        Your Premier Digital Solutions Partner
      </h2>

      {/* Paragraph */}
      <p className="mt-6 max-w-5xl mx-auto text-lg text-background/80">
        At Gyrate Digital, we focus on building digital solutions that perform over time. By aligning strategy, design, development, marketing, and AI-enabled tools, we help businesses create systems that are usable, scalable, and continuously evolving. Rather than offering isolated services, we take ownership of the full journey — combining strategy, design, software development, SaaS expertise, and AI capabilities to deliver long-term value.
      </p>
    </section>
  );
}
