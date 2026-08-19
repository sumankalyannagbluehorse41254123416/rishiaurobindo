import Image from "next/image";

interface CollegeRoutineBannerProps {
  section?: {
    title?: string;
    image?: string;
    bannerImage?: string;
    [key: string]: unknown;
  };
}

export default function CollegeRoutineBanner({
  section,
}: CollegeRoutineBannerProps) {
  const bannerImage =
    section?.bannerImage ||
    section?.image ||
    "https://www.rabedc.com/img/page_title_bg.jpg";

  const title =
    section?.title || "College Routine";

  return (
    <section className="page_title_wrap bottom_border">
      <Image
        className="page_title_bg"
        src={bannerImage}
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