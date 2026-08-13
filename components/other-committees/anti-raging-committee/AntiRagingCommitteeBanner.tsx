import Image from "next/image";

type SectionData = {
  section?: {
    title?: string;
    images?: string[];
  };
};

interface AntiRagingCommitteeBannerProps {
  sectionData: SectionData | null;
}

const AntiRagingCommitteeBanner = ({
  sectionData,
}: AntiRagingCommitteeBannerProps) => {
  const sectionTitle =
    sectionData?.section?.title ||
    "Anti Raging Committee";

  const sectionImage =
    sectionData?.section?.images?.[0] ||
    "/images/page_title_bg.jpg";

  return (
    <section className="page_title_wrap bottom_border">
      <Image
        className="page_title_bg"
        src={sectionImage}
        alt={sectionTitle}
        fill
        priority
      />

      <div className="container">
        <h3>{sectionTitle}</h3>
      </div>
    </section>
  );
};

export default AntiRagingCommitteeBanner;