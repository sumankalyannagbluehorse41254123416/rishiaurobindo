import Image from "next/image";

// ==========================================
// TYPES
// ==========================================

interface Section {
  title?: string;
  shortDescription?: string;
  description?: string;
  image?: string;
  [key: string]: unknown;
}

interface PageTitleProps {
  section?: Section;
}

// ==========================================
// PAGE TITLE
// ==========================================

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
        alt={
          section?.title ||
          "page_title_bg"
        }
        width={1920}
        height={300}
        priority
      />

      <div className="container">
        <h3>
          {section?.title || "D.El.Ed"}
        </h3>
      </div>
    </section>
  );
}