import AboutSection from "./components/AboutSection";
import BlogSection from "./components/BlogSection";
import BrandsSection from "./components/BrandsSection";
import CtaSection from "./components/CtaSection";
import FeaturedCategories from "./components/FeaturedCategoryCards";
import FooterSection from "./components/FooterSection";
import NavigationMenuDemo from "./components/Header";
import DesktopLightRays from "./components/DesktopLightRays";
import HeroSection from "./components/HomeBanner";
import QualitySection from "./components/QualitySection";
import ServicesSection from "./components/ServicesSection";
import DedicatedTeamSection from "./components/DedicatedTeamSection";
import WorkSection from "./components/WorkSection";

// This is a commit from the Codeturtle AI
import JsonLd from "./components/JsonLd";
import { homePageSchema } from "./data/schemas";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://gyratedigital.com",
  },
};

/**
 * Pinned GSAP sections must NOT live inside `display:flex` + `gap`.
 * Flex gap breaks pin-spacer math → bounce/overlap until a resize refresh.
 * Use block flow + margin on non-pinned blocks only.
 */
export default function Home() {
  return (
    <div className="w-full min-h-screen bg-background/50">
      <JsonLd data={homePageSchema} />
      <div className="header-banner relative overflow-hidden bg-[url('/spiral-bg.png')] bg-contain bg-center bg-no-repeat md:bg-cover">
        <DesktopLightRays
          raysOrigin="top-center-offset"
          raysColor="#89e9a4"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
        />
        <NavigationMenuDemo />
        <HeroSection />
      </div>

      <div className="py-[100px]">
        <div className="mb-[100px]">
          <BrandsSection />
        </div>
        <ServicesSection />
        <div className="my-[100px]">
          <AboutSection />
        </div>
        <WorkSection />
        <FeaturedCategories />
        <div className="mt-[100px] flex flex-col gap-[100px]">
          <DedicatedTeamSection />
          <QualitySection />
          <BlogSection />
          <CtaSection />
        </div>
      </div>

      <FooterSection />
    </div>
  );
}
