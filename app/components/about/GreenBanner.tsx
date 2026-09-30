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
      <h2 className="section-heading tracking-tight text-background">
        Your AI Engineering Partner
      </h2>

      {/* Paragraph */}
      <p className="mt-6 max-w-5xl mx-auto text-lg text-background/80">
        At Gyrate Digital, we focus on building AI systems that perform in production. We align models, agents, data, and product delivery so businesses can automate, assist customers, and ship intelligent features with confidence. Rather than isolated experiments, we take ownership of the full journey — from strategy and prototyping to fine-tuning, integration, and long-term improvement.
      </p>
    </section>
  );
}
