import Image from "next/image";

interface Section {
  title?: string;
  image?: string;
  bannerImage?: string;
  [key: string]: unknown;
}

interface Props {
  section?: Section;
}

export default function UniversityBoardResultBanner({
  section,
}: Props) {
  const bannerImage =
    section?.image ||
    section?.bannerImage ||
    "https://www.rabedc.com/img/page_title_bg.jpg";

  return (
    <section className="page_title_wrap bottom_border">
      <Image
        className="page_title_bg"
        src={bannerImage}
        alt={section?.title || "page_title_bg"}
        width={1920}
        height={400}
        priority
      />

      <div className="container">
        <h3>{section?.title}</h3>
      </div>
    </section>
  );
}