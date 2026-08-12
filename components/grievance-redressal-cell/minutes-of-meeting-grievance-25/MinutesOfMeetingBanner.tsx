import Image from "next/image";

interface Section {
  title?: string;
  image?: string;
}

interface MinutesOfMeetingBannerProps {
  section?: Section;
}

export default function MinutesOfMeetingBanner({
  section,
}: MinutesOfMeetingBannerProps) {
  return (
    <section className="page_title_wrap bottom_border">
      <Image
        className="page_title_bg"
        src={
          section?.image ||
          "/images/page_title_bg.jpg"
        }
        alt={section?.title || "page_title_bg"}
        fill
        priority
      />

      <div className="container">
        <h3>
          {section?.title || "Minutes of Meeting"}
        </h3>
      </div>
    </section>
  );
}