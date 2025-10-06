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
    description: "Exposing the systematic destruction of Japanese culinary artistry.",
    type: "website",
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