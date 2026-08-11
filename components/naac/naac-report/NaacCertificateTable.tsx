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

interface NaacCertificateTableProps {
  documents?: DocumentItem[];
}

export default function NaacCertificateTable({
  documents = [],
}: NaacCertificateTableProps) {
  return (
    <section className="land_info_wrap">
      <div className="container">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Sl. No</th>
              <th>CYCLE WISE CERTIFICATE</th>
              <th>Link</th>
            </tr>
          </thead>

          <tbody>
            {documents.length > 0 ? (
              documents.map((document, index) => (
                <tr key={document.uid || document.id}>
                  <td>{index + 1}</td>

                  <td>{document.title || ""}</td>

                  <td>
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
              ))
            ) : (
              <tr>
                <td colSpan={3} className="text-center">
                  No certificates available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
