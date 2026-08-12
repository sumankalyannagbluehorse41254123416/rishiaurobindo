import Image from "next/image";

interface DocumentItem {
  uid: string;
  description?: string;
  file_url?: string;
  thumbnail_url?: string;
}

interface BedRecognitionProps {
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

export default function BedRecognition({
  data,
}: BedRecognitionProps) {
  const approvalDocuments =
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

          {approvalDocuments.map((document) => (
            <div key={document.uid}>
              <Image
                className="img-responsive land_img"
                src={document.thumbnail_url || ""}
                alt="land_img2"
                width={300}
                height={389}
              />

              <p className="download_button">
                <a
                  href={document.file_url}
                  className="btn_theme1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {getDescriptionText(document.description)}
                </a>
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}