"use client";

import Image from "next/image";

interface BiometricAttendanceBannerProps {
  bannerImage?: string;
  bannerTitle?: string;
}

const BiometricAttendanceBanner = ({
  bannerImage,
  bannerTitle,
}: BiometricAttendanceBannerProps) => {
  // Fallback image if no banner image from API
  const defaultImage = "https://www.rabedc.com/img/page_title_bg.jpg";
  const imageUrl = bannerImage || defaultImage;
  const title = bannerTitle || "Biometric Attendance";

  return (
    <section className="page_title_wrap bottom_border">
      <Image
        className="page_title_bg"
        src={imageUrl}
        alt={title}
        width={1920}
        height={400}
        priority
      />
      <div className="container">
        <h3>{title}</h3>
      </div>
    </section>
  );
};

export default BiometricAttendanceBanner;