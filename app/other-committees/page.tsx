import Image from "next/image";
import { fetchPageData } from "@/service/fetchdata.services";

interface PageData {
  pagedata?: {
    title?: string;
    cover_image_url?: string;
  };
}

const OtherCommitteesBanner = async () => {
  const uid = "216946b4-0970-44b3-9449-c43ef2106faf";

  const data = (await fetchPageData({}, uid)) as PageData;

  const title = data?.pagedata?.title || "OTHER COMMITTEES";
  const coverImage =
    data?.pagedata?.cover_image_url || "/images/page_title_bg.jpg";

  return (
    <section className="page_title_wrap bottom_border">
      <Image
        src={coverImage}
        alt={title}
        width={1920}
        height={300}
        className="page_title_bg"
      />

      <div className="container">
        <h3>{title}</h3>
      </div>
    </section>
  );
};

export default OtherCommitteesBanner;