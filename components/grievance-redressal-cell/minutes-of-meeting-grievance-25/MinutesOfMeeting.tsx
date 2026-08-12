interface Document {
  id: number;
  uid: string;
  title?: string;
  description?: string;
  file_url?: string;
  download_button_name?: string;
  is_downloadable?: boolean;
  status?: string;
  sequence?: number;
}

interface MinutesOfMeetingProps {
  documents: Document[];
}

const stripHtml = (html?: string) => {
  if (!html) return "";

  return html
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .trim();
};

export default function MinutesOfMeeting({
  documents,
}: MinutesOfMeetingProps) {
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
              <p className="download_button">
                {stripHtml(document.description) ||
                  document.title}

                {document.file_url &&
                  document.is_downloadable !== false && (
                    <a
                      href={document.file_url}
                      className="btn_theme"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {document.download_button_name ||
                        "Download"}
                    </a>
                  )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}