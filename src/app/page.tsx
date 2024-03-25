import Image from "next/image";
import Link from "next/link";
import { MAIN_COVER_IMAGE_LIST } from "@/contents/cover-list";

export default function Home() {
  return (
    <main className="flex min-h-screen w-screen flex-col items-center">
      <ul className="grid grid-cols-1 md:grid-cols-4 gap-4 px-6 md:px-8 w-full">
        {MAIN_COVER_IMAGE_LIST.map((image, index) => {
          return (
            <li key={index} className="w-full mb-4 lg:mb-0">
              <Link href={`/evbt/list/${image.id}`}>
                <div className="w-full relative pb-[133%]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className={"object-cover z-10"}
                    placeholder={"blur"}
                  />
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
