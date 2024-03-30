import { CoverImage } from "@/interfaces";

export type CoverImageListProps = {
  colNum?: number;
  coverImageList: CoverImage[];
  detailLink: (id: string) => string;
};
