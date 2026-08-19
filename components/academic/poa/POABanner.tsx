import Image from "next/image";

interface Section {
  title?: string;
  image?: string;
}

interface POABannerProps {
  section?: Section;
}

export default function POABanner({
  section,
}: POABannerProps) {
  return (
    <section className="page_title_wrap bottom_border">
      <Image
        className="page_title_bg"
        src={
          section?.image ||
          "https://www.rabedc.com/img/page_title_bg.jpg"
        }
        alt={section?.title || "page_title_bg"}
        width={1920}
        height={300}
        priority
      />

      <div className="container">
        <h3>{section?.title || "POA"}</h3>
      </div>
    </section>
  );
}