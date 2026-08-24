import { headers } from "next/headers";
import BiometricAttendanceBanner from "@/components/academic/biometric-attendance/BiometricAttendanceBanner";
import BiometricAttendanceContent from "@/components/academic/biometric-attendance/BiometricAttendanceContent";

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

interface DocumentItem {
  id?: number;
  title?: string;
  description?: string;
  file_url?: string;
  fileUrl?: string;
  file?: string;
  sequence?: number;
  status?: string;
  [key: string]: unknown;
}

interface DocumentCollectionData {
  documents?: DocumentItem[];
  data?: {
    documents?: DocumentItem[];
  };
  collection?: {
    documents?: DocumentItem[];
  };
  [key: string]: unknown;
}

export default async function BiometricAttendance() {
  const rqHeaders = await headers();

  const host = rqHeaders.get("host") || "localhost:3000";
  const headersObj = Object.fromEntries(rqHeaders.entries());

  // ==========================================
  // PAGE UID
  // ==========================================
  const pageId = "d56c22c4-9324-404e-ab20-278ba107c8d6";

  // ==========================================
  // DOCUMENT COLLECTION UIDs
  // ==========================================
  const bedDocumentId = "5559181f-1ad2-4294-9cc0-868b390037ae";
  const deledDocumentId = "f382da2a-1fba-44ed-9a1e-85bf1809a687";
  const teachersStaffDocumentId = "09731c36-be2f-4548-9789-d13d6d8dd58d";

  let pageData: PageData = {};
  let bedDocuments: DocumentCollectionData = {};
  let deledDocuments: DocumentCollectionData = {};
  let teachersStaffDocuments: DocumentCollectionData = {};

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

    console.log("========== BIOMETRIC ATTENDANCE PAGE ==========");
    console.log(JSON.stringify(pageData, null, 2));
  } catch (error) {
    console.error("BIOMETRIC ATTENDANCE PAGE ERROR:", error);
  }

  // ==========================================
  // FETCH DOCUMENT COLLECTIONS
  // ==========================================
  try {
    bedDocuments = await fetchDocumentCollection(
      {
        host,
        ...headersObj,
      },
      bedDocumentId
    );

    console.log("========== B.ED DOCUMENTS ==========");
    console.log(JSON.stringify(bedDocuments, null, 2));
  } catch (error) {
    console.error("B.ED DOCUMENTS ERROR:", error);
  }

  try {
    deledDocuments = await fetchDocumentCollection(
      {
        host,
        ...headersObj,
      },
      deledDocumentId
    );

    console.log("========== D.EL.ED DOCUMENTS ==========");
    console.log(JSON.stringify(deledDocuments, null, 2));
  } catch (error) {
    console.error("D.EL.ED DOCUMENTS ERROR:", error);
  }

  try {
    teachersStaffDocuments = await fetchDocumentCollection(
      {
        host,
        ...headersObj,
      },
      teachersStaffDocumentId
    );

    console.log("========== TEACHERS & STAFF DOCUMENTS ==========");
    console.log(JSON.stringify(teachersStaffDocuments, null, 2));
  } catch (error) {
    console.error("TEACHERS & STAFF DOCUMENTS ERROR:", error);
  }

  // ==========================================
  // PAGE SECTIONS
  // ==========================================
  const sections =
    pageData.pageItemdataWithSubsection ||
    pageData.data?.pageItemdataWithSubsection ||
    [];

  // ==========================================
  // BANNER SECTION (Index 33)
  // ==========================================
  const bannerSection = sections[33];

  // ==========================================
  // B.ED SECTIONS (Index 27, 28)
  // ==========================================
  const bedAcademicSessionSection = sections[27];
  const bedSemesterSection = sections[28];

  // ==========================================
  // D.EL.ED SECTIONS (Index 27, 28)
  // ==========================================
  const deledAcademicSessionSection = sections[27];
  const deledSemesterSection = sections[28];

  // ==========================================
  // TEACHERS & STAFF SECTIONS (Index 29, 30, 31)
  // ==========================================
  const teachersStaffSlSection = sections[29];
  const teachersStaffAcademicSessionSection = sections[30];
  const teachersStaffDetailsSection = sections[31];

  // ==========================================
  // DOCUMENTS
  // ==========================================
  const getDocuments = (collection: DocumentCollectionData): DocumentItem[] => {
    return (
      collection.documents ||
      collection.data?.documents ||
      collection.collection?.documents ||
      []
    );
  };

  const bedDocs = getDocuments(bedDocuments);
  const deledDocs = getDocuments(deledDocuments);
  const teachersStaffDocs = getDocuments(teachersStaffDocuments);

  // ==========================================
  // BANNER DATA
  // ==========================================
  const bannerImage = bannerSection?.bannerImage || bannerSection?.image || "";
  const bannerTitle = bannerSection?.title || "Biometric Attendance";

  return (
    <>
      <BiometricAttendanceBanner
        bannerImage={bannerImage}
        bannerTitle={bannerTitle}
      />
      <BiometricAttendanceContent
        bedAcademicSessionSection={bedAcademicSessionSection}
        bedSemesterSection={bedSemesterSection}
        deledAcademicSessionSection={deledAcademicSessionSection}
        deledSemesterSection={deledSemesterSection}
        teachersStaffSlSection={teachersStaffSlSection}
        teachersStaffAcademicSessionSection={teachersStaffAcademicSessionSection}
        teachersStaffDetailsSection={teachersStaffDetailsSection}
        bedDocuments={bedDocs}
        deledDocuments={deledDocs}
        teachersStaffDocuments={teachersStaffDocs}
      />
    </>
  );
}