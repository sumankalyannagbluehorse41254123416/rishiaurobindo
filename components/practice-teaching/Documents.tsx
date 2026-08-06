
"use client";

import Image from "next/image";
import { useState } from "react";

// ==========================================
// TYPES
// ==========================================

interface Subsection {
  title?: string;
  shortDescription?: string;
  description?: string;
  image?: string;
  [key: string]: unknown;
}

interface Section {
  title?: string;
  shortDescription?: string;
  description?: string;
  image?: string;
  bannerImage?: string;
  subsections?: Subsection[];
  [key: string]: unknown;
}

interface DocumentsProps {
  sections?: Section[];
}

// ==========================================
// REMOVE HTML TAGS
// ==========================================

const stripHtml = (html?: string) => {
  if (!html) return "";

  return html
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .trim();
};

// ==========================================
// DOCUMENTS
// ==========================================

export default function Documents({
  sections = [],
}: DocumentsProps) {

  // ==========================================
  // ONLY DOCUMENT SECTIONS
  // ARRAY INDEX 3 TO 7
  // ==========================================

  const documentSections =
    sections.slice(3, 8);

  // ==========================================
  // DEFAULT ACTIVE TAB
  // ==========================================

  const [activeYear, setActiveYear] =
    useState(0);

  return (
    <div className="container">

      {/* =====================================
          DOCUMENTS TITLE
      ====================================== */}

      <h2 className="doc_text">
        Documents
      </h2>

      {/* =====================================
          YEAR TABS
      ====================================== */}

      <div className="tab year_box">

        {documentSections.map(
          (section, index) => {

            const label =
              stripHtml(
                section.shortDescription
              );

            return (
              <button
                key={
                  section.title ||
                  index
                }
                className={`tablinks year_link ${
                  activeYear === index
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  setActiveYear(index)
                }
              >
                {label}
              </button>
            );
          }
        )}

      </div>

      {/* =====================================
          TAB CONTENT
      ====================================== */}

      {documentSections.map(
        (section, index) => {

          const images =
            section.subsections
              ?.map(
                (subsection) =>
                  subsection.image
              )
              .filter(
                (
                  image
                ): image is string =>
                  Boolean(image)
              ) || [];

          return (
            <div
              key={
                section.title ||
                index
              }
              id={
                stripHtml(
                  section.title
                )
              }
              className="tabcontent year_section"
              style={{
                display:
                  activeYear === index
                    ? "block"
                    : "none",
              }}
            >

              {images.map(
                (
                  image,
                  imageIndex
                ) => (
                  <Image
                    key={`${image}-${imageIndex}`}
                    src={image}
                    alt={
                      stripHtml(
                        section.title
                      ) ||
                      "Document image"
                    }
                    width={800}
                    height={600}
                  />
                )
              )}

            </div>
          );
        }
      )}

    </div>
  );
}

