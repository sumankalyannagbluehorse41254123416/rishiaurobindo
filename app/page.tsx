import BannerSlider from "@/components/BannerSlider";

import WelcomeSection from "@/components/WelcomeSection";

import Achievement from "@/components/Achievement";

import Notice from "@/components/Notice";

import MissionVision from "@/components/MissionVision";

import ChairmanQuote from "@/components/ChairmanQuote";

import CollegeAtGlance from "@/components/CollegeAtGlance";
import GalleryItems from "@/components/GalleryItems";

export default function Home() {
  return (
    <>
      <BannerSlider />
      <WelcomeSection />
      <Achievement />
      <Notice />
      <MissionVision />
      <ChairmanQuote />
      <CollegeAtGlance />
      <GalleryItems />
    </>
  );
}
