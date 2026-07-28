"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

// Menu Data Structure
interface MenuItem {
  title: string;
  href?: string;
  submenu?: {
    title: string;
    href?: string;
    subSubmenu?: { title: string; href: string }[];
  }[];
}

const menuData: MenuItem[] = [
  { title: "HOME", href: "/" },
  {
    title: "ABOUT US",
    submenu: [
      { title: "MISSION & VISION", href: "/about/mission-vision" },
      { title: "CODE OF CONDUCT", href: "/about/code-of-conduct" },
      { title: "COURSE OFFERED", href: "/about/course-offered" },
      { title: "ADMINISTRATION", href: "/about/administration" },
      { title: "MANAGEMENT", href: "/about/management" },
      { title: "TEACHERS", href: "/about/teachers" },
      { title: "NON TEACHING", href: "/about/non-teaching" },
      { title: "STUDENT DETAILS", href: "/about/student-details" },
      { title: "AUDIT REPORT", href: "/about/audit-report" },
      { title: "STAFF DETAILS", href: "/about/staff-details" },
    ],
  },
  {
    title: "INFRASTRUCTURE",
    submenu: [
      { title: "LAND", href: "/land" },
      { title: "BUILDING", href: "/building" },
      { title: "ICT ENABLED CLASSROOM", href: "/ictenabled" },
      {
        title: "LABORATORY",
        subSubmenu: [
          { title: "COMPUTER LAB", href: "/computer-lab" },
          { title: "PHYSICS LAB", href: "/physics-lab" },
          { title: "CHEMISTRY LAB", href: "/chemistry-lab" },
          { title: "BIOLOGY LAB", href: "/biology-lab" },
          { title: "SOCIAL SCIENCE LAB", href: "/social-science-lab" },
          { title: "LANGUAGE LAB", href: "/language-lab" },
          { title: "MATHEMATICS LAB", href: "/mathematics-lab" },
          { title: "ART & CRAFT LAB", href: "/art-craft-lab" },
          { title: "PSYCHOLOGY LAB", href: "/psychology-lab" },
          {
            title: "Health & Physical Education Lab",
            href: "/health-physical-education-lab",
          },
          { title: "Performing Art Lab", href: "/performing-art-lab" },
          {
            title: "Teaching Learning Resource Centre",
            href: "/teaching-learning-resource-centre",
          },
        ],
      },
      { title: "LIBRARY", href: "/library" },
      { title: "HOSTEL", href: "/hostel" },
      { title: "CANTEEN", href: "/canteen" },
      { title: "PLAYGROUND", href: "/playground" },
      { title: "GARDEN", href: "/garden" },
      { title: "AFFIDAVIT", href: "/affidavit" },
    ],
  },
  {
    title: "APPROVAL",
    submenu: [
      {
        title: "RECOGNITION",
        subSubmenu: [
          { title: "B.Ed.", href: "/approval/recognition/bed" },
          { title: "D.El.Ed.", href: "/approval/recognition/deled" },
        ],
      },
      { title: "NCTE", href: "/approval/ncte" },
      {
        title: "AFFILIATION",
        subSubmenu: [
          { title: "B.ED.", href: "/approval/affilation/bed-1" },
          { title: "D.EL.ED.", href: "/approval/affilation/deled-1" },
        ],
      },
    ],
  },
  {
    title: "ACADEMIC",
    submenu: [
      { title: "PROSPECTUS", href: "/academic/prospectus" },
      { title: "SYLLABUS", href: "/academic/syllabus" },
      { title: "POA", href: "/academic/poa" },
      { title: "ACADEMIC CALENDAR", href: "/academic/academic-calendar" },
      { title: "LEARNING OUTCOMES", href: "/academic/learning-outcomes" },
      { title: "COLLEGE ROUTINE", href: "/academic/college-routine" },
      { title: "COLLEGE TEST", href: "/academic/college-test" },
      { title: "FEEDBACK", href: "/academic/feedback" },
      {
        title: "QUESTION PAPER",
        subSubmenu: [
          { title: "B.Ed", href: "/academic/bed-question" },
          { title: "D.El.Ed", href: "/deled-question" },
        ],
      },
      { title: "UNIVERSITY / BOARD RESULT", href: "/university-board-result" },
      { title: "BIOMETRIC ATTENDANCE", href: "/biometric-attendance" },
      { title: "FACILITIES", href: "/facilities" },
      { title: "DISTRIBUTION OF ROSTER", href: "/distribution-of-roster" },
      { title: "USE OF ICT", href: "/use-of-ict" },
    ],
  },
  {
    title: "IQAC CELL",
    submenu: [
      { title: "IQAC Committee Member", href: "/iqac-cell/iqac-committee-member" },
      { title: "MINUTES OF MEETINGS", href: "/iqac-cell/minutes-of-meetings" },
    ],
  },
  { title: "AQAR REPORT", href: "/aqar-report" },
  {
    title: "GRIEVANCE REDRESSAL CELL",
    submenu: [
      { title: "INSTITUTIONAL GUIDELINES", href: "/grievance-redressal-cell/institutional-guidelines-25" },
      { title: "COMMITTEE MEMBERS", href: "/grievance-redressal-cell/committee-members-25" },
      { title: "Awareness Programme", href: "/grievance-redressal-cell/awareness-programme" },
      { title: "Grievance Online Form", href: "/grievance-redressal-cell/grievance-online-form-25" },
      { title: "GRIEVANCE", href: "/grievance-redressal-cell/grievance-25" },
      {
        title: "GRIEVANCE REDRESSED REPORT",
        href: "/grievance-redressal-cell/grievance-redressed-report-25",
      },
      { title: "MINUTES OF MEETINGS/S", href: "/grievance-redressal-cell/minutes-of-meeting-grievance-25" },
    ],
  },
  {
    title: "OTHER COMMITTEES",
    submenu: [
      {
        title: "SC/ST/OBC Cell",
        subSubmenu: [
          { title: "GOVT. CIRCULARS", href: "/govt-circulars" },
          { title: "COMMITTEE MEMBERS", href: "/committee-members-scst" },
          { title: "NOTICE", href: "/notice-scst" },
          { title: "MINUTES OF MEETINGS/S", href: "/minutes-of-meetings-scst" },
          {
            title: "GOVT. WEBSITE FOR SCHOLARSHIP",
            href: "/govt-website-for-scholarship",
          },
        ],
      },
      { title: "PLACEMENT CELL", href: "/placement-cell" },
      { title: "ANTI-RAGING-COMMITTEE", href: "/anti-raging-committee" },
      {
        title: "ANTI RAGING COMMITTEES",
        subSubmenu: [
          { title: "COMMITTEE MEMBERS", href: "/committee-members-antiraging" },
          {
            title: "MINUTES OF MEETINGS/S",
            href: "/minutes-of-meetings-antiraging",
          },
          { title: "CIRCULARS", href: "/circulars" },
          { title: "GRIEVANCE", href: "/grievance-antiraging" },
          {
            title: "GRIEVANCE REDRESSED REPORT",
            href: "/grievance-redressed-report-antiraging",
          },
        ],
      },
      {
        title: "Women Welfare Sexual Harassment Cell",
        subSubmenu: [
          { title: "COMMITTEE MEMBERS", href: "/committee-members-women" },
          {
            title: "MINUTES OF MEETINGS/S",
            href: "/minutes-of-meetings-women",
          },
        ],
      },
      { title: "MINORITY-CELL", href: "/minority-cell" },
      {
        title: "ECO CLUB COMMITTEE",
        subSubmenu: [
          { title: "COMMITTEE MEMBERS", href: "/committee-members-eco" },
        ],
      },
      {
        title: "SPORTS & CULTURAL COMMITTEE",
        subSubmenu: [
          { title: "COMMITTEE MEMBERS", href: "/committee-members-sports" },
          {
            title: "MINUTES OF MEETINGS/S",
            href: "/minutes-of-meetings-sports",
          },
        ],
      },
      {
        title: "Seminar & Webinar Committee",
        subSubmenu: [
          { title: "COMMITTEE MEMBERS", href: "/committee-members-seminar" },
          {
            title: "MINUTES OF MEETINGS/S",
            href: "/minutes-of-meetings-seminar",
          },
        ],
      },
    ],
  },
  {
    title: "NAAC",
    submenu: [
      { title: "COMMITTEE MEMBERS", href: "/naac/committee-members-25" },
      { title: "MINUTES OF MEETINGS", href: "/naac/minutes-25" },
      { title: "SSR REPORT", href: "/naac/ssr-report" },
      { title: "VIDEO & IMAGE OF NAAC VISIT", href: "/naac/video-image-visit" },
      { title: "NAAC REPORT", href: "/naac/naac-report" },
    ],
  },
  {
    title: "ADMISSION",
    submenu: [
      { title: "RULES AND REGULATION", href: "/admission/rules-and-regulation" },
      { title: "COURSE FEES", href: "/admission/course-fees" },
      { title: "ADMISSION FORM", href: "/admission/admission-form" },
    ],
  },
  {
    title: "ACTIVITIES",
    submenu: [
      { title: "WORKSHOP", href: "/activities/workshop-25" },
      { title: "ECO CLUB", href: "/activities/eco-club-25" },
      { title: "SOCIAL WORK", href: "/activities/social-work-25" },
      { title: "EDUCATIONAL SURVEY", href: "/activities/educational-survey-25" },
      { title: "Educational Excursion", href: "/activities/educational-excursion-25" },
      { title: "CULTURAL ACTIVITIES", href: "/activities/cultural-activities-25" },
      { title: "YOGA", href: "/activities/yoga-25" },
      { title: "MAGAZINE", href: "/activities/magazine-25" },
      { title: "SCHOOL ACTIVITIES", href: "/activities/school-activities" },
      {
        title: "AWARNESS",
        subSubmenu: [
          {
            title: "Environmental Awareness",
            href: "/activities/awarness/environmental-awareness",
          },
          { title: "Health Awareness", href: "/activities/awarness/health-awareness" },
          { title: "Data Privacy Awareness", href: "/activities/awarness/data-privacy-awareness" },
          { title: "Vigilance Awareness", href: "/activities/awarness/vigilance-awareness" },
          { title: "Anti Drug Awareness", href: "/activities/awarness/anti-drug-awareness" },
        ],
      },
      { title: "SPORTS", href: "/activities/sports-25" },
      { title: "Seminar Presentation", href: "/activities/seminar-presentation" },
      { title: "NATIONAL & INTERNATIONAL DAY-CELEBRATION", href: "/activities/national" },
    ],
  },
  {
    title: "PRACTICE TEACHING",
    submenu: [
      { title: "BED TEACHING", href: "/practice-teaching/bed-teaching" },
      { title: "DELED TEACHING", href: "/practice-teaching/deled-teaching" },
    ],
  },
  { title: "REMOTE CLASSES", href: "/remote-classes" },
  { title: "ALUMNI", href: "/alumni" },
  {
    title: "PUBLICATION",
    submenu: [
      { title: "ABSTRACT", href: "/publication/abstract-25" },
      { title: "BOOKS", href: "/publication/books-25" },
      { title: "JOURNALS", href: "/publication/journals-25" },
    ],
  },
  { title: "DOWNLOAD", href: "/download" },
  {
    title: "SEMINAR",
    submenu: [
      { title: "NEW SEMINAR", href: "/seminar/new-seminar" },
      { title: "PREVIOUS SEMINAR", href: "/seminar/previous-seminar" },
    ],
  },
  { title: "ONLINE FEES PAYMENT", href: "/online-fees-payment" },
  { title: "GALLERY", href: "/gallery" },
  { title: "PRESS RELEASE", href: "/press-release" },
  { title: "CONTACT US", href: "/contact-us" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [openSubSubmenu, setOpenSubSubmenu] = useState<string | null>(null);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = (): void => {
    setIsMenuOpen(false);
    setOpenSubmenu(null);
    setOpenSubSubmenu(null);
  };

  const handleSubmenuToggle = (title: string) => {
    setOpenSubmenu(openSubmenu === title ? null : title);
  };

  const handleSubSubmenuToggle = (title: string) => {
    setOpenSubSubmenu(openSubSubmenu === title ? null : title);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.documentElement.classList.add("open-rightmenu");
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.classList.remove("open-rightmenu");
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  return (
    <>
      <style jsx>{`
        /* ===== Hamburger Button ===== */
        .hum-one {
          display: flex !important;
          flex-direction: column !important;
          justify-content: space-between !important;
          width: 28px !important;
          height: 22px !important;
          background: transparent !important;
          border: none !important;
          cursor: pointer !important;
          padding: 0 !important;
          float: right !important;
          margin-top: 23px !important;
          margin-left: 30px !important;
          z-index: 1001 !important;
          position: relative !important;
        }

        .hum-one span {
          display: block !important;
          width: 100% !important;
          height: 3px !important;
          background: #333 !important;
          border-radius: 3px !important;
          transition: all 0.3s ease !important;
        }

        .hum-one.active span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px) !important;
        }
        .hum-one.active span:nth-child(2) {
          opacity: 0 !important;
        }
        .hum-one.active span:nth-child(3) {
          transform: rotate(-45deg) translate(7px, -6px) !important;
        }

        /* ===== Side Menu (Match image design) ===== */
        .side-menu {
          position: fixed !important;
          top: 0 !important;
          right: -400px !important;
          width: 350px !important;
          height: 100% !important;
          background: #2b77c0 !important; /* Original Blue Theme */
          z-index: 1000 !important;
          transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
          box-shadow: -2px 0 20px rgba(0, 0, 0, 0.15) !important;
          overflow-y: auto !important;
          padding: 40px 20px !important;
        }

        .side-menu.open {
          right: 0 !important;
        }

        .close-menu {
          position: absolute !important;
          top: 15px !important;
          right: 15px !important;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: #fff !important;
          border: none !important;
          cursor: pointer !important;
          color: #2b77c0 !important;
          font-weight: bold;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1001 !important;
        }

        /* ===== Nested Menu Custom Styling ===== */
        .menu-list {
          list-style: none !important;
          padding: 0 !important;
          margin: 20px 0 0 0 !important;
        }

        .menu-item {
          border-bottom: 1px solid rgba(255, 255, 255, 0.15);
        }

        .menu-link {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 10px;
          color: #ffffff !important;
          font-size: 13px;
          font-weight: 600;
          text-decoration: none !important;
          cursor: pointer;
          transition: background 0.2s;
        }

        .menu-link:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        /* Submenu Styling */
        .submenu-list {
          list-style: none !important;
          padding-left: 15px !important;
          background: rgba(0, 0, 0, 0.15);
        }

        .sub-submenu-list {
          list-style: none !important;
          padding-left: 15px !important;
          background: rgba(0, 0, 0, 0.25);
        }

        .arrow {
          font-size: 10px;
          transition: transform 0.3s;
        }

        .arrow.open {
          transform: rotate(180deg);
        }

        /* Overlay */
        .menu-overlay {
          position: fixed !important;
          top: 0 !important;
          left: 0 !important;
          width: 100% !important;
          height: 100% !important;
          background: rgba(0, 0, 0, 0.5) !important;
          z-index: 999 !important;
          opacity: 0 !important;
          visibility: hidden !important;
          transition:
            opacity 0.4s ease,
            visibility 0.4s ease !important;
        }

        .menu-overlay.active {
          opacity: 1 !important;
          visibility: visible !important;
        }

        @media (max-width: 480px) {
          .side-menu {
            width: 290px !important;
            right: -290px !important;
          }
        }
      `}</style>

      {/* Header Area */}
      <header>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <div className="row" style={{ width: "100%", margin: 0 }}>
              {/* Logo */}
              <div className="col-sm-6 col-md-6">
                <Link className="navbar-brand" href="/">
                  <Image
                    src="/images/logo.png"
                    alt="logo"
                    width={80}
                    height={80}
                  />
                  <span>
                    Rishi Aurobindo
                    <br />
                    Institute of Teacher Education
                  </span>
                </Link>
              </div>

              {/* NAAC Info */}
              <div className="col-sm-3 col-md-3">
                <div className="inst">
                  Accredited by <span>NAAC</span> with Grade <span>'B'</span>
                  <br />
                  Recognized by: <span>NCTE</span>, Affiliated to:{" "}
                  <span>WBUTTEPA &amp; WBBPE</span>
                </div>
              </div>

              {/* Menu Toggle Button */}
              <div className="col-sm-3 col-md-3">
                <button
                  className={`hum-one ${isMenuOpen ? "active" : ""}`}
                  onClick={toggleMenu}
                  type="button"
                  aria-label="Toggle menu"
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Overlay */}
      <div
        className={`menu-overlay ${isMenuOpen ? "active" : ""}`}
        onClick={closeMenu}
      />

      {/* Side Menu Drawer */}
      <div className={`side-menu ${isMenuOpen ? "open" : ""}`}>
        <button className="close-menu" onClick={closeMenu}>
          ✕
        </button>

        <ul className="menu-list">
          {menuData.map((item, index) => (
            <li key={index} className="menu-item">
              {item.submenu ? (
                <>
                  <div
                    className="menu-link"
                    onClick={() => handleSubmenuToggle(item.title)}
                  >
                    <span>{item.title}</span>
                    <span
                      className={`arrow ${
                        openSubmenu === item.title ? "open" : ""
                      }`}
                    >
                      ▼
                    </span>
                  </div>

                  {/* Submenu Levels */}
                  {openSubmenu === item.title && (
                    <ul className="submenu-list">
                      {item.submenu.map((sub, subIndex) => (
                        <li key={subIndex} className="menu-item">
                          {sub.subSubmenu ? (
                            <>
                              <div
                                className="menu-link"
                                onClick={() =>
                                  handleSubSubmenuToggle(sub.title)
                                }
                              >
                                <span>{sub.title}</span>
                                <span
                                  className={`arrow ${
                                    openSubSubmenu === sub.title ? "open" : ""
                                  }`}
                                >
                                  ▼
                                </span>
                              </div>
                              {/* Sub-Submenu Level */}
                              {openSubSubmenu === sub.title && (
                                <ul className="sub-submenu-list">
                                  {sub.subSubmenu.map((subSub, ssIdx) => (
                                    <li key={ssIdx} className="menu-item">
                                      <Link
                                        href={subSub.href}
                                        className="menu-link"
                                        onClick={closeMenu}
                                      >
                                        {subSub.title}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </>
                          ) : (
                            <Link
                              href={sub.href || "#"}
                              className="menu-link"
                              onClick={closeMenu}
                            >
                              {sub.title}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  href={item.href || "#"}
                  className="menu-link"
                  onClick={closeMenu}
                >
                  {item.title}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}