import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { WhatsAppFloat } from "@/components/common/whatsapp-float";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display-face",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.role} | Websites, Shopify & Web Apps`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Full-stack developer building responsive business websites, Shopify storefronts, and custom MERN web applications. Available for selected freelance projects.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    url: "/",
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description:
      "Business websites, Shopify storefronts, and custom web applications built for real business needs.",
  },
  twitter: { card: "summary_large_image" },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
      { url: "/logo.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#090a0f' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      id="top"
      className={`${inter.variable} ${display.variable}`}
    >
      <body className="flex min-h-dvh flex-col antialiased">
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <WhatsAppFloat />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
