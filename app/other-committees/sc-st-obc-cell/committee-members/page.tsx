import CommitteeMembersBanner from "@/components/other-committees/sc-st-obc-cell/committee-members/CommitteeMembersBanner";
import CommitteeMembersContent from "@/components/other-committees/sc-st-obc-cell/committee-members/CommitteeMembersContent ";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Committee Members",
  description:
    "Committee Members"
};
//216946b4-0970-44b3-9449-c43ef2106faf
export default function CommitteeMembers() {
  return <>
    <CommitteeMembersBanner />
    <CommitteeMembersContent />
  </>;
}
