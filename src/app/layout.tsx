import type { Metadata } from "next";

import "./globals.css";
import Layout from "@/components/Layout";

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
      <Layout>{children}</Layout>
    </html>
  );
}
