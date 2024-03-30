"use client";
import Link from "next/link";
import { PAGE_URL } from "@/constants/url";
import { Archivo_Black } from "next/font/google";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import { HeaderProps } from "@/interfaces/components/header";

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  style: "normal",
  weight: "400",
});

export default function Header(props: HeaderProps) {
  const { open, handleOpen } = props;
  const pathname = usePathname();

  const isSelected = (url: string) => {
    return pathname.startsWith(url);
  };

  return (
    <header
      className={`${archivoBlack.className} relative min-h-20 tracking-tighter px-6 md:px-8`}
    >
      <ul
        className={
          "absolute left-6 md:left-8 top-1/2 text-md md:text-lg gap-x-2 hidden md:flex -translate-y-1/2"
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
        className={
          "absolute text-xl md:text-2xl left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        }
      >
        NAHEE PAK
      </Link>
      <button
        className="w-14 h-14 absolute focus:outline-none md:hidden top-1/2 -translate-y-1/2 left-2.5 z-50"
        onClick={() => handleOpen(!open)}
      >
        <div className="block w-5 absolute left-6 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span
            className={`block absolute h-0.5 w-7 text-black bg-current transform transition duration-500 ease-in-out ${open ? "rotate-45" : "-translate-y-1.5"}`}
          ></span>
          <span
            className={`block absolute h-0.5 w-5 text-black bg-current transform transition duration-500 ease-in-out ${open ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`block absolute h-0.5 w-7 text-black bg-current transform transition duration-500 ease-in-out ${open ? "-rotate-45" : "translate-y-1.5"}`}
          ></span>
        </div>
      </button>
    </header>
  );
}
