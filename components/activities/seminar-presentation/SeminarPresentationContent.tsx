"use client";

interface Subsection {
  title?: string;
}

interface Section {
  subsections?: Subsection[];
}

interface Props {
  section?: Section;
}

export default function SeminarPresentationContent({
  section,
}: Props) {
  const topics = section?.subsections ?? [];

  return (
    <section className="land_info_wrap">
      <div className="row">
        {/* Topics Column */}
        <div className="column">
          <div className="container">
            <div className="lan_info_inner">
              <div>
                <p>TOPICS</p>
              </div>

              {topics.map((item, index) => (
                <div key={index}>
                  <p className="download_button">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* File Column */}
        <div className="column">
          <div className="container">
            <div className="lan_info_inner">
              <div>
                <p>FILE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}