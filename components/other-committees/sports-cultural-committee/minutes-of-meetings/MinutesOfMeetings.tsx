import Image from "next/image";

interface DocumentItem {
  title?: string;
  description?: string;
  file_url?: string;
  download_button_name?: string;
  thumbnail_url?: string;
  sequence?: number;
  status?: string;
}

interface MinutesOfMeetingsProps {
  documents?: DocumentItem[];
}

export default function MinutesOfMeetings({
  documents = [],
}: MinutesOfMeetingsProps) {
  return (
    <section className="land_info_wrap">
      <div className="container">
        <div className="lan_info_inner">

          {documents.map((document) => (
            <div
              key={
                document.sequence ??
                document.title
              }
            >
              {/* Document Thumbnail */}
              {document.thumbnail_url && (
                <Image
                  className="img-responsive land_img"
                  src={document.thumbnail_url}
                  alt={
                    document.title || ""
                  }
                  width={800}
                  height={500}
                />
              )}

              {/* Document Title + Download */}
              <p className="download_button">
                {document.title}

                {document.file_url && (
                  <a
                    href={document.file_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn_theme"
                  >
                    {
                      document.download_button_name ||
                      "Download"
                    }
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