import Image from "next/image";

interface Document {
  id?: number;
  uid?: string;
  title?: string;
  description?: string;
  file_url?: string;
  file_type?: string;
  thumbnail_url?: string | null;
  download_button_name?: string;
  is_downloadable?: boolean;
  sequence?: number;
  status?: string;
}

interface CodeOfConductProps {
  documents?: Document[];
}

export default function CodeOfConduct({
  documents = [],
}: CodeOfConductProps) {
  return (
    <section className="land_info_wrap">
      <div className="container">
        <div className="lan_info_inner">

          {documents.map(
            (document, index) => (
              <div
                className="text-center"
                key={
                  document.uid ||
                  document.id ||
                  index
                }
              >

                {/* Thumbnail */}
                {document.thumbnail_url && (
                  <Image
                    className="img-responsive land_img m-auto"
                    src={
                      document.thumbnail_url
                    }
                    alt={
                      document.title ||
                      "Document thumbnail"
                    }
                    width={800}
                    height={500}
                  />
                )}

                {/* Title + Download */}
                <p className="download_button mt-3">
                  {document.title || ""}

                  {document.file_url &&
                    document.is_downloadable !==
                      false && (
                      <a
                        href={
                          document.file_url
                        }
                        className="btn_theme ml-2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {document.download_button_name ||
                          "Download"}
                      </a>
                    )}
                </p>
              </div>
            )
          )}

        </div>
      </div>
    </section>
  );
}