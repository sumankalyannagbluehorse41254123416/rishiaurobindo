// service/fetchFormFields.ts
"use server";

import axios from "axios";
import crypto from "crypto";

interface FetchFormFieldsParams {
  host: string;
}

interface FormField {
  name: string;
  label: string;
  type: string;
  required: boolean;
  placeholder?: string;
}

interface Form {
  id: number;
  title: string;
  status: string;
  description: string;
  title_slug: string;
}

interface FormResponse {
  success: boolean;
  form: Form;
  fields: FormField[];
}

export async function fetchFormFields(
  { host }: FetchFormFieldsParams,
  uid: string
): Promise<FormResponse | null> {
  const baseurl =
    process.env.CMS_BASE_URL || process.env.NEXT_PUBLIC_CMS_BASE_URL;
  const timeStamp = Math.floor(Date.now());

  const key = process.env.CMS_API_KEY || process.env.NEXT_PUBLIC_CMS_API_KEY;
  const secret =
    process.env.CMS_API_SECRET || process.env.NEXT_PUBLIC_CMS_API_SECRET;

  if (!baseurl || !key || !secret) {
    console.error("Missing required environment variables");
    return null;
  }

  const body = { timestamp: timeStamp };
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
    const res = await axios.get<FormResponse>(`${baseurl}/form/fields/${uid}`, {
      headers,
    });
    return res.data;
  } catch (err) {
    console.error("Error fetching form fields:", err);
    return null;
  }
}