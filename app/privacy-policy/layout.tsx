import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | Gyrate Digital",
    description: "Read our Privacy Policy to understand how we collect, use, and protect your personal information.",
    alternates: {
        canonical: "https://gyratedigital.com/privacy-policy",
    },
};

export default function PrivacyPolicyLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
