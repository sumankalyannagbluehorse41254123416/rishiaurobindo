"use server";

import axios from "axios";
import crypto from "crypto";

export async function handleSubmitForm(
  host: string | undefined,
  formData: Record<string, unknown>
) {
  const baseurl = process.env.CMS_BASE_URL;
  const key = process.env.CMS_API_KEY;
  const secret = process.env.CMS_API_SECRET;

  if (!baseurl || !key || !secret) {
    throw new Error("CMS environment variables are not configured");
  }

  const timestamp = Math.floor(Date.now());

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
    const res = await axios.post(
      `${baseurl}/form/submit/68e15efd-701f-43d8-9a24-ec770e269a01`,
      formData,
      { headers }
    );

    return res.data;
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      console.log(
        "Error submitting form:",
        err.response?.data || err.message
      );
    } else {
      console.log("Error submitting form:", err);
    }

    throw err;
  }
}