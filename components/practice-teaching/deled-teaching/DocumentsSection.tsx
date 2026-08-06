"use client";

import { useState } from "react";

interface DocumentItem {
  year: string;
  files: string[];
}

const documents: DocumentItem[] = [
  {
    year: "2020",
    files: [
      "https://wip.tezcommerce.com:3304/admin/module/25/1666151944080.jpg",
      "https://wip.tezcommerce.com:3304/admin/module/25/1666151963625.jpeg",
      "https://wip.tezcommerce.com:3304/admin/module/25/1666151983159.jpeg",
      "https://wip.tezcommerce.com:3304/admin/module/25/1666152070748.jpeg",
    ],
  },
  {
    year: "2019",
    files: [
      "https://wip.tezcommerce.com:3304/admin/module/25/1666151864581.jpeg",
      "https://wip.tezcommerce.com:3304/admin/module/25/1666151882709.jpg",
      "https://wip.tezcommerce.com:3304/admin/module/25/1666151901927.jpeg",
      "https://wip.tezcommerce.com:3304/admin/module/25/1666151920626.jpeg",
    ],
  },
  {
    year: "2018",
    files: [
      "https://wip.tezcommerce.com:3304/admin/module/25/1666151779267.jpeg",
      "https://wip.tezcommerce.com:3304/admin/module/25/1666151798715.jpeg",
      "https://wip.tezcommerce.com:3304/admin/module/25/1666151823560.jpeg",
      "https://wip.tezcommerce.com:3304/admin/module/25/1666151837817.jpeg",
    ],
  },
  {
    year: "2017",
    files: [
      "https://wip.tezcommerce.com:3304/admin/module/25/1666151632667.jpg",
      "https://wip.tezcommerce.com:3304/admin/module/25/1666151681390.jpeg",
      "https://wip.tezcommerce.com:3304/admin/module/25/1666151700486.jpeg",
      "https://wip.tezcommerce.com:3304/admin/module/25/1666151738802.jpeg",
    ],
  },
  {
    year: "2016",
    files: [
      "https://wip.tezcommerce.com:3304/admin/module/25/1666151470767.jpeg",
      "https://wip.tezcommerce.com:3304/admin/module/25/1666151504051.jpeg",
      "https://wip.tezcommerce.com:3304/admin/module/25/1666151550355.jpeg",
      "https://wip.tezcommerce.com:3304/admin/module/25/1666151592825.jpeg",
    ],
  },
];

export default function Documents() {
  const [activeYear, setActiveYear] = useState("2020");

  const activeDocuments =
    documents.find((item) => item.year === activeYear)?.files || [];

  return (
    <div className="container">
      <h2 className="doc_text">Documents</h2>

      <div id="contaId-1305" className="contaIdClass">
        <div className="tab year_box">
          {documents.map((item) => (
            <button
              key={item.year}
              type="button"
              className={`tablinks year_link ${
                activeYear === item.year ? "active" : ""
              }`}
              onClick={() => setActiveYear(item.year)}
            >
              {item.year}
            </button>
          ))}
        </div>

        <div className="tabcontent year_section itemId-1305">
          {activeDocuments.map((file, index) => (
            <div key={file}>
              {/* Original image was commented out */}
              {/* <img src="" alt="main-gallery2" /> */}

              <a
                href={file}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-border"
              >
                Download
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}