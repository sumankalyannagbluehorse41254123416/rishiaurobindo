
import PageTitle from "@/components/download/PageTitle";
import DownloadSection from "@/components/download/DownloadSection";
import DownloadSection2 from "@/components/download/DownloadSection2";

import { fetchDocumentCollection } from "@/service/fetchdata.services";

import { headers } from "next/headers";

export default async function Download() {
  const rqHeaders = await headers();

  const host = rqHeaders.get("host") || "localhost:3000";

  const headersObj = Object.fromEntries(rqHeaders.entries());

  // ==========================================
  // COLLECTION IDs
  // ==========================================

  // Admission Form
  const admissionCollectionId =
    "92ff77b1-140c-4480-bd39-948efb41183c";

  // Application for Marksheet
  const marksheetCollectionId =
    "32081c5a-4d27-4925-abab-3ee418134d2e";

  // Application for Migration
  const migrationCollectionId =
    "92d161d9-19bb-477e-be0f-8746af088749";

  // Application for Co-Curricular Activities
  const coCurricularCollectionId =
    "c163f07b-30da-48bf-9e11-85aa80ec7082";

  // ==========================================
  // DATA VARIABLES
  // ==========================================

  let admissionData: any = null;
  let marksheetData: any = null;
  let migrationData: any = null;
  let coCurricularData: any = null;

  // ==========================================
  // ADMISSION FORM API
  // ==========================================

  try {
    admissionData = await fetchDocumentCollection(
      {
        host,
        ...headersObj,
      },
      admissionCollectionId
    );
  } catch (error) {
    console.error("ADMISSION FORM API ERROR:", error);
  }

  // ==========================================
  // MARKSHEET API
  // ==========================================

  try {
    marksheetData = await fetchDocumentCollection(
      {
        host,
        ...headersObj,
      },
      marksheetCollectionId
    );
  } catch (error) {
    console.error("MARKSHEET API ERROR:", error);
  }

  // ==========================================
  // MIGRATION API
  // ==========================================

  try {
    migrationData = await fetchDocumentCollection(
      {
        host,
        ...headersObj,
      },
      migrationCollectionId
    );
  } catch (error) {
    console.error("MIGRATION API ERROR:", error);
  }

  // ==========================================
  // CO-CURRICULAR API
  // ==========================================

  try {
    coCurricularData = await fetchDocumentCollection(
      {
        host,
        ...headersObj,
      },
      coCurricularCollectionId
    );
  } catch (error) {
    console.error("CO-CURRICULAR ACTIVITIES API ERROR:", error);
  }

  // ==========================================
  // RETURN
  // ==========================================

  return (
    <>
      <PageTitle />

      {/* Admission Form + Application for Marksheet */}
      <DownloadSection
        admissionData={admissionData}
        marksheetData={marksheetData}
      />

      {/* Application for Migration + Co-Curricular Activities */}
      <DownloadSection2
        migrationData={migrationData}
        coCurricularData={coCurricularData}
      />
    </>
  );
}

