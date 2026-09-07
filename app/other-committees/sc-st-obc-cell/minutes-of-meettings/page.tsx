import MinutesContent from "@/components/other-committees/sc-st-obc-cell/minutes-of-meettings/MinutesContent";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Minutes of Meetings",
  description:
    "Minutes of Meetings"
};
export default function MinutesOfMeetings() {
  return <>
    <MinutesContent />
  </>;
}