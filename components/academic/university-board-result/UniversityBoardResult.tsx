"use client";

import { useState } from "react";

const resultData = {
  "B.Ed": [
    {
      sl: 4,
      semester: "1ST SEMESTER",
      title: "2021-2023",
      link: "https://wip.tezcommerce.com:3304/admin/module/25/1669973618145.pdf",
    },
    {
      sl: 3,
      semester: "ALL SEMESTER",
      title: "2020-2022",
      link: "https://wip.tezcommerce.com:3304/admin/module/25/1669973539659.pdf",
    },
    {
      sl: 2,
      semester: "ALL SEMESTER",
      title: "2019-2021",
      link: "https://wip.tezcommerce.com:3304/admin/module/25/1669973242440.pdf",
    },
    {
      sl: 1,
      semester: "ALL SEMESTER",
      title: "2018-2020",
      link: "",
    },
  ],

  "D.El.Ed": [
    {
      sl: 5,
      semester: "PART-I",
      title: "2020-2022",
      link: "",
    },
    {
      sl: 4,
      semester: "FINAL RESULT",
      title: "2019-2021",
      link: "",
    },
    {
      sl: 3,
      semester: "PART-I & II",
      title: "2018-2020",
      link: "",
    },
    {
      sl: 2,
      semester: "PART-I & II",
      title: "2017-2019",
      link: "",
    },
    {
      sl: 1,
      semester: "PART-I & II",
      title: "2016-2018",
      link: "",
    },
  ],
};

const UniversityBoardResultContent = () => {
  const [activeTab, setActiveTab] = useState<"B.Ed" | "D.El.Ed">("B.Ed");

  return (
    <section className="land_info_wrap">
      <div className="container">
        <div className="row">

          {/* Tabs */}
          <div className="col-lg-3 col-sm-6 col-xs-12">
            <div
              className="nav flex-column nav-pills"
              role="tablist"
              aria-orientation="vertical"
            >
              <button
                type="button"
                className={`nav-link ${
                  activeTab === "B.Ed" ? "active" : ""
                }`}
                onClick={() => setActiveTab("B.Ed")}
              >
                B.Ed
              </button>

              <button
                type="button"
                className={`nav-link ${
                  activeTab === "D.El.Ed" ? "active" : ""
                }`}
                onClick={() => setActiveTab("D.El.Ed")}
              >
                D.El.Ed
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="col-lg-9 col-sm-6 col-xs-12">
            <div className="tab-content">
              <div className="tab-pane show active">
                <div className="theme_table">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Sl</th>
                        <th>Semmester</th>
                        <th>Title</th>
                        <th>Action</th>
                      </tr>
                    </thead>

                    <tbody>
                      {resultData[activeTab].map((item) => (
                        <tr key={item.sl}>
                          <td>{item.sl}</td>
                          <td>{item.semester}</td>
                          <td>{item.title}</td>
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
                              <span>Download</span>
                            )}
                          </td>
                        </tr>
                      ))}
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

export default UniversityBoardResultContent;