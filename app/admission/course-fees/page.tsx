
import { headers } from "next/headers";

import CourseFeesComponent from "@/components/admission/course-fees/CourseFees";

import {
  fetchDocumentCollection,
} from "@/service/fetchdata.services";

type DocumentCollectionData = Awaited<
  ReturnType<typeof fetchDocumentCollection>
>;

export default async function CourseFees() {
  const rqHeaders = await headers();

  const host =
    rqHeaders.get("host") || "localhost:3000";

  const headersObj = Object.fromEntries(
    rqHeaders.entries()
  );

  // ==========================================
  // COURSE FEES DOCUMENT COLLECTION
  // ==========================================

  const collectionId =
    "b72f446f-15bd-4c02-93c1-5742ec94b928";

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
      "COURSE FEES DOCUMENT COLLECTION DATA"
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
      "COURSE FEES DOCUMENT API ERROR:",
      error
    );
  }

  const documents =
    documentData?.collection?.documents || [];

  return (
    <>
      <CourseFeesComponent
        documents={documents}
      />
    </>
  );
}

