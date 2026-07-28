"use client";

import Image from "next/image";

const approvalImages = [
  "https://wip.tezcommerce.com:3304/admin/module/25/1644832733996.jpg",
  "https://wip.tezcommerce.com:3304/admin/module/25/1644832716735.jpg",
  "https://wip.tezcommerce.com:3304/admin/module/25/1644832700856.jpg",
];

export default function ApprovalGallery() {
  return (
    <div className="container main-gallery">
      <div className="w-100 mt-3 text-md-center title-bx1">
        <h3 className="one8">Approval</h3>
      </div>

      <div className="row mb-5">
        {approvalImages.map((image, index) => (
          <div className="col-md-3" key={index}>
            <a
              className="gal-inr"
              href={image}
              data-lightbox="Gallery 1"
            >
              <Image
                src={image}
                alt="main-gallery2"
                width={400}
                height={300}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

