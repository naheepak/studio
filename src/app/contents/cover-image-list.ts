import Cover1 from "@/static/images/00/1/cover.webp";
import HiddenCover1 from "@/static/images/00/1/02-88.webp";
import Cover2 from "@/static/images/00/2/01-255-01-cover.webp";
import Cover3 from "@/static/images/00/3/01-670-01-cover.webp";
import Cover4 from "@/static/images/00/4/01-387-01-cover.webp";
import Cover5 from "@/static/images/00/5/01-721-01-cover.webp";
import Cover6 from "@/static/images/00/6/02-602-01-cover.webp";
import Cover7 from "@/static/images/00/7/01-904-01-cover.webp";
import Cover8 from "@/static/images/00/8/24-cover.webp";
import Cover9 from "@/static/images/00/9/min.webp";
import type { CoverImage } from "../../interfaces";

export const COVER_IMAGE_LIST: CoverImage[] = [
  {
    src: Cover1,
    hiddenSrc: HiddenCover1,
    id: "1",
  },
  {
    src: Cover2,
    hiddenSrc: HiddenCover1,
    id: "2",
  },
  {
    src: Cover3,
    hiddenSrc: HiddenCover1,
    id: "3",
  },
  {
    src: Cover8,
    hiddenSrc: HiddenCover1,
    id: "8",
  },
  {
    src: Cover5,
    hiddenSrc: HiddenCover1,
    id: "5",
  },
  {
    src: Cover6,
    hiddenSrc: HiddenCover1,
    id: "6",
  },
  {
    src: Cover7,
    hiddenSrc: HiddenCover1,
    id: "7",
  },
  {
    src: Cover4,
    hiddenSrc: HiddenCover1,
    id: "4",
  },
  {
    src: Cover9,
    hiddenSrc: HiddenCover1,
    id: "9",
    disabled: true,
  },
];
