import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog & Insights | Gyrate Digital",
    description:
        "Insights on AI, machine learning, agentic systems, and product engineering from Gyrate Digital.",
};

export default function BlogLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
