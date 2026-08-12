import Image from "next/image";

interface Section {
  title?: string;
  image?: string;
}

interface PageTitleProps {
  section?: Section;
}

export default function PageTitle({
  section,
}: PageTitleProps) {
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
          {section?.title || "Grievance Redressal Form"}
        </h3>
      </div>
    </section>
  );
}