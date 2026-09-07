import InfrastructureDetailsBanner from "@/components/Infrastructure/infrastructure-details/InfrastructureDetailsBanner";
import InfrastructureDetailsContent from "@/components/Infrastructure/infrastructure-details/InfrastructureDetailsContent";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Infrastructure Details",
  description:
    "Infrastructure Details"
};
export default function InfrastructureDetails() {
  return (
    <>
      <InfrastructureDetailsBanner />
      <InfrastructureDetailsContent />
    </>
  );
}