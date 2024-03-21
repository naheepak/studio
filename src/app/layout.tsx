import type { Metadata } from "next";
import { Archivo_Black, Manrope } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  style: "normal",
  weight: "400",
});

const manrope = Manrope({
  subsets: ["latin"],
  style: "normal",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={manrope.className}>
        <header
          className={`${archivoBlack.className} flex justify-center items-center min-h-20 text-xl md:text-2xl tracking-tighter`}
        >
          <Link href="/">NAHEE PARK</Link>
        </header>
        {children}
      </body>
    </html>
  );
}