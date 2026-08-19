import Image from "next/image";

interface Document {
  title?: string;
  file_url?: string;
  download_button_name?: string;
  thumbnail_url?: string;
}

interface GrievanceRedressalGuidelineProps {
  documents?: Document[];
}

const GrievanceRedressalGuideline = ({
  documents = [],
}: GrievanceRedressalGuidelineProps) => {
  const document = documents[0];

  if (!document) {
    return null;
  }

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
            {document.thumbnail_url && (
              <Image
                className="img-responsive land_img"
                src={document.thumbnail_url}
                style={{height:"auto"}}
                alt={
                  document.title ||
                  "Grievance Redressal Guideline"
                }
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
                  {document.download_button_name ||
                    "Download"}
                </a>
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrievanceRedressalGuideline;