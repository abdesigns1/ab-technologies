import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/NavBar";
import { Space_Grotesk } from "next/font/google";
import Footer from "./components/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abnixx Tech - Innovative Technology Solutions for Businesses",
  description:
    "Abnixx Tech is a leading technology company specializing in innovative solutions for businesses. We provide cutting-edge software development, IT consulting, and digital transformation services to help our clients stay ahead in the competitive market. Our team of experts is dedicated to delivering high-quality products and exceptional customer service, ensuring that our clients achieve their goals and drive growth. With a focus on innovation and excellence, ab-Tech is your trusted partner for all your technology needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${spaceGrotesk.className}`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
