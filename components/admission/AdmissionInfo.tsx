interface DocumentItem {
  title?: string;
  description?: string;
  file_url?: string;
  download_button_name?: string;
  sequence?: number;
}

interface AdmissionInfoProps {
  documents?: DocumentItem[];
}

export default function AdmissionInfo({
  documents = [],
}: AdmissionInfoProps) {
  const admissionProcedure = documents.find(
    (document) =>
      document.title?.toLowerCase() === "admission procedure"
  );

  const eligibility = documents.find(
    (document) =>
      document.title?.toLowerCase() === "eligibility"
  );

  return (
    <section className="land_info_wrap admission-box">
      <div className="container">
        <div className="row">

          {/* Admission Procedure */}
          <div className="lan_info_inner lan-left col-md-6 col-sm-6">
            <div>
              <p className="admission-text">
                {admissionProcedure?.title || "Admission Procedure"}
              </p>
            </div>

            {/* D.EL.ED */}
            <div>
              <p className="download_button">
                <a
                  href={admissionProcedure?.file_url || "#"}
                  className="btn_theme"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  D.EL.ED
                </a>
              </p>
            </div>

            {/* B.ED */}
            <div>
              <p className="download_button">
                <a
                  href={admissionProcedure?.file_url || "#"}
                  className="btn_theme"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  B.ED
                </a>
              </p>
            </div>
          </div>

          {/* Eligibility */}
          <div className="lan_info_inner lan-right col-md-6 col-sm-6">
            <div>
              <p className="admission-text">
                {eligibility?.title || "Eligibility"}
              </p>
            </div>

            {/* D.EL.ED */}
            <div>
              <p className="download_button">
                <a
                  href={eligibility?.file_url || "#"}
                  className="btn_theme"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  D.EL.ED
                </a>
              </p>
            </div>

            {/* B.ED */}
            <div>
              <p className="download_button">
                <a
                  href={eligibility?.file_url || "#"}
                  className="btn_theme"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  B.ED
                </a>
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}