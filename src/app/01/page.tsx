import { COVER_IMAGE_LIST } from "@/app/01/contents/cover-image-list";
import { PAGE_URL } from "@/constants/url";
import CoverImageList from "@/components/CoverImageList";

export default function Home() {
  return (
    <main className="flex md:min-h-screen w-screen flex-col items-center">
      <CoverImageList
        coverImageList={COVER_IMAGE_LIST}
        detailLink={PAGE_URL.SECOND.DETAIL}
      />
    </main>
  );
}
