"use client";

import { useState } from "react";

interface DocumentItem {
  title?: string;
  description?: string;
  file_url?: string;
  fileUrl?: string;
  file?: string;
  [key: string]: unknown;
}

interface QuestionPaperContentProps {
  documents2016: DocumentItem[];
  documents2017: DocumentItem[];
  documents2018: DocumentItem[];
  documents2019: DocumentItem[];
  documents2020: DocumentItem[];
  documents2021: DocumentItem[];
  documents2022: DocumentItem[];
}

const stripHtml = (text?: string) =>
  text
    ?.replace(/<[^>]*>/g, "")
    .trim() || "";

export default function QuestionPaperContent({
  documents2016,
  documents2017,
  documents2018,
  documents2019,
  documents2020,
  documents2021,
  documents2022,
}: QuestionPaperContentProps) {
  const auditReports = [
    {
      year: "2016",
      semesters: documents2016,
    },
    {
      year: "2017",
      semesters: documents2017,
    },
    {
      year: "2018",
      semesters: documents2018,
    },
    {
      year: "2019",
      semesters: documents2019,
    },
    {
      year: "2020",
      semesters: documents2020,
    },
    {
      year: "2021",
      semesters: [
        ...documents2021,
        {
          description: "1",
          title: "SEMESTER-I",
          file_url: "",
        },
      ],
    },
    {
      year: "2022",
      semesters: [
        documents2022[0] || {
          description: "4",
          title: "SEMESTER-IV",
          file_url: "",
        },
        {
          description: "3",
          title: "SEMESTER-III",
          file_url: "",
        },
        documents2022[1] || {
          description: "2",
          title: "SEMESTER-II",
          file_url: "",
        },
        {
          description: "1",
          title: "SEMESTER-I",
          file_url: "",
        },
      ],
    },
    {
      year: "2023",
      semesters: [],
    },
  ];

  const [activeYear, setActiveYear] =
    useState("2016");

  const activeData = auditReports.find(
    (item) => item.year === activeYear
  );

  return (
    <section className="land_info_wrap">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-sm-6 col-xs-12">
            <div
              className="nav flex-column nav-pills college_routine"
              role="tablist"
            >
              {auditReports.map((item) => (
                <button
                  key={item.year}
                  type="button"
                  className={`nav-link ${
                    activeYear === item.year
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    setActiveYear(item.year)
                  }
                >
                  {item.year}
                </button>
              ))}
            </div>
          </div>

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
                      {activeData &&
                      activeData.semesters.length >
                        0 ? (
                        activeData.semesters.map(
                          (
                            item,
                            index
                          ) => (
                            <tr key={index}>
                              <td>
                                {stripHtml(
                                  item.description
                                )}
                              </td>

                              <td>
                                {stripHtml(
                                  item.title
                                )}
                              </td>

                              <td>
                                {item.file_url ||
                                item.fileUrl ||
                                item.file ? (
                                  <a
                                    href={
                                      (item.file_url as string) ||
                                      (item.fileUrl as string) ||
                                      (item.file as string)
                                    }
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    Download
                                  </a>
                                ) : (
                                  "Download"
                                )}
                              </td>
                            </tr>
                          )
                        )
                      ) : (
                        <tr>
                          <td
                            colSpan={3}
                            className="text-center"
                          >
                            No question paper available.
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