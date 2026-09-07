import GovtWebsiteForScholarshipBanner from "@/components/other-committees/sc-st-obc-cell/govt-website-for-scholarship/GovtWebsiteForScholarshipBanner";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Govt Website For Scholarship",
  description:
    "Govt Website For Scholarship"
};
export default function GovtWebsiteForScholarship() {
  return <>
    <GovtWebsiteForScholarshipBanner />
  </>
}