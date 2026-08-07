"use client";

import Image from "next/image";

interface Document {
  title?: string;
  thumbnail_url?: string;
  file_url?: string;
}

interface Props {
  magazineData?: {
    collection?: {
      documents?: Document[];
    };
  };
}

export default function MagazineContent({
  magazineData,
}: Props) {

  const documents =
    magazineData?.collection?.documents || [];


  return (
    <section className="land_info_wrap">

      {/* Magazine Images / Editions */}

      <div className="container">
        <div className="row">


          {/* 3RD EDITION */}
          <div className="col-lg-6 col-md-4 col-6">

            <p style={{ lineHeight: "5px" }}>
              BAAK
            </p>

            <p style={{ lineHeight: "5px" }}>
              3RD EDITION
            </p>

            <p style={{ lineHeight: "0px" }}>
              &nbsp;
            </p>


            {documents[0]?.thumbnail_url && (
              <Image
                src={documents[0].thumbnail_url}
                alt="3RD EDITION"
                width={500}
                height={500}
              />
            )}

          </div>



          {/* 2ND EDITION */}
          <div className="col-lg-6 col-md-4 col-6">

            <p style={{ lineHeight: "5px" }}>
              BAAK
            </p>

            <p style={{ lineHeight: "5px" }}>
              2ND EDITION
            </p>


            {documents[1]?.thumbnail_url && (
              <Image
                src={documents[1].thumbnail_url}
                alt="2ND EDITION"
                width={500}
                height={500}
              />
            )}

          </div>



          {/* 1ST EDITION */}
          <div className="col-lg-6 col-md-4 col-6">

            <p style={{ lineHeight: "5px" }}>
              BAAK
            </p>

            <p style={{ lineHeight: "5px" }}>
              1ST EDITION
            </p>

            <p style={{ lineHeight: "0px" }}>
              &nbsp;
            </p>

          </div>


        </div>
      </div>




      {/* Download Section */}

      <div className="container">

        <div className="row">


          {/* 3RD EDITION DOWNLOAD */}

          <div className="col-lg-6 col-md-4 col-6">

            <p style={{ lineHeight: "0px" }}>
              &nbsp;
            </p>


            <p className="download_button">

              3RD EDITION{" "}

              <a
                href={documents[0]?.file_url}
                className="btn_theme"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download
              </a>

            </p>

          </div>




          {/* 2ND EDITION DOWNLOAD */}

          <div className="col-lg-6 col-md-4 col-6">

            <p style={{ lineHeight: "0px" }}>
              &nbsp;
            </p>


            <p className="download_button">

              2ND EDITION{" "}

              <a
                href={documents[1]?.file_url}
                className="btn_theme"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download
              </a>

            </p>

          </div>




          {/* Empty Column - Keep Original Layout */}

          <div className="col-lg-6 col-md-4 col-6">

            <p style={{ lineHeight: "0px" }}>
              &nbsp;
            </p>

          </div>


        </div>

      </div>


    </section>
  );
}