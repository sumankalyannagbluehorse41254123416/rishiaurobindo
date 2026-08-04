"use client";

import Image from "next/image";
import Link from "next/link";

interface Subsection {
  title?: string;
  description?: string;
  image?: string;
  link?: string;
  [key: string]: unknown;
}

interface Section {
  title?: string;
  image?: string;
  subsections?: Subsection[];
  [key: string]: unknown;
}

interface OnlineFeesPaymentProps {
  sections?: Section[];
}

export default function OnlineFeesPayment({
  sections = [],
}: OnlineFeesPaymentProps) {
  // Main section index 0
  const section = sections[0];

  // Subsections
  const subsections = section?.subsections || [];

  // Find description from subsections
  const description = subsections.find(
    (item) => item.description
  )?.description;

  // Find QR Code image from subsections
  const qrCodeImage = subsections.find(
    (item) => item.image
  )?.image;

  // Find QR Code title from subsections
  const qrCodeTitle = subsections.find(
    (item) => item.title
  )?.title;

  // Find payment link from API
  const apiPaymentLink = subsections.find(
    (item) => item.link
  )?.link;

  // Default SBI Collect link
  const paymentLink =
    apiPaymentLink ||
    "https://www.onlinesbi.com/sbicollect/";

  return (
    <>
      {/* ========================================
          PAGE TITLE SECTION
      ======================================== */}
      <section className="page_title_wrap bottom_border">
        <Image
          className="page_title_bg"
          src={
            section?.image ||
            "/images/page_title_bg.jpg"
          }
          alt={
            section?.title ||
            "Online Fees Payment"
          }
          width={1920}
          height={300}
          priority
        />

        <div className="container">
          <h3>
            {section?.title ||
              "ONLINE FEES PAYMENT"}
          </h3>
        </div>
      </section>

      {/* ========================================
          ONLINE FEES CONTENT
      ======================================== */}
      <section className="land_info_wrap">
        <div className="container">
          <div className="lan_info_inner">

            {/* ========================================
                PROCESS INFORMATION
            ======================================== */}
            {description && (
              <div
                className="text-center"
                dangerouslySetInnerHTML={{
                  __html: description,
                }}
              />
            )}

            {/* ========================================
                UPI QR CODE TITLE
            ======================================== */}
            {qrCodeTitle && (
              <div className="text-center">
                <h3>{qrCodeTitle}</h3>
              </div>
            )}

            {/* ========================================
                QR CODE IMAGE
            ======================================== */}
            <div className="text-center">
              {qrCodeImage && (
                <Image
                  className="img-responsive land_img m-auto"
                  src={qrCodeImage}
                  alt={
                    qrCodeTitle ||
                    "UPI QR Code for Payment"
                  }
                  width={400}
                  height={400}
                  priority
                />
              )}

              {/* ========================================
                  SBI COLLECT BUTTON
              ======================================== */}
              <p className="download_button mt-3">
                <Link
                  href={paymentLink}
                  className="btn_theme"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SBI COLLECT
                </Link>
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

