import Link from "next/link";

interface Document {
  title?: string;
  file_url?: string;
  download_button_name?: string;
}

interface Props {
  document?: Document;
}

const AffidavitContent = ({
  document,
}: Props) => {
  return (
    <section className="land_info_wrap">
      <div className="container">
        <div className="lan_info_inner">
          <div></div>

          <div></div>

          <div>
            <p className="download_button">
              {document?.title}

              <Link
                href={
                  document?.file_url || "#"
                }
                className="btn_theme"
                target="_blank"
                rel="noopener noreferrer"
              >
                {document?.download_button_name ||
                  "Download"}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AffidavitContent;