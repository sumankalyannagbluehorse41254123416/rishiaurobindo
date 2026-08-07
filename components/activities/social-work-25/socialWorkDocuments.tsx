import Image from "next/image";

interface DocumentItem {
  id: number;
  title: string;
  file_url: string;
  thumbnail_url: string;
}

interface DocumentCollection {
  name?: string;
  documents?: DocumentItem[];
}

interface DocumentData {
  collection?: DocumentCollection;
}

interface Props {
  documentData: DocumentData | null;
}

export default function SocialWorkDocuments({
  documentData,
}: Props) {
  const collection = documentData?.collection;
  const coverDocument = collection?.documents?.[0];
  const yearDocuments = collection?.documents?.slice(1) || [];

  return (
    <section>
      <div className="container">
        <h3>{collection?.name}</h3>

        <div>
          <p></p>
        </div>

        {coverDocument && (
          <div>
            <Image
              className="img-responsive land_img"
              src={coverDocument.thumbnail_url}
              alt={coverDocument.title}
              width={800}
              height={500}
            />

            <p className="download_button">
              <a
                href={coverDocument.file_url}
                className="btn_theme"
                target="_blank"
                rel="noopener noreferrer"
              >
                DOCUMENTS
              </a>
            </p>
          </div>
        )}
      </div>

      <div className="container">
        <div className="row ml-2">
          {yearDocuments.map((document: DocumentItem) => (
            <div
              className="col-lg-2 col-md-4 col-6"
              key={document.id}
            >
              <p className="download_button">
                <a
                  href={document.file_url}
                  className="btn_theme"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {document.title}
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}