import Image from "next/image";

interface Section {
  title?: string;
  image?: string;
}

interface ProspectusBannerProps {
  section?: Section;
}

export default function ProspectusBanner({
  section,
}: ProspectusBannerProps) {
  return (
    <section className="page_title_wrap bottom_border">
      <Image
        className="page_title_bg"
        src={
          section?.image ||
          "https://www.rabedc.com/img/page_title_bg.jpg"
        }
        alt={section?.title || "page_title_bg"}
        fill
        priority
      />

      <div className="container">
        <h3>{section?.title || "Prospectus"}</h3>
      </div>
    </section>
  );
}