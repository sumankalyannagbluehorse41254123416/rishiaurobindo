import Image from "next/image";

interface Section {
  title?: string;
  image?: string;
}

interface ArtCraftLabBannerProps {
  section?: Section;
}

const ArtCraftLabBanner = ({
  section,
}: ArtCraftLabBannerProps) => {
  return (
    <section className="page_title_wrap bottom_border">
      <Image
        className="page_title_bg"
        src={
          section?.image ||
          "https://www.rabedc.com/img/page_title_bg.jpg"
        }
        alt={
          section?.title ||
          "Art & Craft Lab"
        }
        width={1920}
        height={300}
      />

      <div className="container">
        <h3>
          {section?.title ||
            "Art & Craft Lab"}
        </h3>
      </div>
    </section>
  );
};

export default ArtCraftLabBanner;