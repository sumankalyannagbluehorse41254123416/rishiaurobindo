interface DocumentItem {
  id: number;
  uid: string;
  title?: string;
  description?: string;
  file_url?: string;
  download_button_name?: string;
  sequence?: number;
}

interface FeeStructureProps {
  documents: DocumentItem[];
}

function getDescriptionText(description?: string) {
  if (!description) return "";

  return description
    .replace(/<[^>]*>/g, "")
    .trim();
}

export default function FeeStructure({
  documents,
}: FeeStructureProps) {
  // First 2 = Fee Structure
  const feeDocuments = documents.slice(0, 2);

  // Last 2 = Admission
  const admissionDocuments = documents.slice(2, 4);

  return (
    <section className="land_info_wrap admission-box">
      <div className="container">
        <div className="row">
          {/* Fee Structure - Left */}
          <div className="lan_info_inner lan-left col-md-6 col-sm-6">
            <div>
              <p className="admission-text">
                Fee Structure
              </p>
            </div>

            {feeDocuments.map((document) => (
              <div key={document.uid}>
                <p className="download_button">
                  <a
                    href={document.file_url || "#"}
                    className="btn_theme"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {getDescriptionText(
                      document.description
                    )}
                  </a>
                </p>
              </div>
            ))}
          </div>

          {/* Admission - Right */}
          <div className="lan_info_inner lan-right col-md-6 col-sm-6">
            <div>
              <p className="admission-text">
                Admission
              </p>
            </div>

            {admissionDocuments.map((document) => (
              <div key={document.uid}>
                <p className="download_button">
                  <a
                    href={document.file_url || "#"}
                    className="btn_theme"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {getDescriptionText(
                      document.description
                    )}
                  </a>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

