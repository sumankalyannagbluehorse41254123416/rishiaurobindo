import Image from "next/image";

interface EmptyBannerProps {
  section?: {
    title?: string;
    image?: string;
    bannerImage?: string;
    [key: string]: unknown;
  };
}

export default function EmptyBanner({
  section,
}: EmptyBannerProps) {
  return (
    <section className="page_title_wrap bottom_border">
      <Image
        className="page_title_bg"
        src={
          section?.image ||
          section?.bannerImage ||
          "https://www.rabedc.com/img/page_title_bg.jpg"
        }
        alt={section?.title || "Banner"}
        width={1920}
        height={300}
        priority
      />

      <div className="container">
        <h3>{section?.title}</h3>
      </div>
    </section>
  );
}