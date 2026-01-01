import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog & Insights | Gyrate Digital",
    description: "Stay ahead with the latest insights, trends, and stories in digital design, development, and marketing from Gyrate Digital.",
};

export default function BlogLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
