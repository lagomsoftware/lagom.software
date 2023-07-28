import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lagom Software",
  description:
    "We're two guys who love crafting high-quality software for the web.",
  openGraph: {
    images: [
      "https://res.cloudinary.com/albin-groen/image/upload/f_auto,q_auto/v1690567677/Lagom/seo.png",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
