interface DocumentItem {
  title?: string;
  description?: string;
  file_url?: string;
  download_button_name?: string;
  sequence?: number;
  status?: string;
}

interface CourseFeesProps {
  documents?: DocumentItem[];
}

export default function CourseFees({
  documents = [],
}: CourseFeesProps) {
  return (
    <div className="container">
      <div className="w-100 mt-3 text-md-center title-bx1">
        <h3 className="one8">Course Fees</h3>
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

              {document.description && (
                <span
                  dangerouslySetInnerHTML={{
                    __html: document.description,
                  }}
                />
              )}

              {" "}

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

