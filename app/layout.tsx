import type { Metadata } from "next";
import { Outfit, Roboto_Flex } from "next/font/google";
import "./globals.css";
import LenisProvider from "./components/LenisProvider";
import { ThemeProvider } from "./components/ThemeProvider";
import JsonLd from "./components/JsonLd";
import { organizationSchema } from "./data/schemas";
import { Toaster } from "sonner";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const roboto = Roboto_Flex({
  variable: "--font-roboto-flex",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Gyrate Digital | All-In-One Digital Agency for Design & Marketing",
    template: "%s | Gyrate Digital"
  },
  description: "Gyrate Digital is a premier creative agency specializing in design, development, and digital innovation. Helping brands grow through technology and marketing.",
  keywords: ["Digital Agency", "Web Development", "UI/UX Design", "Digital Marketing", "Gyrate Digital", "Branding"],
  authors: [{ name: "Gyrate Digital" }],
  creator: "Gyrate Digital",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gyratedigital.com",
    title: "Gyrate Digital | All-In-One Digital Agency",
    description: "Empowering brands through design, marketing, and technology.",
    siteName: "Gyrate Digital",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gyrate Digital | All-In-One Digital Agency",
    description: "Empowering brands through design, marketing, and technology.",
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
        </ThemeProvider>
      </body>
    </html>
  );
}