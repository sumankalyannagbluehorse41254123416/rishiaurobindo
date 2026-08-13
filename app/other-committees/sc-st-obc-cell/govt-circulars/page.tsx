import Image from "next/image";
import { fetchPageData } from "@/service/fetchdata.services";

interface Section {
  title?: string;
  image?: string;
}

interface PageData {
  pageItemdataWithSubsection?: Section[];
}

const GovtCircularsBanner = async () => {
  const uid = "216946b4-0970-44b3-9449-c43ef2106faf";

  const data = (await fetchPageData({}, uid)) as PageData;

  console.log("Govt Circulars Data:", data);

  const section = data?.pageItemdataWithSubsection?.[1];

  const title = section?.title || "GOVT. CIRCULARS";
  const image = section?.image || "/images/page_title_bg.jpg";

  return (
    <section className="page_title_wrap bottom_border">
      <Image
        src={image}
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

export default GovtCircularsBanner;