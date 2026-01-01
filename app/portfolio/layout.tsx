import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Portfolio | Gyrate Digital",
    description: "Browse our portfolio of success stories. See how we've helped businesses transform through innovative design and technology.",
};

export default function PortfolioLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
