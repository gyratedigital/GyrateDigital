'use client'

import AboutSection from "./components/AboutSection";
import FeaturedCategories from "./components/FeaturedCategoryCards";
import NavigationMenuDemo from "./components/Header";
import HeroSection from "./components/HomeBanner";
import ServicesSection from "./components/ServicesSection";
import WorkSection from "./components/WorkSection";

export default function Home() {

  return (
    <div className="bg-background w-full min-h-screen">
      <div className="header-banner bg-[url('/spiral-bg.png')] bg-cover bg-center bg-no-repeat">
        <NavigationMenuDemo />
        <HeroSection />
      </div>
      <FeaturedCategories />
      <AboutSection />
      <ServicesSection />
      <WorkSection />
    </div>
  );
}
