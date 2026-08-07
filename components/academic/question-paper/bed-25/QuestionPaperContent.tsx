"use client";

import { useState } from "react";

const auditReports = [
  {
    year: "2016",
    semesters: [
      {
        sl: 1,
        semester: "SEMESTER-I",
        link: "https://wip.tezcommerce.com:3304/admin/module/25/1669703791302.pdf",
      },
    ],
  },
  {
    year: "2017",
    semesters: [
      {
        sl: 3,
        semester: "SEMESTER-III",
        link: "https://wip.tezcommerce.com:3304/admin/module/25/1669704670894.pdf",
      },
      {
        sl: 2,
        semester: "SEMESTER-II",
        link: "https://wip.tezcommerce.com:3304/admin/module/25/1669704493656.pdf",
      },
      {
        sl: 1,
        semester: "SEMESTER-I",
        link: "https://wip.tezcommerce.com:3304/admin/module/25/1669704679280.pdf",
      },
    ],
  },
  {
    year: "2018",
    semesters: [
      {
        sl: 4,
        semester: "SEMESTER-IV",
        link: "https://wip.tezcommerce.com:3304/admin/module/25/1669704744544.pdf",
      },
      {
        sl: 3,
        semester: "SEMESTER-III",
        link: "https://wip.tezcommerce.com:3304/admin/module/25/1669704737313.pdf",
      },
      {
        sl: 2,
        semester: "SEMESTER-II",
        link: "https://wip.tezcommerce.com:3304/admin/module/25/1669704730314.pdf",
      },
      {
        sl: 1,
        semester: "SEMESTER-I",
        link: "https://wip.tezcommerce.com:3304/admin/module/25/1669704722133.pdf",
      },
    ],
  },
  {
    year: "2019",
    semesters: [
      {
        sl: 4,
        semester: "SEMESTER-IV",
        link: "https://wip.tezcommerce.com:3304/admin/module/25/1669706312395.pdf",
      },
      {
        sl: 2,
        semester: "SEMESTER-II",
        link: "https://wip.tezcommerce.com:3304/admin/module/25/1669706209190.pdf",
      },
      {
        sl: 1,
        semester: "SEMESTER-I",
        link: "https://wip.tezcommerce.com:3304/admin/module/25/1669705547100.pdf",
      },
    ],
  },
  {
    year: "2020",
    semesters: [
      {
        sl: 4,
        semester: "SEMESTER-IV",
        link: "https://wip.tezcommerce.com:3304/admin/module/25/1669706745560.pdf",
      },
      {
        sl: 3,
        semester: "SEMESTER-III",
        link: "https://wip.tezcommerce.com:3304/admin/module/25/1669706697536.pdf",
      },
      {
        sl: 2,
        semester: "SEMESTER-II",
        link: "https://wip.tezcommerce.com:3304/admin/module/25/1669706602795.pdf",
      },
      {
        sl: 1,
        semester: "SEMESTER-I",
        link: "https://wip.tezcommerce.com:3304/admin/module/25/1669706463423.pdf",
      },
    ],
  },
  {
    year: "2021",
    semesters: [
      {
        sl: 4,
        semester: "SEMESTER-IV",
        link: "https://wip.tezcommerce.com:3304/admin/module/25/1669708694578.pdf",
      },
      {
        sl: 3,
        semester: "SEMESTER-III",
        link: "https://wip.tezcommerce.com:3304/admin/module/25/1669708603864.pdf",
      },
      {
        sl: 2,
        semester: "SEMESTER-II",
        link: "https://wip.tezcommerce.com:3304/admin/module/25/1669708274797.pdf",
      },
      {
        sl: 1,
        semester: "SEMESTER-I",
        link: "",
      },
    ],
  },
  {
    year: "2022",
    semesters: [
      {
        sl: 4,
        semester: "SEMESTER-IV",
        link: "https://wip.tezcommerce.com:3304/admin/module/25/1669709430096.pdf",
      },
      {
        sl: 3,
        semester: "SEMESTER-III",
        link: "",
      },
      {
        sl: 2,
        semester: "SEMESTER-II",
        link: "https://wip.tezcommerce.com:3304/admin/module/25/1669709360530.pdf",
      },
      {
        sl: 1,
        semester: "SEMESTER-I",
        link: "",
      },
    ],
  },
  {
    year: "2023",
    semesters: [],
  },
];

const QuestionPaperContent = () => {
  const [activeYear, setActiveYear] = useState("2016");

  const activeData = auditReports.find(
    (item) => item.year === activeYear
  );

  return (
    <section className="land_info_wrap">
      <div className="container">
        <div className="row">
          {/* Year Tabs */}
          <div className="col-lg-3 col-sm-6 col-xs-12">
            <div
              className="nav flex-column nav-pills college_routine"
              role="tablist"
              aria-orientation="vertical"
            >
              {auditReports.map((item) => (
                <button
                  key={item.year}
                  type="button"
                  className={`nav-link ${
                    activeYear === item.year ? "active" : ""
                  }`}
                  onClick={() => setActiveYear(item.year)}
                >
                  {item.year}
                </button>
              ))}
            </div>
          </div>

          {/* Semester Table */}
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
                      {activeData?.semesters.length ? (
                        activeData.semesters.map((item) => (
                          <tr key={item.sl}>
                            <td>{item.sl}</td>
                            <td>{item.semester}</td>
                            <td>
                              {item.link ? (
                                <a
                                  href={item.link}
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
                        ))
                      ) : (
                        <tr>
                          <td colSpan={3}>No question paper available.</td>
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
};

export default QuestionPaperContent;