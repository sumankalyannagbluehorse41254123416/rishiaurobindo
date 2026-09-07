import ActivitiesBanner from "@/components/activities/ActivitiesBanner";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Activities",
  description:
    "Activities"
};
export default function Activities() {
  return <>
    <ActivitiesBanner />
  </>;
}