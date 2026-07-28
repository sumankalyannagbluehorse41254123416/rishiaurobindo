"use client";

import Image from "next/image";
import Link from "next/link";

export default function OnlineFeesPayment() {
  return (
    <>
      {/* Page Title Section */}
      <section className="page_title_wrap bottom_border">
        <Image
          className="page_title_bg"
          src="/images/page_title_bg.jpg"
          alt="page_title_bg"
          width={1920}
          height={300}
          priority
        />
        <div className="container">
          <h3>ONLINE FEES PAYMENT</h3>
        </div>
      </section>

      {/* Online Fees Content */}
      <section className="land_info_wrap">
        <div className="container">
          <div className="lan_info_inner">
            {/* Process Information */}
            <div>
              <p className="text-center">
                <strong>Process</strong> – Click Check Box to proceed for payment ———- 
                Click on Proceed Button —————Select State———-Select type of Institution———– 
                Click “Go” Button———Select the College Name 
                “Rishi Aurobindo Institute of Teacher Education”———- 
                Click “Submit” Button———Select Payment Category “Fees”———- 
                Fillup the Form———-Then Click “Submit” Button—–Then Payment the Fees
              </p>
            </div>

            {/* Empty Div */}
            <div className="text-center">
              <p className="text-center"></p>
            </div>

            {/* UPI QR Code Title */}
            <div className="text-center">
              <h3>UPI QR CODE</h3>
            </div>

            {/* QR Code Image and Button */}
            <div className="text-center">
              <Image
                className="img-responsive land_img m-auto"
                src="/images/1644408769975.jpg"
                alt="UPI QR Code for Payment"
                width={400}
                height={400}
                priority
              />
              <p className="download_button mt-3">
                <Link 
                  href="https://www.onlinesbi.com/sbicollect/"
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