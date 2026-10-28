import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const description =
  "Full-stack developer in Nairobi building fast, reliable web applications with React, Next.js, TypeScript and Python.";

export const metadata: Metadata = {
  metadataBase: new URL("https://danielmuiruri.vercel.app"),
  title: "Daniel Muiruri | Full-Stack Developer",
  description,
  icons: {
    icon: "/daniel.jpg",
    apple: "/daniel.jpg",
  },
  openGraph: {
    title: "Daniel Muiruri | Full-Stack Developer",
    description,
    url: "https://danielmuiruri.vercel.app",
    siteName: "Daniel Muiruri",
    type: "website",
    images: ["/daniel.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}