import Image from "next/image";

interface Section {
  title?: string;
  image?: string;
}

interface GrievancesProps {
  section?: Section;
}

export default function Grievances({
  section,
}: GrievancesProps) {
  return (
    <section className="land_info_wrap">
      <div className="container">
        <div className="lan_info_inner">
          <div>
            <p></p>
          </div>

          <div>
            <p></p>
          </div>

          <div>
            {section?.image && (
              <Image
                className="img-responsive land_img"
                style={{height:"auto"}}
                src={section.image}
                alt={section.title || "Grievances"}
                width={800}
                height={500}
              />
            )}

            <p className="download_button">
              {section?.title || "Grievances"}{" "}

              {section?.image && (
                <a
                  target="_blank"
                  href={section.image}
                  className="btn_theme"
                  rel="noopener noreferrer"
                >
                  Download
                </a>
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}