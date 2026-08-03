import axios from "axios";
import crypto from "crypto";

interface FetchPageParams {
  host?: string;
  [key: string]: unknown;
}

export async function fetchPageData(
  { host, ...rh }: FetchPageParams,
  pageSlug: string
) {
  console.log("host", host);
  console.log("rh", rh);

  const baseurl =
    process.env.CMS_BASE_URL || process.env.NEXT_PUBLIC_CMS_BASE_URL;

  const timeStamp = Date.now();

  const key =
    process.env.CMS_API_KEY || process.env.NEXT_PUBLIC_CMS_API_KEY;

  const secret =
    process.env.CMS_API_SECRET || process.env.NEXT_PUBLIC_CMS_API_SECRET;

  if (!baseurl || !key || !secret) {
    throw new Error("Missing required environment variables");
  }

  const body = {
    timestamp: timeStamp,
  };

  const payload = Buffer.from(JSON.stringify(body)).toString();

  const signature = crypto
    .createHmac("sha256", secret)
    .update(payload)
    .digest("hex");

  const headers = {
    "X-AUTH-APIKEY": key,
    "X-AUTH-SIGNATURE": signature,
    "X-AUTH-TIMESTAMP": timeStamp.toString(),
    "Content-Type": "application/json",
    "x-host": host || "localhost:3000",
  };

  try {
    const response = await axios.get(
      `${baseurl}/page/fetch-single-page/${pageSlug}`,
      { headers }
    );

    return response.data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}
