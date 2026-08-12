import Image from "next/image";

interface BEDPageTitleProps {
  section?: {
    title?: string;
    image?: string;
  };
}

export default function BEDPageTitle({
  section,
}: BEDPageTitleProps) {
  const title = section?.title || "B.ED";

  const image =
    section?.image || "/images/page_title_bg.jpg";

  return (
    <section className="page_title_wrap bottom_border">
      <Image
        className="page_title_bg"
        src={image}
        alt={title}
        fill
        priority
      />

      <div className="container">
        <h3>{title}</h3>
      </div>
    </section>
  );
}