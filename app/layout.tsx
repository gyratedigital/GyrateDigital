import type { Metadata } from "next";
import { Outfit, Roboto_Flex } from "next/font/google";
import "./globals.css";
import LenisProvider from "./components/LenisProvider";
import { ThemeProvider } from "./components/ThemeProvider";
import JsonLd from "./components/JsonLd";
import { organizationSchema } from "./data/schemas";
import { Toaster } from "sonner";
import Chatbot from "./components/Chatbot";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const roboto = Roboto_Flex({
  variable: "--font-roboto-flex",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gyratedigital.com"),

  title: {
    default: "Gyrate Digital | All-In-One Digital Agency for Design & Marketing",
    template: "",
  },

  description:
    "Gyrate Digital is a full-service digital agency offering web design, development, UI/UX, branding, and digital marketing to help businesses grow and scale online.",

  keywords: [
    "Digital Agency",
    "Web Design Agency",
    "Web Development",
    "UI UX Design",
    "Branding Agency",
    "Digital Marketing Services",
    "Gyrate Digital",
  ],

  authors: [{ name: "Gyrate Digital", url: "https://gyratedigital.com" }],
  creator: "Gyrate Digital",
  publisher: "Gyrate Digital",

  category: "Technology",
  applicationName: "Gyrate Digital",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://gyratedigital.com",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gyratedigital.com",
    title: "Gyrate Digital | Creative Design & Digital Marketing Agency",
    description:
      "We help brands grow with modern design, scalable development, and data-driven digital marketing.",
    siteName: "Gyrate Digital",
    images: [
      {
        url: "/gy-logo.svg", // Logo as OG image
        width: 1200,
        height: 630,
        alt: "Gyrate Digital Logo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Gyrate Digital | Digital Agency for Growth-Focused Brands",
    description:
      "Design, development & marketing solutions crafted to scale your business.",
    images: ["/gy-logo.svg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <JsonLd data={organizationSchema} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('gyrate-theme') || 'dark';
                document.documentElement.classList.add(theme);
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className={`${outfit.variable} ${roboto.variable} antialiased bg-background`} suppressHydrationWarning>
        <ThemeProvider>
          <Toaster position="bottom-right" richColors />
          <LenisProvider>
            {children}
          </LenisProvider>
          <Chatbot />
        </ThemeProvider>
      </body>
    </html>
  );
}