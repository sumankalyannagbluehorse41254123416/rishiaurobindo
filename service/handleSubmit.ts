// service/handleSubmit.ts
"use server";

import axios from "axios";
import crypto from "crypto";

interface SubmitFormData {
  [key: string]: string | undefined;
}

interface SubmitResponse {
  success: boolean;
  message?: string;
  data?: any;
}

export async function handleSubmitForm(
  host: string,
  formData: SubmitFormData
): Promise<SubmitResponse> {
  const baseurl = process.env.CMS_BASE_URL;
  const key = process.env.CMS_API_KEY;
  const secret = process.env.CMS_API_SECRET;
  const timestamp = Math.floor(Date.now());

  if (!baseurl || !key || !secret) {
    throw new Error("Missing required environment variables");
  }

  // Create HMAC SHA-256 signature
  const payload = Buffer.from(JSON.stringify({ timestamp })).toString();
  const signature = crypto
    .createHmac("sha256", secret)
    .update(payload)
    .digest("hex");

  const headers = {
    "X-AUTH-APIKEY": key,
    "X-AUTH-SIGNATURE": signature,
    "X-AUTH-TIMESTAMP": timestamp.toString(),
    "Content-Type": "application/json",
    "X-Host": host || "localhost:3000",
  };

  try {
    const res = await axios.post<SubmitResponse>(
      `${baseurl}/form/submit/f51b0607-3803-4cc6-9ae9-1c104e1cbedc`,
      formData,
      { headers }
    );
    return res.data;
  } catch (err: any) {
    console.log("Error submitting form:", err.response?.data || err.message);
    throw err;
  }
}