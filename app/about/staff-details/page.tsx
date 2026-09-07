import ErrorPage from "@/components/about/staff-details/ErrorPage";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Staff Details",
  description:
    "Staff Details"
};
export default function StaffDetailsPage() {
  return (
    <>
      <ErrorPage />
    </>
  );
}