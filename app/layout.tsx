import type { Metadata } from "next";
import { IBM_Plex_Serif, Mona_Sans } from "next/font/google";

import Navbar from "@/components/Navbar";
import "./globals.css";

const ibmPlexSerif = IBM_Plex_Serif({
  variable: "--font-ibm-plex-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const monaSans = Mona_Sans({
  variable: "--font-mono-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lexora",
  description:
    "Turn your books into interactive AI conversations. Upload PDFs and talk to your books using voice.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
         className={`${ibmPlexSerif.variable} ${monaSans.variable} relative font-sans antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
