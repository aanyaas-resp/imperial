import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Cinzel, Poppins } from "next/font/google";
import FloatingContactButtons from "@/components/FloatingContactButtons";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cinzel",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hotel Imperial Park | Sahibabad, Ghaziabad – Celebrating Dreams",
  description:
    "Hotel Imperial Park is a luxury banquet venue in Sahibabad, Ghaziabad for weddings, social celebrations and memorable occasions.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#4A2C20",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${poppins.variable}`}>
      <body>
        {children}
        <FloatingContactButtons />
      </body>
    </html>
  );
}
