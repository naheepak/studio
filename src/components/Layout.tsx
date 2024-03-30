"use client";
import Header from "@/components/Header";
import { Archivo_Black, Manrope } from "next/font/google";
import React, { useState } from "react";
import Link from "next/link";
import { PAGE_URL } from "@/constants/url";
import classNames from "classnames";
import { usePathname } from "next/navigation";

const manrope = Manrope({
  subsets: ["latin"],
  style: "normal",
});

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  style: "normal",
  weight: "400",
});

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const handleOpen = (open: boolean) => {
    setOpen(open);
  };
  const isSelected = (url: string) => {
    return pathname.startsWith(url);
  };

  return (
    <body
      className={classNames(manrope.className, {
        "overflow-hidden": open,
      })}
    >
      <nav
        className={classNames(
          archivoBlack.className,
          "w-full h-full fixed left-0 top-0 bg-white bg-opacity-90 z-30 transition-transform duration-500 origin-top text-5xl flex justify-center items-center",
          {
            "translate-x-0": open,
            "translate-x-full": !open,
          },
        )}
      >
        <ul className={"flex flex-col gap-3"}>
          <li>
            <Link
              className={classNames({
                underline:
                  pathname === PAGE_URL.MAIN ||
                  pathname === "/studio/" ||
                  pathname === "/" ||
                  isSelected(PAGE_URL.FIRST.LIST),
              })}
              onClick={() => setOpen(false)}
              href={PAGE_URL.MAIN}
            >
              00
            </Link>
          </li>
          <li>
            <Link
              className={classNames({
                underline: isSelected(PAGE_URL.SECOND.LIST),
              })}
              onClick={() => setOpen(false)}
              href={PAGE_URL.SECOND.LIST}
            >
              01
            </Link>
          </li>
          <li>
            <Link
              className={classNames({
                underline: isSelected(PAGE_URL.THIRD.LIST),
              })}
              onClick={() => setOpen(false)}
              href={PAGE_URL.THIRD.LIST}
            >
              02
            </Link>
          </li>
        </ul>
      </nav>
      <Header open={open} handleOpen={handleOpen} />
      {children}
      <footer className={"text-sm h-96 flex justify-center items-center"}>
        naheepak.studio@gmail.com
      </footer>
    </body>
  );
}
