import { headers } from "next/headers";

import OnlineClassGallery from "@/components/academic/use-of-ict/OnlineClassGallery";

import { fetchPageData } from "@/service/fetchdata.services";

interface SubSection {
  id?: number;
  title?: string;
  description?: string;
  image?: string;
  backgroundImage?: string;
  [key: string]: unknown;
}

interface Section {
  id?: number;
  title?: string;
  shortDescription?: string;
  longDescription?: string;
  image?: string;
  bannerImage?: string;
  subsections?: SubSection[];
  [key: string]: unknown;
}

interface PageData {
  pageItemdataWithSubsection?: Section[];

  data?: {
    pageItemdataWithSubsection?: Section[];
  };

  [key: string]: unknown;
}

export default async function UseOfIct() {
  const rqHeaders = await headers();

  const host = rqHeaders.get("host") || "localhost:3000";

  const headersObj = Object.fromEntries(rqHeaders.entries());

  // ==========================================
  // PAGE UID
  // ==========================================

  const pageId =
    "d56c22c4-9324-404e-ab20-278ba107c8d6";

  let pageData: PageData = {};

  // ==========================================
  // FETCH PAGE DATA
  // ==========================================

  try {
    pageData = await fetchPageData(
      {
        host,
        ...headersObj,
      },
      pageId
    );

    console.log(
      "========================================"
    );

    console.log(
      "USE OF ICT PAGE DATA"
    );

    console.log(
      "========================================"
    );

    console.log(
      JSON.stringify(
        pageData,
        null,
        2
      )
    );
  } catch (error) {
    console.error(
      "USE OF ICT PAGE ERROR:",
      error
    );
  }

  // ==========================================
  // GET ALL SECTIONS
  // ==========================================

  const sections =
    pageData.pageItemdataWithSubsection ||
    pageData.data?.pageItemdataWithSubsection ||
    [];

  console.log(
    "========================================"
  );

  console.log(
    "USE OF ICT SECTIONS LENGTH:",
    sections.length
  );

  console.log(
    "========================================"
  );

  // ==========================================
  // FRONT PAGE SECTION
  // ARRAY INDEX 44
  // ==========================================

  const frontPageSection = sections[44];

  console.log(
    "========================================"
  );

  console.log(
    "USE OF ICT FRONT PAGE SECTION [44]"
  );

  console.log(
    "========================================"
  );

  console.log(
    JSON.stringify(
      frontPageSection,
      null,
      2
    )
  );

  // ==========================================
  // ONLINE CLASS SECTION
  // ARRAY INDEX 45
  // ==========================================

  const onlineClassSection = sections[45];

  console.log(
    "========================================"
  );

  console.log(
    "USE OF ICT ONLINE CLASS SECTION [45]"
  );

  console.log(
    "========================================"
  );

  console.log(
    JSON.stringify(
      onlineClassSection,
      null,
      2
    )
  );

  // ==========================================
  // ONLINE CLASS GALLERY
  // SECTION INDEX 45
  // SUBSECTION IMAGE
  // ==========================================

  const galleryImages =
    onlineClassSection?.subsections?.filter(
      (item) =>
        typeof item.image === "string" &&
        item.image.trim() !== ""
    ) || [];

  console.log(
    "========================================"
  );

  console.log(
    "USE OF ICT GALLERY COUNT:",
    galleryImages.length
  );

  console.log(
    "========================================"
  );

  galleryImages.forEach(
    (item, index) => {
      console.log(
        `========== GALLERY [${index}] ==========`
      );

      console.log(
        JSON.stringify(
          item,
          null,
          2
        )
      );
    }
  );

  return (
    <>
      <OnlineClassGallery
        section={onlineClassSection}
        frontPageSection={frontPageSection}
        galleryImages={galleryImages}
      />
    </>
  );
}