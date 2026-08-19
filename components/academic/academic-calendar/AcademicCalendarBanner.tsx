import Image from "next/image";

interface AcademicCalendarBannerProps {
  section?: {
    title?: string;
    image?: string;
    bannerImage?: string;
    [key: string]: unknown;
  };
}

export default function AcademicCalendarBanner({
  section,
}: AcademicCalendarBannerProps) {
  const title =
    section?.title || "Academic Calendar";

  const image =
    section?.image ||
    section?.bannerImage ||
    "https://www.rabedc.com/img/page_title_bg.jpg";

  return (
    <section className="page_title_wrap bottom_border">
      <Image
        className="page_title_bg"
        src={image}
        alt="page_title_bg"
        width={1920}
        height={300}
        priority
      />

      <div className="container">
        <h3>{title}</h3>
      </div>
    </section>
  );
}