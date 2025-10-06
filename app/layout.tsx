import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
        url: "https://images.unsplash.com/photo-1581781870027-04212e231e96?q=80&w=1200&h=630&fit=crop&crop=entropy",
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
    images: ["https://images.unsplash.com/photo-1581781870027-04212e231e96?q=80&w=1200&h=630&fit=crop&crop=entropy"],
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