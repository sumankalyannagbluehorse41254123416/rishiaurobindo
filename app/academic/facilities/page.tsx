import { headers } from "next/headers";
import FacilitiesBanner from "@/components/academic/facilities/FacilitiesBanner";
import FacilitiesContent from "@/components/academic/facilities/FacilitiesContent";
import FacilitiesGallery from "@/components/academic/facilities/FacilitiesGallery";

import {
  fetchPageData,
  fetchDocumentCollection,
} from "@/service/fetchdata.services";

interface SubSection {
  title?: string;
  description?: string;
  image?: string;
  file?: string;
  file_url?: string;
  [key: string]: unknown;
}

interface Section {
  title?: string;
  image?: string;
  bannerImage?: string;
  shortDescription?: string;
  pageItemdataWithSubsection?: SubSection[];
  subSectionData?: SubSection[];
  subsection?: SubSection[];
  subSections?: SubSection[];
  subsections?: SubSection[];
  [key: string]: unknown;
}

interface PageData {
  pageItemdataWithSubsection?: Section[];
  data?: {
    pageItemdataWithSubsection?: Section[];
  };
  [key: string]: unknown;
}

export default async function Facilities() {
  const rqHeaders = await headers();

  const host = rqHeaders.get("host") || "localhost:3000";
  const headersObj = Object.fromEntries(rqHeaders.entries());

  // ==========================================
  // PAGE UID
  // ==========================================
  const pageId = "d56c22c4-9324-404e-ab20-278ba107c8d6";

  let pageData: PageData = {};

  // ==========================================
  // FETCH PAGE DATA
  // ==========================================
  try {
    pageData = await fetchPageData(
      {
        host,
        ...headersObj,
      },
      pageId
    );

    console.log("========== FACILITIES PAGE ==========");
    console.log(JSON.stringify(pageData, null, 2));
  } catch (error) {
    console.error("FACILITIES PAGE ERROR:", error);
  }

  // ==========================================
  // PAGE SECTIONS
  // ==========================================
  const sections =
    pageData.pageItemdataWithSubsection ||
    pageData.data?.pageItemdataWithSubsection ||
    [];

  // ==========================================
  // HELPER FUNCTIONS
  // ==========================================
  const getSubSectionValues = (section?: Section): SubSection[] => {
    if (!section) return [];
    
    return (
      section.pageItemdataWithSubsection ||
      section.subSectionData ||
      section.subsection ||
      section.subSections ||
      section.subsections ||
      []
    );
  };

  // Trim function
  const trimText = (text?: string) => text?.trim() || "";
  
  // Clean array function
  const cleanArray = (arr: string[]) => {
    return arr
      .map(item => trimText(item))
      .filter(item => item !== "");
  };

  // ==========================================
  // BANNER - Section 42
  // ==========================================
  const bannerSection = sections[42];
  const bannerImage = trimText(bannerSection?.bannerImage || bannerSection?.image || "");
  const bannerTitle = trimText(bannerSection?.title || "");

  // ==========================================
  // INTRODUCTION - Section 33
  // ==========================================
  const contentSection = sections[33];
  const contentSubSections = getSubSectionValues(contentSection);
  const contentDescriptions = cleanArray(contentSubSections.map(sub => sub.description || ""));

  // ==========================================
  // PHYSICAL FACILITIES - Section 34
  // ==========================================
  const physicalFacilitiesSection = sections[34];
  const physicalFacilitiesTitle = trimText(physicalFacilitiesSection?.title);
  const physicalFacilitiesSubSections = getSubSectionValues(physicalFacilitiesSection);
  const physicalFacilitiesList = cleanArray(physicalFacilitiesSubSections.map(sub => sub.title || ""));

  // ==========================================
  // ACADEMIC - Section 35
  // ==========================================
  const academicSection = sections[35];
  const academicTitle = trimText(academicSection?.title);
  const academicSubSections = getSubSectionValues(academicSection);
  const academicList = cleanArray(academicSubSections.map(sub => sub.description || ""));

  // ==========================================
  // OBSERVATION DAY - Section 36
  // ==========================================
  const observationDaySection = sections[36];
  const observationTitle = trimText(observationDaySection?.title);
  const observationSubSections = getSubSectionValues(observationDaySection);
  const observationList = cleanArray(observationSubSections.map(sub => sub.description || ""));

  // ==========================================
  // PARA ACADEMIC - Section 37
  // ==========================================
  const paraAcademicSection = sections[37];
  const paraAcademicTitle = trimText(paraAcademicSection?.title);
  const paraAcademicSubSections = getSubSectionValues(paraAcademicSection);
  const paraAcademicList = cleanArray(paraAcademicSubSections.map(sub => sub.description || ""));

  // ==========================================
  // TECHNOLOGY - Section 38
  // ==========================================
  const technologySection = sections[38];
  const technologyTitle = trimText(technologySection?.title);
  const technologySubSections = getSubSectionValues(technologySection);
  const technologyList = cleanArray(technologySubSections.map(sub => sub.description || ""));

  // ==========================================
  // TRANSPORTATION - Section 39
  // ==========================================
  const transportationSection = sections[39];
  const transportationTitle = trimText(transportationSection?.title);
  const transportationDescription = trimText(transportationSection?.shortDescription || "");

  // ==========================================
  // SPORTS - Section 40
  // ==========================================
  const sportsSection = sections[40];
  const sportsTitle = trimText(sportsSection?.title);
  const sportsSubSections = getSubSectionValues(sportsSection);
  const sportsList = cleanArray(sportsSubSections.map(sub => sub.description || ""));

  // ==========================================
  // GALLERY - Section 41
  // ==========================================
  const gallerySection = sections[41];
  const gallerySubSections = getSubSectionValues(gallerySection);
  const galleryImages = gallerySubSections
    .map(sub => trimText(sub.image || sub.file || sub.file_url || ""))
    .filter(image => image !== "");

  return (
    <>
      <FacilitiesBanner
        bannerImage={bannerImage}
        bannerTitle={bannerTitle}
      />
      <FacilitiesContent
        contentDescriptions={contentDescriptions}
        physicalFacilitiesTitle={physicalFacilitiesTitle}
        physicalFacilitiesList={physicalFacilitiesList}
        academicTitle={academicTitle}
        academicList={academicList}
        observationTitle={observationTitle}
        observationList={observationList}
        paraAcademicTitle={paraAcademicTitle}
        paraAcademicList={paraAcademicList}
        technologyTitle={technologyTitle}
        technologyList={technologyList}
        transportationTitle={transportationTitle}
        transportationDescription={transportationDescription}
        sportsTitle={sportsTitle}
        sportsList={sportsList}
      />
      <FacilitiesGallery
        galleryImages={galleryImages}
      />
    </>
  );
}