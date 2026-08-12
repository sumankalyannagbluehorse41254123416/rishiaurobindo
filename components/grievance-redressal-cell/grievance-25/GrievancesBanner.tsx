import Image from "next/image";

interface Section {
  title?: string;
  image?: string;
}

interface GrievancesBannerProps {
  section?: Section;
}

export default function GrievancesBanner({
  section,
}: GrievancesBannerProps) {
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
          {section?.title || "Grievances"}
        </h3>
      </div>
    </section>
  );
}