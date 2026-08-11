
interface DocumentItem {
  title?: string;
  file_url?: string;
  download_button_name?: string;
  sequence?: number;
  status?: string;
}

interface RulesAndRegulationProps {
  documents?: DocumentItem[];
}

export default function RulesAndRegulation({
  documents = [],
}: RulesAndRegulationProps) {
  return (
    <div className="container">
      <div className="w-100 mt-3 text-md-center title-bx1">
        <h3 className="one8">Rules and Regulation</h3>
      </div>

      <div className="main-gallery">
        <div className="row mb-5">
          {documents.map((document) => (
            <div
              className="col-lg-6 col-sm-12 text-center"
              key={document.sequence}
            >
              <div className="courses_in">
                {document.title}
              </div>

              <div className="courses_in"></div>

              {document.file_url && (
                <a
                  href={document.file_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-border"
                >
                  {document.download_button_name ||
                    "Download"}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

