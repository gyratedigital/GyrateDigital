// components/GreenBanner.tsx
import { Button } from "@/components/ui/button";

export default function GreenBanner() {
  return (
    <section className="bg-primary py-16 px-6 text-center">
      {/* Small Button */}
      <Button
        variant="secondary"
        className="mb-6 rounded-full bg-green-500/40 text-black hover:bg-green-500/60"
      >
        Know us better
      </Button>

      {/* Heading */}
      <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
        Your Premier Digital Marketing Agency
      </h2>

      {/* Paragraph */}
      <p className="mt-6 max-w-5xl mx-auto text-lg text-black/80">
        At Gyrate Digital Agency, we are your dedicated problem solvers,
        innovators and creators of remarkable design solutions. As a leading
        Digital Marketing Agency, we go beyond design to offer comprehensive
        solutions. From impactful social media campaigns to search engine
        optimization SEO strategies, we are committed to driving your brands
        success in the digital realm.
      </p>
    </section>
  );
}
