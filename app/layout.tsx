import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Mentorship Grafica — Trasforma la Tua Passione in Professione",
  description:
    "Impara il design professionale con una mentorship one-to-one. Dalla teoria alla pratica: costruisci il tuo portfolio e ottieni i tuoi primi clienti.",
  openGraph: {
    title: "Mentorship Grafica — Trasforma la Tua Passione in Professione",
    description:
      "Impara il design professionale con una mentorship one-to-one.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="dark">
      <body className={`${geistSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
