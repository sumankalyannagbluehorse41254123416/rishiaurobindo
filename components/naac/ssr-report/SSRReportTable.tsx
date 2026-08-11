
interface DocumentItem {
  id: number;
  uid: string;
  title?: string;
  description?: string;
  file_url?: string;
  file_type?: string;
  download_button_name?: string;
  is_downloadable?: boolean;
  sequence?: number;
  status?: string;
}

interface SSRReportTableProps {
  documents?: DocumentItem[];
}

function getSerialNumber(
  description?: string,
  fallback?: number
): string {
  if (!description) {
    return fallback ? String(fallback) : "";
  }

  // <p>1</p> -> 1
  const text = description.replace(/<[^>]*>/g, "").trim();

  return text || (fallback ? String(fallback) : "");
}

export default function SSRReportTable({
  documents = [],
}: SSRReportTableProps) {
  return (
    <section className="land_info_wrap">
      <div className="container">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Sl. No</th>
              <th>CYCLE WISE REPORT</th>
              <th>Link</th>
            </tr>
          </thead>

          <tbody>
            {documents.length > 0 ? (
              documents.map((document, index) => {
                const serialNumber = getSerialNumber(
                  document.description,
                  index + 1
                );

                return (
                  <tr key={document.uid || document.id} >
                    <td style={{textAlign: "center"}}>{serialNumber}</td>

                    <td style={{textAlign: "center"}}>{document.title || ""}</td>

                    <td style={{textAlign: "center"}}>
                      {document.file_url ? (
                        <a
                          href={document.file_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-border"
                        >
                          {document.download_button_name || "View"}
                        </a>
                      ) : (
                        ""
                      )}
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={3} className="text-center">
                  No reports available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

