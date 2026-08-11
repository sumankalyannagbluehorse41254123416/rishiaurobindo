
import { headers } from "next/headers";

import RulesAndRegulationComponent from "@/components/admission/rules-and-regulation/RulesAndRegulation";

import {
  fetchDocumentCollection,
} from "@/service/fetchdata.services";

type DocumentCollectionData = Awaited<
  ReturnType<typeof fetchDocumentCollection>
>;

export default async function RulesAndRegulation() {
  const rqHeaders = await headers();

  const host =
    rqHeaders.get("host") || "localhost:3000";

  const headersObj = Object.fromEntries(
    rqHeaders.entries()
  );

  const collectionId =
    "d57dc803-3f01-43b5-8c10-b279d0924442";

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
  } catch (error) {
    console.error(
      "RULES AND REGULATION DOCUMENT API ERROR:",
      error
    );
  }

  const documents =
    documentData?.collection?.documents || [];

  return (
    <>
      <RulesAndRegulationComponent
        documents={documents}
      />
    </>
  );
}

