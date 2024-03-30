import { DETAIL_IMAGE_MAP } from "@/app/00/contents/detail-image-map";
import Image from "next/image";

type Params = {
  [key: string]: string | number | string[] | undefined;
};
export function generateStaticParams() {
  const ids = [];

  for (const key in DETAIL_IMAGE_MAP) {
    if (DETAIL_IMAGE_MAP.hasOwnProperty(key)) {
      ids.push({ id: key });
    }
  }

  return ids;
}

export default function Detail({ params }: { params: Params }) {
  const item = DETAIL_IMAGE_MAP[params.id as string];

  if (!item) {
    return <div>Not Found</div>;
  }

  return (
    <main className="flex md:min-h-screen w-screen flex-col items-center">
      <ul
        className={"grid gap-3.5 pb-5 w-full md:w-1/2 grid-cols-1 px-6 md:px-8"}
      >
        {item.imageList.map((image, index) => {
          return (
            <li
              key={index}
              style={{ fontSize: 0, lineHeight: 0 }}
              className={"mx-auto relative w-full h-auto overflow-hidden"}
            >
              <Image
                src={image.src}
                alt={`cover-${index}`}
                style={{ position: "relative" }}
                width={0}
                height={0}
                sizes={"100vw"}
                placeholder={"blur"}
                className={"object-contain md:object-cover w-full h-full"}
              />
            </li>
          );
        })}
      </ul>
    </main>
  );
}
