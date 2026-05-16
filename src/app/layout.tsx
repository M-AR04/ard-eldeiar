import type { Metadata } from "next";
import { Inter, Cairo } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
});

export const metadata: Metadata = {
  title: "Ard El Diyar | أرض الديار - Premium Outdoor Resto-Cafe",
  description: "A unique outdoor resto-cafe experience in Jordan blending traditional hospitality, live grilling, cozy campfires, and unforgettable family moments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cairo.variable} scroll-smooth`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
