import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Services | Gyrate Digital",
    description: "Explore our comprehensive digital services including Web Development, Mobile Apps, UI/UX Design, and Digital Marketing.",
};

export default function ServicesLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
