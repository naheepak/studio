import { StaticImageData } from "next/image";

export type CoverImage = {
  disabled?: boolean;
  src: StaticImageData;
  hiddenSrc: StaticImageData;
  id: string;
};

export type DetailImageMap = Record<string, DetailImageItem>;

export type DetailImageItem = {
  imageList: DetailImage[];
};

export type DetailImage = {
  src: StaticImageData;
};
