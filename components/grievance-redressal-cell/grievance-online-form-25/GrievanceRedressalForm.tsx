import Image from "next/image";

interface Document {
  title?: string;
  file_url?: string;
  thumbnail_url?: string;
  download_button_name?: string;
  is_downloadable?: boolean;
}

interface GrievanceRedressalFormProps {
  documents?: Document[];
}

export default function GrievanceRedressalForm({
  documents = [],
}: GrievanceRedressalFormProps) {
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

          {documents.map((document) => (
            <div key={document.file_url || document.title}>
              {document.thumbnail_url && (
                <Image
                  className="img-responsive land_img"
                  src={document.thumbnail_url}
                  alt={document.title || "Grievance Redressal Form"}
                  width={800}
                  height={500}
                />
              )}

              <p className="download_button">
                {document.title}

                {document.file_url && (
                  <a
                    href={document.file_url}
                    className="btn_theme"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {document.download_button_name || "Download"}
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