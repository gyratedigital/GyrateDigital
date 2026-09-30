import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | Gyrate Digital",
    description:
        "Learn about Gyrate Digital — AI engineers building intelligent systems: agentic AI, model fine-tuning, generative AI, chatbots, and production AI products.",
    alternates: {
        canonical: "https://gyratedigital.com/about",
    },
};

export default function AboutLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
