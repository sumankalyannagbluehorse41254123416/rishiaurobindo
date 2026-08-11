
import { headers } from "next/headers";

import AdmissionForm from "@/components/admission/admission-form/AdmissionForm";

import {
  fetchDocumentCollection,
} from "@/service/fetchdata.services";

type DocumentCollectionData = Awaited<
  ReturnType<typeof fetchDocumentCollection>
>;

export default async function AdmissionFormPage() {
  const rqHeaders = await headers();

  const host =
    rqHeaders.get("host") || "localhost:3000";

  const headersObj = Object.fromEntries(
    rqHeaders.entries()
  );

  // ==========================================
  // ADMISSION DOCUMENT COLLECTION
  // ==========================================

  const collectionId =
    "01228328-eb5d-42fd-911b-5aa53d5d9f2e";

  let documentData: DocumentCollectionData | null =
    null;

  try {
    documentData = await fetchDocumentCollection(
      {
        host,
        ...headersObj,
      },
      collectionId
    );

    console.log(
      "===================================="
    );

    console.log(
      "ADMISSION FORM DOCUMENT COLLECTION DATA"
    );

    console.log(
      "===================================="
    );

    console.log(
      JSON.stringify(documentData, null, 2)
    );

    console.log(
      "===================================="
    );
  } catch (error) {
    console.error(
      "ADMISSION FORM DOCUMENT API ERROR:",
      error
    );
  }

  const documents =
    documentData?.collection?.documents || [];

  return (
    <>
      <AdmissionForm
        documents={documents}
      />
    </>
  );
}
