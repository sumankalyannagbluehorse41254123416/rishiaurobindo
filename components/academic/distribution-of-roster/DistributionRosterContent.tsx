import Image from "next/image";

interface DocumentItem {
  id?: number;
  title?: string;
  file_url?: string;
  thumbnail_url?: string;
}

interface Props {
  documents: DocumentItem[];
}

const DistributionRosterContent = ({
  documents,
}: Props) => {
  return (
    <section className="land_info_wrap">
      <div className="container">
        <div className="lan_info_inner">
          {documents.map((item) => (
            <div key={item.id}>
              <Image
                className="img-responsive land_img"
                style={{ height: "auto" }}
                src={item.thumbnail_url || "/images/no-image.png"}
                alt={item.title || "Roster"}
                width={1200}
                height={800}
              />

              <p className="download_button">
                {item.title?.replace(/Download$/i, "").trim()}

                <a
                  href={item.file_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn_theme left-gap"
                >
                  Download
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DistributionRosterContent;