import { DETAIL_IMAGE_LIST } from "@/contents/detail-list";
import Image from "next/image";

type Params = {
  [key: string]: string | number | string[] | undefined;
};
export default function Detail({ params }: { params: Params }) {
  const item = DETAIL_IMAGE_LIST.find((item) => item.id === params.id);

  if (!item) {
    return <div>Not Found</div>;
  }

  return (
    <main className="flex min-h-screen w-screen flex-col items-center">
      <ul
        className={"grid gap-3.5 pb-5 w-full md:w-1/2 grid-cols-1 px-6 md:px-8"}
      >
        {item.imageList.map((image, index) => {
          return (
            <li key={index} className={"mx-auto relative pb-[133%] w-full"}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className={"object-cover"}
                placeholder={"blur"}
              />
            </li>
          );
        })}
      </ul>
    </main>
  );
}
