import Cover1 from "@/static/images/00/1/cover.webp";
import Cover2 from "@/static/images/00/2/01-255-01-cover.webp";
import Cover3 from "@/static/images/00/3/01-670-01-cover.webp";
import Cover4 from "@/static/images/00/4/01-387-01-cover.webp";
import Cover5 from "@/static/images/00/5/01-721-01-cover.webp";
import Cover6 from "@/static/images/00/6/02-602-01-cover.webp";
import Cover7 from "@/static/images/00/7/01-904-01-cover.webp";
import Cover8 from "@/static/images/00/8/24-cover.webp";
import Cover9 from "@/static/images/00/9/min-cover.webp";
import type { CoverImage } from "../../interfaces";
import { DETAIL_IMAGE_MAP } from "@/app/00/contents/detail-image-map";

export const COVER_IMAGE_LIST: CoverImage[] = [
  {
    src: Cover1,
    hiddenSrc: DETAIL_IMAGE_MAP["1"].imageList[1].src,
    id: "1",
  },
  {
    src: Cover2,
    hiddenSrc: DETAIL_IMAGE_MAP["2"].imageList[1].src,
    id: "2",
  },
  {
    src: Cover3,
    hiddenSrc: DETAIL_IMAGE_MAP["3"].imageList[1].src,
    id: "3",
  },
  {
    src: Cover8,
    hiddenSrc: DETAIL_IMAGE_MAP["8"].imageList[1].src,
    id: "8",
  },
  {
    src: Cover5,
    hiddenSrc: DETAIL_IMAGE_MAP["5"].imageList[1].src,
    id: "5",
  },
  {
    src: Cover6,
    hiddenSrc: DETAIL_IMAGE_MAP["6"].imageList[1].src,
    id: "6",
  },
  {
    src: Cover7,
    hiddenSrc: DETAIL_IMAGE_MAP["7"].imageList[1].src,
    id: "7",
  },
  {
    src: Cover4,
    hiddenSrc: DETAIL_IMAGE_MAP["4"].imageList[1].src,
    id: "4",
  },
  {
    src: Cover9,
    hiddenSrc: DETAIL_IMAGE_MAP["9"].imageList[1].src,
    id: "9",
  },
];
