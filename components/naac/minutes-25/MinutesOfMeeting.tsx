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
      <style>{`
  .lan_info_inner table th,
  .lan_info_inner table td {
    text-align: center !important;
    vertical-align: middle !important;
  }

  .lan_info_inner a.btn-border {
    width: 136px !important;
    height: 36px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    .lan_info_inner a.btn-border {
      width: 136px !important;
      height: 36px;
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
                          className="btn-border "
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