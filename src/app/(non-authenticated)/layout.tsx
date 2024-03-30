import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";

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
        <Header />
        {children}
        <footer className={"text-sm h-96 flex justify-center items-center"}>
          All rights reserved. ©2024
        </footer>
      </body>
    </html>
  );
}
