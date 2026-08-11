import { headers } from "next/headers";

import AdmissionInfo from "@/components/admission/AdmissionInfo";
import PageTitle from "@/components/admission/PageTitle";
import FeeStructure from "@/components/admission/FeeStructure";

import {
  fetchPageData,
  fetchDocumentCollection,
} from "@/service/fetchdata.services";

interface Section {
  title?: string;
  image?: string;
}

interface PageData {
  pageItemdataWithSubsection?: Section[];
  data?: {
    pageItemdataWithSubsection?: Section[];
  };
}

type DocumentCollectionData = Awaited<
  ReturnType<typeof fetchDocumentCollection>
>;

export default async function Admission() {
  const rqHeaders = await headers();

  const host =
    rqHeaders.get("host") || "localhost:3000";

  const headersObj = Object.fromEntries(
    rqHeaders.entries()
  );

  // ==========================================
  // ADMISSION PAGE DATA
  // ==========================================

  const pageId =
    "5a322732-9779-4573-83e5-8714c5dc69be";

  let pageData: PageData = {};

  try {
    pageData = await fetchPageData(
      {
        host,
        ...headersObj,
      },
      pageId
    );
  } catch (error) {
    console.error(
      "ADMISSION PAGE DATA ERROR:",
      error
    );
  }

  const sections =
    pageData.pageItemdataWithSubsection ||
    pageData.data?.pageItemdataWithSubsection ||
    [];

  const admissionSection = sections[0];

  // ==========================================
  // FEE STRUCTURE DOCUMENT COLLECTION
  // ==========================================

  const feeCollectionId =
    "2c33817f-3acd-4342-a037-1a2221eb5b13";

  let feeDocumentData: DocumentCollectionData | null =
    null;

  try {
    feeDocumentData = await fetchDocumentCollection(
      {
        host,
        ...headersObj,
      },
      feeCollectionId
    );
  } catch (error) {
    console.error(
      "FEE STRUCTURE DOCUMENT API ERROR:",
      error
    );
  }

  const feeDocuments =
    feeDocumentData?.collection?.documents || [];

  // ==========================================
  // ADMISSION INFO DOCUMENT COLLECTION
  // ==========================================

  const admissionInfoCollectionId =
    "f4271752-5662-4972-9f46-d963656fa3e9";

  let admissionInfoData: DocumentCollectionData | null =
    null;

  try {
    admissionInfoData =
      await fetchDocumentCollection(
        {
          host,
          ...headersObj,
        },
        admissionInfoCollectionId
      );
  } catch (error) {
    console.error(
      "ADMISSION INFO DOCUMENT API ERROR:",
      error
    );
  }

  const admissionInfoDocuments =
    admissionInfoData?.collection?.documents || [];

  return (
    <div>
      <PageTitle section={admissionSection} />

      <AdmissionInfo
        documents={admissionInfoDocuments}
      />

      <FeeStructure
        documents={feeDocuments}
      />
    </div>
  );
}