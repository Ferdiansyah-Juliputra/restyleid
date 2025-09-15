import type { Metadata } from "next";
import { Roboto_Slab, Inter } from "next/font/google";
import "./globals.css";


const robotoSlab = Roboto_Slab ({
  variable: "--font-slab",
  subsets: ["latin"],
});

const interFont = Inter ({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ReStyle.ID",
  description: "Revive, Rewear, ReStyle",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoSlab.variable} ${interFont.variable} antialiased bg-vanilla`}
      >
        {children}
      </body>
    </html>
  );
}
