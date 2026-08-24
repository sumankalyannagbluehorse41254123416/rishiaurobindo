import Image from "next/image";

interface Section {
  title?: string;
  image?: string;
  bannerImage?: string;
  [key: string]: unknown;
}

interface ContactDetailsBannerProps {
  section?: Section;
}

const ContactDetailsBanner = ({
  section,
}: ContactDetailsBannerProps) => {
  const bannerImage =
    section?.bannerImage ||
    (typeof section?.image === "string" &&
    (section.image.startsWith("http://") ||
      section.image.startsWith("https://") ||
      section.image.startsWith("/"))
      ? section.image
      : "/images/page_title_bg.jpg");

  return (
    <section className="page_title_wrap bottom_border">
      <Image
        className="page_title_bg"
        src={bannerImage}
        alt={section?.title || "Contact Details"}
        width={1920}
        height={300}
        priority
      />

      <div className="container">
        <h3>{section?.title}</h3>
      </div>
    </section>
  );
};

export default ContactDetailsBanner;