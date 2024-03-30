import Image from "next/image";
import Link from "next/link";
import { COVER_IMAGE_LIST } from "@/app/contents/cover-image-list";
import { PAGE_URL } from "@/constants/url";
import classNames from "classnames";
import CoverImageList from "@/components/CoverImageList";

export default function Home() {
  return (
    <main className="flex md:min-h-screen w-screen flex-col items-center">
      <CoverImageList
        coverImageList={COVER_IMAGE_LIST}
        detailLink={PAGE_URL.FIRST.DETAIL}
      />
    </main>
  );
}
