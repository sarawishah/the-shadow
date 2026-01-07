import type { Metadata } from "next";
import {
  Cinzel,
  Manrope,
  Noto_Kufi_Arabic,
  Noto_Sans_Arabic,
} from "next/font/google";
import "./globals.css";
import { siteContent } from "@/content/siteContent";

const headingFont = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const bodyFont = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const arabicHeadingFont = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
  variable: "--font-ar-heading",
  display: "swap",
});

const arabicBodyFont = Noto_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ar-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shadowjo.com"),
  title: siteContent.en.meta.title,
  description: siteContent.en.meta.description,
  applicationName: "THE SHADOW",
  keywords: [
    "CCTV systems Jordan",
    "camera installation Amman",
    "surveillance systems Jordan",
    "CCTV maintenance",
    "security cameras",
    "THE SHADOW",
  ],
  openGraph: {
    title: siteContent.en.meta.title,
    description: siteContent.en.meta.description,
    url: "https://shadowjo.com",
    siteName: "THE SHADOW",
    type: "website",
    locale: "en_JO",
    images: [
      {
        url: "/assets/logo-render-2.jpeg",
        width: 1200,
        height: 630,
        alt: "THE SHADOW",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteContent.en.meta.title,
    description: siteContent.en.meta.description,
    images: ["/assets/logo-render-2.jpeg"],
  },
};

export const viewport = {
  themeColor: "#202020",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${headingFont.variable} ${bodyFont.variable} ${arabicHeadingFont.variable} ${arabicBodyFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
