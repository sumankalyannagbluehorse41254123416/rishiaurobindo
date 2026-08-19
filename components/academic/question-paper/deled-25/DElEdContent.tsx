"use client";

import { useState } from "react";

interface Subsection {
  title?: string;
  description?: string;
  image?: string;
  file_url?: string;
  subsections?: Subsection[];
}

interface Section {
  title?: string;
  shortDescription?: string;
  longDescription?: string;
  description?: string;
  image?: string;
  subsections?: Subsection[];
}

interface DocumentItem {
  id: number;
  uid: string;
  title?: string;
  description?: string;
  file_url?: string;
  file_type?: string;
  file_size?: number;
  download_button_name?: string;
  download_count?: number;
  is_downloadable?: boolean;
  thumbnail_url?: string;
  sequence?: number;
  status?: string;
}

interface DElEdContentProps {
  sectionData?: Section;
  documents?: DocumentItem[];
}

// ==========================================
// STATIC YEARS
// ==========================================

const years = [
  "2015",
  "2016",
  "2017",
  "2018",
  "2019",
  "2021",
  "2022",
];

// ==========================================
// CLEAN <p></p> AND HTML
// ==========================================

const cleanText = (value?: string): string => {
  if (!value) return "";

  return value
    .replace(/<p[^>]*>/gi, "")
    .replace(/<\/p>/gi, "")
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/<[^>]*>/g, "")
    .replace(/\s+/g, " ")
    .trim();
};

// ==========================================
// PART NAME
// ==========================================

const cleanPartName = (value?: string): string => {
  return cleanText(value);
};

export default function DElEdContent({
  sectionData,
  documents = [],
}: DElEdContentProps) {
  const [activeYear, setActiveYear] =
    useState("2015");

  /*
   * IMPORTANT:
   *
   * API section index 16-এর subsections
   * থেকে PART data আসবে।
   *
   * Year static থাকবে।
   */

  const allSubsections =
    sectionData?.subsections || [];

  /*
   * যদি API-তে year আলাদা subsection হিসেবে থাকে,
   * সেটাও handle হবে।
   *
   * আর যদি সরাসরি PART থাকে,
   * সেটাও রাখা হবে।
   */

  const activeYearParts =
    allSubsections.filter((item) => {
      const title = cleanText(item.title);
      const description =
        cleanText(item.description);

      return (
        title !== activeYear &&
        description !== activeYear
      );
    });

  /*
   * যদি API structure year-wise না হয়,
   * তাহলে সব subsection ব্যবহার হবে।
   */

  const parts =
    activeYearParts.length > 0
      ? activeYearParts
      : allSubsections;

  return (
    <section className="land_info_wrap">
      <div className="container">
        <div className="row">

          {/* ======================================
              YEAR TABS
          ======================================= */}

          <div className="col-lg-3 col-sm-6 col-xs-12">
            <div
              className="nav flex-column nav-pills college_routine"
              role="tablist"
              aria-orientation="vertical"
            >
              {years.map((year) => (
                <button
                  key={year}
                  type="button"
                  className={`nav-link ${
                    activeYear === year
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    setActiveYear(year)
                  }
                >
                  {year}
                </button>
              ))}
            </div>
          </div>

          {/* ======================================
              TABLE
          ======================================= */}

          <div className="col-lg-9 col-sm-6 col-xs-12">
            <div className="tab-content">
              <div className="tab-pane show active">

                <div className="theme_table">

                  <table className="table table-bordered">

                    <thead>
                      <tr>
                        <th>Sl</th>
                        <th>Semmester</th>
                        <th>Action</th>
                      </tr>
                    </thead>

                    <tbody>

                      {parts.length > 0 ? (
                        parts.map(
                          (item, index) => {

                            // ==============================
                            // SL
                            // subsection.description
                            // ==============================

                            const sl =
                              cleanText(
                                item.description
                              ) ||
                              String(index + 1);

                            // ==============================
                            // PART
                            // subsection.title
                            // ==============================

                            const part =
                              cleanPartName(
                                item.title
                              );

                            /*
                             * PDF খোঁজা হবে।
                             *
                             * Document sequence অনুযায়ী
                             * document নেওয়া হবে।
                             */

                            const document =
                              documents.find(
                                (doc) =>
                                  doc.sequence ===
                                  index + 1
                              );

                            const fileUrl =
                              document?.file_url;

                            const buttonName =
                              document?.download_button_name ||
                              "Download";

                            return (
                              <tr
                                key={
                                  `${activeYear}-${index}`
                                }
                              >

                                {/* SL */}
                                <td>
                                  {sl}
                                </td>

                                {/* PART */}
                                <td>
                                  {part}
                                </td>

                                {/* DOWNLOAD */}
                                <td>
                                  {fileUrl ? (
                                    <a
                                      href={fileUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      {buttonName}
                                    </a>
                                  ) : (
                                    <a
                                      className="text-white"
                                      href="#"
                                      onClick={(e) =>
                                        e.preventDefault()
                                      }
                                    >
                                      {buttonName}
                                    </a>
                                  )}
                                </td>

                              </tr>
                            );
                          }
                        )
                      ) : (
                        <tr>
                          <td
                            colSpan={3}
                            className="text-center"
                          >
                            No data available
                          </td>
                        </tr>
                      )}

                    </tbody>

                  </table>

                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}