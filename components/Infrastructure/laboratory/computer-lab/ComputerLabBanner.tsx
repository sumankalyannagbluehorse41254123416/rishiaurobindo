import Image from "next/image";

interface Section {
  title?: string;
  image?: string;
}

interface ComputerLabBannerProps {
  section?: Section;
}

const ComputerLabBanner = ({
  section,
}: ComputerLabBannerProps) => {
  return (
    <section className="page_title_wrap bottom_border">
      {section?.image && (
        <Image
          className="page_title_bg"
          src={section.image}
          alt={section.title || "Computer Lab"}
          width={1920}
          height={300}
        />
      )}

      <div className="container">
        <h3>{section?.title}</h3>
      </div>
    </section>
  );
};

export default ComputerLabBanner;