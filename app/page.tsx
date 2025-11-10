'use client'

import AboutSection from "./components/AboutSection";
import BlogSection from "./components/BlogSection";
import BrandsSection from "./components/BrandsSection";
import CtaSection from "./components/CtaSection";
import FeaturedCategories from "./components/FeaturedCategoryCards";
import FooterSection from "./components/FooterSection";
import NavigationMenuDemo from "./components/Header";
import LightRays from "./components/LightRays";
import HeroSection from "./components/HomeBanner";
import QualitySection from "./components/QualitySection";
import ServicesSection from "./components/ServicesSection";
import WorkSection from "./components/WorkSection";
// import HaloBackground from "./components/ThreeBackground";
// import BackgroundVideo from "./components/BackgroundVideo";


export default function Home() {

  return (
    <div className="w-full min-h-screen bg-background/50">
      {/* Background Video */}
      {/* <BackgroundVideo /> */}
      {/* <HaloBackground /> */}
      <div className="header-banner relative overflow-hidden bg-[url('/spiral-bg.png')] bg-cover bg-center bg-no-repeat">
        <LightRays
          raysOrigin="top-center-offset"
          raysColor="#00ffff"
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
      <FeaturedCategories />
      <AboutSection />
      <ServicesSection />
      <WorkSection />
      <QualitySection />
      <BrandsSection />
      <BlogSection />
      <CtaSection />
      <FooterSection />
    </div>
  );
}
