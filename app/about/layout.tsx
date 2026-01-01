import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | Gyrate Digital",
    description: "Learn about Gyrate Digital - a passionate team of designers and developers dedicated to creating impactful digital experiences.",
};

export default function AboutLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
