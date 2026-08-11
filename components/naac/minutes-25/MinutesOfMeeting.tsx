interface DocumentData {
  title?: string;
  description?: string;
  file_url?: string;
  download_button_name?: string;
}

interface MinutesOfMeetingProps {
  documents?: DocumentData[];
}

const stripHtml = (value?: string) => {
  return value?.replace(/<[^>]*>/g, "").trim() || "";
};

export default function MinutesOfMeeting({
  documents = [],
}: MinutesOfMeetingProps) {
  return (
    <>
      <style >{`
      .lan_info_inner a {
        width: 100% !important;
      }
        @media (max-width: 768px) {
          .lan_info_inner a {
            width: 100% !important;
          }
        }
      
       `}</style>
      <section className="land_info_wrap">
        <div className="container">
          <div className="lan_info_inner table-responsive">
            <div>
              <table>
                <tbody>
                  <tr>
                    <th>Sl. No</th>
                    <th>Meeting Name</th>
                    <th>Link</th>
                  </tr>

                  {documents.map((document, index) => (
                    <tr key={index}>
                      <td>
                        {stripHtml(document.description) ||
                          index + 1}
                      </td>

                      <td>
                        {document.title || ""}
                      </td>

                      <td>
                        <a
                          href={document.file_url || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-border w-100"
                        >
                          {document.download_button_name ||
                            "Download"}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}