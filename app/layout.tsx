import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { OG_IMAGE_URL } from "./lib/constants";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Sushi Truth - Cream Cheese Killed Sushi",
  description: "Exposing the systematic destruction of Japanese culinary artistry through the cream cheese conspiracy.",
  keywords: ["sushi", "traditional sushi", "cream cheese", "culinary authenticity", "Japanese cuisine"],
  authors: [{ name: "The Sushi Truth Project" }],
  openGraph: {
    title: "Sushi Truth - Cream Cheese Killed Sushi",
    description: "Exposing the systematic destruction of Japanese culinary artistry through the cream cheese conspiracy. 90% of 'sushi' rolls contain cream cheese.",
    type: "website",
    siteName: "Sushi Truth",
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "Traditional authentic sushi nigiri - the way sushi should be",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sushi Truth - Cream Cheese Killed Sushi",
    description: "Exposing the systematic destruction of Japanese culinary artistry. 90% of 'sushi' rolls contain cream cheese.",
    images: [OG_IMAGE_URL],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}