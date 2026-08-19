import Image from "next/image";

interface FeedbackBannerProps {
  section?: {
    title?: string;
    image?: string;
    [key: string]: unknown;
  };
}

export default function FeedbackBanner({
  section,
}: FeedbackBannerProps) {
  return (
    <section className="page_title_wrap bottom_border">
      <Image
        className="page_title_bg"
        src={section?.image || ""}
        alt="page_title_bg"
        width={1920}
        height={300}
        priority
      />

      <div className="container">
        <h3>{section?.title || ""}</h3>
      </div>
    </section>
  );
}