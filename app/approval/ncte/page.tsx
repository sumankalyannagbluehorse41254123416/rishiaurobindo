import PageTitle from "@/components/approval/ncte/PageTitle";
import NCTEInfo from "@/components/approval/ncte/NCTEInfo";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "NCTE",
  description:
    "NCTE"
};
export default function NCTEPage() {
  return <>
    <PageTitle />
    <NCTEInfo />
  </>;
}