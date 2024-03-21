import Image from "next/image";
import Link from "next/link";
import Cover1 from "@/static/images/1/cover.webp";
import Cover2 from "@/static/images/2/01-255-01-cover.webp";
import Cover3 from "@/static/images/3/01-670-01-cover.webp";
import Cover4 from "@/static/images/4/01-387-01-cover.webp";
import Cover5 from "@/static/images/5/01-721-01-cover.webp";
import Cover6 from "@/static/images/6/02-602-01-cover.webp";
import Cover7 from "@/static/images/7/01-904-01-cover.webp";
import Cover9 from "@/static/images/9/A-36-01-cover.webp";
import Cover10 from "@/static/images/10/A-30-2-03-cover.webp";
import Cover11 from "@/static/images/11/11-cover.webp";
import Cover12 from "@/static/images/12/12-cover.webp";
import Cover13 from "@/static/images/13/01-268-1-cover.webp";
import Cover14 from "@/static/images/14/14-cover.webp";
import Cover15 from "@/static/images/15/01-021-cover.webp";
import Cover16 from "@/static/images/16/IMG_7066-cover.webp";
import Cover17 from "@/static/images/17/17-cover.webp";
import Cover18 from "@/static/images/18/C-53-1-cover.webp";
import Cover19 from "@/static/images/19/19-cover.webp";
import Cover24 from "@/static/images/24/24-cover.webp";

const MAIN_IMAGE_LIST = [
  { src: Cover1, alt: "main-image-1" },
  { src: Cover2, alt: "main-image-2" },
  { src: Cover3, alt: "main-image-3" },
  { src: Cover4, alt: "main-image-4" },
  { src: Cover5, alt: "main-image-5" },
  { src: Cover6, alt: "main-image-6" },
  { src: Cover7, alt: "main-image-7" },
  { src: Cover9, alt: "main-image-9" },
  { src: Cover10, alt: "main-image-10" },
  { src: Cover11, alt: "main-image-11" },
  { src: Cover12, alt: "main-image-12" },
  { src: Cover13, alt: "main-image-13" },
  { src: Cover14, alt: "main-image-14" },
  { src: Cover15, alt: "main-image-15" },
  { src: Cover16, alt: "main-image-16" },
  { src: Cover17, alt: "main-image-17" },
  { src: Cover18, alt: "main-image-18" },
  { src: Cover19, alt: "main-image-19" },
  { src: Cover24, alt: "main-image-24" },
];

export default function Home() {
  return (
    <main className="flex min-h-screen w-screen flex-col items-center">
      <ul className="grid grid-cols-1 md:grid-cols-4 gap-4 px-6 md:px-8 w-full">
        {MAIN_IMAGE_LIST.map((image, index) => {
          return (
            <li key={index} className="w-full mb-4 lg:mb-0">
              <Link href={`/list/${index + 1}`}>
                <div className="w-full relative pb-[133%]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className={"object-cover"}
                    placeholder={"blur"}
                  />
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
      <div className={"text-sm h-96 flex justify-center items-center"}>
        All rights reserved. ©2024
      </div>
    </main>
  );
}
