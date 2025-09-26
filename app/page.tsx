'use client'

import AboutSection from "./components/AboutSection";
import BlogSection from "./components/BlogSection";
import BrandsSection from "./components/BrandsSection";
import CtaSection from "./components/CtaSection";
import FeaturedCategories from "./components/FeaturedCategoryCards";
import FooterSection from "./components/FooterSection";
import NavigationMenuDemo from "./components/Header";
import HeroSection from "./components/HomeBanner";
import QualitySection from "./components/QualitySection";
import ServicesSection from "./components/ServicesSection";
import WorkSection from "./components/WorkSection";
// import ThreeBackground from "./components/ThreeBackground";


export default function Home() {

  return (
    <div className="w-full min-h-screen bg-background/50">
      {/* <ThreeBackground /> */}
      <div className="header-banner bg-[url('/spiral-bg.png')] bg-cover bg-center bg-no-repeat">
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
