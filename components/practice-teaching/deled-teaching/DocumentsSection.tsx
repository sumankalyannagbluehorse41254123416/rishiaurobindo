"use client";

import { useState } from "react";

interface Subsection {
  image?: string;
}

interface Section {
  title?: string;
  subsections?: Subsection[];
}

interface Props {
  sections: Section[];
}

export default function DocumentsSection({
  sections,
}: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!sections.length) return null;

  const activeSection = sections[activeIndex];

  return (
    <div className="container">
      <h2 className="doc_text">Documents</h2>

      <div
        id="contaId-1305"
        className="contaIdClass"
      >
        {/* Year Buttons */}
        <div className="tab year_box">
          {sections.map((section, index) => (
            <button
              key={index}
              type="button"
              className={`tablinks year_link ${
                activeIndex === index
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                setActiveIndex(index)
              }
            >
              {section.title}
            </button>
          ))}
        </div>

        {/* Download Buttons */}
        <div className="tabcontent year_section itemId-1305">
          {activeSection?.subsections?.map(
            (item, index) =>
              item.image ? (
                <div key={index}>
                  <a
                    href={item.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-border"
                  >
                    Download
                  </a>
                </div>
              ) : null
          )}
        </div>
      </div>
    </div>
  );
}