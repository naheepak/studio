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
  title: "Nahee Pak",
  description: "",
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
          <Link href="/evbt">NAHEE PAK</Link>
        </header>
        {children}
        <footer className={"text-sm h-96 flex justify-center items-center"}>
          All rights reserved. ©2024
        </footer>
      </body>
    </html>
  );
}
