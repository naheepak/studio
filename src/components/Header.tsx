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

  return (
    <header
      className={`${archivoBlack.className} relative min-h-20 tracking-tighter px-6 md:px-8`}
    >
      <ul
        style={{ transform: "translateY(-50%)" }}
        className={
          "absolute left-6 md:left-8 top-1/2 flex text-md md:text-lg gap-x-2"
        }
      >
        <li>
          <Link
            className={classNames({
              underline:
                pathname === PAGE_URL.MAIN ||
                pathname === "/studio/" ||
                pathname === "/" ||
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
        <li>
          <Link
            className={classNames({
              underline: isSelected(PAGE_URL.THIRD.LIST),
            })}
            href={PAGE_URL.THIRD.LIST}
          >
            02
          </Link>
        </li>
      </ul>
      <Link
        href={PAGE_URL.MAIN}
        style={{ transform: "translate(-50%, -50%)" }}
        className={"absolute text-xl md:text-2xl left-1/2 top-1/2"}
      >
        NAHEE PAK
      </Link>
    </header>
  );
}
