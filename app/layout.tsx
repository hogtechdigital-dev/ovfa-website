import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollTicker from "@/components/ScrollTicker";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import RevealOnScroll from "@/components/RevealOnScroll";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.overcomersfamilyassembly.org"),
  title: "Overcomers Family Assembly Int'l Inc. – Prayer Cathedral",
  description: "Reaching the world with the Gospel of the Kingdom. Join us at Prayer Cathedral, Benin City, Nigeria.",
  icons: { icon: "/images/church-logo.jpg" },
  openGraph: {
    title: "Overcomers Family Assembly Int'l Inc. – Prayer Cathedral",
    description: "Reaching the world with the Gospel of the Kingdom. Join us at Prayer Cathedral, Benin City, Nigeria.",
    images: ["/images/church-building.jpg"],
    locale: "en_NG",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ScrollTicker />
        <Navbar />
        <main><PageTransition>{children}</PageTransition></main>
        <Footer />
        <WhatsAppButton />
        <BackToTop />
        <RevealOnScroll />
      </body>
    </html>
  );
}
