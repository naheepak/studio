"use client";
import Link from "next/link";
import { PAGE_URL } from "@/constants/url";
import { Archivo_Black } from "next/font/google";
import { usePathname } from "next/navigation";
import classNames from "classnames";

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  style: "normal",
  weight: "400",
});

export default function Header() {
  const pathname = usePathname();

  const isSelected = (url: string) => {
    return pathname.startsWith(url);
  };

  console.log(
    pathname,
    pathname === PAGE_URL.MAIN,
    pathname === "/evbt/",
    pathname === "/evbt/out/index.html",
    isSelected(PAGE_URL.FIRST.LIST),
    pathname === PAGE_URL.MAIN ||
      pathname === "/evbt/" ||
      pathname === "/evbt/out/index.html" ||
      isSelected(PAGE_URL.FIRST.LIST),
  );

  return (
    <header
      className={`${archivoBlack.className} flex justify-between items-center min-h-20 tracking-tighter px-6 md:px-8`}
    >
      <ul className={"flex text-lg md:text-xl gap-x-2"}>
        <li>
          <Link
            className={classNames({
              underline:
                pathname === PAGE_URL.MAIN ||
                pathname === "/evbt/" ||
                pathname === "/evbt/out/index.html" ||
                isSelected(PAGE_URL.FIRST.LIST),
            })}
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
            href={PAGE_URL.SECOND.LIST}
          >
            01
          </Link>
        </li>
      </ul>
      <Link href={PAGE_URL.MAIN} className={"text-xl md:text-2xl"}>
        NAHEE PAK
      </Link>
      <div />
    </header>
  );
}
