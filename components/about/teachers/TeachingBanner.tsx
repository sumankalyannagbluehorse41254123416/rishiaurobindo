import Image from "next/image";

interface Section {
  title?: string;
  image?: string;
}

interface TeachingBannerProps {
  section?: Section;
}

export default function TeachingBanner({
  section,
}: TeachingBannerProps) {
  return (
    <section className="page_title_wrap bottom_border">
      <Image
        className="page_title_bg"
        src={section?.image || "/images/page_title_bg.jpg"}
        alt={section?.title || "Teaching Staff"}
        width={1920}
        height={300}
        priority
      />

      <div className="container">
        <h3>{section?.title || "Teaching Staff"}</h3>
      </div>
    </section>
  );
}