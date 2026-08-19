interface DocumentItem {
  id?: number;
  title?: string;
  description?: string;
  file_url?: string;
  fileUrl?: string;
  file?: string;
  sequence?: number;
  status?: string;
  [key: string]: unknown;
}

interface LearningOutcomesContentsProps {
  documents?: DocumentItem[];
}

export default function LearningOutcomesContents({
  documents = [],
}: LearningOutcomesContentsProps) {
  return (
    <section className="land_info_wrap">
      <div className="container">
        {documents.map((document, index) => {
          const fileUrl =
            document.file_url ||
            document.fileUrl ||
            document.file ||
            "";

          return (
            <div
              className="lan_info_inner"
              key={document.id || index}
            >
              <ul>
                <li>
                  <span>
                    {document.title || ""}
                  </span>
                </li>

                <li>
                  <a
                    target="_blank"
                    href={fileUrl}
                    rel="noopener noreferrer"
                  >
                    Click Here To Download
                  </a>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}