import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cookie Policy | Gyrate Digital",
    description: "Understand how we use cookies and tracking technologies to improve your experience on our website.",
};

export default function CookiePolicyLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
