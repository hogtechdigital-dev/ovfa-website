import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollTicker from "@/components/ScrollTicker";
import WhatsAppButton from "@/components/WhatsAppButton";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Overcomers Family Assembly Int'l Inc. – Prayer Cathedral",
  description: "Reaching the world with the Gospel of the Kingdom. Join us at Prayer Cathedral, Benin City, Nigeria.",
  icons: { icon: "/images/church-logo.jpg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ScrollTicker />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <RevealOnScroll />
      </body>
    </html>
  );
}
