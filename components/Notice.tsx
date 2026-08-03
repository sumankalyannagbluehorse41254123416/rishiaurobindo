
import Image from "next/image";

interface NoticeDocument {
  id: number;
  uid: string;
  title: string;
  slug: string;
  description: string;
  file_url: string;
  file_type: string;
  file_size: number;
  download_button_name: string;
  download_count: number;
  is_downloadable: boolean;
  cta_text: string;
  cta_url: string | null;
  thumbnail_url: string | null;
  sequence: number;
  status: string;
}

interface NoticeData {
  success: boolean;
  collection: {
    id: number;
    uid: string;
    name: string;
    slug: string;
    description: string;
    status: string;
    sequence: number;
    document_count: number;
    documents: NoticeDocument[];
  };
}

interface NoticeProps {
  data?: NoticeData | null;
}

export default function Notice({
  data,
}: NoticeProps) {

  // API response থেকে collection নিচ্ছি
  const collection = data?.collection;

  // Documents array
  const notices = collection?.documents || [];

  console.log("NOTICE COLLECTION:", collection);

  console.log("NOTICE DOCUMENTS:", notices);

  return (
    <section className="features-box features-box1">
      <div className="container">

        <div className="row">

          {/* =====================================
              LEFT SIDE - NOTICE
          ====================================== */}

          <div className="col-md-6 mb-sm-0 mb-3">

            <div className="title_box2">

              {/* API:
                  collection.name
              */}

              <h3>
                {collection?.name || "Notice"}
              </h3>


              {/* API:
                  collection.description
              */}

              <p>
                {collection?.description || ""}
              </p>

            </div>


            {/* =====================================
                NOTICE DOCUMENT LIST
            ====================================== */}

            <ul className="notice-part">

              {notices.map(
                (notice) => (

                  <li
                    key={notice.uid}
                  >

                    {/* API:
                        documents[].file_url
                    */}

                    <a
                      href={notice.file_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >

                      {/* API:
                          documents[].title
                      */}

                      {notice.title}

                    </a>

                  </li>

                ),
              )}

            </ul>


            {/* =====================================
                VIEW MORE
            ====================================== */}

            <a
              href="/notice/list"
              className="btn_theme"
            >
              View More
            </a>

          </div>


          {/* =====================================
              RIGHT SIDE IMAGE
          ====================================== */}

          <div className="col-md-6 mb-sm-0">

            <Image
              src="/images/1725270261612.jpg"
              alt={
                collection?.name ||
                "Notice"
              }
              width={575}
              height={500}
            />

          </div>

        </div>

      </div>
    </section>
  );
}

