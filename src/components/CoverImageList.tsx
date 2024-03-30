import { CoverImageListProps } from "@/interfaces";
import Link from "next/link";
import classNames from "classnames";
import Image from "@/components/Image";

export default function CoverImageList(props: CoverImageListProps) {
  const { coverImageList, detailLink } = props;

  return (
    <ul className="grid grid-cols-1 md:grid-cols-4 gap-4 px-6 md:px-8 w-full">
      {coverImageList.map((image, index) => {
        return (
          <li key={index} className="w-full mb-4 lg:mb-0">
            <Link
              href={detailLink(image.id)}
              className={classNames({
                "pointer-events-none": image.disabled,
              })}
              tabIndex={image.disabled ? -1 : undefined}
              aria-disabled={image.disabled}
            >
              <div className="w-full relative pb-[133%]">
                <Image
                  src={image.src}
                  alt={`cover-${index}`}
                  fill
                  className={classNames(
                    "object-cover top-0 left-0 transition-opacity duration-500",
                    {
                      "md:hover:opacity-0": image.hiddenSrc,
                    },
                  )}
                />
                {image.hiddenSrc && (
                  <Image
                    src={image.hiddenSrc}
                    alt={`hidden-cover-${index}`}
                    fill
                    className={
                      "object-cover top-0 left-0 opacity-0 transition-opacity duration-500 md:hover:opacity-100"
                    }
                  />
                )}
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
