"use client";

import Image from "next/image";
import { workSection } from "../data/workSection";
import NavigationMenuDemo from "../components/Header";
import PortfolioBanner from "../components/portfolio/Banner";
import GreenBanner from "../components/portfolio/GreenBanner";

export default function PortfolioPage() {
  console.log("workSection data:", workSection);

  return (
      <div className="w-full">
        <NavigationMenuDemo />
        <PortfolioBanner />
        <GreenBanner />
        <div className="flex flex-col items-center pt-[80px]">
        {/* <h1 className="text-3xl font-bold mb-6">Portfolio Page</h1> */}

        {Array.isArray(workSection) && workSection.length > 0 ? (
            workSection.map((work) => (
            <div
                key={work.id}
                className="group work-card border-2 border-secondary flex sm:flex-row flex-col items-center relative w-full sm:max-w-[80%] max-w-full max-h-[60vh] bg-secondary rounded-2xl shadow-md overflow-hidden mb-10"
            >
                <div className="absolute inset-0 bg-secondary/90 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 rounded-xl"></div>
                    <div className="relative z-10 p-7 pb-4 sm:w-2/5 w-full">
                        <p className="text-card-light text-xs mb-5">{work.category}</p>
                        <h3 className="text-card-light text-2xl font-semibold mb-3">
                            {(Array.isArray(work.title) ? work.title : [work.title]).map(
                                (ti, i) => (
                                    <p
                                        key={i}
                                        className="outfit-text text-card-light text-2xl font-semibold mb-0"
                                        >
                                        {ti}
                                    </p>
                                )
                            )}
                        </h3>
                        <p className="text-card-light text-md font-normal">
                            {work.description}
                        </p>
                        </div>
                        <Image
                            src={work.image}
                            alt={
                                Array.isArray(work.title) ? work.title.join(" ") : work.title
                            }
                            width={800}
                            height={600}
                            className="sm:w-3/5 w-full h-auto object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 flex items-center justify-center text-card-light text-lg font-semibold opacity-0 translate-y-5 transition-all duration-700 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 cursor-pointer z-20">
                            Learn More →
                        </div>
                    </div>
                    ))
                ) : (
                <p>No portfolio items found.</p>
            )}
        </div>
    </div>
  );
}
