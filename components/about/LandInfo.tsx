import Image from "next/image";

interface Section {
  title?: string;
  shortDescription?: string;
  image?: string;
}

interface LandInfoProps {
  section?: Section;
}

export default function LandInfo({
  section,
}: LandInfoProps) {
  return (
    <section className="land_info_wrap">
      <div className="container">
        <div className="lan_info_inner">

          <div>
            {section?.shortDescription && (
              <div
                dangerouslySetInnerHTML={{
                  __html: section.shortDescription,
                }}
              />
            )}
          </div>

          {section?.image && (
            <Image
              className="page_title_bg"
              src={section.image}
              alt={section.title || "About"}
              width={500}
              height={300}
            />
          )}

        </div>
      </div>
    </section>
  );
}