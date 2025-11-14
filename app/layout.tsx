import "./globals.css";
import { ReactNode } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Rofee'ah Modest Fashion",
  description: "Modest Fashion for the Elegant Woman — Khimars, Jilbabs, Abayas, Native Wear, Online Courses & More.",
  keywords: ["modest fashion", "hijab", "jilbab", "abayas", "muslimah fashion"],
  openGraph: {
    title: "Rofee'ah Modest Fashion",
    description: "Modesty styled as lifestyle — explore elegant modest fashion collections.",
    url: "https://rofeeahmodestfashion.vercel.app/",
    siteName: "Rofee'ah Modest Fashion",
    images: [
      {
        url: "https://rofeeahmodestfashion.vercel.app/og-image.jpg", // <-- upload this
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rofee'ah Modest Fashion",
    description: "Modesty styled as lifestyle.",
    images: ["https://rofeeahmodestfashion.vercel.app/og-image.jpg"],
  },
};


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-brand-base text-brand-text flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
