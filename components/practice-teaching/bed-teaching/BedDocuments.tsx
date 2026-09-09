"use client";

import { Expand } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface YearTab {
  id: string;
  label: string;
}

interface SchoolDocuments {
  schoolId: number;
  years: YearTab[];
}

interface BedDocumentsProps {
  galleryTitle: string;
  galleryImages: string[];
}

// ==========================================
// STATIC SCHOOL DOCUMENT DATA
// ==========================================

const schoolDocuments: SchoolDocuments[] = [
  {
    schoolId: 1587,
    years: [
      { id: "tablink7729", label: "" },
      { id: "tablink7728", label: "" },
    ],
  },
  {
    schoolId: 1615,
    years: [
      { id: "tablink7872", label: "2023" },
      { id: "tablink7871", label: "2022" },
      { id: "tablink7870", label: "2019" },
      { id: "tablink7869", label: "2018" },
      { id: "tablink7868", label: "2017" },
      { id: "tablink7867", label: "2016" },
    ],
  },
  {
    schoolId: 1616,
    years: [
      { id: "tablink7881", label: "2023" },
      { id: "tablink7880", label: "2022" },
      { id: "tablink7879", label: "2019" },
      { id: "tablink7878", label: "2018" },
      { id: "tablink7877", label: "2017" },
      { id: "tablink7876", label: "2016" },
    ],
  },
  { schoolId: 1617, years: [] },
  { schoolId: 1618, years: [] },
  { schoolId: 1619, years: [] },
  { schoolId: 1620, years: [] },
  { schoolId: 1621, years: [] },
  { schoolId: 1622, years: [] },
  { schoolId: 1623, years: [] },
  { schoolId: 1624, years: [] },
  { schoolId: 1625, years: [] },
  { schoolId: 1626, years: [] },
  { schoolId: 1627, years: [] },
  { schoolId: 1628, years: [] },
  { schoolId: 1629, years: [] },
];

export default function BedDocuments({
  galleryTitle,
  galleryImages,
}: BedDocumentsProps) {
  const activeSchoolId = 1587;
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [activeYear, setActiveYear] = useState<Record<number, string>>({
    1587: "tablink7729",
    1615: "tablink7872",
    1616: "tablink7881",
  });

  const handleYearClick = (schoolId: number, yearId: string) => {
    setActiveYear((previous) => ({
      ...previous,
      [schoolId]: yearId,
    }));
  };

  return (
    <div className="container">
      <h2 className="doc_text">Documents</h2>

      {schoolDocuments.map((school) => {
        const isActiveSchool = activeSchoolId === school.schoolId;
        const currentActiveYear =
          activeYear[school.schoolId] || school.years[0]?.id;

        return (
          <div
            key={school.schoolId}
            id={`contaId-${school.schoolId}`}
            className="contaIdClass"
            style={{
              display: isActiveSchool ? "block" : "none",
            }}
          >
            <div className="tab year_box">
              {school.years.map((year) => (
                <button
                  key={year.id}
                  className={`tablinks year_link ${
                    currentActiveYear === year.id ? "active" : ""
                  }`}
                  onClick={() => handleYearClick(school.schoolId, year.id)}
                >
                  {year.label}
                </button>
              ))}
            </div>

            {school.years.map((year) => (
              <div
                key={year.id}
                id={year.id}
                className={`tabcontent year_section itemId-${school.schoolId}`}
                style={{
                  display: currentActiveYear === year.id ? "block" : "none",
                }}
              ></div>
            ))}
          </div>
        );
      })}

      <section>
        <div className="container">
          <div className="gallerybox">
            <h3>{galleryTitle}</h3>
          </div>
        </div>
      </section>

      <section className="land_info_wrap">
        <div className="container main-gallery">
          <div className="row">
            {galleryImages.map((image, index) => (
              <div
                className="col-lg-3 col-md-4 col-6"
                key={`${image}-${index}`}
              >
                <div
                  className="gal-inr"
                  onClick={() => {
                    setCurrentIndex(index);
                    setOpen(true);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <Image
                    src={image}
                    alt={galleryTitle || "Gallery image"}
                    width={800}
                    height={600}
                  />
                  <Expand />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {galleryImages.length > 0 && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={galleryImages.map((src) => ({ src }))}
          index={currentIndex}
          carousel={{ finite: false }}
          styles={{
            container: {
              backgroundColor: "rgba(0, 0, 0, 0.9)",
            },
          }}
        />
      )}
    </div>
  );
}
