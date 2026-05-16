import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ard El Dyar | Luxury Outdoor Resto-Cafe Experience",
  description: "A premium outdoor family destination in Jordan blending nature, fire, food, and unforgettable moments.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="font-sans min-h-full flex flex-col bg-brand-dark">
        {children}
      </body>
    </html>
  );
}
