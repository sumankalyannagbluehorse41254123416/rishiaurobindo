import Link from "next/link";

interface Subsection {
  title?: string;
  description?: string;
  image?: string;
}

interface Section {
  title?: string;
  shortDescription?: string;
  short_description?: string;
  description?: string;
  image?: string;
  subsections?: Subsection[];
}

interface Document {
  file_url?: string;
  title?: string;
  name?: string;
}

interface HostelInfoProps {
  section?: Section;
  documents?: Document[];
}

// ==========================================
// Remove HTML Tags & Decode Basic Entities
// ==========================================

const cleanText = (html?: string) => {
  if (!html) return "";

  return html
    .replace(/<[^>]*>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .trim();
};

export default function HostelInfo({
  section,
  documents = [],
}: HostelInfoProps) {
  // ==========================================
  // HOSTEL TITLE
  // ==========================================

  const hostelTitle = cleanText(section?.title);

  // ==========================================
  // RULES TITLE
  // ==========================================

  const rulesTitle = cleanText(
    section?.shortDescription ||
      section?.short_description
  );

  // ==========================================
  // RULES
  // ==========================================

  const rules = section?.subsections || [];

  // ==========================================
  // DOCUMENT
  // ==========================================

  const document = documents[0];

  const documentTitle =
    cleanText(document?.title) ||
    cleanText(document?.name) ||
    "Hostel Application Form";

  const documentUrl = document?.file_url;

  return (
    <section className="land_info_wrap">
      <div className="container">

        {/* ======================================
            MAIN HOSTEL TITLE
        ====================================== */}

        <div className="title_box">
          <h3>
            {hostelTitle || "Hostel"}
          </h3>
        </div>

        {/* ======================================
            RULES & REGULATIONS
        ====================================== */}

        <div className="lan_info_inner">

          <div className="title_box2">
            <h3>
              {rulesTitle ||
                "Rules & Regulations of Hostel"}
            </h3>
          </div>

          <div
            style={{
              fontFamily: "Times New Roman",
              fontSize: "18px",
              textAlign: "left",
            }}
          >
            <p style={{ lineHeight: "1.5" }}>

              {rules.map((item, index) => {
                const ruleText = cleanText(
                  item.title
                );

                if (!ruleText) {
                  return null;
                }

                return (
                  <span key={index}>
                    {ruleText}
                    <br />
                  </span>
                );
              })}

            </p>
          </div>

        </div>

        {/* ======================================
            HOSTEL APPLICATION FORM
        ====================================== */}

        {documentUrl && (
          <div className="lan_info_inner">

            <div className="title_box2">
              <h3>
                {documentTitle}
              </h3>
            </div>

            <p>
              <Link
                href={documentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-border"
              >
                Download
              </Link>
            </p>

          </div>
        )}

      </div>
    </section>
  );
}