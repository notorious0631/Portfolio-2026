import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import { ThemeProvider } from "@/components/ThemeProvider";

import localFont from 'next/font/local';

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const ovelion = localFont({
  src: "../fonts/Ovelion Regular.otf",
  variable: "--font-ovelion",
  display: "swap",
});

const mirano = localFont({
  src: "../fonts/MiranoExtendedFreebie-Light.ttf",
  variable: "--font-mirano",
  display: "swap",
});

const britishClassical = localFont({
  src: "../fonts/British Classical Demo.ttf",
  variable: "--font-british",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bhaskar Das | Portfolio",
  description: "Gen AI engineer - Computer Science student with expertise in AI/ML and Web Development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.variable} ${inter.variable} ${ovelion.variable} ${mirano.variable} ${britishClassical.variable}`}>
        <ThemeProvider>
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
