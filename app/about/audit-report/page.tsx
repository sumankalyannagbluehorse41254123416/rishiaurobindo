import { headers } from "next/headers";

import AuditReport from "@/components/about/audit-report/AuditReport";

import {
  fetchDocumentCollection,
} from "@/service/fetchdata.services";

type DocumentCollectionData = Awaited<
  ReturnType<typeof fetchDocumentCollection>
>;

export default async function AuditReportPage() {
  const rqHeaders = await headers();

  const host =
    rqHeaders.get("host") || "localhost:3000";

  const headersObj = Object.fromEntries(
    rqHeaders.entries()
  );

  const incomeUid =
    "bbfb32e5-f375-462f-80ea-e61a1a2e51f8";

  const receiptUid =
    "81d67d17-18de-494a-821c-e1377f55566f";

  const balanceUid =
    "ec689955-ccdd-4bd9-a059-21865ea92740";

  let incomeData: DocumentCollectionData | null =
    null;

  let receiptData: DocumentCollectionData | null =
    null;

  let balanceData: DocumentCollectionData | null =
    null;

  try {
    incomeData =
      await fetchDocumentCollection(
        {
          host,
          ...headersObj,
        },
        incomeUid
      );

    receiptData =
      await fetchDocumentCollection(
        {
          host,
          ...headersObj,
        },
        receiptUid
      );

    balanceData =
      await fetchDocumentCollection(
        {
          host,
          ...headersObj,
        },
        balanceUid
      );

    console.log("====================================");
    console.log("INCOME DATA");
    console.log(
      JSON.stringify(incomeData, null, 2)
    );

    console.log("====================================");
    console.log("RECEIPT DATA");
    console.log(
      JSON.stringify(receiptData, null, 2)
    );

    console.log("====================================");
    console.log("BALANCE DATA");
    console.log(
      JSON.stringify(balanceData, null, 2)
    );

    console.log("====================================");
  } catch (error) {
    console.error(error);
  }

  return (
    <AuditReport
      incomeDocuments={
        incomeData?.collection?.documents || []
      }
      receiptDocuments={
        receiptData?.collection?.documents || []
      }
      balanceDocuments={
        balanceData?.collection?.documents || []
      }
    />
  );
}