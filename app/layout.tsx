import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import LenisProvider from "./components/LenisProvider";
import { ThemeProvider } from "./components/ThemeProvider";
import JsonLd from "./components/JsonLd";
import { organizationSchema } from "./data/schemas";
import { Toaster } from "sonner";
import LazyChatbot from "./components/LazyChatbot";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gyratedigital.com"),

  title: {
    default: "Gyrate Digital | AI Development Solutions, ML & Agentic Systems",
    template: "%s",
  },

  description:
    "Gyrate Digital builds custom AI solutions, trains models on your data, and develops agentic AI systems to help your business automate.",

  keywords: [
    "AI Agency",
    "AI Engineering",
    "Machine Learning",
    "Deep Learning",
    "Agentic AI",
    "Custom AI Models",
    "Model Training",
    "MLOps",
    "AI Engineers",
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

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gyratedigital.com",
    title: "Gyrate Digital | AI Development Solutions, ML & Agentic Systems",
    description:
      "Custom AI solutions, model training, and agentic AI systems that help businesses automate.",
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
    title: "Gyrate Digital | AI Development Solutions, ML & Agentic Systems",
    description:
      "Custom AI solutions, model training, and agentic AI systems that help businesses automate.",
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
      <body className={`${outfit.variable} ${GeistSans.variable} antialiased bg-background`} suppressHydrationWarning>
        <ThemeProvider>
          <Toaster position="bottom-right" richColors />
          <LenisProvider>
            {children}
          </LenisProvider>
          <LazyChatbot />
        </ThemeProvider>
      </body>
    </html>
  );
}