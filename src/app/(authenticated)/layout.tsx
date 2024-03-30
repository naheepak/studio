import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  style: "normal",
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
