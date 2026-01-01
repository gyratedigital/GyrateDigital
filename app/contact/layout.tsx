import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | Gyrate Digital ",
    description: "Get in touch with Gyrate Digital. We are eager to hear about your project and help you achieve your digital goals.",
};

export default function ContactLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
