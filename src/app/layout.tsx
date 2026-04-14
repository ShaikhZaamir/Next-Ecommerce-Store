import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import "./globals.css";

import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import PromotionStrip from "@/components/PromotionStrip";
import Collection from "@/components/Collection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "StoreApp",
  description: "Ecommerce App",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar isLoggedIn={!!session} />

        <main className="flex-1">
          <Hero />
          <PromotionStrip />
          <Collection />
          <Newsletter />
          <Footer />
          {children}
        </main>

      </body>
    </html>
  );
}