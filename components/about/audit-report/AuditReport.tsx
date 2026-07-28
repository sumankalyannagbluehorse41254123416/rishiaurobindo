"use client";

import { useState } from "react";

const auditTabs = [
  {
    id: "balance-nfo995",
    title: "Income & Expenditure",
    data: [
      {
        sl: 8,
        title: "I&E_2023-2024",
        pdf: "https://wip.tezcommerce.com:3304/admin/module/25/1744008605821.pdf",
      },
      {
        sl: 7,
        title: "I&E_2022-2023",
        pdf: "https://wip.tezcommerce.com:3304/admin/module/25/1724326438808.pdf",
      },
      {
        sl: 6,
        title: "I&E_2021-2022",
        pdf: "https://wip.tezcommerce.com:3304/admin/module/25/1668162672688.pdf",
      },
      {
        sl: 5,
        title: "I&E_2020-2021",
        pdf: "https://wip.tezcommerce.com:3304/admin/module/25/1648184809027.PDF",
      },
      {
        sl: 4,
        title: "I&E_2019-2020",
        pdf: "https://wip.tezcommerce.com:3304/admin/module/25/1648184801198.PDF",
      },
      {
        sl: 3,
        title: "I&E_2018-2019",
        pdf: "https://wip.tezcommerce.com:3304/admin/module/25/1648184792920.PDF",
      },
      {
        sl: 2,
        title: "I&E_2017-2018",
        pdf: "https://wip.tezcommerce.com:3304/admin/module/25/1648184785548.PDF",
      },
      {
        sl: 1,
        title: "I&E_2016-2017",
        pdf: "https://wip.tezcommerce.com:3304/admin/module/25/1648184776602.PDF",
      },
    ],
  },
  {
    id: "balance-nfo996",
    title: "Receipt & Payment",
    data: [
      {
        sl: 9,
        title: "R&P_2023-2024",
        pdf: "https://wip.tezcommerce.com:3304/admin/module/25/1744008658689.pdf",
      },
      {
        sl: 8,
        title: "R&P_2022-2023",
        pdf: "https://wip.tezcommerce.com:3304/admin/module/25/1724326512919.pdf",
      },
      {
        sl: 7,
        title: "R&P_2021-2022",
        pdf: "https://wip.tezcommerce.com:3304/admin/module/25/1668162859984.pdf",
      },
      {
        sl: 6,
        title: "R&P_2020-2021",
        pdf: "https://wip.tezcommerce.com:3304/admin/module/25/1648184949959.PDF",
      },
      {
        sl: 5,
        title: "R&P_2019-2020",
        pdf: "https://wip.tezcommerce.com:3304/admin/module/25/1648184938719.PDF",
      },
      {
        sl: 4,
        title: "R&P_2018-2019",
        pdf: "https://wip.tezcommerce.com:3304/admin/module/25/1648184928467.PDF",
      },
      {
        sl: 3,
        title: "R&P_2017-2018",
        pdf: "https://wip.tezcommerce.com:3304/admin/module/25/1648184914246.PDF",
      },
      {
        sl: 2,
        title: "R&P_2016-2017",
        pdf: "https://wip.tezcommerce.com:3304/admin/module/25/1648184902613.PDF",
      },
      {
        sl: 1,
        title: "R&P_2015-2016",
        pdf: "https://wip.tezcommerce.com:3304/admin/module/25/1648184889421.PDF",
      },
    ],
  },
  {
    id: "balance-nfo516",
    title: "Balance Sheet",
    data: [
      {
        sl: 9,
        title: "BS_2023-2024",
        pdf: "https://wip.tezcommerce.com:3304/admin/module/25/1744008817312.pdf",
      },
      {
        sl: 8,
        title: "BS_2022-2023",
        pdf: "https://wip.tezcommerce.com:3304/admin/module/25/1724326547841.pdf",
      },
      {
        sl: 7,
        title: "BS_2021-2022",
        pdf: "https://wip.tezcommerce.com:3304/admin/module/25/1668162403562.pdf",
      },
      {
        sl: 6,
        title: "BS_2020-2021",
        pdf: "https://wip.tezcommerce.com:3304/admin/module/25/1648185132256.PDF",
      },
      {
        sl: 5,
        title: "BS_2019-2020",
        pdf: "https://wip.tezcommerce.com:3304/admin/module/25/1648185113651.PDF",
      },
      {
        sl: 4,
        title: "BS_2018-2019",
        pdf: "https://wip.tezcommerce.com:3304/admin/module/25/1648185094105.PDF",
      },
      {
        sl: 3,
        title: "BS_2017-2018",
        pdf: "https://wip.tezcommerce.com:3304/admin/module/25/1648185072854.PDF",
      },
      {
        sl: 2,
        title: "BS_2016-2017",
        pdf: "https://wip.tezcommerce.com:3304/admin/module/25/1648185057316.PDF",
      },
      {
        sl: 1,
        title: "BS_2015-2016",
        pdf: "https://wip.tezcommerce.com:3304/admin/module/25/1648185030611.PDF",
      },
    ],
  },
];

export default function AuditReport() {
  const [activeTab, setActiveTab] = useState(auditTabs[0].id);

  const activeTabData = auditTabs.find(
    (tab) => tab.id === activeTab
  );

  return (
    <>
      {/* Page Title */}
      <section>
        <div className="container">
          <div className="w-100 mt-3 text-md-center title-bx1">
            <h3 className="one8">Audit Report</h3>
          </div>
        </div>
      </section>

      {/* Audit Report */}
      <section className="land_info_wrap mb-5">
        <div className="container">
          <div className="row">
            {/* Left Tabs */}
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div
                className="nav flex-column nav-pills"
                id="audit-report-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                {auditTabs.map((tab, index) => (
                  <a
                    key={tab.id}
                    className={`nav-link ${
                      activeTab === tab.id ? "active" : ""
                    }`}
                    id={`audit-tab-${index}`}
                    href={`#${tab.id}`}
                    role="tab"
                    aria-controls={tab.id}
                    aria-selected={activeTab === tab.id}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveTab(tab.id);
                    }}
                  >
                    {tab.title}
                  </a>
                ))}
              </div>
            </div>

            {/* Right Content */}
            <div className="col-lg-9 col-sm-6 col-xs-12">
              <div
                className="tab-content"
                id="audit-report-tabContent"
              >
                {activeTabData && (
                  <div
                    className="tab-pane active"
                    id={activeTabData.id}
                    role="tabpanel"
                  >
                    <div className="theme_table">
                      <table className="table table-bordered">
                        <thead>
                          <tr>
                            <th>Sl</th>
                            <th>Title</th>
                            <th>Action</th>
                          </tr>
                        </thead>

                        <tbody>
                          {activeTabData.data.map((item) => (
                            <tr key={item.sl}>
                              <td>{item.sl}</td>
                              <td>{item.title}</td>
                              <td>
                                <a
                                  href={item.pdf}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  Download
                                </a>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}