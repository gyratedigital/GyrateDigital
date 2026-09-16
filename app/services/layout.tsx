import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Services | Gyrate Digital",
    description: "Explore our comprehensive digital services including Web Development, Mobile Apps, UI/UX Design, and Digital Marketing.",
    alternates: {
        canonical: "https://gyratedigital.com/services",
    },
};

export default function ServicesLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
