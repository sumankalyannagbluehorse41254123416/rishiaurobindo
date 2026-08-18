import { headers } from "next/headers";

import StudentDetails from "@/components/about/student-details/StudentDetails";

import {
  fetchDocumentCollection,
} from "@/service/fetchdata.services";

type DocumentCollectionData = Awaited<
  ReturnType<typeof fetchDocumentCollection>
>;

export default async function StudentDetailsPage() {
  const rqHeaders = await headers();

  const host =
    rqHeaders.get("host") || "localhost:3000";

  const headersObj = Object.fromEntries(
    rqHeaders.entries()
  );

  // ==========================================
  // B.ED DOCUMENT COLLECTION
  // ==========================================

  const bedCollectionId =
    "94eb1d37-76c8-42f8-b80b-2962d52c76c2";

  let bedData: DocumentCollectionData | null = null;

  try {
    bedData = await fetchDocumentCollection(
      {
        host,
        ...headersObj,
      },
      bedCollectionId
    );

    console.log(
      "===================================="
    );

    console.log(
      "B.ED STUDENT DETAILS DATA"
    );

    console.log(
      "===================================="
    );

    console.log(
      JSON.stringify(
        bedData,
        null,
        2
      )
    );

    console.log(
      "===================================="
    );
  } catch (error) {
    console.error(
      "B.ED STUDENT DETAILS API ERROR:",
      error
    );
  }

  // ==========================================
  // D.EL.ED DOCUMENT COLLECTION
  // ==========================================

  const deledCollectionId =
    "7dd8cf69-aa66-4c7e-a0d5-f3a9bd0eb174";

  let deledData: DocumentCollectionData | null =
    null;

  try {
    deledData = await fetchDocumentCollection(
      {
        host,
        ...headersObj,
      },
      deledCollectionId
    );

    console.log(
      "===================================="
    );

    console.log(
      "D.EL.ED STUDENT DETAILS DATA"
    );

    console.log(
      "===================================="
    );

    console.log(
      JSON.stringify(
        deledData,
        null,
        2
      )
    );

    console.log(
      "===================================="
    );
  } catch (error) {
    console.error(
      "D.EL.ED STUDENT DETAILS API ERROR:",
      error
    );
  }

  // ==========================================
  // DOCUMENTS
  // ==========================================

  const bedDocuments =
    bedData?.collection?.documents || [];

  const deledDocuments =
    deledData?.collection?.documents || [];

  return (
    <StudentDetails
      bedDocuments={bedDocuments}
      deledDocuments={deledDocuments}
    />
  );
}