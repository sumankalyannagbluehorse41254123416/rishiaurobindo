import Image from "next/image";

interface DocumentItem {
  uid: string;
  description?: string;
  file_url?: string;
  thumbnail_url?: string;
}

interface DELEdRecognitionProps {
  data: {
    collection?: {
      documents?: DocumentItem[];
    };
  } | null;
}

function getDescriptionText(description?: string) {
  if (!description) return "";

  return description
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .trim();
}

export default function DELEdRecognitionOrder({
  data,
}: DELEdRecognitionProps) {
  const documents =
    data?.collection?.documents ?? [];

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
            <div key={document.uid}>
              {document.thumbnail_url && (
                <Image
                  className="img-responsive land_img"
                  src={document.thumbnail_url}
                  alt="land_img2"
                  width={800}
                  height={600}
                />
              )}

              {document.file_url && (
                <p className="download_button">
                  <a
                    href={document.file_url}
                    className="btn_theme1"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      width: "230px",
                      height: "84px",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                    }}
                  >
                    {getDescriptionText(
                      document.description
                    )}
                  </a>
                </p>
              )}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}