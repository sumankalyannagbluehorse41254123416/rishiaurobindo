import Image from "next/image";

interface DocumentItem {
  id: number;
  uid: string;
  title?: string;
  file_url?: string;
  thumbnail_url?: string;
}

interface Props {
  documents?: DocumentItem[];
}

export default function MinutesOfMeetingsSection({
  documents = [],
}: Props) {
  return (
    <section className="land_info_wrap">
      <div className="container">
        <div className="lan_info_inner">

          {documents.map((document) => (
            <div key={document.uid}>

              {document.thumbnail_url && (
                <Image
                  className="img-responsive land_img"
                  src={document.thumbnail_url}
                  alt={document.title || ""}
                  width={800}
                  height={500}
                  style={{ height: "auto" }}
                />
              )}

              <p className="download_button">
                {document.title}

                {document.file_url && (
                  <a
                    href={document.file_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn_theme"
                  >
                    Download
                  </a>
                )}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}