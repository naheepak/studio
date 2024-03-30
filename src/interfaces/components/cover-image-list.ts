import { CoverImage } from "@/interfaces";

export type CoverImageListProps = {
  coverImageList: CoverImage[];
  detailLink: (id: string) => string;
};
